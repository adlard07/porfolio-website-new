import { closingCta, profile } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { ConnectModal } from "@/components/ConnectModal";

export function ContactCTA() {
  return (
    <section id="connect" className="scroll-mt-24 border-b border-line">
      <div className="container max-w-content py-24 text-center sm:py-32">
        <Reveal className="mx-auto max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest2 text-accent-strong">
            {closingCta.eyebrow}
          </p>
          <h2 className="mt-4 text-balance font-serif text-3xl leading-tight text-ink sm:text-4xl">
            {closingCta.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">{closingCta.body}</p>
          <div className="mt-8 flex justify-center">
            <ConnectModal />
          </div>
          <p className="mt-6 text-sm text-ink-faint">{profile.email}</p>
        </Reveal>
      </div>
    </section>
  );
}
