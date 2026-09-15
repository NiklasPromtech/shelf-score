import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/branding-guidelines")({
  head: () => ({
    meta: [
      { title: "Branding Guidelines | ShelfScore" },
      { name: "description", content: "ShelfScores riktlinjer för typografi, färg, tabeller, diagram och datadriven animation." },
      { property: "og:title", content: "Branding Guidelines | ShelfScore" },
      { property: "og:description", content: "Det visuella systemet bakom ShelfScores rapporter och presentationer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BrandingGuidelines,
});

const colors = [
  ["Papper", "#FFFFFF", "Bakgrund och luft"], ["Trycksvärta", "#101114", "Fakta, rubriker och huvudlinjer"],
  ["Linjegrå", "#D9D9D6", "Sekundära regler och kontext"], ["Signalröd", "#C92A2A", "Tapp, risk och slut i lager"],
];

const BRAND_SPEC = `ShelfScore – varumärkesspecifikation (skicka detta till den som bygger sidorna)

VARUMÄRKESIDÉ
- ShelfScore ska kännas som en granskad finansiell rapport: tydlig, exakt, saklig och lugn.
- Grundprincipen är “bevis före dekor”. Formen ska göra datan lättare att förstå, aldrig mer dramatisk än underlaget.
- Varje vy börjar med en slutsats i vanlig svenska och ett tydligt affärskritiskt tal.
- Struktur, linjer, tabelljustering och konsekvent typografi bär identiteten.

FÄRG
- Papper: #FFFFFF. Används för bakgrund och luft.
- Trycksvärta: #101114. Används för fakta, rubriker, siffror och huvudlinjer.
- Linjegrå: #D9D9D6. Används för sekundära linjer, jämförelser och kontext.
- Signalröd: #C92A2A. Används ENDAST för ekonomiskt tapp, risk, negativ avvikelse eller noll i lager.
- Rött är aldrig dekor. Om allt är rött betyder inget rött någonting.
- Inga gradienter, glans, genomskinliga färgskikt eller fler konkurrerande accentfärger.

TYPOGRAFI
- Space Mono 700: huvudrubriker, sektionsrubriker, etiketter, tabellhuvuden och alla siffror.
- Rubik 400: brödtext, förklaringar och längre resonemang. Rubik 600–700 får användas sparsamt för betoning.
- Rubriker och korta etiketter skrivs med versaler. Brödtext skrivs normalt, aldrig som teknisk jargong.
- Skriv konkret: “429 525 kr i beräknat bortfall under sex dagar”, inte abstrakta superlativ.
- Svenska tusentalsavstånd: 1 284 300 kr. Aldrig komma som tusentalsavskiljare.
- Varje tal märks som fakta, prognos eller exempel.

FORM OCH RASTER
- Hårda kanter: 1–2 px linjer och 0–4 px hörnradie.
- Inga mjuka skuggor, kapslar, flytande kort, bokeh, dekorativa former eller 3D-effekter.
- Sektioner möts kant i kant med linjer. Lägg inte kort inuti kort.
- Använd tydliga kolumnraster, konsekventa marginaler och generöst tomrum.
- En sida har en H1. Numrera rapportavsnitt 01, 02, 03 och så vidare.
- Endast en sak per vy får kräva uppmärksamhet.

LOGOTYP OCH AVSÄNDARE
- Skriv ordmärket som ShelfScore. “Shelf” i trycksvärta och “Score” i signalrött när färg används.
- Ordmärket sätts i Space Mono 700 och ska vara tydligt men inte större än rapportens slutsats.
- Lägg alltid till tydlig rapportavsändare, period, status och källa där det är relevant.
- Förvräng, skugga, luta eller placera aldrig ordmärket i en kapsel.

KNAPPAR OCH LÄNKAR
- Primär handling: rektangulär svart yta, vit Space Mono-text och högst 4 px radie.
- Vid fokus eller pekning får primär handling bli signalröd om handlingen rör analysens slutsats.
- Sekundära handlingar använder vit bakgrund och 1–2 px svart linje.
- Textlänkar är korta och tydliga. Aktiv navigering markeras med rak understrykning.
- Undvik flera likvärdiga huvudknappar i samma vy.

TABELLER
- Rubriker och text vänsterställs. Alla siffror högerställs och sätts i Space Mono.
- Tabellhuvudet är svart med vit text. Rader separeras med raka 1 px-linjer.
- Signalrött används endast i den cell eller rad som faktiskt visar tapp eller risk.
- Behåll kolumnjämförelsen. På liten skärm får breda datatabeller rulla inom sin egen yta.
- Visa enhet direkt med värdet: kr, %, dagar eller SKU.

DIAGRAM
- Varje diagram ska besvara en tydlig fråga och bära en enda slutsats.
- Baslinje, axel och jämförelsevärde ska vara synliga innan data animeras.
- Svart visar observerade värden. Grått visar kontext, prognos eller jämförelse. Rött visar brist, risk eller bortfall.
- Undvik 3D-diagram, dekorativa färgskalor, dubbla axlar och rörelse utan informationsvärde.
- Diagrammet ska ha ett begripligt statiskt slutläge som kan skärmdumpas.

SIDSTRUKTUR
- Rapporthuvud: avsändare, rapport-ID, period, omfattning och datastatus.
- Slutsats: viktigaste affärstalet först, följt av en kort förklaring.
- Underlag: tabell, tidslinje eller diagram som visar hur slutsatsen räknats fram.
- Konsekvens: vad tappet eller möjligheten betyder för varumärket.
- Nästa steg: en tydlig handling eller kontakt, utan aggressivt säljspråk.

TONALITET
- Saklig, direkt och lugn. Skriv som en analytiker, inte som en reklambyrå.
- Visa reservationer öppet: “beräknat”, “exempeldata”, period och källa.
- Undvik buzzwords, vaga löften, utropstecken och påståenden som datan inte stöder.
- Led med affärskonsekvensen, förklara därefter metoden.

MOBIL OCH TILLGÄNGLIGHET
- Mobil använder en kolumn. Innehåll får aldrig överlappa eller bli avklippt.
- Brödtext och huvudtal ska kunna läsas utan zoom. Interaktiva ytor ska vara minst 44 px höga.
- Kontrast minst 4,5:1 för all text. Röd text används på vit bakgrund, aldrig på svart.
- Färg får aldrig vara den enda betydelsebäraren; komplettera med ord, symbol eller etikett.
- Vid prefers-reduced-motion visas alltid animationens färdiga slutläge direkt.

KVALITETSKONTROLL
- Förstår en kund slutsatsen inom tio sekunder?
- Finns bara en primär signal per vy?
- Är varje siffra märkt som fakta, prognos eller exempel?
- Är siffror högerställda och skrivna med svenska tusentalsavstånd?
- Är rött reserverat för risk, tapp och noll lager?
- Fungerar sidan i en kolumn på mobil och som ett statiskt dokument utan animation?
`;

function GuideSection({ number, title, intro, children }: { number: string; title: string; intro: string; children: React.ReactNode }) {
  return (
    <section className="border-t-2 border-foreground py-12 md:py-16">
      <header className="grid gap-4 md:grid-cols-[8rem_1fr]">
        <p className="font-mono text-xs font-bold text-loss">{number}</p>
        <div><h2 className="font-mono text-2xl font-bold uppercase md:text-4xl">{title}</h2><p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{intro}</p></div>
      </header>
      <div className="mt-8 md:ml-[8rem]">{children}</div>
    </section>
  );
}

function DoDont({ good, bad }: { good: string; bad: string }) {
  return <div className="grid border-2 border-foreground sm:grid-cols-2"><div className="p-5"><p className="font-mono text-[10px] font-bold uppercase text-muted-foreground">Gör</p><p className="mt-3 text-sm leading-6">{good}</p></div><div className="border-t-2 border-foreground p-5 sm:border-l-2 sm:border-t-0"><p className="font-mono text-[10px] font-bold uppercase text-loss">Undvik</p><p className="mt-3 text-sm leading-6">{bad}</p></div></div>;
}

function BrandingGuidelines() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(BRAND_SPEC);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <header className="border-x-2 border-b-2 border-foreground p-6 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div><p className="font-mono text-xs font-bold uppercase text-muted-foreground">ShelfScore / System 01</p><h1 className="mt-4 max-w-4xl font-mono text-4xl font-bold uppercase leading-[1.05] sm:text-6xl md:text-7xl">Branding<br /><span className="text-loss">Guidelines</span></h1></div>
            <div className="border-2 border-foreground p-4 font-mono text-xs uppercase"><p className="text-muted-foreground">Princip</p><p className="mt-2 font-bold">Bevis före dekor</p><p className="mt-4 text-muted-foreground">Version</p><p className="mt-2 font-bold">01 / 2026</p></div>
          </div>
          <p className="mt-12 max-w-2xl text-lg leading-8">ShelfScore ska kännas som en rapport man vågar fatta beslut på: tydlig, exakt och lugn. Formen gör datan lättare att förstå, aldrig mer dramatisk än underlaget.</p>
        </header>

        <GuideSection number="01" title="Grundprinciper" intro="Tre regler styr allt från en säljsida till en animerad datapresentation.">
          <div className="grid border-2 border-foreground md:grid-cols-3">
            {[
              ["01", "En slutsats först", "Varje vy börjar med den viktigaste insikten, uttryckt i vanlig svenska och ett tydligt tal."],
              ["02", "Struktur är identitet", "Rytm, linjer, tabelljustering och konsekvent typografi bär varumärket."],
              ["03", "En signal i taget", "Endast en datapunkt, rörelse eller färg får kräva uppmärksamhet samtidigt."],
            ].map(([n, title, copy], index) => <article key={n} className={`p-6 ${index < 2 ? "border-b-2 border-foreground md:border-b-0 md:border-r-2" : ""}`}><span className="font-mono text-xs font-bold text-loss">{n}</span><h3 className="mt-8 font-mono text-lg font-bold uppercase">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{copy}</p></article>)}
          </div>
        </GuideSection>

        <GuideSection number="02" title="Ord och typografi" intro="Space Mono gör data, rubriker och etiketter exakta. Rubik bär resonemanget utan att konkurrera med siffrorna.">
          <div className="border-2 border-foreground">
            <div className="grid border-b-2 border-foreground p-6 md:grid-cols-[12rem_1fr]"><span className="font-mono text-xs uppercase text-muted-foreground">Display / Space Mono 700</span><p className="mt-5 font-mono text-4xl font-bold uppercase leading-tight md:mt-0 md:text-6xl">1 284 300 SEK</p></div>
            <div className="grid border-b-2 border-foreground p-6 md:grid-cols-[12rem_1fr]"><span className="font-mono text-xs uppercase text-muted-foreground">Rubrik / Space Mono 700</span><p className="mt-5 font-mono text-2xl font-bold uppercase md:mt-0 md:text-3xl">Kampanjvärdet försvinner vid noll</p></div>
            <div className="grid p-6 md:grid-cols-[12rem_1fr]"><span className="font-mono text-xs uppercase text-muted-foreground">Bröd / Rubik 400</span><p className="mt-5 max-w-xl text-base leading-7 md:mt-0">Skriv lugnt och konkret. Läsaren ska förstå affärskonsekvensen utan att först behöva förstå metoden.</p></div>
          </div>
          <div className="mt-5"><DoDont good="Skriv ‘429 525 kr i beräknat bortfall under sex dagar’." bad="Skriv inte ‘AI-driven next-generation revenue intelligence’." /></div>
        </GuideSection>

        <GuideSection number="03" title="Färg och signal" intro="Paletten är nästan monokrom. Rött är ett semantiskt verktyg, inte dekoration.">
          <div className="grid border-l-2 border-t-2 border-foreground sm:grid-cols-2 lg:grid-cols-4">
            {colors.map(([name, hex, use], index) => <article key={name} className="border-b-2 border-r-2 border-foreground"><div className={`h-28 ${index === 0 ? "bg-background" : index === 1 ? "bg-foreground" : index === 2 ? "bg-muted" : "bg-loss"}`} /><div className="p-4"><div className="flex justify-between gap-3 font-mono text-xs font-bold uppercase"><span>{name}</span><span>{hex}</span></div><p className="mt-3 text-xs text-muted-foreground">{use}</p></div></article>)}
          </div>
          <p className="mt-4 border-l-4 border-loss pl-4 text-sm leading-6"><strong>Signalregeln:</strong> använd rött för förlust, risk, negativ avvikelse eller noll lager. Om allt är rött betyder inget rött någonting.</p>
        </GuideSection>

        <GuideSection number="04" title="Form och gränssnitt" intro="Ytor möts med linjer. Innehåll ska inte flyta runt i mjuka kort.">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="border-2 border-foreground p-6"><p className="font-mono text-[10px] font-bold uppercase text-muted-foreground">Primär handling</p><a href="#charts" className="mt-6 inline-flex min-h-12 items-center bg-foreground px-5 font-mono text-xs font-bold uppercase text-background transition-colors hover:bg-loss">Se diagramregler →</a></div>
            <div className="border-2 border-foreground p-6"><p className="font-mono text-[10px] font-bold uppercase text-muted-foreground">Informationsetikett</p><div className="mt-6 inline-flex border border-loss px-3 py-1 font-mono text-[10px] font-bold uppercase text-loss">Risk / slut dag 4</div></div>
          </div>
          <div className="mt-5"><DoDont good="Använd 1–2 px linjer, 0–4 px hörn och fasta raster." bad="Undvik kapslar, stora radier, glans, gradienter och dekorativa skuggor." /></div>
        </GuideSection>

        <GuideSection number="05" title="Tabeller" intro="Tabeller ska gå att skanna radvis och jämföra kolumnvis. Siffror är alltid högerställda och monospaced.">
          <div className="overflow-x-auto border-2 border-foreground"><table className="w-full min-w-[600px] text-left text-sm"><thead className="bg-foreground font-mono text-[10px] uppercase text-background"><tr><th className="p-4">Produkt</th><th className="p-4">Kedja</th><th className="p-4 text-right">Dagar slut</th><th className="p-4 text-right">Bortfall</th></tr></thead><tbody><tr className="border-t border-foreground"><td className="p-4 font-bold">Rogaine 5 %</td><td className="p-4 text-muted-foreground">Apotea</td><td className="p-4 text-right font-mono">6</td><td className="p-4 text-right font-mono font-bold text-loss">−429 525 kr</td></tr><tr className="border-t border-foreground"><td className="p-4 font-bold">Minéral 89</td><td className="p-4 text-muted-foreground">Lyko</td><td className="p-4 text-right font-mono">0</td><td className="p-4 text-right font-mono font-bold">0 kr</td></tr></tbody></table></div>
          <ul className="mt-5 grid gap-px bg-foreground font-mono text-xs uppercase sm:grid-cols-3"><li className="bg-background p-4">01 / Rubriker till vänster</li><li className="bg-background p-4">02 / Siffror till höger</li><li className="bg-background p-4">03 / Röd endast vid avvikelse</li></ul>
        </GuideSection>

        <GuideSection number="06" title="Charts" intro="Diagrammet ska besvara en fråga. Axlar, baslinjer och jämförelser måste synas innan animationen börjar." >
          <div id="charts" className="grid border-2 border-foreground lg:grid-cols-[1.3fr_.7fr]">
            <div className="p-6 lg:border-r-2 lg:border-foreground"><p className="font-mono text-[10px] font-bold uppercase text-muted-foreground">Exempel / lager under kampanj</p><div className="mt-8 flex h-52 items-end gap-4 border-b-2 border-foreground">{[92,72,36,3,3,3,55].map((height, index) => <div key={index} className="flex h-full flex-1 flex-col justify-end"><span className={`mb-2 text-center font-mono text-[10px] font-bold ${index > 2 && index < 6 ? "text-loss" : ""}`}>{index > 2 && index < 6 ? "0" : height}</span><div className={`chart-rise w-full border-x border-t border-foreground ${index > 2 && index < 6 ? "bg-loss" : "bg-foreground"}`} style={{ height: `${height}%`, animationDelay: `${index * 70}ms` }} /></div>)}</div><div className="mt-3 grid grid-cols-7 text-center font-mono text-[9px] font-bold"><span>MÅN</span><span>TIS</span><span>ONS</span><span>TOR</span><span>FRE</span><span>LÖR</span><span>SÖN</span></div></div>
            <div className="divide-y-2 divide-foreground"><div className="p-5"><p className="font-mono text-[10px] uppercase text-muted-foreground">Svart</p><p className="mt-2 text-sm">Observerade värden och normal utveckling.</p></div><div className="p-5"><p className="font-mono text-[10px] uppercase text-loss">Rött</p><p className="mt-2 text-sm">Brist, risk eller ekonomiskt bortfall.</p></div><div className="p-5"><p className="font-mono text-[10px] uppercase text-muted-foreground">Grått</p><p className="mt-2 text-sm">Jämförelse, prognos eller sekundär kontext.</p></div></div>
          </div>
          <div className="mt-5"><DoDont good="Visa baslinjen och låt en serie eller datapunkt bära slutsatsen." bad="Använd inte flera konkurrerande färger, 3D-diagram eller rörelse utan informationsvärde." /></div>
        </GuideSection>

        <GuideSection number="07" title="Rörelse" intro="Rörelse förklarar orsak och förlopp. Den får aldrig bli ett lager av dekoration ovanpå datan.">
          <div className="grid border-2 border-foreground md:grid-cols-4">
            {[
              ["0–0,4 s", "Entré", "Rubrik och huvudtal kommer in snabbt med ease-out."],
              ["0,4–7 s", "Förlopp", "Lager dräneras linjärt; tidslinjer och kurvor ritas i läsordning."],
              ["7–9 s", "Slutsats", "Nyckeltalet räknas upp och hålls stilla så det går att läsa."],
              ["9–10 s", "Omstart", "En kort, lugn återställning. Ingen blinkning eller dramatisk wipe."],
            ].map(([time, title, copy], index) => <article key={time} className={`p-5 ${index < 3 ? "border-b-2 border-foreground md:border-b-0 md:border-r-2" : ""}`}><p className="font-mono text-xs font-bold text-loss">{time}</p><h3 className="mt-5 font-mono text-sm font-bold uppercase">{title}</h3><p className="mt-2 text-xs leading-5 text-muted-foreground">{copy}</p></article>)}
          </div>
          <div className="mt-6 border-2 border-foreground p-6"><div className="flex items-center justify-between font-mono text-[10px] font-bold uppercase"><span>Informationsflöde</span><span>En signal åt gången</span></div><div className="mt-6 h-2 overflow-hidden bg-muted"><div className="motion-demo h-full w-1/3 bg-loss" /></div></div>
          <p className="mt-5 text-sm leading-6"><strong>Reducerad rörelse:</strong> om besökaren valt mindre rörelse visas alltid animationens tydliga slutläge direkt. Ingen information får vara beroende av att något rör sig.</p>
        </GuideSection>

        <GuideSection number="08" title="Animerade presentationer" intro="Systemet ska bära både ‘Erbjudandet’ med 26 scener och ‘45 sanningar om hyllan’ utan att de känns som separata varumärken.">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="border-2 border-foreground p-6"><p className="font-mono text-xs font-bold text-loss">26 SCENER</p><h3 className="mt-5 font-mono text-xl font-bold uppercase">Visste du att … + erbjudandet</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Fakta först, sedan en tjänst och tre konkreta leverabler. Erbjudandet kommer in först när faktan har etablerats.</p><div className="mt-6 border-t-2 border-foreground pt-4 font-mono text-[10px] uppercase">Fakta → visualisering → så hjälper vi dig</div></article>
            <article className="border-2 border-foreground p-6"><p className="font-mono text-xs font-bold text-loss">45 SCENER</p><h3 className="mt-5 font-mono text-xl font-bold uppercase">Sanningar om hyllan</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">En minnesbild per sanning. Quizläge döljer talet men inte berättelsen; presenterläge visar källor och reservationer internt.</p><div className="mt-6 border-t-2 border-foreground pt-4 font-mono text-[10px] uppercase">Bild → förlopp → nyckeltal → säljsamtal</div></article>
          </div>
        </GuideSection>

        <GuideSection number="09" title="Kvalitetskontroll" intro="Innan något publiceras ska det fungera som information, inte bara se konsekvent ut.">
          <ol className="border-2 border-foreground font-mono text-sm uppercase">{[
            "Förstår en kund slutsatsen på tio sekunder?", "Finns bara en primär signal per vy?", "Är varje siffra märkt som fakta, prognos eller exempel?", "Fungerar tabeller utan horisontell krock på mobil?", "Finns ett statiskt slutläge utan rörelse?", "Är rött reserverat för risk och tapp?",
          ].map((item, index) => <li key={item} className="grid grid-cols-[3rem_1fr] border-b border-foreground last:border-b-0"><span className="border-r border-foreground p-4 text-loss">{String(index + 1).padStart(2, "0")}</span><span className="p-4">{item}</span></li>)}</ol>
        </GuideSection>
        <GuideSection number="10" title="Specifikation att skicka vidare" intro="Kopiera hela texten och ge den till den som bygger en ShelfScore-sida, rapport eller presentation. Den sammanfattar systemet utan att mottagaren behöver läsa hela guiden.">
          <button
            type="button"
            onClick={copy}
            className="mb-5 inline-flex min-h-12 items-center bg-foreground px-5 font-mono text-xs font-bold uppercase text-background transition-colors hover:bg-loss"
          >
            {copied ? "Kopierad ✓" : "Kopiera varumärkesspecifikationen"}
          </button>
          <pre className="overflow-x-auto whitespace-pre-wrap border-2 border-foreground bg-muted/40 p-5 font-mono text-[11px] leading-5">
            {BRAND_SPEC}
          </pre>
        </GuideSection>
        <footer className="flex flex-wrap justify-between gap-3 border-t-2 border-foreground pt-4 font-mono text-[10px] uppercase text-muted-foreground"><span>ShelfScore / Branding Guidelines</span><span>Bevis före dekor</span></footer>
      </main>
    </div>
  );
}
