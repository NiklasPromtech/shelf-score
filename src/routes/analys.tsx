import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, MAILTO } from "@/components/site-header";

export const Route = createFileRoute("/analys")({
  head: () => ({
    meta: [
      { title: "Analys — vad tomma hyllor kostade förra veckan | ShelfScore" },
      {
        name: "description",
        content:
          "Exempelanalys från ShelfScore: utebliven försäljning per varumärke, vilka produkter som tog slut, kampanjeffekter och lagertäckning hos Apotea, Kronans, Lyko och Hjärtat.",
      },
      {
        property: "og:title",
        content: "Analys — vad tomma hyllor kostade förra veckan | ShelfScore",
      },
      {
        property: "og:description",
        content:
          "Utebliven försäljning per varumärke, produkter som tog slut, kampanjeffekter och lagertäckning — dag för dag.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "sv_SE" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AnalysisPage,
});

const kpis = [
  { label: "Utebliven försäljning", value: "1 284 300 kr", sub: "senaste 7 dagarna", tone: "loss" },
  { label: "Produkter slut i lager", value: "412", sub: "av 18 940 bevakade", tone: "loss" },
  { label: "Snittdagar utan lager", value: "3,4", sub: "per drabbad produkt", tone: "neutral" },
  { label: "Lagertäckning", value: "99,8 %", sub: "av säljande sortiment", tone: "ok" },
];

const brands = [
  { brand: "Rogaine", retailer: "Apotea", loss: 429525, days: 6, share: 100 },
  { brand: "La Roche-Posay", retailer: "Kronans", loss: 312400, days: 4, share: 73 },
  { brand: "Vichy", retailer: "Lyko", loss: 208750, days: 5, share: 49 },
  { brand: "CeraVe", retailer: "Hjärtat", loss: 164900, days: 3, share: 38 },
  { brand: "Bioderma", retailer: "Apotea", loss: 98300, days: 2, share: 23 },
  { brand: "Avène", retailer: "Kronans", loss: 70425, days: 2, share: 16 },
];

const week = [
  { day: "Mån", stock: 780, sold: 96, out: false },
  { day: "Tis", stock: 612, sold: 168, out: false },
  { day: "Ons", stock: 240, sold: 372, out: false },
  { day: "Tor", stock: 0, sold: 240, out: true },
  { day: "Fre", stock: 0, sold: 0, out: true },
  { day: "Lör", stock: 0, sold: 0, out: true },
  { day: "Sön", stock: 460, sold: 84, out: false },
];

const offers = [
  {
    product: "Effaclar Duo+ 40 ml",
    retailer: "Kronans",
    normal: "249 kr",
    campaign: "179 kr",
    lift: "×40",
    verdict: "Slut dag 4 av 7",
    tone: "loss",
  },
  {
    product: "Vichy Minéral 89 50 ml",
    retailer: "Lyko",
    normal: "329 kr",
    campaign: "229 kr",
    lift: "×12",
    verdict: "Höll hela perioden",
    tone: "ok",
  },
  {
    product: "CeraVe Moisturising Lotion",
    retailer: "Hjärtat",
    normal: "189 kr",
    campaign: "149 kr",
    lift: "×7",
    verdict: "Slut sista dagen",
    tone: "loss",
  },
  {
    product: "Rogaine 5 % 3-pack",
    retailer: "Apotea",
    normal: "699 kr",
    campaign: "599 kr",
    lift: "×22",
    verdict: "Slut dag 2 av 7",
    tone: "loss",
  },
];

const movers = [
  { product: "Effaclar Duo+ 40 ml", retailer: "Kronans", units: "1 240 st/dag" },
  { product: "Rogaine 5 % 3-pack", retailer: "Apotea", units: "870 st/dag" },
  { product: "Minéral 89 50 ml", retailer: "Lyko", units: "640 st/dag" },
  { product: "CeraVe Lotion 473 ml", retailer: "Hjärtat", units: "512 st/dag" },
  { product: "Bioderma Sensibio H2O", retailer: "Apotea", units: "498 st/dag" },
];

const coverage = [
  { retailer: "Apotea", products: "8 420", pct: 100 },
  { retailer: "Kronans", products: "4 910", pct: 99.9 },
  { retailer: "Lyko", products: "3 380", pct: 99.8 },
  { retailer: "Hjärtat", products: "2 230", pct: 99.8 },
];

const nf = new Intl.NumberFormat("sv-SE");
const maxLoss = Math.max(...brands.map((b) => b.loss));
const maxStock = Math.max(...week.map((d) => d.stock));

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
      {children}
    </p>
  );
}

function AnalysisPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 pb-24">
        {/* Intro */}
        <section className="space-y-4 py-12">
          <Label>Exempelanalys · vecka 36</Label>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Vad tomma hyllor kostade dina varumärken förra veckan
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            Så här ser en veckorapport ut. Siffrorna nedan är påhittade
            exempeldata för att visa formatet — i skarpt läge kommer de från
            daglig avläsning av lagersaldo och pris hos återförsäljarna.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Alla kedjor", "7 dagar", "Alla varumärken"].map((f) => (
              <span
                key={f}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {f}
              </span>
            ))}
          </div>
        </section>

        {/* KPI */}
        <section className="grid gap-4 border-t border-border py-10 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-xl border border-border bg-muted/40 p-5">
              <Label>{k.label}</Label>
              <p
                className={`mt-2 font-mono text-2xl font-bold ${
                  k.tone === "loss" ? "text-loss" : k.tone === "ok" ? "text-ok" : ""
                }`}
              >
                {k.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{k.sub}</p>
            </div>
          ))}
        </section>

        {/* Lost sales per brand */}
        <section className="space-y-6 border-t border-border py-12">
          <div className="space-y-2">
            <Label>Utebliven försäljning</Label>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Per varumärke och kedja
            </h2>
          </div>

          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/60 text-left">
                <tr className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <th className="px-4 py-3">Varumärke</th>
                  <th className="px-4 py-3">Kedja</th>
                  <th className="px-4 py-3 text-right">Dagar slut</th>
                  <th className="px-4 py-3 text-right">Tappad försäljning</th>
                  <th className="hidden px-4 py-3 md:table-cell">Andel</th>
                </tr>
              </thead>
              <tbody>
                {brands.map((b) => (
                  <tr key={b.brand} className="border-t border-border">
                    <td className="px-4 py-3 font-medium">{b.brand}</td>
                    <td className="px-4 py-3 text-muted-foreground">{b.retailer}</td>
                    <td className="px-4 py-3 text-right font-mono">{b.days}</td>
                    <td className="px-4 py-3 text-right font-mono font-bold text-loss">
                      −{nf.format(b.loss)} kr
                    </td>
                    <td className="hidden px-4 py-3 md:table-cell">
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-loss"
                          style={{ width: `${(b.loss / maxLoss) * 100}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Week timeline */}
        <section className="space-y-6 border-t border-border py-12">
          <div className="space-y-2">
            <Label>Dag för dag</Label>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Rogaine 5 % 3-pack hos Apotea
            </h2>
            <p className="max-w-2xl text-muted-foreground">
              Lagret rasar när kampanjtrycket kommer, och står på noll i tre
              dygn. Röda staplar är dagar utan lager — där uppstår tappet.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-muted/40 p-6">
            <div className="flex h-48 items-end gap-3">
              {week.map((d) => (
                <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {d.out ? "0" : nf.format(d.stock)}
                  </span>
                  <div
                    className={`w-full rounded-t ${d.out ? "bg-loss/25" : "bg-ok/70"}`}
                    style={{
                      height: d.out ? "6px" : `${(d.stock / maxStock) * 150}px`,
                    }}
                  />
                  <span className="text-xs font-medium text-muted-foreground">{d.day}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-6 border-t border-border pt-4 text-sm">
              <span className="text-muted-foreground">
                Sålda enheter under veckan:{" "}
                <span className="font-mono font-bold text-foreground">960</span>
              </span>
              <span className="text-muted-foreground">
                Uppskattat bortfall:{" "}
                <span className="font-mono font-bold text-loss">−429 525 kr</span>
              </span>
            </div>
          </div>
        </section>

        {/* Offer analysis */}
        <section className="space-y-6 border-t border-border py-12">
          <div className="space-y-2">
            <Label>Kampanjanalys</Label>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Höll lagret hela kampanjen?
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {offers.map((o) => (
              <div key={o.product} className="rounded-xl border border-border bg-muted/40 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{o.product}</p>
                    <p className="text-sm text-muted-foreground">{o.retailer}</p>
                  </div>
                  <span className={`font-mono text-xl font-bold ${o.tone === "loss" ? "text-loss" : "text-ok"}`}>
                    {o.lift}
                  </span>
                </div>
                <div className="mt-4 flex items-baseline gap-2 font-mono text-sm">
                  <span className="text-muted-foreground line-through">{o.normal}</span>
                  <span className="font-bold">{o.campaign}</span>
                </div>
                <p
                  className={`mt-3 text-sm font-medium ${
                    o.tone === "loss" ? "text-loss" : "text-ok"
                  }`}
                >
                  {o.verdict}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Movers + coverage */}
        <section className="grid gap-8 border-t border-border py-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Snabbast säljande</Label>
              <h2 className="text-2xl font-bold tracking-tight">Rör sig snabbast just nu</h2>
            </div>
            <ul className="divide-y divide-border rounded-xl border border-border">
              {movers.map((m) => (
                <li key={m.product} className="flex items-center justify-between gap-4 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium">{m.product}</p>
                    <p className="text-xs text-muted-foreground">{m.retailer}</p>
                  </div>
                  <span className="font-mono text-sm font-bold text-ok">{m.units}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Lagertäckning</Label>
              <h2 className="text-2xl font-bold tracking-tight">Hur mycket vi fångar</h2>
            </div>
            <div className="space-y-5 rounded-xl border border-border p-5">
              {coverage.map((c) => (
                <div key={c.retailer} className="space-y-2">
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium">{c.retailer}</span>
                    <span className="font-mono text-muted-foreground">
                      {c.products} produkter ·{" "}
                      <span className="font-bold text-ok">
                        {c.pct.toLocaleString("sv-SE")} %
                      </span>
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-ok" style={{ width: `${c.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="space-y-5 border-t border-border py-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Vill du se den här rapporten för era varumärken?
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Skicka ett mejl med vilka varumärken ni ansvarar för, så tar jag fram
            en riktig version med skarpa siffror. Kostar ingenting — jag vill
            bara veta om det är användbart.
          </p>
          <a
            href={MAILTO}
            className="inline-flex rounded-lg bg-foreground px-8 py-4 font-medium text-background transition-opacity hover:opacity-90"
          >
            Bolla det här med mig
          </a>
        </section>
      </main>
    </div>
  );
}
