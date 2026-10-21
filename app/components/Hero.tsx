import Image from "next/image";
import { site } from "../site";
import Reveal from "./Reveal";
import Typewriter from "./Typewriter";

const stack = ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"];

const initials = site.shortName
  .split(" ")
  .map((word) => word[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2">
      <div>
        <Reveal>
          <p className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {site.school} · {site.option}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Salut, je suis{" "}
            <span className="text-gradient">{site.shortName}</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-4 h-9 font-mono text-xl text-accent sm:text-2xl">
            <Typewriter words={site.roles} />
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {site.tagline}
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projets"
              className="btn-glow rounded-xl px-7 py-3.5 font-semibold"
            >
              Voir mes projets
            </a>
            <a
              href={`mailto:${site.email}`}
              className="glass rounded-xl px-7 py-3.5 font-semibold transition-colors hover:border-accent"
            >
              Me contacter
            </a>
          </div>
        </Reveal>

        <Reveal delay={500}>
          <ul className="mt-10 flex flex-wrap gap-2">
            {stack.map((tech) => (
              <li
                key={tech}
                className="glass rounded-full px-3 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={300}>
        <div className="flex flex-col items-center gap-8">
          {/* Photo de profil */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full bg-linear-to-tr from-accent via-accent-2 to-accent-3 opacity-70 blur-xl"
            />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-border bg-background sm:h-64 sm:w-64">
              {site.photo ? (
                <Image
                  src={site.photo}
                  alt={`Photo de ${site.shortName}`}
                  fill
                  sizes="256px"
                  priority
                  className="object-cover"
                />
              ) : (
                <div className="text-gradient flex h-full w-full items-center justify-center text-6xl font-bold">
                  {initials}
                </div>
              )}
            </div>
          </div>

          {/* Carte terminal */}
          <div className="glass w-full overflow-hidden rounded-2xl">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
              <span className="h-3 w-3 rounded-full bg-green-400/80" />
              <span className="ml-3 font-mono text-xs text-muted">
                profil.ts
              </span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-sm leading-7">
              <code>
                <span className="text-accent-2">const</span>{" "}
                <span className="text-accent">moi</span> = {"{"}
                {"\n"}
                {"  "}nom:{" "}
                <span className="text-accent-3">&quot;{site.name}&quot;</span>,
                {"\n"}
                {"  "}ecole:{" "}
                <span className="text-accent-3">&quot;{site.school}&quot;</span>,
                {"\n"}
                {"  "}option:{" "}
                <span className="text-accent-3">&quot;{site.option}&quot;</span>,
                {"\n"}
                {"  "}disponible: <span className="text-accent-2">true</span>,
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </Reveal>
    </section>
  );
}