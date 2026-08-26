export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const username = 'Ayushi-Stech';
    const userUrl = "https://api.github.com/users/$username";
    const reposUrl = "https://api.github.com/users/$username/repos?per_page=100&sort=updated";

    const [userRes, reposRes] = await Promise.all([
      fetch(userUrl, { headers: { 'User-Agent': 'Ayushi-Portfolio' } }),
      fetch(reposUrl, { headers: { 'User-Agent': 'Ayushi-Portfolio' } })
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return res.status(userRes.status !== 200 ? userRes.status : reposRes.status)
                .json({ success: false, error: 'GitHub API failed' });
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();

    const totalStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);

    const payload = {
      user: {
        login: userData.login,
        avatar_url: userData.avatar_url,
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        total_stars: totalStars
      },
      repos: reposData.map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
        html_url: repo.html_url,
        topics: repo.topics
      }))
    };

    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=7200');
    return res.status(200).json({ success: true, payload, lastUpdated: new Date().toISOString() });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
