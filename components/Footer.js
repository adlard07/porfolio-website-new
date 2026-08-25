import { profile, footer } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-alt">
      <div className="container max-w-content py-10">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-serif text-lg text-ink">{profile.name}</p>
            <p className="mt-1 text-sm text-ink-faint">
              © {year} {profile.name}. All rights reserved.
            </p>
          </div>

          <nav aria-label="Contact and social links" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href={`mailto:${profile.email}`} className="text-ink-muted transition-colors hover:text-accent-strong">
              Email
            </a>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent-strong"
            >
              GitHub
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted transition-colors hover:text-accent-strong"
            >
              LinkedIn
            </a>
          </nav>
        </div>

        {footer.note && (
          <p className="mt-8 border-t border-line pt-6 text-center text-xs text-ink-faint">
            {footer.note}
          </p>
        )}
      </div>
    </footer>
  );
}
