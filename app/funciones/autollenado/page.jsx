import FuncionAutollenado from '@/components/site/FuncionAutollenado';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/autollenado/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/autollenado/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Autollenado', '/funciones/autollenado/']]))} />
      <FuncionAutollenado />
    </>
  );
}
