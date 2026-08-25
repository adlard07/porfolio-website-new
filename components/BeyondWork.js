import { beyondWork } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

/**
 * Deliberately warmer than the rest of the page — a serif pull-quote
 * feel with a slightly different rhythm, while staying inside the same
 * restrained palette so it never breaks the overall tone.
 */
export function BeyondWork() {
  if (!beyondWork?.items || beyondWork.items.length === 0) return null;

  return (
    <section id="beyond-work" className="scroll-mt-24 border-y border-line bg-surface">
      <div className="container max-w-content py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest2 text-accent-strong">
            {beyondWork.eyebrow}
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">{beyondWork.heading}</h2>
          {beyondWork.intro && (
            <p className="mt-4 text-base leading-relaxed text-ink-muted">{beyondWork.intro}</p>
          )}
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {beyondWork.items.map((item, index) => (
            <Reveal
              key={item.label}
              delay={(index % 3) * 90}
              className="border-l-2 border-accent/40 pl-5"
            >
              <p className="font-serif text-lg text-ink">{item.label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
