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
export const CANONICAL_OVERRIDES = {
  'blog/how-to-remove-hard-water-stains-from-windows':
    'https://alohawindowbros.com/blog/how-to-remove-hard-water-spots-from-windows/',
  'blog/what-are-hard-water-stains':
    'https://alohawindowbros.com/blog/how-to-remove-hard-water-spots-from-windows/',
};

/** Absolute canonical for a built pathname, or null if the page is self-canonical. */
export function canonicalOverrideFor(pathname) {
  const key = pathname.replace(/^\/+|\/+$/g, '');
  return CANONICAL_OVERRIDES[key] ?? null;
}
