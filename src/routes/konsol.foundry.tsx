import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Panel, Stat, Table, Tag } from "@/components/console-ui";

export const Route = createFileRoute("/konsol/foundry")({
  component: Foundry,
});

const gaps = [
  {
    product: "Effaclar Serum 30 ml",
    demand: "Hög",
    missing: "Lyko, Hjärtat",
    potential: "84 000 kr/mån",
  },
  {
    product: "Rogaine Foam 60 ml",
    demand: "Hög",
    missing: "Kronans",
    potential: "61 500 kr/mån",
  },
  {
    product: "Vichy Dercos Schampo",
    demand: "Medel",
    missing: "Hjärtat",
    potential: "29 800 kr/mån",
  },
  {
    product: "CeraVe SA Smoothing Cream",
    demand: "Medel",
    missing: "Lyko",
    potential: "24 200 kr/mån",
  },
];

function Foundry() {
  return (
    <>
      <PageHead
        eyebrow="Foundry"
        title="Produkter som borde finnas i hyllan"
        intro="Artiklar med tydlig efterfrågan hos en kedja men som saknas hos en annan. Idéunderlag för sortiment och listning."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Luckor hittade" value="129" sub="över alla kedjor" />
        <Stat label="Uppskattad potential" value="1,9 Mkr" sub="per månad" tone="ok" />
        <Stat label="Starkaste kategori" value="Hårbottenvård" sub="+42 % takt" tone="ok" />
      </div>

      <Panel title="Toppförslag" hint="Sorterat på potential">
        <Table
          head={["Produkt", "Efterfrågan", "Saknas hos", "Potential"]}
          rows={gaps.map((g) => [
            g.product,
            <Tag tone={g.demand === "Hög" ? "ok" : "neutral"}>{g.demand}</Tag>,
            <span className="text-muted-foreground">{g.missing}</span>,
            <span className="font-mono font-bold text-ok">{g.potential}</span>,
          ])}
        />
      </Panel>
    </>
  );
}
