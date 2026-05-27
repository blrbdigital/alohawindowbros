# Changelog

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
