// Cross-URL canonical overrides for pages that have been consolidated into another
// page. Google chose ONE winner for a duplicated query surface; this map points the
// loser's canonical at the winner instead of leaving two of our own URLs competing.
//
// This file is the SINGLE SOURCE OF TRUTH for that decision. It is consumed by both
//   - src/pages/blog/[slug].astro  (emits <link rel="canonical"> + the JSON-LD URLs)
//   - astro.config.mjs             (drops the consolidated URL from the sitemap)
// so the canonical tag and the sitemap can never disagree. Never hardcode a
// consolidated slug in either of those files; add it here.
//
// 2026-08-26: /blog/how-to-remove-hard-water-stains-from-windows/ -> the Outrank
// duplicate that displaced it. Measured over 2026-07-27..2026-08-23 the pillar took
// ZERO impressions while the duplicate took 172 across ~42 hard-water queries,
// INCLUDING the pillar's own exact title query at position 27.2. Direction is set by
// which URL Google actually ranks, not by which is older or better linked. See
// SEO-LOG.md 2026-08-26.
//
// 2026-08-28: /blog/what-are-hard-water-stains/ -> the same winner. The Outrank stream
// published a THIRD hard-water page two days after the surface was deliberately collapsed
// to one URL. Measured over 2026-07-29..2026-08-25 the winner holds ~180 non-brand
// impressions across 42 query variants and every one of them is REMOVAL intent ("how to
// remove / clean / get rid of water spots"); there is not a single definitional row in the
// data, so the new page serves no measured demand the winner does not already serve. Its
// headings duplicate the winner section for section (diagnostic test, chemistry, removal
// escalation, prevention, DIY vs pro). Consolidated on arrival rather than after the fact,
// because the 08-26 consolidation is still under evaluation until late October and a third
// URL entering the same surface mid-experiment destroys the read. See SEO-LOG.md 2026-08-28.
//
// 2026-08-31: TWO MORE, both consolidated on arrival under the 08-28 rule. The stream
// published three posts in three days (08-29, 08-30, 08-31) and two of them landed on
// surfaces that are mid-experiment.
//
//   /blog/hard-water-stain-removal-from-glass/ -> the same hard-water winner. This is the
//   FOURTH URL the stream has put on one removal-intent surface, five days after that
//   surface was collapsed to a single URL. Its headings duplicate the winner section for
//   section: deposit vs etched glass, safe tools, the vinegar dwell, professional
//   polishing, prevention, DIY vs pro. It serves no query the winner does not already
//   serve, and the 08-26 consolidation is under evaluation until late October.
//
//   /blog/how-to-get-streak-free-windows/ -> /blog/best-streak-free-window-cleaner/.
//   The winner is the single strongest page on this site (1,455 impressions and 7 clicks
//   in the 08-01..08-28 GSC window, plus 216 and 1 on its non-slash variant, against 69
//   clicks sitewide) and it was rebuilt on 08-19 with a mid-September review still open.
//   The new post reproduces its argument and its structure: why glass streaks, the
//   mineral check, diagnosing the mark, what professionals use, and the drying sequence.
//   The winner's own differentiator is that the streak is the rinse water rather than the
//   product, which is the new post's thesis too. Its title looks like a distinct method
//   query, but Google already fuses method intent into that surface: the live PAA for
//   "best streak free window cleaner" on 2026-08-31 asks "What is the best thing to use to
//   clean windows without streaks?" and "How do you make your windows crystal clear?".
//   Applying the site's own tiebreak, which URL Google actually ranks, the winner holds
//   ~1,671 impressions and the new page holds none. Splitting the site's only
//   click-earning surface mid-experiment is the exact failure the 08-28 rule exists to
//   prevent. See SEO-LOG.md 2026-08-31.
//
// 2026-09-09: THREE MORE, all consolidated on arrival under the 08-28 rule. The stream
// published three posts in three days (09-07, 09-08, 09-09) and every one of them landed
// on a surface that already has a measured winner. The `query x page` join for
// 2026-08-10..2026-09-06 is the evidence in each case.
//
//   /blog/streak-free-window-cleaning/ -> /blog/best-streak-free-window-cleaner/.
//   The winner is still the single strongest page on this site: 1,592 non-brand
//   impressions and 3 of the site's 6 non-brand clicks, against 4,928 non-brand
//   impressions sitewide. Its 08-19 rebuild is under evaluation until mid-October. The
//   new post's own head phrasing ALREADY RANKS on the winner: `streak-free window
//   cleaning` takes 19 impressions at 10.5 on it, and ~50 further streak variants
//   (`best no streak window cleaner` 331 @ 1.7, `streak free glass cleaner` 28 @ 19.0,
//   `streakless window cleaner` 23 @ 11.0) are all on the winner and none on anything
//   else. Its thesis, that the streak is the rinse water and the frame rather than the
//   product, is the winner's own differentiator restated. This is the FIFTH URL the
//   stream has put on the streak surface.
//
//   /blog/window-cleaning-thousand-oaks/ -> /thousand-oaks/. This one is consolidated
//   onto a CITY LANDING PAGE rather than another post, because the join says the blog
//   surface for Thousand Oaks is dead and the landing page is the whole cluster:
//   /thousand-oaks/ holds `window washing thousand oaks` 39 @ 7.7, `window cleaning
//   thousand oaks` 38 @ 12.9, `window cleaning cost thousand oaks` 34 @ 5.2,
//   `residential window washing thousand oaks` 24 @ 7.8 plus eight more rows, while
//   /blog/window-cleaning-thousand-oaks-a-complete-guide-for-homeowners/ takes ZERO
//   impressions on any of them. `window cleaning thousand oaks` is also already SPLIT
//   between two of our own URLs and slipping on the landing page (12.9 from a prior
//   9.3) while / climbs (4.2 from 9.1). Adding a third own-URL with an exact-match slug
//   to a money query that is already splitting is the precise failure the 08-28 rule
//   exists to prevent, and if Google swapped the post in for the landing page it would
//   be a downgrade: the post has no LocalBusiness schema, no service-area block and no
//   conversion structure.
//
//   /blog/how-much-does-professional-window-cleaning-cost/ ->
//   /blog/how-much-does-window-cleaning-cost-in-ventura-county/. The title looks like a
//   distinct national query, but the BODY is this region: its sections are "Sample Costs
//   in Ventura and Santa Barbara", Westlake Village and Montecito bands, and a
//   per-scenario table. That is the pricing pillar's surface. The pillar holds the
//   measured demand (`window washing cost ventura county` 34 @ 3.9, `window cleaning
//   prices ventura county` 8 @ 4.9, plus per-city price rows) and is #2 organic in the
//   09-09 SERP snapshot for its head query. A cluster probe over the whole cost/price
//   vocabulary returns essentially NO non-geo residential demand on this site:
//   `professional window cleaning` takes 1 impression and `residential window cleaning`
//   4, both on /. There is no national price audience here to serve.
export const CANONICAL_OVERRIDES = {
  'blog/how-to-remove-hard-water-stains-from-windows':
    'https://alohawindowbros.com/blog/how-to-remove-hard-water-spots-from-windows/',
  'blog/what-are-hard-water-stains':
    'https://alohawindowbros.com/blog/how-to-remove-hard-water-spots-from-windows/',
  'blog/hard-water-stain-removal-from-glass':
    'https://alohawindowbros.com/blog/how-to-remove-hard-water-spots-from-windows/',
  'blog/how-to-get-streak-free-windows':
    'https://alohawindowbros.com/blog/best-streak-free-window-cleaner/',
  'blog/streak-free-window-cleaning':
    'https://alohawindowbros.com/blog/best-streak-free-window-cleaner/',
  'blog/window-cleaning-thousand-oaks':
    'https://alohawindowbros.com/thousand-oaks/',
  'blog/how-much-does-professional-window-cleaning-cost':
    'https://alohawindowbros.com/blog/how-much-does-window-cleaning-cost-in-ventura-county/',
};

/** Absolute canonical for a built pathname, or null if the page is self-canonical. */
export function canonicalOverrideFor(pathname) {
  const key = pathname.replace(/^\/+|\/+$/g, '');
  return CANONICAL_OVERRIDES[key] ?? null;
}
