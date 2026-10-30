export const metadata = {
  metadataBase: new URL('https://holakensa.com'),
  title: 'Kensa',
  description: 'WhatsApp, agenda, lista de espera y documentos de tu clínica, en un solo flujo.',
  openGraph: { siteName: 'Kensa', locale: 'es_MX', type: 'website', images: ['/img/hero-laptop-agenda.webp'] },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#FFFFFF' };

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" />
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
