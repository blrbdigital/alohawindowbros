## 2026-08-16 - High-windows guide rebuilt for the one query family with no map-pack veto, plus a second audit of the auto-published stream

The `query x page` join turned up something the site's own doctrine had not absorbed: the rule that
"the blog earns no non-brand traffic" was measured on the 42-post service x city matrix, and it is
now false of the national informational posts. `/blog/window-cleaning-for-high-windows/` took **93
non-brand impressions in about 9 days**, against 135 for the entire geo blog over 90 days, and it is
~99% non-brand. Its queries are informational and non-local, so unlike every city query on this
site the map pack cannot eat the click.

- **`/blog/window-cleaning-for-high-windows/` refreshed and retitled.** It sat at position 11.4 and
  16.3 on its two target queries, on page 2, behind a SERP whose top three are an Amazon search
  results page, a Reddit thread, and a telescopic pole vendor. It opened with a scene-setting story
  rather than an answer, had no FAQ, no schema, and no table matching what the PAA questions ask.
  - **Direct answer in the first 150 words**, key takeaways box, and a **height-to-method decision
    table** (up to 8 ft through above 30 ft) that answers the actual PAA questions "how do you clean
    20 feet high windows" and "how to clean windows that are too high to reach".
  - **Real regulatory information gain, primary-sourced, that no competitor in this SERP carries.**
    California Title 8 Section 3282 is a window-cleaning regulation specifically: the 18-inch
    opening rule, approved anchorages, the building owner's written assurance, 12-month inspections,
    and the live-load clause that rules out patio covers and bay window roofs. Plus OSHA's 4:1 base
    placement and 3-feet-above-landing rules, which derive a concrete answer for a 20 ft roofline
    (a 23 ft ladder set 5 ft out), and the rule against carrying a load that could cost you your
    balance, which quietly rules out the classic bucket-and-squeegee climb.
  - **Removed an unsourced "a spotter is required above 10 feet" claim** and a vague trade-show
    citation standing in for "historic injury and fatality data". Both were the fabricated-authority
    defect class that produced the false Section 3282 claims in August.
  - Title now leads with the exact query string: `Cleaning High Windows: Safe Methods, Tools, and Costs`.
- **`FAQPage` JSON-LD now derives on blog posts**, reusing the exact regex from
  `services/[slug].astro` so schema and rendered list cannot drift. Parity verified 6 == 6 with
  `grep -o | wc -l`. Inert for the other 57 posts; picks up any future post that ships an FAQ.
- **Second audit of the Outrank stream (5 new posts since the 08-12 audit).** Four of five carried
  defects from the 08-12 table, so the stream reproduces them rather than having been a one-off.
  **Eight dofollow links to competing window cleaners and content farms removed**, including one
  competitor blog that carried the entire pricing framework of the commercial pricing post, and a
  content farm cited twice as a chemistry authority. Market size re-pointed to IBISWorld for the
  second time. Deleted a "$25 to $35 per skylight" figure sourced only to a competitor, and
  corrected that post's "$150 to $400" residential band to the countywide **$150 to $475**.
  Manufacturer care guides and the Federation of Window Cleaners were kept: the test is competing
  service provider or content farm, not merely outside company.

## 2026-08-14 - GA4 behavioural layer: the five conversions now have a story underneath them

The site has counted phone_call, email_click, text_click, quote_click and reviews_click since
launch, but nothing about what happened before or after one. Added `public/assets/js/awb-analytics.js`,
loaded last and observing only: delete it and the site behaves exactly as it does now.

- **The five conversion events are untouched and are NOT re-fired by the new layer.** Double-counting
  a phone call would have quietly inflated every report Aloha gets. Each one now carries a `zone`
  though, so "the sticky bar drives the calls, the footer does not" is finally answerable.
- **Quote form funnel** (`#inquiry-form`): `form_start`, `form_field` (which fields, in what order),
  `form_submit` with seconds-to-submit, `form_success` / `form_error` read off `#form-status` by
  MutationObserver, and `form_abandon` with the last field touched. Field VALUES are never sent.
  The city and service selects report their choice because those are menu options we wrote.
- **Reading**: `scroll_depth` 25/50/75/90/100, `section_view` per section id, `engaged_time` at
  15/30/60/120/300s counted only while the tab is visible.
- **Intent and friction**: `nav_click` / `footer_click` / `internal_nav` (flagged when the destination
  is a city page), `outbound_click`, `faq_open`, `rage_click`, `copy_text` (length only),
  `page_print`, `exit_intent`, `js_error`, and `web_vitals` (LCP / CLS / INP) on pagehide.
- `session_context` on every load: landing page, referrer host, utm source/campaign, and the
  `?from=` param the city pages pass into /contact/.

## 2026-08-14 - Calendly retired: quote flow is now a contact form with call and text CTAs

- **New `/contact/` page** (`src/pages/contact.astro`): Call (805) 341-4121 and Text Us CTAs in the
  hero, plus an inquiry form (name* + phone* required; email optional; city + service selects;
  details textarea; honeypot). Submits JSON to `POST /api/contact`, shows inline success/error
  states, fires GA4 `form_submit` on success. All inputs 16px per the iOS auto-zoom rule. City
  landing pages link `/contact/?city={cityName}` and the form prefills the City select from it.
- **Every Calendly CTA sitewide now points at `/contact/`**: Header (3 links), homepage (6, incl.
  the two region buttons), CityLanding (3), blog index + post template, services template, privacy
  sidebar, all 55 blog-prose links across ~30 posts (link text " on Calendly" became " online"),
  the FAQ JSON-LD "on Calendly or call" strings, and `public/llms.txt`. Header/Footer "Contact"
  nav links now go to `/contact/` instead of `/#contact`. `grep -rl calendly dist/` = 0 files.
- **Backend**: new `aloha-forms` pm2 service on the VPS (`/root/aloha-forms`, 0.0.0.0:5212),
  cloned from the crossover-forms pattern. Sends the quote notification to
  alohawindowbros@gmail.com + adam@blrbdigital.com and a confirmation to the submitter, both via
  Resend from `Aloha Window Bros <adam@blrbdigital.com>` (blrbdigital.com is the verified domain).
  Routed via a `location = /api/contact` block in the NPM proxy host (34.conf), same layer as the
  outrank webhook. Rate limit 5/10min/ip; submissions logged to submissions.jsonl. Verified live
  end to end before the site change shipped.
- **Base.astro conversion tracking updated**: `quote_click` now fires on links to `/contact/`
  (the calendly.com matcher was dead weight after the sweep), new `text_click` event on sms: links.
- **Privacy policy**: Calendly removed from the processor list (Resend added) and third-party links.

## 2026-08-14 - The South Coast publishes its water hardness after all, and it is the hardest we work in

- **Expanded the Santa Barbara County section on the homepage with hardness figures pulled from
  three water districts' own reports.** The site has said for months that no Santa Barbara hardness
  number can be honestly quoted. That is true of the **City of Santa Barbara**, whose supply mix is
  rebuilt every water year, and the WY 2025 portfolio table on this page is the evidence for it. It
  is **not** true of the three districts that ring the city, all of which publish a figure:

  | Agency | Published hardness |
  |---|---|
  | Montecito Water District | surface 19 to 26 gpg, groundwater 19 to 38 gpg |
  | Goleta Water District | averages 20 gpg |
  | Carpinteria Valley Water District | 17 to 22 gpg |

  Against the Conejo Valley baseline of 8.2 gpg, Montecito groundwater is up to **4.6 times** the
  mineral load on identical glass, and all three beat Ojai (~17 gpg), which had been the hardest
  water on our map. Sources are each utility's own Consumer Confidence Report or water quality FAQ,
  all verified 200 today.
- **Used the districts' numbers, not the search results'.** A search for Montecito water hardness
  returns 20.4 gpg from a water softener retailer. That is the same trap as the 12.8 gpg Thousand
  Oaks claim this site refuted in July, and it was not used. The gpg statements published here are
  the districts' own softener-setting guidance, and they reconcile with the districts' own mg/L
  tables (648 mg/L / 17.1 = 37.9, matching "19 to 38").
- **Second table added to the section**, a cross-agency hardness comparison spanning the whole
  service area with a multiple-of-baseline column. That is a sixth distinct kind of table on the
  site, keeping the rule that no two briefs carry the same table shape.
- **Rewrote the section's second block and added two more.** The old H3 read "Nobody can quote you a
  Santa Barbara water hardness number, including us", which overreached now that three districts
  demonstrably do. It now separates the city (no figure, and why) from the districts (figures, and
  what four times the mineral load does to glass over about a year).
- **Homepage FAQ item 11 added**, "Is the water hard in Montecito, Goleta, and Carpinteria?", carrying
  all three districts' figures. It feeds the `faqs` array, so the rendered list and the `FAQPage`
  JSON-LD cannot drift. Parity re-verified 11 == 11 using `grep -o | wc -l`.
- **Deliberately not a third locale section.** This deepens the section treated on 2026-07-31, which
  is the site's only in-repo action with a measured position win. Adding a third section would have
  contaminated the read on the 08-07 Oxnard Plain section, which is seven days old.
- **Verified then rejected the Coal Oil Point seep angle.** The seep field off Goleta leaks roughly
  100 to 160 barrels of oil a day (UCSB, Boles) and is genuinely unique to this coastline, but its
  tar reaches beaches, not windows. Writing window-cleaning copy around it would have invented a
  deposition mechanism, the same defect class as the fabricated hardness sweep and the section 3282
  claims. Documented in the site map so it is not rediscovered and used.
- **Logged, not fixed: Camarillo contradicts itself on Camrosa hardness across four pages** (10 to 15
  gpg on two, 12 to 18 on two others). Camrosa's water quality page 404s, so the real figure could
  not be obtained and nothing was guessed.

## 2026-08-12 - The auto-publisher was linking to a competitor and quoting other people's prices

- **Audited all 12 Outrank auto-published posts** (2026-08-01 to 2026-08-12, one per day, no human
  review at any point). This is the first audit of that stream since the webhook went live on
  2026-07-31, and it found four defect classes. All are now fixed in-repo.
- **Removed two dofollow links to sonlightwindow.com, a direct competitor window cleaning company
  in Ventura**, from `window-cleaning-ventura-ca.md`. Worse than the links themselves: that post
  had outsourced two of its substantive claims to the competitor, citing them for the local service
  interval and for post-construction pre-wetting technique. The interval advice is now grounded in
  the NOAA NCEI 1991 to 2020 normals this site already uses (0.17 inches of rain June through
  September, 87 percent of the annual 12.93 inches falling November through March, station
  USW00093110 Oxnard), which is a stronger argument for the same late-October and March schedule.
  The pre-wetting passage is now stated as our own practice.
- **Replaced aggregator pricing that contradicted our own published bands.** The same post quoted
  Manta at $108 to $437, HomeBlue at $9 to $11 per window, and an example job of **5 windows for
  $50 to $60**, on a page whose job is to win `window cleaning ventura`. Aloha Window Bros publishes
  $175 to $425 for the city of Ventura. The post now carries our own per-city bands, matching the
  pricing pillar exactly, and its cost table was rebuilt around them. Its lede had also quoted the
  Thousand Oaks band ($150 to $400) as if it were the Ventura number.
- **Corrected two fabricated regulatory claims.** Two posts attributed a "fall of more than 4 feet"
  trigger and engineered load figures (1,000 lb service load, 5,000 lb anchorage, 5,000 lb tie-back)
  to California Title 8 section 3282. The section was fetched and read in full today: it contains
  neither. Both passages now state what 3282 actually requires, which is approved anchors where a
  worker stands on a sill or could fall through an opening wider than 18 inches, a sill width and
  slope chart, and written assurance from the building owner on anchor and load-capacity compliance.
  Same defect class as the 2026-07-17 fabricated-hardness sweep.
- **Removed irrelevant and contradictory sources.** A Statistics Canada NAICS 561721 revenue and
  profitability stat was being used to characterise the California market; a 1943 Canadian
  industrial soap survey was cited for a claim about ancient Babylon; and three posts stated three
  different US market sizes. The site now states one figure, IBISWorld's $2.9 billion in 2024 across
  35,344 businesses, verified against IBISWorld directly (200 today). GetJobber, which was the link
  carrying those numbers, 403s to non-browser agents, so the citations were re-pointed at the source.
- **Removed a contractor-directory link that sent readers to find other contractors** (two instances
  of homeprobadge.com "find local contractors"), a screen-replacement competitor (rescreenrescue.com),
  and two content-farm citations (cozyhomeclub.org, ohsospotless.com). Where a claim depended on one
  of them it was either replaced with first-party detail or re-pointed at one of our own guides.
- **Added the internal links the content rules require.** `window-cleaning-ventura-ca.md` is a
  city-specific article that linked no city landing page at all. It now links `/ventura/` inside the
  first 300 words and again in the closing CTA, plus the pricing pillar.
- **Documented the audit in `.claude-site-map.md`** with the exact command that lists auto-published
  files, what section 3282 actually says, and the systemic fix (an outbound-link blocklist and a
  price-figure review flag in the publisher service on the VPS, which needs Adam's sign-off).
## 2026-08-10 - The homepage contradicted itself on price, and two "opportunities" turned out to be foreign

- **Fixed a self-contradiction on the site's most valuable page.** The homepage FAQ answered
  "How much does window cleaning cost?" with "Most residential jobs range from $150 to $400", which
  is the **Thousand Oaks** band, while the same page's two locale sections stated "$200 to $475"
  (Santa Barbara) and "$175 to $475" (Oxnard Plain) a few hundred lines below, and the pricing
  pillar published bands up to $475 for Ojai and Santa Barbara. Because the `faqs` array feeds the
  `FAQPage` JSON-LD, **the wrong number was the one AI engines quote verbatim**. The answer now
  states the true countywide span, $150 to $475, and breaks it into the four real bands
  (Thousand Oaks $150 to $400, most of the county $175 to $425, Oxnard $175 to $450, Ojai and Santa
  Barbara $200 to $475). Every figure matches the pricing pillar table exactly. The question was
  also retitled to "How much does window cleaning cost in Ventura County?" to match how the queries
  are actually phrased.
- **Added a second homepage link to the pricing pillar**, directly beneath the FAQ list, which is
  the highest price-intent element on the page. The homepage previously linked the pillar once, from
  a county-section guide card.
- **Why price and not another locale section:** a 90-day cluster dump puts price intent at
  **~470 non-brand impressions for zero clicks**, and it is the one population where our own pages
  sit level with or above the Google Business Profile (`window cleaning cost thousand oaks`:
  `/thousand-oaks/` at 6.4, GBP at 10.5). It is also the only non-brand pull the blog has ever had.
- **Corrected a verification command in `.claude-site-map.md` that could never fail.** The file told
  future runs to check FAQ schema parity with `grep -c '"@type":"Question"' dist/index.html` against
  `grep -c '<summary'`. `grep -c` counts matching **lines**, and Astro minifies `dist/index.html`
  onto one line, so both sides return `1` and the check passes `1 == 1` regardless of actual drift.
  Now uses `grep -o | wc -l`, which counts occurrences. Verified 10 == 10.
- **New script `scripts/gsc-country-probe.py`** (query x country), plus two findings it produced:
  - **`exterior cleaning newbury park` and `cladding cleaning newbury park` are 100% UK traffic**
    (37 and 15 impressions over 90 days, every impression `gbr`, zero `usa`). These are British
    searchers looking for **Newbury, Berkshire**. The 2026-08-10 brief listed the first as its #3
    rising query. No page was written for it, and none should be.
  - **`affordable window cleaners thousand palms` (25 impr) is Thousand Palms, Riverside County**, a
    fuzzy place-name match ~150 miles outside the service area. The brief lists it as a
    striking-distance query "improving". It is not an opportunity.
- No new blog content. The blog took 17 non-brand impressions and zero non-brand clicks this window,
  and nothing cleared the information-gain bar.

## 2026-08-07 - The Oxnard Plain gets the treatment that worked on Santa Barbara

- **New homepage section: "Window Cleaning Camarillo, Oxnard, and Ventura, Where Farm Dust Never
  Gets Rinsed Off"**, sitting between the Santa Barbara section and Service Areas. It exists because
  the GSC `query x page` join (07-08..08-04) says the **homepage** is the page that ranks for
  `window cleaning ventura` (24 impr @ 12.8), `window cleaning camarillo` (23 @ 12.2),
  `window cleaning ojai` (17 @ 12.6) and `window washing ventura` (7 @ 10.7), while the dedicated
  city pages remain uncrawled and contribute zero. Same situation Santa Barbara was in before
  2026-07-31, and that section moved its head query from position 11.2 to 8.8.
- **Why this cluster and not the Thousand Oaks / Westlake block.** Sorting non-brand city queries by
  whether the Google Business Profile appears splits them cleanly. On Thousand Oaks, Westlake
  Village, Agoura Hills and Newbury Park the GBP holds **position 1.0 to 1.8** and our organic pages
  sit at 3.1 to 9.3 with **2 clicks on 525 impressions**: the click is going to Call or Directions in
  the map pack, which GSC never records as a website click. On Santa Barbara, Camarillo, Ventura and
  Ojai the GBP barely appears at all, so organic position is the entire game. Only the second half is
  winnable from this repo, so that is where the work went.
- **Its argument is agricultural soil, which is a genuinely different mechanism** from the salt and
  Sundowner winds of the Santa Barbara section and the sprinkler-overspray frequency of the Conejo
  Valley cards above it. Ventura County farms 139,944 acres of cropland with 96,124 acres irrigated,
  and takes 0.17 inches of rain between June and September, so field dust that lands on glass in the
  growing season is not rinsed off by anything. The supporting point is farm *size*: 748 of the
  county's 1,812 farms are 1 to 9 acres and 600 more are 10 to 49, so the fields end where the
  cul de sacs begin rather than sitting out in a distant valley.
- **Every number is from a primary source that was fetched and returned 200 today.** USDA National
  Agricultural Statistics Service, 2022 Census of Agriculture Ventura County profile, and NOAA NCEI
  1991-2020 climate normals for station USW00093110 Oxnard (re-pulled live from the NCEI API; the
  Jun-Sep figure matches the gutter service page's). **The Ventura County Agricultural
  Commissioner's own crop report could not be used: `ventura.org` and `news.venturacounty.gov` both
  reject non-browser agents**, same rule that keeps CAL FIRE, BBB and the AMS SWEX paper off the
  site. No number was invented, and the Ojai contrast (17 gpg vs 8.2 gpg) reuses figures already
  verified in the site map rather than introducing a new one.
- **Its table is land in farms by use, in acres.** That keeps the "every brief needs a different KIND
  of table" rule intact: hardness and TDS per source on `/thousand-oaks/`, service intervals by zone
  on `/santa-barbara/`, supply volume and share in the homepage Santa Barbara section, rainfall
  against oak phenology by month on the gutter page, and land use by acres here.
- **`.sb-*` styles renamed to `.locale-*` and now shared by both context sections**, with a
  `.locale-section--alt` modifier for the alternating background. This avoided duplicating about 130
  lines of CSS under a second prefix, and the class names no longer claim to be Santa Barbara
  specific. `btn-sb` on the hero is unrelated and was left alone.
- **Two FAQ items added** ("Do you clean windows in Oxnard, Camarillo, Ventura, and Ojai?" and "How
  often should windows be cleaned near farm fields?"). They go in the `faqs` array, so the rendered
  list and the `FAQPage` JSON-LD cannot drift: verified 10 questions in schema against 10 rendered
  `<summary>` elements in `dist/`.
- **Verified before commit**: build passes, `dist/index.html` carries **zero** em or en dashes, all
  10 city landing pages are still linked from the homepage with no link dropped (Oxnard, Camarillo,
  Ventura and Ojai went from 2 inbound homepage links each to 4), both source URLs return 200, and
  the section renders clean at 390px and 320px with no horizontal page overflow.
- **No blog post was written.** The blog earned 17 non-brand impressions and zero non-brand clicks in
  this window, consistent with every prior measurement.

## 2026-08-05 - One business entity, and the review count is now the real one

- **The site was publishing a review figure that was wrong on both axes.** Every page carrying a
  `LocalBusiness` node asserted `aggregateRating 5.0 / 50 reviews`. The live Google Business
  Profile (CID 4483745950804238350, read off the listing today) says **4.9 stars from 185 reviews**
  (5 star 175, 4 star 6, 3 star 2, 2 star 1). So the site was inventing a perfect 5.0 that
  contradicts the public listing while understating the review count by 135. Same class of defect
  as the fabricated water-hardness numbers swept on 07-17, and fixed the same way: read the primary
  source, publish that, never estimate.
- **Corrected everywhere, in schema and in visible copy, because Google expects the two to agree:**
  the homepage hero proof pill (was "Reviews (50+)"), the homepage "5.0 Rating" badge, the homepage
  stats bar (was "50+ 5-Star Reviews"), and the trust line on all 10 city landing pages
  (was "5.0 Rating"). The hero pill now also links to the Google Business Profile itself instead of
  a Google search for the brand.
- **Fifteen LocalBusiness nodes collapsed into one entity.** The homepage used
  `@id: /#business`, each city page minted its own `/<city>/#business`, and the four service pages
  emitted an anonymous `provider` node with no `@id` at all. To an entity resolver that is fifteen
  different businesses sharing a phone number. All fifteen now emit the identical node under
  `https://alohawindowbros.com/#business`.
- **City pages express the city with a `Service` node, not a second business.** Each city page now
  carries `Service` (name "Window Cleaning in <City>, CA", `provider` referencing the shared `@id`,
  `areaServed` a `City` with the page's GeoCoordinates). Nothing was lost: the per-city coordinates
  moved from the duplicate business node onto the thing they actually describe. Service pages point
  their `provider` at the same `@id`.
- **Added `sameAs`, and `openingHoursSpecification`.** `sameAs` carries the two profile URLs that
  were actually fetched and confirmed to hold this business's NAP: the Google Business Profile and
  ProvenExpert. This is the property that tells Google and the AI engines that the listing
  outranking us on most local queries and this website are one entity. bbb.org was left out: it
  403s to non-browser agents (same rule that dropped CAL FIRE and the AMS SWEX paper) and its
  profile is unclaimed under the predecessor brand. Hours mirror the GBP's owner-published
  "Open 24 hours", confirmed on the live listing today.
- **All of it now lives in one place.** `src/lib/seo.ts` exports `businessNode()`, `BUSINESS_ID`,
  `GBP`, `AREA_SERVED` and `SAME_AS`; the three templates import them. The facts cannot drift
  between templates any more, which is the same discipline already applied to the homepage FAQ
  array and the service-page FAQ schema. The service pages also picked up the full 17-entry
  `areaServed` list (they had 6) and the missing `priceRange`.
- Verified: build passes, 64 pages, all 64 pages' JSON-LD parses, 15 LocalBusiness nodes with one
  `@id` and one rating, mobile 390px capture of the homepage and a city page shows no overflow from
  the longer review string.

## 2026-08-03 - Added the gutter cleaning service page, the service the site never mentioned

- **The finding.** A GSC `query x page` join over 90 days surfaced **277 non-brand impressions
  across 27 gutter cleaning queries, and every single one landed on the `http://` Google Business
  Profile listing rather than the website.** `grep -rni gutter src/` returned **zero** hits: the
  site had no gutter content anywhere. For scale, the entire 42-post blog took 135 non-brand
  impressions over the same 90 days, so this one missing service was carrying twice the blog's
  whole non-brand demand.
- **Verified the business actually offers it before writing a word.** "Gutter cleaning service" is a
  GBP secondary category, and the service is live on Houzz (verified profile), Thumbtack,
  ProMatcher, Yelp ("Gutter Services") and BBB. Sources: `citation-engine/clients/aloha.json` and
  `seo-citation-packs/aloha.md`.
- **New `/services/gutter-cleaning/`** (1,431 rendered words), built to the GEO checklist: direct
  answer in the first 150 words, Key Takeaways box, a data table, six FAQs with FAQPage schema,
  three cited primary sources, and links to all 10 city landing pages.
- **Its argument is local and sourced, not filler.** Standard national advice is to clean gutters in
  the fall. That is wrong in Ventura County, and two primary sources show why: NOAA's 1991-2020
  normals for Oxnard Ventura County Airport put **87% of annual rain in November through March with
  February the wettest month at 3.26 inches**, while the US Forest Service records that coast live
  oak, an evergreen, **"sheds its old leaves from February to April"**. Peak leaf drop lands inside
  the two wettest months, which is why the page recommends a November and an April visit instead of
  one autumn cleaning. Every source URL was curl-checked for a 200 first; CAL FIRE was dropped for
  403-ing to non-browser agents and NFPA used instead.
- **No gutter price published**, deliberately. We have no gutter pricing from the business, so the
  page explains the five variables that move a quote rather than inventing a band. Same posture as
  the Santa Barbara hardness refusal.
- **FAQPage JSON-LD added to `services/[slug].astro`**, which fixes all four service pages at once
  (they were rendering FAQ `<details>` with no schema, the same gap closed on the homepage on
  07-31). The schema is derived by regex from the markdown body, so it cannot drift from the
  visible list.
- **Em dash sweep gap closed.** The 2026-07-24 sweep used the glob `src/pages/*.astro`, which does
  not match nested templates. `services/[slug].astro` and `blog/[slug].astro` still had dashes, and
  one was in the **`<title>` of every service page**. Swept those plus `CookieBanner.astro` and all
  three existing service markdown bodies. All rendered output outside `/blog` is dash-clean again,
  verified against `dist/`.
- **Internal links so the URL actually gets crawled.** Added to the sitewide footer, the homepage
  services grid, the homepage county-section service strip, and the blog sidebar: **62 inbound HTML
  files**. This matters because six city pages added in May with no inbound links have never been
  crawled at all.
- Build passes, 62 pages (was 61), new URL in the sitemap, all three JSON-LD graphs valid.

## 2026-07-31 - Wired an Outrank webhook so articles can publish to the blog automatically

- **What this is.** Adam is putting alohawindowbros.com on Outrank (backlink exchange / AI article
  platform). Outrank's custom integration needs three things: an integration name, an HTTPS endpoint,
  and an access token. This site is a static Astro build with no CMS and no API surface, so there was
  nothing to hand them. Built one.
- **New service `aloha-publish`** on the VPS (`/root/services/aloha-publish/server.mjs`, zero deps,
  Node 22, systemd). Accepts Outrank's `publish_articles` and `update_article` events, converts each
  article to a `src/content/blog/*.md` file matching the existing content-collection schema, commits
  to `main` and pushes. The self-hosted runner deploys as usual. Endpoint is
  `https://alohawindowbros.com/api/outrank/webhook`, bearer-authenticated.
- **Ack fast, publish after.** The webhook returns Outrank's expected
  `200 {"message":"Webhook processed successfully"}` as soon as the payload is validated and spooled
  to disk; the git work happens on a 20s debounce afterwards. That keeps Outrank from timing out, and
  batches a burst of articles into **one** commit and one deploy rather than N racing deploys
  (the one-push-one-deploy rule). The spool survives a restart, so a crash mid-publish does not drop
  an article.
- **Content is sanitised on the way in**, because auto-publish means no human reads it first: em and
  en dashes swept (site hard rule - ranges to "to", title break to a colon, prose break to a comma,
  with a `worth a human read` warning logged and a count); `<script>`/`<style>`/`<iframe>`/`<form>`
  and inline `on*=` handlers stripped; leading H1 removed so the page keeps exactly one H1
  (`[slug].astro` renders the title itself); `image_url` downloaded into `public/img/blog/` and
  referenced locally instead of hotlinking Outrank's CDN.
- **Isolation.** The service pushes from its own clone at `/root/services/aloha-publish/repo`, using
  a dedicated write-scoped GitHub **deploy key** (`aloha_publish`, host alias `github-aloha`) rather
  than Adam's personal token - revocable on its own without touching anything else. It never touches
  `/root/sites/aloha2` (the deploy target).
- **Not exposed.** The VPS has no host firewall (ufw inactive, INPUT ACCEPT), so binding `0.0.0.0`
  would have put :8790 on the public internet. Binds `127.0.0.1` + `172.18.0.1` (the Docker bridge
  gateway, which is how the NPM container reaches the host) only. Verified refused from the public IP.
- **Routing.** Added a `location = /api/outrank/webhook` block to NPM proxy host 34, written both
  into the live conf *and* into NPM's `advanced_config` DB column so a future regeneration reproduces
  it instead of silently dropping the route. `nginx -t` gated the reload, with conf + DB backups taken
  first.
- **Verified end to end on a throwaway `outrank-test` branch** (the deploy workflow only fires on
  `main`/`master`, so nothing reached the live site): webhook 200, markdown generated with correct
  frontmatter and YAML-escaped apostrophes, hero image downloaded, dashes swept to zero, script and
  `onclick` payloads stripped, commit pushed. Then built the result with `npm run build`: page
  renders, exactly **1 H1**, no injected script in the output, present in the sitemap. Branch deleted,
  `main` untouched at `a148bcc`, 42 posts unchanged.
- **Kill switch.** `PUBLISH_MODE=hold` in `/root/services/aloha-publish/aloha-publish.env` plus a
  restart queues articles instead of pushing. Shipping on `live` per Adam. Slack `#aloha-seo` gets a
  message on every publish.
- **Left deliberately un-enforced:** no cap on outbound links and no check on what Outrank links to.
  Worth an audit habit given this domain's disavow history.

## 2026-07-31 - Gave the homepage real Santa Barbara content, and the FAQ schema it never had

- **Primary action (homepage): added a sourced Santa Barbara County section** between the Ventura
  County section and Service Areas, with scoped `.sb-*` styles in `index.astro`.
  - **Why the homepage and not `/santa-barbara/`.** A GSC `query x page` join for 07-01..07-28 puts
    every row of the Santa Barbara block on `/`: *window cleaning santa barbara* 180 impr @ 9.1
    (up from 12.0), *window washing santa barbara* 35 @ 8.3, *santa barbara window cleaning* 31 @
    11.1, *santa barbara window cleaners* 17 @ 11.8, *window cleaning montecito* 18 @ 16.7. That is
    **281 non-brand impressions, the largest single block on the domain**, and `/santa-barbara/`
    holds **zero** of them because URL Inspection still reports `lastCrawlTime = NEVER`. The page
    that ranks had no Santa Barbara body copy at all: an H2 reading "Window Cleaning Ventura County",
    three Ventura-framed condition cards, and one city chip.
  - H2 carries the exact query phrase. Direct-answer lede in the first 150 words naming the real
    mechanism, which is that Santa Barbara glass is loaded from two opposite directions on the same
    day: onshore marine salt through the afternoon, then dry ridgeline dust when Sundowners fall off
    the Santa Ynez Mountains after dark.
  - **New sourced data, none of it previously anywhere on the site: the City of Santa Barbara water
    supply portfolio for water year 2025**, as a table. Gibraltar and Devil's Canyon 38% / 4,517 AF,
    Lake Cachuma 26% / 3,117 AF, Charles E. Meyer Desalination Plant 17% / 1,947 AF, Mission Tunnel
    10% / 1,177 AF, recycled 9% / 1,020 AF, State Water Project 0%, groundwater 0%. Total production
    11,777 AF.
  - **The point of that table is a refusal, not a number.** Santa Barbara runs on as many as eight
    supplies and rebuilds the mix every water year, so the honest answer to "what is Santa Barbara's
    water hardness" is that nobody can give you a stable one. That keeps faith with the 07-17 and
    07-24 false-hardness sweeps, which had to strip fabricated gpg figures off 11 pages.
  - 3 external sources, all verified 200 before commit: the City's 2024-2025 Water Supply Management
    Report, the City's Water Sources page, and NCAR's Sundowner Winds Experiment. The AMS SWEX pilot
    paper was dropped for 403-ing to non-browser agents.
  - 4 new internal links, 2 of them to `/santa-barbara/`. **All 13 existing county-section links are
    untouched**, verified against `dist/index.html`.
- **Technical (homepage): added `FAQPage` JSON-LD.** The site's most valuable page rendered 6 FAQ
  items with no FAQ schema at all, while all 10 city pages had it. `jsonLd` is now an `@graph`
  (LocalBusiness + FAQPage), the same shape `CityLanding.astro` uses. FAQ copy moved into a single
  `faqs` array consumed by both the schema and the rendered markup, so the two cannot drift.
- **Content: 2 new homepage FAQ items** (do we serve Santa Barbara and Montecito, how often should
  Santa Barbara windows be cleaned), 6 to 8 total. Both intervals match `/santa-barbara/` and both
  price figures match the pricing pillar's $200 to $475 Santa Barbara band.
- `areaServed` on the homepage LocalBusiness expanded with Hope Ranch, Goleta, Carpinteria, and
  Summerland, which the Santa Barbara page already claims; `priceRange` corrected to $150-$475 to
  match the pricing pillar rather than the stale $150-$400.
- Verified before commit: build passes, 58 pages; zero em or en dashes in `dist/index.html`; both
  JSON-LD blocks parse and the FAQPage carries 8 questions; iPhone-width render has no horizontal
  page scroll and no console errors; the water table's Share column is reachable without scrolling
  at 390px (columns were reordered after the first render showed it cut off).
- **Not done, deliberately**: no `title_meta` (every CTR-outlier target is a page treated within the
  last 8 to 16 days, and re-treating destroys a pending read), no blog work (42 posts earned 19
  non-brand impressions and 0 clicks this window), no new post, and no touch to the six uncrawled
  city pages or the two live `localBrief` experiments.

## 2026-07-29 - Differentiated /thousand-oaks/, the one city page that actually converts non-brand clicks

- **Primary action: gave `/thousand-oaks/` a sourced, city-exclusive `localBrief`.** This is the
  first **already-indexed** page to get one, so it tests a different question than the 07-27 Santa
  Barbara brief does. Santa Barbara asks "does differentiation get an uncrawled page crawled";
  Thousand Oaks asks "does it move an indexed page that already ranks". Agoura Hills, Westlake
  Village, and Newbury Park stay untreated as the indexed control group.
  - Direct-answer lede on the one thing structurally true of Thousand Oaks and nowhere else we
    serve: the city is built **around** its wildland, not beside it. The Conejo Open Space
    Conservation Agency counts **15,334 acres** of protected open space inside the city limits and
    planning area and manages more than 12,700 of them, so the dust source is a few hundred feet
    away rather than out at the edge of town.
  - Key Takeaways box, four sourced sections (open space as the dust source, what the water report
    actually says, inland vs coastal drying behaviour, what we do differently), and a table.
  - **The table is a water-supply table, not a service-interval table.** Deliberately a different
    table *kind* from the Santa Barbara brief so the two pages do not read as one filled-in
    template.
- **Corrected the water claim on this page using the utility's own report.** The page said
  "imported water through Calleguas Municipal, averaging about 8.5 grains per gallon", which named
  the wholesaler rather than the retailer and gave one blended number. California American Water's
  2025 Consumer Confidence Report for **PWS ID CA5610040** (which covers Thousand Oaks and Newbury
  Park) reports hardness per source: **140 mg/L / 8.2 gpg** from the MWD Jensen plant at **94%** of
  supply, **164 mg/L / 9.5 gpg** from Calleguas Lake Bard at 5%, **146 mg/L / 8.5 gpg** from
  Calleguas Las Posas at 1%. TDS 297 / 437 / 325 ppm respectively.
  - This also **refutes on-page** the "12.8 grains per gallon, very hard" figure that water-softener
    retailers publish and that a web search returns first. Given this site's history of copy-pasted
    fabricated hardness numbers (swept 07-17 and 07-24), saying so explicitly is the point.
- **Two accuracy fixes on the same page**: removed the unsourced "280+ sunny days per year" claim
  (the identical unsourced figure also sat on `/santa-barbara/`; replaced here with the sourced
  inland-elevation mechanism), and replaced **"Hidden Hills"** in the neighborhood chips, which is a
  separate city in Los Angeles County, with **"Old Town Thousand Oaks"**.
- **Two new FAQ entries** (FAQPage JSON-LD 6 to 8 questions): "How hard is the water in Thousand
  Oaks?" and "Why do my Thousand Oaks windows get dusty again so quickly?"
- **CSS**: `.city-brief-table tbody th` gained `min-width: 10.5rem`. Without it the row-label column
  collapsed to one word per line on the new 5-column table inside the mobile scroll container.
  Verified at 390px on both `/thousand-oaks/` and `/santa-barbara/` (no regression on the latter).
- **Measurement.** `/thousand-oaks/` went from ~1,040 to **2,681 rendered words**. Jaccard vocabulary
  similarity against its siblings is now **39.0-41.9%**, against **54.1-58.2%** for the untreated
  indexed pages (Agoura/Westlake/Newbury) and 49.3% for the Oxnard/Ojai pair. **55%** of the page's
  vocabulary is now unique to it, versus 27-34% for untreated pages.
  - Note for future runs: the 07-27 entry quoted 76.2% and 65.4% using `intersection / min(set)`.
    That formula is unusable across pages of different lengths, since a longer document trivially
    contains more of a shorter one's vocabulary. **Jaccard (`intersection / union`) is the metric
    from here on.**
- **Verified, not assumed**: `/santa-barbara/` and `/simi-valley/` now read "URL is unknown to
  Google" where they previously read "Discovered, currently not indexed". Both still have
  `lastCrawlTime = NEVER`. That state rotates on its own and is **not** a regression from the 07-27
  change; the Santa Barbara experiment is still pending its 2026-09-07 review.

## 2026-07-27 - Differentiated /santa-barbara/; measured that the 42-post blog earns zero non-brand clicks

- **New measurement that should govern future content decisions.** Pulled a GSC `page x query` join
  and split brand from non-brand (`/aloha|window bros|mahalo/i`). The weekly brief's "Top pages"
  table does not make this split, and it hides the real picture:
  - Over **90 days**, all 42 blog posts together earned **135 non-brand impressions and 0 clicks**.
    The blog rows that look strong in the brief are brand impressions surfacing as secondary results
    for *aloha window bros* (`hard-water-stains-westlake-village` is 46 brand / 2 non-brand,
    `screen-cleaning-simi-valley` 45 / 1).
  - Non-brand demand lands on two URLs: `/` (817 impr / 1 click) and the Google Business Profile
    listing (647 / 2). Everything else is rounding error.
  - The four indexed city pages are also mostly brand: each takes 155-185 impressions at position
    1.7-1.9 for *aloha window bros* alone, which is what inflates their totals in the brief.
  - Recorded in `.claude-site-map.md` under "WHERE NON-BRAND DEMAND ACTUALLY LANDS" so future runs
    stop reading blog impressions as real demand.
- **Primary action: gave `/santa-barbara/` genuinely unique content.** Confirmed via URL Inspection
  that all six city pages are still uncrawled (`lastCrawlTime = NEVER`), unchanged since 07-24, so
  the near-duplicate template is the only in-repo lever left. Added an optional `localBrief` prop to
  `CityLanding.astro` and filled it for Santa Barbara only:
  - Direct-answer lede on the one thing that is structurally true of Santa Barbara and no other city
    we serve: the Santa Ynez Mountains run east to west, so the coastline faces **south**, and
    ocean-view glass therefore takes salt aerosol and peak sun at the same time.
  - Key Takeaways box, four sourced sections (Sundowner winds, salt plus direct sun, the multi-source
    water blend, what we do differently), and a first-party table of recommended service intervals
    across five Santa Barbara zones.
  - Two new FAQ entries (Sundowner winds, and why no honest hardness figure exists for Santa
    Barbara), taking the FAQPage JSON-LD from 6 to 8 questions.
  - Result: `/santa-barbara/` grew from ~1074 to 2390 rendered words, and vocabulary overlap with a
    sibling city page fell from 76.2% (the untreated Oxnard/Ojai pair) to 65.4%.
  - **The other nine city pages are untouched on purpose** and serve as the control group.
- **Held the line on the hardness rule.** Santa Barbara has no verified hardness figure, so the page
  now says so explicitly rather than inventing one, and explains the blend (Lake Cachuma, Gibraltar,
  State Water Project, groundwater, recycled, and the Charles E. Meyer Desalination Plant) plus the
  separate Montecito, Goleta, and Carpinteria districts. Every cited source URL verified 200; a USGS
  link was dropped for returning 403.
- **Escalated the Google Business Profile URL again, now quantified.** The GBP website field points
  at `http://alohawindowbros.com/`, which 301-redirects. That listing ranks **position 1.0 to 1.8**
  for *best window washer* in six cities and carries 30 clicks / 982 impressions, about a quarter of
  all site clicks. Adam's to fix; it cannot be done from this repo.
- **Observed but deliberately not actioned**: every page answers 200 at both `/path` and `/path/`,
  and Google has indexed both variants of two blog URLs. Canonicals are already correct and the
  split is ~30 impressions; the fix lives in nginx config that the Actions deploy does not apply.
  Documented in the site map instead of shipping inert config.
- Verified: build passes, no horizontal overflow at 390/768/1440, no console errors, JSON-LD parses.

## 2026-07-24 - Found the real bottleneck: 6 of 10 city landing pages are not in Google's index

- **The finding that reframes the last three runs.** Queried the GSC API for query-to-page
  attribution instead of assuming it, then confirmed with the URL Inspection API. Result:
  `/santa-barbara/`, `/ventura/`, `/ojai/`, `/oxnard/`, `/simi-valley/` are all **"Discovered,
  currently not indexed" with no crawl on record**, and `/camarillo/` is **"URL is unknown to
  Google"**. Only the 4 legacy WordPress URLs (`/thousand-oaks/`, `/agoura/`, `/westlake/`,
  `/newbury/`) are indexed.
  - **The homepage is what actually ranks for the city queries.** *window cleaning santa barbara*
    154 impr @ pos 9.5, *window cleaning camarillo* 47 @ 11.0, *window cleaning ventura* 43 @ 14.3,
    *window washing santa barbara* 45 @ 8.7 - every one attributed to `/`, with **zero** impressions
    on the matching city page. `/` holds 2197 impressions and 63 of the site's 67 clicks.
  - **So the 07-15 and 07-20 title rewrites were applied to pages Google has never fetched.** Six of
    those ten pages cannot convert a click at any CTR. Their flat CTR is not a failed title test.
  - Ruled out as causes: HTTP 200 on all six, present in sitemap, robots.txt open, correct
    self-referencing canonicals, no noindex. This is Google's crawl-priority judgement.
  - **Internal links are definitively not the constraint.** `/santa-barbara/` already gets 2 links
    from the homepage and 2-3 contextual links from each of four *indexed, ranking* blog posts.
    Google crawls those linkers constantly and still won't fetch the target.
- **Primary action (homepage).** Rewrote the `<title>` and meta description on `/`, the page that is
  actually in the SERP for the entire CTR-outlier list. Old title led with the brand
  (`Aloha Window Bros - Window Cleaning Ventura County & Santa Barbara`) and the description carried
  an em dash. New: `Window Cleaning Santa Barbara & Ventura County | Free Quote` (59 chars) and a
  150-char description leading with the query, naming the four-in-one clean, and carrying the phone
  number. Also expanded `LocalBusiness` `areaServed` from 4 cities to all 10 plus Montecito.
  - **Risk noted in the site map**: ~61 of 67 clicks are brand queries. Dropping the brand from the
    title is mitigated by the new `WebSite` JSON-LD site name, but if brand clicks fall next window,
    revert the title first.
- **Technical: sitemap `lastmod`.** The sitemap shipped **zero** `<lastmod>` values on all 58 URLs,
  giving Google no crawl-scheduling signal for pages it had already decided not to fetch.
  `astro.config.mjs` now stamps each URL from a real source: the file's last git commit, falling back
  to markdown frontmatter `date`. 58/58 URLs covered across 18 distinct dates. Deliberately **not**
  build time, which would flag every URL as fresh on every deploy and get the field ignored.
- **Technical: `WebSite` JSON-LD** added to `Base.astro` to feed Google's SERP site-name feature.
- **Correctness: second hardness sweep.** The 07-17 sweep missed three pages still asserting
  unsourced figures - `/santa-barbara/` ("16-22 gpg"), `/ventura/` ("12-16 gpg") and `/oxnard/`
  ("12-16 gpg"), the last flatly contradicting 07-17's own note that Oxnard has no verified number.
  All three now describe the blend honestly and keep the overspray mechanism, inventing nothing.
- **House rule: em/en dashes in page bodies.** Earlier runs only cleaned the meta tags, leaving
  dashes in the rendered body copy of every page. Swept **all of `src/pages/*.astro`** (all 10 city
  pages, `index`, `privacy`) plus `CityLanding.astro`, `Base.astro` and `CookieBanner.astro`. Every
  rendered page outside `/blog` is now dash-clean, verified against `dist/`. Fixing the shared
  `CityLanding` component removed 6 dashes from all 10 city pages at once. Comma splices created by
  the substitution were fixed individually rather than blind-replaced.
  - **Not done: ~700 dashes across 30 files in `src/content/blog/`.** That needs sentence-by-sentence
    judgement rather than search-and-replace, so it is logged in the site map as a scoped follow-up
    instead of being rushed through 30 articles in this run.
- **GBP (no code change).** `http://alohawindowbros.com/` is tracked by GSC as a separate URL with
  1246 impressions and 36 clicks, ranking pos 1.0 for *best window washer thousand oaks / agoura
  hills / camarillo / simi valley / ventura* and pos 2.5 on brand. That profile is the local pack,
  which suggests the Google Business Profile website field points at the **http** URL that 301s.
  Worth switching to `https://`. Also re-logged *window cleaning westlake village* (pos 2.1, 31 impr,
  0 clicks) and *window cleaning newbury park* (pos 4.4, 23 impr, 0 clicks).
- `npm run build` passes (58 pages). Homepage still links all 10 city pages; both homepage JSON-LD
  blocks parse; no em/en dashes in any touched file.

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
