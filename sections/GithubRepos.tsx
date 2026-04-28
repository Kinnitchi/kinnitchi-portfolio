import { SiGithub } from "react-icons/si";
import { FiStar, FiGitBranch, FiExternalLink } from "react-icons/fi";
import { personal } from "@/data/portfolio";

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-400",
  JavaScript: "bg-yellow-400",
  Python: "bg-green-500",
  Java: "bg-red-500",
  CSS: "bg-purple-500",
  HTML: "bg-orange-500",
};

async function getRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/Kinnitchi/repos?sort=updated&per_page=6&type=public`,
      {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github.v3+json" },
      },
    );
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export default async function GithubRepos() {
  const repos = await getRepos();

  if (repos.length === 0) return null;

  return (
    <div className="mt-20">
      <div className="flex items-center gap-3 mb-8">
        <SiGithub className="w-5 h-5 text-muted" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-muted">
          Repositórios públicos no GitHub
        </h3>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-xs text-accent hover:text-accent/80 flex items-center gap-1 transition-colors"
          aria-label="Ver todos os repositórios no GitHub"
        >
          Ver todos
          <FiExternalLink className="w-3 h-3" aria-hidden="true" />
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover rounded-xl p-5 flex flex-col gap-3 hover:-translate-y-0.5 transition-all duration-200 group"
            aria-label={`Repositório ${repo.name} no GitHub`}
          >
            {/* Repo name */}
            <span className="font-semibold text-foreground text-sm group-hover:text-accent transition-colors truncate">
              {repo.name}
            </span>

            {/* Description */}
            <p className="text-muted text-xs leading-relaxed line-clamp-2 flex-1">
              {repo.description ?? "Sem descrição"}
            </p>

            {/* Topics */}
            {repo.topics && repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-medium border border-accent/20"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}

            {/* Stats */}
            <div className="flex items-center gap-4 pt-1 border-t border-white/5">
              {repo.language && (
                <span className="flex items-center gap-1.5 text-muted text-xs">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${languageColors[repo.language] ?? "bg-muted"}`}
                    aria-hidden="true"
                  />
                  {repo.language}
                </span>
              )}
              {repo.stargazers_count > 0 && (
                <span className="flex items-center gap-1 text-muted text-xs">
                  <FiStar className="w-3 h-3" aria-hidden="true" />
                  {repo.stargazers_count}
                </span>
              )}
              {repo.forks_count > 0 && (
                <span className="flex items-center gap-1 text-muted text-xs">
                  <FiGitBranch className="w-3 h-3" aria-hidden="true" />
                  {repo.forks_count}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
