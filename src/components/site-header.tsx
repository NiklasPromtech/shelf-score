import { Link } from "@tanstack/react-router";

export const EMAIL = "tommyandersson@gmail.com";
export const MAILTO = `mailto:${EMAIL}?subject=ShelfScore%20%E2%80%93%20lagerbortfall`;

const linkClass =
  "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="text-sm font-bold tracking-tight">
          Shelf<span className="text-ok">Score</span>
        </Link>

        <nav className="flex items-center gap-5">
          <Link
            to="/"
            className={linkClass}
            activeProps={{ className: "text-sm font-medium text-foreground" }}
            activeOptions={{ exact: true }}
          >
            Översikt
          </Link>
          <Link
            to="/analys"
            className={linkClass}
            activeProps={{ className: "text-sm font-medium text-foreground" }}
          >
            Analys
          </Link>
          <a href={MAILTO} className={linkClass}>
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
