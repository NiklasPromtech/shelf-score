# ShelfScore — validation landing page + console cleanup

## What we're building

A public-facing landing page (in Swedish) whose only job is to support the cold outreach: someone at L'Oréal / a brand clicks the link in Niklas's email and immediately sees the same kind of numbers they just read about, understands how the measurement works, and is invited to a short call. It is a **market-fit validation page**, not a sales page — the tone stays honest: "jag säljer ingenting än, jag vill veta om det här är användbart."

Plus a cleanup of the internal console so it matches how Niklas actually uses it.

## Part 1 — Landing page (new home page at `/`)

Swedish copy, dark console aesthetic carried over from the existing tool (it *is* the product — showing real screenshots/numbers builds trust). Static content, no live data needed.

Structure:

1. **Hero — the number, not a slogan.** Something like "Rogaine förlorade ~429 525 kr på en vecka — för att hyllan var tom hos Apotea." Subline: we measure day-by-day stock movement across Swedish e-retailers and calculate the sales brands lose to stockouts. One CTA: "Bolla det här med mig" (mailto / short-call ask, matching the email's tone).
2. **The L'Oréal case.** The 600 000 kr campaign story: campaign launched on Kronans, stock ran out, ~600 000 kr in missed sales + ~100 000 kr in lost recurring visitors. Presented as a simple before/during/after timeline so a key-account manager gets it in 20 seconds.
3. **How it works** (3 short steps): we scrape reseller stock & prices daily → we detect when a product that sells goes out of stock → we estimate the lost revenue per brand, per product, per day. Include the honest caveat that estimates are based on observed sales velocity.
4. **What you get** — concrete artifacts, framed as "this already exists": lost-sales estimates per brand (the Outreach view), offer/campaign analysis (Offer Analysis), fastest movers, stock coverage. Real screenshots from the console.
5. **Who I am / why this is free** — short personal note from Niklas: solo project, validating whether this data is useful before building anything. Builds the same trust the email does.
6. **CTA repeat + footer.** Email link, LinkedIn maybe. No pricing, no signup.

SEO: Swedish title/description, og tags, semantic HTML.

### Design process
I'll generate 3 rendered design directions for the landing page (keeping the dark, data-dense console identity, varying composition/hierarchy) and let you pick one before building it. Then I'll generate the one hero image/visual the chosen direction needs.

## Part 2 — Console cleanup (reorder, no redesign)

Reorganize the existing navigation to reflect actual value:

```text
Today:    Status · Query · Brands · Foundry · Outreach · Insights · Arbitrage · Offer analysis
Proposed: Offer analysis · Brands · Outreach · Insights · Foundry · Arbitrage · Status
```

- **Offer analysis** becomes the first/default tab (it's the most valuable view).
- **Query** is removed from the nav (still reachable at its URL if you want it later — it's "not really used", so it leaves the main navigation but we don't delete code).
- **Status** moves to the last position (things work; it's now an ops page, not a focus).
- Foundry stays (future brand-facing idea) but sits after the money views.
- No visual redesign of the console itself — just ordering and entry point.

## Technical notes

- TanStack Start: rewrite `src/routes/index.tsx` as the landing page, console moves under its existing tab routes. No Lovable Cloud, no backend changes — landing page is fully static.
- Design tokens stay in `src/styles.css`; the landing page reuses the console's dark palette so the whole thing feels like one product.
- Screenshots from the console can be used as imagery on the landing page (they're the proof).
- Copy: I'll draft all Swedish text from your email and the numbers you gave — you review and adjust before anything is final.

## Open question for after approval

- Contact method on the page: plain `mailto:` link, or do you have a booking link (Calendly etc.) you'd rather use?
