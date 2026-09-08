import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Panel, Stat, Table, Tag } from "@/components/console-ui";

export const Route = createFileRoute("/konsol/arbitrage")({
  component: Arbitrage,
});

const deals = [
  {
    product: "Rogaine 5 % 3-pack",
    retailer: "Apotea",
    price: "599 kr",
    ref: "749 kr",
    margin: "25 %",
    velocity: "870 st/dag",
    verdict: "Köp",
    tone: "ok" as const,
  },
  {
    product: "Effaclar Duo+ 40 ml",
    retailer: "Kronans",
    price: "179 kr",
    ref: "249 kr",
    margin: "39 %",
    velocity: "1 240 st/dag",
    verdict: "Köp",
    tone: "ok" as const,
  },
  {
    product: "Avène Thermal Spray 300 ml",
    retailer: "Lyko",
    price: "129 kr",
    ref: "149 kr",
    margin: "16 %",
    velocity: "88 st/dag",
    verdict: "Avvakta",
    tone: "neutral" as const,
  },
  {
    product: "Sensibio H2O 500 ml",
    retailer: "Hjärtat",
    price: "159 kr",
    ref: "169 kr",
    margin: "6 %",
    velocity: "42 st/dag",
    verdict: "Skippa",
    tone: "loss" as const,
  },
];

function Arbitrage() {
  return (
    <>
      <PageHead
        eyebrow="Arbitrage"
        title="Rabatterade produkter värda att köpa"
        intro="Kombinerar rabatt mot referenspris med hur snabbt produkten faktiskt säljer. Hög takt + låg pris = värt att titta på."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Lägen just nu" value="46" sub="över tröskelvärdena" />
        <Stat label="Bästa marginal" value="39 %" sub="Effaclar Duo+ hos Kronans" tone="ok" />
        <Stat label="Snittmarginal" value="18 %" sub="på listade lägen" />
      </div>

      <Panel title="Kandidater" hint="Sorterat på marginal">
        <Table
          head={["Produkt", "Kedja", "Pris", "Referens", "Marginal", "Takt", "Omdöme"]}
          rows={deals.map((d) => [
            d.product,
            <span className="text-muted-foreground">{d.retailer}</span>,
            <span className="font-mono font-bold">{d.price}</span>,
            <span className="font-mono text-muted-foreground line-through">{d.ref}</span>,
            <span className="font-mono font-bold text-ok">{d.margin}</span>,
            <span className="font-mono text-muted-foreground">{d.velocity}</span>,
            <Tag tone={d.tone}>{d.verdict}</Tag>,
          ])}
        />
      </Panel>
    </>
  );
}
