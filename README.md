# Portfolio — Editorial Career Page

A premium, single-page personal portfolio built with **Next.js (App Router)**,
**vanilla JavaScript**, and **Tailwind CSS**. The visual direction is
deliberately "Old Money" — editorial, understated, earthy — rather than a
typical SaaS-style developer portfolio.

## Stack

- **Next.js 16** (App Router, JS only — no TypeScript)
- **React 19**, functional components + hooks only
- **Tailwind CSS 3** with CSS-variable-driven light/dark theming
- **next/font** for self-hosted Google Fonts (Cormorant Garamond + Inter)
- Native `IntersectionObserver` for scroll reveals — no animation library
- GitHub REST API for the Projects section (server-side fetch, optional token)

No database, CMS, or backend is required — content lives in one file.

---

## Getting started

```bash
npm install
cp .env.example .env.local   # then edit .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (next/core-web-vitals)
```

---

## Making it yours

Everything you need to personalise lives in **[data/portfolio.js](data/portfolio.js)**.
Every field marked `// TODO` in that file is placeholder content — components
never hard-code copy, so editing this one file is enough for routine updates.

At minimum, replace:

| Field | Where | Notes |
|---|---|---|
| `profile.name`, `profile.title`, `profile.tagline` | `data/portfolio.js` | Shown in the header, hero, footer, and SEO metadata |
| `profile.email` | `data/portfolio.js` | Pre-filled with the address on this account — confirm it's the one you want public |
| `profile.social.github` / `linkedin` | `data/portfolio.js` | Used in the hero, footer, and Connect modal |
| `profile.resumeUrl` | `data/portfolio.js` | Either an external URL (e.g. a Google Drive link — opens in a new tab) or a local path like `/resume.pdf` for a file dropped in `public/` (offered as a download) |
| `profile.githubUsername` / `NEXT_PUBLIC_GITHUB_USERNAME` | `.env.local` | Powers the live Projects section (see below) |
| `seo.siteUrl` / `NEXT_PUBLIC_SITE_URL` | `.env.local` | Used for Open Graph tags, JSON-LD, sitemap, robots.txt |
| `seo.ogImage` | `data/portfolio.js` + `public/` | Add a real 1200×630 image to `public/og-image.png` |
| `app/icon.svg` | `app/icon.svg` | Simple monogram favicon — replace initials or swap for your own icon |

Then work through the rest of `data/portfolio.js`: `about`, `highlights`,
`skills`, `experience`, `education`, `certifications`, `publications`,
`achievements`, and `beyondWork`.

- **`highlights`** — only entries with a non-empty `value` render, so leave
  fields blank to hide a stat rather than deleting the object.
- **`publications`** and **`achievements`** default to empty arrays — those
  sections disappear automatically until you add entries. Example shapes are
  commented directly above each export.
- **`featuredRepoNames`** — list any repo names (as they appear on GitHub)
  you want prioritised in the Projects ranking regardless of star count.
- **`fallbackProjects`** — shown only if the live GitHub fetch fails, returns
  nothing, or `githubUsername` is left as the placeholder value.

## GitHub project integration

The Featured Projects section is powered by **[lib/github.js](lib/github.js)**,
called directly from the server component **[components/Projects.js](components/Projects.js)**.
It:

1. Fetches public, owner (non-fork) repositories for `NEXT_PUBLIC_GITHUB_USERNAME`.
2. Filters out forks and archived repos.
3. Ranks the remainder by `featuredRepoNames` priority, then stars, then recency.
4. Falls back to `fallbackProjects` (in `data/portfolio.js`) on any API error,
   rate-limit, or empty response — the section never breaks the page.

Results are cached/revalidated hourly via Next.js's `fetch` cache.

An optional `GITHUB_TOKEN` (server-side only — never exposed to the browser)
raises the GitHub API rate limit from 60 to 5,000 requests/hour. A
[app/api/github/route.js](app/api/github/route.js) endpoint is also included
for external tooling or a future client-side refresh use case; the page
itself doesn't need it since the server component fetches directly.

## Theming

Light and dark themes are defined as CSS custom properties in
[app/globals.css](app/globals.css) and mapped to Tailwind color tokens in
[tailwind.config.js](tailwind.config.js) (`bg`, `ink`, `accent`, `line`, …).

- An inline, render-blocking script in `app/layout.js` reads
  `localStorage` (falling back to `prefers-color-scheme`) and sets
  `data-theme` on `<html>` **before** hydration, so there's no flash of the
  wrong theme.
- [`hooks/useTheme.js`](hooks/useTheme.js) exposes a `ThemeProvider` and
  `useTheme()` hook; [`components/ThemeToggle.js`](components/ThemeToggle.js)
  is the accessible toggle button in the header.
- The chosen theme persists to `localStorage` under the `portfolio-theme` key.

## Animations & performance

- [`hooks/useInView.js`](hooks/useInView.js) is a small `IntersectionObserver`
  hook; [`components/Reveal.js`](components/Reveal.js) wraps it into a
  reusable fade-up reveal component used throughout the page.
- All reveal/hover transitions respect `prefers-reduced-motion` (see the
  media query in `globals.css`).
- The Projects section streams in behind a `<Suspense>` boundary
  (`app/page.js`) so the GitHub fetch never blocks the rest of the page.
- Images (when you add any) should use `next/image`; `next.config.js`
  already whitelists `avatars.githubusercontent.com`.

## Accessibility

- Semantic landmarks (`header`, `main`, `footer`, `nav`) and a logical
  heading hierarchy (`h1` in the hero, `h2` per section).
- Skip-to-content link, visible focus rings (`:focus-visible`), and
  sufficient color contrast in both themes.
- The Connect modal (`components/ConnectModal.js`) traps focus, closes on
  `Escape` or an outside click, and restores focus to its trigger on close.

## Project structure

```
app/
  layout.js          Root layout, fonts, theme-init script, metadata, JSON-LD
  page.js             Assembles all sections
  globals.css         Theme tokens + base styles
  icon.svg            Favicon (auto-detected by Next.js)
  sitemap.js / robots.js
  api/github/route.js Optional server-side GitHub endpoint

components/           One component per section, plus Section.js and
                       Reveal.js as shared building blocks

data/portfolio.js     Single source of truth for all content

hooks/
  useInView.js        IntersectionObserver hook
  useTheme.js          Theme context provider + hook

lib/github.js          GitHub fetch, filter, rank, and fallback logic
```

## Deployment

Any Next.js-compatible host works (Vercel is the path of least resistance).
Set the environment variables from `.env.example` in your host's dashboard —
`GITHUB_TOKEN` should be marked server-only/secret if the platform
distinguishes between the two.
