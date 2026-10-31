import FuncionFormatosCelular from '@/components/site/FuncionFormatosCelular';
import { pageMeta } from '@/lib/seo';
import JsonLd from '@/components/site/JsonLd';
import { graph, webPage, breadcrumbs } from '@/lib/schema';

export const metadata = pageMeta('/funciones/formatos-en-el-celular/');

export default function Page() {
  return (
    <>
      <JsonLd data={graph(webPage('/funciones/formatos-en-el-celular/', 'WebPage'), breadcrumbs([['Funciones', '/funciones/'], ['Formatos en el celular', '/funciones/formatos-en-el-celular/']]))} />
      <FuncionFormatosCelular />
    </>
  );
}
