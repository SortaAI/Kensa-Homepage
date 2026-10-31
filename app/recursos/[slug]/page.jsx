import { BlogPost } from '@/components/site/Blog';
import { readContent, postSlugs } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return postSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = readContent('recursos', `${slug}.json`);
  return { title: `${post.title} · Kensa`, description: post.description || post.lead };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <BlogPost post={readContent('recursos', `${slug}.json`)} index={readContent('recursos', 'index.json')} />;
}
