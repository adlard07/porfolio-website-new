import { profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ConnectModal } from "@/components/ConnectModal";

/**
 * Intentionally not a navigation bar — there are no section links or a
 * menu. Just a personal brand mark and the two persistent actions
 * (theme + connect) that should be reachable from anywhere on the page.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur">
      <div className="container flex max-w-content items-center justify-between py-4">
        <a
          href="#top"
          className="font-serif text-lg tracking-wide text-ink transition-colors hover:text-accent-strong"
        >
          {profile.name}
        </a>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <ConnectModal />
        </div>
      </div>
    </header>
  );
}
