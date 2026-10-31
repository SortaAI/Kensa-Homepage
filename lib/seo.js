import PAGES from '@/content/seo/pages.json';

// One place for the site's search metadata: titles put the search phrase first and end
// with "| Kensa"; every page gets its canonical URL and a 1200×630 share image.
export const SITE = 'https://www.holakensa.com';
export const SITE_NAME = 'Kensa';

// /funciones/agenda/ -> funciones-agenda; / -> inicio
export function ogKey(path) {
  return path.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'inicio';
}

export function buildMeta({ path, title, description, type = 'website', extra = {} }) {
  const image = { url: `/og/${ogKey(path)}.jpg`, width: 1200, height: 630, alt: title };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path, languages: { 'es-MX': path } },
    openGraph: { title, description, url: path, siteName: SITE_NAME, locale: 'es_MX', type, images: [image], ...extra },
    twitter: { card: 'summary_large_image', title, description, images: [image.url] },
  };
}

export function pageMeta(path) {
  const p = PAGES[path];
  if (!p) throw new Error(`No SEO entry for ${path}`);
  return buildMeta({ path, title: p.title, description: p.description });
}

export { PAGES };
