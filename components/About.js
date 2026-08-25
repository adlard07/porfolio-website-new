import { about } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Section id="about" eyebrow={about.eyebrow} heading={about.heading} tone="alt">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal delay={100} className="space-y-5">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-ink-muted sm:text-lg">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={200} className="space-y-8">
          {about.strengths?.length > 0 && (
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest2 text-accent-strong">
                Strengths
              </h3>
              <ul className="mt-4 space-y-2 border-t border-line pt-4">
                {about.strengths.map((item) => (
                  <li key={item} className="text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {about.focusAreas?.length > 0 && (
            <div>
              <h3 className="text-xs font-medium uppercase tracking-widest2 text-accent-strong">
                Focus areas
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2 border-t border-line pt-4">
                {about.focusAreas.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
