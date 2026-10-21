import { site } from "../site";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted">
      <p>
        © {new Date().getFullYear()} {site.name} · {site.school}
      </p>
    </footer>
  );
}