'use client';
// Generated from the design canvas, Costa palette (Costa-Precios-cs04.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import { FAQ_PRECIOS } from '@/lib/faqs';
import CostaEncabezado from './CostaEncabezado';
import CostaPiePagina from './CostaPiePagina';

const CSS =
  'body{margin:0;background:#F9F4F0}\n:root{color-scheme:light}\n[id]{scroll-margin-top:24px}\nh1,h2,h3{text-wrap:balance}\np{text-wrap:pretty}\na,button,input,label{touch-action:manipulation;-webkit-tap-highlight-color:rgba(14,42,59,0.08)}\na,button{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out}\nnav a:not([style*="background: #18648A"]):hover{text-decoration:underline}\n:is(a,button)[style*="background: #18648A"]:hover{background:#114E6C !important}\na[style*="border: 1px solid #D6CBC4"]:hover{background:#F2E9E5 !important;border-color:#0E2A3B !important}\nbutton[aria-expanded]:hover{color:#4B5D69 !important}\n.skip{position:absolute;left:-9999px;top:12px;z-index:10;background:#0E2A3B;color:#FFFFFF;padding:10px 16px;border-radius:999px;text-decoration:none}\n.skip:focus{left:16px}\n@media (prefers-reduced-motion:reduce){*{transition:none !important}}\n::selection{background:#0E2A3B;color:#FFFFFF}\n:focus-visible{outline:2px solid #0E2A3B;outline-offset:3px;border-radius:6px}\ninput{caret-color:#0E2A3B}\na{color:#0E2A3B}a:hover{color:#4B5D69}\n*{box-sizing:border-box}\nbutton{font:inherit;cursor:pointer}\n.wrap{width:100%;max-width:1200px;margin:0 auto;padding-left:clamp(16px,4vw,40px);padding-right:clamp(16px,4vw,40px)}\n@media (max-width:820px){.hide-sm{display:none !important}.navlinks{display:none !important}}\n.kn-item:hover,.kn-trigger:hover{background:#F2E9E5 !important}\n.show-sm{display:none}\n@media (max-width:820px){.navlinks,.hide-sm{display:none !important}.show-sm{display:flex !important}}\n/* motion */\n.kn-btn,.kn-ghost{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out,transform .2s cubic-bezier(.16,1,.3,1),box-shadow .2s ease-out}\n.kn-btn:hover{transform:translateY(-1px);box-shadow:0 10px 22px rgba(24,100,138,0.22)}\n.kn-btn:active{transform:translateY(0);box-shadow:0 2px 6px rgba(24,100,138,0.18);transition-duration:.08s}\n.kn-ghost:hover{transform:translateY(-1px);box-shadow:0 8px 18px rgba(14,42,59,0.08)}\nli a > span[aria-hidden] svg{transition:transform .2s cubic-bezier(.16,1,.3,1)}\nli a:hover > span[aria-hidden] svg,li a:focus-visible > span[aria-hidden] svg{transform:translateX(3px)}\n.kn-card{transition:transform .25s cubic-bezier(.16,1,.3,1),box-shadow .25s ease-out}\n.kn-card:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(14,42,59,0.10)}\nbutton[aria-expanded="true"] + *{animation:kn-open .3s cubic-bezier(.16,1,.3,1)}\n@keyframes kn-open{from{opacity:0;transform:translateY(-4px)}}\n[data-rv="pre"]{opacity:0;transform:translateY(14px)}\n[data-rv="in"]{opacity:1;transform:none;transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}\n@media (prefers-reduced-motion:reduce){[data-rv]{opacity:1 !important;transform:none !important}.kn-card:hover,.kn-btn:hover,.kn-ghost:hover,li a:hover > span[aria-hidden] svg{transform:none !important}button[aria-expanded="true"] + *{animation:none}}';

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
    this.state = { faq: 0, fee: '', cancels: '', share: 10, patients: '', mins: '' };
  }
  renderVals() {
    var self = this,
      st = this.state;
    var hf = "'Poppins', system-ui, sans-serif";
    var data = FAQ_PRECIOS;
    var faqs = data.map(function (f, i) {
      var open = st.faq === i;
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
    var fee = parseFloat(st.fee),
      cancels = parseFloat(st.cancels),
      patients = parseFloat(st.patients),
      mins = parseFloat(st.mins);
    var revOut = '—',
      hoursOut = '—';
    if (fee > 0 && cancels > 0)
      revOut = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(
        Math.round(fee * cancels * (st.share / 100) * 4.33),
      );
    if (patients > 0 && mins > 0)
      hoursOut = new Intl.NumberFormat('es-MX').format(Math.round((patients * mins * 4.33) / 60)) + ' h';
    return {
      hf: hf,
      faqs: faqs,
      fee: st.fee,
      cancels: st.cancels,
      share: st.share,
      patients: st.patients,
      mins: st.mins,
      shareLabel: st.share + '%',
      setFee: function (e) {
        self.setState({ fee: e.target.value });
      },
      setCancels: function (e) {
        self.setState({ cancels: e.target.value });
      },
      setShare: function (e) {
        self.setState({ share: parseInt(e.target.value, 10) || 0 });
      },
      setPatients: function (e) {
        self.setState({ patients: e.target.value });
      },
      setMins: function (e) {
        self.setState({ mins: e.target.value });
      },
      revOut: revOut,
      hoursOut: hoursOut,
    };
  }
}

export default class CostaPrecios extends Logic {
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
            <h1
              style={{
                margin: '0',
                textAlign: 'center',
                fontSize: 'clamp(38px,5.6vw,65px)',
                lineHeight: '1.04',
                letterSpacing: '-0.03em',
                fontWeight: '600',
              }}
            >
              {'Precio por sede. '}
              <span style={{ color: '#18648A' }}>
                {'Sin costos ocultos'}
                <span style={{ color: '#E0987A' }}>{'.'}</span>
              </span>
            </h1>{' '}
            <div
              style={{
                marginTop: '56px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '16px',
              }}
            >
              {' '}
              <div
                className={'kn-card'}
                style={{
                  border: '1px solid #E8DFDA',
                  borderRadius: '24px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {' '}
                <span style={{ fontSize: '15px', fontWeight: '600' }}>{'Una sede'}</span>{' '}
                <div>
                  <span style={{ fontSize: '30px', fontWeight: '600', letterSpacing: '-0.02em', lineHeight: '1.15' }}>
                    {'Precio por sede'}
                  </span>
                  <span style={{ display: 'block', marginTop: '6px', fontSize: '13px', color: '#4B5D69' }}>
                    {'MXN al mes + IVA. Te lo damos en la demo, por escrito.'}
                  </span>
                </div>{' '}
                <span style={{ fontSize: '14px', color: '#4B5D69' }}>
                  {'Para un consultorio o clínica con una sola ubicación.'}
                </span>{' '}
                <ul
                  style={{
                    margin: '0',
                    padding: '16px 0 0',
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    borderTop: '1px solid #DED3CD',
                  }}
                >
                  <li style={{ display: 'flex', gap: '10px', fontSize: '14px', lineHeight: '1.45' }}>
                    <svg
                      aria-hidden={'true'}
                      width={'18'}
                      height={'18'}
                      viewBox={'0 0 24 24'}
                      fill={'none'}
                      stroke={'currentColor'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                      style={{ flexShrink: '0', marginTop: '1px' }}
                    >
                      <path d={'M20 6 9 17l-5-5'} />
                    </svg>
                    {'Todo Kensa, sin módulos aparte'}
                  </li>
                  <li style={{ display: 'flex', gap: '10px', fontSize: '14px', lineHeight: '1.45' }}>
                    <svg
                      aria-hidden={'true'}
                      width={'18'}
                      height={'18'}
                      viewBox={'0 0 24 24'}
                      fill={'none'}
                      stroke={'currentColor'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                      style={{ flexShrink: '0', marginTop: '1px' }}
                    >
                      <path d={'M20 6 9 17l-5-5'} />
                    </svg>
                    {'Todo tu equipo dentro de la sede'}
                  </li>
                  <li style={{ display: 'flex', gap: '10px', fontSize: '14px', lineHeight: '1.45' }}>
                    <svg
                      aria-hidden={'true'}
                      width={'18'}
                      height={'18'}
                      viewBox={'0 0 24 24'}
                      fill={'none'}
                      stroke={'currentColor'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                      style={{ flexShrink: '0', marginTop: '1px' }}
                    >
                      <path d={'M20 6 9 17l-5-5'} />
                    </svg>
                    {'Citas incluidas por sede: te las confirmamos por escrito antes de empezar'}
                  </li>
                </ul>{' '}
                <a
                  className={'kn-ghost'}
                  href={link('Costa-Contacto-cs06.dc.html')}
                  style={{
                    marginTop: 'auto',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontSize: '15px',
                    fontWeight: '500',
                    padding: '13px',
                    borderRadius: '999px',
                    border: '1px solid #D6CBC4',
                  }}
                >
                  {'Agenda una demo'}
                </a>{' '}
              </div>{' '}
              <div
                className={'kn-card'}
                style={{
                  background: '#F2E9E5',
                  border: '1px solid #D6CBC4',
                  borderRadius: '24px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {' '}
                <span style={{ fontSize: '15px', fontWeight: '600' }}>{'Clínica fundadora'}</span>{' '}
                <div>
                  <span style={{ fontSize: '30px', fontWeight: '600', letterSpacing: '-0.02em', lineHeight: '1.15' }}>
                    {'45 días sin costo'}
                  </span>
                  <span style={{ display: 'block', marginTop: '6px', fontSize: '13px', color: '#4B5D69' }}>
                    {'Piloto completo. Después, precio fundador por sede + IVA.'}
                  </span>
                </div>{' '}
                <span style={{ fontSize: '14px', color: '#4B5D69' }}>
                  {'Para las primeras clínicas. Lugares limitados.'}
                </span>{' '}
                <ul
                  style={{
                    margin: '0',
                    padding: '16px 0 0',
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    borderTop: '1px solid #DED3CD',
                  }}
                >
                  <li style={{ display: 'flex', gap: '10px', fontSize: '14px', lineHeight: '1.45' }}>
                    <svg
                      aria-hidden={'true'}
                      width={'18'}
                      height={'18'}
                      viewBox={'0 0 24 24'}
                      fill={'none'}
                      stroke={'currentColor'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                      style={{ flexShrink: '0', marginTop: '1px' }}
                    >
                      <path d={'M20 6 9 17l-5-5'} />
                    </svg>
                    {'Acceso completo durante el piloto'}
                  </li>
                  <li style={{ display: 'flex', gap: '10px', fontSize: '14px', lineHeight: '1.45' }}>
                    <svg
                      aria-hidden={'true'}
                      width={'18'}
                      height={'18'}
                      viewBox={'0 0 24 24'}
                      fill={'none'}
                      stroke={'currentColor'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                      style={{ flexShrink: '0', marginTop: '1px' }}
                    >
                      <path d={'M20 6 9 17l-5-5'} />
                    </svg>
                    {'Precio fundador reducido mientras sigas con Kensa'}
                  </li>
                  <li style={{ display: 'flex', gap: '10px', fontSize: '14px', lineHeight: '1.45' }}>
                    <svg
                      aria-hidden={'true'}
                      width={'18'}
                      height={'18'}
                      viewBox={'0 0 24 24'}
                      fill={'none'}
                      stroke={'currentColor'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                      style={{ flexShrink: '0', marginTop: '1px' }}
                    >
                      <path d={'M20 6 9 17l-5-5'} />
                    </svg>
                    {'Acompañamiento en tu primer envío real'}
                  </li>
                </ul>{' '}
                <a
                  className={'kn-btn'}
                  href={link('Costa-Contacto-cs06.dc.html')}
                  style={{
                    marginTop: 'auto',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontSize: '15px',
                    fontWeight: '500',
                    padding: '13px',
                    borderRadius: '999px',
                    background: '#18648A',
                    color: '#FFFFFF',
                  }}
                >
                  {'Solicita tu lugar'}
                </a>{' '}
              </div>{' '}
              <div
                className={'kn-card'}
                style={{
                  border: '1px solid #E8DFDA',
                  borderRadius: '24px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {' '}
                <span style={{ fontSize: '15px', fontWeight: '600' }}>{'Varias sedes'}</span>{' '}
                <div>
                  <span style={{ fontSize: '30px', fontWeight: '600', letterSpacing: '-0.02em', lineHeight: '1.15' }}>
                    {'Hablemos'}
                  </span>
                  <span style={{ display: 'block', marginTop: '6px', fontSize: '13px', color: '#4B5D69' }}>
                    {'Precio por sede + IVA.'}
                  </span>
                </div>{' '}
                <span style={{ fontSize: '14px', color: '#4B5D69' }}>{'Para grupos con dos o más ubicaciones.'}</span>{' '}
                <ul
                  style={{
                    margin: '0',
                    padding: '16px 0 0',
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    borderTop: '1px solid #DED3CD',
                  }}
                >
                  <li style={{ display: 'flex', gap: '10px', fontSize: '14px', lineHeight: '1.45' }}>
                    <svg
                      aria-hidden={'true'}
                      width={'18'}
                      height={'18'}
                      viewBox={'0 0 24 24'}
                      fill={'none'}
                      stroke={'currentColor'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                      style={{ flexShrink: '0', marginTop: '1px' }}
                    >
                      <path d={'M20 6 9 17l-5-5'} />
                    </svg>
                    {'Cada sede con su agenda y su equipo'}
                  </li>
                  <li style={{ display: 'flex', gap: '10px', fontSize: '14px', lineHeight: '1.45' }}>
                    <svg
                      aria-hidden={'true'}
                      width={'18'}
                      height={'18'}
                      viewBox={'0 0 24 24'}
                      fill={'none'}
                      stroke={'currentColor'}
                      strokeWidth={'2'}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}
                      style={{ flexShrink: '0', marginTop: '1px' }}
                    >
                      <path d={'M20 6 9 17l-5-5'} />
                    </svg>
                    {'Un solo acompañamiento para arrancar'}
                  </li>
                </ul>{' '}
                <a
                  className={'kn-ghost'}
                  href={link('Costa-Contacto-cs06.dc.html')}
                  style={{
                    marginTop: 'auto',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontSize: '15px',
                    fontWeight: '500',
                    padding: '13px',
                    borderRadius: '999px',
                    border: '1px solid #D6CBC4',
                  }}
                >
                  {'Escríbenos'}
                </a>{' '}
              </div>{' '}
            </div>{' '}
            <p style={{ margin: '16px 0 0', textAlign: 'center', fontSize: '13px', color: '#5F707B' }}>
              {
                'Precios en pesos mexicanos, más IVA. Todos incluyen modo de prueba y acompañamiento en tu primer envío real.'
              }
            </p>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '96px' }}>
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
                {'Lo que incluye Kensa'}
              </h2>{' '}
              <ul
                style={{
                  flex: '1.6 1 480px',
                  margin: '0',
                  padding: '0',
                  listStyle: 'none',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  columnGap: '32px',
                }}
              >
                {' '}
                <li style={{ borderTop: '1px solid #E8DFDA', padding: '14px 0', fontSize: '15px' }}>
                  {'Asistente de WhatsApp y bandeja compartida'}
                </li>{' '}
                <li style={{ borderTop: '1px solid #E8DFDA', padding: '14px 0', fontSize: '15px' }}>
                  {'Agenda y solicitudes por confirmar'}
                </li>{' '}
                <li style={{ borderTop: '1px solid #E8DFDA', padding: '14px 0', fontSize: '15px' }}>
                  {'Lista de espera'}
                </li>{' '}
                <li style={{ borderTop: '1px solid #E8DFDA', padding: '14px 0', fontSize: '15px' }}>
                  {'Biblioteca de 7 formatos y tus propios PDF'}
                </li>{' '}
                <li style={{ borderTop: '1px solid #E8DFDA', padding: '14px 0', fontSize: '15px' }}>
                  {'Autollenado y firma en el celular'}
                </li>{' '}
                <li style={{ borderTop: '1px solid #E8DFDA', padding: '14px 0', fontSize: '15px' }}>
                  {'Expedientes firmados y sellados'}
                </li>{' '}
                <li style={{ borderTop: '1px solid #E8DFDA', padding: '14px 0', fontSize: '15px' }}>
                  {'Modo de prueba'}
                </li>{' '}
                <li style={{ borderTop: '1px solid #E8DFDA', padding: '14px 0', fontSize: '15px' }}>
                  {'Acompañamiento en tu primer envío'}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
          </section>{' '}
          <div data-rv={'1'} className={'wrap'} style={{ paddingTop: '96px' }}>
            {' '}
            <section
              style={{
                background: '#0E2A3B',
                color: '#F7F2EF',
                borderRadius: '32px',
                padding: 'clamp(32px,5vw,56px)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '32px',
              }}
            >
              {' '}
              <div style={{ flex: '1 1 300px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {' '}
                <h2
                  style={{
                    margin: '0',
                    fontSize: 'clamp(26px,3vw,36px)',
                    lineHeight: '1.15',
                    letterSpacing: '-0.03em',
                    fontWeight: '600',
                  }}
                >
                  {'¿Cuánto se te va en cancelaciones?'}
                </h2>{' '}
                <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5', color: '#B9C7D0' }}>
                  {'Es una estimación con tus datos, no una promesa.'}
                </p>{' '}
              </div>{' '}
              <div
                style={{
                  flex: '2 1 480px',
                  minWidth: '0',
                  background: '#FFFFFF',
                  color: '#0E2A3B',
                  borderRadius: '20px',
                  padding: '24px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
                  gap: '12px',
                }}
              >
                {' '}
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#4B5D69' }}
                >
                  {'Costo de consulta (MXN)'}
                  <input
                    type={'number'}
                    name={'costo'}
                    inputMode={'decimal'}
                    autoComplete={'off'}
                    placeholder={'Ej. 800…'}
                    value={v.fee ?? ''}
                    onChange={v.setFee}
                    style={{
                      font: 'inherit',
                      fontSize: '16px',
                      padding: '12px 14px',
                      border: '1px solid #D6CBC4',
                      borderRadius: '12px',
                      color: '#0E2A3B',
                    }}
                  />
                </label>{' '}
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#4B5D69' }}
                >
                  {'Cancelaciones por semana'}
                  <input
                    type={'number'}
                    name={'cancelaciones'}
                    inputMode={'numeric'}
                    autoComplete={'off'}
                    placeholder={'Ej. 6…'}
                    value={v.cancels ?? ''}
                    onChange={v.setCancels}
                    style={{
                      font: 'inherit',
                      fontSize: '16px',
                      padding: '12px 14px',
                      border: '1px solid #D6CBC4',
                      borderRadius: '12px',
                      color: '#0E2A3B',
                    }}
                  />
                </label>{' '}
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#4B5D69' }}
                >
                  {'Cuántas podrías volver a ocupar: '}
                  {v.shareLabel}
                  <input
                    type={'range'}
                    name={'ocupacion'}
                    min={'0'}
                    max={'100'}
                    step={'5'}
                    value={v.share ?? ''}
                    onChange={v.setShare}
                    style={{ width: '100%', accentColor: '#18648A', marginTop: '12px' }}
                  />
                </label>{' '}
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#4B5D69' }}
                >
                  {'Pacientes por semana'}
                  <input
                    type={'number'}
                    name={'pacientes'}
                    inputMode={'numeric'}
                    autoComplete={'off'}
                    placeholder={'Ej. 80…'}
                    value={v.patients ?? ''}
                    onChange={v.setPatients}
                    style={{
                      font: 'inherit',
                      fontSize: '16px',
                      padding: '12px 14px',
                      border: '1px solid #D6CBC4',
                      borderRadius: '12px',
                      color: '#0E2A3B',
                    }}
                  />
                </label>{' '}
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#4B5D69' }}
                >
                  {'Minutos de papeleo por paciente'}
                  <input
                    type={'number'}
                    name={'minutos'}
                    inputMode={'numeric'}
                    autoComplete={'off'}
                    placeholder={'Ej. 10…'}
                    value={v.mins ?? ''}
                    onChange={v.setMins}
                    style={{
                      font: 'inherit',
                      fontSize: '16px',
                      padding: '12px 14px',
                      border: '1px solid #D6CBC4',
                      borderRadius: '12px',
                      color: '#0E2A3B',
                    }}
                  />
                </label>{' '}
                <div
                  style={{
                    background: '#F6F6F6',
                    borderRadius: '14px',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span style={{ fontSize: '12px', color: '#4B5D69' }}>{'Ingreso que podrías recuperar al mes'}</span>
                  <span
                    aria-live={'polite'}
                    style={{ fontSize: '26px', fontWeight: '600', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {v.revOut}
                  </span>
                </div>{' '}
                <div
                  style={{
                    background: '#F6F6F6',
                    borderRadius: '14px',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span style={{ fontSize: '12px', color: '#4B5D69' }}>{'Horas al mes que hoy se van en papeleo'}</span>
                  <span
                    aria-live={'polite'}
                    style={{ fontSize: '26px', fontWeight: '600', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {v.hoursOut}
                  </span>
                </div>{' '}
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '96px' }}>
            {' '}
            <div style={{ maxWidth: '820px', margin: '0 auto' }}>
              {' '}
              <h2
                style={{
                  margin: '0',
                  textAlign: 'center',
                  fontSize: 'clamp(30px,3.6vw,44px)',
                  letterSpacing: '-0.03em',
                  fontWeight: '600',
                }}
              >
                {'Preguntas frecuentes'}
              </h2>{' '}
              <div style={{ marginTop: '32px' }}>
                {' '}
                {(v.faqs || []).map((f, $index) => (
                  <React.Fragment key={$index}>
                    {' '}
                    <div style={{ borderBottom: '1px solid #E8DFDA' }}>
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
                        <span aria-hidden={'true'}>{f?.sign}</span>
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
            </div>{' '}
          </section>{' '}
          <div id={'demo'} data-rv={'1'} className={'wrap'} style={{ paddingTop: '96px' }}>
            {' '}
            <section
              style={{
                background: '#F2E9E5',
                borderRadius: '32px',
                padding: 'clamp(48px,7vw,72px) clamp(20px,5vw,64px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {' '}
              <h2
                style={{ margin: '0', fontSize: 'clamp(30px,4vw,48px)', letterSpacing: '-0.03em', fontWeight: '600' }}
              >
                {'Conecta tu recepción'}
                <span style={{ color: '#E0987A' }}>{'.'}</span>
              </h2>{' '}
              <a
                className={'kn-btn'}
                href={link('Costa-Contacto-cs06.dc.html')}
                style={{
                  marginTop: '24px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '15px 26px',
                  borderRadius: '999px',
                  background: '#18648A',
                  color: '#FFFFFF',
                }}
              >
                {'Agenda una demostración'}
              </a>{' '}
            </section>{' '}
          </div>{' '}
          <CostaPiePagina />{' '}
        </div>{' '}
      </>
    );
  }
}
