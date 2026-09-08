import { createFileRoute } from "@tanstack/react-router";
import { PageHead, Panel, Stat, Table, Tag, Bar } from "@/components/console-ui";

export const Route = createFileRoute("/konsol/")({
  component: OfferAnalysis,
});

const offers = [
  {
    product: "Effaclar Duo+ 40 ml",
    brand: "La Roche-Posay",
    retailer: "Kronans",
    normal: 249,
    campaign: 179,
    lift: 40,
    stock: "Slut dag 4 av 7",
    tone: "loss" as const,
  },
  {
    product: "Minéral 89 50 ml",
    brand: "Vichy",
    retailer: "Lyko",
    normal: 329,
    campaign: 229,
    lift: 12,
    stock: "Höll hela perioden",
    tone: "ok" as const,
  },
  {
    product: "Rogaine 5 % 3-pack",
    brand: "Rogaine",
    retailer: "Apotea",
    normal: 699,
    campaign: 599,
    lift: 22,
    stock: "Slut dag 2 av 7",
    tone: "loss" as const,
  },
  {
    product: "Moisturising Lotion 473 ml",
    brand: "CeraVe",
    retailer: "Hjärtat",
    normal: 189,
    campaign: 149,
    lift: 7,
    stock: "Slut sista dagen",
    tone: "loss" as const,
  },
  {
    product: "Sensibio H2O 500 ml",
    brand: "Bioderma",
    retailer: "Apotea",
    normal: 179,
    campaign: 139,
    lift: 5,
    stock: "Höll hela perioden",
    tone: "ok" as const,
  },
];

const maxLift = Math.max(...offers.map((o) => o.lift));

function OfferAnalysis() {
  return (
    <>
      <PageHead
        eyebrow="Kampanjanalys · vecka 36"
        title="Vilka kampanjer lyfte — och höll lagret?"
        intro="Vi jämför försäljningstakt före och under kampanjen, och markerar kampanjer där hyllan tog slut innan perioden var över."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Kampanjer i mätning" value="38" sub="senaste 7 dagarna" />
        <Stat label="Snittlyft" value="×14,2" sub="mot normal takt" tone="ok" />
        <Stat label="Slut före kampanjslut" value="17" sub="av 38 kampanjer" tone="loss" />
        <Stat label="Tappat under kampanj" value="742 900 kr" sub="uppskattat" tone="loss" />
      </div>

      <Panel title="Kampanjer" hint="Sorterat på lyft">
        <Table
          head={["Produkt", "Varumärke", "Kedja", "Pris", "Lyft", "Lager", ""]}
          rows={offers.map((o) => [
            o.product,
            <span className="text-muted-foreground">{o.brand}</span>,
            <span className="text-muted-foreground">{o.retailer}</span>,
            <span className="font-mono">
              <span className="text-muted-foreground line-through">{o.normal}</span>{" "}
              <span className="font-bold">{o.campaign} kr</span>
            </span>,
            <span className="font-mono font-bold text-ok">×{o.lift}</span>,
            <Tag tone={o.tone}>{o.stock}</Tag>,
            <Bar pct={(o.lift / maxLift) * 100} tone={o.tone} />,
          ])}
        />
      </Panel>

      <Panel title="Slutsats" hint="Exempeldata">
        <p className="text-sm text-muted-foreground">
          De fyra kampanjer som tog slut i förtid stod för nästan hela det
          uppskattade bortfallet. Ett larm två dagar innan lagret nådde noll hade
          räckt för att hinna fylla på.
        </p>
      </Panel>
    </>
  );
}
