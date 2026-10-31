import { PAGES, SITE } from '@/lib/seo';
import { postSlugs, readContent } from '@/lib/content';

export const dynamic = 'force-static';

// Every public page plus each guide, with the guide's last update as lastModified.
export default function sitemap() {
  const pages = Object.entries(PAGES).map(([path, p]) => ({
    url: SITE + path,
    changeFrequency: path === '/' || path === '/recursos/' ? 'weekly' : 'monthly',
    priority: p.priority,
  }));
  const posts = postSlugs().map((slug) => {
    const post = readContent('recursos', `${slug}.json`);
    const iso = post.dates.map((d) => d.iso).filter(Boolean).sort();
    return { url: `${SITE}/recursos/${slug}/`, lastModified: iso[iso.length - 1], changeFrequency: 'monthly', priority: 0.6 };
  });
  return [...pages, ...posts];
}
