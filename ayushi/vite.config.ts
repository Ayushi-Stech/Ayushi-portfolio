import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import http from 'http';
import https from 'https';

let cachedData: any = null;
let cacheTime = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

const codolioProxyPlugin = () => ({
  name: 'codolio-proxy',
  configureServer(server: any) {
    server.middlewares.use('/api/codolio', (req: http.IncomingMessage, res: http.ServerResponse) => {
      const now = Date.now();
      const urlObj = new URL(req.url || '', `http://${req.headers.host}`);
      const forceRefresh = urlObj.searchParams.get('refresh') === 'true';

      if (!forceRefresh && cachedData && (now - cacheTime < CACHE_TTL_MS)) {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('X-Cache', 'HIT');
        return res.end(JSON.stringify({ success: true, payload: cachedData, cachedAt: cacheTime, lastUpdated: new Date(cacheTime).toISOString() }));
      }

      const fetchAPI = (url: string) => {
        https.get(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'application/json, text/plain, */*'
          }
        }, (response) => {
          if ([301, 302, 307, 308].includes(response.statusCode as number)) {
            const redirectUrl = response.headers.location;
            if (redirectUrl) {
              return fetchAPI(redirectUrl);
            }
          }

          let data = '';
          response.on('data', (chunk) => { data += chunk; });
          response.on('end', () => {
            try {
              const json = JSON.parse(data);
              cachedData = json;
              cacheTime = Date.now();
              res.setHeader('Content-Type', 'application/json');
              res.setHeader('X-Cache', 'MISS');
              res.end(JSON.stringify({ success: true, payload: json, cachedAt: cacheTime, lastUpdated: new Date(cacheTime).toISOString() }));
            } catch (e: any) {
              if (cachedData) {
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('X-Cache', 'STALE');
                return res.end(JSON.stringify({ success: true, payload: cachedData, cachedAt: cacheTime, lastUpdated: new Date(cacheTime).toISOString(), warning: 'Served from stale cache due to parse error' }));
              }
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Failed to parse JSON from Codolio', details: e.message }));
            }
          });
        }).on('error', (e) => {
          if (cachedData) {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('X-Cache', 'STALE');
            return res.end(JSON.stringify({ success: true, payload: cachedData, cachedAt: cacheTime, lastUpdated: new Date(cacheTime).toISOString(), warning: 'Served from stale cache due to network error' }));
          }
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: 'Network error connecting to Codolio', details: e.message }));
        });
      };

      fetchAPI('https://api.codolio.com/profile?userKey=amitsharma4_5');
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger(), codolioProxyPlugin()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
