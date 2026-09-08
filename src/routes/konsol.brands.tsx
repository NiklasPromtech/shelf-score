import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Panel, Stat, Table, Tag, Bar } from "@/components/console-ui";

export const Route = createFileRoute("/konsol/brands")({
  component: Brands,
});

const nf = new Intl.NumberFormat("sv-SE");

const brands = [
  { brand: "La Roche-Posay", skus: 148, retailers: 4, loss: 312400, health: 71 },
  { brand: "Rogaine", skus: 12, retailers: 2, loss: 429525, health: 42 },
  { brand: "Vichy", skus: 96, retailers: 4, loss: 208750, health: 78 },
  { brand: "CeraVe", skus: 64, retailers: 3, loss: 164900, health: 84 },
  { brand: "Bioderma", skus: 51, retailers: 3, loss: 98300, health: 88 },
  { brand: "Avène", skus: 73, retailers: 3, loss: 70425, health: 91 },
];

function Brands() {
  return (
    <>
      <PageHead
        eyebrow="Varumärken"
        title="Alla varumärken vi bevakar"
        intro="Hyllhälsa = andel dagar under perioden då varumärkets säljande produkter faktiskt gick att köpa hos återförsäljarna."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Varumärken" value="184" sub="i bevakning" />
        <Stat label="Artiklar" value={nf.format(18940)} sub="unika SKU" />
        <Stat label="Snitt hyllhälsa" value="82 %" sub="senaste 7 dagarna" tone="ok" />
      </div>

      <Panel title="Topp 6 på tappad försäljning">
        <Table
          head={["Varumärke", "SKU", "Kedjor", "Tappat", "Hyllhälsa", ""]}
          rows={brands.map((b) => [
            b.brand,
            <span className="font-mono text-muted-foreground">{b.skus}</span>,
            <span className="font-mono text-muted-foreground">{b.retailers}</span>,
            <span className="font-mono font-bold text-loss">−{nf.format(b.loss)} kr</span>,
            <Tag tone={b.health >= 80 ? "ok" : "loss"}>{b.health} %</Tag>,
            <Bar pct={b.health} tone={b.health >= 80 ? "ok" : "loss"} />,
          ])}
        />
      </Panel>
    </>
  );
}
