"use client";

import { useState } from "react";
import { site } from "../site";

const links = [
  { href: "#apropos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#projets", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-mono text-lg font-semibold tracking-tight">
          <span className="text-accent">&lt;</span>
          {site.shortName}
          <span className="text-accent-2"> /&gt;</span>
        </a>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="glass flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
        >
          <span aria-hidden="true" className="text-xl leading-none">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu mobile"
          className="border-t border-border bg-background/95 px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4 text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}