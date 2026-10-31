import FuncionFirmarBloquear from '@/components/site/FuncionFirmarBloquear';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/firmar-y-bloquear/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/firmar-y-bloquear/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Firmar y bloquear', '/funciones/firmar-y-bloquear/']]))} />
      <FuncionFirmarBloquear />
    </>
  );
}
