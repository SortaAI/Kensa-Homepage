import FuncionTusFormatos from '@/components/site/FuncionTusFormatos';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/tus-propios-formatos/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/tus-propios-formatos/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Tus propios formatos', '/funciones/tus-propios-formatos/']]))} />
      <FuncionTusFormatos />
    </>
  );
}
