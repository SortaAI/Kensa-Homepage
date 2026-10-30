'use client';
// Generated from the design canvas, Costa palette (Costa-ComoFunciona-cs03.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
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
    this.state = { tab: 0 };
  }
  renderVals() {
    var self = this;
    var week = [
      {
        when: 'Lun · 9:14 p.m.',
        title: 'Ana escribe',
        line: 'Toca Reagendar en WhatsApp y elige el jueves a las 10:30.',
        via: 'Asistente de WhatsApp',
      },
      {
        when: 'Mar · 8:05 a.m.',
        title: 'Recepción confirma',
        line: 'Un clic, y a Ana le llega la confirmación.',
        via: 'Agenda',
      },
      {
        when: 'Mié · 4:00 p.m.',
        title: 'Documentos en camino',
        line: 'Recepción arma su paquete y se lo manda.',
        via: 'Preparar visitas · Envíos',
      },
      {
        when: 'Mié · 9:30 p.m.',
        title: 'Llena y firma en casa',
        line: 'Su nombre se llena solo en todos los formatos.',
        via: 'Formatos en el celular · Autollenado',
      },
      {
        when: 'Jue · 10:30 a.m.',
        title: 'Consulta a tiempo',
        line: 'El doctor firma y bloquea. El expediente queda sellado.',
        via: 'Firmar y bloquear',
      },
      {
        when: 'Jue · 11:00 a.m.',
        title: 'Otro hueco, cubierto',
        line: 'Alguien cancela su cita de las 3:00 p.m. Luis la acepta en 4 minutos.',
        via: 'Lista de espera',
      },
    ];
    var personas = [
      {
        label: 'Recepción',
        head: 'Deja de correr. Empieza el día preparada.',
        src: '/img/laptop-hoy.webp',
        w: 1920,
        h: 1440,
        alt: 'Kensa en una laptop: Hoy, con los pacientes del día, las citas y lo que requiere atención',
        items: [
          'Menos chats repetidos',
          'Se acabó llamar a media lista',
          'Sin papel ni recaptura',
          'Las visitas de mañana, listas en minutos',
        ],
      },
      {
        label: 'Médico y dirección',
        head: 'Protege tus ingresos. Confía en tus expedientes.',
        src: '/img/laptop-visita-firmada.webp',
        w: 1920,
        h: 1440,
        alt: 'Kensa en una laptop: visita firmada y bloqueada, con su registro sellado y su huella digital',
        items: [
          'Recupera citas canceladas',
          'Empieza tus consultas a tiempo',
          'Expedientes listos para auditoría',
          'Sabes quién hizo qué',
        ],
      },
      {
        label: 'Pacientes',
        head: 'Más fácil para ellos. Mejor para ti.',
        src: '/img/iphone-paciente-formato.webp',
        w: 1920,
        h: 1440,
        alt: 'El paciente llena sus documentos desde su celular',
        items: [
          'Agendan por WhatsApp, a cualquier hora',
          'Llenan y firman en casa',
          'Escriben sus datos una sola vez',
          'Una cita antes, si la pidieron',
        ],
      },
    ];
    var tabs = personas.map(function (p, i) {
      return {
        label: p.label,
        active: self.state.tab === i,
        idle: self.state.tab !== i,
        pick: function () {
          self.setState({ tab: i });
        },
      };
    });
    return { week: week, tabs: tabs, persona: personas[this.state.tab] };
  }
}

export default class CostaComoFunciona extends Logic {
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
          <section id={'contenido'} className={'wrap'} style={{ paddingTop: '96px' }}>
            {' '}
            <h1
              style={{
                margin: '0 auto',
                textAlign: 'center',
                fontSize: 'clamp(38px,5.6vw,67px)',
                lineHeight: '1.04',
                letterSpacing: '-0.03em',
                fontWeight: '600',
                maxWidth: '860px',
                textWrap: 'balance',
              }}
            >
              {'Tu recepción hace 5 trabajos '}
              <span style={{ color: '#18648A' }}>
                {'a la vez'}
                <span style={{ color: '#E0987A' }}>{'.'}</span>
              </span>
            </h1>{' '}
            <div
              style={{
                marginTop: '56px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '24px',
                borderTop: '1px solid #E8DFDA',
                paddingTop: '28px',
              }}
            >
              {' '}
              <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.45', fontWeight: '500' }}>
                {'“Todo el día contesto lo mismo por WhatsApp.”'}
              </p>{' '}
              <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.45', fontWeight: '500' }}>
                {'“Alguien cancela y me pongo a llamar.”'}
              </p>{' '}
              <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.45', fontWeight: '500' }}>
                {'“Papel, escanear, volver a capturar.”'}
              </p>{' '}
              <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.45', fontWeight: '500' }}>
                {'“¿Aguantaríamos una auditoría?”'}
              </p>{' '}
            </div>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '120px' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 72px' }}>
              {' '}
              <div style={{ flex: '1 1 300px' }}>
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
                  {'La semana de Ana'}
                  <span style={{ color: '#E0987A' }}>{'.'}</span>
                </h2>{' '}
                <p
                  style={{
                    margin: '14px 0 0',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#4B5D69',
                    maxWidth: '340px',
                  }}
                >
                  {'Una paciente, de su primer mensaje a su expediente firmado. Ejemplo ilustrativo.'}
                </p>{' '}
              </div>{' '}
              <ol style={{ flex: '1.6 1 520px', listStyle: 'none', margin: '0', padding: '0' }}>
                {' '}
                {(v.week || []).map((w, $index) => (
                  <React.Fragment key={$index}>
                    {' '}
                    <li
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '4px 24px',
                        borderTop: '1px solid #E8DFDA',
                        padding: '20px 0',
                      }}
                    >
                      {' '}
                      <span
                        style={{
                          flex: '0 0 120px',
                          fontSize: '13px',
                          fontWeight: '500',
                          color: '#5F707B',
                          paddingTop: '3px',
                        }}
                      >
                        {w?.when}
                      </span>{' '}
                      <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {' '}
                        <span style={{ fontSize: '17px', fontWeight: '500' }}>{w?.title}</span>{' '}
                        <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#4B5D69' }}>{w?.line}</span>{' '}
                        <span style={{ fontSize: '13px', color: '#5F707B' }}>{w?.via}</span>{' '}
                      </div>{' '}
                    </li>{' '}
                  </React.Fragment>
                ))}{' '}
                <li style={{ borderTop: '1px solid #E8DFDA', paddingTop: '20px', fontSize: '14px', color: '#4B5D69' }}>
                  {'Y el ciclo vuelve a empezar con el siguiente paciente.'}
                </li>{' '}
              </ol>{' '}
            </div>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '120px' }}>
            {' '}
            <h2
              style={{
                margin: '0',
                textAlign: 'center',
                fontSize: 'clamp(30px,3.6vw,47px)',
                letterSpacing: '-0.03em',
                fontWeight: '600',
              }}
            >
              {'Hecho para todo tu equipo'}
              <span style={{ color: '#E0987A' }}>{'.'}</span>
            </h2>{' '}
            <div
              role={'group'}
              aria-label={'Para quién'}
              style={{
                margin: '28px auto 0',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '4px',
                background: '#F2E9E5',
                borderRadius: '999px',
                padding: '5px',
                width: 'fit-content',
                maxWidth: '100%',
              }}
            >
              {' '}
              {(v.tabs || []).map((t, $index) => (
                <React.Fragment key={$index}>
                  {' '}
                  {t?.active ? (
                    <>
                      <button
                        className={'kn-btn'}
                        type={'button'}
                        aria-pressed={'true'}
                        onClick={t?.pick}
                        style={{
                          border: '0',
                          borderRadius: '999px',
                          padding: '11px 20px',
                          fontSize: '14px',
                          fontWeight: '500',
                          background: '#18648A',
                          color: '#FFFFFF',
                        }}
                      >
                        {t?.label}
                      </button>
                    </>
                  ) : null}{' '}
                  {t?.idle ? (
                    <>
                      <button
                        type={'button'}
                        aria-pressed={'false'}
                        onClick={t?.pick}
                        style={{
                          border: '0',
                          borderRadius: '999px',
                          padding: '11px 20px',
                          fontSize: '14px',
                          background: 'transparent',
                          color: '#4B5D69',
                        }}
                      >
                        {t?.label}
                      </button>
                    </>
                  ) : null}{' '}
                </React.Fragment>
              ))}{' '}
            </div>{' '}
            <div
              style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '32px 56px', alignItems: 'center' }}
            >
              {' '}
              <div style={{ flex: '1 1 340px', minWidth: '0' }}>
                {' '}
                <h3
                  style={{
                    margin: '0',
                    fontSize: '28px',
                    lineHeight: '1.2',
                    letterSpacing: '-0.02em',
                    fontWeight: '600',
                  }}
                >
                  {v.persona?.head}
                </h3>{' '}
                <ul style={{ margin: '24px 0 0', padding: '0', listStyle: 'none' }}>
                  {' '}
                  {(v.persona?.items || []).map((it, $index) => (
                    <React.Fragment key={$index}>
                      {' '}
                      <li style={{ borderTop: '1px solid #E8DFDA', padding: '14px 0', fontSize: '16px' }}>{it}</li>{' '}
                    </React.Fragment>
                  ))}{' '}
                </ul>{' '}
              </div>{' '}
              <div
                style={{
                  flex: '1.3 1 460px',
                  minWidth: '0',
                  background: '#F2E9E5',
                  borderRadius: '28px',
                  padding: 'clamp(20px,3vw,36px)',
                }}
              >
                {' '}
                <img
                  src={v.persona?.src}
                  width={v.persona?.w}
                  height={v.persona?.h}
                  loading={'lazy'}
                  alt={v.persona?.alt}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    borderRadius: '14px',
                    border: '1px solid #DED3CD',
                    boxShadow: '0 14px 36px rgba(14,42,59,0.10)',
                    background: '#FFFFFF',
                  }}
                />{' '}
              </div>{' '}
            </div>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '120px' }}>
            {' '}
            <h2
              style={{ margin: '0', fontSize: 'clamp(30px,3.6vw,47px)', letterSpacing: '-0.03em', fontWeight: '600' }}
            >
              {'En marcha en días, no en meses'}
              <span style={{ color: '#E0987A' }}>{'.'}</span>
            </h2>{' '}
            <ol
              style={{
                listStyle: 'none',
                margin: '40px 0 0',
                padding: '0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '24px',
              }}
            >
              {' '}
              <li
                style={{
                  borderTop: '2px solid #0E2A3B',
                  paddingTop: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#5F707B' }}>{'1'}</span>
                <span style={{ fontSize: '16px', fontWeight: '500' }}>{'Configura tu clínica'}</span>
                <span style={{ fontSize: '14px', color: '#4B5D69' }}>{'Y agrega a tu equipo.'}</span>
              </li>{' '}
              <li
                style={{
                  borderTop: '2px solid #0E2A3B',
                  paddingTop: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#5F707B' }}>{'2'}</span>
                <span style={{ fontSize: '16px', fontWeight: '500' }}>{'Conecta WhatsApp'}</span>
                <span style={{ fontSize: '14px', color: '#4B5D69' }}>{'Meta suele aprobar en un día.'}</span>
              </li>{' '}
              <li
                style={{
                  borderTop: '2px solid #0E2A3B',
                  paddingTop: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#5F707B' }}>{'3'}</span>
                <span style={{ fontSize: '16px', fontWeight: '500' }}>{'Elige tus documentos'}</span>
                <span style={{ fontSize: '14px', color: '#4B5D69' }}>{'De la biblioteca o los tuyos.'}</span>
              </li>{' '}
              <li
                style={{
                  borderTop: '2px solid #0E2A3B',
                  paddingTop: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#5F707B' }}>{'4'}</span>
                <span style={{ fontSize: '16px', fontWeight: '500' }}>{'Practica'}</span>
                <span style={{ fontSize: '14px', color: '#4B5D69' }}>{'Con datos de práctica.'}</span>
              </li>{' '}
              <li
                style={{
                  borderTop: '2px solid #0E2A3B',
                  paddingTop: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#5F707B' }}>{'5'}</span>
                <span style={{ fontSize: '16px', fontWeight: '500' }}>{'Activa'}</span>
                <span style={{ fontSize: '14px', color: '#4B5D69' }}>{'Tu primer envío real, acompañado.'}</span>
              </li>{' '}
            </ol>{' '}
          </section>{' '}
          <section
            data-rv={'1'}
            className={'wrap'}
            style={{
              paddingTop: '128px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {' '}
            <h2 style={{ margin: '0', fontSize: 'clamp(30px,4vw,48px)', letterSpacing: '-0.03em', fontWeight: '600' }}>
              {'Conecta tu recepción'}
              <span style={{ color: '#E0987A' }}>{'.'}</span>
            </h2>{' '}
            <a
              className={'kn-btn'}
              href={link('Costa-Contacto-cs06.dc.html')}
              style={{
                marginTop: '28px',
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
          </section>{' '}
          <CostaPiePagina />{' '}
        </div>{' '}
      </>
    );
  }
}
