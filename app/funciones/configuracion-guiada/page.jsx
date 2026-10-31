import FuncionConfiguracion from '@/components/site/FuncionConfiguracion';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/configuracion-guiada/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/configuracion-guiada/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Configuración guiada', '/funciones/configuracion-guiada/']]))} />
      <FuncionConfiguracion />
    </>
  );
}
