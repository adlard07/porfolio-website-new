import { experience } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Professional Experience"
      heading="Where I've worked"
      tone="alt"
    >
      <ol className="space-y-14">
        {experience.map((role, index) => (
          <Reveal key={`${role.company}-${role.start}`} delay={index * 90} as="li">
            <div className="grid gap-6 border-t border-line pt-8 lg:grid-cols-[220px_1fr]">
              <div>
                <p className="text-sm font-medium text-ink-muted">
                  {role.start} — {role.end}
                </p>
                {role.location && <p className="mt-1 text-sm text-ink-faint">{role.location}</p>}
                {role.type && (
                  <p className="mt-1 text-xs uppercase tracking-wide text-ink-faint">{role.type}</p>
                )}
              </div>

              <div>
                <h3 className="font-serif text-2xl text-ink">{role.role}</h3>
                <p className="mt-1 text-base text-accent-strong">{role.company}</p>

                {role.summary && (
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
                    {role.summary}
                  </p>
                )}

                {role.achievements?.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {role.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3 text-sm leading-relaxed text-ink">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-strong" aria-hidden="true" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {role.responsibilities?.length > 0 && (
                  <details className="mt-4 text-sm text-ink-muted">
                    <summary className="cursor-pointer select-none text-xs uppercase tracking-wide text-ink-faint transition-colors hover:text-accent-strong">
                      Day-to-day responsibilities
                    </summary>
                    <ul className="mt-3 space-y-1.5 pl-4">
                      {role.responsibilities.map((item) => (
                        <li key={item} className="list-disc leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </details>
                )}

                {role.technologies?.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {role.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
