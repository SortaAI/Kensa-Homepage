import { BlogPost } from '@/components/site/Blog';
import { readContent, postSlugs, readIndex } from '@/lib/content';
import { buildMeta, SITE } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, breadcrumbs } from '@/lib/schema';

export const dynamicParams = false;

export function generateStaticParams() {
  return postSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = readContent('recursos', `${slug}.json`);
  const iso = post.dates.map((d) => d.iso).filter(Boolean).sort();
  return buildMeta({
    path: `/recursos/${slug}/`,
    title: `${post.title} | Kensa`,
    description: post.description || post.lead,
    type: 'article',
    extra: { publishedTime: iso[0], modifiedTime: iso[iso.length - 1], authors: ['Equipo de Kensa'], section: post.label },
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = readContent('recursos', `${slug}.json`);
  const index = readIndex();
  const group = index.groups.find((g) => g.entries.some((e) => e.slug === slug));
  const iso = post.dates.map((d) => d.iso).filter(Boolean).sort();
  const url = `${SITE}/recursos/${slug}/`;
  const article = {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.description || post.lead,
    url,
    mainEntityOfPage: url,
    image: `${SITE}/og/recursos-${slug}.jpg`,
    datePublished: iso[0],
    dateModified: iso[iso.length - 1],
    inLanguage: 'es-MX',
    articleSection: group ? group.title : undefined,
    author: { '@type': 'Organization', name: 'Equipo de Kensa', url: `${SITE}/quien-lo-hace/` },
    publisher: { '@id': `${SITE}/#organization` },
  };
  const crumbs = [['Blog y recursos', '/recursos/'], [post.title, `/recursos/${slug}/`]];
  return (
    <>
      <JsonLd data={graph(article, breadcrumbs(crumbs))} />
      <BlogPost post={post} index={index} />
    </>
  );
}
