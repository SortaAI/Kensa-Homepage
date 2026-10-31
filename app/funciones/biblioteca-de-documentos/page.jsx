import FuncionBiblioteca from '@/components/site/FuncionBiblioteca';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/biblioteca-de-documentos/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/biblioteca-de-documentos/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Biblioteca de documentos', '/funciones/biblioteca-de-documentos/']]))} />
      <FuncionBiblioteca />
    </>
  );
}
