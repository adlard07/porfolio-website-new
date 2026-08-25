import { publications } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

// Gracefully disappears — renders nothing when there is no publication
// data configured in data/portfolio.js.
export function Publications() {
  if (!publications || publications.length === 0) return null;

  return (
    <Section id="publications" eyebrow="Publications" heading="Writing & research">
      <ol className="space-y-8">
        {publications.map((pub, index) => (
          <Reveal
            key={pub.title}
            delay={index * 90}
            as="li"
            className="border-t border-line pt-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-serif text-xl text-ink">{pub.title}</h3>
              <span className="text-sm text-ink-faint">{pub.date}</span>
            </div>
            <p className="mt-1 text-sm text-accent-strong">
              {pub.venue}
              {pub.authors?.length > 0 ? ` · ${pub.authors.join(", ")}` : ""}
            </p>
            {pub.description && (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                {pub.description}
              </p>
            )}
            {pub.url && (
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong"
              >
                Read more →
              </a>
            )}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
