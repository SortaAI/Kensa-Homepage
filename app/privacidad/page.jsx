import LegalPage from '@/components/site/LegalPage';
import { readContent } from '@/lib/content';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/privacidad/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/privacidad/', 'WebPage'), breadcrumbs([['Aviso de privacidad', '/privacidad/']]))} />
      <LegalPage doc={readContent('legal', 'privacidad.json')} />
    </>
  );
}
