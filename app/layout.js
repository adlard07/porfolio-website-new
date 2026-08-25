import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import { profile, seo } from "@/data/portfolio";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${profile.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: profile.name, url: seo.siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "profile",
    title: seo.title,
    description: seo.description,
    url: seo.siteUrl,
    siteName: seo.siteName,
    images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F3" },
    { media: "(prefers-color-scheme: dark)", color: "#363829" },
  ],
};

// Runs before hydration to set data-theme on <html> synchronously,
// preventing a flash of the wrong theme. Reads localStorage first, then
// falls back to the OS-level preference on a first visit.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  description: profile.tagline,
  email: `mailto:${profile.email}`,
  url: seo.siteUrl,
  address: profile.location ? { "@type": "PostalAddress", addressLocality: profile.location } : undefined,
  sameAs: [
    profile.social.github,
    profile.social.linkedin,
    profile.social.website,
    profile.social.twitter,
    profile.social.reddit,
    profile.social.stackoverflow,
  ].filter(Boolean),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
