"use client";

import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-line-strong hover:bg-bg-alt focus-visible:outline-offset-2"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`h-[18px] w-[18px] transition-all duration-300 ${isDark ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
        style={{ position: isDark ? "absolute" : "static" }}
      >
        <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <line x1="12" y1="1.5" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22.5" />
          <line x1="1.5" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22.5" y2="12" />
          <line x1="4.4" y1="4.4" x2="6.1" y2="6.1" />
          <line x1="17.9" y1="17.9" x2="19.6" y2="19.6" />
          <line x1="4.4" y1="19.6" x2="6.1" y2="17.9" />
          <line x1="17.9" y1="6.1" x2="19.6" y2="4.4" />
        </g>
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={`h-[16px] w-[16px] transition-all duration-300 ${isDark ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
        style={{ position: isDark ? "static" : "absolute" }}
      >
        <path
          fill="currentColor"
          d="M20.4 14.7A8.5 8.5 0 1 1 9.3 3.6a7 7 0 1 0 11.1 11.1Z"
        />
      </svg>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
