import Image from "next/image";
import { hero, profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  const resumeIsExternal = /^https?:\/\//i.test(profile.resumeUrl || "");

  return (
    <section id="top" className="relative overflow-hidden border-b border-line paper-texture">
      <div className="container relative grid max-w-[88rem] gap-10 py-24 sm:py-32 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-40">
        <div>
          {hero.eyebrow && (
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-widest2 text-accent-strong">
                {hero.eyebrow}
              </p>
            </Reveal>
          )}

          <Reveal delay={100}>
            <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 font-serif text-xl text-ink-muted sm:text-2xl">
              {profile.title}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-6 max-w-2xl text-justify text-base leading-relaxed text-ink-muted sm:text-lg">
              {hero.intro}
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-muted">
              {profile.location && (
                <span className="inline-flex items-center gap-2">
                  <DotIcon />
                  {profile.location}
                </span>
              )}
              {profile.availability && (
                <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent-strong">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {profile.availability}
                </span>
              )}
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong"
              >
                GitHub
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong"
              >
                LinkedIn
              </a>
              {profile.social.medium && (
                <a
                  href={profile.social.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent-strong"
                >
                  Medium
                </a>
              )}
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  {...(resumeIsExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : { download: true })}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-strong px-5 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                >
                  {resumeIsExternal ? "View Resume" : "Download Resume"}
                </a>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={250} className="hidden lg:flex lg:justify-end">
          {/* Capped to the text column's rendered height (measured ~518–
              602px across breakpoints) so the portrait never reads taller
              than the copy beside it; width follows from the photo's real
              781x1040 ratio, so nothing is cropped or distorted. */}
          <Image
            src="/self-2.jpeg"
            alt={profile.name}
            width={781}
            height={1040}
            sizes="380px"
            quality={90}
            priority
            className="h-auto max-h-[500px] w-auto rounded-3xl border border-line-strong"
          />
        </Reveal>
      </div>

      <a
        href="#about"
        className="group absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest2 text-ink-faint transition-colors hover:text-accent-strong sm:flex"
        aria-label={hero.scrollLabel}
      >
        <span>{hero.scrollLabel}</span>
        <span className="h-10 w-px bg-line-strong transition-colors group-hover:bg-accent-strong" aria-hidden="true" />
      </a>
    </section>
  );
}

function DotIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5 text-ink-faint">
      <path
        fill="currentColor"
        d="M12 2C7.6 2 4 5.6 4 10c0 5.6 8 12 8 12s8-6.4 8-12c0-4.4-3.6-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
      />
    </svg>
  );
}
