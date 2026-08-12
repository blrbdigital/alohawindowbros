# SEO Activity Log — Aloha Window Bros
> This log tracks every SEO action taken, the data that justified it, and the expected impact.
> Updated automatically by the BLRB Digital SEO optimization system.

---

### 2026-08-12

**What we did:**
- **technical / content-integrity (primary): audited all 12 Outrank auto-published blog posts and
  remediated four defect classes.** This stream has been publishing one post per day since
  2026-08-01 with **no human review step**, and it had never been audited.
  - Removed **two dofollow outbound links to sonlightwindow.com, a direct competitor window cleaning
    company in Ventura**, from `/blog/window-cleaning-ventura-ca/`, and re-grounded the two claims
    that had been sourced to them (service interval, post-construction pre-wetting).
  - Replaced **third-party aggregator pricing that undercut our own published bands** on the same
    page (Manta $108 to $437, HomeBlue $9 to $11 per window, "5 windows = $50 to $60") with the
    per-city bands from the pricing pillar. Its lede had quoted the Thousand Oaks band as Ventura's.
  - Corrected **two fabricated regulatory claims** attributing a 4-foot fall trigger and 1,000 lb /
    5,000 lb load figures to Cal Title 8 section 3282, which contains neither (fetched and read in
    full today).
  - Removed **irrelevant and contradictory sources**: a Statistics Canada NAICS revenue and
    profitability stat used to describe the California market, a 1943 Canadian soap survey cited for
    ancient Babylon, a contractor-directory link ("find local contractors", twice), a screen
    replacement competitor, and two content farms. Consolidated three conflicting US market sizes
    onto one verified figure (IBISWorld, $2.9B / 35,344 businesses, 2024).
- **internal_links: `/blog/window-cleaning-ventura-ca/` now links `/ventura/`** inside the first 300
  words and in the closing CTA, plus the pricing pillar. It is a city-specific article that linked no
  city landing page at all, in violation of the site's own content rule.
- **Documented the audit and the systemic fix in `.claude-site-map.md`**, including the command that
  lists auto-published files and what section 3282 actually says.
- **Rejected new_content, refresh of the homepage, and title_meta, with reasons.**

**Why we did it (brief numbers plus what the repo showed):**
- The reality check holds for a twelfth run: **74 clicks / 2,528 impressions, but 3 non-brand clicks
  against 1,639 non-brand impressions**, non-brand clicks down 6 to 3. Click-winning is the
  bottleneck, and both in-repo content bets are still in flight: the Santa Barbara homepage section
  (07-31, working, `window cleaning santa barbara` now **144 impr @ 8.8**, up from 10.0) and the
  Oxnard Plain section (08-07, **five days old and unread in this window**). Stacking a third locale
  section today would contaminate the read on the second one, which is the site's only running
  experiment with a measured win behind it.
- **So the highest-leverage in-repo action this week was not adding signal, it was removing harm.**
  Between the last run and this one the auto-publisher shipped five more posts, taking the stream to
  twelve, and one of them targets `window cleaning ventura`, a query in the **organic-only half**
  where the Google Business Profile does not compete and a click is genuinely winnable (22 impr @
  13.3 this window, improving from 15.2). That page was carrying two dofollow links to a competing
  Ventura window cleaning company and quoting a $50 price for a five-window job.
- **The pricing defect is the exact failure mode this site has now fixed three times** (07-17
  fabricated hardness across 11 pages, 08-05 fabricated `aggregateRating`, 08-10 the homepage FAQ
  price contradiction). Price intent is also the only cluster where our pages sit level with or above
  the GBP (~470 non-brand impressions over 90 days), so publishing numbers that contradict the pillar
  is expensive in the one place we can win.
- **The regulatory claims were checked, not assumed.** Section 3282 was fetched and read; the 4-foot
  trigger and the pound-rated anchorage figures are not in it. Leaving them would have put fabricated
  legal detail on two pages of a business whose entire pitch is that it is insured and careful.

**Why we rejected the other playbook actions:**
- **new_content**: the service x city matrix is complete, and the blog earns essentially no non-brand
  traffic (measured repeatedly; 90-day figure is 135 non-brand impressions and zero clicks across the
  whole blog). The stream is already producing a post a day without being asked. Nothing cleared the
  information-gain bar.
- **refresh of `/`**: the two locale sections need clean reads. The 08-07 section has had five days.
- **title_meta**: still spent on the four indexed city pages, for the reason recorded on 08-07 and
  08-10. The CTR-outlier list is real but its queries are either map-pack losses, where the click
  goes to Call or Directions and GSC never counts it, or they sit at position 8.8 to 13, where zero
  clicks is roughly what the position predicts.
- **Decaying pages**: the four flagged pages are blog posts in the population that earns no non-brand
  clicks. `screen-cleaning-ventura-coastal-salt-and-pollen-guide` at position 36.0 on 2 impressions is
  not a refresh candidate, it is a page Google reshuffled.
- **gbp (logged, no code change, ninth consecutive run)**: the `http://` website field on the Google
  Business Profile still 301-redirects and remains Adam's highest-yield single action. Local-pack
  suspects this window: `window cleaning westlake village` (pos 2.7, 37 impr, 0 clicks) and
  `window cleaning` (pos 1.0, 33 impr, 0 clicks). Both are organic positions that cannot be improved
  and are not producing website clicks. Standing ask from 08-10 still open: **real gutter cleaning
  price bands**, which would unlock ~84 impressions of `gutter cleaning prices <city>`.
- **New ask for Adam (VPS, needs sign-off):** add an outbound-link blocklist and a price-figure review
  flag to `/root/services/aloha-publish/server.mjs`. Today's audit was manual cleanup of a problem the
  service will keep reproducing at one post per day.

**Expected impact:**
- Removing competitor links and aggregator prices from `/blog/window-cleaning-ventura-ca/` is a
  correctness and equity play. Prediction: the page holds or improves its position and stops leaking
  authority to a competitor; `window cleaning ventura` improves from 13.3 toward 10 to 12 within 6
  weeks, helped as much by the new `/ventura/` internal links as by the removals.
- Expect no click movement from the source and regulatory corrections. They protect AI citation
  quality, which is where the FAQ and price text on this site actually gets quoted.
- The durable value is the documented audit procedure. The publisher will ship roughly 30 more posts
  before the next quarter, and this is now a repeatable check instead of a discovery.

**Metrics at time of action (GSC, 2026-07-13..2026-08-09):**
- Total clicks 74, impressions 2,528. Non-brand clicks **3**, non-brand impressions 1,639.
- Non-brand avg position 11.2 (prior 10.1).
- `window cleaning santa barbara` 144 impr @ **8.8** (prior 10.0), on `/`.
- `window cleaning ventura` 22 impr @ **13.3** (prior 15.2), organic-only half.
- Auto-published posts audited: **12**. Competitor links removed: **2**. Junk or irrelevant citations
  removed: **7**. Fabricated regulatory claims corrected: **2**. Contradictory price figures
  replaced: **6**.

---

### 2026-08-10

**What we did:**
- **technical / correctness (primary): fixed a price contradiction inside the homepage `FAQPage`
  JSON-LD.** `faqs[0]` answered "How much does window cleaning cost?" with "Most residential jobs
  range from $150 to $400" (the Thousand Oaks band) while the same page's Santa Barbara section says
  "$200 to $475", its Oxnard Plain section says "$175 to $475", and the pricing pillar publishes
  $200 to $475 for Ojai and Santa Barbara. The answer now gives the true countywide span, $150 to
  $475, broken into the four real bands, every figure matching the pillar table. Question retitled to
  "How much does window cleaning cost in Ventura County?" to match query phrasing.
- **internal_links: added a second homepage link to the pricing pillar**, directly under the FAQ list.
- **technical: corrected a site-map verification command that could never fail** (`grep -c` counts
  lines; `dist/index.html` is minified to one line, so the FAQ schema parity check returned 1 == 1
  regardless of drift). Now `grep -o | wc -l`; verified 10 == 10.
- **Added `scripts/gsc-country-probe.py`** and documented two foreign / out-of-area query
  populations so future runs stop treating them as opportunities.
- **Rejected new_content, and rejected title_meta on the city pages, with reasons.**

**Why we did it (brief numbers plus the joins the brief does not contain):**
- The reality check holds for an eleventh run: **73 clicks / 2,506 impressions, but 2 non-brand
  clicks against 1,647 non-brand impressions**, with non-brand clicks falling 6 to 2. Click-winning
  is the bottleneck, and the two big in-repo content bets are both already in flight: the Santa
  Barbara homepage section (07-31, working, `window cleaning santa barbara` 10.6 to **8.8** on 154
  impressions this window) and the Oxnard Plain section (08-07, **three days old and unread**).
  Stacking a third locale section on top today would contaminate the read on the second one.
- **Price intent is the one population worth buying, and the map-pack veto does not apply to it.** A
  90-day cluster dump returns **~470 non-brand impressions and zero clicks** on cost/price queries.
  Unlike the generic city queries, our own pages sit level with or above the Google Business Profile
  here: `window cleaning cost thousand oaks` is `/thousand-oaks/` at **6.4** with the GBP at **10.5**,
  and `window cleaning prices westlake village` is `/westlake/` 4.3 against GBP 4.4. The site map
  already notes price intent is the only non-brand pull the blog has ever had.
- **Given that, the homepage answering the single most common price question with a number that
  contradicts its own body copy is a real defect, not a cosmetic one.** It sits inside the FAQ schema,
  which is the string AI engines quote back verbatim, and it understated the top of the range by $75
  on the two highest-value cities we serve. Same defect class as the 07-17 fabricated-hardness sweep
  and the 08-05 `aggregateRating` fix: a number copied to a second place and left behind when the
  first moved.

**Why we rejected the other playbook actions:**
- **new_content**: the blog took **17 non-brand impressions and 0 non-brand clicks** this window; the
  service x city matrix is complete. The one apparent gap, the rising `exterior cleaning newbury park`
  cluster (the brief's #3 rising query, impr 8 to 27), **is 100% United Kingdom traffic** on a
  `query x country` probe: 37 impr `gbr` and zero `usa` over 90 days, plus 15 more on
  `cladding cleaning newbury park`, a British term. Those are searchers looking for Newbury,
  Berkshire. Writing an exterior-cleaning page for them would have been the single worst use of this
  run. Same class: `affordable window cleaners thousand palms` (25 impr) is Riverside County.
- **title_meta**: still spent on the four indexed city pages. Their metas already carry price bands
  (`/thousand-oaks/`: "Most homes $150 to $400"). Putting "cost" in `/thousand-oaks/`'s title would
  chase a 32-impression query at the expense of `window cleaning thousand oaks` (46 impr), which that
  title currently serves. Bad trade, not taken.
- **gbp (logged, no code change, eighth consecutive run)**: the `http://` website field on the Google
  Business Profile still 301-redirects and is still Adam's highest-yield single action. This window
  the GBP took **614 non-brand impressions for 1 click**, mostly at position 1.0, the signature of
  clicks going to Call and Directions. Specific queries for that workstream:
  `window cleaning westlake village` (GBP 1.9, 22 impr), `window cleaning` (GBP 1.0, 34 impr),
  `window washing thousand oaks` (GBP 1.0), `window cleaning agoura hills` (GBP 1.0).
  **New ask for Adam: real gutter cleaning price bands.** `gutter cleaning prices <city>` is ~84
  impressions over 90 days with the GBP at 11.0 to 16.6 in Camarillo, Ventura, Agoura and Simi, so it
  is organically winnable, but it stays blocked by the no-invented-price rule.

**Expected impact:**
- The FAQ fix is a correctness and AI-citation play, not a ranking play. Expect no position movement
  from it. Expect the homepage's quoted price answer to stop contradicting its own body copy, which
  matters most for AI Overviews and ChatGPT, which quote the FAQ text directly.
- The pricing-pillar link should consolidate a little price-intent signal onto the one blog page with
  demonstrated non-brand pull. Modest: prediction is `window washing cost ventura county` improving
  from 8.8 toward 6 to 8 within 6 weeks, and the pillar holding or growing its non-brand impressions.
- The real value of this run is negative information: it removed a plausible-looking content plan
  (the Newbury Park exterior cluster) that would have produced a page for British searchers, and it
  fixed a verification command that had been silently passing.

**Metrics at time of action (GSC, 2026-07-11..2026-08-07):**
- Total clicks 73, impressions 2,506. Non-brand clicks **2**, non-brand impressions 1,647.
- Non-brand avg position 11.2 (prior 10.0).
- `window cleaning santa barbara` 154 impr @ **8.8** (prior 10.6), all on `/`.
- Price cluster (90d): ~470 non-brand impressions, **0 clicks**.
- Newbury Park exterior/cladding cluster (90d): 52 impressions, **100% `gbr`**.
- Blog: 17 non-brand impressions, 0 non-brand clicks.

---

### 2026-08-07

**What we did:**
- **refresh (sole substantive action): expanded `/` with a new "Window Cleaning Camarillo, Oxnard,
  and Ventura" section** covering the Oxnard Plain and Ojai Valley, built on agricultural land use
  and dry-season rainfall. Two verified federal sources, a land-in-farms-by-acre table, 8 internal
  links to `/oxnard/`, `/camarillo/`, `/ventura/` and `/ojai/`, and 2 blog guide links.
- **Added 2 FAQ items** to the homepage `faqs` array, which feeds both the rendered list and the
  `FAQPage` JSON-LD (10 questions in schema, 10 rendered, verified equal in `dist/`).
- **Refactor: `.sb-*` styles renamed to `.locale-*`** and shared by both homepage context sections,
  so a third one costs markup only, not another 130 lines of CSS.
- **gbp (no code change): seventh consecutive run logging the `http://` GBP website field**, plus a
  new and much more specific finding for that workstream (below).
- **Rejected new_content, title_meta and internal_links, with reasons.**

**Why we did it (brief numbers, plus the GSC `query x page` join the brief does not contain):**
- The reality check holds for a tenth run: **83 clicks / 2,580 impressions, but 3 non-brand clicks
  against 1,739 non-brand impressions**, and non-brand clicks fell 5 to 3. Click-winning is the
  bottleneck, not content volume.
- **The join splits the non-brand problem into two populations that need opposite treatments, which
  the brief presents as one list.** Sorting by whether the Google Business Profile appears:
  - **Map-pack half** (Thousand Oaks, Westlake Village, Agoura Hills, Newbury Park): GBP at
    **position 1.0 to 1.8** on nearly every row, our indexed city pages at 3.1 to 9.3,
    **~525 non-brand impressions for 2 clicks**. `/westlake/` alone holds 68 impressions at
    positions 3.1 to 4.7 for **zero** clicks. The GBP took 634 non-brand impressions mostly at
    position 1.0 for **1** click, which is the signature of clicks going to Call and Directions,
    actions GSC does not count as website clicks. **This half is not fixable in the repo.** The
    brief flagged `window cleaning westlake village` (pos 2.7, 38 impr, 0 clicks) as a local-pack
    suspect and the join confirms it: `/westlake/` 3.8 and GBP 1.8 on the same query.
  - **Organic-only half** (Santa Barbara, Montecito, Camarillo, Ventura city, Ojai): the GBP is
    absent or at 16.0, our only ranking URL is `/`, at positions 8.3 to 15.2,
    **~342 non-brand impressions for 0 clicks**. Here position is the whole game.
- **We treated the organic-only half because the same treatment already produced this site's only
  measured position win.** The Santa Barbara homepage section shipped 2026-07-31; over the following
  window `window cleaning santa barbara` moved **11.2 to 8.8 with impressions 106 to 174**, and the
  rest of its block moved with it (`santa barbara window cleaning` 12.5 to 10.0,
  `santa barbara window cleaners` 14.2 to 11.3, `window cleaning montecito` 18.5 to 15.2). The
  Ventura/Camarillo/Ojai cluster is the next largest untreated cluster of exactly the same shape:
  `window cleaning ventura` 24 impr @ 12.8, `window cleaning camarillo` 23 @ 12.2,
  `window cleaning ojai` 17 @ 12.6, `window washing ventura` 7 @ 10.7, **all on `/`**, with the
  dedicated city pages contributing zero.
- **Re-verified the indexation blocker with the URL Inspection API today**, because it decides
  whether the homepage or the city page is the right target: `/santa-barbara/`, `/camarillo/`,
  `/ventura/`, `/ojai/`, `/oxnard/` and `/simi-valley/` are **all still `lastCrawlTime = NEVER`**.
  So the city pages cannot be the target, and the homepage is the only page Google will read.

**Why we rejected the other playbook actions:**
- **new_content**: the blog took **17 non-brand impressions and 0 non-brand clicks** this window.
  Ten runs of measurement now say the blog does not earn non-brand traffic. The service x city
  matrix is complete and nothing cleared the information-gain bar.
- **title_meta**: the brief's CTR-outlier list is real but the lever is spent. The four indexed city
  pages were retitled 07-15 and 07-20 and already carry city, state, "Free Quote" and a price band.
  The homepage title already leads with "Window Cleaning Santa Barbara". The queries beneath those
  outliers are either map-pack losses (not a title problem) or sit at position 8.8 to 15, where zero
  clicks is roughly what the position predicts. **The brief's "~3.0% expected CTR" at position 8.8
  on a local SERP with a map pack above it is too generous.**
- **internal_links**: the site map records this as proven-not-the-constraint for indexation, from
  two independent directions (07-20 and 07-24). The links added today are for relevance and equity
  to pages that already rank, not an attempt to force a crawl.
- **Integrity check run, nothing to fix**: per-city price bands in the 10 city pages' `faq[0]`
  still match the pricing pillar's per-city table.

**Expected impact:**
- `window cleaning camarillo`, `window cleaning ventura` and `window cleaning ojai` on `/` improve
  from 12.2 / 12.8 / 12.6 into the 7 to 10 band within 6 weeks, mirroring what the Santa Barbara
  section did from 11.2 to 8.8. Impressions on the cluster should rise before position does.
- Non-brand clicks stay in the low single digits until either a query reaches the top 5 or the GBP
  website field is fixed. **I do not expect this change alone to produce clicks**, and saying
  otherwise would be dishonest about a position-8-to-13 starting point.

**Metrics at time of action (GSC, 28d 2026-07-08..2026-08-04):**
- Total clicks 83, impressions 2,580. Non-brand clicks **3**, non-brand impressions 1,739.
- Non-brand avg position 11.3 (prior 9.7).
- `/` non-brand 647 impressions, **0** clicks. GBP listing non-brand 634 impressions, 1 click.
- Blog, all 49 posts combined: ~17 non-brand impressions, 0 clicks.
- Six of ten city landing pages: `lastCrawlTime = NEVER`.

**For the GBP workstream (unchanged and still Adam's to pull, now with specifics):**
- The website field on the Google Business Profile is still `http://alohawindowbros.com/`, which
  301-redirects. Seventh run logging it.
- **The specific queries where the GBP is at position 1.0 to 1.8 and the click is not reaching the
  site**: `window cleaning westlake village`, `window washing westlake village`,
  `window cleaner westlake village`, `window washing service westlake village`,
  `window washing company westlake village`, `window cleaning thousand oaks`,
  `window washing thousand oaks`, `best window washer thousand oaks`,
  `window cleaning company agoura hills`, `window washing agoura hills`,
  `window cleaning service agoura hills`, `window cleaner agoura hills`,
  `window cleaning newbury park`.
- **Santa Barbara, Ojai and Camarillo have no GBP presence on their queries at all.** If the service
  area or a second listing can put the profile into those local packs, that is worth more than any
  on-page change available in this repo.

---

### 2026-08-05

**What we did:**
- **technical (sole substantive action): rebuilt the site's business entity in structured data and
  corrected the review numbers it publishes.** One `LocalBusiness` node, one `@id`, one set of
  facts, emitted identically on all 15 pages that carry it, built from a single exported
  `businessNode()` in `src/lib/seo.ts`.
- **Corrected `aggregateRating` from `5.0 / 50` to `4.9 / 185`** on the homepage and all 10 city
  landing pages, and corrected the same numbers in the visible copy they are supposed to match
  (homepage hero pill, homepage "5.0 Rating" badge, homepage stats bar, and the trust line on all
  10 city pages).
- **Added `sameAs`** (Google Business Profile + ProvenExpert, both fetched and confirmed) and
  **`openingHoursSpecification`** (Open 24 hours, read off the live GBP today) to every business
  node.
- **Added a per-city `Service` node** to the city landing template, carrying the city's
  GeoCoordinates and pointing `provider` at the shared business `@id`.
- **gbp (no code change): sixth consecutive run logging the `http://` GBP website field**, this time
  confirmed by reading the live listing's own anchor hrefs rather than inferring it.
- Rejected title_meta, refresh, new_content and internal_links, with reasons.

**Why we did it (brief numbers, plus the GSC `query x page` join the brief does not contain):**
- The reality check holds for a ninth run: **86 clicks / 2,581 impressions but 6 non-brand clicks
  against 1,799 non-brand impressions.** Click-winning is still the bottleneck, not content volume.
- **Every lever above `technical` in the playbook was checked against the join and found spent or
  blocked, so I went looking for something factually wrong instead, and found the site asserting a
  review figure that its own Google Business Profile contradicts.** The site published
  `aggregateRating 5.0 / 50`. The live GBP (CID 4483745950804238350, read directly today) is
  **4.9 stars from 185 reviews**, distribution 5 star 175 / 4 star 6 / 3 star 2 / 2 star 1. So the
  site was publishing a fabricated perfect rating **and** understating real social proof by 135
  reviews, on 11 pages, in both schema and visible copy.
- **This is the same defect class as the fabricated hardness numbers swept on 07-17**, and it
  matters more than it looks here specifically because of where this site's traffic sits: the GBP
  listing takes **640 non-brand impressions and 2 of the site's 5 non-brand clicks this window**,
  and ranks 1.0 to 3.5 on the money terms. A site whose structured data disagrees with the listing
  it is trying to be associated with is working against itself, and AI engines quote this JSON-LD
  verbatim.
- **The entity fragmentation was the bigger structural finding.** The homepage declared
  `@id: /#business`, each of the 10 city pages minted its own `/<city>/#business`, and the 4 service
  pages emitted an anonymous `provider` node with no `@id`. That is **15 separate businesses**
  sharing one phone number as far as an entity resolver is concerned, on a site whose entire
  measured problem is that Google resolves the local entity to the GBP listing and not to the
  website. All 15 now emit one node under `https://alohawindowbros.com/#business`, and `sameAs`
  names the GBP explicitly. This is the in-repo half of the GBP lever, and it is the first time it
  has been pulled.
- **`sameAs` was held to the site's existing source standard.** Only URLs actually fetched and
  confirmed to carry this business's NAP are in it: the GBP (200) and ProvenExpert (200, 138 Colt
  Lane present). **bbb.org 403s to non-browser agents** (the rule that already dropped CAL FIRE, the
  AMS SWEX paper and a USGS link) and its profile is unclaimed under the predecessor brand
  "Aloha Bros Roof Cleaning", so it was left out rather than linked on faith. Houzz Pro is
  LIVE-VERIFIED in the citation engine but its public profile URL is not recorded anywhere and I
  could not surface it, so it is not in `sameAs` either. Both are worth adding later.
- **Why not title_meta**, though the CTR-outliers section has 6 rows. The join says five of the six
  resolve to `/` (title rewritten 07-24; brand clicks have risen 32 to 42, so the documented revert
  trigger has not fired) and the rest to `/agoura/` and `/westlake/` (rewritten 07-15 and 07-20,
  both still pending review). **The bigger point: at positions 8.9 to 13.5 these are not CTR
  outliers at all, they are rank problems.** Expected CTR at position 10 is roughly 1 to 2 percent,
  so 0 clicks on 26 impressions is the arithmetic, not a title failure. The one genuine CTR outlier
  is *window cleaning westlake village*, and the join shows why a title cannot fix it: `/westlake/`
  3.8 plus the GBP at 1.9, **55 impressions and zero clicks**. That is the map pack, so it is logged
  for the GBP workstream, not written around.
- **Why not a refresh.** The three decaying pages the brief flags are all blog posts, and the blog
  is measured dead for non-brand: **all 47 posts together took 21 non-brand impressions and 0
  non-brand clicks this window.** The traffic those pages lost is not traffic that converts.
- **Why not new_content, and the one candidate that failed the bar.** I re-ran the gutter-style
  scan that produced the 08-03 page: a 90-day non-brand join across every query outside the window
  and gutter clusters. The only untouched theme is pressure washing and roof cleaning, and it is
  **about 15 impressions over 90 days, almost all single-impression rows**, which confirms and
  tightens the 08-03 "too thin" call rather than overturning it. Nothing else cleared the bar, so
  nothing was written.
- **The one real content-shaped finding, and why I did not act on it.** Price intent is the second
  biggest non-brand cluster on this domain: **465 impressions across 90 days and zero clicks**, more
  than three times the entire blog's non-brand impressions. But it is already served. The city pages
  rank **3.8 to 5.9** on their price queries with the price band already in the meta description
  (`window cleaning cost thousand oaks` 3.8, `window cleaning prices westlake village` 3.9,
  `window cleaning prices agoura hills` 5.9), so the cheap title_meta win has been taken. The
  obvious structural move, lifting the pricing pillar out of the dead blog into a `/pricing/` page,
  **would create a near-duplicate of a page rebuilt on 07-17 that is still pending review, and it
  could not be consolidated**, because 301s live in `.blrb/nginx_spa.conf`, which `blrb-connect`
  applies on the VPS and the GitHub Actions site deploy does not redeploy. Committing the redirect
  would ship inert config. Logged for a future run where the redirect can be applied.
- **Why no city page body copy was touched.** `/santa-barbara/` (review 09-07) and `/thousand-oaks/`
  (review 09-09) are live differentiation experiments and the other eight are their control groups.
  This run's change is JSON-LD plus one trust line, applied uniformly to all 10, so it does not
  disturb the between-groups read on either experiment.

**Expected impact:**
- **Primary, and it is a correctness fix first.** The site now states the true rating and review
  count. The honest expectation for rankings is **zero direct effect**: self-serving
  `aggregateRating` on a business's own site is not eligible for Google rich results either way, so
  no star snippets should appear. What changes is what AI engines quote. They read this JSON-LD
  literally, and "4.9 from 185 Google reviews" is both true and a materially stronger citation than
  "5.0 from 50".
- **Secondary, and this is the one I actually expect to matter:** consolidating 15 business nodes
  into one `@id` and naming the Google Business Profile in `sameAs` is the standard mechanism for
  telling Google that the listing and the website are one entity. The measured problem on this
  domain is that the GBP takes the local rankings and the website does not. **Prediction: no
  measurable position change from this alone within six weeks.** It is a prerequisite, not a
  driver, and I would rather say so than claim a number I do not believe.
- **Third: the visible number is a conversion lever independent of ranking.** "185 Google reviews"
  in the hero and on all 10 city pages, where it previously said "50+", is a stronger proof point
  for every visitor who already arrives, and those visitors are the ones who click the Calendly CTA.
  GA4 cannot measure this here (consent-gated, reporting 0 sessions), so I am not going to be able
  to prove it either way.
- **Honest limitation.** Nothing here creates demand or wins a click in the SERP. This run bought
  accuracy and entity coherence, both of which were genuinely broken, and neither of which shows up
  in the clicks column on its own.
- **The highest-yield action is still not in this repo, and this is the sixth run logging it.** The
  GBP website field still points at `http://alohawindowbros.com/`. I confirmed it today by reading
  the anchor hrefs off the live listing rather than inferring it. It 301-redirects, and it is now
  the URL of a site whose structured data finally points back at that listing. Changing it to
  `https://` is two minutes of Adam's time. Also still open: manual "Request indexing" in the GSC UI
  for the six never-crawled city URLs, and for `/services/gutter-cleaning/` shipped on 08-03.
- **For the GBP workstream this window:** *window cleaning westlake village* (`/westlake/` 3.8,
  GBP 1.9, 55 impressions, zero clicks), *window cleaning agoura hills* (`/agoura/` 7.9, 39 impr,
  zero clicks), *window cleaning newbury park* (`/newbury/` 6.5, 26 impr, zero clicks), plus the
  whole price cluster where the GBP holds 1.0 to 4.6 on ten queries and takes nothing.

**Metrics at time of action (GSC `sc-domain:alohawindowbros.com`, 28d 2026-07-06..2026-08-02):**
- Totals: 86 clicks / 2,581 impressions; non-brand **6 clicks / 1,799 impressions** (prior 3 / 1,724).
  Non-brand average position 11.3 from 9.7.
- Page brand vs non-brand (join, brand regex `/aloha|window bros|mahalo/i`): `/` 723 brand impr / 42
  brand clicks vs **681 non-brand / 1**. GBP `http://` 395 / 35 vs **640 / 2**. `/thousand-oaks/`
  407 / 2 vs 248 / 3. `/agoura/` 351 / 1 vs 137 / 0. `/westlake/` 224 / 1 vs 96 / 0. `/newbury/`
  217 / 0 vs 68 / 0. **All 47 blog posts combined: 21 non-brand impressions, 0 non-brand clicks.**
- **Google Business Profile, read live 2026-08-05: 4.9 stars, 185 reviews** (5 star 175, 4 star 6,
  3 star 2, 2 star 1). Site was publishing 5.0 / 50 on 11 pages. Website field still `http://`.
- **Price-intent cluster, 90d (2026-05-05..2026-08-02): 465 non-brand impressions, 0 clicks**, of
  which the pricing pillar took 35. Best positions are on city pages: `window cleaning cost thousand
  oaks` 6.4, `window cleaning prices westlake village` 4.3, `window cleaning prices agoura hills`
  5.9. Not actioned, reason above.
- Pressure washing and roof cleaning, 90d: **about 15 non-brand impressions**, almost all
  single-impression rows. Confirms the 08-03 "too thin" call.
- Santa Barbara cluster still 100% on `/`: `window cleaning santa barbara` **177 impr @ 8.9** (from
  11.3), plus 31 @ 10.0, 22 @ 8.2, 17 @ 11.5, 16 @ 15.2. Treated 07-31, review pending, untouched.
- `/thousand-oaks/` on its own query: **10.8** (from 11.5). Treated 07-29, review 09-09, too early.
- Homepage brand clicks 42, so the "revert the title if brand clicks fall" trigger has not fired.
- After this run: 15 LocalBusiness nodes with **1** shared `@id` (was 12 distinct plus 3 anonymous),
  `sameAs` and `openingHoursSpecification` on all 15 (was 0), a `Service` node on all 10 city pages
  (was 0), 64 pages built, all JSON-LD parses, mobile 390px verified, build passing.
- Data caveats unchanged: PageSpeed 429 both strategies, Semrush degraded, GA4 reporting 0 sessions
  (consent-gated). Scoreboard still empty with 37 actions pending.

---

### 2026-08-03

**What we did:**
- **new_content (primary): shipped `/services/gutter-cleaning/`,** a 1,431-word service page for a
  service Aloha Window Bros actually sells and the website had never once mentioned. Direct-answer
  lede, Key Takeaways box, a rainfall-vs-oak-phenology table, six FAQs, three cited primary sources,
  and links to all 10 city landing pages.
- **technical: added `FAQPage` JSON-LD to `src/pages/services/[slug].astro`,** which fixes all four
  service pages at once. The schema is derived by regex from the markdown body's `<summary>`/`<p>`
  pairs, so it cannot drift from the rendered list.
- **technical (content rule): closed a hole in the 2026-07-24 em dash sweep.** That sweep's glob
  `src/pages/*.astro` does not match nested templates. `services/[slug].astro` and
  `blog/[slug].astro` still carried dashes, and one of them was in the **`<title>` of every service
  page**, which joined the service name to the location with an em dash and now reads
  `Window Washing in Ventura County, CA`. Swept those plus `CookieBanner.astro` and all
  three pre-existing service markdown bodies.
- **internal_links: 62 inbound HTML files to the new URL** (sitewide footer, homepage services grid,
  homepage county-section service strip, blog sidebar).
- **gbp (no code change): fifth consecutive run logging the `http://` GBP website URL,** now with a
  much larger number attached to it.
- Rejected title_meta, blog refresh, city-page refresh, and further internal_links, with reasons.

**Why we did it (brief numbers, plus the GSC `query x page` join the brief does not contain):**
- The reality check holds for an eighth run: **86 clicks / 5,565 impressions, but 6 non-brand clicks
  against 1,940 non-brand impressions.** Click-winning is still the bottleneck.
- **Every lever the playbook ranks above new_content was blocked by a pending experiment, so I went
  looking for something genuinely untreated and found a whole missing service.** A 90-day
  `query x page` join turned up **277 non-brand impressions across 27 distinct gutter cleaning
  queries, and all 277 landed on the `http://` Google Business Profile listing. Zero landed on the
  website.** `grep -rni gutter src/` returned **0 hits** across 61 URLs. For scale: **the entire
  42-post blog earned 135 non-brand impressions over the same 90 days.** This one absent service was
  carrying roughly twice the blog's entire non-brand demand.
- **The GBP already ranks 1.0 to 3.5 on the money terms**, which means Google has no doubt the
  entity does this work: *gutter cleaning* 15 impr @ **1.0**, *gutter cleaning prices ventura
  county* 15 @ **2.3**, *gutter cleaning prices thousand oaks* 13 @ **2.5**, *gutter cleaning prices
  westlake village* 12 @ **3.5**, *westlake village gutter screen* 38 @ 9.8. The website could never
  compete for any of it because it had nothing on the topic to rank.
- **I verified the business actually offers gutter cleaning before writing anything**, rather than
  inferring it from a ranking. "Gutter cleaning service" is a **GBP secondary category**, and the
  service is listed on the live Houzz profile, Thumbtack, ProMatcher, Yelp ("Gutter Services") and
  BBB. Sources: `citation-engine/clients/aloha.json` and `seo-citation-packs/aloha.md`.
- **Why it clears the information-gain bar decisively.** Standard national gutter advice is "clean in
  the fall," and it is wrong here. Two primary sources prove it and no competitor page for these
  queries carries either: NOAA's 1991-2020 normals for **Oxnard Ventura County Airport (USW00093110)**
  put **87.2% of the 12.93 in annual rainfall in November through March, with February the wettest
  month at 3.26 in** and June through September at **0.17 in combined (1.3%)**; and the **US Forest
  Service FEIS** entry for *Quercus agrifolia* states that coast live oak, an **evergreen**, has
  "leaves emerge from February to April; and old leaves are shed at the same time." **Peak leaf drop
  lands inside the two wettest months of the year.** That is a checkable, locally specific,
  counterintuitive claim, and it is the page's spine.
- **Every source URL was curl-checked for a 200 before being linked.** CAL FIRE and
  readyforwildfire.org both **403 to non-browser agents** and were dropped, same rule that dropped
  the AMS SWEX paper and the USGS link; NFPA's wildfire page (200) supplied the ember guidance
  instead.
- **A service page, not a blog post,** because the blog is measured dead for non-brand traffic
  (19 non-brand impressions and 0 clicks across all 42 posts this window). Service pages sit in the
  conversion structure, carry `Service` schema, and there are only four of them, so this is a
  structural addition rather than another matrix entry.
- **Why the internal links here are not the debunked internal_links play.** The 07-20/07-24 finding
  was that links cannot rescue an *existing, already densely linked* page Google declines to crawl.
  This is the opposite problem: a **brand-new URL needs discovery at all**, and the six city pages
  added in May with no inbound links have never been crawled once. 62 inbound files including the
  sitewide footer and the daily-crawled homepage is the minimum for this page to get fetched.
- **Why not title_meta.** Non-empty section, but still no untreated target. Five of the CTR outliers
  resolve to `/` (title rewritten 07-24, and the brand clicks it risked have actually **risen from
  32 to 42**, so the revert trigger did not fire). The rest resolve to `/agoura/` and `/westlake/`,
  rewritten 07-15 and 07-20. Nothing to rewrite without destroying a pending read.
- **Why not a blog refresh,** including the decayer the brief flags
  (`/blog/solar-panel-cleaning-ventura-coastal-hillside-guide/`, 118 to 2 impressions): re-measured
  this window, all 42 posts together earned **19 non-brand impressions and 0 non-brand clicks**. The
  traffic it lost is not traffic that converts.
- **Why no city page was touched.** `/santa-barbara/` (review 09-07) and `/thousand-oaks/` (review
  09-09) are live experiments and the other eight city pages are their control groups. Treating a
  control is how you lose the read. All six previously uncrawled pages remain untouched.
- **A brief correction worth carrying forward.** The brief lists *window cleaning agoura hills* as
  "slipping," 6.7 to 7.3. The join says `/agoura/` itself went **8.7 to 7.9, improving**; the
  headline is a blend across our own URLs. Same caution as 07-29: join before acting on a brief
  position.

**Expected impact:**
- **Primary prediction:** `/services/gutter-cleaning/` gets crawled and indexed within six weeks and
  earns **at least 40 non-brand impressions in a 28-day window** on gutter queries. The demand is
  already measured at ~92 impressions per 28 days going entirely to the GBP listing, so this is a
  claim about capturing a share of known demand, not about creating it.
- **Secondary:** **at least 1 non-brand click** to the page within six weeks. The site has earned 6
  non-brand clicks in 28 days in total, so one from a brand-new page would be a meaningful shift.
- **Tertiary:** all four service pages become eligible for FAQ rich results. No click number
  attached, because FAQ rich results for local service pages are shown inconsistently.
- **Honest limitation.** These are local-pack SERPs and we hold a strong GBP position on them
  already, so the page may cannibalise map-pack impressions rather than add net new ones. That is
  still a win (a site click is trackable and a GBP impression is not), but I am not claiming the
  totals will simply add up.
- **Second honest limitation.** The page's ceiling is capped by the same thing every page here is:
  no gutter reviews, no gutter photos on the GBP, and a service-area business with no storefront
  address. Content gets us eligible; it does not get us the pack.
- **Third, and I want it on the record: I did not confirm the service scope with Adam.** The
  "What Is Included" section describes the universal core of the trade (trough clearing, downspout
  clearing and water test, flow check, cleanup, debris hauled away) rather than anything specific to
  how the brothers work, and it publishes **no price**. **Adam should read that section once and
  correct it if any of it is wrong.** Everything else on the page is externally sourced.
- **The highest-yield action is still not in this repo, fifth run logged.** The GBP listing carries
  **32 brand clicks and 2 non-brand clicks off 1,043 impressions** this window, and it is the sole
  recipient of the entire 277-impression gutter cluster. Its website field still points at
  `http://alohawindowbros.com/`, which 301-redirects. Changing it to `https://` is two minutes of
  Adam's time and is now worth more than it was, because it should point at a site that finally has
  a gutter page. Also still open: manual "Request indexing" for the six uncrawled city URLs, and now
  for `/services/gutter-cleaning/` too.
- **Local-pack queries for the GBP workstream**, this window: *window cleaning westlake village*
  (`/westlake/` 3.8, GBP 1.9, **51 impressions, zero clicks**), *window cleaning agoura hills*
  (`/agoura/` 7.9, 38 impr, zero clicks), *window cleaning newbury park* (`/newbury/` 6.5, 23 impr,
  zero clicks). Plus the whole gutter set above, where we rank 1.0 to 3.5 and take nothing.

**Metrics at time of action (GSC `sc-domain:alohawindowbros.com`, 28d 2026-07-04..2026-07-31):**
- Totals: 86 clicks / 5,565 impressions; non-brand **6 clicks / 1,940 impressions** (prior 3 / 1,844).
- Page brand vs non-brand: `/` 701 brand impr / **42** brand clicks vs **705 non-brand / 1**. GBP
  `http://` 381 / 32 vs 662 / 2. `/thousand-oaks/` 395 / 2 vs **248 / 3**. `/agoura/` 343 / 1 vs
  140 / 0. `/westlake/` 215 / 1 vs 97 / 0. `/newbury/` 208 / 0 vs 68 / 0. All 42 blog posts:
  284 / 0 vs **19 / 0**.
- **Gutter cluster, 90d (2026-05-05..2026-08-01): 27 queries, 277 non-brand impressions, 0 clicks,
  100% attributed to `http://alohawindowbros.com/`.** Site occurrences of "gutter" before this run:
  **0**. Whole-blog non-brand over the same 90 days for comparison: **135 impressions, 0 clicks**.
- Pressure washing, the other GBP secondary category with no page: ~50 non-brand impressions / 90d,
  mostly single-impression rows. Logged, deliberately not actioned as too thin.
- Santa Barbara cluster, still 100% on `/`: 181 impr @ **9.0** (from 11.4 prior), plus 28 @ 10.4,
  24 @ 8.2, 17 @ 11.6, 16 @ 16.4. Treated 07-31, review pending, left alone.
- `/thousand-oaks/` on its own query: **11.1** (from 11.9). Non-brand clicks on the page went
  **0 to 3**. Treated 07-29, review 09-09, far too early to read.
- Homepage brand clicks **32 to 42** since the 07-24 title rewrite, so the documented "revert the
  title if brand clicks fall" trigger has not fired.
- After this run: 4 service pages (was 3), 62 built pages (was 61), `FAQPage` schema on 4 service
  pages (was 0), 62 inbound HTML files to the new URL, all rendered output outside `/blog`
  dash-clean, build passing.
- Data caveats unchanged: PageSpeed 429 both strategies, Semrush degraded, GA4 reporting 0 sessions
  (consent-gated). Scoreboard still empty with 31 actions pending.

---

### 2026-07-31

**What we did:**
- **homepage (primary): added a sourced Santa Barbara County section to `/`,** the page that actually
  ranks for every Santa Barbara query the site earns. Exact-match H2, direct-answer lede, two sourced
  blocks (Sundowner winds, the water supply), a water-portfolio table for water year 2025, three
  external sources, and four internal links, two of them to `/santa-barbara/`.
- **technical (same page): added `FAQPage` JSON-LD to the homepage,** which had none. `jsonLd` is now
  an `@graph` of LocalBusiness + FAQPage, matching the ten city pages. FAQ copy consolidated into one
  array feeding both the schema and the rendered list so they cannot drift apart.
- **content: 2 new homepage FAQ items** on Santa Barbara service area and cleaning interval, 6 to 8
  total, both consistent with `/santa-barbara/` and the pricing pillar.
- **gbp (no code change): fourth consecutive run logging the `http://` Google Business Profile URL,**
  now with the local-pack query evidence below.
- Rejected title_meta, blog refresh, new_content, and internal_links, with reasons.

**Why we did it (brief numbers, plus the GSC `query x page` join the brief does not contain):**
- The reality check holds for a seventh run: **74 clicks / 2,585 impressions, but 6 non-brand clicks
  against 1,878 non-brand impressions**. Click-winning is the bottleneck.
- **The brief's biggest line is right about the query and wrong about the page.** It lists *window
  cleaning santa barbara* at 180 impressions, position 9.1, zero clicks, and flags it as the top CTR
  outlier. The join says all 180 of those impressions belong to **`/`**, not `/santa-barbara/`. Same
  for the rest of the cluster: *window washing santa barbara* 35 @ 8.3, *santa barbara window
  cleaning* 31 @ 11.1, *santa barbara window cleaners* 17 @ 11.8, *window cleaning montecito* 18 @
  16.7, every row on `/`. That is **281 non-brand impressions, the largest single block on the
  domain**, and it grew from 80 impressions on the head term alone.
- **The page holding that demand had no Santa Barbara content.** Before this run the homepage body
  carried an H2 reading "Window Cleaning Ventura County, Coast to Conejo", three Ventura-framed
  condition cards, one Santa Barbara city chip, and one area card. The title names Santa Barbara
  (rewritten 07-24); the body did not. Fixing that is the cheapest available relevance gain on the
  one page that can convert this demand.
- **Why not `/santa-barbara/`.** URL Inspection re-run this session: `lastCrawlTime = NEVER`, four
  days after the 07-27 differentiation treatment. Nothing done to it can rank this cycle, and it is
  under review until 09-07. Treating it again would destroy that read. All six uncrawled pages
  (`/santa-barbara/`, `/camarillo/`, `/ventura/`, `/ojai/`, `/oxnard/`, `/simi-valley/`) are still
  NEVER crawled and were left alone.
- **Why the content clears the information-gain bar.** The water year 2025 supply portfolio is on no
  competitor page for these queries, and its value is that it justifies a **refusal**: Gibraltar and
  Devil's Canyon 38% (4,517 AF), Lake Cachuma 26% (3,117 AF), the Charles E. Meyer Desalination Plant
  **17%** (1,947 AF), Mission Tunnel 10% (1,177 AF), recycled 9% (1,020 AF), and **zero** from both
  the State Water Project and groundwater, out of 11,777 AF total production. A city that rebuilds
  its supply mix every water year does not have a stable grains-per-gallon number, so we publish the
  portfolio and say we read the deposit on the glass instead. Given this site shipped fabricated
  hardness figures across 11 pages before the 07-17 and 07-24 sweeps, that is the right posture.
  The Sundowner material is summarised and linked rather than repeated, because `/santa-barbara/`
  already owns the deep dive.
- **Why the FAQ schema counts as a real gap and not busywork.** `/` is the site's most valuable page
  by a wide margin and it was rendering six FAQ items with zero FAQ markup while all ten city pages
  had `FAQPage`. It is item 2 and item 4 on the GEO checklist and it costs nothing.
- **Why not title_meta,** even though the playbook ranks it first and the section is non-empty: five
  of the seven CTR outliers resolve to `/`, whose title was rewritten on 2026-07-24, four days before
  this window closed. The other two resolve to `/agoura/` and `/westlake/`, rewritten 07-15 and
  07-20. There is no untreated title on the board; rewriting one would destroy a pending experiment.
- **Why not a blog refresh.** Re-measured again: all 42 posts earned **19 non-brand impressions and
  0 non-brand clicks** in this window (262 of their 281 impressions are brand queries). The brief's
  decaying-page flag on `/blog/solar-panel-cleaning-ventura-coastal-hillside-guide/` is real but
  worthless, because the traffic it lost was not traffic that converts.
- **Why not new_content.** Matrix complete at 42 posts, and the blog measurement above says a 43rd
  earns nothing. The only new query with volume, *exterior cleaning newbury park* (25 impr), sits at
  position 49.9.
- **Why not internal_links.** Closed with evidence on 07-20, 07-24, and 07-29. `/santa-barbara/` is
  already linked from the homepage twice plus contextually from four indexed, frequently-crawled
  blog posts, and Google still declines to crawl it.
- **Correction to the brief worth carrying forward: the brief's "Top pages" and "Decaying pages"
  numbers for `/` are wrong.** It lists `/` at 209 impressions and flags it as decaying from 391.
  The API says `/` took **1,421 impressions and 36 clicks** in that window, with non-brand
  impressions **up 32%** (582 to 767). Do not act on a decay flag for `/` without joining first.

**Expected impact:**
- **Primary prediction:** `/` improves from position 9.1 to **position 7 or better on *window
  cleaning santa barbara*** within six weeks, and the Santa Barbara cluster on `/` earns **at least
  1 non-brand click** in a 28-day window (it has earned zero across 281 impressions).
- **Secondary:** the homepage becomes eligible for FAQ rich results and AI-overview FAQ extraction.
  No click prediction attached, because FAQ rich results for local service pages are inconsistently
  shown and I am not going to claim a number I cannot defend.
- **Honest limitation, and it is the same one as last run.** Position 9 to top 3 in one step is not
  realistic and I am not predicting it. The Santa Barbara SERP is a local-pack SERP and we have no
  Santa Barbara address, so organic depth has a ceiling here that content cannot break through.
- **Honest confound.** The homepage title was rewritten on 07-24 and its CTR read is still pending.
  This change alters the same page. The two are separable in principle (a title moves CTR at a fixed
  position, content moves position) but if `/` gains clicks in September, do not attribute them
  cleanly to either. I judged the relevance gap worth the muddied attribution because the title
  experiment's own read was already going to be confounded by the position moving underneath it.
- **The highest-yield action is still not in this repo, fourth run logged.** The Google Business
  Profile listing carries **29 brand clicks and 2 non-brand clicks off 981 impressions** this window,
  ranking **1.0 to 1.8** for *window cleaning thousand oaks*, *window washing thousand oaks*,
  *window cleaning agoura hills*, *window cleaning newbury park*, and *window washing camarillo*. Its
  website field points at `http://alohawindowbros.com/`, which 301-redirects. Changing it to
  `https://` is two minutes of Adam's time. Also still open: manual "Request indexing" for the six
  uncrawled city URLs, which has no API equivalent.
- **Local-pack queries for the GBP workstream**, all measured this window: *window cleaning westlake
  village* (GBP at 1.8 with 24 impressions, `/westlake/` at 3.7 with 28, **zero clicks between
  them**), *window cleaning agoura hills* (GBP 1.0, `/agoura/` 7.7, 47 impressions, zero clicks),
  *window cleaning newbury park* (GBP 1.4, `/newbury/` 6.7, 28 impressions, zero clicks). Three
  cities where we hold a top-2 map result and a page-1 organic result and still get nothing.

**Metrics at time of action (GSC `sc-domain:alohawindowbros.com`, 28d 2026-07-01..2026-07-28):**
- Brief totals: 74 clicks / 2,585 impressions; non-brand 6 clicks / 1,878 impressions; non-brand avg
  position 10.8.
- Page-attributed brand vs non-brand: `/` 654 brand impr / 35 brand clicks vs **767 non-brand impr /
  1 non-brand click** (prior window 582 non-brand impr). GBP `http://` 343 / 29 vs 638 / 2.
  `/thousand-oaks/` 365 / 3 vs 241 / 3. `/agoura/` 313 / 1 vs 138 / 0. `/westlake/` 193 / 0 vs
  100 / 0. `/newbury/` 186 / 0 vs 66 / 0. All 42 blog posts: 262 / 0 vs **19 / 0**.
- Santa Barbara cluster, all attributed to `/`: 180 impr @ 9.1, 35 @ 8.3, 31 @ 11.1, 17 @ 11.8, plus
  Montecito 18 @ 16.7. **281 impressions, 0 clicks.** `/santa-barbara/` holds 0 impressions.
- `/thousand-oaks/` on its own query is at **11.5** this window (was 11.6 when treated on 07-29);
  two days of exposure, far too early to read. Review still 09-09.
- Index status re-audited this run via URL Inspection: all six of `/santa-barbara/`, `/camarillo/`,
  `/ventura/`, `/ojai/`, `/oxnard/`, `/simi-valley/` remain **`lastCrawlTime = NEVER`**. `/` last
  crawled 2026-07-28, `/thousand-oaks/` 2026-07-26.
- Homepage after this run: `FAQPage` with 8 questions, Santa Barbara section 486 rendered words,
  4 new internal links, 13 pre-existing county-section links preserved.

---

### 2026-07-29

**What we did:**
- **refresh (primary): gave `/thousand-oaks/` a sourced, city-exclusive `localBrief`.** Direct-answer
  lede, Key Takeaways box, four sourced sections, a water-supply table taken from the utility's own
  Consumer Confidence Report, five source links, and two new FAQ entries (FAQPage JSON-LD 6 to 8
  questions). The page went from ~1,040 to **2,681 rendered words**.
- **technical (correctness), same page:** replaced the vague "about 8.5 grains per gallon via
  Calleguas" with the per-source figures from California American Water's 2025 CCR, removed an
  unsourced "280+ sunny days per year" claim, and replaced "Hidden Hills" in the neighborhood chips
  (that is a separate city in Los Angeles County) with "Old Town Thousand Oaks".
- **technical (CSS):** `.city-brief-table tbody th { min-width: 10.5rem }`, because the new
  5-column table collapsed to one word per line in the mobile scroll container.
- **gbp (no code change):** re-logged the `http://` Google Business Profile website URL for a third
  run, now with the query-level evidence attached below.
- Rejected new_content, blog refresh, internal_links, and title_meta, with reasons below.

**Why we did it (brief numbers, plus GSC API measurements the brief does not contain):**
- The brief's reality check holds for a sixth straight run: **71 clicks against 2,588 impressions,
  6 non-brand clicks against 1,900 non-brand impressions (+18%)**. The bottleneck is click-winning.
- **The brief's striking-distance positions are blends across several of our own URLs, and I would
  have optimised the wrong thing without checking.** The brief reports *window cleaning thousand
  oaks* at position 7.2. A `query x page` join splits that into three rows: our Google Business
  Profile listing at **1.3** (32 impr, 1 click), the homepage at **9.3** (33 impr, 1 click), and
  **`/thousand-oaks/` itself at 11.6** (56 impr, **0 clicks**). Same story on *window washing
  thousand oaks*: GBP 1.0, `/` 13.6, `/thousand-oaks/` 12.8. **Our dedicated city page ranks worse
  than our own homepage for the city's own query.** That is the actual defect, and it is on a page
  Google crawls every day.
- **Why Thousand Oaks and not the bigger Santa Barbara cluster.** Santa Barbara is the larger query
  block (172 + 44 + 26 + 18 impressions) but `/santa-barbara/` has **never been crawled**, so
  nothing done to it can rank this cycle; it was treated on 07-27 and is under review until 09-07.
  Thousand Oaks is the opposite case and the only one of its kind on the site: URL Inspection
  confirms `/thousand-oaks/` is "Submitted and indexed", **last crawled 2026-07-26**, and it is the
  **only page on the domain earning non-brand clicks from its own content** (3 non-brand clicks /
  240 non-brand impressions this window; the homepage manages 1 from 788). Depth on a page Google
  reads daily and already ranks has a mechanism. Depth on a page it has never fetched does not.
- **Why the content clears the information-gain bar.** Two things on this page are not on any
  competitor page for these queries, and both are checkable:
  1. **The open space framing.** The Conejo Open Space Conservation Agency protects **15,334 acres
     inside Thousand Oaks city limits and planning area** and manages more than 12,700 of them with
     150+ miles of trails. The city is built around its wildland rather than beside it, which is why
     the soiling profile here is dry inland dust, oak pollen, and grass seed rather than coastal
     salt film. No other city we serve has that structure.
  2. **The water report, quoted against the myth.** A search for Thousand Oaks water hardness
     returns "12.8 grains per gallon, very hard" from water-softener retailers. California American
     Water's 2025 CCR for **PWS ID CA5610040** (Thousand Oaks and Newbury Park) reports **140 mg/L,
     8.2 gpg** from the MWD Jensen plant at **94% of supply**, 164 mg/L / 9.5 gpg from Calleguas
     Lake Bard at 5%, and 146 mg/L / 8.5 gpg from Calleguas Las Posas at 1%, with TDS of 297 / 437 /
     325 ppm. That is "hard", one WQA class below "very hard". The page now says so and shows the
     table. Given this site shipped fabricated hardness numbers across 11 pages before the 07-17 and
     07-24 sweeps, publishing the primary source is worth more here than anywhere else.
- **Why this does not confound the pending Santa Barbara experiment.** Different population,
  different outcome variable, different control group. Santa Barbara asks whether differentiation
  gets an **uncrawled** page crawled, and its controls are the five other uncrawled pages, all
  untouched. Thousand Oaks asks whether differentiation moves an **indexed** page's rank, and its
  controls are Agoura Hills, Westlake Village, and Newbury Park, all untouched. Neither treatment
  changes the other's comparison set.
- **Why not title_meta.** The section is non-empty and the playbook ranks it first, but it has no
  untreated target left. All ten city titles were rewritten on 07-15 and 07-20; the homepage on
  07-24, five days before this window closed, so its read is still pending. Rewriting any of them
  again would destroy a pending experiment rather than create a new one.
- **Why not a blog refresh**, including the two decayers the brief lists
  (`/blog/solar-panel-cleaning-ventura-coastal-hillside-guide/` 118 to 2 impressions and the pricing
  guide 43 to 1): re-measured this run and unchanged, all 42 blog posts together earn **19 non-brand
  impressions and 0 non-brand clicks** in this 28-day window (their other 255 impressions are brand
  queries). There is no demonstrated path from a blog edit to the success metric.
- **Why not new_content.** The service x city matrix is complete at 42 posts and the measurement
  above says a 43rd would earn nothing. The only genuinely new query on the board,
  *exterior cleaning newbury park* (25 impr, up from 1), sits at **position 50.8**. Nothing at
  position 50 justifies a page.
- **Why not internal_links.** Settled with evidence on 07-20 and 07-24 from opposite directions.
  Considered closed.

**Expected impact:**
- **Primary prediction, and I want it graded on the page not the blend:** `/thousand-oaks/` improves
  from **position 11.6** to **position 8 or better for *window cleaning thousand oaks*** within six
  weeks, measured as the `page = /thousand-oaks/` row specifically, not the query's blended average.
- **Secondary:** the page earns at least 4 non-brand clicks in a 28-day window (it earned 3 this
  window across all queries).
- **Honest limitation.** Content depth moves rank on a page that is already crawled and already
  ranking, which is exactly this case, but position 11.6 to top-3 in one step is not realistic and
  I am not predicting it. If the page moves to 8-10 without gaining clicks, that is still a partial
  win and the next lever is the map pack, not more words.
- **Second honest limitation.** Our own homepage outranks this page for the query. Fixing that is a
  cannibalisation problem I deliberately did **not** touch, because `/` carries 33 of the site's 71
  clicks and de-optimising it to help a page with zero clicks is a bad trade. If `/thousand-oaks/`
  moves above `/` on its own query, the cannibalisation resolves itself.
- **The highest-yield action this cycle is still not in this repo, and this is the third run it has
  been logged.** The Google Business Profile listing ranks **1.0 to 1.3** for *window cleaning
  thousand oaks* and *window washing thousand oaks*, and 1.0 to 1.8 for the *best window washer*
  variants across six cities. It carries 30 clicks and 980 impressions, and its website field points
  at `http://alohawindowbros.com/`, which 301-redirects. Changing that field to `https://` is a
  two-minute change for Adam. Also still open: manual "Request indexing" for the six uncrawled city
  URLs in the GSC UI, which has no API equivalent.
- Local-pack queries for the GBP workstream, unchanged: *window cleaning westlake village*
  (`/westlake/` at position 3.4 and the GBP listing at 1.8, **51 impressions, zero clicks between
  them**) and *window cleaning newbury park* (position 6.7, 24 impressions, zero clicks).

**Metrics at time of action (GSC `sc-domain` property, 28d 2026-06-29..2026-07-26):**
- Brief-reported totals: 71 clicks / 2,588 impressions; non-brand 6 clicks / 1,900 impressions;
  non-brand avg position 10.9.
- Page-attributed brand vs non-brand split: `/` 633 brand impr / 33 brand clicks vs **788 non-brand
  impr / 1 non-brand click**. GBP `http://` 337 / 28 vs 643 / 2. `/thousand-oaks/` 350 / 3 vs
  **240 / 3**. `/agoura/` 306 / 1 vs 140 / 0. `/westlake/` 190 / 0 vs 98 / 0. `/newbury/` 181 / 0 vs
  66 / 0. All 42 blog posts combined: 255 brand impr / 0 clicks vs **19 non-brand impr / 0 clicks**.
- `/thousand-oaks/` before this run: ~1,040 rendered words. After: **2,681**. Jaccard vocabulary
  similarity to siblings **39.0 to 41.9%**, against **54.1 to 58.2%** for the untreated indexed
  pages and 49.3% for the Oxnard/Ojai pair. 55% of its vocabulary is now unique to it, vs 27 to 34%
  for untreated pages.
  - The 07-27 entry's 76.2%/65.4% figures used `intersection / min(set)`, which is unusable across
    documents of different lengths. Jaccard is the metric from here on; the two are not comparable.
- Index status re-audited this run: `/santa-barbara/`, `/camarillo/`, `/ventura/`, `/ojai/`,
  `/oxnard/`, `/simi-valley/` all still **0 impressions, `lastCrawlTime = NEVER`**. The coverage
  *labels* rotated (`/santa-barbara/` and `/simi-valley/` now say "URL is unknown to Google",
  `/camarillo/` now says "Discovered, currently not indexed") but that string is a live read of the
  crawl queue and rotates on its own. **Not a regression from the 07-27 change.**
  `/thousand-oaks/`: "Submitted and indexed", last crawled 2026-07-26.
- Data caveats: PageSpeed 429 and Semrush 403/400 on every endpoint for a fourth straight run, so no
  third-party keyword or Core Web Vitals data. Competitor crawl returned 1 page across 3 domains.
  GA4 still reports 0 sessions; flagged again since 07-24, still not actioned.
- Blog post count unchanged at 42. Scoreboard still empty, 25 actions pending.

### 2026-07-27

**What we did:**
- **refresh (primary): rebuilt `/santa-barbara/` into a genuinely differentiated page.** Added an
  optional `localBrief` prop to `CityLanding.astro` and populated it for Santa Barbara only: a
  direct-answer lede, a Key Takeaways box, four sourced sections, a first-party five-zone service
  interval table, and two new FAQ entries (FAQPage JSON-LD 6 to 8 questions). The page went from
  ~1074 to 2390 rendered words; vocabulary overlap with a sibling city page fell from 76.2% to 65.4%.
  The other nine city pages were left untouched as a control group.
- **gbp (no code change):** re-escalated the `http://` Google Business Profile website URL, now with
  hard numbers attached.
- **technical (documentation, no code change):** recorded the brand vs non-brand split per page in
  `.claude-site-map.md`, and the trailing-slash duplicate observation.
- Rejected new_content, blog refresh, internal_links, and title_meta, with reasons below.

**Why we did it (brief numbers, plus GSC API measurements the brief does not contain):**
- The brief's reality check holds for a fifth run: **68 clicks against 2615 impressions, 5 non-brand
  clicks against 1927 non-brand impressions (+22%)**. The bottleneck is click-winning.
- **The brief's page table is misleading and I verified why.** It reports `/` at 208 impressions.
  The actual GSC row for `https://alohawindowbros.com/` is **2137 impressions / 65 clicks**; the 208
  figure belongs to the `/#about`, `/#reviews`, and `/#services` fragment rows. The brief also omits
  `http://alohawindowbros.com/` entirely (39 clicks / 1286 impressions) because it reads the
  URL-prefix property, which cannot see http URLs. All figures below come from the
  `sc-domain:alohawindowbros.com` property.
- **The measurement that drove the plan: the blog earns no non-brand traffic.** Splitting a
  `page x query` join on `/aloha|window bros|mahalo/i`:

  | Page | Brand impr / clicks | Non-brand impr / clicks |
  |---|---|---|
  | `/` | 633 / 32 | **817 / 1** |
  | `http://alohawindowbros.com/` (GBP) | 335 / 28 | **647 / 2** |
  | `/thousand-oaks/` | 344 / 3 | 238 / 2 |
  | `/agoura/` | 307 / 1 | 141 / 0 |
  | `/westlake/` | 191 / 0 | 99 / 0 |
  | `/newbury/` | 182 / 0 | 61 / 0 |
  | **all 42 blog posts** | 445 / 0 | **135 / 0** (over 90 days) |

  Over a full 90 days the entire blog earned **135 non-brand impressions and zero clicks**. The blog
  pages the brief lists as healthy are brand impressions: `hard-water-stains-westlake-village` is 46
  brand / 2 non-brand, `screen-cleaning-simi-valley` 45 / 1. They surface as secondary results for
  *aloha window bros*, not for their target queries. This closes the question of whether more or
  better blog content is the answer on this site. It is not.
- **Why Santa Barbara specifically.** It is the largest non-brand block on the board:
  *window cleaning santa barbara* 167 impr @ 9.5, *window washing santa barbara* 44 @ 8.4,
  *santa barbara window cleaning* 29 @ 11.6, *santa barbara window cleaners* 19 @ 13.1, plus
  *window cleaning montecito* 22 @ 17.1 rising from 8. That is **281 impressions and zero clicks**,
  and per-query attribution confirms **every one of them lands on `/`**, not on `/santa-barbara/`.
- **Why differentiation, and the honest counter-argument.** I re-ran URL Inspection this morning:
  all six pages are still "Discovered - currently not indexed" with `lastCrawlTime = NEVER`,
  unchanged since 07-24, while `/agoura/` was crawled 2026-07-25. Internal links were ruled out from
  both directions on 07-20 and 07-24. The remaining in-repo lever is that the ten city pages shared
  ~76% of their rendered tokens. **The counter-argument, which I want on the record: the four
  indexed pages are equally duplicative, so duplication is clearly not disqualifying on its own, and
  the real discriminator between the two groups is that the indexed four carry legacy WordPress
  backlinks.** Differentiation is therefore a plausible push over a quality threshold, not a proven
  mechanism. It is the best in-repo option available, and it is cheap to grade.
- **Why not title_meta.** Its only untreated targets are the six uncrawled pages, and rewriting a
  title on a page Google has never fetched cannot move anything. The homepage title was rewritten
  three days ago and re-touching it would destroy a pending read.
- **Why not a blog refresh**, including the two real decayers
  (`/blog/solar-panel-cleaning-ventura-coastal-hillside-guide/` 118 to 2 impressions, and the
  pricing guide 43 to 2): the whole blog class earns zero non-brand clicks in 90 days, so a refresh
  there has no demonstrated path to the success metric. The pricing guide was also rebuilt 10 days
  ago and is still pending review.
- **Why not internal_links.** Settled with evidence on 07-20 and 07-24. Considered closed.
- **Why not new_content.** The service x city matrix is complete at 42 posts, and the measurement
  above says adding a 43rd would earn nothing.

**Expected impact:**
- **Primary, stated as a binary I can actually check:** `/santa-barbara/` gets crawled at all within
  six weeks, meaning URL Inspection reports a `lastCrawlTime` instead of NEVER. I am **not**
  predicting a ranking or a click from this page in that window. If it is crawled and indexed, the
  follow-on target is the 281-impression Santa Barbara cluster currently served by `/` at position
  8.4 to 13.1.
- **Honest limitation:** if the discriminator really is backlinks rather than content quality, this
  fails and the six pages stay uncrawled. That is a real possibility, and the nine untreated city
  pages are the control that will tell us. If Santa Barbara is crawled and the other five are not,
  differentiation is the mechanism and it is worth repeating on Ventura and Camarillo. If nothing
  changes anywhere, **stop spending runs on the unindexed six** and treat it purely as an off-page
  problem.
- **The highest-yield action this cycle is not in this repo.** The Google Business Profile listing
  ranks position **1.0 to 1.8** for *best window washer agoura hills / camarillo / simi valley /
  thousand oaks / ventura / westlake village*, plus *gutter cleaning* and *window cleaning thousand
  oaks* at 1.3. It carries **30 clicks and 982 impressions, about a quarter of all site clicks**,
  and its website field points at `http://alohawindowbros.com/`, which 301-redirects (verified by
  curl today). Fixing that field to `https://` is a two-minute change for Adam. Also still open from
  07-24: manually "Request indexing" for the six uncrawled city URLs in the GSC UI, which is not
  available via API.
- Local-pack queries for the GBP workstream, unchanged and still earning zero clicks despite strong
  organic rank: *window cleaning westlake village* (pos 2.2, 33 impr) and *window cleaning newbury
  park* (pos 4.3, 22 impr).

**Metrics at time of action (GSC `sc-domain` property, 28d 2026-06-27..2026-07-24):**
- Site total 113 clicks / 4053 impressions / avg pos 10.2. Page-attributed split: brand 3260 impr /
  64 clicks, non-brand 2022 impr / 5 clicks.
- Brief-reported (URL-prefix property) totals: 68 clicks / 2615 impressions, non-brand 5 / 1927.
- `/santa-barbara/`, `/camarillo/`, `/ventura/`, `/ojai/`, `/oxnard/`, `/simi-valley/`: 0 impressions
  each, `lastCrawlTime = NEVER`, re-verified 2026-07-27. `/agoura/` last crawled 2026-07-25.
- `/santa-barbara/` before this run: ~1074 rendered words, 76.2% vocabulary overlap with a sibling.
  After: 2390 words, 65.4% overlap. Control pair (Oxnard vs Ojai) unchanged at 76.2%.
- Data caveats: PageSpeed 429 and Semrush 403/400 on every endpoint for a third straight run, so no
  third-party keyword or Core Web Vitals data. Competitor crawl returned 1 page across 3 domains.
  GA4 still reports 0 sessions; per the 07-24 note that Consent Mode now defaults to granted, the
  consent explanation no longer covers it and GA4 may simply be broken. Flagged again, not actioned.
- Blog post count unchanged at 42. Scoreboard still empty, 22 actions pending.

---


### 2026-07-24

**What we did:**
- **Diagnosis first, and it changed the whole plan.** Instead of taking the brief's CTR-outlier list
  at face value, I queried the GSC API for query-to-page attribution and then the URL Inspection API
  for index status. **Six of the ten city landing pages are not in Google's index**: `/santa-barbara/`,
  `/ventura/`, `/ojai/`, `/oxnard/`, `/simi-valley/` are "Discovered, currently not indexed" with no
  crawl on record, and `/camarillo/` is "URL is unknown to Google."
- **homepage (primary action):** rewrote the `<title>` and meta description on `/`, plus expanded the
  `LocalBusiness` `areaServed` from 4 cities to all 10 plus Montecito.
- **technical:** added real `lastmod` to all 58 sitemap URLs (there were zero before) and a `WebSite`
  JSON-LD node for the SERP site name.
- **technical (correctness):** removed unsourced water-hardness figures that survived the 07-17 sweep
  on `/santa-barbara/`, `/ventura/`, and `/oxnard/`; swept em/en dashes from the five files touched.
- **gbp (no code change):** logged the `http://` GBP URL issue plus the two local-pack queries.
- Rejected title_meta on city pages, internal_links, refresh, and new_content, with reasons below.

**Why we did it (brief numbers):**
- The brief's reality check held for a fourth run: **67 clicks against 2627 impressions, 5 non-brand
  clicks against 1926 non-brand impressions (+32%)**. The bottleneck is click-winning. The playbook
  ranks title_meta first when CTR outliers is non-empty, and it has 7 entries.
- **But the CTR-outlier list does not mean what the last three runs assumed.** Pulling page-level GSC
  data for each outlier query shows the ranking URL is the **homepage**, not the city page:

  | Query | Impr | Pos | Page Google actually ranks | City page impr |
  |---|---|---|---|---|
  | window cleaning santa barbara | 154 | 9.5 | `/` | **0** |
  | window cleaning camarillo | 47 | 11.0 | `/` | **0** |
  | window cleaning ventura | 43 | 14.3 | `/` | **0** |
  | window washing santa barbara | 45 | 8.7 | `/` | **0** |
  | window cleaning thousand oaks | 36 | 10.6 | `/` **and** `/thousand-oaks/` (60 impr) | 60 |
  | window cleaning agoura hills | 45 | 7.9 | `/agoura/` | 45 |

- URL Inspection confirmed why: the only indexed city pages are the 4 legacy WordPress URLs that
  carry pre-existing backlinks. The 6 added 2026-05-26 have never been crawled. **So 6 of the 10
  title rewrites shipped on 07-15 and 07-20 were applied to pages that cannot appear in any SERP.**
  Those pending experiments should be graded void, not FAIL, and the pages should not be re-treated.
- **Why the homepage was the right target.** It is not a consolation prize: `/` carries **2197 of the
  site's 2627 impressions and 63 of its 67 clicks**, and it is the de-facto city landing page for six
  cities. Its title led with the brand, which is the exact defect the 07-15 and 07-20 runs corrected
  everywhere else, and its description contained an em dash. This is playbook action type 6.
- **Why not internal_links (now settled with evidence, not inference).** `/santa-barbara/` already
  receives 2 links from the homepage and 2-3 contextual links from each of four *indexed, ranking*
  blog posts (`screen-cleaning-oxnard` 129 impr, `solar-panel-cleaning-santa-barbara` 59,
  `screen-cleaning-simi-valley` 62, `screen-cleaning-ventura` 34). Google recrawls those linkers
  constantly and still refuses the target. More links is provably not the mechanism. The 07-20 run
  reached the same conclusion from the other direction. This should now be considered closed.
- **Why not title_meta again.** Its cheapest targets are the unindexed six. Rewriting a title on a
  page Google has never fetched is the definition of motion without a mechanism.
- **Why not refresh.** The two real decayers are `/blog/solar-panel-cleaning-ventura-coastal-hillside-guide/`
  (85 to 35 impr) and `/blog/screen-cleaning-ventura-coastal-salt-and-pollen-guide/` (83 to 34). Both
  are Ventura posts holding good positions (7.7 and 4.4) and neither is the cause of the click
  problem. The pricing guide was rebuilt 7 days ago and is still pending review; re-touching it would
  destroy that read.
- **Why not new_content.** Matrix complete at 42 posts. Nothing cleared the information-gain bar, and
  writing a new page while six existing conversion pages sit uncrawled would make the problem worse.
- **Why the sitemap fix is a real mechanism, not filler.** All 58 URLs shipped with **no `<lastmod>`
  at all**. It is the one sitemap field Google says it uses for crawl scheduling, and the pages that
  need rescheduling are precisely the six it declined to crawl. Values are derived from git history,
  never build time, so the signal stays trustworthy.

**Expected impact:**
- Primary: the homepage title now matches the query for the biggest block on the board (the Santa
  Barbara cluster: 157 + 46 + 28 + 18 impressions, plus *montecito* 24 rising from 6). At pos 9.4 the
  realistic outcome is the first non-brand clicks, not a rank change. Titles move CTR, not position.
- **Honest limitation: I do not expect the sitemap `lastmod` fix alone to get the six pages indexed.**
  "Discovered, currently not indexed" on a domain with almost no external links is usually a
  site-value judgement, and lastmod is a scheduling hint, not an instruction. It is the only
  meaningful in-repo lever, so it is worth shipping, but the highest-yield action is off-page and
  Adam's to take: **manually "Request indexing" for the six URLs in the GSC UI** (not available via
  API), plus GBP and citation signals.
- The hardness corrections and the dash sweep will not move rankings. They remove a self-contradiction
  in exactly the pull-quote format an AI engine lifts, and clear a standing house-rule violation from
  the rendered body copy of the highest-traffic page on the site.
- **Rollback trigger**: ~61 of 67 clicks are brand. If brand clicks drop materially next window,
  revert the homepage title before touching anything else.

**Metrics at time of action (GSC 28d, 2026-06-24..2026-07-21):**
- Total clicks 67 (-9%), total impressions 2627 (+12%). Non-brand clicks 5 (+25%), non-brand
  impressions 1926 (+32%), non-brand avg position 10.6.
- `/` 63 clicks / 2197 impr / pos 8.7. `http://alohawindowbros.com/` 36 clicks / 1246 impr / pos 5.3.
  `/thousand-oaks/` 6 / 1000 / 10.1. `/agoura/` 1 / 676 / 6.6. `/westlake/` 0 / 463 / 7.7.
  `/newbury/` 0 / 442 / 11.4.
- `/santa-barbara/`, `/camarillo/`, `/ventura/`, `/ojai/`, `/oxnard/`, `/simi-valley/`: **0 impressions
  each, not indexed.**
- Sitemap lastmod coverage before: 0/58. After: 58/58 across 18 distinct git-derived dates.
- Data caveats: PageSpeed 429 and Semrush 403/400 on every endpoint again, so no third-party keyword
  or Core Web Vitals data. Competitor crawl returned 1 page across 3 domains. GA4 reports 0 sessions;
  note that `Base.astro` now defaults Consent Mode to **granted**, so the "consent-gated" explanation
  in the brief no longer fully accounts for zero sessions and GA4 may simply be broken. Flagged, not
  actioned, this run.
- Blog post count unchanged at 42. Scoreboard still empty, 17 actions pending.

---

### 2026-07-20

**What we did:**
- **title_meta (sole action):** rewrote the `<title>` and `<meta description>` on the **7 city landing pages the 2026-07-15 CTR pass never touched**: `/thousand-oaks/`, `/ventura/`, `/ojai/`, `/oxnard/`, `/westlake/`, `/newbury/`, `/simi-valley/`. Dropped the brand from every title, led each description with the exact query phrase, and added the city's own published price band plus the phone number. Titles 45-56 chars, descriptions 141-149 chars.
- `/thousand-oaks/` got the dual-intent title (`Window Cleaning & Washing Thousand Oaks, CA | Free Quote`) already proven out on Santa Barbara.
- **gbp (no code change):** logged *window cleaning westlake village* (pos 1.5, 29 impr, 0 clicks) and *window cleaning newbury park* (pos 4.5, 22 impr, 0 clicks) for the GBP workstream.
- Rejected internal_links and new_content with reasons below.

**Why we did it (brief numbers):**
- The brief's reality check is unambiguous and unchanged for a third straight run: **66 total clicks against 2620 impressions, 5 non-brand clicks against 1927 non-brand impressions (+43%)**. Impressions are compounding and clicks are not. The bottleneck is click-winning, and the playbook ranks title_meta first when the CTR-outlier section is non-empty. It is non-empty, with 6 entries.
- **The decisive finding was an incomplete job, not a new idea.** The 07-15 run rewrote 3 of 10 city pages. Auditing all 10 metaTitles showed the other **7 were still on the legacy `Window Cleaning <City>, CA - Aloha Window Bros` boilerplate**. That pattern burns 22 of ~57 title characters on a brand term with zero non-brand search demand.
- **Six of the seven untreated pages back a query the brief flags:**
  - `/thousand-oaks/` - *window cleaning thousand oaks* 110 impr / pos 8.4 (the largest untreated query on the board) and *window washing thousand oaks* 52 impr / pos 9.3, **slipping** from 8.4.
  - `/ventura/` - *window cleaning ventura* 47 impr / pos 14.5, **CTR outlier at 0.0%**, impressions 18 -> 47. Plus *window cleaning ventura ca* 22 impr / pos 11.0.
  - `/ojai/` - *window cleaning ojai* 33 impr / pos 13.2, **CTR outlier at 0.0%**, impressions 18 -> 33, and flagged **slipping**.
  - `/oxnard/` - *window cleaning oxnard* 21 impr / pos 15.4, impressions 2 -> 21.
  - `/westlake/` - *window cleaning westlake village* pos **1.5**, 29 impr, 0 clicks (local-pack suspect).
  - `/newbury/` - *window cleaning newbury park* pos **4.5**, 22 impr, 0 clicks (local-pack suspect).
- **Why treating 7 more pages does not confound the pending 07-15 experiment:** those 3 pages retain their own independent before/after window. These 7 are a disjoint set with their own baselines. The scoreboard is still empty with 8 pending, so no action type has graded FAIL and none is off the table.
- **Why not internal_links.** The tempting hypothesis was that `/santa-barbara/` is starved, since *window cleaning santa barbara* is the biggest query on the board (151 impr, pos 9.7, impressions 67 -> 151) yet the page is absent from Top pages. I counted actual inbound internal links per city page before acting: **Ojai 14, Oxnard 12, Ventura 11, Westlake/Simi/Santa Barbara/Newbury 10, Camarillo 8, Agoura 8, Thousand Oaks 7.** Santa Barbara is mid-pack, and the correlation runs backwards: the two most-linked pages (Ojai 14, Oxnard 12) are the two worst-ranking cities (pos 13.2, 15.4), while the least-linked (Thousand Oaks, 7) is the best performer at 971 impressions. Internal link count is not the binding constraint on this site, so adding links would have been motion without a mechanism.
- **Why not new_content.** The service x city matrix is complete at 42 posts. Nothing cleared the information-gain bar, so per the guardrail I wrote nothing.
- **Why not a refresh.** Only 2 pages are in Decaying pages. One of them, the pricing guide, was rebuilt from scratch 3 days ago on 07-17 and is still pending review; re-touching it would destroy that read. The other, `/blog/window-washing-santa-barbara-coastal-guide/`, sits at **pos 23.3**, too far out for a refresh to convert into clicks this cycle, and its query is already served by `/santa-barbara/` at pos 8.7.

**Expected impact:**
- Primary: first non-brand clicks from `/thousand-oaks/`, `/ventura/`, and `/ojai/`. Thousand Oaks at pos 8.4 with 110 impressions is the most likely to convert. A title carrying a price and "Free On-Site Quote" should beat one carrying a brand name nobody searches.
- Realistic ceiling: these are position 8-15 queries outside Thousand Oaks and Newbury. Title changes move CTR, not rank, so the honest expectation is a few clicks, not a step change. Ventura at pos 14.5 and Oxnard at 15.4 may show nothing until rank improves, and I would not read zero clicks there as a failed title.
- The two local-pack queries (Westlake pos 1.5, Newbury pos 4.5) will likely **still show 0 clicks** even with better titles. That is the diagnostic value: if a pos-1.5 page with a good title still earns nothing, the map pack is confirmed as the blocker and the GBP workstream is the only remaining lever.
- Secondary: removed em dashes from the rendered `<head>` of 7 pages, a standing house-rule violation.

**Metrics at time of action (GSC 28d, 2026-06-20..2026-07-17):**
- Total clicks 66 (-13%), total impressions 2620 (+21%). Non-brand clicks 5 (+25%), non-brand impressions 1927 (+43%), non-brand avg position 10.8 (from 9.7).
- Treated pages: /thousand-oaks/ 7 clicks / 971 impr / pos 10.2; /westlake/ 0 clicks / 472 impr / pos 8.1; /newbury/ 0 clicks / 426 impr / pos 12.1. /ventura/, /ojai/, /oxnard/, /simi-valley/ all below the Top-pages reporting cutoff (<56 impr).
- Untouched control from the 07-15 pass: /agoura/ 1 click / 709 impr / pos 6.7.
- Data caveats: GA4 reports 0 sessions (consent-gated, undercounts; GSC is truth). PageSpeed 429 and Semrush 403 on all endpoints, so no third-party keyword or Core Web Vitals data this run. Competitor crawl returned effectively nothing (1 page total across 3 domains), so no competitive SERP read either.
- Blog post count unchanged at 42. Scoreboard still empty, 8 actions pending review.

---

### 2026-07-17

**What we did:**
- **refresh (primary):** rebuilt `/blog/how-much-does-window-cleaning-cost-in-ventura-county/` from the ground up. The old version was titled "How Much Does Window Cleaning Cost in Ventura County" and never stated a single price; its own FAQ said the cost "depends on factors such as the number of windows." Replaced with a per-city price table for all 10 cities, a price-driver table, restoration vs cleaning pricing, a Key Takeaways box, a direct answer with a number in the first 150 words, and a 6-question FAQ with FAQPage JSON-LD (the page previously had no FAQ schema). New title: "Window Cleaning Cost in Ventura County: A 2026 Price Guide" (57 chars).
- **technical:** swept the fabricated "15 to 20 grains per gallon" hardness stat off 11 pages (7 blog posts + 4 city landing pages). The 2026-07-14 run corrected this claim in the hard-water pillar but the same number survived everywhere else.
- **internal_links:** added a third homepage county-section guide card pointing at the pricing guide.
- **gbp (no code change):** logged `window cleaning westlake village` (pos 1.9, 29 impr, 0 clicks) for the GBP workstream.

**Why we did it (brief numbers):**
- The brief's reality check is explicit: non-brand clicks are 5 against 1903 non-brand impressions (+50%), so the bottleneck is click-winning, not content. The service x city matrix is complete, so new_content was off the table.
- **title_meta was already spent.** The brief's window (2026-06-17..2026-07-14) ends the day *before* the 2026-07-15 title rewrite shipped, so the CTR-outliers list (Santa Barbara, Agoura Hills, Camarillo) reflects pages that are **already treated and pending review**. Re-treating them would have confounded a live experiment for no gain. The brief confirms this: "Pending (not yet due): 4", scoreboard empty.
- That left the strongest untreated signal: **the decaying pricing page**. It is the only entry in "Decaying pages" with a commercial-intent query behind it, and it is falling on two fronts at once. Impressions 51 -> 10 (-80%), pos 10.1. Its supporting queries are both in "Falling queries": *window cleaning prices ventura* at **pos 4.0** (impr 14 -> 8) and *window washing cost ventura county* collapsing from **pos 7.9 to 17.3** (impr 14 -> 8).
- Position 4.0 on "window cleaning prices ventura" is the single best non-brand position on the board, and it is attached to the page with the worst content on the site. That is the clearest refresh case the data has offered.
- **The information-gain bar is cleared by first-party data.** We publish per-city price bands on 10 city landing pages; no competitor in this market publishes per-city pricing at all. Consolidating them into one table is exclusive, verifiable, and exactly what GEO standard E01 (original first-party data) rewards. It required no invented numbers.
- **The hardness sweep is a credibility fix, not a ranking play.** The site was asserting two different numbers for the same city's water: `/westlake/` and its window-cleaning guide said 14-20 gpg, while `hard-water-stains-westlake-village-guide.md` said 8.5 gpg with citations from Cal Water and Las Virgenes MWD (both publish 146 mg/L on 100% imported supply). The Westlake guide's version sat inside a pull-quote, the exact format an LLM lifts and repeats. `/westlake/` also claimed "hard well + municipal water" when Cal Water's own report states the district has no wells. Where we had no primary data (Simi Valley, Oxnard blends), we deleted the fabricated figure rather than inventing a replacement.

**Expected impact:**
- Primary: recover and improve *window cleaning prices ventura* (currently pos 4.0) and *window washing cost ventura county* (pos 17.3, was 7.9). A pricing query answered with actual prices should hold position far better than one answered with "it depends." Expect impressions on the page to recover from 10 toward the prior 51+ within 6 weeks, and the first non-brand clicks from a pos-4 query.
- The per-city price table and 6 FAQs are built for AI Overview and ChatGPT citation on "how much does window cleaning cost" queries, which currently have no good local answer.
- Secondary: the page now passes links into `/ventura/`, `/thousand-oaks/`, and `/westlake/`, and receives one from the homepage.
- The hardness sweep should not move rankings. It removes a self-contradiction that would undermine citation trust, and it protects the 07-14 correction from being re-poisoned by the 11 pages that still carried the false number.

**Metrics at time of action (GSC 28d, 2026-06-17..2026-07-14):**
- Total clicks 67 (-4%), total impressions 2599 (+28%). Non-brand clicks 5, non-brand impressions 1903 (+50%), non-brand avg position 10.4.
- `/blog/how-much-does-window-cleaning-cost-in-ventura-county/`: 0 clicks / 10 impr / pos 10.1 (prior impr 51).
- window cleaning prices ventura: 0 clicks / 8 impr / pos 4.0 (prior pos 7.6).
- window washing cost ventura county: 0 clicks / 8 impr / pos 17.3 (prior pos 7.9).
- Top pages unchanged: /thousand-oaks/ 7 clicks / 1030 impr / pos 10.2; /agoura/ 1 click / 775 impr / pos 6.9.
- Data caveats: GA4 reports 0 sessions (consent-gated, undercounts; GSC is truth here). PageSpeed 429, Semrush 403 on all endpoints, so no third-party keyword or CWV data this run.
- Blog post count unchanged at 42 (refresh, not new content).

---

### 2026-07-15

**What we did:**
- Rewrote the `<title>` and meta description on three city landing pages flagged in the GSC "CTR outliers" list: `/santa-barbara/`, `/agoura/`, and `/camarillo/`.
- Dropped the brand suffix from each `<title>`, front-loaded the exact search query, and added a CTR hook (free on-site / 24-hr quote + a price band in the description).
- Santa Barbara's title now targets both outlier queries at once: "Window Cleaning & Washing Santa Barbara, CA | Free Quote".

**Why we did it (brief numbers):**
- Non-brand clicks are 6 (28d) against 1880 non-brand impressions (+56% vs prior). Reality check in the brief: with clicks near zero and impressions healthy, the bottleneck is click-winning (titles, positions 1-3, local pack), not more content. The service x city matrix is already complete, so new posts would risk thin duplication.
- The three pages chosen are all page-1-boundary CTR outliers with real impressions and 0% CTR: window cleaning agoura hills (pos 6.6, 59 impr), window cleaning santa barbara (pos 10.0, 134 impr, rising 63→134), window washing santa barbara (pos 9.0, 48 impr), window cleaning camarillo (pos 10.5, 47 impr, rising 14→47, pos improving 12.4→10.5).
- Skipped Ventura (pos 15.2) and Ojai (pos 13.1): too deep on page 2 for a title change to convert clicks yet. Playbook rank 1 (title_meta) chosen because the CTR-outliers section was non-empty.

**Expected impact:**
- CTR lift on these three pages over the next 4-6 weeks as the sharper, query-forward titles surface. Realistic target: first non-brand clicks on `/agoura/` and `/santa-barbara/` city queries (currently 0), and CTR moving off 0% toward the ~3% expected for their positions.
- Secondary: the "& Washing" token in the SB title should also help the window washing santa barbara query.

**Metrics at time of action (GSC 28d, 2026-06-15..2026-07-12):**
- Total clicks 61 (-22%), total impressions 2550 (+32%). Non-brand clicks 6, non-brand impressions 1880, non-brand avg position 10.1.
- window cleaning santa barbara: 0 clicks / 134 impr / pos 10.0
- window cleaning agoura hills: 0 clicks / 59 impr / pos 6.6
- window washing santa barbara: 0 clicks / 48 impr / pos 9.0
- window cleaning camarillo: 0 clicks / 47 impr / pos 10.5
- GBP note (no code change): window cleaning westlake village sits at pos 2.1 with 0 clicks, a local-pack problem for the GBP workstream, not a content one.

---

### 2026-07-14

**What we did:**
- Created new blog article: "Hard Water Stains on Windows in Ojai: A Well Water Guide" (`/blog/hard-water-stains-ojai-well-water-guide`).
- Created new blog article: "Hard Water Stains on Windows in Westlake Village: What Actually Causes Them" (`/blog/hard-water-stains-westlake-village-guide`).
- **Corrected a factual error in our existing hard water pillar page.** The article "How to Remove Hard Water Stains from Windows" claimed Conejo Valley water "averages 15 to 22 grains per gallon." The water utilities' own published reports put it at roughly 8.5. We replaced the false claim with a sourced, per-district hardness table.

**Why we did it:**
- The service x city matrix (window / screen / solar for all 10 cities) was completed on 2026-07-13. The next-highest-value gap on the content plan was the **hard water restoration city variants**, which are high-intent, high-ticket queries: restoration jobs run $200 to $500 versus $175 to $350 for a standard clean.
- We picked Ojai and Westlake Village specifically because they are the **two extremes**, which let us publish a genuine comparison instead of two near-duplicate pages. We verified the numbers against primary sources rather than asserting them: Casitas MWD's 2024 Ojai water quality report, California Water Service's Westlake district report, and the Las Virgenes MWD water quality report.
- **The information-gain angle no competitor has:** Ojai runs about 17 grains per gallon on local well water, while both utilities serving Westlake Village average 146 (about 8.5 gpg) on imported water. Ojai homeowners deal with roughly double the mineral load. Nobody in this market publishes per-district hardness data.
- The Westlake article is deliberately counterintuitive and tells the truth against our own sales instinct: the water there is only moderately hard, so the real cause is **sprinkler overspray frequency, not water hardness**. Pages that answer a question honestly and specifically are what get cited by AI search, and this is the kind of claim a competitor's generic "hard water is bad" page cannot make.
- Fixing the false 15-to-22 gpg stat matters for GEO: it sat inside a pull-quote on our pillar page, which is precisely the format an LLM lifts and repeats. Publishing a wrong number that the water district's own report contradicts is a credibility risk with both Google and AI answer engines.

**Expected impact:**
- Target queries: "hard water stains windows ojai", "hard water spots windows westlake village", "how hard is the water in ojai", "westlake village water hardness", plus the broader "remove hard water stains from windows" pillar these two now feed. Expect indexation in 1 to 2 weeks and position 5 to 15 on the long-tail city terms within 4 to 8 weeks, given how thin the competing content is.
- The hardness-comparison table and the FAQ answers are written as directly quotable, sourced blocks, which is the format that earns AI Overview and ChatGPT citations. "How hard is the water in Ojai" is a question with no good local answer currently ranking.
- Both posts pass link equity to `/ojai/` and `/westlake/`, the conversion pages. `/westlake/` is currently ranking 79th for "aloha window cleaning," so it needs internal support most.

**Metrics at time of action:**
- Semrush: 14 organic keywords, 16 organic monthly traffic, domain rank 7,088,188. Best positions: "aloha window bros" #1, "window washing santa barbara" #8, "the window bros chico" #9.
- Close-to-page-1 opportunities unchanged: "window cleaning camarillo" #13, "window cleaning ventura ca" #13, "window cleaning santa barbara ca" #14, "window cleaning santa barbara" #15.
- Organic keywords trending down from the March peak (27 keywords, 26 traffic) to 14 keywords / 16 traffic in June, which is why we are prioritizing genuinely differentiated content over volume.
- GSC and GA4 remain unconfigured (invalid_grant), so no click or impression data is available. Keyword selection is based on Semrush positions, the city landing page set, and verified local water district data.
- Blog post count: 40 -> 42.

---

### 2026-07-13

**What we did:**
- Created new blog article: "Screen Cleaning Newbury Park: A Canyon Dust and Two-Wind Guide" (`/blog/screen-cleaning-newbury-park-canyon-dust-and-wind-guide`).
- Created new blog article: "Screen Cleaning Ojai: An Orchard Pollen and Well Water Guide" (`/blog/screen-cleaning-ojai-orchard-pollen-and-well-water-guide`).
- These two posts **complete the service x city content matrix**. All 10 cities Aloha Window Bros serves now have a dedicated window cleaning, screen cleaning, and solar panel cleaning guide, each feeding its city landing page.
- Both are full GEO-optimized guides: direct answer in the first 150 words, quotable stat statements, comparison tables, authoritative citations (EPA, National Weather Service, CDC, AAAAI), a 5-question FAQ with FAQPage JSON-LD schema, and a Calendly booking CTA. Each links to its city landing page and the screen-cleaning service page in both the opening and the closing CTA, plus its matching solar post and the hard water stain pillar.

**Why we did it:**
- Newbury Park and Ojai were the last two gaps on the documented `screen cleaning [city]` priority list. Closing them means every city page now receives geo signal from three separate blog guides instead of one or two, which is the site's strongest structural asset given its very low domain authority.
- Both articles clear the information-gain bar with a real local mechanism no competitor page explains, which is what earns AI citations and featured snippets rather than just a ranking:
  - **Newbury Park**: it sits where marine air coming up the Conejo Grade meets dry canyon flow, so screens go through a damp-then-dry cycle that cements dust into the mesh instead of leaving it loose. Layered on top, hard sprinkler overspray leaves mineral scale in the lower third of the screen, which then traps dust. That specifically explains the common "the bottom of my screen is dirtier than the top" observation.
  - **Ojai**: much of the valley is on private wells with very hard groundwater. That means rinsing a screen with a garden hose actively makes it worse, because it deposits fresh mineral scale into the weave. This is the strongest angle we have written for any screen post because it inverts the homeowner's default DIY instinct on physical grounds rather than sales grounds, and it pairs with the valley inversion layer that traps sticky citrus and avocado grove pollen.
- Semrush data was unchanged from the 2026-07-10 snapshot (identical keyword table), so there was no new ranking signal to react to. With GSC and GA4 still unauthenticated, the documented content gap list remains the correct driver, and it explicitly named these two cities.
- The site remains firmly in the low-traffic regime (14 organic keywords, 16 organic traffic in the latest month), where the priority is content creation, not optimization of existing traffic.

**Expected impact:**
- Should capture position 5 to 15 within 6 to 10 weeks for low-competition long-tails like "screen cleaning Newbury Park", "screen cleaning Ojai", "window screen cleaning Ojai CA", and neighborhood variants (Dos Vientos, Meiners Oaks, East End).
- The well-water angle in the Ojai post is a strong candidate for AI Overview and voice-assistant citation on queries like "can I hose off my window screens" and "why do my screens look hazy after cleaning", which are national-intent questions we can answer with a locally grounded mechanism.
- Adds 6 new internal links into `/newbury/` and `/ojai/`, the two weakest city landing pages by ranking signal. `/newbury/` currently ranks only 68th for "aloha window cleaning" and `/ojai/` does not rank at all, so both need inbound internal equity more than any other city page.
- Strategic note for future runs: with the matrix complete, the next highest-impact work is **refreshing and expanding the 10 stale posts** (all over 90 days old, several dating to 2026-03-09) rather than adding new city-service pages, which would now risk near-duplicate thin content.

**Metrics at time of action:**
- Organic keywords: 14 | Organic traffic: 16/mo | Semrush domain rank: 7,088,188 (latest monthly, 2026-06-15).
- Best positions: "aloha window bros" pos 1 (brand), "window washing santa barbara" pos 8, "the window bros chico" pos 9, "window cleaning camarillo" pos 13, "window cleaning ventura ca" pos 13, "window cleaning santa barbara ca" pos 14, "window cleaning santa barbara" pos 15.
- Blog posts: 38 to 40. Total pages built: 56.
- Nearest real competitors remain tiny: deluxewindowcleaning.co (48 keywords), joeswindowcleaning805.com (52 keywords). This niche is still winnable on content volume and quality alone.
- Data caveat: GSC and GA4 remain unauthenticated (`invalid_grant`), PageSpeed returned HTTP 429, and the Semrush backlinks endpoint returned HTTP 400. Keyword data was identical to the previous snapshot.

---

### 2026-07-10

**What we did:**
- Created new blog article: "Screen Cleaning Simi Valley: A Santa Ana Wind and Ash Guide" (`/blog/screen-cleaning-simi-valley-santa-ana-wind-and-ash-guide`).
- Created new blog article: "Screen Cleaning Agoura Hills: A Canyon Dust and Oak Pollen Guide" (`/blog/screen-cleaning-agoura-hills-canyon-dust-and-oak-pollen-guide`).
- Both are full GEO-optimized guides: direct answer in the first 150 words, quotable stat statements, comparison tables, authoritative citations (EPA, National Weather Service, CDC, AAAAI), a 5-question FAQ with FAQPage JSON-LD schema, and a Calendly booking CTA. Each links to its city landing page and the screen-cleaning service page in the opening and the closing CTA, plus its matching solar-panel-cleaning post.

**Why we did it:**
- With the solar-panel x city matrix complete, `screen cleaning [city]` is the highest-value remaining long-tail. Six of ten cities were covered; these two close the two largest remaining markets, leaving only Newbury Park and Ojai.
- Simi Valley is the biggest unserved city by population (~125,000). It also clears the information-gain bar: it is the only city we serve that gets essentially no marine-layer moisture, so airborne dust lands dry and triple-digit summer heat drives it into the screen weave rather than leaving it on the surface. That is a concrete local mechanism no competitor page explains, and it justifies the professional-vs-hose recommendation on physical grounds rather than sales grounds.
- Agoura Hills was picked over Newbury Park and Ojai on crawl evidence: Semrush shows `/agoura/` already ranking on two queries ("aloha window cleaning" pos 43, "the window bros chico" pos 62), meaning Google is actively indexing that URL, so a new post linking to it should pass equity that lands. Its differentiated angle is oak pollen tannins, which run onto the glass on the first damp morning and explain the very common "my windows re-streaked a week after cleaning" complaint.
- Both articles reinforce the site's strongest structural asset: internal links from blog content into the ten conversion-focused city landing pages, consolidating geo signal instead of fragmenting it.

**Expected impact:**
- Should capture position 5-15 within 4-8 weeks for "screen cleaning simi valley" and "screen cleaning agoura hills" and their variants, and pass internal-link equity to the `/simi-valley/` and `/agoura/` conversion landing pages.
- FAQPage schema positions both posts for People Also Ask and AI-citation (GEO) surfaces on screen-cleaning, wildfire-ash, and pollen/allergen queries.
- The Agoura post additionally supports the `/agoura/` page, which currently ranks only on weak brand-adjacent terms and has never had a topical blog post pointing at it with a screen-cleaning anchor.

**Metrics at time of action:**
- Organic traffic ~16 sessions/mo, up from 7 the prior month (Semrush rank history; still in low-traffic content-build phase) | 14 organic keywords tracked | Domain rank improved from 8,840,703 to 7,088,188 month over month | Top keyword "aloha window bros" at position 1; strongest non-brand keywords are "window washing santa barbara" pos 8, "window cleaning camarillo" pos 13 (trending up), "window cleaning ventura ca" pos 13 | Blog now has 38 posts; screen-cleaning city coverage 8 of 10.
- Data caveat: Google Search Console and GA4 remain unconfigured (invalid_grant), and PageSpeed Insights returned HTTP 429 on both mobile and desktop, so click-through and Core Web Vitals data were unavailable this run. Targeting decisions were made from Semrush position data plus the documented service x city gap list.

---

### 2026-07-08

**What we did:**
- Created new blog article: "Screen Cleaning Santa Barbara: A Coastal Salt and Oak Pollen Guide" (`/blog/screen-cleaning-santa-barbara-coastal-salt-and-oak-pollen-guide`).
- Created new blog article: "Screen Cleaning Oxnard: A Coastal Salt and Ag Dust Guide" (`/blog/screen-cleaning-oxnard-salt-and-ag-dust-guide`).
- Both are full GEO-optimized guides: direct answer in the first 150 words, quotable stat statements, comparison tables, EPA citation, a 5-question FAQ with FAQPage JSON-LD schema, and a Calendly booking CTA. Each links to its city landing page and the screen-cleaning service page in the opening and closing.

**Why we did it:**
- The solar-panel-cleaning x city content matrix is now complete, so the highest-value remaining gap is the `screen cleaning [city]` long-tail (6 cities still had no dedicated page). We prioritized Santa Barbara and Oxnard.
- Santa Barbara: Semrush shows genuine ranking momentum on the Santa Barbara geo cluster - "window washing santa barbara" at position 8 (already sending 6.25% of site traffic), "window cleaning santa barbara" at position 15, and "window cleaning santa barbara ca" at position 14. Publishing a screen-cleaning page lets us capture the adjacent, lower-competition "screen cleaning santa barbara" query while the domain already has topical authority for that city.
- Oxnard: it is the single heaviest-soiling market we serve (coastal salt plus Oxnard Plain agricultural dust - a double load no other city faces), which makes for uniquely differentiated, genuinely useful content. We already rank position 13 for the neighboring "window cleaning camarillo", showing this geo cluster responds to our pages.

**Expected impact:**
- Should capture position 5-15 within 4-8 weeks for "screen cleaning santa barbara" and "screen cleaning oxnard" and their variants, and pass internal-link equity to the `/santa-barbara/` and `/oxnard/` conversion landing pages.
- FAQPage schema positions both posts for People Also Ask and AI-citation (GEO) surfaces on screen-cleaning and airflow/allergen queries.

**Metrics at time of action:**
- Organic traffic ~16 sessions/mo (Semrush, low-traffic content-build phase) | 14 organic keywords tracked | Top keyword "aloha window bros" at position 1; strongest non-brand cluster is Santa Barbara ("window washing santa barbara" pos 8, "window cleaning santa barbara" pos 15) | Blog now has 36 posts, screen-cleaning city coverage 6 of 10.

---

### 2026-07-01

**What we did:**
- Created new blog article: "Solar Panel Cleaning Simi Valley: A Santa Ana Ash and Sun-Bake Guide" (`/blog/solar-panel-cleaning-simi-valley-santa-ana-ash-and-sun-bake-guide`).
- Created new blog article: "Solar Panel Cleaning Ojai: An Orchard Pollen, Ash, and Well Water Guide" (`/blog/solar-panel-cleaning-ojai-orchard-pollen-ash-and-well-water-guide`).
- Both link to their matching city landing page (`/simi-valley/`, `/ojai/`) and the `/services/solar-panel-cleaning` service page within the first 300 words and again in the closing CTA, consolidating solar-intent ranking signal onto the conversion pages.

**Why we did it:**
- These were the final two entries on the documented Solar Panel Cleaning × city priority gap list. Simi Valley and Ojai were the only two of our ten city landing pages without a matching solar-panel-cleaning deep-dive guide. Publishing them completes the solar × city matrix so every city page has a topically-relevant article feeding it equity.
- Live Semrush returned 403 on every endpoint this run (rank_history, organic_keywords, competitors, domain_overview) and GSC/GA4 remain unconfigured, so there was no fresh keyword data. Per the low-traffic content-creation strategy, we prioritized closing known long-tail `[service] [city]` gaps over waiting for traffic that won't exist without content.
- Each article leads with the city's specific soiling driver — Simi Valley's Santa Ana winds + wildfire ash + extreme heat, and Ojai's citrus-orchard pollen + Los Padres ash + hard well water (the well-water angle is a genuine local DIY failure mode) — so the content is genuinely useful and differentiated, not templated filler.
- Both articles follow the full GEO spec (direct answer in first 150 words, 3+ quotable stats with NREL citation, comparison tables, 5-item FAQ + FAQPage JSON-LD, full entity names) for AI-citation readiness.

**Expected impact:**
- Should capture position 5–15 within 4–8 weeks for "solar panel cleaning simi valley" and "solar panel cleaning ojai" and related long-tail queries, then pass internal-link equity to `/simi-valley/` and `/ojai/` to lift those conversion pages.
- FAQPage schema positions both posts to appear in People Also Ask and AI-generated answers for solar cleaning cost/frequency/well-water questions in these geos.

**Metrics at time of action:**
- Semrush: 403 on all endpoints (no data this run). Prior snapshot top keyword: "aloha window bros" position 1 (vol 50); "window washing santa barbara" position 8; "window cleaning ventura ca" position 13. Organic keywords tracked: ~15. Blog post count: 34 → 36. All 10 city landing pages now have a matching solar guide (matrix complete). Build: 50 pages, verified passing.

---

### 2026-06-24

**What we did:**
- Created new blog article: "Solar Panel Cleaning Agoura Hills: A Canyon Dust and Wildfire Ash Guide" (`/blog/solar-panel-cleaning-agoura-hills-canyon-dust-and-ash-guide`).
- Created new blog article: "Solar Panel Cleaning Newbury Park: A Canyon Dust and Sloped-Roof Guide" (`/blog/solar-panel-cleaning-newbury-park-canyon-dust-and-sloped-roof-guide`).
- Both link to their matching city landing page (`/agoura/`, `/newbury/`) and the `/services/solar-panel-cleaning` service page within the first 300 words and again in the closing CTA, consolidating ranking signal onto the conversion pages.

**Why we did it:**
- Semrush shows `/agoura/` is already earning impressions ("aloha window cleaning" at position 43, "the window bros chico" at position 62) yet had no solar-panel content to capture solar-intent searches in that city. Doubling down on a page Google is already surfacing is higher-EV than starting a cold geo.
- `/newbury/` is our weakest city landing page (position 68 for "aloha window cleaning") and had no supporting blog content. Adding a topically-relevant, internally-linked article passes equity to it.
- Both topics sit on the documented priority content gap list (Solar Panel Cleaning × city — Agoura Hills and Newbury Park were two of the eight missing), so we are closing real long-tail `[service] [city]` gaps rather than inventing topics.
- Both articles follow the full GEO spec (direct answer in first 150 words, 3+ quotable stats with NREL citation, comparison tables, FAQ + FAQPage JSON-LD, full entity names) for AI-citation readiness.

**Expected impact:**
- Capture position 5–15 within 4–8 weeks for long-tail queries like "solar panel cleaning Agoura Hills," "solar panel cleaning Newbury Park," and "Dos Vientos solar cleaning."
- Lift `/agoura/` and `/newbury/` landing-page rankings via fresh internal links from topically relevant content.
- Improve odds of AI-search (GEO) citations through structured FAQ schema and quotable, sourced statistics.

**Metrics at time of action:**
- Organic traffic: ~7 sessions/mo (Semrush est.), 15 tracked organic keywords. Top keyword: "aloha window bros" at position 1 (vol 50). Strongest non-brand: "window washing santa barbara" pos 8, "window cleaning santa barbara" pos 15, "window cleaning ventura ca" pos 13.
- `/agoura/`: "aloha window cleaning" pos 43; "the window bros chico" pos 62. `/newbury/`: "aloha window cleaning" pos 68 (weakest city page).
- Blog post count: 32 → 34. Total pages built: 48. GSC/GA4 not yet configured.

### 2026-06-17

**What we did:**
- Published 2 new location GEO blog articles for Ventura, both targeting service × city long-tail gaps we had not yet covered:
  - "Solar Panel Cleaning Ventura: A Coastal and Hillside Guide" (`/solar-panel-cleaning-ventura-coastal-hillside-guide`)
  - "Screen Cleaning Ventura: A Coastal Salt and Pollen Guide" (`/screen-cleaning-ventura-coastal-salt-and-pollen-guide`)
- Each links to the `/ventura/` city landing page AND its matching service page within the first 300 words and again in the closing CTA, consolidating ranking signal onto the canonical conversion page.
- Both follow the full GEO spec: direct answer in the first 150 words, 3+ quotable stats sourced to NREL and the EPA, comparison tables (cost-of-soiling, professional vs. DIY, neighborhood frequency), a 5-question FAQ with FAQPage JSON-LD, and full "Aloha Window Bros" entity naming.

**Why we did it:**
- Ventura is the site's strongest momentum geo right now. Semrush shows "window cleaning ventura ca" (vol 70) jumped from **position 36 in the prior snapshot to position 13** this week, and "window cleaning ventura" (vol 70) sits at position 20. Google is actively warming to our Ventura content.
- The fastest way to compound that momentum is more topically-relevant Ventura pages that all internally link to `/ventura/`. Both the solar and screen Ventura gap articles were still missing, so they were the highest-impact unwritten pages for our best-trending city.
- Low-traffic site (single-digit organic traffic per Semrush rank history), so strategy remains content creation against high-intent local long-tail keywords rather than pure optimization.

**Expected impact:**
- Capture position 8–15 within 4–8 weeks for "solar panel cleaning ventura" and "screen cleaning ventura" queries, which currently have no dedicated page.
- Strengthen internal linking to `/ventura/`, supporting the climb of "window cleaning ventura" / "window cleaning ventura ca" toward page 1.

**Metrics at time of action:**
- Top trending keyword: "window cleaning ventura ca" pos 13 (was 36 last snapshot) | "window cleaning ventura" pos 20 | "window washing/cleaning santa barbara" pos 16–19 | Brand "aloha window bros" pos 1.
- Semrush rank history: ~15 organic keywords, single-digit organic traffic. Domain overview N/A. GSC/GA4 not yet configured.
- Blog post count: 28 (was 26).

---

### 2026-06-12

**What we did:**
- Added "window washing" variant targeting to the two city pages Semrush Copilot flagged: `/santa-barbara/` and `/thousand-oaks/`. Each got the exact phrase woven into the intro prose, a new FAQ item ("Is window washing the same as window cleaning in {city}?") that also lands in FAQPage JSON-LD, and "window washing" added to the meta description.
- In the Semrush UI: added the four Copilot-suggested competitors to the Aloha project (sbwindowcleaning.com, almightywindows.com, santabarbarapacific.com, jerryswindowcleaning.com) and kicked off the overdue Site Audit recrawl on precisionsportsct.com.

**Why we did it:**
- Semrush Copilot's new-keyword rec listed "window washing santa barbara" (vol 90 — our single highest-volume non-brand opportunity, pos 16), "window cleaning santa barbara ca" (vol 30, pos 14), and "window cleaning ventura county" (vol 30, pos 14). Copilot also flagged "window washing thousand oaks" dropping out of the top 10.
- All the "washing" rankings come from the **homepage** — neither city page contained the word "washing" at all (only "cleaning"), so Google had no exact-match page to promote. This was the cheapest possible on-page fix before any new content.
- "Window cleaning ventura county" was deliberately left alone: the homepage title tag and the county H2 section (added 2026-06-03) already target it.

**Expected impact:**
- `/santa-barbara/` starts ranking for the washing-variant queries and the SB terms consolidate from homepage → city page; target top 10 for "window washing santa barbara" (currently 16) within 4–8 weeks.
- "window washing thousand oaks" re-enters the top 10 on `/thousand-oaks/`.
- FAQ items eligible for People Also Ask via FAQPage JSON-LD.

**Metrics at time of action:**
- Organic: 14 keywords, ~7 sessions/mo, Authority Score dropped 7 → 6 (Copilot backlink alert — not yet actioned).
- "window washing santa barbara" #16, "window cleaning santa barbara ca" #14, "window cleaning ventura county" #14, "window cleaning santa barbara" #19 — all from homepage.
- Precision: 102 keywords (+278%), visibility 39.53% (+12.53). Ventura roof: 7 keywords, page-2 positions on county gutter/pressure-washing terms.

---

### 2026-06-10

**What we did:**
- Created two new GEO-optimized blog articles, both targeting Westlake Village:
  - "Solar Panel Cleaning Westlake Village: A Lake Humidity and Hard Water Guide"
  - "Screen Cleaning Westlake Village: A Lake Humidity and Pollen Guide"
- Each article links to the `/westlake/` city landing page (within the first 300 words and again in the closing CTA) and to its matching service page (`/services/solar-panel-cleaning`, `/services/screen-cleaning`).

**Why we did it:**
- Semrush shows the `/westlake/` landing page ranking **position 79** for "aloha window cleaning" — the worst-performing of all 10 city landing pages (Thousand Oaks pos 27, Agoura pos 43, Newbury pos 68, Westlake pos 79). The page has almost no internal-link support relative to its peers.
- Both topics were explicitly flagged as priority content gaps (Solar Panel Cleaning × Westlake Village and Screen Cleaning × Westlake Village), and neither existed yet.
- Strategy: publish two supporting articles that both funnel internal-link equity to `/westlake/`, consolidating ranking signal onto the underperforming conversion page rather than fragmenting it. Differentiated with a real local angle — Westlake Lake humidity plus hard imported State Water Project water (Las Virgenes MWD, 10+ grains) — that competitors do not cover.

**Expected impact:**
- Lift `/westlake/` from position 79 toward the top 30–40 over 6–10 weeks via consolidated internal links and topical relevance.
- Capture long-tail "solar panel cleaning westlake village" and "screen cleaning westlake village" queries (position 10–20 within 4–8 weeks; little to no direct competition for these exact phrases).
- FAQPage JSON-LD makes both posts eligible for People Also Ask / AI-citation surfaces.

**Metrics at time of action:**
- Organic traffic: ~7 sessions/mo (Semrush) | Organic keywords: 15 | Domain rank: 8,840,703
- Westlake landing page: position 79 for "aloha window cleaning" (vol 50)
- Highest-value live keywords: "window cleaning santa barbara" pos 19 (vol 90, CPC $15.54), "window cleaning ventura county" pos 14 (vol 30)
- Note: "window cleaning ventura" slipped pos 9 → 20 week-over-week (homepage). Blog post count 24 → 26; total pages 40 → 42. GSC/GA4 not yet configured (invalid_grant).

---

### 2026-06-03

**What we did:**
- Created new blog article: **Solar Panel Cleaning Oxnard: Beating Ventura County's Heaviest Soiling** (/solar-panel-cleaning-oxnard-coastal-agricultural-guide). Links to the /oxnard/ city landing page and /services/solar-panel-cleaning in the first 300 words and the CTA.
- Created new blog article: **Screen Cleaning Camarillo: An Ag Dust and Pollen Guide** (/screen-cleaning-camarillo-ag-dust-and-pollen-guide). Links to the /camarillo/ city landing page and /services/screen-cleaning in the first 300 words and the CTA.

**Why we did it:**
- These two posts are the top items on our priority service×city content-gap list. We have 10 city landing pages and 3 service pages, but the money keywords are long-tail `[service] [city]` queries that had no supporting blog content. Solar Panel Cleaning Oxnard is the single highest-value solar gap — Oxnard is flagged as the heaviest-soiling market in our service area (coastal salt fog + Oxnard Plain ag dust combine into a film that resists rain), so the page can argue a genuinely differentiated "clean 3–4× per year" recommendation that competitors don't make.
- Screen Cleaning Camarillo completes the window + solar + screen content trio for Camarillo (we already rank/publish for window cleaning and solar there), letting us cross-link three Camarillo guides and consolidate local relevance signals to the /camarillo/ landing page.
- With Semrush showing only ~15 indexed organic keywords and near-zero traffic, the site is firmly in low-traffic territory where the correct strategy is high-intent content creation, not optimization — we cannot earn `[service] [city]` rankings without pages targeting those exact phrases.

**Expected impact:**
- Should begin ranking for "solar panel cleaning oxnard," "screen cleaning camarillo," and close variants within 4–8 weeks, targeting positions 5–15 given low local competition (only 2 Semrush competitors with relevance >0.30, both with <50 keywords).
- FAQPage JSON-LD on both posts positions us for People Also Ask / featured-snippet capture and AI-assistant (GEO) citation, since each answers the target query directly in the first 150 words with cited stats.
- Internal links push ranking equity to the /oxnard/ and /camarillo/ conversion landing pages.

**Metrics at time of action:**
- Semrush: ~15 organic keywords, organic traffic ≈7/mo, domain rank 8.84M (down from 5.99M in March — a content/freshness push is overdue). Best non-brand positions: "window cleaning ventura" #9, "window washing santa barbara" #16, "window cleaning ventura county" #14, "window cleaning santa barbara" #19.
- GSC/GA4 not yet configured (invalid_grant); PageSpeed rate-limited (429). Decisions made on Semrush + keyword-intuition + competitor-gap analysis.
- Blog post count: 22 → 24. Total site pages: 38 → 40 (build verified).

---

### 2026-05-27

**What we did:**
- Created 2 new GEO-optimized blog articles targeting priority service × city content gaps:
  1. "Solar Panel Cleaning Santa Barbara: A Coastal Estate Owner Guide" (`/blog/solar-panel-cleaning-santa-barbara-coastal-estate-guide/`)
  2. "Screen Cleaning Thousand Oaks: A Pollen and Allergy Guide" (`/blog/screen-cleaning-thousand-oaks-pollen-and-allergy-guide/`)
- Both articles include FAQPage JSON-LD, comparison tables, direct-answer first paragraph, full entity-name compliance, 3+ quotable stat statements, and authoritative citations (NREL, CARB, ACAAI, Calleguas, Santa Barbara Water Resources).
- Both articles link to the matching city landing page AND the matching service page within the first 300 words and in the closing CTA.

**Why we did it:**
- **Santa Barbara solar gap is the single highest-value content gap on the site.** Santa Barbara keywords carry $15.54 CPC — the highest CPC of any keyword we rank for — and our SB rankings are slipping ("window cleaning santa barbara ca" dropped from position 6 → 14 between the 2026-05-20 and 2026-05-27 snapshots; "santa barbara window cleaning" sits at position 11 with 140 monthly volume, one place off page 1). We had zero solar content for SB despite owning the corresponding window-cleaning content. Adding the SB solar guide builds topical depth around our most commercially valuable geo and gives Google a second SB-specific service page to consolidate signals on.
- **Screen Cleaning city pages were a 9-city content gap** with only one generic Ventura County article existing. Thousand Oaks was the obvious place to start — TO was a top-10 ranker last snapshot ("window cleaning thousand oaks" at position 7, "thousand oaks window washing" at position 10) and the city name itself is built around the oak tree species that drives the pollen angle. This is a defensible, locally-grounded article no national competitor can write.
- Both topics align with **late-spring search intent** (peak oak pollen + start of solar peak production season), so publishing now maximizes the runway for ranking before the high-intent window opens.

**Expected impact:**
- **Solar Panel Cleaning Santa Barbara**: should capture position 15–25 within 4–8 weeks for "solar panel cleaning santa barbara" and related coastal-estate queries; longer-term path to top 10 given existing domain authority on the SB cluster. Adds a high-CPC capture page.
- **Screen Cleaning Thousand Oaks**: should capture position 10–20 within 4–8 weeks for "screen cleaning thousand oaks" and pollen-related variants. Establishes the screen-cleaning city-page template we can scale to the other 8 cities in subsequent runs.
- Both articles strengthen internal linking to `/santa-barbara/` and `/thousand-oaks/` city landing pages (the conversion targets), helping consolidate ranking signals on the canonical pages instead of fragmenting them.

**Metrics at time of action:**
- Top organic keyword: "aloha window bros" at position 1 (branded, 87.5% of traffic)
- Highest-value cluster: Santa Barbara — "santa barbara window cleaning" pos 11, "window washing santa barbara" pos 16, "window cleaning santa barbara" pos 19, $15.54 CPC
- Trend warning: "window cleaning santa barbara ca" pos 6 → 14, "window cleaning thousand oaks" pos 7 → off top-12 list between 5/20 → 5/27 snapshots
- Domain rank (Semrush): 8.2M as of 2026-04-15 (down from 6.0M peak in March)
- Total blog posts: 20 → 22; total pages: 36 → 38

---

### 2026-05-20

**What we did:**
- Created new blog article: "Window Washing Santa Barbara: A Coastal Guide to Streak-Free Glass"
- Created new blog article: "Window Cleaning Ojai: A Homeowner Guide to Spotless Valley Views"
- Both articles GEO-optimized with direct answers in the first 150 words, quotable stats with citations (EPA, Cal Fire, IWCA), comparison tables, FAQ sections with FAQPage JSON-LD schema, and Calendly CTAs
- Added internal links between the new articles and existing city/topic pages (Thousand Oaks, Westlake Village, Camarillo, Ventura, Santa Barbara, Ventura County, hard water stains guide)
- Updated .claude-site-map.md (blog count 18 → 20, page count 24 → 26) and CHANGELOG.md

**Why we did it:**
- **Santa Barbara is the highest-volume keyword opportunity in our Semrush data.** "santa barbara window cleaning" sits at position 11 with 140 monthly search volume (highest of any keyword we rank for) and "window washing santa barbara" sits at position 16 with 90 search volume. Our existing Santa Barbara article targets "window cleaning"; we had no dedicated content targeting the "window washing" variant. Creating a parallel article focused on "washing" (different search intent — emphasizes process, technique, and surface-level maintenance) gives Google a second SB-anchored URL to rank, reduces over-reliance on one page, and supports the keyword cluster as a whole. CPC for the SB cluster is $15.54 — the highest of any keyword we rank for — making each captured click significantly more valuable than Ventura County or Thousand Oaks traffic.
- **Ojai is the largest uncovered Ventura County town in our content footprint.** Our city-specific blog cluster covers Thousand Oaks, Westlake Village, Agoura Hills, Newbury Park, Camarillo, Oxnard, Simi Valley, Ventura, Santa Barbara — but not Ojai. Ojai is small (population ~7,500) but extremely high-affluence with significant second-home ownership, vacation-rental presence (Ojai Valley Inn area), and a culture that hires local trades. The article differentiates from generic city content by leading with Ojai-specific soiling factors not relevant anywhere else: orchard dust from active citrus/avocado groves, hard well water (most Ojai homes are on private wells, not municipal), wildfire ash from the chronic Ventura County fire season, and "Pink Moment" mineral particulate from the Topa Topa bluffs. Neighborhood targeting includes East End, Arbolada, Mira Monte, Meiners Oaks, and Upper Ojai for hyper-local relevance.
- **Low-traffic-strategy alignment:** With GSC and GA4 still not configured (per snapshot status), the priority remains content creation rather than data-driven optimization. Both topics were chosen from explicit Semrush ranking data (Santa Barbara) and obvious competitor/geo gaps (Ojai) — not guesswork.
- **Competitor gap remains wide open.** Per the snapshot, brilliantwindowcleaning.com has only 1 indexed page; venturacountywindowcleaning.com and windowcleaningventura.com show zero indexed pages. Direct competitors are not publishing content at any meaningful rate — every article we ship extends our topical authority gap.

**Expected impact:**
- **Window Washing Santa Barbara:** Should rank within 6–10 weeks for "window washing santa barbara" (current position 16) and lift "santa barbara window cleaning" (current position 11) by 2–4 positions through topical reinforcement. At positions 5–10, the keyword cluster should generate an additional 15–25 organic clicks/month. With $15.54 CPC, the equivalent paid value is roughly $230–$385/month captured organically.
- **Window Cleaning Ojai:** Net-new keyword acquisition for "window cleaning ojai," "window washing ojai," and Ojai neighborhood variants. With no existing content on these terms anywhere in our footprint, expect first impressions within 4–6 weeks and ranking positions 8–20 within 8–12 weeks. Conversion value is high — Ojai homes are typically larger (East End estates) and use professional services more readily than DIY-heavy demographics.
- **Topical cluster strengthening:** Our city-specific cluster grows from 11 cities to 12, with Santa Barbara coverage doubling. Both new articles internally link to multiple cluster pages, which improves crawl efficiency and distributes link equity.

**Metrics at time of action:**
- Total organic keywords ranked: 19–27 (per Semrush rank history, fluctuating across last 6 months)
- Top keyword: "aloha window bros" position 1 (branded, 30 search vol) | Top non-branded: "window cleaning thousand oaks" position 7 (70 search vol)
- Highest-volume non-branded keyword: "santa barbara window cleaning" position 11 (140 search vol, $15.54 CPC) — directly targeted by this run
- Total blog posts: 18 → 20 | Total pages: 24 → 26
- Domain rank trend: improving (8.2M → 6M over last 60 days, Semrush rank history)

---

### 2026-05-06

**What we did:**
- Created new blog article: "How to Remove Hard Water Stains from Windows: A Ventura County Guide"
- Created new blog article: "Solar Panel Cleaning Camarillo: How to Maximize Your System Output"
- Both articles GEO-optimized with direct answers in first 150 words, quotable stats with citations (USGS, NREL, IWCA, Water Quality Association, CARB, Camrosa Water District), comparison tables, FAQ sections with FAQPage JSON-LD schema, and Calendly CTAs
- Added internal links connecting both articles to all existing city-specific cluster pages (Thousand Oaks, Westlake Village, Newbury Park, Oxnard, Camarillo, Simi Valley, Ventura, Santa Barbara, Agoura Hills) plus core service pages
- Updated .claude-site-map.md (blog count 16 → 18, page count 22 → 24) and CHANGELOG.md

**Why we did it:**
- **Hard water stains — high-intent evergreen + seasonal peak**: Multiple existing articles (Westlake Village, Oxnard, Newbury Park, Camarillo) reference hard water stains in their FAQ sections, proving the topic is highly relevant to our audience — but no dedicated guide existed. May-July is peak sprinkler season in California, when fresh hard water spotting drives the highest search volume for "how to remove hard water stains from windows." This is high-intent search traffic: people searching this query already have the problem and are typically open to professional help when DIY fails (which is most of the time for deposits older than 60 days). The article positions Aloha Window Bros as the authoritative local expert on a specific, solvable problem rather than competing on generic "window cleaning near me" terms where larger competitors dominate.
- **Solar Panel Cleaning Camarillo — replicating the Thousand Oaks blueprint in a higher-soiling market**: The existing "Solar Panel Cleaning Thousand Oaks" article (published 2026-04-15) was the only city-specific solar piece on the site. Camarillo is a structurally different market — closer to the Pacific (salt fog), surrounded by active agriculture (ag dust on the Oxnard Plain), and one of Ventura County's higher solar adoption rates due to flat lots and newer construction. The article differentiates from Thousand Oaks by leading with ag dust + salt fog as the dominant soiling factors and references specific Camarillo neighborhoods (Mission Oaks, Las Posas Estates, Spanish Hills, Camarillo Springs, Camarillo Heights, Sterling Hills) for high-relevance local terms. This expands the solar-cleaning topical cluster from 1 city-specific page to 2 and strengthens internal linking between solar and city content.
- **Low-traffic strategy alignment**: Per the run guidelines, with limited GSC/GA4 data flowing through, content creation is the priority. Both articles fill clear topical gaps (hard water = no dedicated content; Camarillo solar = no city-specific solar variant) rather than waiting for data validation that won't exist without first publishing the content.
- **Competitor gap**: Per the snapshot, the only competitor with detectable content (brilliantwindowcleaning.com) has just 1 indexed page. Both venturacountywindowcleaning.com and windowcleaningventura.com have zero indexed pages. Aloha Window Bros is in a position to dominate the local content vertical by simply publishing comprehensive, GEO-optimized guides faster than competitors.

**Expected impact:**
- **Hard water article**: Should begin appearing for queries like "how to remove hard water stains from windows," "hard water stains glass Ventura County," "sprinkler spots windows California," and "hard water restoration window cleaning" within 4-8 weeks. Conversion rate should be elevated vs. typical informational articles because the audience is actively troubleshooting a problem.
- **Solar Panel Cleaning Camarillo**: Should capture position 5-15 within 6-8 weeks for "solar panel cleaning Camarillo," "solar panel cleaning Camarillo CA," and related neighborhood queries. Mirrors the Thousand Oaks article's structure, which already exists in the index — the same template usually compounds rankings as Google trusts the topical authority.
- **Cluster-level gain**: 18 indexed blog posts now cover 9+ Ventura County cities + 4 service categories. Internal link density continues to grow, which is the primary lever for an early-stage local SEO site.

**Metrics at time of action:**
- Blog post count: 16 → 18 | Total pages: 22 → 24
- GSC: not yet configured (invalid_grant) — flagged in snapshot as the major data gap to resolve
- Semrush: API errors prevented domain overview / organic keywords / competitors data this run; previous snapshots show domain in early-stage growth phase
- PageSpeed: API rate-limited (429) on both runs; not measurable this session
- Competitor visibility: brilliantwindowcleaning.com has 1 indexed page, 2 other competitors have 0 — content velocity is a clear competitive advantage
- Build verified: 24/24 pages built successfully with new articles in sitemap

---

### 2026-04-29

**What we did:**
- Created new blog article: "Window Cleaning Newbury Park: A Homeowner Guide to Spotless Glass"
- Created new blog article: "Window Cleaning Oxnard: A Coastal Homeowner Guide"
- Both articles include FAQ sections with FAQPage JSON-LD schema, pricing and frequency tables, authoritative citations (NOAA, CARB, NWS, WQA, NAHB, IWCA, NREL, Calleguas Municipal Water District), neighborhood-specific recommendations, and Calendly CTAs
- Added internal links connecting both new articles to existing Camarillo, Ventura, Thousand Oaks, Westlake Village, Agoura Hills, Santa Barbara, screen cleaning, solar panel, and Ventura County blog content
- Updated .claude-site-map.md (blog count 14 → 16, page count 19 → 21) and CHANGELOG.md

**Why we did it:**
- **Newbury Park — direct GSC validation**: The /newbury/ location page already generates 18 impressions and 1 click at avg position 7.6 for the prior 30-day window — Google is already recognizing the site for Newbury Park queries, but there was zero blog content backing up that location page. Adding a topical, GEO-optimized article gives Google a stronger, more relevant page to rank and dramatically expands the topical surface area (canyon dust, marine layer, hard water, hillside Dos Vientos homes). Competitors targeting this geo cluster have minimal Newbury Park-specific content (per Semrush competitor data: deluxewindowcleaning.co and windowcleanersventura.com both have <60 organic keywords combined).
- **Oxnard — biggest coastal content gap**: Oxnard is the largest city in Ventura County (pop. ~200k) and the only major coastal city we had no blog content for. Existing Camarillo article references "Oxnard Plain" repeatedly but treats Oxnard as a peripheral mention rather than a primary geo target. The waterfront neighborhoods (Hollywood Beach, Mandalay Bay, Channel Islands Harbor) face the most aggressive salt-spray exposure of any Ventura County area — a strong, defensible topic angle that makes higher-frequency cleaning recommendations naturally credible. This article also internally links to Camarillo, Ventura, and Santa Barbara, strengthening the entire coastal cluster.
- **Seasonal timing**: Late April / early May is entering the peak spring/summer demand window for window cleaning. Publishing now gives Google 4-8 weeks to index and rank these articles before peak search volume hits in May-August. Coastal Oxnard content benefits especially from this timing because beach homeowners book pre-summer cleanings.

**Expected impact:**
- Newbury Park article should improve CTR on the /newbury/ location page (currently 5.56% at position 7.6) and capture position 3-8 for "window cleaning newbury park" and related queries within 4-6 weeks
- Oxnard article should rank position 5-15 within 6-8 weeks for "window cleaning oxnard", "window washing oxnard", "oxnard window cleaning", and waterfront-specific long-tails like "channel islands harbor window cleaning" — a city of 200k that has been entirely uncovered by our content strategy until now
- Combined with existing coastal articles (Ventura, Camarillo, Santa Barbara), this completes the coastal Ventura County coverage and strengthens the whole geo cluster
- Internal link additions strengthen existing Camarillo, Ventura, Thousand Oaks, Westlake Village, Agoura Hills, and Santa Barbara content
- Blog post count reaches 16, continuing to build domain-level topical authority for local window/screen/solar cleaning in Ventura County

**Metrics at time of action:**
- Organic keywords: 27 (stable per March 2026 Semrush rank history) | Organic traffic: 26 sessions/mo | Domain rank: ~6M
- GSC total (prior 30 days): 56 clicks, 510 impressions, 10.98% CTR, avg position 7.1
- Key GSC validation signal: /newbury/ page = 18 impressions, 1 click, 5.56% CTR, position 7.6 — direct evidence Google recognizes the site for Newbury Park but no supporting blog content exists
- Top non-brand keyword: "window cleaning thousand oaks" position 7 (70 vol, $5.30 CPC), "window cleaning ventura county" position 8.4
- Live data sources currently degraded: Semrush returning 403 errors on most endpoints (auth issue), PageSpeed returning 429 (rate limit), GA4 still not configured (invalid_grant). Previous-week snapshot used for trend baseline.
- Blog posts: 14 → 16 | Total pages: 19 → 21

---

### 2026-04-22

**What we did:**
- Created new blog article: "Window Cleaning Camarillo: What Homeowners Need to Know"
- Created new blog article: "Window Cleaning Simi Valley: A Homeowner Guide to Clearer Glass"
- Both articles include FAQ sections with FAQPage JSON-LD schema, pricing and frequency tables, authoritative citations (NOAA, CARB, CAL FIRE, EPA, NWS, WQA, NAHB, IWCA, NREL), neighborhood lists, and Calendly CTAs
- Added internal links connecting both new articles to existing Thousand Oaks, Westlake Village, Agoura Hills, Ventura, Ventura County, screen cleaning, and solar panel cleaning blog content

**Why we did it:**
- **Camarillo content gap**: GSC shows "best window washer camarillo" at position 1 with 3 impressions but 0 clicks — Google is currently serving the home page for this query because no dedicated Camarillo content exists. A targeted article gives Google a stronger, more relevant page to rank and should dramatically improve CTR on Camarillo-area searches. Camarillo is a core Ventura County market (pop. ~70k) that was completely uncovered in our content strategy.
- **Simi Valley content gap**: Same pattern — GSC shows "best window washer simi valley" at position 1 with 3 impressions but 0 clicks. Simi Valley (pop. ~125k) is the largest Ventura County city we had no content for. It's also unique in that it faces the most severe Santa Ana wind exposure in the region and sits inside a Very High Fire Hazard Severity Zone, giving us strong, defensible topic angles (ash/smoke residue, wind-driven dust) specifically relevant to local homeowners.
- **Seasonal timing**: April is entering the peak spring/summer demand window for window cleaning. Publishing now gives Google 4-8 weeks to index and rank these articles before peak search volume hits in May-August.

**Expected impact:**
- Camarillo article should capture position 1-5 for "window cleaning camarillo", "window washer camarillo", and "best window washer camarillo" within 4-6 weeks. These queries currently generate low impressions because no one on our site is targeting them — dedicated content typically unlocks 5-10x impression volume in Google Search Console
- Simi Valley article should capture similar positions for Simi Valley-specific queries. Given the larger city population, Simi Valley could produce higher volume than Camarillo
- Internal links from both articles strengthen existing Thousand Oaks, Westlake Village, Agoura Hills, Ventura, and Ventura County content
- Blog post count reaches 14, continuing to build domain-level topical authority for local window/screen/solar cleaning in Ventura County

**Metrics at time of action:**
- Organic keywords: 27 (stable) | Organic traffic: 26 sessions/mo | Domain rank: ~6M
- GSC total: 56 clicks, 510 impressions, 10.98% CTR, avg position 7.1 (30-day window)
- Top non-brand keyword: "window cleaning thousand oaks" at position 7 (70 vol, $5.30 CPC) — stable
- Key GSC signal: "best window washer camarillo" position 1, 3 impressions; "best window washer simi valley" position 1, 3 impressions — both with zero clicks and zero dedicated pages
- Related close-to-page-1: "window cleaning ventura county" position 8.4, "window cleaners ventura county" position 9.9
- Blog posts: 12 → 14 | Total pages: 17 → 19

---

### 2026-04-15

**What we did:**
- Created new blog article: "Window Cleaning Agoura Hills: Your Guide to Spotless Windows Year-Round"
- Created new blog article: "Solar Panel Cleaning in Thousand Oaks: How to Protect Your Investment"
- Both articles include FAQ sections with FAQPage JSON-LD schema, comparison tables, authoritative citations (NREL, AQMD, WQA, NAHB, CAL FIRE, WRCC), and Calendly CTAs
- Added internal links connecting new articles to existing Thousand Oaks, Westlake Village, Ventura, Santa Barbara, and Ventura County blog posts plus all three service pages

**Why we did it:**
- **Agoura Hills content gap**: The /agoura/ location page generates 119 impressions/month but only 2 clicks (1.68% CTR) at position 6.7. GSC shows "best window washer agoura hills" with 10 impressions at position 6 — zero clicks. No blog content existed to support this location page. A dedicated blog article strengthens the Agoura Hills keyword cluster and provides Google a richer, more authoritative page to rank for informational queries. Agoura Hills is one of the 6 core service areas in the site's LocalBusiness JSON-LD schema.
- **Solar panel cleaning geo-targeting**: Two existing solar panel articles ("Professional vs DIY" and "When and How Often") are generic nationwide content with no location targeting. Meanwhile, "window cleaning thousand oaks" is the site's strongest non-brand keyword (position 7, 70 vol, $5.30 CPC). Combining "solar panel cleaning" with the Thousand Oaks geo creates a new keyword cluster with no internal competition. April is the ideal time to publish — spring is when homeowners prepare panels for peak summer production, so this content will have 4-6 weeks to index before the highest-demand period.

**Expected impact:**
- Agoura Hills article should improve CTR on /agoura/ location page and begin ranking for "window cleaning agoura hills" and "best window washer agoura hills" within 4-6 weeks, targeting positions 3-8
- Solar panel article should capture "solar panel cleaning thousand oaks" and related queries — a keyword space with zero competition from existing blog content. Expected initial ranking at positions 10-20, improving to 5-10 over 6-8 weeks
- Internal links from both articles strengthen the site's overall link graph and pass authority to service pages and existing location content
- Blog post count reaches 12, continuing to build domain-level topical authority

**Metrics at time of action:**
- Organic keywords: 27 (stable since Feb) | Organic traffic: 26 sessions/mo | Domain rank: ~6M
- Top non-brand keyword: "window cleaning thousand oaks" at position 7 (70 vol, $5.30 CPC)
- Notable improvement: "window cleaning ventura" moved from position 20 → 9 since last article was published
- /agoura/ page: 119 impressions, 2 clicks, position 6.7 | /thousand-oaks/ page: 263 impressions, 2 clicks, position 4.4
- "santa barbara window cleaning": position 11 (140 vol, $15.54 CPC) — stable
- GSC total: 56 clicks, 485 impressions, 11.55% CTR, avg position 7.6 (new data — GSC was not configured in previous snapshot)

---

### 2026-04-08

**What we did:**
- Created new blog article: "Window Cleaning Ventura: A Homeowner's Guide to Professional Service"
- Created new blog article: "Screen Cleaning in Ventura County: Why Clean Screens Matter More Than You Think"
- Both articles include FAQ sections with FAQPage JSON-LD schema, comparison tables, authoritative citations (NOAA, IWCA, ASHRAE, AAFA, NAHB), and Calendly CTAs
- Added internal links from Ventura article to existing Thousand Oaks, Westlake Village, and Ventura County blog posts

**Why we did it:**
- **Ventura city keywords**: Four keywords — "ventura window washing" (pos 11, 70 vol), "window washing ventura ca" (pos 12, 70 vol), "window cleaning ventura ca" (pos 17, 70 vol), "window cleaning ventura" (pos 20, 70 vol) — all point to the homepage. Combined ~280 monthly searches with $5.55–$6.05 CPC. We had two "Ventura County" articles but ZERO city-of-Ventura content. A dedicated article should consolidate these rankings and push them onto page 1.
- **Screen cleaning content gap**: Aloha Window Bros has a /services/screen-cleaning page but zero blog content supporting it. No existing blog post mentions screen cleaning as a primary topic. This is a completely untapped content vertical targeting queries like "screen cleaning near me", "window screen cleaning cost", and "professional screen cleaning". Opening this vertical also strengthens topical authority for the screen cleaning service page.

**Expected impact:**
- Ventura article should push 4 keywords from positions 11–20 to positions 5–10 within 4–6 weeks, potentially capturing 50–100+ additional monthly sessions worth $5–$6/click
- Screen cleaning article opens a new keyword vertical with zero existing competition from our own site — should begin ranking for screen cleaning queries within 6–8 weeks
- Internal links from Ventura article strengthen existing Thousand Oaks and Westlake Village articles
- Blog post count reaches 10, building domain-level topical authority for local window/screen cleaning

**Metrics at time of action:**
- Organic keywords: 27 (stable from March) | Organic traffic: 26 sessions/mo | Domain rank: ~6M
- Top non-brand keyword: "window cleaning thousand oaks" at position 7 (70 vol) — stable
- "santa barbara window cleaning" appeared at position 11 (140 vol, $15.54 CPC) — new since last snapshot
- "thousand oaks window washing" appeared at position 10 (40 vol) — new since last snapshot
- "window cleaning westlake" dropped from position 14 to not visible — new Westlake article may need indexing time
- Blog posts: 8 → 10 | Total pages: 13 → 15

---

### 2026-04-01

**What we did:**
- Created new blog article: "Window Cleaning Santa Barbara: Why Local Homeowners Trust Professional Service"
- Created new blog article: "Window Cleaning Westlake Village: A Homeowner Guide to Cleaner Glass Year-Round"
- Both articles include FAQ sections, comparison tables, authoritative citations, and Calendly CTAs
- GEO-optimized: direct answers in first 150 words, quotable statistics, structured FAQ for AI citation readiness

**Why we did it:**
- **Santa Barbara**: Semrush shows "window cleaning santa barbara ca" at position 6 with $15.54 CPC (highest CPC of any tracked keyword) — yet we had ZERO dedicated Santa Barbara content. This is the single highest-value content gap. A targeted article should consolidate this ranking and push into top 3.
- **Westlake Village**: "window cleaning westlake" at position 14 with 70 monthly searches and $7.88 CPC. Combined with "westlake window cleaning" (40 vol, pos 37) and "window cleaning near me west lake" (30 vol, pos 37), there's ~140 monthly search volume with no blog content. Old location pages (westlake.html, /westlake/) exist but aren't ranking well.

**Expected impact:**
- Santa Barbara article should push from position 6 to positions 1–3 within 4–6 weeks, capturing high-intent traffic worth $15.54/click
- Westlake Village article should break into page 1 (positions 5–10) within 4–6 weeks, consolidating rankings across multiple Westlake-related queries
- Both articles strengthen topical authority for location-based window cleaning queries
- FAQ sections improve eligibility for Google's People Also Ask features and AI-generated answers

**Metrics at time of action:**
- Organic keywords: 27 (up from 10 in Oct 2025) | Organic traffic: 26 sessions/mo | Domain rank: ~6M
- Top non-brand keyword: "window cleaning thousand oaks" at position 7 (70 vol)
- Key gaps filled: Santa Barbara (pos 6, $15.54 CPC), Westlake Village (pos 14, $7.88 CPC)
- Growth trend: Keywords nearly tripled in 5 months (10 → 27), traffic jumped from 0 to 26

---

### 2026-03-26

**What we did:**
- Migrated site from WordPress to Astro static HTML
- Set up 301 redirects from all old WordPress URLs to new structure
- Added JSON-LD structured data (LocalBusiness, Article, Service schemas) to every page
- Submitted new sitemap to Google Search Console (11 URLs)
- Added GA4 conversion tracking for phone calls, quote clicks, and email clicks
- Configured automated SEO optimization system (Semrush + GA4 + GSC + Trends + SERP analysis)

**Why we did it:**
- WordPress site was repeatedly compromised (hacked 3+ times in March 2026), causing downtime and potential SEO penalties from Google for serving malware
- Static HTML site has zero attack surface — no PHP, no database, no login page
- Old site had no conversion tracking — couldn't measure which pages or keywords drove actual calls/bookings
- Old site had basic meta tags but no structured data, limiting rich result eligibility

**Expected impact:**
- Elimination of security-related downtime and potential Google penalties
- Faster page load (static HTML vs WordPress PHP) should improve Core Web Vitals and rankings
- Structured data enables rich results in Google (star ratings, business info, article cards)
- Conversion tracking will identify which content actually generates business
- Automated weekly SEO optimization will continuously improve rankings based on real data

**Metrics at time of action:**
- GSC: 6 pages submitted (old sitemap), 0 indexed on new structure yet
- GA4: Tracking just activated (G-MRSP8D9CQG)
- Semrush: Existing project with keyword tracking and site audit active
- Pages: 11 total (home, 3 service pages, 6 blog posts, blog listing)
