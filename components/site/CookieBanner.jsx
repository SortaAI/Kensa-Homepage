'use client';
// Cookie consent, ported from the old Sorta México site. Nothing optional loads before
// the visitor accepts. The analytics IDs are empty until Kensa has its own accounts;
// with none set, accepting only records the choice.
import React from 'react';

const KEY = 'kensa_cookie_consent_v1';
const GA_ID = ''; // Google Analytics 4, e.g. 'G-XXXXXXX'
const CLARITY_ID = ''; // Microsoft Clarity project id
const PRODUCTION = ['www.holakensa.com', 'holakensa.com'];

function read() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

function loadAnalytics() {
  if (!PRODUCTION.includes(location.hostname) || window.__kensaAnalyticsLoaded) return;
  window.__kensaAnalyticsLoaded = true;
  if (GA_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', { analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }
  if (CLARITY_ID) {
    window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
    window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'granted' });
    const c = document.createElement('script');
    c.async = true;
    c.src = 'https://www.clarity.ms/tag/' + CLARITY_ID;
    document.head.appendChild(c);
  }
}

function clearAnalyticsCookies() {
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim();
    if (!/^(_ga($|_)|_clck$|_clsk$)/.test(name)) return;
    ['', location.hostname, '.' + location.hostname].forEach((domain) => {
      document.cookie = name + '=; Max-Age=0; Path=/; SameSite=Lax' + (domain ? '; Domain=' + domain : '');
    });
  });
}

export default function CookieBanner() {
  const [open, setOpen] = React.useState(false);
  const first = React.useRef(null);
  const returnFocus = React.useRef(null);

  React.useEffect(() => {
    const c = read();
    if (c === 'granted') loadAnalytics();
    else if (c !== 'denied') setOpen(true);
    // Footer "Cookies" (and any [data-cookie-preferences]) reopens the choice
    const onClick = (e) => {
      if (e.target.closest && e.target.closest('[data-cookie-preferences]')) {
        e.preventDefault();
        returnFocus.current = document.activeElement;
        setOpen(true);
        setTimeout(() => first.current && first.current.focus(), 0);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  function choose(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    setOpen(false);
    if (value === 'granted') loadAnalytics();
    else {
      clearAnalyticsCookies();
      if (window.__kensaAnalyticsLoaded) return location.reload();
    }
    if (returnFocus.current && returnFocus.current.isConnected) returnFocus.current.focus();
  }

  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-label="Preferencias de cookies"
      aria-describedby="kensa-cookie-text"
      className="kn-cookie"
    >
      <style>{`
.kn-cookie{position:fixed;left:20px;right:20px;bottom:20px;z-index:60;max-width:680px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;gap:16px 20px;padding:18px 20px 18px 22px;border-radius:22px;background:#FFFFFF;border:1px solid #E8DFDA;box-shadow:0 24px 56px rgba(14,42,59,0.16);font-family:'Poppins',system-ui,sans-serif;color:#0E2A3B;animation:kn-cookie-in .45s cubic-bezier(.16,1,.3,1)}
.kn-cookie p{flex:1 1 300px;margin:0;font-size:14px;line-height:1.6;color:#4B5D69}
.kn-cookie p a{color:#18648A}
.kn-cookie div{display:flex;gap:10px;flex:none}
.kn-cookie button{font:inherit;font-size:14px;font-weight:500;border-radius:999px;padding:11px 18px;cursor:pointer;transition:background-color .15s ease-out}
.kn-cookie .ok{background:#18648A;color:#FFFFFF;border:1px solid #18648A}
.kn-cookie .ok:hover{background:#114E6C}
.kn-cookie .no{background:#FFFFFF;color:#0E2A3B;border:1px solid #D6CBC4}
.kn-cookie .no:hover{background:#F2E9E5}
@keyframes kn-cookie-in{from{opacity:0;transform:translateY(12px)}}
@media (max-width:560px){.kn-cookie{left:12px;right:12px;bottom:12px;padding:16px}.kn-cookie div{width:100%}.kn-cookie button{flex:1}}
@media (prefers-reduced-motion:reduce){.kn-cookie{animation:none}}
`}</style>
      <p id="kensa-cookie-text">
        Usamos herramientas de analítica, como Google Analytics y Microsoft Clarity, para entender cómo se usa el sitio. Puedes
        aceptarlas o continuar solo con las cookies esenciales. <a href="/privacidad/#cookies">Leer más</a>.
      </p>
      <div>
        <button ref={first} type="button" className="no" onClick={() => choose('denied')}>
          Solo esenciales
        </button>
        <button type="button" className="ok" onClick={() => choose('granted')}>
          Aceptar
        </button>
      </div>
    </div>
  );
}
