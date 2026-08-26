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
export const CANONICAL_OVERRIDES = {
  'blog/how-to-remove-hard-water-stains-from-windows':
    'https://alohawindowbros.com/blog/how-to-remove-hard-water-spots-from-windows/',
};

/** Absolute canonical for a built pathname, or null if the page is self-canonical. */
export function canonicalOverrideFor(pathname) {
  const key = pathname.replace(/^\/+|\/+$/g, '');
  return CANONICAL_OVERRIDES[key] ?? null;
}
