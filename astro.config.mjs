// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

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

export default defineConfig({
  site: 'https://alohawindowbros.com',
  integrations: [
    sitemap({
      serialize(item) {
        const { pathname } = new URL(item.url);
        const lastmod = lastmodFor(pathname);
        if (lastmod) item.lastmod = lastmod;
        return item;
      },
    }),
  ],
});
