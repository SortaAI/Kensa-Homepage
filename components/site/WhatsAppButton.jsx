'use client';
// Small floating WhatsApp button, bottom-right on every page. It stays out of the way:
// a white disc with the WhatsApp glyph, a label only on hover or focus, hidden while the
// cookie banner is open and when printing. The first message depends on the page.
import React from 'react';
import { whatsapp, whatsappKeyFor } from '@/lib/contact';
import { trackEvent } from '@/lib/analytics';

const GLYPH =
  'M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 6.9L3 29l6.5-2c1.9 1 4.1 1.6 6.5 1.6 7.2 0 13-5.7 13-12.8S23.2 3 16 3Zm0 23.3c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-3.9 1.2 1.2-3.7-.3-.4a10.4 10.4 0 0 1-1.8-5.8C5 10 9.9 5.3 16 5.3S27 10 27 15.8s-4.9 10.5-11 10.5Zm6-7.8c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2l-1 1.3c-.2.2-.4.3-.7.1-.3-.2-1.4-.5-2.7-1.6-1-.9-1.7-2-1.9-2.3-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.5c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.1 2.9 1.1 3.5.9 4.1.8.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4Z';

const CSS = `
.kn-wa{position:fixed;right:max(18px,env(safe-area-inset-right));bottom:max(18px,env(safe-area-inset-bottom));z-index:55;display:flex;align-items:center;gap:10px;font-family:'Poppins',system-ui,sans-serif;text-decoration:none}
.kn-wa-disc{width:52px;height:52px;border-radius:999px;background:#FFFFFF;color:#1FA855;display:flex;align-items:center;justify-content:center;border:1px solid #E8DFDA;box-shadow:0 10px 28px rgba(14,42,59,0.14);transition:transform .2s cubic-bezier(.16,1,.3,1),box-shadow .2s ease-out}
.kn-wa-label{order:-1;pointer-events:none;font-size:14px;font-weight:500;color:#0E2A3B;background:#FFFFFF;border:1px solid #E8DFDA;border-radius:999px;padding:9px 14px;box-shadow:0 10px 24px rgba(14,42,59,0.10);opacity:0;transform:translateX(6px);transition:opacity .18s ease-out,transform .2s cubic-bezier(.16,1,.3,1);white-space:nowrap}
.kn-wa:hover .kn-wa-disc{transform:translateY(-2px);box-shadow:0 14px 32px rgba(14,42,59,0.18)}
.kn-wa:hover .kn-wa-label,.kn-wa:focus-visible .kn-wa-label{opacity:1;transform:none}
.kn-wa:focus-visible{outline:none}
.kn-wa:focus-visible .kn-wa-disc{outline:3px solid #18648A;outline-offset:3px}
body:has(.kn-cookie) .kn-wa{display:none}
@media (max-width:600px){.kn-wa{right:max(14px,env(safe-area-inset-right));bottom:max(14px,env(safe-area-inset-bottom))}.kn-wa-disc{width:48px;height:48px}.kn-wa-label{display:none}}
@media (prefers-reduced-motion:reduce){.kn-wa-disc,.kn-wa-label{transition:none}.kn-wa:hover .kn-wa-disc{transform:none}}
@media print{.kn-wa{display:none}}
`;

export default function WhatsAppButton() {
  // Server render uses the generic message; after mount it follows the current page.
  const [key, setKey] = React.useState('general');
  React.useEffect(() => {
    setKey(whatsappKeyFor(window.location.pathname));
    // Every WhatsApp link on the site reports where it was clicked (data-wa, or the page).
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="https://wa.me/"]');
      if (!a) return;
      const page = window.location.pathname.replace(/^\/|\/$/g, '').split('/')[0] || 'inicio';
      trackEvent('whatsapp_click', { placement: a.dataset.wa || page });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <a
        className="kn-wa"
        href={whatsapp(key)}
        target="_blank"
        rel="noopener"
        aria-label="Escríbenos por WhatsApp (se abre en una pestaña nueva)"
        data-wa="flotante"
      >
        <span className="kn-wa-label" aria-hidden="true">
          ¿Dudas? Escríbenos
        </span>
        <span className="kn-wa-disc">
          <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" focusable="false">
            <path d={GLYPH} />
          </svg>
        </span>
      </a>
    </>
  );
}
