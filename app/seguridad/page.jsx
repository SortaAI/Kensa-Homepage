import CostaSeguridad from '@/components/site/CostaSeguridad';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/seguridad/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/seguridad/', 'WebPage'), breadcrumbs([['Seguridad y privacidad', '/seguridad/']]))} />
      <CostaSeguridad />
    </>
  );
}
