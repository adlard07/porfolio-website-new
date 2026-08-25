import { fallbackProjects, featuredRepoNames, profile } from "@/data/portfolio";

const GITHUB_API = "https://api.github.com";

/**
 * Server-side only. Fetches public repositories for the configured GitHub
 * user, filters out forks/archived repos, and ranks the remainder by a
 * mix of featured-name priority, stars, and recency.
 *
 * Never throws — on any failure it resolves to the local fallback project
 * list defined in data/portfolio.js, so the UI always has something to
 * render.
 */
export async function getGithubProjects({ limit = 6 } = {}) {
  const username = process.env.GITHUB_USERNAME || profile.githubUsername;

  if (!username || username === "your-github-username") {
    return { projects: fallbackProjects.slice(0, limit), source: "fallback" };
  }

  try {
    const headers = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": `${username}-portfolio-site`,
    };

    // Server-only secret — never exposed to the client bundle.
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch(
      `${GITHUB_API}/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated&type=owner`,
      {
        headers,
        // Revalidate hourly so the section stays fresh without hitting
        // the GitHub API on every request.
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error(`GitHub API responded with ${res.status}`);
    }

    const repos = await res.json();

    if (!Array.isArray(repos) || repos.length === 0) {
      return { projects: fallbackProjects.slice(0, limit), source: "fallback" };
    }

    const eligible = repos.filter(
      (repo) =>
        !repo.fork &&
        !repo.archived &&
        // Exclude the special "username/username" profile-README repo —
        // it's not a project.
        repo.name.toLowerCase() !== username.toLowerCase()
    );

    const ranked = eligible.sort((a, b) => scoreRepo(b) - scoreRepo(a));

    return { projects: ranked.slice(0, limit), source: "github" };
  } catch (error) {
    console.error("[github] falling back to local project data:", error.message);
    return { projects: fallbackProjects.slice(0, limit), source: "fallback" };
  }
}

function scoreRepo(repo) {
  let score = 0;

  const featuredIndex = featuredRepoNames.indexOf(repo.name);
  if (featuredIndex !== -1) {
    // Earlier entries in featuredRepoNames rank higher.
    score += 1000 - featuredIndex * 10;
  }

  score += (repo.stargazers_count || 0) * 3;
  score += (repo.forks_count || 0);

  const daysSinceUpdate =
    (Date.now() - new Date(repo.updated_at).getTime()) / (1000 * 60 * 60 * 24);
  score += Math.max(0, 90 - daysSinceUpdate) * 0.5;

  return score;
}
