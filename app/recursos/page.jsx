import { BlogIndex } from '@/components/site/Blog';
import { readContent } from '@/lib/content';

export const metadata = {
  title: 'Kensa · Blog y recursos para clínicas',
  description: 'Plantillas gratuitas, guías de recepción y criterios para elegir software para clínicas en México.',
};

export default function Page() {
  return <BlogIndex index={readContent('recursos', 'index.json')} />;
}
