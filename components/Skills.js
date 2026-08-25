import { skills } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Expertise"
      heading="Capabilities, organised by domain"
      description="Grouped by area rather than ranked by percentage — a more honest picture of where I contribute."
    >
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={(index % 4) * 90}>
            <h3 className="border-b border-line pb-3 text-xs font-medium uppercase tracking-widest2 text-accent-strong">
              {group.category}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
