import { education } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Education() {
  if (!education || education.length === 0) return null;

  return (
    <Section id="education" eyebrow="Education" heading="Academic background">
      <ol className="space-y-10">
        {education.map((entry, index) => (
          <Reveal
            key={`${entry.institution}-${entry.start}`}
            delay={index * 90}
            as="li"
            className="grid gap-4 border-t border-line pt-6 sm:grid-cols-[160px_1fr]"
          >
            <p className="text-sm text-ink-muted">
              {entry.start} — {entry.end}
            </p>
            <div>
              <h3 className="font-serif text-xl text-ink">{entry.institution}</h3>
              <p className="mt-1 text-sm text-accent-strong">
                {entry.degree}
                {entry.field ? `, ${entry.field}` : ""}
              </p>
              <div className="mt-1 flex flex-wrap gap-x-4 text-xs text-ink-faint">
                {entry.location && <span>{entry.location}</span>}
                {entry.gpa && <span>GPA: {entry.gpa}</span>}
              </div>
              {entry.notes?.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {entry.notes.map((note) => (
                    <li key={note} className="text-sm leading-relaxed text-ink-muted">
                      {note}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
