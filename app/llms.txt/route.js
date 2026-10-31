import { PAGES, SITE } from '@/lib/seo';
import { readContent, readIndex } from '@/lib/content';

export const dynamic = 'force-static';

// A plain-text map of the site for AI assistants and answer engines (llmstxt.org).
export function GET() {
  const skip = new Set(['/recursos/', '/privacidad/', '/terminos/']);
  const name = (t) => t.replace(/ \| Kensa$/, '');
  const product = Object.entries(PAGES)
    .filter(([path]) => !skip.has(path))
    .map(([path, p]) => `- [${name(p.title)}](${SITE}${path}): ${p.description}`);
  const guides = readIndex().groups.flatMap((g) =>
    g.entries.map((e) => `- [${e.title}](${SITE}/recursos/${e.slug}/): ${e.summary}`),
  );
  const body = [
    '# Kensa',
    '',
    '> Kensa es software para la recepción de clínicas y consultorios en México. Conecta el WhatsApp de la clínica, la agenda, la lista de espera y los formatos médicos: el paciente agenda, llena y firma desde su celular, y el doctor firma un expediente sellado. Las clínicas fundadoras tienen un piloto de 45 días sin costo.',
    '',
    'El asistente de WhatsApp es un menú automático, no un chatbot con IA, y no agenda citas sin que el equipo de la clínica confirme. Funciona con el número actual de WhatsApp Business de la clínica.',
    '',
    '## Producto',
    '',
    ...product,
    '',
    '## Guías y plantillas gratis',
    '',
    ...guides,
    '',
    '## Legal',
    '',
    `- [Aviso de privacidad](${SITE}/privacidad/)`,
    `- [Términos de servicio](${SITE}/terminos/)`,
    '',
    '## Contacto',
    '',
    '- Correo: contacto@holakensa.com',
    `- Agenda una demostración: ${SITE}/contacto/`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
