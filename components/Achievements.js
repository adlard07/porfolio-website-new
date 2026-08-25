import { achievements } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

// Gracefully disappears when there is no recognition data configured.
export function Achievements() {
  if (!achievements || achievements.length === 0) return null;

  return (
    <Section id="recognition" eyebrow="Recognition" heading="Awards & achievements" tone="alt">
      <ul className="grid gap-6 sm:grid-cols-2">
        {achievements.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 80}
            as="li"
            className="border border-line p-6"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-serif text-lg text-ink">{item.title}</h3>
              <span className="text-xs text-ink-faint">{item.date}</span>
            </div>
            <p className="mt-1 text-sm text-accent-strong">{item.issuer}</p>
            {item.description && (
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.description}</p>
            )}
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 hover:text-accent-strong hover:decoration-accent-strong"
              >
                Learn more →
              </a>
            )}
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
