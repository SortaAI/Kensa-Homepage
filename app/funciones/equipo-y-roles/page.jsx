import FuncionEquipo from '@/components/site/FuncionEquipo';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/equipo-y-roles/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/equipo-y-roles/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Equipo y roles', '/funciones/equipo-y-roles/']]))} />
      <FuncionEquipo />
    </>
  );
}
