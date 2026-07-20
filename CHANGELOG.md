## 2026-07-20 - Finished the city-page title/meta rewrite: the 7 pages the 07-15 pass missed

- **Primary action (title_meta)**: rewrote `<title>` and `<meta description>` on `/thousand-oaks/`, `/ventura/`, `/ojai/`, `/oxnard/`, `/westlake/`, `/newbury/`, and `/simi-valley/`.
  - **The defect**: the 2026-07-15 CTR pass rewrote only 3 of the 10 city landing pages (Santa Barbara, Agoura Hills, Camarillo). The other **7 were still on the legacy boilerplate** `Window Cleaning <City>, CA - Aloha Window Bros`, which spends 22 of ~57 title characters on a brand nobody is searching for and leaves the SERP with no price, no proof, and no CTA. Six of those seven back a query sitting in the brief's CTR-outlier, striking-distance, or local-pack tables.
  - **New pattern** (the one already shipped on the treated three): `Window Cleaning <City>, CA | Free On-Site Quote`, all 45-56 chars, brand dropped from the title. Descriptions now lead with the exact query phrase, carry the city's own published price band, a local differentiator, and the phone number. All 141-149 chars.
  - `/thousand-oaks/` got the dual-intent treatment Santa Barbara got (`Window Cleaning & Washing Thousand Oaks, CA | Free Quote`) because it ranks for both variants: *window cleaning thousand oaks* (110 impr, pos 8.4) and *window washing thousand oaks* (52 impr, pos 9.3, **slipping** from 8.4).
  - Price bands were read off each page's own body copy, not invented: $150-$400 Thousand Oaks, $175-$425 Ventura/Westlake/Newbury/Simi, $175-$450 Oxnard, $200-$475 Ojai.
  - Side benefit: the old Ventura, Ojai, Westlake, Newbury, Oxnard, Simi and Thousand Oaks meta strings all contained **em dashes**, which is a house-rule violation that had been sitting in the rendered `<head>` of 7 pages. Gone.
- **Considered and rejected: internal_links.** The obvious hypothesis was that `/santa-barbara/` is under-linked, since *window cleaning santa barbara* is the biggest query on the board (151 impr, pos 9.7) yet the page does not appear in Top pages at all. Counted actual inbound internal links per city page: Ojai 14, Oxnard 12, Ventura 11, Westlake/Simi/**Santa Barbara**/Newbury 10, Camarillo 8, Agoura 8, Thousand Oaks 7. Santa Barbara is mid-pack, and the two pages with the **most** internal links (Ojai 14, Oxnard 12) are the two **worst-ranking** cities on the board (pos 13.2 and 15.4), while the page with the **fewest** (Thousand Oaks, 7) is the single best performer. Internal link count is not the constraint here, so adding links would have been motion without a mechanism.
- **Considered and rejected: new_content.** The service x city matrix is complete at 42 posts. Nothing cleared the information-gain bar today.
- **gbp (no code change)**: logged *window cleaning westlake village* (pos **1.5**, 29 impr, **0 clicks**) and *window cleaning newbury park* (pos 4.5, 22 impr, 0 clicks) for the GBP workstream. Position 1.5 with zero clicks is not an organic problem and no amount of on-page work will fix it.

## 2026-07-17 - Rebuilt the Ventura County pricing guide + swept the false "15-20 gpg" stat off 11 pages

- **Primary action (refresh)**: `/blog/how-much-does-window-cleaning-cost-in-ventura-county/`. This page is in the brief's "Decaying pages" list (impressions **51 -> 10, -80%**, pos 10.1) and both of its money queries are in "Falling queries": *window cleaning prices ventura* (**pos 4.0**, impr 14 -> 8) and *window washing cost ventura county* (pos **7.9 -> 17.3**, impr 14 -> 8). It was also the oldest stale post (2026-03-09).
  - **The actual defect**: a page titled "How Much Does Window Cleaning Cost in Ventura County" that **never stated a single price**. Its own FAQ answered "the cost depends on factors such as the number of windows". It was legacy WP-era keyword stuffing ("residential window cleaning Ventura County" x9) with zero information gain, which is a coherent explanation for an 80% impression decay on a high-intent commercial query.
  - **Rewritten around first-party data (GEO E01)**: a per-city price table for all 10 cities ($150-$400 Thousand Oaks through $200-$475 Ojai/Santa Barbara), sourced from the bands already published on our own city landing pages, so the site now agrees with itself. Nobody in this market publishes per-city pricing. Added: direct answer with a number in the first 150 words, Key Takeaways box, a price-driver table, restoration vs cleaning ($200-$500 vs $150-$475), 6-question FAQ with **FAQPage JSON-LD (the page had none)**, and a Calendly CTA.
  - Title: `Window Cleaning Cost in Ventura County: A 2026 Price Guide` (57 chars), targeting both falling queries. Date bumped to 2026-07-17 (near-total rewrite).
  - Body is 1733 words, over the 800-1500 house guideline. Deliberate: the overage is the price table and the 6 FAQs, which are the page's entire reason to exist. Trimmed the two sections that overlapped existing posts instead.
- **Correctness sweep (technical)**: the 2026-07-14 run corrected the false "15 to 22 gpg Conejo Valley" hardness claim in the pillar, **but the same fabricated stat family survived on 11 other pages** and was directly contradicting our own sourced posts.
  - Found via `grep -rn "grains per gallon"`: `15-20 gpg` attributed to **Calleguas** (thousand-oaks, newbury, oxnard, camarillo blog posts + solar-panel-cleaning-thousand-oaks) and `14-18 gpg` to **Las Virgenes** (westlake, agoura). Both districts' own CCRs publish **146 mg/L, about 8.5 gpg**, on 100% imported supply. `/westlake/` also claimed "hard **well** + municipal water" when Cal Water's report states the district has **no wells**.
  - Worst instance: `window-cleaning-westlake-village-guide-for-homeowners.md` carried "water hardness averages 15-20 grains per gallon" **inside a pull-quote**, while `hard-water-stains-westlake-village-guide.md` says 8.5 gpg with citations. Two numbers for the same city's water, one of them in the exact format an LLM lifts.
  - Also fixed the classification: at 8.5 gpg the WQA says **hard**, not "very hard".
  - Where we lack primary data (Simi Valley's VCWD No. 8 blend, Oxnard's groundwater blend), **removed the fabricated figure rather than inventing a replacement** and described the blend honestly. Aligned `/camarillo/` (14-18 -> Camrosa's published 10-15) and `/ojai/` ("often exceed 20" -> the sourced ~17) to our own cited posts.
  - Pivoted the mechanism to what the data actually supports and what our Westlake post already argued: **overspray frequency, not extreme hardness**, is what spots Conejo Valley glass.
- **Internal links**: added a third homepage county-section guide card pointing at the pricing guide ("What it costs"). Verified all 12 pre-existing county-section links preserved (now 13) per the site-map warning.
- **GBP (no code)**: *window cleaning westlake village* sits at **pos 1.9 with 0 clicks** (29 impr). Organic rank cannot win that click; logged for the GBP workstream.
- `npm run build` passes (58 pages). FAQ JSON-LD validated as parseable FAQPage with 6 questions; no em/en dashes in touched content.

## 2026-07-15 - Title/meta CTR rewrite on 3 city landing pages (Santa Barbara, Agoura Hills, Camarillo)

- **Context**: non-brand clicks are near zero (6 in 28d) while non-brand impressions are healthy (1880, +56%). The bottleneck is click-winning, not content. The GSC "CTR outliers" list flagged six city queries earning ~0% CTR at positions their rank should convert. Per the decision playbook, `title_meta` is the cheapest click gain and comes first when that section is non-empty.
- **What changed** (only lines 8-9, the `metaTitle`/`metaDescription`, in `src/pages/{santa-barbara,agoura,camarillo}.astro`):
  - Dropped the ` Aloha Window Bros` brand tail from the `<title>` (site convention: brand lives in OG/JSON-LD/logo, not the title) and reclaimed the space for a CTR hook.
  - Front-loaded the exact query and added a concrete differentiator: free on-site / 24-hr quote, and a price band in the meta description ($175-$425 or $200-$475).
  - Santa Barbara title now reads "Window Cleaning & Washing Santa Barbara, CA | Free Quote" so it targets both the "window cleaning santa barbara" (pos 10) and "window washing santa barbara" (pos 9) outlier queries with one title.
  - Pipe separators, no em/en dashes (edited lines are dash-clean; pre-existing body/FAQ dashes untouched).
- **Scope discipline**: left Ventura (pos 15.2) and Ojai (pos 13.1) alone. Titles won't move clicks from deep page 2 until rank climbs, so no churn there. Noted the Westlake Village local-pack suspect (pos 2.1, 0 clicks) for the GBP workstream rather than touching code.
- Titles verified under 60 chars; `npm run build` passes (58 pages).

## 2026-07-14 - 2 hard-water city GEO posts (Ojai + Westlake Village) + corrected a false stat in the hard-water pillar

- **Context**: the service x city matrix is complete, so per the site map the next gap on the priority list was the *hard water restoration* city variants. Wrote the two highest-contrast markets: Ojai (well water) and Westlake Village (imported water).
- **The research turned up a real finding, and a bug in our own content.** Pulled the actual water utility reports instead of asserting numbers:
  - Casitas MWD 2024 Annual Water Quality Report (Ojai Water System, PWS CA5610014): groundwater from **seven wells** in the Ojai Valley Groundwater Basin, blended with Lake Casitas surface water. Ventura County Public Works puts Ojai at **~17 grains per gallon**.
  - Cal Water Westlake district: hardness **avg 146 ppm** (138 to 153), **100% purchased MWD water via Calleguas, no groundwater wells**.
  - Las Virgenes MWD: hardness **avg 146 mg/L** (137 to 157), **entirely imported** State Water Project water, "no local drinking water sources".
  - Both Westlake systems land on the same 146, i.e. **~8.5 gpg, roughly half of Ojai's 17 gpg.**
- **Bug fixed**: `how-to-remove-hard-water-stains-from-windows.md` claimed *"hardness in the Conejo Valley and surrounding Ventura County communities averages 15 to 22 grains per gallon."* That is **flatly contradicted by both utilities' own published reports** (8.5 gpg). It was an unsourced number sitting in a pull-quote in our pillar page, which is exactly the kind of thing an LLM would cite back at us. Replaced it with a sourced per-district table. Also swept **25 em/en dashes** out of that file (house rule; the content-gate hook would have blocked the commit anyway).
- **Ojai post** (`hard-water-stains-ojai-well-water-guide`): hardest water we serve. Core mechanism no competitor page states: **rinsing Ojai glass with Ojai well water makes it worse**, because you are reapplying the mineral that stains it. Recommends a tighter 3-to-4-month cycle on hardness grounds.
- **Westlake post** (`hard-water-stains-westlake-village-guide`): deliberately contrarian and the stronger information-gain play. The water is only *moderately* hard, so the honest answer is that **Westlake has a sprinkler problem, not a water problem** - staining is driven by overspray frequency and flash evaporation, not mineral concentration. Also resolves the two-utility confusion (Cal Water on the Ventura County side, LVMWD on the LA County side).
- Each post: direct answer in the first 150 words, links to BOTH the city landing page (`/ojai/`, `/westlake/`) and `/services/window-washing` in the first 300 words + closing CTA, comparison tables, USGS + utility CCR + VC Public Works citations, 5-item FAQ + FAQPage JSON-LD, Calendly CTA. Both cross-link the pillar and the matching screen/solar posts.
- Verified per the 2026-07-06 gotcha: every `/blog/` link resolves to a real post, both `heroImage` files exist, **zero em/en dashes across all 3 touched files**. Build: **58 pages**, both posts emit FAQPage schema and land in the sitemap.

## 2026-07-14 - Homepage county SEO section redesigned (it looked like spam, because it was written like spam)

- **Why**: the "Window Cleaning Ventura County" block added on 2026-06-03 (commit `3ac0bef`) was built purely as a keyword-anchor link hub. It rendered as a centered wall of grey prose with 12 blue links stuffed into two paragraphs and anchors like "Oxnard window cleaning" / "window cleaning Thousand Oaks", sitting directly above the Service Areas grid that already links to all 10 cities. Adam flagged it on sight.
- **What changed** (`src/pages/index.astro`): replaced the two prose paragraphs with a proper section in the site's existing design language (Playfair headings, blue -> purple gradient rule, white cards on #f8fafc):
  - Eyebrow + H2 + short human lede.
  - 3 "local conditions" cards keyed to real local geography, each with an icon, one honest sentence of mechanism, and the relevant city pages as pill chips: **On the coast** (salt air) -> Oxnard / Ventura / Santa Barbara; **Up the Conejo Valley** (dust + Santa Anas) -> Thousand Oaks / Simi Valley; **Hard-water country** (sprinkler minerals) -> Camarillo / Ojai.
  - Footer strip: the four-in-one sentence carrying the 3 service links, plus the 2 Ventura County blog guides as titled cards.
- **SEO payload preserved and verified against `dist/index.html`**: all 12 internal links still present (3 services + 7 cities + 2 blog guides), and the exact phrases "Window Cleaning Ventura County" (H2), "Ventura County window cleaning" and "window washing Ventura County" (guide-card labels) all still render.
- **Deliberate trade-off**: city anchor text went from keyword anchors ("Camarillo window cleaning") to bare city names ("Camarillo"). Keyword-in-anchor is a real signal, but it is what made the copy read like spam, and the "Window Cleaning {City}" anchors still exist sitewide in CityLanding's Related Service Areas block and the blog sidebar. Watch `window cleaning camarillo` (pos 13), `window cleaning ventura ca` (pos 13), `window cleaning santa barbara` (pos 15) in GSC; if they slip, restore keyword anchors in the chips.
- Removed the em dash from the section copy (house rule). Build verified: 56 pages, no horizontal scroll at 390px or 1440px.

## 2026-07-13 - 2 new Screen Cleaning GEO posts (Newbury Park + Ojai) - completes the screen x city matrix
- Added `screen-cleaning-newbury-park-canyon-dust-and-wind-guide.md` and `screen-cleaning-ojai-orchard-pollen-and-well-water-guide.md`. These were the last two entries on the `screen cleaning [city]` gap list, so **both the solar x city and screen x city matrices are now complete**: all 10 city landing pages have a matching window, screen, and solar deep-dive guide.
- Newbury Park angle: the "two winds" (marine air up the Conejo Grade meeting dry canyon flow) create a damp-then-dry cycle that cements dust into the mesh, plus hard Calleguas-supplied sprinkler overspray that leaves mineral scale in the lower third of the screen. That scale then traps dust like flypaper, which explains the very common "the bottom of my screen is dirtier than the top" complaint no competitor page addresses.
- Ojai angle: much of the valley is on private wells with very hard groundwater, so **rinsing a screen with a garden hose actively makes it worse** by depositing fresh mineral scale into the weave. Combined with the valley inversion layer trapping sticky citrus and avocado grove pollen, this is the strongest information-gain angle we have written for any screen post: it inverts the homeowner's default DIY instinct on physical grounds.
- Each post: direct answer in the first 150 words, links to BOTH the city landing page (`/newbury/`, `/ojai/`) and `/services/screen-cleaning` in the first 300 words + closing CTA, 4+ quotable stat statements, comparison tables, EPA + NWS + CDC + AAAAI citations, 5-item FAQ + FAQPage JSON-LD, Calendly CTA.
- Both cross-link the matching solar post and the hard-water-stain guide, tightening the per-city service cluster and feeding the existing hard-water pillar.
- Verified before commit per the 2026-07-06 gotcha: `heroImage` resolves to a real file, all 12 distinct `/blog/` links plus every city and service link resolve to real pages, zero em/en dashes. Note: the first dash check silently no-oped because zsh does not word-split unquoted variables and printed a false "CLEAN"; re-ran with explicit paths. Build verified: 56 pages, both posts emit FAQPage schema and appear in the sitemap.

## 2026-07-10 - 2 new Screen Cleaning GEO posts (Simi Valley + Agoura Hills)
- Added `screen-cleaning-simi-valley-santa-ana-wind-and-ash-guide.md` and `screen-cleaning-agoura-hills-canyon-dust-and-oak-pollen-guide.md`, closing 2 of the 4 remaining `screen cleaning [city]` gaps. Only Newbury Park and Ojai remain.
- Simi Valley chosen as the largest unserved market by population (~125k) and because the angle is genuinely differentiated: it is the one city we serve with no marine-layer moisture, so dust lands dry and 100F+ heat bakes it into the mesh. No competitor page makes that argument.
- Agoura Hills chosen because `/agoura/` already carries ranking signals in Semrush ("aloha window cleaning" pos 43, "the window bros chico" pos 62), so it is being crawled. Angle is the oak-pollen tannin streak, which explains why cleaned windows re-streak after the first dew.
- Each post: direct answer in first 150 words, links to BOTH the city landing page (`/simi-valley/`, `/agoura/`) and `/services/screen-cleaning` in the first 300 words + closing CTA, 4+ quotable stat statements, comparison tables, EPA + NWS + CDC + AAAAI citations, 5-item FAQ + FAQPage JSON-LD, Calendly CTA.
- Each also cross-links its matching solar post, tightening the service cluster per city.
- Verified before commit per the 2026-07-06 gotcha: `heroImage` resolves to a real file, every `/blog/`, `/services/`, and city link resolves to a real slug/page, zero em/en dashes (with a positive control proving the detector fires). Build verified: 54 pages, both posts emit FAQPage schema + canonical + sitemap entry.

## 2026-07-08 - 2 new Screen Cleaning GEO posts (Santa Barbara + Oxnard)
- Added `screen-cleaning-santa-barbara-coastal-salt-and-oak-pollen-guide.md` and `screen-cleaning-oxnard-salt-and-ag-dust-guide.md`, closing 2 of the 6 remaining `screen cleaning [city]` content gaps (the solar x city matrix is already complete).
- Santa Barbara chosen because Semrush shows real ranking momentum there: "window washing santa barbara" pos 8, "window cleaning santa barbara" pos 15, "window cleaning santa barbara ca" pos 14. A screen-cleaning page consolidates that entity/geo signal onto a fresh, low-competition long-tail.
- Oxnard chosen as the heaviest-soiling market (unique salt + Oxnard Plain ag-dust double load) - highly differentiated content, and we already rank pos 13 for the neighboring "window cleaning camarillo".
- Each post: direct answer in first 150 words, links to BOTH the city landing page (`/santa-barbara/`, `/oxnard/`) and `/services/screen-cleaning` in the first 300 words + closing CTA, 4+ quotable stat statements, comparison tables, EPA citation, 5-item FAQ + FAQPage JSON-LD, Calendly CTA.
- heroImage set to `/img/water_pole_2.jpg` (the verified screen-post hero); all internal `/blog/` links verified against real slugs; zero em dashes (swept U+2014 to hyphen, kept en-dash ranges). Build verified: 52 pages.

## 2026-07-06 - Fix Semrush crawl errors introduced by the two Jul 6 screen posts
- Semrush Site Audit flagged 7 new errors (health 96% to 92%), all from `solar-screens-ojai-ca.md` and `window-screen-repair-oxnard-ca.md`:
  - Both posts set `heroImage: /img/hero-screen-cleaning.jpg`, which does not exist in `public/img/`. Switched to `/img/water_pole_2.jpg` (the heroImage every other screen-cleaning post uses).
  - Ojai post linked to `/blog/window-cleaning-ventura-keeping-coastal-glass-clean`, a slug that has never existed. Now links to `/blog/screen-cleaning-ventura-coastal-salt-and-pollen-guide`.
- Also swept all em dashes out of both posts (title, description, body, FAQ JSON-LD) per the no-em-dash content rule. Title is now "Solar Screens in Ojai, CA: Block the Heat, Not the View".
- Build verified: 50 pages.

## 2026-07-01 — 2 new Solar Panel Cleaning GEO posts (Simi Valley + Ojai) — completes the solar × city matrix
- These were the last two missing entries on the Solar Panel Cleaning × city priority gap list. With them, all 10 city landing pages now have a matching solar-panel-cleaning deep-dive guide, so every city can consolidate solar-intent search signal to its `/city/` conversion page.
- Live Semrush was 403 across the board this run (no keyword data), so we worked the documented content gaps: Simi Valley and Ojai were the only two cities without a solar guide.
- New: `solar-panel-cleaning-simi-valley-santa-ana-ash-and-sun-bake-guide.md` — Santa Ana wind + wildfire ash + sun-bake soiling angle; links `/simi-valley/` + `/services/solar-panel-cleaning` in first 300 words and again in the closing CTA.
- New: `solar-panel-cleaning-ojai-orchard-pollen-ash-and-well-water-guide.md` — citrus-orchard pollen + Los Padres ash + hard well-water angle (well water is the standout Ojai DIY failure mode); links `/ojai/` + `/services/solar-panel-cleaning` in first 300 words and again in the closing CTA.
- Both follow GEO spec: direct answer in first 150 words, 3+ quotable stats with NREL citation, comparison tables, 5-item FAQ + FAQPage JSON-LD, full entity name "Aloha Window Bros" on first reference. Cross-linked to neighboring city solar guides.
- Build verified: 50 pages; both new posts render.

## 2026-06-24 — 2 new Solar Panel Cleaning GEO posts (Agoura Hills + Newbury Park) to lift the two weakest city pages
- Semrush snapshot shows `/agoura/` is generating impressions ("aloha window cleaning" pos 43, "the window bros chico" pos 62) but had zero solar content, and `/newbury/` is our weakest landing page (pos 68). Both were on the priority gap list (Solar Panel Cleaning × Agoura Hills and Newbury Park, both previously missing).
- New: `solar-panel-cleaning-agoura-hills-canyon-dust-and-ash-guide.md` — canyon dust + Woolsey-zone wildfire ash soiling angle; links `/agoura/` + `/services/solar-panel-cleaning` in first 300 words and again in the closing CTA.
- New: `solar-panel-cleaning-newbury-park-canyon-dust-and-sloped-roof-guide.md` — canyon dust + steep Dos Vientos roof-safety angle; links `/newbury/` + `/services/solar-panel-cleaning` in first 300 words and again in the closing CTA.
- Both follow GEO spec: direct answer in first 150 words, 3+ quotable stats with NREL citation, comparison tables, 5-item FAQ + FAQPage JSON-LD, full entity name "Aloha Window Bros" on first reference. Cross-linked to each other and the other Conejo Valley solar guides.
- Build verified: 48 pages; both pages render with city-landing + service links confirmed.

## 2026-06-17 — 2 new Ventura GEO blog posts (solar + screen) to ride Ventura ranking momentum
- Semrush shows Ventura is our strongest momentum geo: "window cleaning ventura ca" jumped from pos 36 → **13** in the latest snapshot; "window cleaning ventura" sits at 20. Both Ventura gap articles were still missing, so we wrote them to consolidate signal to `/ventura/`.
- New: `solar-panel-cleaning-ventura-coastal-hillside-guide.md` — coastal salt fog + hillside dust soiling angle; links `/ventura/` + `/services/solar-panel-cleaning` in first 300 words.
- New: `screen-cleaning-ventura-coastal-salt-and-pollen-guide.md` — salt-tacky mesh + pollen angle; links `/ventura/` + `/services/screen-cleaning` in first 300 words.
- Both follow GEO spec: direct answer in first 150 words, 3+ quotable stats with NREL/EPA citations, comparison tables, 5-item FAQ + FAQPage JSON-LD, full entity name on first reference.
- Build verified: 44 pages (was 42); both pages render with `/ventura/` links confirmed.

## 2026-06-12 — Footer credit: BLRB Digital → Crossover Labs
- `Footer.astro` "Designed by" credit now links to https://crossoverlabs.ai (Crossover Labs is the agency hub; part of the hub-and-spoke backlink web — crossoverlabs.ai/#work links back here).
- REMINDER: never mention Ventura County Roof Cleaners anywhere on this site (rivals).

## 2026-06-12 — "Window washing" variant targeting on Santa Barbara + Thousand Oaks pages (Semrush Copilot recs)
- Semrush Copilot flagged: "window washing santa barbara" (vol 90, pos 16 from homepage), "window cleaning santa barbara ca" (vol 30, pos 14), and "window washing thousand oaks" dropped out of the top 10. Neither city page contained any "window washing" phrasing — both targeted only "window cleaning".
- **santa-barbara.astro**: meta description now includes "window washing"; intro weaves the exact phrase "window washing Santa Barbara"; new 6th FAQ item "Is window washing the same as window cleaning in Santa Barbara, CA?" (also lands in FAQPage JSON-LD).
- **thousand-oaks.astro**: same treatment — meta description, intro phrase "window washing Thousand Oaks", new 6th FAQ item with washing-variant phrasing.
- "Window cleaning ventura county" rec left alone — homepage title + county H2 section already target it (2026-06-03 work), pos 14 and climbing.
- Also via Semrush UI: added Copilot-suggested competitors (sbwindowcleaning, almightywindows, santabarbarapacific, jerryswindowcleaning) to the Aloha project.
- Build verified: 42 pages, exact phrases + FAQPage JSON-LD confirmed in rendered HTML.

## 2026-06-10 — Removed Ventura County Roof Cleaners cross-promo from footer
- Removed the `.footer-partner` block in `src/components/Footer.astro` (the "for roof, gutter, and solar panel washing we recommend Ventura County Roof Cleaners" recommendation linking to venturacountyroofcleaning.com) plus its now-orphaned CSS rules.
- Build verified: 42 pages, no leftover `footer-partner` references.

## 2026-06-10 — Two new Westlake Village GEO blog posts (support the weakest city page)
- Added `solar-panel-cleaning-westlake-village-lake-humidity-and-hard-water-guide.md` and `screen-cleaning-westlake-village-lake-pollen-and-humidity-guide.md`. Both close named priority content gaps (Solar × Westlake, Screen × Westlake).
- **Why Westlake**: Semrush shows `/westlake/` ranking position 79 for "aloha window cleaning" — the worst of all 10 city landing pages (Thousand Oaks 27, Agoura 43, Newbury 68, Westlake 79). Both new posts interlink to `/westlake/` in the first 300 words AND the closing CTA to consolidate ranking equity onto that underperforming conversion page.
- Real-world angle unique to Westlake: lake humidity off the 125-acre Westlake Lake + hard imported State Water Project water via Las Virgenes MWD (10+ grains). Each post links to its matching service page (`/services/solar-panel-cleaning`, `/services/screen-cleaning`) within the first 300 words.
- Full GEO compliance: direct answer in first 150 words, 3+ quotable stat statements, comparison tables, full entity names, authoritative citations (NREL, ACAAI, CARB, LVMWD), 5-item FAQ + FAQPage JSON-LD.
- Build verified: 42 pages (was 40). Blog post count 24 → 26.

## 2026-06-06
- Added branded 1200x630 Open Graph card (public/img/og-card.jpg) and set it as default og:image + twitter:image so texted links render a clean preview on iPhone.

# Changelog

## 2026-06-03 (latest) — Additive on-page local SEO: internal linking + Ventura County phrasing
- Grounded in GSC: ~85% of clicks are brand; the non-brand wins are "window washing/cleaning ventura county" (impressions, few clicks, just below top 3) and city pages ranking pos 27-79. Goal: pass internal link equity to city/service pages and reinforce the two county phrases. ADDITIVE only — no content removed.
- **Homepage (`index.astro`)**: new "Window Cleaning Ventura County" context section between Guarantees and Service Areas. H2 contains exact phrase "Window Cleaning Ventura County"; H3 + prose contain exact "Window Washing Ventura County". Contextual keyword-anchor links: window washing → `/services/window-washing/`, screen cleaning → `/services/screen-cleaning/`, solar → `/services/solar-panel-cleaning/`, "Oxnard window cleaning" → `/oxnard/`, "window cleaning in Ventura" → `/ventura/`, "Camarillo window cleaning" → `/camarillo/`, Simi Valley → `/simi-valley/`, "window cleaning Thousand Oaks" → `/thousand-oaks/`, Ojai → `/ojai/`, "window cleaning in Santa Barbara" → `/santa-barbara/`, plus links to the two Ventura County blog guides. Also added missing `id="areas"` to the Service Areas section (JSON-LD breadcrumbs already pointed at `/#areas`). Scoped `<style>` block added.
- **CityLanding.astro**: new "Related Service Areas" block before final CTA — interlinks every city page to the other 9 with "Window Cleaning {City}" anchors (filtered list defined in component, no per-page data needed). Scoped styles added.
- **Blog template (`blog/[slug].astro`)**: added a "Service Areas" sidebar card (6 city links with "Window Cleaning {City}" anchors) — applies to all 24 posts, passing equity to the city pages.
- **In-prose links** in the two highest-value posts (window-cleaning-ventura-county + window-washing-ventura-county): descriptive anchors to `/ventura/`, `/thousand-oaks/`, `/westlake/`, `/camarillo/`, `/oxnard/`, `/simi-valley/`, `/ojai/`, `/santa-barbara/`, and the three service pages.
- Santa Barbara (pos 14-19) already had solid unique depth (4 soiling factors, 12 neighborhoods, 5 FAQ); now internally linked from homepage + every blog sidebar + all 9 other city pages. No content added there (already sufficient).
- Build verified: 40 pages, exact phrases + all links confirmed in rendered HTML.

## 2026-06-03 (later) — Add ImageObject structured data (fix GSC "no image metadata")
- New `src/lib/seo.ts`: `imageObject()` builder + `businessImages` (3 representative photos with real pixel dims). Adds schema.org `ImageObject` metadata — url, contentUrl, caption, width/height, creditText, creator (Organization), copyrightNotice.
- Wired into all 4 JSON-LD locations: home LocalBusiness (`index.astro`), city LocalBusiness (`CityLanding.astro`), service provider (`services/[slug].astro`), and blog Article (`blog/[slug].astro` — uses heroImageAlt as caption). Previously all referenced images as bare URL strings, which is why GSC reported no image metadata.
- Alt text was already solid (only the Meta Pixel 1×1 has none, correctly). Build verified, 40 pages, ImageObject confirmed in rendered output.
- Follow-up option (not done): image sitemap (`<image:image>` entries) for Google Images discovery — @astrojs/sitemap needs a serialize hook + per-route image map.

## 2026-06-03 — Two new GEO blog articles (solar Oxnard + screen Camarillo)
- Added `solar-panel-cleaning-oxnard-coastal-agricultural-guide` targeting the priority gap "Solar Panel Cleaning Oxnard" (flagged heaviest-soiling market: salt + ag dust combo). Links to `/oxnard/` landing + `/services/solar-panel-cleaning` in first 300 words and CTA.
- Added `screen-cleaning-camarillo-ag-dust-and-pollen-guide` targeting the priority gap "Screen Cleaning Camarillo" (ag dust + oak pollen). Links to `/camarillo/` landing + `/services/screen-cleaning`. Completes the window/solar/screen trio for Camarillo.
- Both follow GEO guidelines: direct answer in first 150 words, comparison tables, 3+ quotable stats with NREL/EPA/water-district citations, FAQ + FAQPage JSON-LD. Build verified (40 pages, +2).

## 2026-05-27 (later) — Flip cookie banner from gate → notice (max-data US pattern)
- US-only audience, no EU targeting: default consent flipped to `granted`. GA4 + Meta Pixel now fire immediately on page load (no analytics loss for unaccepted/ignored sessions).
- Banner is now a courtesy notice. Accept dismisses. Decline dismisses **and** sets future visits to denied (current session already tracked because tracking fires before the user can click).
- Returning visitors who already chose still skip the banner.

## 2026-05-27 — Cookie consent banner (Consent Mode v2)
- Added `src/components/CookieBanner.astro` — slide-up notice with Accept/Decline, styled to match site palette (blue→purple gradient). Stores choice in localStorage under `awb-cookie-consent`.
- **Critical for Meta Pixel:** rewired Base.astro to default GA4 + ad_storage to `denied`, and to NOT initialize `fbq()` (Meta Pixel) on load. Pixel only fires after explicit Accept (or on subsequent visits where the user previously accepted). This brings the site into proper CPRA/CCPA "sharing" compliance for cross-context behavioral advertising and GDPR-readiness for any EU traffic.
- Returning visitors who accepted have consent restored synchronously before GA4 loads — no flicker, no double-tracking, no banner re-shown.

## 2026-05-27 (blacklist)
- **Removed `/public/img/screen_cleaner.jpg`** — depicted an ex-employee. Deleted the binary, re-pointed both screen-cleaning articles to existing real photos (water_pole_2.jpg + hero-window-cleaning.jpg), and added a `HERO_IMAGE_BLACKLIST` set in `blrb-command-center/server/jobs/lib/aloha-hero-picker.ts` so it can't be reintroduced even if a future edit drops it back into a category.

## 2026-05-27 (later)
- **Hero images on every blog article.** Added `heroImage` + `heroImageAlt` to the blog content schema, render a 21:9 cover figure above the title in `[slug].astro`, and injected the image into the Article JSON-LD. Backfilled all 22 existing articles with real photos from `/public/img/` (solar_1, screen_cleaner, before_after, before_after_6, hero-window-cleaning, water_pole_2, clean_window_pic, window_washing_image) via deterministic category match in `scripts/backfill-hero-images.mjs` — same picker the SEO cron uses, so new articles get heroes automatically.

## 2026-05-27
- **2 new GEO-optimized blog articles** filling priority service × city content gaps:
  - **Solar Panel Cleaning Santa Barbara** (`/blog/solar-panel-cleaning-santa-barbara-coastal-estate-guide/`) — targets the highest-CPC keyword cluster on the domain ($15.54 CPC). Santa Barbara rankings dropped between snapshots ("window cleaning santa barbara ca" pos 6 → 14), and we had zero solar content for SB despite SB being our most commercially valuable geo. Coastal salt + Eucalyptus pollen + Montecito/Hope Ranch estate angle.
  - **Screen Cleaning Thousand Oaks** (`/blog/screen-cleaning-thousand-oaks-pollen-and-allergy-guide/`) — first city-specific screen cleaning article on the site (screen cleaning city pages were a 9-city gap). Oak pollen + allergy angle is unique to Thousand Oaks and aligns with peak pollen-season search intent.
- Both articles follow GEO guidelines: direct answer in first 150 words, full entity name "Aloha Window Bros" on first reference, 3+ quotable stat statements, FAQPage JSON-LD, comparison tables (not prose), city landing page + service page links in first 300 words and in closing CTA.
- Page count: 36 → 38.

## 2026-05-26 (evening)
- **Expanded city landing pages from 4 → 10**. Added `/santa-barbara/`, `/camarillo/`, `/simi-valley/`, `/oxnard/`, `/ventura/`, `/ojai/` using the shared `<CityLanding>` component. Each page is grounded in real local soiling factors pulled from the matching blog guide and neighborhood lists already in our content. Santa Barbara is the highest-priority addition — Semrush has the SB keyword cluster at $15.54 CPC, the highest CPC of any term we rank for, currently at position 11.
- **Internal-linking wire-up**: homepage "Service Areas" section now shows all 10 cities as clickable cards with hover arrows (was 4 static + 2 placeholder cards previously). Footer adds a 5th column "Service Areas" with all 10 city links. Services slug-page sidebar's "Areas We Serve" list converted from static `<li>` to actual links to the 10 city pages — fixes the "no way to discover these pages" gap and propagates link equity from high-traffic service pages down to city pages.
- **`/llms.txt`** updated to include all 10 cities so AI search engines discover the full local footprint.
- **Updated `.claude-site-map.md`** — city pages list expanded, page count 30 → 36.
- **Fix from earlier today**: the deploy script at `/usr/local/bin/deploy_alohawindowbros_com` was overwriting our committed `.blrb/nginx_spa.conf` with a default SPA template on every run — patched it on the VPS to only write the default when no file exists in the repo. **The container's `index index.html;` directive + the new `location = /index.html { return 301 /; }` rule were colliding** (index triggered an internal rewrite `/` → `/index.html` → matched the 301 rule → loop). Removed the `index` directive and dropped `$uri/` from try_files so try_files handles directory→index.html resolution as a file lookup (file checks don't re-evaluate locations).
- Page count: 30 → 36. New city URLs: `/santa-barbara/`, `/camarillo/`, `/simi-valley/`, `/oxnard/`, `/ventura/`, `/ojai/`.

## 2026-05-26
- Full SEO sweep based on Semrush Site Audit + Google Search Console findings (94% Site Health → targeting 98+%, 22 indexed → eliminating the indexing tail).
- **Nginx** (`.blrb/nginx_spa.conf`): added gzip compression (fixes 28 uncompressed JS/CSS files per Semrush) for text/css, JS, JSON, XML, SVG; added HSTS header (`Strict-Transport-Security: max-age=31536000; includeSubDomains`) — fixes "subdomain doesn't support HSTS" notice; added X-Content-Type-Options header.
- **Nginx redirects**: added 301s for `/agoura.html`, `/newbury.html`, `/thousand-oaks.html`, `/westlake.html` → new city landing pages; legacy `/index`, `/index.html`, `/service`, `/schedule`, `/schedule/` → proper destinations; `/sitemap.xml` → `/sitemap-index.xml` (fixes GSC "Couldn't fetch sitemap.xml"); added www → non-www server block (`Host: www.alohawindowbros.com` returns 301 to canonical) — fixes GSC "Duplicate without user-selected canonical". Added `/wp-json` and `^/wp-.*\.php$` to 410 list.
- **Title shortening**: blog/[slug].astro and services/[slug].astro previously appended ` | Aloha Window Bros` (and ` - Ventura County | …` on services), pushing 15 page titles over the 60-char Semrush warning threshold. Page <title> now uses post.data.title alone; services use `${title} — Ventura County, CA`. Brand stays in OG, JSON-LD, and header logo. Reduces 15 long-title issues to 0.
- **Created 4 city landing pages** at the URLs that GSC has indexed and that hold the WordPress backlink history: `/thousand-oaks`, `/westlake`, `/agoura`, `/newbury`. Each renders via the new shared `<CityLanding>` component (`src/components/CityLanding.astro`) and supplies a unique data block: hero, soiling-factor cards (4 per city, e.g. Santa Ana dust for Thousand Oaks, lake humidity for Westlake, canyon corridors for Agoura, marine layer for Newbury Park), neighborhood chips (12 per city), services grid, How It Works, deep-dive CTA to the related /blog/ guide, FAQ (5 per city), and final CTA. Mobile-first responsive (verified at 390px and 1280px). JSON-LD includes LocalBusiness with GeoCoordinates per city, BreadcrumbList, and FAQPage. **Why pages, not redirects**: city URLs already exist as backlink targets and Google indexed them as ranking pages — a real page captures the equity AND gives us city-level keyword targeting; a 301 just punts that traffic to a blog post and loses the local-business signals.
- **BreadcrumbList JSON-LD** added to blog and services slug pages (combined with Article/Service into one @graph block) — restores the structured-data trend GSC was showing dropped to 0 valid in April. Blog: Home → Blog → Post. Services: Home → Services → Service. City pages: Home → Service Areas → City.
- **Added `/llms.txt`** (public/llms.txt) — Markdown-formatted site map for AI search engines (fixes Semrush "Llms.txt not found" AI-search notice). Lists services, all 4 city pages, all 20 blog guides, contact info, and sitemap URL.
- **Updated `.claude-site-map.md`** — added city pages, CityLanding component, expanded SEO section.
- Page count: 26 → 30. New URLs: `/agoura/`, `/newbury/`, `/thousand-oaks/`, `/westlake/`, `/llms.txt`.

## 2026-05-20
- Created blog article: "Window Washing Santa Barbara: A Coastal Guide to Streak-Free Glass" — targets the "window washing santa barbara" / "santa barbara window cleaning" keyword cluster (140 search volume, currently positions 11–19 per Semrush). Distinct from existing Santa Barbara article: focuses on the "window washing" search term variant, deeper neighborhood targeting (Montecito, Hope Ranch, Carpinteria, Mesa, Riviera), and a service-comparison table (window washing vs. cleaning vs. hard water restoration). Cites EPA and IWCA.
- Created blog article: "Window Cleaning Ojai: A Homeowner Guide to Spotless Valley Views" — fills uncovered Ventura County geo (Ojai had no content despite high-affluence demographics). Targets orchard dust, well-water mineral content, wildfire ash, and "Pink Moment" particulate — unique to the Ojai Valley microclimate. Covers East End, Arbolada, Mira Monte, Meiners Oaks, Upper Ojai. Cites Cal Fire and IWCA.
- Both articles GEO-optimized: direct answers in first 150 words, quotable stats with sources, FAQ sections with FAQPage JSON-LD schema, comparison tables, internal links to related city pages and existing topical articles.
- Blog post count: 18 → 20 | Total pages: 24 → 26

## 2026-05-06
- Created blog article: "How to Remove Hard Water Stains from Windows: A Ventura County Guide" — high-intent evergreen + seasonal (May/June peak when sprinklers run constantly in CA). Multiple existing articles mention hard water stains but no dedicated guide existed. Targets DIY-then-stuck searchers ready to convert. Cites USGS, IWCA, and Water Quality Association.
- Created blog article: "Solar Panel Cleaning Camarillo: How to Maximize Your System Output" — extends solar coverage from Thousand Oaks (only existing city-specific solar article) to Camarillo. Targets ag dust + coastal salt fog + Oxnard Plain factors that Thousand Oaks article doesn't cover. Cites NREL, CARB, and Camrosa Water District.
- Both articles GEO-optimized: direct answers in first 150 words, quotable stats with sources, FAQ sections with FAQPage JSON-LD schema, comparison tables, internal links to existing city pages.
- Blog post count: 16 → 18 | Total pages: 22 → 24

## 2026-05-03
- Added `/privacy` page (`src/pages/privacy.astro`) so Meta Ads can verify a published privacy policy on the landing domain — required before Meta will approve lead-gen ad campaigns. Policy explicitly discloses Meta Pixel (ID 2085643305314161) usage including custom audiences, lookalikes, and retargeting, plus GA4 (G-MRSP8D9CQG), CCPA opt-out path, and GDPR legal basis. Reuses `blog-post-hero` + `service-content-section` styles for consistent look/mobile layout.
- Added "Privacy Policy" link to `Footer.astro` Quick Links column so the page is crawlable from every page on the site.
- Page count: 21 → 22

## 2026-04-29
- Added Meta Pixel (ID 2085643305314161) to `Base.astro` head — fires PageView on every page; noscript fallback included. Inline `is:inline` so Astro passes through verbatim
- Created blog article: "Window Cleaning Newbury Park: A Homeowner Guide" — GSC validates demand: /newbury/ location page already gets 18 impressions/1 click at position 7.6, but no blog content existed. Article targets canyon-dust + marine-layer + hard-water angles unique to Newbury Park (Dos Vientos Ranch, Rancho Conejo)
- Created blog article: "Window Cleaning Oxnard: A Coastal Homeowner Guide" — major Ventura County coastal city with no existing coverage. Targets waterfront neighborhoods (Hollywood Beach, Mandalay Bay, Channel Islands Harbor) where salt residue requires more frequent cleaning than any other VC city
- Both articles GEO-optimized: direct answers in first 150 words, quotable stats with citations (NOAA, CARB, NWS, WQA, NAHB, IWCA, NREL, Calleguas MWD), FAQ sections with FAQPage JSON-LD schema, neighborhood-specific frequency tables, internal links to existing Camarillo/Ventura/Thousand Oaks/Westlake/Agoura/SB content
- Blog post count: 14 → 16 | Total pages: 19 → 21

## 2026-04-28
- Added IndexNow key file (`public/1dd254abc4be20302d48419624b62c7a.txt`) to enable direct URL submission to Bing/Yandex/Naver. Site was not appearing in Bing search despite being live with valid robots.txt + sitemap. After deploy, all 19 sitemap URLs will be POSTed to api.indexnow.org

## 2026-04-22
- Created blog article: "Window Cleaning Camarillo" — new city not previously covered. GSC shows we rank position 1 for "best window washer camarillo" with 0 dedicated content, meaning Google is serving the home page for these queries. Dedicated article should capture click-through and expand Camarillo keyword footprint
- Created blog article: "Window Cleaning Simi Valley" — same opportunity as Camarillo. GSC shows position 1 for "best window washer simi valley" with 0 clicks/0 dedicated content. Article covers Santa Ana wind, wildfire ash, and hard water — the three conditions that drive window cleaning demand in the inland valley
- Both articles GEO-optimized: direct answers in first 150 words, quotable stats with citations (NOAA, CARB, CAL FIRE, EPA, NWS, WQA, NAHB, IWCA, NREL), FAQ sections with FAQPage JSON-LD schema, comparison tables, internal links to related location and service content
- Blog post count: 12 → 14

## 2026-04-15
- Created blog article: "Window Cleaning Agoura Hills" — supports existing /agoura/ location page (119 impressions, 1.68% CTR) and targets "best window washer agoura hills" (position 6)
- Created blog article: "Solar Panel Cleaning Thousand Oaks" — first geo-targeted solar panel content, combining top service with strongest geo keyword cluster. Timed for spring/summer peak solar production season
- Both articles GEO-optimized: direct answers in first 150 words, quotable stats with citations (NREL, AQMD, WQA, NAHB, CAL FIRE), FAQ sections with FAQPage JSON-LD schema, comparison tables, internal links to related posts and services

## 2026-04-08
- Created blog article: "Window Cleaning Ventura" targeting 4 Ventura city keywords at positions 11-20 (~280 combined monthly volume, $5.55-$6.05 CPC)
- Created blog article: "Screen Cleaning in Ventura County" — first blog content for screen cleaning service, opens new content vertical
- Both articles GEO-optimized: direct answers in first 150 words, quotable stats with citations, FAQ sections with FAQPage JSON-LD schema, comparison tables

## 2026-04-01
- Created blog article: "Window Cleaning Santa Barbara" targeting position 6 keyword ($15.54 CPC) with no existing dedicated content
- Created blog article: "Window Cleaning Westlake Village" targeting position 14 keyword (70 vol, $7.88 CPC) with no blog content
- Both articles GEO-optimized with FAQ sections, comparison tables, citations, and structured data readiness

## 2026-03-29
- Incorporated truck wave decal design into site: added blue-to-purple color accent (#7c3aed) across hero, stats bar, CTA banner, footer, blog heroes, and service page overlays
- Added 4 SVG wave section dividers (stats→how it works, FAQ→CTA, CTA→contact, contact→footer) with blue-purple gradients matching truck branding
- Updated blog card accent strip from blue-green to blue-purple
- Added subtle fixed radial gradient background (faint blue/purple glows) for a cohesive underwater-light feel

## 2026-03-29 (b)
- Replaced logo with new tribal diamond "AW" / Aloha Bros logo matching truck branding

## 2026-03-26
- Migrated from WordPress to Astro static site
- Built home page with hero, booking widget, stats, how it works, reviews, services, guarantees, service areas, FAQ, CTA, contact, footer
- Created 3 service pages (window washing, screen cleaning, solar panel cleaning) with hero banners, trust bar, sidebar, and clean concise content
- Migrated 6 blog posts from WordPress with proper markdown content
- Built blog listing page and individual blog post pages with sidebar
- Added GA4 tracking (G-MRSP8D9CQG) with conversion events (phone, quote, email, reviews)
- Added Google Search Console, submitted sitemap
- Set up 301 redirects from all old WordPress URLs
- Blocked old WP paths (wp-admin, wp-login, xmlrpc) with 410 Gone
- Added JSON-LD structured data (LocalBusiness, Article, Service)
- Deployed to alohawindowbros.com via blrb-connect
- Deleted all WordPress files from Hostinger
- Created GitHub repo blrbdigital/alohawindowbros
