import LegalPage from '@/components/site/LegalPage';
import { readContent } from '@/lib/content';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/terminos/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/terminos/', 'WebPage'), breadcrumbs([['Términos de servicio', '/terminos/']]))} />
      <LegalPage doc={readContent('legal', 'terminos.json')} />
    </>
  );
}
