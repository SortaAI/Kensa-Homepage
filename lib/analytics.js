// Only fixed administrative identifiers; never send copied text, contacts, or form values.
export function trackEvent(name, identifiers = {}) {
  if (typeof window === 'undefined') return;
  try {
    if (!['www.holakensa.com', 'holakensa.com'].includes(window.location.hostname)) return;
    if (window.localStorage.getItem('kensa_cookie_consent_v1') !== 'granted') return;
    if (typeof window.gtag !== 'function') return;
    if (name === 'resource_copy' && identifiers.resource === 'mensajes-confirmar-citas-whatsapp' && /^mensaje-[1-8]$/.test(identifiers.message_id)) {
      window.gtag('event', name, { resource: identifiers.resource, message_id: identifiers.message_id });
    } else if (name === 'generate_lead' && ['contacto', 'inicio'].includes(identifiers.form_id)) {
      window.gtag('event', name, { form_id: identifiers.form_id });
    }
  } catch {
    // Optional measurement must never affect clipboard or form success.
  }
}
