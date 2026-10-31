import LegalPage from '@/components/site/LegalPage';
import { readContent } from '@/lib/content';

export const metadata = {
  title: 'Kensa · Aviso de privacidad',
  description: 'Qué información trata Kensa, para qué la usa, con quién la comparte y cómo ejercer tus derechos ARCO.',
};

export default function Page() {
  return <LegalPage doc={readContent('legal', 'privacidad.json')} />;
}
