'use client';
// Page frame for the hand-built pages (legal, blog): header, footer, the shared Costa CSS,
// section reveals, and copy buttons for the message examples in the guides.
import React from 'react';
import { SITE_CSS } from '@/lib/siteCss';
import { PROSE_CSS } from '@/lib/proseCss';
import CostaEncabezado from './CostaEncabezado';
import CostaPiePagina from './CostaPiePagina';

function useReveal() {
  React.useEffect(() => {
    if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-rv', 'in');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px' },
    );
    document.querySelectorAll('[data-rv]').forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
        el.setAttribute('data-rv', 'pre');
        io.observe(el);
      }
    });
    return () => io.disconnect();
  }, []);
}

function useCopyButtons() {
  React.useEffect(() => {
    const added = [];
    document.querySelectorAll('.kn-prose .message-example blockquote').forEach((q) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'kn-copy';
      b.textContent = 'Copiar mensaje';
      b.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(q.innerText.trim());
          b.textContent = 'Copiado';
        } catch {
          b.textContent = 'Selecciona y copia el texto';
        }
        setTimeout(() => (b.textContent = 'Copiar mensaje'), 2000);
      });
      q.after(b);
      added.push(b);
    });
    return () => added.forEach((b) => b.remove());
  }, []);
}

export default function CostaShell({ children }) {
  useReveal();
  useCopyButtons();
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: SITE_CSS + PROSE_CSS }} />
      <div
        style={{
          fontFamily: "'Poppins', system-ui, sans-serif",
          color: '#0E2A3B',
          background: '#F9F4F0',
          width: '100%',
          overflowX: 'clip',
        }}
      >
        <a href="#contenido" className="skip">
          Saltar al contenido
        </a>
        <CostaEncabezado />
        <main id="contenido">{children}</main>
        <CostaPiePagina />
      </div>
    </>
  );
}
