# SEO Activity Log — Aloha Window Bros
> This log tracks every SEO action taken, the data that justified it, and the expected impact.
> Updated automatically by the BLRB Digital SEO optimization system.

---

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
