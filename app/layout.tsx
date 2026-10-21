import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "./site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | ${site.title}`,
    description: site.description,
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${mono.variable}`}>
      <body className="relative min-h-screen">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="bg-grid absolute inset-0" />
          <div className="blob -left-20 top-0 h-96 w-96 bg-accent" />
          <div
            className="blob right-0 top-1/3 h-[28rem] w-[28rem] bg-accent-2"
            style={{ animationDelay: "-6s" }}
          />
          <div
            className="blob bottom-0 left-1/3 h-80 w-80 bg-accent-3"
            style={{ animationDelay: "-12s" }}
          />
        </div>

        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}