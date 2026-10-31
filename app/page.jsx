import CostaInicio from '@/components/site/CostaInicio';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { FAQ_INICIO } from '@/lib/faqs';
import { graph, organization, website, software, webPage, faqPage } from '@/lib/schema';

export const metadata = pageMeta('/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(organization, website, software, webPage('/'), faqPage('/', FAQ_INICIO))} />
      <CostaInicio />
    </>
  );
}
