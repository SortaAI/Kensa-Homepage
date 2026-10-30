'use client';
// Generated from the design canvas (Seguridad-hvll.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import CompEncabezado from './CompEncabezado';
import CompPiePagina from './CompPiePagina';

const CSS =
  'body{margin:0;background:#FFFFFF}\n:root{color-scheme:light}\n[id]{scroll-margin-top:24px}\nh1,h2,h3{text-wrap:balance}\np{text-wrap:pretty}\na,button{touch-action:manipulation;-webkit-tap-highlight-color:rgba(20,20,22,0.08);transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out}\nnav a:not([style*="background: #18181B"]):hover{text-decoration:underline}\na[style*="background: #18181B"]:hover{background:#34343A !important}\n.skip{position:absolute;left:-9999px;top:12px;z-index:10;background:#141416;color:#FFFFFF;padding:10px 16px;border-radius:999px;text-decoration:none}\n.skip:focus{left:16px}\n@media (prefers-reduced-motion:reduce){*{transition:none !important}}\n::selection{background:#141416;color:#FFFFFF}\n:focus-visible{outline:2px solid #141416;outline-offset:3px;border-radius:6px}\na{color:#18181B}a:hover{color:#3F3F46}\n*{box-sizing:border-box}\n.wrap{width:100%;max-width:1200px;margin:0 auto;padding-left:clamp(16px,4vw,40px);padding-right:clamp(16px,4vw,40px)}\n@media (max-width:820px){.hide-sm{display:none !important}.navlinks{display:none !important}}\n.kn-item:hover,.kn-trigger:hover{background:#F2F2F3 !important}\n.show-sm{display:none}\n@media (max-width:820px){.navlinks,.hide-sm{display:none !important}.show-sm{display:flex !important}}';

class Logic extends DCLogic {
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

export default class Seguridad extends Logic {
  render() {
    const v = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />{' '}
        <div
          style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            color: '#141416',
            background: '#FFFFFF',
            width: '100%',
            overflowX: 'hidden',
          }}
        >
          {' '}
          <a href={link('#contenido')} className={'skip'}>
            {'Saltar al contenido'}
          </a>{' '}
          <CompEncabezado />{' '}
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
                fontFamily: v.hf,
                margin: '20px 0 0',
                fontSize: 'clamp(36px,5.2vw,60px)',
                lineHeight: '1.05',
                letterSpacing: '-0.035em',
                fontWeight: '600',
                maxWidth: '860px',
              }}
            >
              {'Los datos de tus pacientes, con el cuidado que requieren.'}
            </h1>{' '}
            <p
              style={{ margin: '18px 0 0', fontSize: '17px', lineHeight: '1.55', color: '#3F3F46', maxWidth: '560px' }}
            >
              {'Kensa trata los datos por cuenta de tu clínica. Tu clínica sigue siendo la responsable de ellos.'}
            </p>{' '}
          </section>{' '}
          <section className={'wrap'} style={{ paddingTop: '72px' }}>
            {' '}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
              {' '}
              {(v.practices || []).map((p, $index) => (
                <React.Fragment key={$index}>
                  {' '}
                  <div
                    style={{
                      background: '#F4F4F5',
                      borderRadius: '18px',
                      padding: '22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {' '}
                    <span style={{ fontSize: '16px', fontWeight: '600' }}>{p?.t}</span>{' '}
                    <span style={{ fontSize: '14px', lineHeight: '1.5', color: '#3F3F46' }}>{p?.d}</span>{' '}
                  </div>{' '}
                </React.Fragment>
              ))}{' '}
            </div>{' '}
          </section>{' '}
          <section className={'wrap'} style={{ paddingTop: '96px' }}>
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
                  {'Tu clínica decide sobre sus datos.'}
                </h2>{' '}
                <p
                  style={{
                    margin: '14px 0 0',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#3D3D42',
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
                    borderTop: '1px solid #E6E6E8',
                    padding: '16px 0',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Cuánto se guardan los chats'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#3D3D42' }}>
                    {'Tú eliges, de 30 días a 10 años. Las conversaciones abiertas nunca se borran solas.'}
                  </dd>
                </div>{' '}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                    borderTop: '1px solid #E6E6E8',
                    padding: '16px 0',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Borrar una conversación'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#3D3D42' }}>{'Cuando el paciente lo pida.'}</dd>
                </div>{' '}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                    borderTop: '1px solid #E6E6E8',
                    padding: '16px 0',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Exportar documentos'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#3D3D42' }}>
                    {'Los de un paciente, en PDF, cuando los necesites.'}
                  </dd>
                </div>{' '}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                    borderTop: '1px solid #E6E6E8',
                    borderBottom: '1px solid #E6E6E8',
                    padding: '16px 0',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Quién entra y quién firma'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#3D3D42' }}>
                    {'Cada persona con su acceso. Solo profesionales verificados firman.'}
                  </dd>
                </div>{' '}
              </dl>{' '}
            </div>{' '}
          </section>{' '}
          <div className={'wrap'} style={{ paddingTop: '96px' }}>
            {' '}
            <section
              style={{
                background: '#232326',
                color: '#FAFAFA',
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
                    fontFamily: v.hf,
                    margin: '0',
                    fontSize: 'clamp(28px,3.4vw,40px)',
                    lineHeight: '1.12',
                    letterSpacing: '-0.03em',
                    fontWeight: '600',
                  }}
                >
                  {'Expedientes que se pueden comprobar.'}
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
                    color: '#E4E4E7',
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
                    border: '1px solid #DCDCE0',
                    boxShadow: '0 18px 40px rgba(20,20,22,0.14)',
                    background: '#FFFFFF',
                    maxWidth: '460px',
                  }}
                />
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <section className={'wrap'} style={{ paddingTop: '72px' }}>
            {' '}
            <div
              style={{
                border: '1px solid #E4E4E7',
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
              <span style={{ flex: '1 1 400px', fontSize: '14px', lineHeight: '1.55', color: '#3F3F46' }}>
                {
                  'Kensa todavía no tiene certificaciones como ISO o SOC 2 ni firma electrónica certificada. Por eso aquí está, punto por punto, lo que sí hace.'
                }
              </span>{' '}
            </div>{' '}
          </section>{' '}
          <section className={'wrap'} style={{ paddingTop: '96px' }}>
            {' '}
            <h2
              style={{ margin: '0', fontSize: 'clamp(28px,3.4vw,40px)', letterSpacing: '-0.03em', fontWeight: '600' }}
            >
              {'Preguntas sobre privacidad'}
            </h2>{' '}
            <dl style={{ margin: '28px 0 0', maxWidth: '820px' }}>
              {' '}
              <div style={{ borderTop: '1px solid #E6E6E8', padding: '18px 0' }}>
                <dt style={{ fontSize: '17px', fontWeight: '500' }}>{'¿Otras clínicas pueden ver mis datos?'}</dt>
                <dd style={{ margin: '6px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#3D3D42' }}>
                  {'No. La información de cada clínica está separada de la de las demás.'}
                </dd>
              </div>{' '}
              <div style={{ borderTop: '1px solid #E6E6E8', padding: '18px 0' }}>
                <dt style={{ fontSize: '17px', fontWeight: '500' }}>
                  {'¿Qué pasa si un enlace llega a la persona equivocada?'}
                </dt>
                <dd style={{ margin: '6px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#3D3D42' }}>
                  {
                    'Tu equipo confirma el destinatario antes de enviar. Cada enlace es personal, vence a los 7 días y lo puedes reemplazar cuando quieras.'
                  }
                </dd>
              </div>{' '}
              <div style={{ borderTop: '1px solid #E6E6E8', padding: '18px 0' }}>
                <dt style={{ fontSize: '17px', fontWeight: '500' }}>{'¿Hay respaldos?'}</dt>
                <dd style={{ margin: '6px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#3D3D42' }}>
                  {'Sí. Respaldos cifrados, con restauraciones probadas por separado.'}
                </dd>
              </div>{' '}
              <div style={{ borderTop: '1px solid #E6E6E8', borderBottom: '1px solid #E6E6E8', padding: '18px 0' }}>
                <dt style={{ fontSize: '17px', fontWeight: '500' }}>{'¿Mis pacientes ven un aviso de privacidad?'}</dt>
                <dd style={{ margin: '6px 0 0', fontSize: '15px', lineHeight: '1.6', color: '#3D3D42' }}>
                  {
                    'Sí. En su primer mensaje por WhatsApp, y el formato de aviso de privacidad registra su consentimiento.'
                  }
                </dd>
              </div>{' '}
            </dl>{' '}
          </section>{' '}
          <div id={'demo'} className={'wrap'} style={{ paddingTop: '96px' }}>
            {' '}
            <section
              style={{
                background: '#EDEDEF',
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
                style={{
                  fontFamily: v.hf,
                  margin: '0',
                  fontSize: 'clamp(30px,4vw,48px)',
                  letterSpacing: '-0.03em',
                  fontWeight: '600',
                }}
              >
                {'¿Tienes preguntas de privacidad?'}
              </h2>{' '}
              <a
                href={link('Contacto.dc.html')}
                style={{
                  marginTop: '24px',
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '15px 26px',
                  borderRadius: '999px',
                  background: '#18181B',
                  color: '#FFFFFF',
                }}
              >
                {'Agenda una demostración'}
              </a>{' '}
            </section>{' '}
          </div>{' '}
          <CompPiePagina />{' '}
        </div>{' '}
      </>
    );
  }
}
