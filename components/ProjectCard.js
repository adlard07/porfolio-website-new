import { Reveal } from "@/components/Reveal";

function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  } catch (error) {
    return "";
  }
}

export function ProjectCard({ project, delay = 0 }) {
  const {
    name,
    description,
    html_url: htmlUrl,
    homepage,
    language,
    topics = [],
    stargazers_count: stars = 0,
    forks_count: forks = 0,
    updated_at: updatedAt,
  } = project;

  const title = name
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <Reveal delay={delay} as="article" className="group flex h-full flex-col border border-line p-6 transition-colors duration-300 hover:border-line-strong">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-xl text-ink">{title}</h3>
        {language && (
          <span className="shrink-0 rounded-full border border-line px-2.5 py-0.5 text-xs text-ink-muted">
            {language}
          </span>
        )}
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
        {description || "No description provided yet."}
      </p>

      {topics.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {topics.slice(0, 4).map((topic) => (
            <li key={topic} className="text-xs text-accent-strong">
              #{topic}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex items-center gap-4 text-xs text-ink-faint">
        <span className="inline-flex items-center gap-1" title="Stars">
          <StarIcon /> {stars}
        </span>
        <span className="inline-flex items-center gap-1" title="Forks">
          <ForkIcon /> {forks}
        </span>
        {updatedAt && <span>Updated {formatDate(updatedAt)}</span>}
      </div>

      <div className="mt-5 flex items-center gap-5 border-t border-line pt-4 text-sm font-medium">
        <a
          href={htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong"
        >
          View code
        </a>
        {homepage && (
          <a
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong"
          >
            Live demo
          </a>
        )}
      </div>
    </Reveal>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
      <path
        fill="currentColor"
        d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01Z"
      />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        d="M7 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM12 16.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM7 7.5v3a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-3M12 13.5v3"
      />
    </svg>
  );
}
