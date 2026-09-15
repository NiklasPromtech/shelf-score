# Hård finansiell rapportstil för Analys

## Mål
Göra `/analys` till en skarp, vit rapport som känns mer som en granskad finansiell analys än en mjuk SaaS-sida. Den valda riktningen är **Brutalist financial audit**.

## Det som byggs
- Behåll ShelfScores befintliga svenska exempeldata och analysområden.
- Bygg om toppen till ett rapporthuvud med rapport-ID, period, datum och tydlig avsändare.
- Låt **1 284 300 kr i utebliven försäljning** vara rapportens primära slutsats, med 429 525 kr för Rogaine/Apotea som det konkreta huvudfallet.
- Strukturera innehållet som numrerade rapportavsnitt:
  1. Sammanfattning och huvudtal
  2. Förlust per varumärke och kedja
  3. Lagerutveckling dag för dag
  4. Kampanjanalys
  5. Snabbast säljande produkter och täckning
  6. Slutsats och kontakt
- Ersätt mjuka kort och kapslar med hårda linjer, tabellraster, nästan fyrkantiga hörn och tydliga svartvita block.
- Använd signalrött endast för ekonomiskt tapp, risk och lagerbrist.
- Anpassa menyn till rapportkänslan och behåll länkarna till Översikt, Analys, Kontakt och Logga in.
- Lägg till **Branding Guidelines** i menyn som en egen publik sida.
- Säkerställ att rapporten fungerar väl även på mobil, där tabeller kan rullas utan att text eller siffror krockar.

## Branding Guidelines
- Skapa `/branding-guidelines` som den praktiska källan för hur ShelfScore ska se ut och röra sig.
- Dokumentera logotyp/ordmärke, typografihierarki, färgroller, mellanrum, linjer, hörn, knappar, länkar och rapportstruktur med levande exempel.
- Visa regler och exempel för KPI:er, tabeller, staplar, kurvor, tidslinjer, lagerstatus och informationsetiketter.
- Beskriv datavisualisering semantiskt: svart för fakta, grått för kontext och signalrött endast för tapp, risk eller slut i lager.
- Definiera animationerna: 0,4 sekunders tydliga entréer, linjära lagerförlopp, ritade kurvor, uppräknade nyckeltal, kort slutläge och lugn loop. Endast en sak får kräva uppmärksamhet åt gången.
- Inkludera riktlinjer för mobil, reducerad rörelse, läsbarhet, tabellbeteende och tillgänglig kontrast.
- Använd exempelkomponenter direkt på sidan så riktlinjerna går att bedöma visuellt, inte bara läsa.

## Framtida presentationsformat
- Låt riktlinjerna även täcka de två bifogade koncepten: **26 “Visste du att …”-scener med erbjudande** och **45 animerade sanningar om hyllan**.
- Harmoniera deras ljusa rapportkänsla, diagramprimitiver och 8–12 sekunders loopar med ShelfScores nya uttryck.
- Bevara principerna om en tydlig accent per scen, en stark visuell poäng, presenterläge och statiskt slutläge vid reducerad rörelse.
- De två kompletta presentationerna byggs inte i denna etapp; Branding Guidelines förbereder designsystemet för att de senare ska kunna städas upp konsekvent.

## Visuellt system
- **Palett:** vitt, nästan svart, neutral linjegrå och signalrött.
- **Typografi:** Space Mono för rubriker, etiketter och siffror; Rubik för längre lästext.
- **Form:** 0–4 px hörnradie, 1–2 px linjer, inga mjuka skuggor, gradienter eller flytande kort.
- **Rörelse:** mycket återhållsam; endast skarpa markeringar vid länkar och tabellrader.

## Teknisk omfattning
- Uppdatera analyssidans struktur och presentation utan backend eller riktig inloggning.
- Justera globala designvärden och fontladdning så den valda riktningen blir konsekvent.
- Skapa den nya publika riktlinjesidan med egen svensk sidtitel och beskrivning.
- Behåll all data som tydligt markerad exempeldata.
- Kontrollera analysen och riktlinjesidan visuellt på desktop och mobil samt verifiera länkarna från menyn.
