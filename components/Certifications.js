import { certifications } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Certifications() {
  if (!certifications || certifications.length === 0) return null;

  return (
    <Section id="certifications" eyebrow="Certifications" heading="Credentials" tone="alt">
      <ul className="divide-y divide-line border-y border-line">
        {certifications.map((cert, index) => (
          <Reveal key={cert.name} delay={index * 70} as="li" className="py-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <div>
                <p className="text-base text-ink">{cert.name}</p>
                <p className="text-sm text-ink-muted">{cert.issuer}</p>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-faint">
                <span>
                  {cert.issueDate}
                  {cert.expiryDate ? ` – ${cert.expiryDate}` : ""}
                </span>
                {cert.credentialId && <span>ID: {cert.credentialId}</span>}
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-strong underline underline-offset-4 hover:text-ink"
                  >
                    Verify
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
