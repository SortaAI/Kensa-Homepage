import { SITE, PAGES } from '@/lib/seo';

// Structured data (schema.org JSON-LD). Everything here restates what the pages already say.
const ORG_ID = `${SITE}/#organization`;
const SITE_ID = `${SITE}/#website`;

export const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Kensa',
  legalName: 'Sorta LLC',
  url: SITE,
  logo: { '@type': 'ImageObject', url: `${SITE}/icons/icon-512.jpg?v=2`, width: 512, height: 512 },
  image: `${SITE}/og/inicio.jpg?v=2`,
  email: 'contacto@holakensa.com',
  description: PAGES['/'].description,
  areaServed: { '@type': 'Country', name: 'México' },
  knowsLanguage: 'es-MX',
  founder: { '@type': 'Person', '@id': `${SITE}/quien-lo-hace/#emiliano`, name: 'Emiliano Rodríguez' },
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: 'contacto@holakensa.com', areaServed: 'MX', availableLanguage: ['es'] }],
};

export const website = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: SITE,
  name: 'Kensa',
  inLanguage: 'es-MX',
  publisher: { '@id': ORG_ID },
};

export const software = {
  '@type': 'SoftwareApplication',
  '@id': `${SITE}/#software`,
  name: 'Kensa',
  url: SITE,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Software para clínicas y consultorios',
  operatingSystem: 'Web',
  inLanguage: 'es-MX',
  description: PAGES['/'].description,
  image: `${SITE}/og/inicio.jpg?v=2`,
  screenshot: `${SITE}/img/hero-laptop-agenda.webp`,
  publisher: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'México' },
  featureList: [
    'Asistente de WhatsApp para agendar, reagendar y hablar con el doctor',
    'Bandeja de WhatsApp compartida para recepción',
    'Agenda médica con avisos por WhatsApp',
    'Lista de espera para cubrir cancelaciones',
    'Formatos médicos digitales que el paciente llena en su celular',
    'Autollenado de formatos con los datos del paciente',
    'Firma de notas y expedientes sellados contra alteraciones',
    'Roles y permisos para el equipo de la clínica',
  ],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'MXN',
    description: 'Piloto de 45 días sin costo para clínicas fundadoras. Después, precio fundador reducido por sede.',
    url: `${SITE}/precios/`,
    availability: 'https://schema.org/LimitedAvailability',
  },
};

export function faqPage(path, faqs) {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE}${path}#faq`,
    inLanguage: 'es-MX',
    mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };
}

// crumbs: [[name, path], ...] after Inicio
export function breadcrumbs(crumbs) {
  const all = [['Inicio', '/'], ...crumbs];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: all.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + path })),
  };
}

export function webPage(path, type = 'WebPage', extra = {}) {
  const p = PAGES[path];
  return {
    '@type': type,
    '@id': `${SITE}${path}#webpage`,
    url: SITE + path,
    name: p ? p.title : undefined,
    description: p ? p.description : undefined,
    inLanguage: 'es-MX',
    isPartOf: { '@id': SITE_ID },
    primaryImageOfPage: `${SITE}/og/${path.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'inicio'}.jpg?v=2`,
    ...extra,
  };
}

// Every page carries the organization and website nodes so its @id references resolve.
export function graph(...nodes) {
  const list = nodes.filter(Boolean);
  if (!list.includes(organization)) list.push(organization);
  if (!list.includes(website)) list.push(website);
  return { '@context': 'https://schema.org', '@graph': list };
}
