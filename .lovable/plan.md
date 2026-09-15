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
- Säkerställ att rapporten fungerar väl även på mobil, där tabeller kan rullas utan att text eller siffror krockar.

## Visuellt system
- **Palett:** vitt, nästan svart, neutral linjegrå och signalrött.
- **Typografi:** Space Mono för rubriker, etiketter och siffror; Rubik för längre lästext.
- **Form:** 0–4 px hörnradie, 1–2 px linjer, inga mjuka skuggor, gradienter eller flytande kort.
- **Rörelse:** mycket återhållsam; endast skarpa markeringar vid länkar och tabellrader.

## Teknisk omfattning
- Uppdatera analyssidans struktur och presentation utan backend eller riktig inloggning.
- Justera globala designvärden och fontladdning så den valda riktningen blir konsekvent.
- Behåll all data som tydligt markerad exempeldata.
- Kontrollera sidan visuellt på desktop och mobil samt verifiera länkarna från menyn.
