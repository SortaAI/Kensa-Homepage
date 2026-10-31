import FuncionRecepcion from '@/components/site/FuncionRecepcion';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/hoy-y-pacientes/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/hoy-y-pacientes/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Hoy y Pacientes', '/funciones/hoy-y-pacientes/']]))} />
      <FuncionRecepcion />
    </>
  );
}
