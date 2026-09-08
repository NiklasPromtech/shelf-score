import { createFileRoute } from "@tanstack/react-router";

const EMAIL = "tommyandersson@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=ShelfScore%20%E2%80%93%20lagerbortfall`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShelfScore — Vad kostar en tom hylla?" },
      {
        name: "description",
        content:
          "ShelfScore mäter dag för dag hur lagersaldot rör sig hos Apotea, Kronans, Lyko och Hjärtat – och räknar ut hur mycket försäljning varumärken tappar när produkterna tar slut.",
      },
      { property: "og:title", content: "ShelfScore — Vad kostar en tom hylla?" },
      {
        property: "og:description",
        content:
          "Rogaine tappade ~429 525 kr på en vecka hos Apotea. Vi mäter lagerbortfall dag för dag hos svenska e-handlare.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "sv_SE" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="dark min-h-screen bg-background font-sans text-foreground antialiased">
      {/* Header */}
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6">
        <span className="text-sm font-bold tracking-tight">
          Shelf<span className="text-ok">Score</span>
        </span>
        <a
          href={MAILTO}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Kontakt →
        </a>
      </header>

      <main className="mx-auto max-w-3xl px-6">
        {/* Hero */}
        <section className="space-y-8 py-16 md:py-24">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-ok">
            <span className="h-px w-8 bg-ok" />
            <span>För er som jobbar mot återförsäljare</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
              Rogaine tappade{" "}
              <span className="font-mono text-loss">429&nbsp;525&nbsp;kr</span>{" "}
              på en vecka — för att hyllan var tom hos Apotea.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Jag mäter hur lagersaldot rör sig dag för dag hos svenska
              e-handlare, och räknar ut vad det kostar era varumärken när
              produkterna är slut precis när folk vill köpa dem.
            </p>
          </div>

          <div className="flex flex-col items-start gap-6 pt-4 sm:flex-row sm:items-center">
            <a
              href={MAILTO}
              className="rounded-lg bg-foreground px-8 py-4 font-medium text-background transition-opacity hover:opacity-90"
            >
              Bolla det här med mig
            </a>
            <div className="flex flex-col text-sm text-muted-foreground">
              <span className="font-medium text-foreground">
                Ingen försäljningspitch.
              </span>
              <span>Jag försöker bara ta reda på om datan är användbar.</span>
            </div>
          </div>

          <div className="border-t border-border pt-12">
            <p className="mb-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Bevakar dagligen
            </p>
            <div className="grid grid-cols-2 gap-8 opacity-60 md:grid-cols-4">
              {["Apotea", "Kronans", "Lyko", "Hjärtat"].map((r) => (
                <div key={r} className="flex items-center text-lg font-bold">
                  {r}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* L'Oréal case */}
        <section className="space-y-10 border-t border-border py-16 md:py-24">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Ett räkneexempel
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Kampanjen som hyllan inte orkade med
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Ett stort varumärke satte en kampanj på Kronans. Efterfrågan kom —
              men lagret tog slut mitt i kampanjperioden. Så här såg det ut,
              dag för dag:
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-ok">
                Före
              </p>
              <p className="font-mono text-2xl font-bold">I lager</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Normal försäljningstakt. Produkterna syns och säljer som de
                brukar.
              </p>
            </div>
            <div className="rounded-xl border border-loss/40 bg-card p-6">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-loss">
                Under kampanjen
              </p>
              <p className="font-mono text-2xl font-bold text-loss">
                Slut i lager
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Kampanjtrycket tömmer hyllan. Kunderna kommer — men varorna är
                borta.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Efter
              </p>
              <p className="font-mono text-2xl font-bold text-loss">
                −600&nbsp;000&nbsp;kr
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Utebliven försäljning under kampanjen. Plus ungefär{" "}
                <span className="font-mono text-foreground">100&nbsp;000&nbsp;kr</span>{" "}
                i tappade återkommande kunder.
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Om varumärket hade sett lagertappet i realtid hade de hunnit fylla
            på innan kampanjen var slut. Det är exakt det ShelfScore visar.
          </p>
        </section>

        {/* How it works */}
        <section className="space-y-10 border-t border-border py-16 md:py-24">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Så funkar det
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Tre steg, varje dag
            </h2>
          </div>

          <ol className="space-y-8">
            {[
              {
                n: "01",
                title: "Vi läser av hyllan varje dag",
                body: "Lagersaldo, pris och position hämtas dagligen för hundratusentals produkter hos Apotea, Kronans, Lyko och Hjärtat.",
              },
              {
                n: "02",
                title: "Vi ser när en säljande produkt försvinner",
                body: "Utifrån hur lagret rör sig dag för dag vet vi vilka produkter som säljer — och exakt vilka dagar de är borta.",
              },
              {
                n: "03",
                title: "Vi räknar ut vad det kostade",
                body: "Förlorad försäljning per varumärke, produkt och dag. Siffrorna är uppskattningar baserade på observerad försäljningstakt — inte exakta, men ärliga.",
              },
            ].map((s) => (
              <li key={s.n} className="flex gap-6">
                <span className="font-mono text-sm font-bold text-ok">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* What already exists */}
        <section className="space-y-10 border-t border-border py-16 md:py-24">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Det här finns redan
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Inte en idé — en konsol som snurrar
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                label: "Utebliven försäljning per varumärke",
                value: "429 525 kr",
                sub: "Rogaine · Apotea · senaste veckan",
                tone: "loss" as const,
              },
              {
                label: "Kampanjanalys per produkt",
                value: "Lyft ×40",
                sub: "Effaclar Duo+ under kampanj hos Kronans",
                tone: "ok" as const,
              },
              {
                label: "Snabbast säljande just nu",
                value: "133 686",
                sub: "Positioner flyttade på en dag, alla kedjor",
                tone: "ok" as const,
              },
              {
                label: "Lagertäckning per kedja",
                value: "99,8–100 %",
                sub: "Andel säljande produkter vi fångar dagligen",
                tone: "ok" as const,
              },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </p>
                <p
                  className={`mt-2 font-mono text-2xl font-bold ${
                    c.tone === "loss" ? "text-loss" : "text-ok"
                  }`}
                >
                  {c.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{c.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Personal note */}
        <section className="space-y-6 border-t border-border py-16 md:py-24">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Vem ligger bakom?
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Hej, jag heter Niklas
            </h2>
          </div>
          <div className="max-w-2xl space-y-4 text-muted-foreground">
            <p>
              ShelfScore är mitt eget lilla projekt. Jag säljer ingenting och
              vill inte bli återförsäljare — jag försöker bara ta reda på om
              den här typen av data faktiskt är användbar för er, eller om det
              är sånt ni redan har full koll på.
            </p>
            <p>
              Därför är allt gratis just nu. Om ni jobbar mot återförsäljarna
              — e-handel eller key account — och kan tänka er att bolla det här
              i några minuter skulle det betyda mycket.
            </p>
          </div>
          <a
            href={MAILTO}
            className="inline-flex rounded-lg bg-foreground px-8 py-4 font-medium text-background transition-opacity hover:opacity-90"
          >
            Svara på några rader
          </a>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8 text-sm text-muted-foreground">
          <span>
            Shelf<span className="text-ok">Score</span> · Ett soloprojekt av
            Niklas Andersson
          </span>
          <a
            href={MAILTO}
            className="transition-colors hover:text-foreground"
          >
            {EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
