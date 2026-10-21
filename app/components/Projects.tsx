import { site } from "../site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projets" eyebrow="projets" title="Ce que j'ai construit">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {site.projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 120}>
            <article className="glass card-hover flex h-full flex-col rounded-2xl p-6">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {(project.github || project.demo) && (
                <div className="mt-6 flex gap-5 text-sm font-medium">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-accent"
                    >
                      Code ↗
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted transition-colors hover:text-accent"
                    >
                      Démo ↗
                    </a>
                  )}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}