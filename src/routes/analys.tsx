import { createFileRoute } from "@tanstack/react-router";
import { MAILTO, SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/analys")({
  head: () => ({
    meta: [
      { title: "Analys av lagerbortfall | ShelfScore" },
      { name: "description", content: "Exempelrapport från ShelfScore om utebliven försäljning, kampanjeffekt och lagertäckning hos svenska återförsäljare." },
      { property: "og:title", content: "Analys av lagerbortfall | ShelfScore" },
      { property: "og:description", content: "En finansiell exempelanalys av vad tomma hyllor kostar varumärken." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AnalysisPage,
});

const brands = [
  { brand: "Rogaine", retailer: "Apotea", days: 6, loss: 429525 },
  { brand: "La Roche-Posay", retailer: "Kronans", days: 4, loss: 312400 },
  { brand: "Vichy", retailer: "Lyko", days: 5, loss: 208750 },
  { brand: "CeraVe", retailer: "Hjärtat", days: 3, loss: 164900 },
  { brand: "Bioderma", retailer: "Apotea", days: 2, loss: 98300 },
  { brand: "Avène", retailer: "Kronans", days: 2, loss: 70425 },
];

const week = [
  { day: "MÅN", stock: 780 }, { day: "TIS", stock: 612 }, { day: "ONS", stock: 240 },
  { day: "TOR", stock: 0 }, { day: "FRE", stock: 0 }, { day: "LÖR", stock: 0 }, { day: "SÖN", stock: 460 },
];

const offers = [
  { product: "Effaclar Duo+ 40 ml", retailer: "Kronans", old: "249 kr", now: "179 kr", lift: "×40", result: "SLUT DAG 4 / 7", risk: true },
  { product: "Vichy Minéral 89 50 ml", retailer: "Lyko", old: "329 kr", now: "229 kr", lift: "×12", result: "HELA PERIODEN", risk: false },
  { product: "CeraVe Moisturising Lotion", retailer: "Hjärtat", old: "189 kr", now: "149 kr", lift: "×7", result: "SLUT DAG 7 / 7", risk: true },
  { product: "Rogaine 5 % 3-pack", retailer: "Apotea", old: "699 kr", now: "599 kr", lift: "×22", result: "SLUT DAG 2 / 7", risk: true },
];

const movers = [
  ["01", "Effaclar Duo+ 40 ml", "Kronans", "1 240 st/dag"],
  ["02", "Rogaine 5 % 3-pack", "Apotea", "870 st/dag"],
  ["03", "Minéral 89 50 ml", "Lyko", "640 st/dag"],
  ["04", "CeraVe Lotion 473 ml", "Hjärtat", "512 st/dag"],
  ["05", "Bioderma Sensibio H2O", "Apotea", "498 st/dag"],
];

const coverage = [
  ["Apotea", "8 420", 100], ["Kronans", "4 910", 99.9], ["Lyko", "3 380", 99.8], ["Hjärtat", "2 230", 99.8],
] as const;

const nf = new Intl.NumberFormat("sv-SE");
const maxLoss = Math.max(...brands.map((brand) => brand.loss));
const maxStock = Math.max(...week.map((day) => day.stock));

function ReportSection({ number, label, title, children }: { number: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t-2 border-foreground py-10 md:py-14">
      <header className="mb-8 grid gap-3 md:grid-cols-[9rem_1fr]">
        <p className="font-mono text-xs font-bold uppercase text-muted-foreground">{number} / {label}</p>
        <h2 className="font-mono text-2xl font-bold uppercase leading-tight md:text-3xl">{title}</h2>
      </header>
      {children}
    </section>
  );
}

function AnalysisPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <header className="border-x-2 border-b-2 border-foreground">
          <div className="flex flex-wrap justify-between gap-6 border-b-2 border-foreground p-5 md:p-8">
            <div>
              <p className="font-mono text-xs font-bold uppercase text-muted-foreground">ShelfScore / Analysrapport</p>
              <h1 className="mt-2 font-mono text-3xl font-bold uppercase md:text-5xl">Vad tomma hyllor kostade</h1>
            </div>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-xs uppercase">
              <div><dt className="text-muted-foreground">Rapport-ID</dt><dd className="font-bold">SS–W36–024</dd></div>
              <div><dt className="text-muted-foreground">Period</dt><dd className="font-bold">7 dagar</dd></div>
              <div><dt className="text-muted-foreground">Omfattning</dt><dd className="font-bold">18 940 SKU</dd></div>
              <div><dt className="text-muted-foreground">Status</dt><dd className="font-bold">Exempeldata</dd></div>
            </dl>
          </div>
          <div className="grid md:grid-cols-[1.45fr_1fr]">
            <div className="p-6 md:border-r-2 md:border-foreground md:p-10">
              <p className="font-mono text-xs font-bold uppercase text-muted-foreground">Beräknad utebliven försäljning</p>
              <p className="mt-3 font-mono text-5xl font-bold leading-none text-loss sm:text-7xl md:text-8xl">1 284 300</p>
              <p className="mt-2 font-mono text-2xl font-bold uppercase">SEK / vecka</p>
            </div>
            <div className="grid grid-cols-2 border-t-2 border-foreground md:border-t-0">
              {[
                ["Produkter slut", "412"], ["Snittdagar utan lager", "3,4"],
                ["Lagertäckning", "99,8 %"], ["Största enskilda tapp", "429 525 kr"],
              ].map(([label, value], index) => (
                <div key={label} className={`p-5 ${index % 2 === 0 ? "border-r border-foreground" : ""} ${index < 2 ? "border-b border-foreground" : ""}`}>
                  <p className="font-mono text-[10px] font-bold uppercase text-muted-foreground">{label}</p>
                  <p className={`mt-3 font-mono text-xl font-bold ${index === 3 ? "text-loss" : ""}`}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className="mt-16">
          <ReportSection number="01" label="Sammanfattning" title="Tre saker rapporten visar">
            <div className="grid border-2 border-foreground md:grid-cols-3">
              {[
                ["A", "Förlusten är koncentrerad", "De två största fallen står för mer än hälften av det beräknade bortfallet."],
                ["B", "Kampanjen skapar bristen", "Efterfrågan ökar snabbare än lagret och de viktigaste dagarna går förlorade."],
                ["C", "Problemet går att se tidigare", "Försäljningstakt och kvarvarande lager visar risken innan hyllan når noll."],
              ].map(([id, title, copy], index) => (
                <article key={id} className={`p-6 ${index < 2 ? "border-b-2 border-foreground md:border-b-0 md:border-r-2" : ""}`}>
                  <span className="font-mono text-xs font-bold text-loss">{id}</span>
                  <h3 className="mt-8 font-mono text-lg font-bold uppercase">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p>
                </article>
              ))}
            </div>
          </ReportSection>

          <ReportSection number="02" label="Förlust" title="Per varumärke och kedja">
            <div className="overflow-x-auto border-2 border-foreground">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead className="bg-foreground font-mono text-xs uppercase text-background">
                  <tr><th className="p-4">Varumärke</th><th className="p-4">Kedja</th><th className="p-4 text-right">Dagar slut</th><th className="p-4 text-right">Tapp</th><th className="w-48 p-4">Andel</th></tr>
                </thead>
                <tbody>
                  {brands.map((brand) => (
                    <tr key={brand.brand} className="border-t border-foreground transition-colors hover:bg-muted/70">
                      <td className="p-4 font-bold">{brand.brand}</td><td className="p-4 text-muted-foreground">{brand.retailer}</td>
                      <td className="p-4 text-right font-mono">{brand.days}</td><td className="p-4 text-right font-mono font-bold text-loss">−{nf.format(brand.loss)} kr</td>
                      <td className="p-4"><div className="h-3 border border-foreground"><div className="h-full bg-loss" style={{ width: `${(brand.loss / maxLoss) * 100}%` }} /></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ReportSection>

          <ReportSection number="03" label="Förlopp" title="Rogaine 5 % 3-pack / Apotea">
            <div className="grid border-2 border-foreground lg:grid-cols-[1fr_18rem]">
              <div className="p-6 md:p-8 lg:border-r-2 lg:border-foreground">
                <div className="flex h-64 items-end gap-2 border-b-2 border-foreground sm:gap-4">
                  {week.map((day) => (
                    <div key={day.day} className="flex h-full flex-1 flex-col justify-end">
                      <span className={`mb-2 text-center font-mono text-xs font-bold ${day.stock === 0 ? "text-loss" : ""}`}>{nf.format(day.stock)}</span>
                      <div className={`w-full border-x border-t border-foreground ${day.stock === 0 ? "bg-loss" : "bg-foreground"}`} style={{ height: day.stock === 0 ? 8 : `${(day.stock / maxStock) * 190}px` }} />
                      <span className="py-3 text-center font-mono text-[10px] font-bold">{day.day}</span>
                    </div>
                  ))}
                </div>
              </div>
              <dl className="divide-y-2 divide-foreground font-mono uppercase">
                <div className="p-5"><dt className="text-[10px] text-muted-foreground">Slut i lager</dt><dd className="mt-2 text-2xl font-bold text-loss">3 dygn</dd></div>
                <div className="p-5"><dt className="text-[10px] text-muted-foreground">Sålda enheter</dt><dd className="mt-2 text-2xl font-bold">960</dd></div>
                <div className="p-5"><dt className="text-[10px] text-muted-foreground">Uppskattat bortfall</dt><dd className="mt-2 text-2xl font-bold text-loss">−429 525 kr</dd></div>
              </dl>
            </div>
          </ReportSection>

          <ReportSection number="04" label="Kampanj" title="Höll lagret hela perioden?">
            <div className="border-2 border-foreground">
              <div className="hidden grid-cols-[1.5fr_.7fr_.7fr_.5fr_1fr] bg-foreground p-3 font-mono text-[10px] font-bold uppercase text-background md:grid">
                <span>Produkt / kedja</span><span>Ord. pris</span><span>Kampanj</span><span>Lyft</span><span className="text-right">Utfall</span>
              </div>
              {offers.map((offer) => (
                <article key={offer.product} className="grid gap-4 border-t border-foreground p-4 first:border-t-0 md:grid-cols-[1.5fr_.7fr_.7fr_.5fr_1fr] md:items-center">
                  <div><h3 className="font-bold">{offer.product}</h3><p className="text-xs text-muted-foreground">{offer.retailer}</p></div>
                  <p className="font-mono text-sm text-muted-foreground line-through">{offer.old}</p><p className="font-mono font-bold">{offer.now}</p>
                  <p className="font-mono text-xl font-bold">{offer.lift}</p><p className={`font-mono text-xs font-bold md:text-right ${offer.risk ? "text-loss" : ""}`}>{offer.result}</p>
                </article>
              ))}
            </div>
          </ReportSection>

          <ReportSection number="05" label="Marknad" title="Hastighet och täckning">
            <div className="grid border-2 border-foreground lg:grid-cols-2">
              <div className="lg:border-r-2 lg:border-foreground">
                <h3 className="border-b-2 border-foreground p-4 font-mono text-xs font-bold uppercase">Snabbast säljande</h3>
                {movers.map(([rank, product, retailer, units]) => (
                  <div key={rank} className="grid grid-cols-[2rem_1fr_auto] items-center gap-3 border-b border-foreground p-4 last:border-b-0">
                    <span className="font-mono text-xs text-muted-foreground">{rank}</span><div><p className="text-sm font-bold">{product}</p><p className="text-xs text-muted-foreground">{retailer}</p></div><span className="font-mono text-xs font-bold">{units}</span>
                  </div>
                ))}
              </div>
              <div className="border-t-2 border-foreground lg:border-t-0">
                <h3 className="border-b-2 border-foreground p-4 font-mono text-xs font-bold uppercase">Datatäckning</h3>
                {coverage.map(([retailer, products, pct]) => (
                  <div key={retailer} className="border-b border-foreground p-4 last:border-b-0">
                    <div className="flex justify-between gap-4 text-sm"><span className="font-bold">{retailer}</span><span className="font-mono">{products} / {pct.toLocaleString("sv-SE")} %</span></div>
                    <div className="mt-3 h-2 border border-foreground"><div className="h-full bg-foreground" style={{ width: `${pct}%` }} /></div>
                  </div>
                ))}
              </div>
            </div>
          </ReportSection>

          <ReportSection number="06" label="Slutsats" title="Kampanjvärdet försvinner när hyllan når noll">
            <div className="grid border-2 border-foreground md:grid-cols-[1fr_auto]">
              <div className="p-6 md:p-8">
                <p className="max-w-2xl text-lg leading-8">Det här är exempeldata, men frågan är verklig: vet ni vilka kampanjer som driver efterfrågan snabbare än återförsäljarnas lager klarar?</p>
                <p className="mt-4 text-sm text-muted-foreground">Skicka vilka varumärken ni ansvarar för, så tar jag fram ett konkret underlag att diskutera.</p>
              </div>
              <a href={MAILTO} className="flex min-h-28 items-center justify-center bg-foreground px-8 font-mono text-sm font-bold uppercase text-background transition-colors hover:bg-loss">Bolla det här med mig →</a>
            </div>
          </ReportSection>
        </div>
        <footer className="flex flex-wrap justify-between gap-3 border-t-2 border-foreground pt-4 font-mono text-[10px] uppercase text-muted-foreground"><span>ShelfScore / Exempelrapport</span><span>Ej beslutsunderlag · Data är illustrativ</span></footer>
      </main>
    </div>
  );
}
