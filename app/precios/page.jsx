import CostaPrecios from '@/components/site/CostaPrecios';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { FAQ_PRECIOS } from '@/lib/faqs';
import { graph, webPage, breadcrumbs, faqPage } from '@/lib/schema';

export const metadata = pageMeta('/precios/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/precios/', 'WebPage'), breadcrumbs([['Precios', '/precios/']]), faqPage('/precios/', FAQ_PRECIOS))} />
      <CostaPrecios />
    </>
  );
}
