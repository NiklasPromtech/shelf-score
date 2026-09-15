import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/rorelse")({
  head: () => ({
    meta: [
      { title: "Rörelse och animation | ShelfScore" },
      {
        name: "description",
        content:
          "ShelfScores rörelsesystem: levande exempel på diagramanimationer, förlopp och nyckeltal, plus en färdig specifikation att skicka vidare.",
      },
      { property: "og:title", content: "Rörelse och animation | ShelfScore" },
      {
        property: "og:description",
        content: "Levande animationsexempel och en färdig brief för animerade scener.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: MotionPage,
});

const LOOP = 8000;

function useLoop() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), LOOP);
    return () => clearInterval(id);
  }, []);
  return tick;
}

function CountUp({ to, duration = 2200, suffix = "" }: { to: number; duration?: number; suffix?: string }) {
  const tick = useLoop();
  const [value, setValue] = useState(0);
  const raf = useRef<number>(0);
  useEffect(() => {
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [tick, to, duration]);
  return (
    <span>
      {new Intl.NumberFormat("sv-SE").format(value)}
      {suffix}
    </span>
  );
}

function Demo({
  number,
  title,
  when,
  children,
}: {
  number: string;
  title: string;
  when: string;
  children: React.ReactNode;
}) {
  return (
    <article className="border-2 border-foreground">
      <header className="flex items-baseline justify-between gap-4 border-b-2 border-foreground p-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[10px] font-bold text-loss">{number}</span>
          <h3 className="font-mono text-sm font-bold uppercase">{title}</h3>
        </div>
        <span className="font-mono text-[10px] uppercase text-muted-foreground">8 s loop</span>
      </header>
      <div className="p-5">{children}</div>
      <footer className="border-t-2 border-foreground p-4 font-mono text-[10px] uppercase text-muted-foreground">
        Använd när: {when}
      </footer>
    </article>
  );
}

function Section({
  number,
  title,
  intro,
  children,
}: {
  number: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t-2 border-foreground py-12 md:py-16">
      <header className="grid gap-4 md:grid-cols-[8rem_1fr]">
        <p className="font-mono text-xs font-bold text-loss">{number}</p>
        <div>
          <h2 className="font-mono text-2xl font-bold uppercase md:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{intro}</p>
        </div>
      </header>
      <div className="mt-8 md:ml-[8rem]">{children}</div>
    </section>
  );
}

const week = [92, 74, 38, 3, 3, 3, 58];
const days = ["MÅN", "TIS", "ONS", "TOR", "FRE", "LÖR", "SÖN"];

const SPEC = `ShelfScore – animationsspecifikation (skicka detta till den som bygger scenerna)

UTTRYCK
- Vit bakgrund (#FFFFFF), nästan svart text (#101114), linjegrå (#D9D9D6), signalröd (#C92A2A).
- Space Mono 700 för rubriker, etiketter och alla siffror. Rubik 400 för längre text.
- Hårda kanter: 1–2 px linjer, 0–4 px hörnradie. Inga skuggor, gradienter, glans eller flytande kort.
- Rött används ENDAST för tapp, risk, noll i lager eller negativ avvikelse. Aldrig som dekor.

TAJMING (varje scen är 8–12 s och loopar)
1. 0–0,4 s: rubrik och etiketter in, ease-out, 12 px uppåt, ingen skalning.
2. 0,4–4 s: förloppet ritas linjärt i läsordning (vänster till höger, topp till botten). Stagger 60–90 ms.
3. 4–7 s: nyckeltalet räknas upp (cubic ease-out) och ramas in.
4. 7–9 s: allt står helt stilla så det går att läsa och skärmdumpas.
5. Sista 0,5 s: lugn återställning. Ingen wipe, ingen blinkning, ingen ljudeffekt.

REGLER
- En signal per scen: bara en sak får röra sig eller vara röd samtidigt.
- Baslinje, axel och jämförelsevärde ska vara synliga INNAN rörelsen startar.
- Animera aldrig något som inte finns i datan. Ingen rörelse utan informationsvärde.
- Siffror ändras bara uppåt mot sitt slutvärde, aldrig i slumpmässig scroll.
- Svenska tusentalsavstånd (429 525 kr), aldrig komma.
- Varje siffra ska märkas som fakta, prognos eller exempel.

RÖRELSEPRIMITIV (använd dessa, hitta inte på nya)
- Stapel upp: scaleY 0 → 1 från baslinjen, 0,4 s, stagger 70 ms.
- Lagerdränering: scaleY 1 → 0 linjärt, röd färg sätts i samma sekund som värdet blir noll.
- Kurva: stroke-dashoffset ritas från vänster, 2,5 s linjärt.
- Andelsstapel: scaleX 0 → 1 från vänsterkant.
- Radavslöjning: rader in med 12 px uppåtrörelse, 70 ms mellan varje.
- Nyckeltalsräkning: 0 → slutvärde, 2,2 s ease-out.
- Bristmarkör: långsam puls, 1,6 s, endast på det som faktiskt är slut.
- Bortfall: hyllans rutor tonar till 12 % opacitet i steg, aldrig med bounce.
- Täckningsring: cirkelns dashoffset ritas till målvärdet, 2 s ease-out.

TILLGÄNGLIGHET
- prefers-reduced-motion: visa alltid animationens slutläge direkt, ingen rörelse.
- Ingen information får finnas bara i rörelsen; slutbilden måste stå för sig själv.
- Kontrast minst 4,5:1 på all text. Rött aldrig på svart.
- Text på skärmen minst 3 s innan den byts ut. Mobil: en kolumn, ingen horisontell scroll.

SCENSTRUKTUR
- Erbjudandet (26 scener): fakta → visualisering → så hjälper vi dig. Erbjudandet visas först efter att faktan etablerats.
- 45 sanningar: bild → förlopp → nyckeltal → nästa steg. Quizläge döljer talet men behåller förloppet.
- Presenterläge visar källa och reservation i liten mono-text nere till vänster.
`;

function MotionPage() {
  const tick = useLoop();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(SPEC);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <header className="border-x-2 border-b-2 border-foreground p-6 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div>
              <p className="font-mono text-xs font-bold uppercase text-muted-foreground">
                ShelfScore / System 02
              </p>
              <h1 className="mt-4 max-w-4xl font-mono text-4xl font-bold uppercase leading-[1.05] sm:text-6xl md:text-7xl">
                Rörelse
                <br />
                <span className="text-loss">och animation</span>
              </h1>
            </div>
            <div className="border-2 border-foreground p-4 font-mono text-xs uppercase">
              <p className="text-muted-foreground">Princip</p>
              <p className="mt-2 font-bold">Rörelse = förklaring</p>
              <p className="mt-4 text-muted-foreground">Looplängd</p>
              <p className="mt-2 font-bold">8–12 sekunder</p>
            </div>
          </div>
          <p className="mt-12 max-w-2xl text-lg leading-8">
            Nio rörelseprimitiv som räcker för alla scener, tabeller och diagram. Allt nedan
            spelar i loop så du ser exakt hur det ska kännas — och längst ner finns en färdig
            specifikation att skicka vidare.
          </p>
        </header>

        <Section
          number="01"
          title="Diagram i rörelse"
          intro="Varje diagram besvarar en fråga. Baslinjen syns direkt, rörelsen visar bara förloppet fram till slutsatsen."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <Demo number="01" title="Stapel upp" when="jämförelse mellan kedjor eller produkter">
              <div className="flex h-48 items-end gap-3 border-b-2 border-foreground">
                {week.map((h, i) => (
                  <div key={i} className="flex h-full flex-1 flex-col justify-end">
                    <div
                      className="ss-bar-rise w-full bg-foreground"
                      style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-7 text-center font-mono text-[9px] font-bold">
                {days.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
            </Demo>

            <Demo number="02" title="Lagerdränering" when="lager som tar slut under en kampanj">
              <div className="flex h-48 items-end gap-3 border-b-2 border-foreground">
                {week.map((h, i) => (
                  <div key={i} className="flex h-full flex-1 flex-col justify-end">
                    <div
                      className={`ss-bar-drain w-full ${i > 2 && i < 6 ? "bg-loss" : "bg-foreground"}`}
                      style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-3 font-mono text-[10px] uppercase text-loss">Noll i lager dag 4–6</p>
            </Demo>

            <Demo number="03" title="Kurva som ritas" when="trend, efterfrågan eller trafik över tid">
              <svg viewBox="0 0 320 140" className="h-48 w-full">
                <line x1="0" y1="120" x2="320" y2="120" stroke="currentColor" strokeWidth="2" />
                <polyline
                  className="ss-draw"
                  points="0,110 45,96 90,72 135,52 180,30 225,64 270,98 320,116"
                  fill="none"
                  stroke="var(--color-loss)"
                  strokeWidth="3"
                />
              </svg>
              <p className="mt-1 font-mono text-[10px] uppercase text-muted-foreground">
                Efterfrågan toppar när hyllan blir tom
              </p>
            </Demo>

            <Demo number="04" title="Andelsstaplar" when="fördelning av bortfall per varumärke">
              {[
                ["Rogaine", 100],
                ["La Roche-Posay", 73],
                ["Vichy", 49],
                ["CeraVe", 38],
              ].map(([label, pct], i) => (
                <div key={label as string} className="mt-4 first:mt-0">
                  <div className="flex justify-between font-mono text-[10px] font-bold uppercase">
                    <span>{label}</span>
                    <span className="text-loss">{pct}%</span>
                  </div>
                  <div className="mt-2 h-3 bg-muted">
                    <div
                      className="ss-sweep h-full bg-loss"
                      style={{ width: `${pct}%`, animationDelay: `${i * 80}ms` }}
                    />
                  </div>
                </div>
              ))}
            </Demo>
          </div>
        </Section>

        <Section
          number="02"
          title="Siffror och slutsatser"
          intro="Nyckeltalet är scenens poäng. Det räknas upp en gång och står sedan helt stilla."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <Demo number="05" title="Nyckeltalsräkning" when="scenens huvudsiffra">
              <p className="font-mono text-[10px] font-bold uppercase text-muted-foreground">
                Beräknat bortfall
              </p>
              <p className="mt-3 font-mono text-4xl font-bold text-loss">
                <CountUp to={429525} /> kr
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase">6 dagar / 1 produkt / 1 kedja</p>
            </Demo>

            <Demo number="06" title="Radavslöjning" when="topplistor och tabellrader">
              <ul className="divide-y-2 divide-foreground border-y-2 border-foreground">
                {["Apotea", "Kronans", "Lyko", "Hjärtat"].map((r, i) => (
                  <li
                    key={r}
                    className="ss-rise-in flex justify-between p-3 font-mono text-xs font-bold uppercase"
                    style={{ animationDelay: `${i * 90}ms` }}
                  >
                    <span>{r}</span>
                    <span className="text-loss">−{[429, 312, 209, 165][i]}k</span>
                  </li>
                ))}
              </ul>
            </Demo>

            <Demo number="07" title="Täckningsring" when="andel i lager eller kampanjberedskap">
              <div className="flex items-center gap-5">
                <svg viewBox="0 0 120 120" className="h-28 w-28 -rotate-90">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="var(--color-muted)" strokeWidth="12" />
                  <circle
                    className="ss-ring"
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="var(--color-foreground)"
                    strokeWidth="12"
                    style={{ ["--ring-target" as string]: "63" }}
                  />
                </svg>
                <div>
                  <p className="font-mono text-2xl font-bold">
                    <CountUp to={80} suffix=" %" />
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase text-muted-foreground">
                    Täckning i kampanjveckan
                  </p>
                </div>
              </div>
            </Demo>
          </div>
        </Section>

        <Section
          number="03"
          title="Förlopp och berättelse"
          intro="För scenerna i ‘Erbjudandet’ och ‘45 sanningar’: samma primitiv, men de bär ett händelseförlopp istället för ett diagram."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <Demo number="08" title="Hyllan tömms" when="visualisera brist konkret">
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-[2/3] border-2 border-foreground ${i > 5 ? "ss-gone bg-background" : "bg-foreground"}`}
                    style={{ animationDelay: `${i * 120}ms` }}
                  />
                ))}
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase text-loss ss-pulse">12 av 18 slut</p>
            </Demo>

            <Demo number="09" title="Läsmarkör" when="visa vilken rad slutsatsen kommer från">
              <div className="relative overflow-hidden border-2 border-foreground">
                {["Apotea / Rogaine", "Kronans / Vichy", "Lyko / CeraVe", "Hjärtat / Avène"].map((r) => (
                  <p
                    key={r}
                    className="border-b border-foreground p-3 font-mono text-xs uppercase last:border-b-0"
                  >
                    {r}
                  </p>
                ))}
                <div className="ss-scan pointer-events-none absolute inset-x-0 top-0 h-[25%] border-y-2 border-loss bg-loss/10" />
              </div>
            </Demo>

            <Demo number="10" title="Scenrytm" when="varje scen i en presentation" >
              <ol className="divide-y-2 divide-foreground border-y-2 border-foreground font-mono text-[11px] uppercase">
                {[
                  ["0,0–0,4 s", "Rubrik in"],
                  ["0,4–4 s", "Förlopp ritas"],
                  ["4–7 s", "Nyckeltal räknas"],
                  ["7–9 s", "Stillastående slutläge"],
                ].map(([t, l], i) => (
                  <li key={t} className="flex justify-between p-3">
                    <span className={tick % 4 === i ? "font-bold text-loss" : "text-muted-foreground"}>{t}</span>
                    <span className={tick % 4 === i ? "font-bold" : ""}>{l}</span>
                  </li>
                ))}
              </ol>
            </Demo>
          </div>
        </Section>

        <Section
          number="04"
          title="Specifikation att skicka vidare"
          intro="Kopiera hela texten och ge den till den som bygger animationerna. Den innehåller uttryck, tajming, regler, primitiv och tillgänglighetskrav."
        >
          <button
            type="button"
            onClick={copy}
            className="mb-5 inline-flex min-h-12 items-center bg-foreground px-5 font-mono text-xs font-bold uppercase text-background transition-colors hover:bg-loss"
          >
            {copied ? "Kopierad ✓" : "Kopiera specifikationen"}
          </button>
          <pre className="overflow-x-auto border-2 border-foreground bg-muted/40 p-5 font-mono text-[11px] leading-5 whitespace-pre-wrap">
            {SPEC}
          </pre>
        </Section>

        <footer className="flex flex-wrap justify-between gap-3 border-t-2 border-foreground pt-4 font-mono text-[10px] uppercase text-muted-foreground">
          <span>ShelfScore / Rörelsesystem</span>
          <span>Rörelse förklarar, dekorerar aldrig</span>
        </footer>
      </main>
    </div>
  );
}
