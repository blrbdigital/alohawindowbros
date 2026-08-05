// Shared SEO helpers — image structured data (ImageObject).
// GSC flags "no image metadata" when images appear only as bare URL strings in
// JSON-LD. ImageObject gives Google dimensions, caption, and credit/copyright —
// the metadata used for Google Images and the business knowledge panel.

const SITE = 'https://alohawindowbros.com';
const ORG = 'Aloha Window Bros';

type ImgInput = {
  path: string;       // "/img/foo.jpg" or absolute URL
  caption?: string;
  width?: number;
  height?: number;
};

/** Build a schema.org ImageObject with ownership/credit metadata. */
export function imageObject({ path, caption, width, height }: ImgInput) {
  const url = path.startsWith('http') ? path : `${SITE}${path}`;
  return {
    '@type': 'ImageObject',
    url,
    contentUrl: url,
    ...(caption ? { caption } : {}),
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    creditText: ORG,
    creator: { '@type': 'Organization', name: ORG, url: `${SITE}/` },
    copyrightNotice: `© ${ORG}`,
  };
}

/** Known static images with real pixel dimensions (read at build time). */
export const IMG = {
  logo: { path: '/img/logo.PNG', width: 683, height: 805, caption: 'Aloha Window Bros logo' },
  hero: { path: '/img/hero-window-cleaning.jpg', width: 498, height: 386, caption: 'Professional window cleaning in Ventura County' },
  beforeAfter: { path: '/img/before_after.png', width: 786, height: 984, caption: 'Before and after professional window cleaning' },
  cleanWindow: { path: '/img/clean_window_pic.png', width: 1104, height: 1474, caption: 'Streak-free clean windows by Aloha Window Bros' },
  services: { path: '/img/services-2.jpg', width: 557, height: 733, caption: 'Aloha Window Bros window cleaning services' },
} satisfies Record<string, ImgInput>;

/** Representative photos for the LocalBusiness `image` property (array form). */
export const businessImages = [
  imageObject(IMG.cleanWindow),
  imageObject(IMG.beforeAfter),
  imageObject(IMG.hero),
];

// ---------------------------------------------------------------------------
// The business entity. ONE node, one @id, emitted identically on every page.
//
// Before 2026-08-05 every page minted its own LocalBusiness: the homepage used
// `/#business`, each city page used `/<city>/#business`, and the four service
// pages emitted an anonymous `provider` node with no @id at all. That is 15
// separate businesses as far as an entity resolver is concerned. Everything
// below is now built here so the facts cannot drift between templates.
//
// VERIFY BEFORE CHANGING ANY NUMBER HERE. `aggregateRating` mirrors the Google
// Business Profile (CID 4483745950804238350) and must be re-read off the live
// listing, never estimated. Last verified 2026-08-05: 4.9 stars, 185 reviews
// (5* 175 / 4* 6 / 3* 2 / 2* 1). The visible hero proof link and the "Rating"
// badge on the homepage carry the same two numbers and must move with it.
// ---------------------------------------------------------------------------

export const BUSINESS_ID = `${SITE}/#business`;

/** GBP star rating and review count, read off the live listing 2026-08-05. */
export const GBP = { ratingValue: '4.9', reviewCount: '185' };

/** Every city the business publishes a landing page or service area for. */
export const AREA_SERVED = [
  'Thousand Oaks', 'Westlake Village', 'Agoura Hills', 'Newbury Park',
  'Santa Barbara', 'Montecito', 'Hope Ranch', 'Goleta', 'Carpinteria',
  'Summerland', 'Camarillo', 'Simi Valley', 'Oxnard', 'Ventura', 'Ojai',
  'Ventura County', 'Santa Barbara County',
];

/**
 * Authoritative external profiles for the same entity. Only URLs that have been
 * fetched and confirmed to carry this business's NAP belong here. The Google
 * Business Profile is the important one: it outranks this website on most local
 * queries, so `sameAs` is what tells Google and AI engines the two are one
 * business. bbb.org 403s to non-browser agents (same rule that dropped CAL FIRE
 * and the AMS SWEX paper) and its profile is unclaimed, so it is left out.
 */
export const SAME_AS = [
  'https://maps.google.com/?cid=4483745950804238350',
  'https://www.provenexpert.com/en-us/aloha-window-bros/',
];

/**
 * The canonical LocalBusiness node. Pass `description` to tailor the prose to a
 * page; every other fact is fixed so all pages reinforce a single entity.
 */
export function businessNode(description?: string) {
  return {
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: ORG,
    description: description
      ?? 'Professional window cleaning services in Ventura County and Santa Barbara County',
    url: `${SITE}/`,
    telephone: '+18053414121',
    email: 'alohawindowbros@gmail.com',
    logo: `${SITE}/img/logo.PNG`,
    image: businessImages,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '138 Colt Lane',
      addressLocality: 'Thousand Oaks',
      addressRegion: 'CA',
      postalCode: '91362',
      addressCountry: 'US',
    },
    areaServed: AREA_SERVED,
    // GBP publishes "Open 24 hours" (owner-set, confirmed on the live listing
    // 2026-08-05). Mirrored here so the site and the listing agree.
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    }],
    priceRange: '$150-$475',
    aggregateRating: { '@type': 'AggregateRating', ...GBP },
    sameAs: SAME_AS,
  };
}
