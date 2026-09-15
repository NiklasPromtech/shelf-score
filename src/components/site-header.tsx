import { Link } from "@tanstack/react-router";

export const EMAIL = "tommyandersson@gmail.com";
export const MAILTO = `mailto:${EMAIL}?subject=ShelfScore%20%E2%80%93%20lagerbortfall`;

const linkClass =
  "font-mono text-[11px] font-bold uppercase text-muted-foreground transition-colors hover:text-loss";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-foreground bg-background">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link to="/" className="font-mono text-sm font-bold uppercase">
          Shelf<span className="text-loss">Score</span>
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
          <Link
            to="/"
            className={linkClass}
            activeProps={{ className: "font-mono text-[11px] font-bold uppercase text-foreground underline decoration-2 underline-offset-4" }}
            activeOptions={{ exact: true }}
          >
            Översikt
          </Link>
          <Link
            to="/analys"
            className={linkClass}
            activeProps={{ className: "font-mono text-[11px] font-bold uppercase text-foreground underline decoration-2 underline-offset-4" }}
          >
            Analys
          </Link>
          <Link
            to="/branding-guidelines"
            className={linkClass}
            activeProps={{ className: "font-mono text-[11px] font-bold uppercase text-foreground underline decoration-2 underline-offset-4" }}
          >
            Guidelines
          </Link>
          <Link
            to="/rorelse"
            className={linkClass}
            activeProps={{ className: "font-mono text-[11px] font-bold uppercase text-foreground underline decoration-2 underline-offset-4" }}
          >
            Rörelse
          </Link>
          <a href={MAILTO} className={linkClass}>
            Kontakt
          </a>
          <Link
            to="/logga-in"
            className="border border-foreground px-3 py-1.5 font-mono text-[11px] font-bold uppercase transition-colors hover:bg-foreground hover:text-background"
          >
            Logga in
          </Link>
        </nav>
      </div>
    </header>
  );
}
