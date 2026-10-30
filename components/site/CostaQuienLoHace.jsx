'use client';
// Generated from the design canvas, Costa palette (Costa-QuienLoHace-cs07.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import CostaEncabezado from './CostaEncabezado';
import CostaPiePagina from './CostaPiePagina';

const CSS =
  'body{margin:0;background:#F9F4F0}\n:root{color-scheme:light}\n[id]{scroll-margin-top:24px}\nh1,h2,h3{text-wrap:balance}\np{text-wrap:pretty}\na,button{touch-action:manipulation;-webkit-tap-highlight-color:rgba(14,42,59,0.08);transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out}\nnav a:not([style*="background: #18648A"]):hover{text-decoration:underline}\na[style*="background: #18648A"]:hover{background:#114E6C !important}\na[style*="border: 1px solid #D6CBC4"]:hover{background:#F2E9E5 !important;border-color:#0E2A3B !important}\n.skip{position:absolute;left:-9999px;top:12px;z-index:10;background:#0E2A3B;color:#FFFFFF;padding:10px 16px;border-radius:999px;text-decoration:none}\n.skip:focus{left:16px}\n@media (prefers-reduced-motion:reduce){*{transition:none !important}}\n::selection{background:#0E2A3B;color:#FFFFFF}\n:focus-visible{outline:2px solid #0E2A3B;outline-offset:3px;border-radius:6px}\na{color:#0E2A3B;text-underline-offset:3px}a:hover{color:#4B5D69}\n*{box-sizing:border-box}\n.wrap{width:100%;max-width:1200px;margin:0 auto;padding-left:clamp(16px,4vw,40px);padding-right:clamp(16px,4vw,40px)}\n@media (max-width:820px){.hide-sm{display:none !important}.navlinks{display:none !important}}\n.kn-item:hover,.kn-trigger:hover{background:#F2E9E5 !important}\n.show-sm{display:none}\n@media (max-width:820px){.navlinks,.hide-sm{display:none !important}.show-sm{display:flex !important}}\n/* motion */\n.kn-btn,.kn-ghost{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out,transform .2s cubic-bezier(.16,1,.3,1),box-shadow .2s ease-out}\n.kn-btn:hover{transform:translateY(-1px);box-shadow:0 10px 22px rgba(24,100,138,0.22)}\n.kn-btn:active{transform:translateY(0);box-shadow:0 2px 6px rgba(24,100,138,0.18);transition-duration:.08s}\n.kn-ghost:hover{transform:translateY(-1px);box-shadow:0 8px 18px rgba(14,42,59,0.08)}\nli a > span[aria-hidden] svg{transition:transform .2s cubic-bezier(.16,1,.3,1)}\nli a:hover > span[aria-hidden] svg,li a:focus-visible > span[aria-hidden] svg{transform:translateX(3px)}\n.kn-card{transition:transform .25s cubic-bezier(.16,1,.3,1),box-shadow .25s ease-out}\n.kn-card:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(14,42,59,0.10)}\nbutton[aria-expanded="true"] + *{animation:kn-open .3s cubic-bezier(.16,1,.3,1)}\n@keyframes kn-open{from{opacity:0;transform:translateY(-4px)}}\n[data-rv="pre"]{opacity:0;transform:translateY(14px)}\n[data-rv="in"]{opacity:1;transform:none;transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}\n@media (prefers-reduced-motion:reduce){[data-rv]{opacity:1 !important;transform:none !important}.kn-card:hover,.kn-btn:hover,.kn-ghost:hover,li a:hover > span[aria-hidden] svg{transform:none !important}button[aria-expanded="true"] + *{animation:none}}';

class Logic extends DCLogic {
  // Sections below the fold ease in as they enter. Visible by default; skipped under reduced motion.
  knReveal() {
    if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;
    var els = [].slice.call(document.querySelectorAll('[data-rv]'));
    var io = (this.knIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.setAttribute('data-rv', 'in');
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px' },
    ));
    els.forEach(function (el) {
      if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
        el.setAttribute('data-rv', 'pre');
        io.observe(el);
      }
    });
  }

  componentDidMount() {
    this.knReveal();
  }
  componentWillUnmount() {
    if (this.knIo) this.knIo.disconnect();
  }
  renderVals() {
    return {};
  }
}

export default class CostaQuienLoHace extends Logic {
  render() {
    const v = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />{' '}
        <div
          style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            color: '#0E2A3B',
            background: '#F9F4F0',
            width: '100%',
            overflowX: 'hidden',
          }}
        >
          {' '}
          <a href={link('#contenido')} className={'skip'}>
            {'Saltar al contenido'}
          </a>{' '}
          <CostaEncabezado />{' '}
          <section id={'contenido'} className={'wrap'} style={{ paddingTop: '88px' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px 72px' }}>
              {' '}
              <div
                style={{ flex: '1.3 1 440px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                {' '}
                <h1
                  style={{
                    margin: '0',
                    fontSize: 'clamp(38px,5.4vw,65px)',
                    lineHeight: '1.04',
                    letterSpacing: '-0.03em',
                    fontWeight: '600',
                  }}
                >
                  {'Kensa empezó del otro lado '}
                  <span style={{ color: '#18648A' }}>
                    {'del mostrador'}
                    <span style={{ color: '#E0987A' }}>{'.'}</span>
                  </span>
                </h1>{' '}
                <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#4B5D69', maxWidth: '560px' }}>
                  {
                    'Soy Emiliano Rodríguez. Trabajé como técnico de atención al paciente y vi a recepción escribir el mismo nombre una y otra vez: en la historia clínica, el consentimiento, el aviso de privacidad y la hoja que faltaba.'
                  }
                </p>{' '}
              </div>{' '}
              <figure
                style={{
                  flex: '1 1 320px',
                  minWidth: '0',
                  maxWidth: '420px',
                  margin: '0',
                  background: '#F2E9E5',
                  borderRadius: '28px',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {' '}
                <img
                  src={'/img/emiliano-rodriguez.webp'}
                  width={'640'}
                  height={'640'}
                  alt={'Emiliano Rodríguez, fundador de Kensa'}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    borderRadius: '18px',
                    background: '#FFFFFF',
                  }}
                />{' '}
                <figcaption style={{ padding: '0 8px 6px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {' '}
                  <span style={{ fontSize: '16px', fontWeight: '600' }}>{'Emiliano Rodríguez'}</span>{' '}
                  <span style={{ fontSize: '14px', color: '#4B5D69' }}>
                    {'Fundador · Ex técnico de atención al paciente'}
                  </span>{' '}
                </figcaption>{' '}
              </figure>{' '}
            </div>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '112px' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 72px' }}>
              {' '}
              <h2
                style={{
                  flex: '1 1 300px',
                  margin: '0',
                  fontSize: 'clamp(28px,3.4vw,40px)',
                  lineHeight: '1.12',
                  letterSpacing: '-0.03em',
                  fontWeight: '600',
                }}
              >
                {'Lo frustrante no era lo clínico'}
                <span style={{ color: '#E0987A' }}>{'.'}</span>
              </h2>{' '}
              <div
                style={{
                  flex: '1.6 1 480px',
                  minWidth: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  fontSize: '17px',
                  lineHeight: '1.65',
                  color: '#4B5D69',
                }}
              >
                {' '}
                <p style={{ margin: '0' }}>
                  {
                    'Era la repetición, las correcciones a mano y el tiempo perdido buscando el documento correcto. Nada de eso mejora la atención, y todo le quita tiempo al equipo que está frente al paciente.'
                  }
                </p>{' '}
                <p style={{ margin: '0' }}>
                  {
                    'Hoy estudio ciencias computacionales y construyo Kensa desde la frontera entre El Paso y Ciudad Juárez, hablando directo con los consultorios que lo van a usar.'
                  }
                </p>{' '}
              </div>{' '}
            </div>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '112px' }}>
            {' '}
            <h2
              style={{
                margin: '0',
                fontSize: 'clamp(30px,3.6vw,47px)',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
                fontWeight: '600',
              }}
            >
              {'Una empresa chica. '}
              <span style={{ color: '#18648A' }}>
                {'La responsabilidad completa'}
                <span style={{ color: '#E0987A' }}>{'.'}</span>
              </span>
            </h2>{' '}
            <p style={{ margin: '14px 0 0', fontSize: '16px', lineHeight: '1.6', color: '#4B5D69', maxWidth: '560px' }}>
              {'Estar al principio significa que la conversación con cada consultorio importa más, no menos.'}
            </p>{' '}
            <div
              style={{
                marginTop: '40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '12px',
              }}
            >
              {' '}
              <div
                className={'kn-card'}
                style={{
                  background: '#F2E9E5',
                  borderRadius: '20px',
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {' '}
                <span style={{ fontSize: '13px', fontWeight: '500', color: '#5F707B' }}>{'Escuchar'}</span>{' '}
                <span style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '-0.01em' }}>
                  {'Hablo antes de vender.'}
                </span>{' '}
                <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#4B5D69' }}>
                  {
                    'Empiezo por entender qué llena tu recepción, dónde se repiten los datos y qué parte del flujo de verdad estorba.'
                  }
                </span>{' '}
              </div>{' '}
              <div
                className={'kn-card'}
                style={{
                  background: '#F2E9E5',
                  borderRadius: '20px',
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {' '}
                <span style={{ fontSize: '13px', fontWeight: '500', color: '#5F707B' }}>{'Claridad'}</span>{' '}
                <span style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '-0.01em' }}>
                  {'Digo lo que Kensa no hace.'}
                </span>{' '}
                <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#4B5D69' }}>
                  {'No prometo un expediente clínico completo ni funciones que todavía no existen.'}
                </span>{' '}
              </div>{' '}
              <div
                className={'kn-card'}
                style={{
                  background: '#F2E9E5',
                  borderRadius: '20px',
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {' '}
                <span style={{ fontSize: '13px', fontWeight: '500', color: '#5F707B' }}>{'Cercanía'}</span>{' '}
                <span style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '-0.01em' }}>
                  {'En español y por WhatsApp.'}
                </span>{' '}
                <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#4B5D69' }}>
                  {'Hablas con la persona que construye el producto, en el canal donde tu consultorio ya trabaja.'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </section>{' '}
          <div data-rv={'1'} className={'wrap'} style={{ paddingTop: '112px' }}>
            {' '}
            <section
              style={{
                background: '#0E2A3B',
                color: '#F7F2EF',
                borderRadius: '32px',
                padding: 'clamp(32px,5vw,56px)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '32px 64px',
              }}
            >
              {' '}
              <div style={{ flex: '1 1 340px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {' '}
                <span style={{ fontSize: '13px', fontWeight: '500', color: '#9AAAB5' }}>
                  {'Por qué empezar aquí'}
                </span>{' '}
                <h2
                  style={{
                    margin: '0',
                    fontSize: 'clamp(28px,3.4vw,40px)',
                    lineHeight: '1.12',
                    letterSpacing: '-0.03em',
                    fontWeight: '600',
                  }}
                >
                  {'Una tarea pequeña quita mucha fricción'}
                  <span style={{ color: '#E0987A' }}>{'.'}</span>
                </h2>{' '}
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#D6CBC4' }}>
                  {
                    'Kensa empezó con una tarea concreta: que el mismo dato no se escriba en cada hoja de la visita. De ahí creció al resto del flujo de tu recepción.'
                  }
                </p>{' '}
              </div>{' '}
              <div
                style={{
                  flex: '1 1 340px',
                  minWidth: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  borderTop: '1px solid #4B5D69',
                  paddingTop: '20px',
                }}
              >
                {' '}
                <span style={{ fontSize: '13px', fontWeight: '500', color: '#9AAAB5' }}>
                  {'Construido desde la frontera'}
                </span>{' '}
                <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.55', color: '#F7F2EF' }}>
                  {
                    'Entre dos ciudades y dos sistemas de salud, con una sola obsesión: respetar cómo trabaja el equipo que está frente al paciente.'
                  }
                </p>{' '}
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <section
            data-rv={'1'}
            className={'wrap'}
            style={{
              paddingTop: '112px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {' '}
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#5F707B' }}>{'Te contesta Emiliano'}</span>{' '}
            <h2
              style={{
                margin: '12px 0 0',
                fontSize: 'clamp(30px,4vw,48px)',
                lineHeight: '1.08',
                letterSpacing: '-0.03em',
                fontWeight: '600',
                maxWidth: '720px',
              }}
            >
              {'Cuéntame cómo llenan sus formatos hoy'}
              <span style={{ color: '#E0987A' }}>{'.'}</span>
            </h2>{' '}
            <p style={{ margin: '16px 0 0', fontSize: '16px', lineHeight: '1.6', color: '#4B5D69', maxWidth: '520px' }}>
              {'Quince minutos por WhatsApp para entender el problema real de tu clínica, sin presentación de ventas.'}
            </p>{' '}
            <div
              style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}
            >
              {' '}
              <a
                className={'kn-btn'}
                href={link('https://wa.me/message/3JRJUFH6UNNLA1')}
                style={{
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '15px 26px',
                  borderRadius: '999px',
                  background: '#18648A',
                  color: '#FFFFFF',
                }}
              >
                {'Escríbeme por WhatsApp'}
              </a>{' '}
              <a
                className={'kn-ghost'}
                href={link('mailto:contacto@holakensa.com')}
                style={{
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '15px 26px',
                  borderRadius: '999px',
                  border: '1px solid #D6CBC4',
                  color: '#0E2A3B',
                }}
              >
                {'contacto@holakensa.com'}
              </a>{' '}
            </div>{' '}
          </section>{' '}
          <CostaPiePagina />{' '}
        </div>{' '}
      </>
    );
  }
}
