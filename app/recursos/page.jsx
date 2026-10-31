import { BlogIndex } from '@/components/site/Blog';
import JsonLd from '@/components/site/JsonLd';
import { readContent, readIndex } from '@/lib/content';
import { pageMeta, SITE } from '@/lib/seo';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/recursos/');

export default function Page() {
  const index = readIndex();
  const entries = index.groups.flatMap((g) => g.entries);
  const list = {
    '@type': 'ItemList',
    itemListElement: entries.map((e, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/recursos/${e.slug}/`, name: e.title })),
  };
  return (
    <>
      <JsonLd data={graph(webPage('/recursos/', 'CollectionPage', { mainEntity: list }), breadcrumbs([['Blog y recursos', '/recursos/']]))} />
      <BlogIndex index={index} />
    </>
  );
}
