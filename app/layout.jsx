import CookieBanner from '@/components/site/CookieBanner';
import { SITE } from '@/lib/seo';

export const metadata = {
  metadataBase: new URL(SITE),
  title: 'Kensa',
  description: 'WhatsApp, agenda, lista de espera y documentos de tu clínica, en un solo flujo.',
  applicationName: 'Kensa',
  authors: [{ name: 'Kensa', url: SITE }],
  creator: 'Kensa',
  publisher: 'Kensa',
  formatDetection: { telephone: false, email: false, address: false },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  openGraph: { siteName: 'Kensa', locale: 'es_MX', type: 'website', images: [{ url: '/og/inicio.jpg', width: 1200, height: 630 }] },
};

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#F9F4F0' };

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" />
      </head>
      <body style={{ margin: 0 }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
