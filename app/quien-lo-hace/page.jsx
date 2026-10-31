import CostaQuienLoHace from '@/components/site/CostaQuienLoHace';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/quien-lo-hace/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/quien-lo-hace/', 'AboutPage', { mainEntity: { '@type': 'Person', '@id': 'https://www.holakensa.com/quien-lo-hace/#emiliano', name: 'Emiliano Rodríguez', jobTitle: 'Fundador', description: 'Ex técnico de atención al paciente; construye Kensa desde la frontera entre El Paso y Ciudad Juárez.', worksFor: { '@id': 'https://www.holakensa.com/#organization' } } }), breadcrumbs([['Quién lo hace', '/quien-lo-hace/']]))} />
      <CostaQuienLoHace />
    </>
  );
}
