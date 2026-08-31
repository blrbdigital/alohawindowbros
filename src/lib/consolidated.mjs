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
export const CANONICAL_OVERRIDES = {
  'blog/how-to-remove-hard-water-stains-from-windows':
    'https://alohawindowbros.com/blog/how-to-remove-hard-water-spots-from-windows/',
  'blog/what-are-hard-water-stains':
    'https://alohawindowbros.com/blog/how-to-remove-hard-water-spots-from-windows/',
  'blog/hard-water-stain-removal-from-glass':
    'https://alohawindowbros.com/blog/how-to-remove-hard-water-spots-from-windows/',
  'blog/how-to-get-streak-free-windows':
    'https://alohawindowbros.com/blog/best-streak-free-window-cleaner/',
};

/** Absolute canonical for a built pathname, or null if the page is self-canonical. */
export function canonicalOverrideFor(pathname) {
  const key = pathname.replace(/^\/+|\/+$/g, '');
  return CANONICAL_OVERRIDES[key] ?? null;
}
