export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: 'Kensa · Software para clínicas',
    short_name: 'Kensa',
    description: 'WhatsApp, agenda, lista de espera y documentos de tu clínica, en un solo flujo.',
    start_url: '/',
    display: 'browser',
    lang: 'es-MX',
    background_color: '#F9F4F0',
    theme_color: '#18648A',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
