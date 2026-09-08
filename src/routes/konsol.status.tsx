import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Panel, Stat, Table, Tag, Bar } from "@/components/console-ui";

export const Route = createFileRoute("/konsol/status")({
  component: Status,
});

const jobs = [
  { retailer: "Apotea", last: "04:12", products: "8 420", coverage: 100, state: "OK" },
  { retailer: "Kronans", last: "04:31", products: "4 910", coverage: 99.9, state: "OK" },
  { retailer: "Lyko", last: "04:44", products: "3 380", coverage: 99.8, state: "OK" },
  { retailer: "Hjärtat", last: "05:02", products: "2 230", coverage: 99.8, state: "Fördröjd" },
];

function Status() {
  return (
    <>
      <PageHead
        eyebrow="Status"
        title="Insamlingen senaste dygnet"
        intro="Driftvy: när varje kedja senast lästes av och hur stor del av det säljande sortimentet som fångades."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <Stat label="Körningar i tid" value="3 av 4" sub="senaste natten" tone="ok" />
        <Stat label="Avlästa artiklar" value="18 940" sub="senaste dygnet" />
        <Stat label="Fel" value="0" sub="senaste 7 dagarna" tone="ok" />
      </div>

      <Panel title="Per kedja">
        <Table
          head={["Kedja", "Senast", "Artiklar", "Täckning", "", "Status"]}
          rows={jobs.map((j) => [
            j.retailer,
            <span className="font-mono text-muted-foreground">{j.last}</span>,
            <span className="font-mono text-muted-foreground">{j.products}</span>,
            <span className="font-mono font-bold text-ok">
              {j.coverage.toLocaleString("sv-SE")} %
            </span>,
            <Bar pct={j.coverage} />,
            <Tag tone={j.state === "OK" ? "ok" : "neutral"}>{j.state}</Tag>,
          ])}
        />
      </Panel>

      <Panel title="Historik" hint="Senaste 7 dygnen">
        <div className="flex items-end gap-2">
          {[100, 99.9, 100, 99.7, 100, 99.8, 99.9].map((v, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-2">
              <div
                className="w-full rounded-t bg-ok/70"
                style={{ height: `${(v - 99) * 90}px` }}
              />
              <span className="font-mono text-xs text-muted-foreground">
                {v.toLocaleString("sv-SE")}
              </span>
            </div>
          ))}
        </div>
      </Panel>
    </>
  );
}
