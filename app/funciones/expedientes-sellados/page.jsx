import FuncionExpedientesSellados from '@/components/site/FuncionExpedientesSellados';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/expedientes-sellados/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/expedientes-sellados/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Expedientes sellados', '/funciones/expedientes-sellados/']]))} />
      <FuncionExpedientesSellados />
    </>
  );
}
