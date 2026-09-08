import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Panel, Stat, Table, Tag } from "@/components/console-ui";

export const Route = createFileRoute("/konsol/outreach")({
  component: Outreach,
});

const nf = new Intl.NumberFormat("sv-SE");

const rows = [
  { brand: "Rogaine", contact: "Key account, Norden", loss: 429525, days: 6, status: "Mejlat" },
  { brand: "La Roche-Posay", contact: "E-handelschef", loss: 312400, days: 4, status: "Svar väntar" },
  { brand: "Vichy", contact: "Nordic e-comm", loss: 208750, days: 5, status: "Ej kontaktad" },
  { brand: "CeraVe", contact: "Trade marketing", loss: 164900, days: 3, status: "Möte bokat" },
  { brand: "Bioderma", contact: "Country manager", loss: 98300, days: 2, status: "Ej kontaktad" },
];

const tone = (s: string) =>
  s === "Möte bokat" ? "ok" : s === "Ej kontaktad" ? "neutral" : "loss";

const week = [
  { day: "Mån", stock: 780, out: false },
  { day: "Tis", stock: 612, out: false },
  { day: "Ons", stock: 240, out: false },
  { day: "Tor", stock: 0, out: true },
  { day: "Fre", stock: 0, out: true },
  { day: "Lör", stock: 0, out: true },
  { day: "Sön", stock: 460, out: false },
];

function Outreach() {
  return (
    <>
      <PageHead
        eyebrow="Lagerbortfall"
        title="Vad varumärkena tappar på tomma hyllor"
        intro="Uppskattad utebliven försäljning per varumärke, plus var i dialogen jag är med respektive kontakt."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Totalt bortfall" value="1 284 300 kr" sub="senaste 7 dagarna" tone="loss" />
        <Stat label="Produkter slut" value="412" sub="av 18 940 bevakade" tone="loss" />
        <Stat label="Snittdagar utan lager" value="3,4" sub="per drabbad produkt" />
      </div>

      <Panel title="Rogaine 5 % 3-pack · Apotea" hint="Lagersaldo dag för dag">
        <div className="flex h-40 items-end gap-3">
          {week.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
              <span className="font-mono text-xs text-muted-foreground">
                {nf.format(d.stock)}
              </span>
              <div
                className={`w-full rounded-t ${d.out ? "bg-loss/25" : "bg-ok/70"}`}
                style={{ height: d.out ? "6px" : `${(d.stock / 780) * 110}px` }}
              />
              <span className="text-xs text-muted-foreground">{d.day}</span>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Dialoger">
        <Table
          head={["Varumärke", "Kontakt", "Dagar slut", "Tappat", "Status"]}
          rows={rows.map((r) => [
            r.brand,
            <span className="text-muted-foreground">{r.contact}</span>,
            <span className="font-mono">{r.days}</span>,
            <span className="font-mono font-bold text-loss">−{nf.format(r.loss)} kr</span>,
            <Tag tone={tone(r.status) as "ok" | "loss" | "neutral"}>{r.status}</Tag>,
          ])}
        />
      </Panel>
    </>
  );
}
