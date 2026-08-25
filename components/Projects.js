import { getGithubProjects } from "@/lib/github";
import { profile } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";

/**
 * Server component — fetches (and ranks) GitHub repositories at request
 * time via lib/github.js, which itself falls back to local sample data
 * if the GitHub API is unreachable or rate-limited.
 */
export async function Projects() {
  const { projects } = await getGithubProjects({ limit: 6 });

  if (!projects || projects.length === 0) return null;

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      heading="Featured projects"
      description="Pulled directly from GitHub, favouring recent and starred work."
      tone="alt"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} delay={(index % 3) * 90} />
        ))}
      </div>

      <Reveal delay={200} className="mt-10">
        <a
          href={`https://github.com/${profile.githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong"
        >
          View complete GitHub profile →
        </a>
      </Reveal>
    </Section>
  );
}
