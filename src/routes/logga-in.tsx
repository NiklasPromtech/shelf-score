import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/logga-in")({
  head: () => ({
    meta: [
      { title: "Logga in — ShelfScore Console" },
      {
        name: "description",
        content:
          "Logga in i ShelfScore Console för att se lagerbortfall, kampanjanalys och insikter för dina varumärken.",
      },
      { property: "og:title", content: "Logga in — ShelfScore Console" },
      {
        property: "og:description",
        content: "Ingång till ShelfScore Console med analysvyer för varumärken.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 font-sans text-foreground antialiased">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2">
          <Link to="/" className="text-sm font-bold tracking-tight">
            Shelf<span className="text-ok">Score</span>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Logga in</h1>
          <p className="text-sm text-muted-foreground">
            Demoläge — inget lösenord behövs, allt innehåll är exempeldata.
          </p>
        </div>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "/konsol";
          }}
        >
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium">
              E-post
            </label>
            <input
              id="email"
              type="email"
              defaultValue="niklas@shelfscore.se"
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="password" className="text-sm font-medium">
              Lösenord
            </label>
            <input
              id="password"
              type="password"
              defaultValue="demo1234"
              className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-foreground"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-foreground px-4 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Logga in
          </button>
        </form>

        <Link
          to="/"
          className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Tillbaka till startsidan
        </Link>
      </div>
    </div>
  );
}
