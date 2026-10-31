import LegalPage from '@/components/site/LegalPage';
import { readContent } from '@/lib/content';

export const metadata = {
  title: 'Kensa · Términos de servicio',
  description: 'El acuerdo entre Kensa y la clínica que usa la plataforma: qué ofrece el servicio, responsabilidades y reglas de uso.',
};

export default function Page() {
  return <LegalPage doc={readContent('legal', 'terminos.json')} />;
}
