import CostaComoFunciona from '@/components/site/CostaComoFunciona';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/como-funciona/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/como-funciona/', 'WebPage'), breadcrumbs([['Cómo funciona', '/como-funciona/']]))} />
      <CostaComoFunciona />
    </>
  );
}
