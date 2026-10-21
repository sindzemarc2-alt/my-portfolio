import { site } from "../site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="competences" eyebrow="compétences" title="Ma boîte à outils">
      <div className="grid gap-6 md:grid-cols-3">
        {site.skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 120}>
            <div className="glass card-hover h-full rounded-2xl p-6">
              <h3 className="font-mono text-sm text-accent">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}