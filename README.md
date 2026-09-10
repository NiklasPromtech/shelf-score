# ShelfScore

**Shelf intelligence for brands that sell through online resellers.**

ShelfScore reverse-engineers how online retailers order the products on their
category pages — and turns that into answers a brand will pay for. By watching
rankings and stock levels day by day across several Nordic resellers, it measures
how fast each product actually sells and where a brand is quietly losing revenue
to empty shelves.

The core finding that drives the product: these shelves are sorted by
**velocity** — what's selling right now — not by price or newness. So the whole
system is built to measure sell-through (via daily stock depletion) and the
levers that move it.

Three resellers are live today — **Apotea**, **Apotek Hjärtat**, **Kronans
Apotek**, plus **Lyko** for pricing — and the architecture adds more by dropping
in one new extractor per site; nothing downstream changes.

---

## What it answers

Two questions a brand cares about:

1. **"Where am I losing revenue right now?"** — which of my products are out of
   stock, or about to be, on shelves where they sell. Quantified in real terms:
   money lost per day at the product's own measured sell-through rate, and the
   cumulative loss until it's restocked. Because sell-through is *measured* rather
   than guessed, "you're losing ~X kr/day on this SKU and it runs out in ~3 days"
   is a real number.

2. **"What would grow my revenue?"** — the predicted upside of shelf moves: what
   getting a product onto a category it's missing, or climbing the rank, is worth
   in extra units per day, estimated from the rank→velocity curve observed across
   the whole catalogue.

Everything else — rank, share of shelf, competitor velocity, cross-channel,
campaign analysis — is supporting evidence for those two.

---

## How it works

Three layers, one contract:

```
Extractors  →  Harness  →  BigQuery  →  Console / Reports
```

1. **Extractors** — one small, pure `document → JSON` function per reseller and
   surface (listing, product, …). All the site-specific messiness lives here, and
   every extractor of a given type emits the *same* shape. That shared contract is
   what makes everything downstream reseller-agnostic.

2. **Harness** — shared runners that feed URLs to the extractors, flatten the
   results to rows, and load them into BigQuery. Some sites are read headless with
   a browser; others are read directly from their page-data JSON. Each run records
   its own health so data-quality drift is caught early.

3. **BigQuery** — flat, partitioned snapshot tables; all analysis lives in SQL
   **views** on top. Rankings, brand maps, and — the heart of it — velocity and
   lost-revenue estimates.

On top sits a small **console** (an Express app): a live status dashboard, a
plain-English → SQL helper, brand tools, campaign/offer analysis, and the
client-facing shelf report.

### Cadence

Three clean tiers per reseller:

- **Daily rank scrape** — the ranking time-series.
- **Daily stock probe** — lightweight availability checks across the whole
  catalogue; day-over-day depletion is the velocity signal.
- **Monthly brand-map scrape** — the brand → product map.

---

## Repo layout

```
extractors/<reseller>/     pure document→JSON functions (the only site-specific code)
harness/                   shared runners + helpers (fetch, load to BigQuery, run health)
enrich/                    optional LLM product normalization (form / actives / claims)
sql/                       BigQuery schema + analysis views
app/                       the console (status dashboard, SQL runner, brand + campaign tools)
inputs/<reseller>/         URL / path lists fed to the harness
docs/                      the output contract every extractor must emit
```

## Running it

```bash
./setup-bq.sh                                      # create dataset + tables + views
cd app && BQ_PROJECT=<project> node server.js      # console at localhost:4000
cd harness && DRY_RUN=true node run-listings.js    # local dry run → out/*.ndjson
```

Runs on Google Cloud (Cloud Run jobs on a schedule, BigQuery for storage and
analysis); the console deploys as a Cloud Run service.

---

## Status

Working system, actively developed. Data is flowing daily across the live
resellers; the current focus is turning the measured lost-revenue and campaign
signals into brand-facing outreach.
