import { Reveal } from "@/components/Reveal";

/**
 * Consistent section shell: id anchor, max-width container, eyebrow +
 * heading treatment, and optional lede paragraph. Every top-level
 * section on the page renders through this so spacing and rhythm stay
 * uniform without repeating markup.
 */
export function Section({
  id,
  eyebrow,
  heading,
  description,
  children,
  className = "",
  tone = "default",
  headingAs: HeadingTag = "h2",
}) {
  const toneClasses =
    tone === "alt" ? "bg-bg-alt" : tone === "surface" ? "bg-surface" : "bg-bg";

  return (
    <section id={id} className={`scroll-mt-24 ${toneClasses} ${className}`} aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className="container max-w-content py-20 sm:py-28">
        {(eyebrow || heading || description) && (
          <Reveal className="max-w-2xl">
            {eyebrow && (
              <p className="mb-3 text-xs font-medium uppercase tracking-widest2 text-accent-strong">
                {eyebrow}
              </p>
            )}
            {heading && (
              <HeadingTag
                id={id ? `${id}-heading` : undefined}
                className="font-serif text-3xl leading-tight text-ink sm:text-4xl text-balance"
              >
                {heading}
              </HeadingTag>
            )}
            {description && (
              <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
                {description}
              </p>
            )}
          </Reveal>
        )}
        <div className={(eyebrow || heading || description) ? "mt-12" : ""}>{children}</div>
      </div>
    </section>
  );
}
