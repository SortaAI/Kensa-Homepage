import AudiencePage from '@/components/site/AudiencePage';
import JsonLd from '@/components/site/JsonLd';
import { readContent } from '@/lib/content';
import { pageMeta } from '@/lib/seo';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

const SLUGS = ['consultorios-medicos', 'clinicas-dentales'];
export const dynamicParams = false;
export function generateStaticParams() { return SLUGS.map((slug) => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  return pageMeta(`/para/${slug}/`);
}
export default async function Page({ params }) {
  const { slug } = await params;
  const page = readContent('para', `${slug}.json`);
  const path = `/para/${slug}/`;
  return <><JsonLd data={graph(webPage(path), breadcrumbs([[page.label, path]]))} /><AudiencePage page={page} /></>;
}
