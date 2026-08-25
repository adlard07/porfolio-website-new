"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { profile } from "@/data/portfolio";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function ConnectModal() {
  // isOpen only ever flips to true from the button's onClick below, which
  // can't fire during server rendering — so by the time we'd reach
  // document.body in the portal call, we're always safely on the client.
  // No separate "mounted" flag/effect is needed.
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previouslyFocused = document.activeElement;
    const dialog = dialogRef.current;
    const focusables = dialog ? Array.from(dialog.querySelectorAll(FOCUSABLE_SELECTOR)) : [];
    focusables[0]?.focus();

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key === "Tab" && focusables.length > 0) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [isOpen, close]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-accent-strong bg-transparent px-5 py-2 text-sm font-medium tracking-wide text-ink transition-colors duration-300 hover:bg-accent-strong hover:text-bg"
      >
        Connect
      </button>

      {isOpen
        ? createPortal(
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              <div
                className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
                onClick={close}
                aria-hidden="true"
              />
              <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="connect-modal-heading"
                className="relative z-10 w-full max-w-md rounded-sm border border-line bg-surface p-8 shadow-[0_20px_60px_-15px_rgb(0_0_0_/_0.35)] animate-fade-up"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest2 text-accent-strong">
                      Get in touch
                    </p>
                    <h2 id="connect-modal-heading" className="mt-2 font-serif text-2xl text-ink">
                      {"Let's connect"}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close dialog"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-bg-alt hover:text-ink"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                      <path
                        d="M4 4l16 16M20 4L4 20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>

                <ul className="space-y-1 border-t border-line pt-5">
                  <ContactRow
                    label="Email"
                    value={profile.email}
                    href={`mailto:${profile.email}`}
                  />
                  {profile.social.linkedin && (
                    <ContactRow label="LinkedIn" value="View profile" href={profile.social.linkedin} external />
                  )}
                  {profile.social.github && (
                    <ContactRow label="GitHub" value="View profile" href={profile.social.github} external />
                  )}
                  {profile.social.website && (
                    <ContactRow label="Website" value="View site" href={profile.social.website} external />
                  )}
                  {profile.social.twitter && (
                    <ContactRow label="Twitter / X" value="View profile" href={profile.social.twitter} external />
                  )}
                  {profile.social.reddit && (
                    <ContactRow label="Reddit" value="View profile" href={profile.social.reddit} external />
                  )}
                  {profile.social.stackoverflow && (
                    <ContactRow label="Stack Overflow" value="View profile" href={profile.social.stackoverflow} external />
                  )}
                </ul>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}

function ContactRow({ label, value, href, external }) {
  return (
    <li className="border-b border-line py-3 last:border-b-0">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="flex items-center justify-between gap-4 text-sm text-ink transition-colors hover:text-accent-strong"
        aria-label={`${label}: ${value}`}
      >
        <span className="text-ink-muted">{label}</span>
        <span className="truncate font-medium">{value}</span>
      </a>
    </li>
  );
}
