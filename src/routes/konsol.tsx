import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/konsol")({
  head: () => ({
    meta: [
      { title: "ShelfScore Console — analysvyer" },
      {
        name: "description",
        content:
          "ShelfScore Console: kampanjanalys, varumärken, lagerbortfall, insikter, foundry, arbitrage och driftstatus.",
      },
      { property: "og:title", content: "ShelfScore Console — analysvyer" },
      {
        property: "og:description",
        content: "Alla analysvyer i ShelfScore Console, med exempeldata.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ConsoleLayout,
});

const nav = [
  { to: "/konsol", label: "Kampanjanalys", hint: "Offer analysis", exact: true },
  { to: "/konsol/brands", label: "Varumärken", hint: "Brands" },
  { to: "/konsol/outreach", label: "Lagerbortfall", hint: "Outreach" },
  { to: "/konsol/insights", label: "Insikter", hint: "Insights" },
  { to: "/konsol/foundry", label: "Foundry", hint: "Sortimentsförslag" },
  { to: "/konsol/arbitrage", label: "Arbitrage", hint: "Inköpslägen" },
  { to: "/konsol/status", label: "Status", hint: "Drift" },
] as const;

function ConsoleLayout() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm font-bold tracking-tight">
              Shelf<span className="text-ok">Score</span>
            </Link>
            <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              Console · exempeldata
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden text-muted-foreground sm:inline">niklas@shelfscore.se</span>
            <Link
              to="/"
              className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Logga ut
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-8 md:flex-row">
        <nav className="flex shrink-0 gap-2 overflow-x-auto md:w-56 md:flex-col md:overflow-visible">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: "exact" in n }}
              className="shrink-0 rounded-lg border border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted"
              activeProps={{
                className:
                  "shrink-0 rounded-lg border border-border bg-muted px-3 py-2 text-sm font-medium text-foreground",
              }}
            >
              <span className="block whitespace-nowrap">{n.label}</span>
              <span className="hidden text-xs text-muted-foreground md:block">{n.hint}</span>
            </Link>
          ))}
        </nav>

        <main className="min-w-0 flex-1 space-y-8 pb-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
