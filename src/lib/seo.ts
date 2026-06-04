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
