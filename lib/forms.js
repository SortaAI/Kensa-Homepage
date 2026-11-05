// Form delivery through Formspree. Resolves only when Formspree confirms receipt;
// otherwise throws with a message the form can show.
import { trackEvent } from './analytics';

export const FORMS = {
  demoInicio: 'https://formspree.io/f/xzeeaork',
  contacto: 'https://formspree.io/f/moeenrdr',
};

export async function sendForm(endpoint, data) {
  let res;
  try {
    res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    });
  } catch {
    throw new Error('No pudimos enviar tu solicitud. Revisa tu conexión e inténtalo de nuevo.');
  }
  if (!res.ok) {
    // Formspree's own messages are in English; visitors get one in Spanish.
    throw new Error('No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos a contacto@holakensa.com.');
  }
  if (!data._gotcha) {
    const form = endpoint === FORMS.contacto ? 'contacto' : endpoint === FORMS.demoInicio ? 'inicio' : null;
    if (form) trackEvent('generate_lead', { form_id: form });
  }
}
