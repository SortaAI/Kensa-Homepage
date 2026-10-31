import CostaFunciones from '@/components/site/CostaFunciones';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/', 'CollectionPage'), breadcrumbs([['Funciones', '/funciones/']]))} />
      <CostaFunciones />
    </>
  );
}
