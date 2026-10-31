import FuncionListaDeEspera from '@/components/site/FuncionListaDeEspera';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { FAQ_LISTA_DE_ESPERA } from '@/lib/faqs';
import { graph, webPage, breadcrumbs, faqPage } from '@/lib/schema';

export const metadata = pageMeta('/funciones/lista-de-espera/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/lista-de-espera/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Lista de espera', '/funciones/lista-de-espera/']]), faqPage('/funciones/lista-de-espera/', FAQ_LISTA_DE_ESPERA))} />
      <FuncionListaDeEspera />
    </>
  );
}
