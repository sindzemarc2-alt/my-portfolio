import { site } from "../site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="contact" title="Travaillons ensemble">
      <Reveal>
        <div className="glass rounded-3xl p-8 text-center sm:p-14">
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted">
            Un projet, un stage, une collaboration ou simplement une question ?
            Écris-moi, je réponds avec plaisir.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="btn-glow mt-8 inline-block rounded-xl px-8 py-4 font-semibold"
          >
            {site.email}
          </a>

          {site.github && (
            <ul className="mt-8 flex justify-center gap-8 text-sm font-medium">
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-accent"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          )}
        </div>
      </Reveal>
    </Section>
  );
}