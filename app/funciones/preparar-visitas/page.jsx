import FuncionPrepararVisitas from '@/components/site/FuncionPrepararVisitas';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/preparar-visitas/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/preparar-visitas/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Preparar visitas', '/funciones/preparar-visitas/']]))} />
      <FuncionPrepararVisitas />
    </>
  );
}
