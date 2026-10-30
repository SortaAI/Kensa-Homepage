'use client';
// Generated from the design canvas, Costa palette (Costa-Seguridad-cs05.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import CostaEncabezado from './CostaEncabezado';
import CostaPiePagina from './CostaPiePagina';

const CSS =
  'body{margin:0;background:#F9F4F0}\n:root{color-scheme:light}\n[id]{scroll-margin-top:24px}\nh1,h2,h3{text-wrap:balance}\np{text-wrap:pretty}\na,button{touch-action:manipulation;-webkit-tap-highlight-color:rgba(14,42,59,0.08);transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out}\nnav a:not([style*="background: #18648A"]):hover{text-decoration:underline}\na[style*="background: #18648A"]:hover{background:#114E6C !important}\n.skip{position:absolute;left:-9999px;top:12px;z-index:10;background:#0E2A3B;color:#FFFFFF;padding:10px 16px;border-radius:999px;text-decoration:none}\n.skip:focus{left:16px}\n@media (prefers-reduced-motion:reduce){*{transition:none !important}}\n::selection{background:#0E2A3B;color:#FFFFFF}\n:focus-visible{outline:2px solid #0E2A3B;outline-offset:3px;border-radius:6px}\na{color:#0E2A3B}a:hover{color:#4B5D69}\n*{box-sizing:border-box}\n.wrap{width:100%;max-width:1200px;margin:0 auto;padding-left:clamp(16px,4vw,40px);padding-right:clamp(16px,4vw,40px)}\n@media (max-width:820px){.hide-sm{display:none !important}.navlinks{display:none !important}}\n.kn-item:hover,.kn-trigger:hover{background:#F2E9E5 !important}\n.show-sm{display:none}\n@media (max-width:820px){.navlinks,.hide-sm{display:none !important}.show-sm{display:flex !important}}\n/* motion */\n.kn-btn,.kn-ghost{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out,transform .2s cubic-bezier(.16,1,.3,1),box-shadow .2s ease-out}\n.kn-btn:hover{transform:translateY(-1px);box-shadow:0 10px 22px rgba(24,100,138,0.22)}\n.kn-btn:active{transform:translateY(0);box-shadow:0 2px 6px rgba(24,100,138,0.18);transition-duration:.08s}\n.kn-ghost:hover{transform:translateY(-1px);box-shadow:0 8px 18px rgba(14,42,59,0.08)}\nli a > span[aria-hidden] svg{transition:transform .2s cubic-bezier(.16,1,.3,1)}\nli a:hover > span[aria-hidden] svg,li a:focus-visible > span[aria-hidden] svg{transform:translateX(3px)}\n.kn-card{transition:transform .25s cubic-bezier(.16,1,.3,1),box-shadow .25s ease-out}\n.kn-card:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(14,42,59,0.10)}\nbutton[aria-expanded="true"] + *{animation:kn-open .3s cubic-bezier(.16,1,.3,1)}\n@keyframes kn-open{from{opacity:0;transform:translateY(-4px)}}\n[data-rv="pre"]{opacity:0;transform:translateY(14px)}\n[data-rv="in"]{opacity:1;transform:none;transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}\n@media (prefers-reduced-motion:reduce){[data-rv]{opacity:1 !important;transform:none !important}.kn-card:hover,.kn-btn:hover,.kn-ghost:hover,li a:hover > span[aria-hidden] svg{transform:none !important}button[aria-expanded="true"] + *{animation:none}}';

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
    var hf = "'Poppins', system-ui, sans-serif";
    var practices = [
      { t: 'Datos separados por clínica', d: 'La información de tu clínica nunca se mezcla con la de otra.' },
      { t: 'Enlaces que vencen', d: 'Personales, con fecha de vencimiento y se cierran al enviarse.' },
      { t: 'WhatsApp cifrado', d: 'Tus credenciales se guardan cifradas. Cada clínica conecta su cuenta.' },
      { t: 'Archivos privados', d: 'Acceso temporal y nada de enlaces públicos.' },
      { t: 'Respaldos cifrados', d: 'Y restauraciones probadas por separado.' },
      { t: 'Monitoreo', d: 'Alertas si algo deja de funcionar.' },
      { t: 'Aviso y consentimiento', d: 'Aviso de privacidad en el primer mensaje y consentimiento registrado.' },
      { t: 'Derechos del paciente', d: 'Exporta sus documentos, borra su chat o lo das de baja de ofertas.' },
    ];
    return { hf: hf, practices: practices };
  }
}

export default class CostaSeguridad extends Logic {
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
          <section
            id={'contenido'}
            className={'wrap'}
            style={{
              paddingTop: '88px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {' '}
            <h1
              style={{
                margin: '20px 0 0',
                fontSize: 'clamp(36px,5.2vw,60px)',
                lineHeight: '1.05',
                letterSpacing: '-0.03em',
                fontWeight: '600',
                maxWidth: '860px',
              }}
            >
              {'Los datos de tus pacientes, con el cuidado que requieren'}
              <span style={{ color: '#E0987A' }}>{'.'}</span>
            </h1>{' '}
            <p
              style={{ margin: '18px 0 0', fontSize: '17px', lineHeight: '1.55', color: '#4B5D69', maxWidth: '560px' }}
            >
              {'Kensa trata los datos por cuenta de tu clínica. Tu clínica sigue siendo la responsable de ellos.'}
            </p>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '72px' }}>
            {' '}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
              {' '}
              {(v.practices || []).map((p, $index) => (
                <React.Fragment key={$index}>
                  {' '}
                  <div
                    className={'kn-card'}
                    style={{
                      background: '#F6F6F6',
                      borderRadius: '18px',
                      padding: '22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {' '}
                    <span style={{ fontSize: '16px', fontWeight: '600' }}>{p?.t}</span>{' '}
                    <span style={{ fontSize: '14px', lineHeight: '1.5', color: '#4B5D69' }}>{p?.d}</span>{' '}
                  </div>{' '}
                </React.Fragment>
              ))}{' '}
            </div>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '96px' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 72px' }}>
              {' '}
              <div style={{ flex: '1 1 320px' }}>
                {' '}
                <h2
                  style={{
                    margin: '0',
                    fontSize: 'clamp(28px,3.4vw,40px)',
                    lineHeight: '1.12',
                    letterSpacing: '-0.03em',
                    fontWeight: '600',
                  }}
                >
                  {'Tu clínica decide sobre sus datos'}
                  <span style={{ color: '#E0987A' }}>{'.'}</span>
                </h2>{' '}
                <p
                  style={{
                    margin: '14px 0 0',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#4B5D69',
                    maxWidth: '400px',
                  }}
                >
                  {
                    'Kensa trata los datos por cuenta de tu clínica. Tú pones las reglas y atiendes lo que piden tus pacientes.'
                  }
                </p>{' '}
              </div>{' '}
              <dl style={{ flex: '1.4 1 460px', margin: '0' }}>
                {' '}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                    borderTop: '1px solid #E8DFDA',
                    padding: '16px 0',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Cuánto se guardan los chats'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#4B5D69' }}>
                    {'Tú eliges, de 30 días a 10 años. Las conversaciones abiertas nunca se borran solas.'}
                  </dd>
                </div>{' '}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                    borderTop: '1px solid #E8DFDA',
                    padding: '16px 0',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Borrar una conversación'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#4B5D69' }}>{'Cuando el paciente lo pida.'}</dd>
                </div>{' '}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                    borderTop: '1px solid #E8DFDA',
                    padding: '16px 0',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Exportar documentos'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#4B5D69' }}>
                    {'Los de un paciente, en PDF, cuando los necesites.'}
                  </dd>
                </div>{' '}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                    borderTop: '1px solid #E8DFDA',
                    borderBottom: '1px solid #E8DFDA',
                    padding: '16px 0',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Quién entra y quién firma'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#4B5D69' }}>
                    {'Cada persona con su acceso. Solo profesionales verificados firman.'}
                  </dd>
                </div>{' '}
              </dl>{' '}
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
                alignItems: 'center',
                gap: '40px',
              }}
            >
              {' '}
              <div style={{ flex: '1 1 380px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {' '}
                <h2
                  style={{
                    margin: '0',
                    fontSize: 'clamp(28px,3.4vw,40px)',
                    lineHeight: '1.12',
                    letterSpacing: '-0.03em',
                    fontWeight: '600',
                  }}
                >
                  {'Expedientes que se pueden comprobar'}
                  <span style={{ color: '#E0987A' }}>{'.'}</span>
                </h2>{' '}
                <ul
                  style={{
                    margin: '0',
                    padding: '0',
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    fontSize: '15px',
                    color: '#E8DFDA',
                  }}
                >
                  {' '}
                  <li>{'Cada expediente bloqueado lleva una huella digital (SHA-256).'}</li>{' '}
                  <li>{'Cualquiera puede comprobar que un PDF coincide con el original, sin ver su contenido.'}</li>{' '}
                  <li>{'Paquete de evidencia descargable, con historial de accesos.'}</li>{' '}
                </ul>{' '}
              </div>{' '}
              <div style={{ flex: '1 1 340px', minWidth: '0', display: 'flex', justifyContent: 'center' }}>
                <img
                  src={'/img/pantalla-comprobar.webp'}
                  width={'1024'}
                  height={'1134'}
                  loading={'lazy'}
                  alt={'Comprobar un documento: registro encontrado y sin cambios'}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    borderRadius: '14px',
                    border: '1px solid #DED3CD',
                    boxShadow: '0 18px 40px rgba(14,42,59,0.14)',
                    background: '#FFFFFF',
                    maxWidth: '460px',
                  }}
                />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '72px' }}>
            {' '}
            <div
              style={{
                border: '1px solid #E8DFDA',
                borderRadius: '20px',
                padding: '24px 28px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px 24px',
                alignItems: 'baseline',
              }}
            >
              {' '}
              <span style={{ fontSize: '15px', fontWeight: '600' }}>{'Con claridad'}</span>{' '}
              <span style={{ flex: '1 1 400px', fontSize: '14px', lineHeight: '1.55', color: '#4B5D69' }}>
                {
                  'Kensa todavía no tiene certificaciones como ISO o SOC 2 ni firma electrónica certificada. Por eso aquí está, punto por punto, lo que sí hace.'
                }
              </span>{' '}
            </div>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '96px' }}>
            {' '}
            <h2
              style={{ margin: '0', fontSize: 'clamp(28px,3.4vw,40px)', letterSpacing: '-0.03em', fontWeight: '600' }}
            >
              {'Preguntas sobre privacidad'}
            </h2>{' '}
            <dl style={{ margin: '28px 0 0', maxWidth: '820px' }}>
              {' '}
              <div style={{ borderTop: '1px solid #E8DFDA', padding: '18px 0' }}>
                <dt style={{ fontSize: '17px', fontWeight: '500' }}>{'¿Otras clínicas pueden ver mis datos?'}</dt>
                <dd style={{ margin: '6px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#4B5D69' }}>
                  {'No. La información de cada clínica está separada de la de las demás.'}
                </dd>
              </div>{' '}
              <div style={{ borderTop: '1px solid #E8DFDA', padding: '18px 0' }}>
                <dt style={{ fontSize: '17px', fontWeight: '500' }}>
                  {'¿Qué pasa si un enlace llega a la persona equivocada?'}
                </dt>
                <dd style={{ margin: '6px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#4B5D69' }}>
                  {
                    'Tu equipo confirma el destinatario antes de enviar. Cada enlace es personal, vence a los 7 días y lo puedes reemplazar cuando quieras.'
                  }
                </dd>
              </div>{' '}
              <div style={{ borderTop: '1px solid #E8DFDA', padding: '18px 0' }}>
                <dt style={{ fontSize: '17px', fontWeight: '500' }}>{'¿Hay respaldos?'}</dt>
                <dd style={{ margin: '6px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#4B5D69' }}>
                  {'Sí. Respaldos cifrados, con restauraciones probadas por separado.'}
                </dd>
              </div>{' '}
              <div style={{ borderTop: '1px solid #E8DFDA', borderBottom: '1px solid #E8DFDA', padding: '18px 0' }}>
                <dt style={{ fontSize: '17px', fontWeight: '500' }}>{'¿Mis pacientes ven un aviso de privacidad?'}</dt>
                <dd style={{ margin: '6px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#4B5D69' }}>
                  {
                    'Sí. En su primer mensaje por WhatsApp, y el formato de aviso de privacidad registra su consentimiento.'
                  }
                </dd>
              </div>{' '}
            </dl>{' '}
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
                {'¿Tienes preguntas de privacidad?'}
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
