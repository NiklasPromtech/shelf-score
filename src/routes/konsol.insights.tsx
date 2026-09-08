import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Panel, Stat, Table, Bar } from "@/components/console-ui";

export const Route = createFileRoute("/konsol/insights")({
  component: Insights,
});

const movers = [
  { product: "Effaclar Duo+ 40 ml", retailer: "Kronans", units: 1240 },
  { product: "Rogaine 5 % 3-pack", retailer: "Apotea", units: 870 },
  { product: "Minéral 89 50 ml", retailer: "Lyko", units: 640 },
  { product: "CeraVe Lotion 473 ml", retailer: "Hjärtat", units: 512 },
  { product: "Sensibio H2O 500 ml", retailer: "Apotea", units: 498 },
];

const categories = [
  { name: "Ansiktsvård", trend: "+18 %", tone: "ok" as const },
  { name: "Solskydd", trend: "−31 %", tone: "loss" as const },
  { name: "Hårbottenvård", trend: "+42 %", tone: "ok" as const },
  { name: "Kroppslotion", trend: "+6 %", tone: "ok" as const },
];

function Insights() {
  return (
    <>
      <PageHead
        eyebrow="Insikter"
        title="Vad som rör sig i sortimentet"
        intro="Försäljningstakt, kategoritrender och prisrörelser över alla bevakade kedjor."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Positioner flyttade" value="133 686" sub="senaste dygnet" tone="ok" />
        <Stat label="Prisändringar" value="2 418" sub="senaste dygnet" />
        <Stat label="Nya artiklar" value="87" sub="senaste veckan" tone="ok" />
      </div>

      <Panel title="Snabbast säljande" hint="Enheter per dag">
        <Table
          head={["Produkt", "Kedja", "Takt", ""]}
          rows={movers.map((m) => [
            m.product,
            <span className="text-muted-foreground">{m.retailer}</span>,
            <span className="font-mono font-bold text-ok">{m.units} st/dag</span>,
            <Bar pct={(m.units / 1240) * 100} />,
          ])}
        />
      </Panel>

      <Panel title="Kategoritrender" hint="Mot föregående vecka">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.name} className="rounded-lg border border-border p-4">
              <p className="text-sm font-medium">{c.name}</p>
              <p
                className={`mt-1 font-mono text-xl font-bold ${
                  c.tone === "ok" ? "text-ok" : "text-loss"
                }`}
              >
                {c.trend}
              </p>
            </div>
          ))}
        </div>
      </Panel>
    </>
  );
}
