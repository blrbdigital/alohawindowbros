#!/usr/bin/env node
// Backfill heroImage + heroImageAlt frontmatter on every blog article.
// Uses the same picker as the SEO cron so cron-written + backfilled articles
// stay in sync. Idempotent — skips files that already have both fields.

import fs from "node:fs"
import path from "node:path"
import { pickHeroImage, injectHeroIntoMarkdown } from "../../internal/blrb-command-center/server/jobs/lib/aloha-hero-picker.ts"

const BLOG_DIR = "/Users/adam/sites/aloha2/src/content/blog"

const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md"))
let updated = 0
let skipped = 0

for (const f of files) {
  const slug = f.replace(/\.md$/, "")
  const full = path.join(BLOG_DIR, f)
  const raw = fs.readFileSync(full, "utf8")
  const titleMatch = raw.match(/^title:\s*['"]?([^'"\n]+)/m)
  const title = titleMatch ? titleMatch[1].trim() : slug
  const pick = pickHeroImage(title, slug)
  const updatedContents = injectHeroIntoMarkdown(raw, pick)
  if (updatedContents === null) {
    skipped++
    console.log(`SKIP ${slug} (already has heroImage)`)
    continue
  }
  fs.writeFileSync(full, updatedContents)
  updated++
  console.log(`OK   ${slug} -> ${pick.src}`)
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped`)
