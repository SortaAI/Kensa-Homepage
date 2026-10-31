import CostaContacto from '@/components/site/CostaContacto';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/contacto/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/contacto/', 'ContactPage'), breadcrumbs([['Contacto', '/contacto/']]))} />
      <CostaContacto />
    </>
  );
}
