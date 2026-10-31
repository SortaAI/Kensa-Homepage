import FuncionAsistente from '@/components/site/FuncionAsistente';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/asistente-de-whatsapp/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/asistente-de-whatsapp/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Asistente de WhatsApp', '/funciones/asistente-de-whatsapp/']]))} />
      <FuncionAsistente />
    </>
  );
}
