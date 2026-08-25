import { highlights } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

/**
 * Compact statistics strip. Only highlights with a non-empty `value`
 * render — populate/blank fields in data/portfolio.js to control which
 * metrics appear.
 */
export function CareerHighlights() {
  const visible = highlights.filter((item) => item.value);

  if (visible.length === 0) return null;

  return (
    <section aria-label="Career highlights" className="border-y border-line bg-surface">
      <div className="container max-w-content py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((item, index) => (
            <Reveal key={item.label} delay={index * 80} className="text-center sm:text-left">
              <p className="font-serif text-4xl text-ink sm:text-5xl">
                {item.value}
                <span className="text-accent-strong">{item.suffix}</span>
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest2 text-ink-muted">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
