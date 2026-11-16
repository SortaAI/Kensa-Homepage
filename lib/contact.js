// One place for every way to reach Kensa. Change the WhatsApp number here and every
// button, link and the floating icon follow.

// Kensa's WhatsApp Business line: +52 55 6884 9144 (@HolaKensa). wa.me takes the
// country code and number as digits only.
export const WHATSAPP_NUMBER = '525568849144';
export const WHATSAPP_DISPLAY = '+52 55 6884 9144';
export const WHATSAPP_USERNAME = '@HolaKensa';

export const EMAIL = 'contacto@holakensa.com';
export const APP_URL = 'https://app.holakensa.com';

// Contact form, with the interest preselected (see CostaContacto).
export const CONTACT = {
  demo: '/contacto/',
  fundadora: '/contacto/?interes=fundadora',
  prueba: '/contacto/?interes=prueba',
};

// Pre-filled first messages, so the team knows where a chat started.
export const WA_MESSAGES = {
  general: 'Hola, tengo una pregunta sobre Kensa.',
  precios: 'Hola, tengo una pregunta sobre los precios de Kensa.',
  fundadora: 'Hola, quiero saber si todavía hay lugar como clínica fundadora.',
  prueba: 'Hola, quiero empezar la prueba gratis de 14 días de Kensa.',
  seguridad: 'Hola, tengo una pregunta sobre privacidad y seguridad en Kensa.',
  funciones: 'Hola, quiero saber si Kensa puede hacer algo específico en mi clínica.',
  formatos: 'Hola, quiero saber si Kensa funciona con los formatos de mi consultorio.',
  recursos: 'Hola, leí una guía de Kensa y tengo una pregunta.',
  emiliano: 'Hola Emiliano, te cuento cómo trabajamos hoy en mi clínica.',
  contacto: 'Hola, prefiero escribir por aquí en lugar de llenar el formulario.',
  soporte: 'Hola, ya uso Kensa y necesito ayuda.',
};

export function whatsapp(key = 'general') {
  const text = WA_MESSAGES[key] || key;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// The floating icon picks its message from the page the visitor is on.
export function whatsappKeyFor(path = '/') {
  if (path.startsWith('/precios')) return 'precios';
  if (path.startsWith('/seguridad') || path.startsWith('/privacidad') || path.startsWith('/terminos')) return 'seguridad';
  if (path.startsWith('/funciones/biblioteca') || path.startsWith('/funciones/tus-propios') || path.startsWith('/funciones/formatos')) return 'formatos';
  if (path.startsWith('/funciones') || path.startsWith('/como-funciona') || path.startsWith('/para')) return 'funciones';
  if (path.startsWith('/recursos')) return 'recursos';
  if (path.startsWith('/quien-lo-hace')) return 'emiliano';
  if (path.startsWith('/contacto')) return 'contacto';
  return 'general';
}
