import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Github, Star, GitFork, Code, ExternalLink, Users, Sparkles, FolderGit2 } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork?: boolean;
  updated_at: string;
  topics?: string[];
}

interface UserProfile {
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
}

const languageColors: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Kotlin: "#A97BFF",
  Shell: "#89e051",
  Jupyter: "#DA5B0B",
};

const GITHUB_USERNAME = "Ayushi-Stech";

const GitHubSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState<Repo[]>([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        // Try the serverless backend first
        let dataFound = false;
        try {
          const res = await fetch('/api/github');
          if (res.ok) {
            const json = await res.json();
            if (json.success && json.payload) {
              setProfile(json.payload.user);
              setRepos(json.payload.repos.filter((r: any) => !r.fork).slice(0, 9));
              dataFound = true;
            }
          }
        } catch (backendError) {
          console.warn("Backend API fallback", backendError);
        }

        // Fallback to public GitHub API if backend failed
        if (!dataFound) {
          const [repoRes, profileRes] = await Promise.all([
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`),
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          ]);

          if (repoRes.ok && profileRes.ok) {
            const repoData: Repo[] = await repoRes.json();
            const profileData: UserProfile = await profileRes.json();
            setProfile(profileData);
            if (Array.isArray(repoData)) {
              setRepos(repoData.filter((r) => !r.fork).slice(0, 9));
            }
          } else {
            setError(true);
          }
        }
      } catch (e) {
        console.error("GitHub API failed:", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHub();
  }, []);

  const totalStars = repos.reduce((a, r) => a + (r.stargazers_count || 0), 0);
  const totalForks = repos.reduce((a, r) => a + (r.forks_count || 0), 0);

  return (
    <section id="github" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <Sparkles size={13} />
            <span>Open Source & Repositories</span>
          </div>
          <h2 className="section-title">GitHub Activity</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Live repositories, open-source codebases, and contribution history for @{GITHUB_USERNAME}
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-10">
             <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          </div>
        ) : error ? (
           <div className="flex justify-center py-10 text-muted-foreground">
             GitHub data temporarily unavailable. Please try again later.
           </div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <motion.a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="glass-card flex items-center gap-3 px-5 py-3 rounded-2xl border border-primary/25 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/40">
                  <img
                    src={profile?.avatar_url || "/ayushi.jpeg"}
                    alt="GitHub Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">@{GITHUB_USERNAME}</p>
                  <p className="text-xs text-primary font-medium">View GitHub Profile</p>
                </div>
              </motion.a>

              {[
                { label: "Public Repositories", value: profile?.public_repos ?? repos.length, icon: <Code size={16} />, color: "text-primary" },
                { label: "Followers", value: profile?.followers ?? 0, icon: <Users size={16} />, color: "text-secondary" },
                { label: "Fetched Stars", value: totalStars, icon: <Star size={16} />, color: "text-yellow-400" },
                { label: "Fetched Forks", value: totalForks, icon: <GitFork size={16} />, color: "text-emerald-400" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="glass-card px-5 py-3 rounded-2xl flex items-center gap-3 border border-white/10 hover:border-primary/30 transition-all"
                >
                  <span className={stat.color}>{stat.icon}</span>
                  <div>
                    <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-[11px] text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="relative max-w-4xl mx-auto mb-14"
            >
              <div className="relative glass-card rounded-3xl p-6 md:p-8 border border-primary/25 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">GitHub Contribution Graph</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                    Live Data
                  </span>
                </div>

                <div className="rounded-2xl overflow-x-auto p-4 bg-black/40 border border-white/5 custom-scrollbar">
                  <img
                    src={`https://ghchart.rshah.org/8B5CF6/${GITHUB_USERNAME}`}
                    alt="GitHub Contribution Calendar"
                    className="w-full min-w-[650px]"
                    style={{ filter: "saturate(1.3) brightness(1.1)" }}
                  />
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <FolderGit2 size={20} className="text-primary" />
                  <span>Recent Repositories</span>
                </h3>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                >
                  <span>Explore all</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {repos.map((r, i) => (
                  <motion.div
                    key={r.id || i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="glass-card p-6 rounded-3xl border border-white/10 hover:border-primary/40 flex flex-col justify-between transition-all hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                          {r.name}
                        </h4>
                        <a
                          href={r.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                          title="Open GitHub Repository"
                        >
                          <ExternalLink size={13} />
                        </a>
                      </div>

                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                        {r.description || "Open source project repository."}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-muted-foreground">
                      {r.language ? (
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: languageColors[r.language] || "#8B5CF6" }}
                          />
                          <span className="text-[11px] font-medium">{r.language}</span>
                        </div>
                      ) : (
                        <span />
                      )}

                      <div className="flex items-center gap-3 text-[11px]">
                        <span className="flex items-center gap-1">
                          <Star size={12} className="text-yellow-400" />
                          {r.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={12} />
                          {r.forks_count}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-xs md:text-sm text-white shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #8B5CF6, #D946EF)" }}
              >
                <Github size={16} />
                <span>Visit Full GitHub Profile</span>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHubSection;
