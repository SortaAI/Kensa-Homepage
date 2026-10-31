import FuncionEnvios from '@/components/site/FuncionEnvios';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/envios/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/envios/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Envíos', '/funciones/envios/']]))} />
      <FuncionEnvios />
    </>
  );
}
