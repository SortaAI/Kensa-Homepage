import FuncionAgenda from '@/components/site/FuncionAgenda';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/agenda/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/agenda/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Agenda', '/funciones/agenda/']]))} />
      <FuncionAgenda />
    </>
  );
}
