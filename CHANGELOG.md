# Changelog

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
