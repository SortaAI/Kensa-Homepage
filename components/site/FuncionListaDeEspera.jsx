'use client';
// Generated from the design canvas (Funcion-ListaDeEspera-7vlu.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import CompEncabezado from './CompEncabezado';
import CompPiePagina from './CompPiePagina';

const CSS =
  'body{margin:0;background:#FFFFFF}\n:root{color-scheme:light}\n[id]{scroll-margin-top:24px}\nh1,h2,h3{text-wrap:balance}\np{text-wrap:pretty}\na,button,input,label{touch-action:manipulation;-webkit-tap-highlight-color:rgba(20,20,22,0.08)}\na,button{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out}\nnav a:not([style*="background: #141416"]):hover{text-decoration:underline}\n:is(a,button)[style*="background: #141416"]:hover{background:#34343A !important}\na[style*="border: 1px solid #D4D4D8"]:hover,a[style*="border: 1px solid #E0E0E3"]:hover{background:#F2F2F3 !important;border-color:#141416 !important}\nbutton[aria-expanded]:hover{color:#3D3D42 !important}\nbutton[aria-pressed="false"]:hover{background:#E6E6E8 !important}\nli a:hover > span > span:first-child{text-decoration:underline}\n.skip{position:absolute;left:-9999px;top:12px;z-index:10;background:#141416;color:#FFFFFF;padding:10px 16px;border-radius:999px;text-decoration:none}\n.skip:focus{left:16px}\n@media (prefers-reduced-motion:reduce){*{transition:none !important}}\na{color:#141416;text-underline-offset:3px}a:hover{color:#3D3D42}\n*{box-sizing:border-box}\n::selection{background:#141416;color:#FFFFFF}\n:focus-visible{outline:2px solid #141416;outline-offset:3px;border-radius:6px}\nbutton{font:inherit;cursor:pointer}\n.wrap{width:100%;max-width:1200px;margin:0 auto;padding-left:clamp(16px,4vw,40px);padding-right:clamp(16px,4vw,40px)}\n@media (max-width:820px){.hide-sm{display:none !important}.navlinks{display:none !important}}\n.kn-item:hover,.kn-trigger:hover{background:#F2F2F3 !important}\n.show-sm{display:none}\n@media (max-width:820px){.navlinks,.hide-sm{display:none !important}.show-sm{display:flex !important}}';

class Logic extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { faq: 0 };
  }
  renderVals() {
    var self = this;
    var data = [
      [
        '¿Manda ofertas sola?',
        'No. Tu equipo elige a quién ofrecerle el horario y en qué orden. Kensa manda las ofertas una por una y agenda la cita cuando alguien acepta.',
      ],
      [
        '¿El paciente tiene que aceptar recibir ofertas?',
        'Sí. Solo reciben ofertas quienes aceptaron por WhatsApp, y pueden darse de baja cuando quieran.',
      ],
      [
        '¿Se mandan ofertas en la noche o en fin de semana?',
        'No. Solo salen dentro del horario de atención de tu clínica.',
      ],
      [
        '¿Qué ve el paciente en la oferta?',
        'Una página segura con la clínica, la hora y la duración. Nada de información clínica.',
      ],
      [
        '¿Necesito algo de Meta para usarla?',
        'Sí. El mensaje de oferta debe estar aprobado por Meta. Lo mandas a aprobación desde Kensa y normalmente tarda como un día.',
      ],
    ];
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
          <div id={'contenido'} className={'wrap'} style={{ paddingTop: '16px' }}>
            {' '}
            <section
              style={{
                background: '#F2F2F3',
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
                <nav aria-label={'Ruta'} style={{ fontSize: '14px', color: '#3D3D42' }}>
                  <a href={link('Funciones.dc.html')} style={{ color: '#3D3D42' }}>
                    {'Funciones'}
                  </a>
                  {' / Recupera / '}
                  <span aria-current={'page'} style={{ color: '#141416', fontWeight: '500' }}>
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
                  {'Una cancelación ya no es una silla vacía.'}
                </h1>{' '}
                <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#3D3D42', maxWidth: '460px' }}>
                  {'Ofrece el horario a quien quiere venir antes. Uno por uno, por WhatsApp.'}
                </p>{' '}
                <a
                  href={link('Contacto.dc.html')}
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '8px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '16px',
                    padding: '16px 28px',
                    borderRadius: '999px',
                    background: '#141416',
                    color: '#FFFFFF',
                  }}
                >
                  {'Agenda una demostración'}
                </a>{' '}
              </div>{' '}
              <div style={{ flex: '1 1 320px', display: 'flex', justifyContent: 'center' }}>
                {' '}
                <img
                  src={'/img/iphone-oferta-recorte.webp'}
                  width={'543'}
                  height={'1117'}
                  loading={'lazy'}
                  alt={'Oferta de horario en el celular del paciente: se liberó un horario para ti'}
                  style={{
                    display: 'block',
                    width: '300px',
                    maxWidth: '100%',
                    height: 'auto',
                    filter: 'drop-shadow(0 24px 40px rgba(20,20,22,0.22))',
                  }}
                />{' '}
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <section className={'wrap'} style={{ paddingTop: '112px' }}>
            {' '}
            <h2
              style={{ margin: '0', fontSize: 'clamp(28px,3.4vw,42px)', letterSpacing: '-0.03em', fontWeight: '600' }}
            >
              {'Así se recupera un horario.'}
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
                  borderTop: '2px solid #141416',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#5A5A61' }}>{'1'}</span>
                <span style={{ fontSize: '17px', fontWeight: '500' }}>{'Alguien cancela'}</span>
                <span style={{ fontSize: '14px', lineHeight: '1.55', color: '#3D3D42' }}>
                  {'Se abre un horario por cubrir.'}
                </span>
              </li>{' '}
              <li
                style={{
                  borderTop: '2px solid #141416',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#5A5A61' }}>{'2'}</span>
                <span style={{ fontSize: '17px', fontWeight: '500' }}>{'Tú eliges el orden'}</span>
                <span style={{ fontSize: '14px', lineHeight: '1.55', color: '#3D3D42' }}>
                  {'Hasta 5 pacientes de tu lista. Nada de envíos masivos.'}
                </span>
              </li>{' '}
              <li
                style={{
                  borderTop: '2px solid #141416',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#5A5A61' }}>{'3'}</span>
                <span style={{ fontSize: '17px', fontWeight: '500' }}>{'Una oferta a la vez'}</span>
                <span style={{ fontSize: '14px', lineHeight: '1.55', color: '#3D3D42' }}>
                  {'Cada una dura 10 minutos, solo en horario de la clínica.'}
                </span>
              </li>{' '}
              <li
                style={{
                  borderTop: '2px solid #141416',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#5A5A61' }}>{'4'}</span>
                <span style={{ fontSize: '17px', fontWeight: '500' }}>{'Queda agendado'}</span>
                <span style={{ fontSize: '14px', lineHeight: '1.55', color: '#3D3D42' }}>
                  {'Si tenía una cita después, ese horario también se libera.'}
                </span>
              </li>{' '}
            </ol>{' '}
          </section>{' '}
          <section className={'wrap'} style={{ paddingTop: '112px' }}>
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
                  {'Tú decides quién y en qué orden.'}
                </h2>{' '}
                <p
                  style={{
                    margin: '16px 0 0',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#3D3D42',
                    maxWidth: '440px',
                  }}
                >
                  {
                    'Kensa te muestra quién de tu lista puede venir a esa hora y por qué. Tú eliges a quién ofrecerle el horario. Sin envíos masivos y sin carreras entre pacientes.'
                  }
                </p>{' '}
                <ul style={{ margin: '24px 0 0', padding: '0', listStyle: 'none' }}>
                  {' '}
                  <li style={{ borderTop: '1px solid #E6E6E8', padding: '14px 0', fontSize: '15px' }}>
                    {'Solo en el horario de tu clínica'}
                  </li>{' '}
                  <li style={{ borderTop: '1px solid #E6E6E8', padding: '14px 0', fontSize: '15px' }}>
                    {'Detienes las ofertas y liberas el horario cuando quieras'}
                  </li>{' '}
                  <li
                    style={{
                      borderTop: '1px solid #E6E6E8',
                      borderBottom: '1px solid #E6E6E8',
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
                  background: '#F2F2F3',
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
                    border: '1px solid #DCDCE0',
                    boxShadow: '0 18px 40px rgba(20,20,22,0.14)',
                    background: '#FFFFFF',
                    maxWidth: '380px',
                  }}
                />{' '}
              </div>{' '}
            </div>{' '}
          </section>{' '}
          <section className={'wrap'} style={{ paddingTop: '112px' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '40px 64px', alignItems: 'center' }}>
              {' '}
              <div
                style={{
                  flex: '1.2 1 440px',
                  minWidth: '0',
                  background: '#F2F2F3',
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
                    border: '1px solid #DCDCE0',
                    borderRadius: '16px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 18px 40px rgba(20,20,22,0.12)',
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
                      borderTop: '1px solid #ECECEE',
                      padding: '10px 0',
                    }}
                  >
                    <dt style={{ color: '#5A5A61' }}>{'Consentimiento por WhatsApp'}</dt>
                    <dd style={{ margin: '0' }}>{'Aceptado'}</dd>
                  </div>{' '}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                      borderTop: '1px solid #ECECEE',
                      padding: '10px 0',
                    }}
                  >
                    <dt style={{ color: '#5A5A61' }}>{'Días'}</dt>
                    <dd style={{ margin: '0' }}>{'Lunes a jueves'}</dd>
                  </div>{' '}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                      borderTop: '1px solid #ECECEE',
                      padding: '10px 0',
                    }}
                  >
                    <dt style={{ color: '#5A5A61' }}>{'Horario'}</dt>
                    <dd style={{ margin: '0' }}>{'Tardes'}</dd>
                  </div>{' '}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                      borderTop: '1px solid #ECECEE',
                      padding: '10px 0',
                    }}
                  >
                    <dt style={{ color: '#5A5A61' }}>{'Aviso mínimo'}</dt>
                    <dd style={{ margin: '0' }}>{'1 día'}</dd>
                  </div>{' '}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: '12px',
                      borderTop: '1px solid #ECECEE',
                      padding: '10px 0',
                    }}
                  >
                    <dt style={{ color: '#5A5A61' }}>{'Cita actual'}</dt>
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
                  {'Cada paciente, con lo que necesitas saber.'}
                </h2>{' '}
                <p
                  style={{
                    margin: '16px 0 0',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#3D3D42',
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
          <section className={'wrap'} style={{ paddingTop: '112px' }}>
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
                {'Ves lo que te regresa.'}
              </h2>{' '}
              <div style={{ flex: '1.4 1 420px' }}>
                {' '}
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#3D3D42' }}>
                  {
                    'Citas recuperadas, ofertas enviadas, tasa de aceptación y minutos promedio para cubrir un horario, en tu panel.'
                  }
                </p>{' '}
                <p style={{ margin: '16px 0 0', fontSize: '13px', color: '#5A5A61' }}>
                  {'“Recuperada” significa agendada, no que el paciente asistió.'}
                </p>{' '}
                <div style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', gap: '10px', fontSize: '14px' }}>
                  <span style={{ color: '#5A5A61', alignSelf: 'center' }}>{'Se conecta con'}</span>
                  <a
                    href={link('Funciones.dc.html#agenda')}
                    style={{
                      textDecoration: 'none',
                      border: '1px solid #E0E0E3',
                      borderRadius: '999px',
                      padding: '8px 14px',
                    }}
                  >
                    {'Agenda'}
                  </a>
                  <a
                    href={link('Funciones.dc.html#prepara')}
                    style={{
                      textDecoration: 'none',
                      border: '1px solid #E0E0E3',
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
          <section className={'wrap'} style={{ paddingTop: '96px' }}>
            {' '}
            <div style={{ maxWidth: '820px' }}>
              {' '}
              {(v.faqs || []).map((f, $index) => (
                <React.Fragment key={$index}>
                  {' '}
                  <div style={{ borderTop: '1px solid #E6E6E8' }}>
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
                        color: '#141416',
                        fontSize: '17px',
                        fontWeight: '500',
                      }}
                    >
                      {f?.q}
                      <span aria-hidden={'true'} style={{ color: '#5A5A61' }}>
                        {f?.sign}
                      </span>
                    </button>{' '}
                    {f?.open ? (
                      <>
                        <p
                          style={{
                            margin: '0',
                            padding: '0 0 20px',
                            fontSize: '15px',
                            lineHeight: '1.6',
                            color: '#3D3D42',
                          }}
                        >
                          {f?.a}
                        </p>
                      </>
                    ) : null}{' '}
                  </div>{' '}
                </React.Fragment>
              ))}{' '}
            </div>{' '}
          </section>{' '}
          <section
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
              {'Llena tu próximo hueco.'}
            </h2>{' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {' '}
              <a
                href={link('Contacto.dc.html')}
                style={{
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '16px 28px',
                  borderRadius: '999px',
                  background: '#141416',
                  color: '#FFFFFF',
                }}
              >
                {'Agenda una demostración'}
              </a>{' '}
              <a
                href={link('Funciones.dc.html')}
                style={{
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '16px 28px',
                  borderRadius: '999px',
                  border: '1px solid #D4D4D8',
                }}
              >
                {'Todas las funciones'}
              </a>{' '}
            </div>{' '}
          </section>{' '}
          <CompPiePagina />{' '}
        </div>{' '}
      </>
    );
  }
}
