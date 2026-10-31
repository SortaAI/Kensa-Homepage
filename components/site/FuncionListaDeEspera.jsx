'use client';
// Generated from the design canvas, Costa palette (Funcion-ListaDeEspera-7vlu.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import { FAQ_LISTA_DE_ESPERA } from '@/lib/faqs';
import CostaEncabezado from './CostaEncabezado';
import CostaPiePagina from './CostaPiePagina';

const CSS =
  'body{margin:0;background:#F9F4F0}\n:root{color-scheme:light}\n[id]{scroll-margin-top:24px}\nh1,h2,h3{text-wrap:balance}\np{text-wrap:pretty}\na,button,input,label{touch-action:manipulation;-webkit-tap-highlight-color:rgba(14,42,59,0.08)}\na,button{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out}\nnav a:not([style*="background: #18648A"]):hover{text-decoration:underline}\n:is(a,button)[style*="background: #18648A"]:hover{background:#114E6C !important}\na[style*="border: 1px solid #D6CBC4"]:hover,a[style*="border: 1px solid #E3D9D3"]:hover{background:#F2E9E5 !important;border-color:#0E2A3B !important}\nbutton[aria-expanded]:hover{color:#4B5D69 !important}\nbutton[aria-pressed="false"]:hover{background:#E8DFDA !important}\nli a:hover > span > span:first-child{text-decoration:underline}\n.skip{position:absolute;left:-9999px;top:12px;z-index:10;background:#0E2A3B;color:#FFFFFF;padding:10px 16px;border-radius:999px;text-decoration:none}\n.skip:focus{left:16px}\n@media (prefers-reduced-motion:reduce){*{transition:none !important}}\na{color:#0E2A3B;text-underline-offset:3px}a:hover{color:#4B5D69}\n*{box-sizing:border-box}\n::selection{background:#0E2A3B;color:#FFFFFF}\n:focus-visible{outline:2px solid #0E2A3B;outline-offset:3px;border-radius:6px}\nbutton{font:inherit;cursor:pointer}\n.wrap{width:100%;max-width:1200px;margin:0 auto;padding-left:clamp(16px,4vw,40px);padding-right:clamp(16px,4vw,40px)}\n@media (max-width:820px){.hide-sm{display:none !important}.navlinks{display:none !important}}\n.kn-item:hover,.kn-trigger:hover{background:#F2E9E5 !important}\n.show-sm{display:none}\n@media (max-width:820px){.navlinks,.hide-sm{display:none !important}.show-sm{display:flex !important}}\n/* motion */\n.kn-btn,.kn-ghost{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out,transform .2s cubic-bezier(.16,1,.3,1),box-shadow .2s ease-out}\n.kn-btn:hover{transform:translateY(-1px);box-shadow:0 10px 22px rgba(24,100,138,0.22)}\n.kn-btn:active{transform:translateY(0);box-shadow:0 2px 6px rgba(24,100,138,0.18);transition-duration:.08s}\n.kn-ghost:hover{transform:translateY(-1px);box-shadow:0 8px 18px rgba(14,42,59,0.08)}\nli a > span[aria-hidden] svg{transition:transform .2s cubic-bezier(.16,1,.3,1)}\nli a:hover > span[aria-hidden] svg,li a:focus-visible > span[aria-hidden] svg{transform:translateX(3px)}\n.kn-card{transition:transform .25s cubic-bezier(.16,1,.3,1),box-shadow .25s ease-out}\n.kn-card:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(14,42,59,0.10)}\nbutton[aria-expanded="true"] + *{animation:kn-open .3s cubic-bezier(.16,1,.3,1)}\n@keyframes kn-open{from{opacity:0;transform:translateY(-4px)}}\n[data-rv="pre"]{opacity:0;transform:translateY(14px)}\n[data-rv="in"]{opacity:1;transform:none;transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}\n@media (prefers-reduced-motion:reduce){[data-rv]{opacity:1 !important;transform:none !important}.kn-card:hover,.kn-btn:hover,.kn-ghost:hover,li a:hover > span[aria-hidden] svg{transform:none !important}button[aria-expanded="true"] + *{animation:none}}';

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
  constructor(props) {
    super(props);
    this.state = { faq: 0 };
  }
  renderVals() {
    var self = this;
    var data = FAQ_LISTA_DE_ESPERA;
    var faqs = data.map(function (f, i) {
      var open = self.state.faq === i;
      return {
        q: f[0],
        a: f[1],
        open: open,
        sign: open ? '−' : '+',
        pick: function () {
          self.setState({ faq: open ? -1 : i });
        },
      };
    });
    return { faqs: faqs };
  }
}

export default class FuncionListaDeEspera extends Logic {
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
          <div id={'contenido'} className={'wrap'} style={{ paddingTop: '16px' }}>
            {' '}
            <section
              style={{
                background: '#F2E9E5',
                borderRadius: '32px',
                padding: 'clamp(32px,5vw,72px)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '48px',
              }}
            >
              {' '}
              <div style={{ flex: '1 1 420px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {' '}
                <nav aria-label={'Ruta'} style={{ fontSize: '14px', color: '#4B5D69' }}>
                  <a href={link('Costa-Funciones-cs02.dc.html')} style={{ color: '#4B5D69' }}>
                    {'Funciones'}
                  </a>
                  {' / Recupera / '}
                  <span aria-current={'page'} style={{ color: '#0E2A3B', fontWeight: '500' }}>
                    {'Lista de espera'}
                  </span>
                </nav>{' '}
                <h1
                  style={{
                    margin: '0',
                    fontSize: 'clamp(36px,5vw,62px)',
                    lineHeight: '1.04',
                    letterSpacing: '-0.035em',
                    fontWeight: '600',
                    textWrap: 'balance',
                  }}
                >
                  {'Una cancelación ya no es una silla vacía'}
                  <span style={{ color: '#E0987A' }}>{'.'}</span>
                </h1>{' '}
                <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#4B5D69', maxWidth: '460px' }}>
                  {'Ofrece el horario a quien quiere venir antes. Uno por uno, por WhatsApp.'}
                </p>{' '}
                <a
                  className={'kn-btn'}
                  href={link('Costa-Contacto-cs06.dc.html')}
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '8px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '16px',
                    padding: '16px 28px',
                    borderRadius: '999px',
                    background: '#18648A',
                    color: '#FFFFFF',
                  }}
                >
                  {'Agenda una demostración'}
                </a>{' '}
              </div>{' '}
              <div style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'center' }}>
                {' '}
                <div style={{ position: 'relative', width: '100%', maxWidth: '470px' }}>
                  <img
                    src={'/img/iphone-oferta-recorte.webp'}
                    width={'543'}
                    height={'1117'}
                    loading={'lazy'}
                    alt={'Al abrir el enlace, la oferta: se liberó un horario para ti'}
                    style={{
                      display: 'block',
                      width: '56%',
                      marginLeft: 'auto',
                      height: 'auto',
                      filter: 'drop-shadow(0 24px 40px rgba(14,42,59,0.18))',
                    }}
                  />
                  <img
                    src={'/img/iphone-whatsapp-oferta.webp'}
                    width={'1086'}
                    height={'2234'}
                    fetchPriority={'high'}
                    alt={'Mensaje de WhatsApp con la oferta del horario y su enlace, que vence en 10 minutos'}
                    style={{
                      position: 'absolute',
                      left: '0',
                      top: '9%',
                      width: '58%',
                      height: 'auto',
                      filter: 'drop-shadow(0 28px 44px rgba(14,42,59,0.26))',
                    }}
                  />
                </div>{' '}
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '112px' }}>
            {' '}
            <h2
              style={{ margin: '0', fontSize: 'clamp(28px,3.4vw,42px)', letterSpacing: '-0.03em', fontWeight: '600' }}
            >
              {'Así se recupera un horario'}
              <span style={{ color: '#E0987A' }}>{'.'}</span>
            </h2>{' '}
            <ol
              style={{
                listStyle: 'none',
                margin: '40px 0 0',
                padding: '0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0 24px',
              }}
            >
              {' '}
              <li
                style={{
                  borderTop: '2px solid #0E2A3B',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#5F707B' }}>{'1'}</span>
                <span style={{ fontSize: '17px', fontWeight: '500' }}>{'Alguien cancela'}</span>
                <span style={{ fontSize: '14px', lineHeight: '1.55', color: '#4B5D69' }}>
                  {'Se abre un horario por cubrir.'}
                </span>
              </li>{' '}
              <li
                style={{
                  borderTop: '2px solid #0E2A3B',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#5F707B' }}>{'2'}</span>
                <span style={{ fontSize: '17px', fontWeight: '500' }}>{'Tú eliges el orden'}</span>
                <span style={{ fontSize: '14px', lineHeight: '1.55', color: '#4B5D69' }}>
                  {'Hasta 5 pacientes de tu lista. Nada de envíos masivos.'}
                </span>
              </li>{' '}
              <li
                style={{
                  borderTop: '2px solid #0E2A3B',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#5F707B' }}>{'3'}</span>
                <span style={{ fontSize: '17px', fontWeight: '500' }}>{'Una oferta a la vez'}</span>
                <span style={{ fontSize: '14px', lineHeight: '1.55', color: '#4B5D69' }}>
                  {'Cada una dura 10 minutos, solo en horario de la clínica.'}
                </span>
              </li>{' '}
              <li
                style={{
                  borderTop: '2px solid #0E2A3B',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#5F707B' }}>{'4'}</span>
                <span style={{ fontSize: '17px', fontWeight: '500' }}>{'Queda agendado'}</span>
                <span style={{ fontSize: '14px', lineHeight: '1.55', color: '#4B5D69' }}>
                  {'Si tenía una cita después, ese horario también se libera.'}
                </span>
              </li>{' '}
            </ol>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '112px' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 64px', alignItems: 'center' }}>
              {' '}
              <div style={{ flex: '1 1 340px', minWidth: '0' }}>
                {' '}
                <h2
                  style={{
                    margin: '0',
                    fontSize: 'clamp(28px,3.4vw,42px)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.03em',
                    fontWeight: '600',
                  }}
                >
                  {'Tú decides quién y en qué orden'}
                  <span style={{ color: '#E0987A' }}>{'.'}</span>
                </h2>{' '}
                <p
                  style={{
                    margin: '16px 0 0',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#4B5D69',
                    maxWidth: '440px',
                  }}
                >
                  {
                    'Kensa te muestra quién de tu lista puede venir a esa hora y por qué. Tú eliges a quién ofrecerle el horario. Sin envíos masivos y sin carreras entre pacientes.'
                  }
                </p>{' '}
                <ul style={{ margin: '24px 0 0', padding: '0', listStyle: 'none' }}>
                  {' '}
                  <li style={{ borderTop: '1px solid #E8DFDA', padding: '14px 0', fontSize: '15px' }}>
                    {'Solo en el horario de tu clínica'}
                  </li>{' '}
                  <li style={{ borderTop: '1px solid #E8DFDA', padding: '14px 0', fontSize: '15px' }}>
                    {'Detienes las ofertas y liberas el horario cuando quieras'}
                  </li>{' '}
                  <li
                    style={{
                      borderTop: '1px solid #E8DFDA',
                      borderBottom: '1px solid #E8DFDA',
                      padding: '14px 0',
                      fontSize: '15px',
                    }}
                  >
                    {'El paciente no ve datos clínicos, solo la clínica, la hora y la duración'}
                  </li>{' '}
                </ul>{' '}
              </div>{' '}
              <div
                style={{
                  flex: '1.2 1 440px',
                  minWidth: '0',
                  background: '#F2E9E5',
                  borderRadius: '28px',
                  padding: 'clamp(20px,3vw,36px)',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {' '}
                <img
                  src={'/img/pantalla-ofrecer-horario.webp'}
                  width={'612'}
                  height={'1311'}
                  loading={'lazy'}
                  alt={'Ofrecer un horario libre a pacientes de la lista de espera, en orden'}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    borderRadius: '14px',
                    border: '1px solid #DED3CD',
                    boxShadow: '0 18px 40px rgba(14,42,59,0.14)',
                    background: '#FFFFFF',
                    maxWidth: '380px',
                  }}
                />{' '}
              </div>{' '}
            </div>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '112px' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '40px 64px', alignItems: 'center' }}>
              {' '}
              <div
                style={{
                  flex: '1.2 1 440px',
                  minWidth: '0',
                  background: '#F2E9E5',
                  borderRadius: '28px',
                  padding: 'clamp(20px,3vw,36px)',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                {' '}
                <dl
                  style={{
                    width: '100%',
                    maxWidth: '420px',
                    margin: '0',
                    background: '#FFFFFF',
                    border: '1px solid #DED3CD',
                    borderRadius: '16px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 18px 40px rgba(14,42,59,0.12)',
                    fontSize: '13px',
                  }}
                >
                  {' '}
                  <div style={{ fontWeight: '600', fontSize: '15px', paddingBottom: '10px' }}>
                    {'Lista de espera · Luis Martínez'}
                  </div>{' '}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                      borderTop: '1px solid #EEE6E2',
                      padding: '10px 0',
                    }}
                  >
                    <dt style={{ color: '#5F707B' }}>{'Consentimiento por WhatsApp'}</dt>
                    <dd style={{ margin: '0' }}>{'Aceptado'}</dd>
                  </div>{' '}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                      borderTop: '1px solid #EEE6E2',
                      padding: '10px 0',
                    }}
                  >
                    <dt style={{ color: '#5F707B' }}>{'Días'}</dt>
                    <dd style={{ margin: '0' }}>{'Lunes a jueves'}</dd>
                  </div>{' '}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                      borderTop: '1px solid #EEE6E2',
                      padding: '10px 0',
                    }}
                  >
                    <dt style={{ color: '#5F707B' }}>{'Horario'}</dt>
                    <dd style={{ margin: '0' }}>{'Tardes'}</dd>
                  </div>{' '}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                      borderTop: '1px solid #EEE6E2',
                      padding: '10px 0',
                    }}
                  >
                    <dt style={{ color: '#5F707B' }}>{'Aviso mínimo'}</dt>
                    <dd style={{ margin: '0' }}>{'1 día'}</dd>
                  </div>{' '}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                      borderTop: '1px solid #EEE6E2',
                      padding: '10px 0',
                    }}
                  >
                    <dt style={{ color: '#5F707B' }}>{'Cita actual'}</dt>
                    <dd style={{ margin: '0' }}>{'Vie · 5:00 p.m.'}</dd>
                  </div>{' '}
                </dl>{' '}
              </div>{' '}
              <div style={{ flex: '1 1 340px', minWidth: '0' }}>
                {' '}
                <h2
                  style={{
                    margin: '0',
                    fontSize: 'clamp(28px,3.4vw,42px)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.03em',
                    fontWeight: '600',
                  }}
                >
                  {'Cada paciente, con lo que necesitas saber'}
                  <span style={{ color: '#E0987A' }}>{'.'}</span>
                </h2>{' '}
                <p
                  style={{
                    margin: '16px 0 0',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#4B5D69',
                    maxWidth: '440px',
                  }}
                >
                  {
                    'Cada paciente entra con su consentimiento, los días y horas en que puede venir y con cuánto aviso. Si ya tiene una cita, la ligas: al aceptar, se adelanta en lugar de duplicarse.'
                  }
                </p>{' '}
              </div>{' '}
            </div>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '112px' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 64px' }}>
              {' '}
              <h2
                style={{
                  flex: '1 1 300px',
                  margin: '0',
                  fontSize: 'clamp(28px,3.4vw,42px)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: '600',
                }}
              >
                {'Ves lo que te regresa'}
                <span style={{ color: '#E0987A' }}>{'.'}</span>
              </h2>{' '}
              <div style={{ flex: '1.4 1 420px' }}>
                {' '}
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#4B5D69' }}>
                  {
                    'Citas recuperadas, ofertas enviadas, tasa de aceptación y minutos promedio para cubrir un horario, en tu panel.'
                  }
                </p>{' '}
                <p style={{ margin: '16px 0 0', fontSize: '13px', color: '#5F707B' }}>
                  {'“Recuperada” significa agendada, no que el paciente asistió.'}
                </p>{' '}
                <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '14px' }}>
                  <span style={{ color: '#5F707B', alignSelf: 'center' }}>{'Se conecta con'}</span>
                  <a
                    className={'kn-ghost'}
                    href={link('Costa-Funciones-cs02.dc.html#agenda')}
                    style={{
                      textDecoration: 'none',
                      border: '1px solid #E3D9D3',
                      borderRadius: '999px',
                      padding: '8px 14px',
                    }}
                  >
                    {'Agenda'}
                  </a>
                  <a
                    className={'kn-ghost'}
                    href={link('Costa-Funciones-cs02.dc.html#prepara')}
                    style={{
                      textDecoration: 'none',
                      border: '1px solid #E3D9D3',
                      borderRadius: '999px',
                      padding: '8px 14px',
                    }}
                  >
                    {'Preparar visitas'}
                  </a>
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '96px' }}>
            {' '}
            <div style={{ maxWidth: '820px' }}>
              {' '}
              {(v.faqs || []).map((f, $index) => (
                <React.Fragment key={$index}>
                  {' '}
                  <div style={{ borderTop: '1px solid #E8DFDA' }}>
                    {' '}
                    <button
                      type={'button'}
                      onClick={f?.pick}
                      aria-expanded={f?.open}
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: '0',
                        padding: '20px 0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '16px',
                        textAlign: 'left',
                        color: '#0E2A3B',
                        fontSize: '17px',
                        fontWeight: '500',
                      }}
                    >
                      {f?.q}
                      <span aria-hidden={'true'} style={{ color: '#5F707B' }}>
                        {f?.sign}
                      </span>
                    </button>{' '}
                    <p
                      hidden={!f?.open}
                      style={{
                        margin: '0',
                        padding: '0 0 20px',
                        fontSize: '15px',
                        lineHeight: '1.6',
                        color: '#4B5D69',
                      }}
                    >
                      {f?.a}
                    </p>{' '}
                  </div>{' '}
                </React.Fragment>
              ))}{' '}
            </div>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '72px' }}>
            <div style={{ maxWidth: '760px' }}>
              <h2 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: '600' }}>{'Guías relacionadas'}</h2>
              <ul style={{ margin: '0', padding: '0', listStyle: 'none' }}>
                {[
                  [
                    'Cómo cubrir cancelaciones de citas con una lista de espera por WhatsApp',
                    'cubrir-cancelaciones-citas-medicas',
                  ],
                  [
                    'Cómo reducir las inasistencias a citas médicas en tu clínica',
                    'reducir-inasistencias-citas-medicas',
                  ],
                  ['WhatsApp Business API para clínicas: qué permite y qué no', 'whatsapp-business-api-clinicas'],
                ].map(([t, g]) => (
                  <li key={g} style={{ borderTop: '1px solid #E8DFDA' }}>
                    <a
                      href={'/recursos/' + g + '/'}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '16px',
                        padding: '14px 0',
                        color: '#0E2A3B',
                        textDecoration: 'none',
                        fontSize: '15px',
                      }}
                    >
                      <span>{t}</span>
                      <span aria-hidden={'true'} style={{ color: '#18648A' }}>
                        {'→'}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>{' '}
          <section
            data-rv={'1'}
            className={'wrap'}
            style={{
              paddingTop: '112px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            {' '}
            <h2
              style={{ margin: '0', fontSize: 'clamp(28px,3.6vw,42px)', letterSpacing: '-0.03em', fontWeight: '600' }}
            >
              {'Llena tu próximo hueco'}
              <span style={{ color: '#E0987A' }}>{'.'}</span>
            </h2>{' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {' '}
              <a
                className={'kn-btn'}
                href={link('Costa-Contacto-cs06.dc.html')}
                style={{
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '16px 28px',
                  borderRadius: '999px',
                  background: '#18648A',
                  color: '#FFFFFF',
                }}
              >
                {'Agenda una demostración'}
              </a>{' '}
              <a
                className={'kn-ghost'}
                href={link('Costa-Funciones-cs02.dc.html')}
                style={{
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '16px 28px',
                  borderRadius: '999px',
                  border: '1px solid #D6CBC4',
                }}
              >
                {'Todas las funciones'}
              </a>{' '}
            </div>{' '}
          </section>{' '}
          <CostaPiePagina />{' '}
        </div>{' '}
      </>
    );
  }
}
