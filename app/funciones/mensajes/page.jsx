import FuncionMensajes from '@/components/site/FuncionMensajes';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/mensajes/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/mensajes/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Mensajes', '/funciones/mensajes/']]))} />
      <FuncionMensajes />
    </>
  );
}
