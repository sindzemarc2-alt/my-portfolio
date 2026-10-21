import { site } from "../site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="apropos" eyebrow="à propos" title="Qui suis-je ?">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-3">
          {site.about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 100}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <ul className="grid gap-4 lg:col-span-2">
          {site.highlights.map((item, i) => (
            <li key={item.label}>
              <Reveal delay={i * 120}>
                <div className="glass card-hover rounded-2xl p-6">
                  <p className="text-gradient text-3xl font-bold">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.label}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}