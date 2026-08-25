import { Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { CareerHighlights } from "@/components/CareerHighlights";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Publications } from "@/components/Publications";
import { Achievements } from "@/components/Achievements";
import { BeyondWork } from "@/components/BeyondWork";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent-strong focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <About />
        <CareerHighlights />
        <Skills />
        <Experience />

        <Suspense fallback={<ProjectsFallback />}>
          <Projects />
        </Suspense>

        <Education />
        <Certifications />
        <Publications />
        <Achievements />
        <BeyondWork />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
}

function ProjectsFallback() {
  return (
    <section aria-hidden="true" className="border-b border-line bg-bg-alt">
      <div className="container max-w-content py-20 sm:py-28">
        <div className="h-3 w-40 animate-pulse rounded bg-line" />
        <div className="mt-4 h-8 w-72 animate-pulse rounded bg-line" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-56 animate-pulse border border-line bg-surface" />
          ))}
        </div>
      </div>
    </section>
  );
}
