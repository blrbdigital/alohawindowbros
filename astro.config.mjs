// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { canonicalOverrideFor } from './src/lib/consolidated.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));

// Google treats <lastmod> as a crawl-scheduling hint, but only for as long as the
// values stay consistently accurate. Six city landing pages sat in "Discovered -
// currently not indexed" with no crawl at all while the sitemap shipped zero
// lastmod values (audited 2026-07-24), so every URL now carries one.
//
// Every value below is derived from something real: the source file's last git
// commit, falling back to the post's own frontmatter date. Never build time, which
// would mark all 58 URLs as freshly modified on every deploy and teach Google to
// ignore the field entirely. If git history is unavailable the field is simply
// omitted, which is the pre-2026-07-24 behaviour.

/** Map a built URL pathname back to the source file that produces it. */
function sourceFor(pathname) {
  const p = pathname.replace(/^\/+|\/+$/g, '');
  if (p === '') return 'src/pages/index.astro';
  if (p === 'blog') return 'src/pages/blog/index.astro';
  if (p.startsWith('blog/')) return `src/content/blog/${p.slice('blog/'.length)}.md`;
  if (p.startsWith('services/')) return `src/content/services/${p.slice('services/'.length)}.md`;
  return `src/pages/${p}.astro`;
}

function gitLastModified(relPath) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', relPath], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out || null;
  } catch {
    return null;
  }
}

/** Publish date from markdown frontmatter, used only when git has no record. */
function frontmatterDate(relPath) {
  const abs = path.join(ROOT, relPath);
  if (!existsSync(abs)) return null;
  const match = readFileSync(abs, 'utf8').match(/^date:\s*['"]?(\d{4}-\d{2}-\d{2})/m);
  return match ? new Date(`${match[1]}T12:00:00Z`).toISOString() : null;
}

const lastmodCache = new Map();
function lastmodFor(pathname) {
  if (lastmodCache.has(pathname)) return lastmodCache.get(pathname);
  const src = sourceFor(pathname);
  const value = gitLastModified(src) || frontmatterDate(src);
  lastmodCache.set(pathname, value);
  return value;
}

// Wrap every markdown table in a focusable horizontal-scroll region (2026-10-02).
// html/body carry overflow-x: hidden (mobile-first rule), so a table wider than the
// ~350px article column on a phone was silently CLIPPED: its right-hand columns could
// be neither seen nor scrolled to. Measured at 390px that day: 27 posts, including the
// site's top click page, worst case 485px. role/tabindex/aria-label make the scroll
// region reachable by keyboard (axe: scrollable-region-focusable). Styling lives in
// global.css under `.table-scroll`. No dependency: a plain walk over the hast tree.
function rehypeTableScroll() {
  const wrap = (node) => {
    if (!node.children) return;
    node.children = node.children.map((child) => {
      if (child.type === 'element' && child.tagName === 'table') {
        return {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-scroll'], role: 'region', tabIndex: 0, ariaLabel: 'Scrollable table' },
          children: [child],
        };
      }
      wrap(child);
      return child;
    });
  };
  return (tree) => wrap(tree);
}

// Point every internal markdown link at the canonical trailing-slash URL (2026-10-07).
// Since the 2026-09-04 nginx fix, `/path` answers 301 -> `/path/`, so a slashless link
// costs a redirect hop and links a URL that is not the canonical. On 10-07, 3,064 links
// on 118 built pages did this (markdown posts plus the footer/header/sidebar templates,
// which were fixed by hand). Only paths with no file extension are touched, so images,
// PDFs, llms.txt and the sitemap keep their exact href; ?query and #hash are preserved.
function rehypeTrailingSlash() {
  const fix = (href) => {
    if (typeof href !== 'string' || !href.startsWith('/') || href.startsWith('//')) return href;
    const m = href.match(/^([^?#]*)(.*)$/);
    const pathPart = m[1];
    if (pathPart === '/' || pathPart.endsWith('/') || /\.[a-z0-9]{2,5}$/i.test(pathPart)) return href;
    return `${pathPart}/${m[2]}`;
  };
  const walk = (node) => {
    if (node.type === 'element' && node.tagName === 'a' && node.properties) {
      node.properties.href = fix(node.properties.href);
    }
    if (node.children) node.children.forEach(walk);
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site: 'https://alohawindowbros.com',
  markdown: {
    rehypePlugins: [rehypeTableScroll, rehypeTrailingSlash],
  },
  integrations: [
    sitemap({
      // A page that canonicalises to another URL must not also be submitted as its
      // own sitemap entry; that is a mixed signal and undoes the consolidation. Same
      // map as the <link rel="canonical"> the page emits (src/lib/consolidated.mjs).
      filter: (page) => !canonicalOverrideFor(new URL(page).pathname),
      serialize(item) {
        const { pathname } = new URL(item.url);
        const lastmod = lastmodFor(pathname);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
});
