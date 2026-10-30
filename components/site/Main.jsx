'use client';
// Generated from the design canvas (Main-wyk4.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import CompEncabezado from './CompEncabezado';
import CompPiePagina from './CompPiePagina';

const CSS =
  'body{margin:0;background:#FFFFFF}\n:root{color-scheme:light}\n[id]{scroll-margin-top:24px}\nh1,h2,h3{text-wrap:balance}\np{text-wrap:pretty}\na,button,input,label{touch-action:manipulation;-webkit-tap-highlight-color:rgba(20,20,22,0.08)}\na,button{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out}\nnav a:not([style*="background: #141416"]):hover{text-decoration:underline}\n:is(a,button)[style*="background: #141416"]:hover{background:#34343A !important}\na[style*="border: 1px solid #D4D4D8"]:hover,a[style*="border: 1px solid #E0E0E3"]:hover{background:#F2F2F3 !important;border-color:#141416 !important}\nbutton[aria-expanded]:hover{color:#3D3D42 !important}\nbutton[aria-pressed="false"]:hover{background:#E6E6E8 !important}\nli a:hover > span > span:first-child{text-decoration:underline}\n.skip{position:absolute;left:-9999px;top:12px;z-index:10;background:#141416;color:#FFFFFF;padding:10px 16px;border-radius:999px;text-decoration:none}\n.skip:focus{left:16px}\n@media (prefers-reduced-motion:reduce){*{transition:none !important}}\na{color:#141416;text-underline-offset:3px}a:hover{color:#3D3D42}\n*{box-sizing:border-box}\n::selection{background:#141416;color:#FFFFFF}\n:focus-visible{outline:2px solid #141416;outline-offset:3px;border-radius:6px}\ninput{caret-color:#141416}\ninput::placeholder{color:#6B6B72}\nbutton{font:inherit;cursor:pointer}\n.wrap{width:100%;max-width:1200px;margin:0 auto;padding-left:clamp(16px,4vw,40px);padding-right:clamp(16px,4vw,40px)}\n@media (max-width:820px){.hide-sm{display:none !important}.navlinks{display:none !important}}\n.kn-item:hover,.kn-trigger:hover{background:#F2F2F3 !important}\n.show-sm{display:none}\n@media (max-width:820px){.navlinks,.hide-sm{display:none !important}.show-sm{display:flex !important}}';

class Logic extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { step: 0, sent: false, faq: 0 };
  }
  renderVals() {
    var self = this,
      st = this.state;
    var img = function (src, alt, w, h) {
      return { isImg: true, isSeal: false, isOffer: false, src: src, alt: alt, w: w, h: h };
    };
    var data = [
      {
        ic: 'M6.094 11.229A8.01 8.01 0 0 1 6 10c0-4.418 3.605-8 8.053-8 4.447 0 8.052 3.582 8.052 8a7.94 7.94 0 0 1-.52 2.835c-.07.182-.105.274-.12.345a.897.897 0 0 0-.024.194c-.002.073.008.153.028.314l.403 3.27c.043.355.065.532.006.66a.5.5 0 0 1-.257.252c-.13.055-.306.03-.66-.022l-3.184-.467c-.167-.024-.25-.037-.326-.036a.898.898 0 0 0-.2.021 2.989 2.989 0 0 0-.358.122 8.174 8.174 0 0 1-4.07.42M7.632 22C10.597 22 13 19.538 13 16.5S10.597 11 7.632 11c-2.965 0-5.369 2.462-5.369 5.5 0 .61.097 1.198.277 1.747.075.232.113.348.126.427.013.083.015.13.01.213-.005.08-.025.17-.065.351L2 22l2.995-.409c.163-.022.245-.034.316-.033.076 0 .115.005.19.02.07.013.173.05.381.123a5.246 5.246 0 0 0 1.75.299Z',
        verb: 'Conecta',
        line: 'El paciente escribe por WhatsApp. Lo que necesita a una persona llega a tu bandeja.',
        shot: img(
          '/img/laptop-mensajes.webp',
          'Kensa en una laptop: la bandeja de Mensajes con la conversación de una paciente abierta',
          1920,
          1440,
        ),
      },
      {
        ic: 'M21 10H3m13-8v4M8 2v4m1 10 2 2 4.5-4.5M7.8 22h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22Z',
        verb: 'Agenda',
        line: 'Citas con tus horarios reales y sin empalmes. Confirmas con un clic.',
        shot: img(
          '/img/laptop-agenda-dia.webp',
          'Kensa en una laptop: la agenda del día con citas confirmadas y una por confirmar',
          1920,
          1440,
        ),
      },
      {
        ic: 'M16 4c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C20 6.605 20 7.07 20 8v9.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V8c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.122-2.122C6.605 4 7.07 4 8 4m1 11 2 2 4.5-4.5M9.6 6h4.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C16 5.24 16 4.96 16 4.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C15.24 2 14.96 2 14.4 2H9.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C8 2.76 8 3.04 8 3.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C8.76 6 9.04 6 9.6 6Z',
        verb: 'Prepara',
        line: 'Cada paciente con sus formatos, y sabes cuáles faltan.',
        shot: img(
          '/img/laptop-elegir-documentos.webp',
          'Kensa en una laptop: elegir los documentos de la visita con su vista previa',
          1920,
          1440,
        ),
      },
      {
        ic: 'M12 17.5h.01M8.2 22h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 20.48 19 19.92 19 18.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 2 16.92 2 15.8 2H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 3.52 5 4.08 5 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 22 7.08 22 8.2 22Zm4.3-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
        verb: 'Llena',
        line: 'El paciente escribe sus datos una vez y se llenan en todos sus formatos.',
        shot: img(
          '/img/laptop-asi-va-quedando.webp',
          'Kensa en una laptop: las respuestas del paciente ya llenas en su formato, con la vista de cómo va quedando',
          1920,
          1440,
        ),
      },
      {
        ic: 'M13 6 6.502 7.3c-.363.072-.545.108-.692.197a1 1 0 0 0-.325.312c-.094.144-.138.324-.225.684L2 22m0 0 13.507-3.26c.36-.087.54-.13.684-.225a1 1 0 0 0 .312-.325c.088-.148.125-.329.197-.692L18 11M2 22l7.586-7.586m11.283-6.546L16.13 3.131c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668l-.738.737c-.396.397-.594.595-.668.823a1 1 0 0 0 0 .618c.074.228.272.426.668.822l4.738 4.737c.396.396.594.595.822.669a1 1 0 0 0 .618 0c.228-.075.426-.273.822-.669l.738-.737c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.229-.272-.427-.668-.823ZM11 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z',
        verb: 'Firma y sella',
        line: 'El profesional firma y bloquea. El expediente queda sellado.',
        shot: img(
          '/img/laptop-visita-firmada.webp',
          'Kensa en una laptop: visita firmada y bloqueada, con su registro sellado y su huella digital',
          1920,
          1440,
        ),
      },
      {
        ic: 'M2 10s2.005-2.732 3.634-4.362A9 9 0 1 1 12 21a9.004 9.004 0 0 1-8.648-6.5M2 10V4m0 6h6',
        verb: 'Recupera',
        line: 'Si alguien cancela, ofreces el horario a tu lista de espera.',
        shot: img(
          '/img/iphone-oferta.webp',
          'Oferta de horario en el celular del paciente: se liberó un horario para ti',
          1920,
          1440,
        ),
      },
    ];
    var steps = data.map(function (s, i) {
      var open = st.step === i;
      return {
        n: '0' + (i + 1),
        ic: s.ic,
        verb: s.verb,
        line: s.line,
        open: open,
        sign: open ? '−' : '+',
        pick: function () {
          self.setState({ step: i });
        },
      };
    });
    var faqData = [
      ['¿Mis pacientes tienen que descargar algo?', 'No. Usan WhatsApp y el navegador de su celular.'],
      [
        '¿Puedo seguir usando mi número de WhatsApp?',
        'Sí. Conectas el mismo número y sigues usando WhatsApp Business en tu celular, o usas uno dedicado.',
      ],
      [
        '¿Puedo usar mis propios formatos?',
        'Sí. Subes un PDF o una foto, Kensa detecta los campos y tu equipo los revisa. También puedes empezar con la biblioteca de 7 formatos.',
      ],
      ['¿Podemos probarlo sin datos reales?', 'Sí. El modo de prueba con datos de práctica siempre está disponible.'],
    ];
    var faqs = faqData.map(function (f, i) {
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
    return {
      faqs: faqs,
      steps: steps,
      shot: data[st.step].shot,
      sent: st.sent,
      notSent: !st.sent,
      submit: function (e) {
        e.preventDefault();
        self.setState({ sent: true });
      },
    };
  }
}

export default class Main extends Logic {
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
                padding: 'clamp(48px,7vw,88px) clamp(16px,5vw,64px) 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                overflow: 'hidden',
              }}
            >
              {' '}
              <h1
                style={{
                  margin: '0',
                  fontSize: 'clamp(38px,6vw,72px)',
                  lineHeight: '1.04',
                  letterSpacing: '-0.035em',
                  fontWeight: '600',
                  maxWidth: '900px',
                  textWrap: 'balance',
                }}
              >
                {'Del primer mensaje '}
                <span style={{ color: '#6E6E76' }}>{'al expediente firmado.'}</span>
              </h1>{' '}
              <p
                style={{
                  margin: '20px 0 0',
                  fontSize: 'clamp(16px,1.5vw,18px)',
                  lineHeight: '1.6',
                  color: '#3D3D42',
                  maxWidth: '520px',
                }}
              >
                {'WhatsApp, agenda, lista de espera y documentos de tu clínica, en un solo flujo.'}
              </p>{' '}
              {v.notSent ? (
                <>
                  {' '}
                  <form
                    onSubmit={v.submit}
                    style={{
                      marginTop: '32px',
                      width: '100%',
                      maxWidth: '640px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      background: '#FFFFFF',
                      border: '1px solid #E0E0E3',
                      borderRadius: '22px',
                      padding: '6px',
                      textAlign: 'left',
                      boxShadow: '0 10px 30px rgba(20,20,22,0.07)',
                    }}
                  >
                    {' '}
                    <label
                      style={{
                        flex: '1 1 170px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px',
                        padding: '8px 14px',
                        fontSize: '12px',
                        color: '#5A5A61',
                      }}
                    >
                      {'Clínica'}
                      <input
                        name={'clinica'}
                        autoComplete={'organization'}
                        required={true}
                        placeholder={'Clínica Vida…'}
                        style={{
                          border: '0',
                          background: 'transparent',
                          font: 'inherit',
                          fontSize: '15px',
                          color: '#141416',
                          padding: '2px 0',
                        }}
                      />
                    </label>{' '}
                    <label
                      style={{
                        flex: '1 1 170px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px',
                        padding: '8px 14px',
                        fontSize: '12px',
                        color: '#5A5A61',
                        borderLeft: '1px solid #ECECEE',
                      }}
                    >
                      {'WhatsApp'}
                      <input
                        name={'whatsapp'}
                        type={'tel'}
                        inputMode={'tel'}
                        autoComplete={'tel'}
                        required={true}
                        placeholder={'+52 656 123 4567…'}
                        style={{
                          border: '0',
                          background: 'transparent',
                          font: 'inherit',
                          fontSize: '15px',
                          color: '#141416',
                          padding: '2px 0',
                        }}
                      />
                    </label>{' '}
                    <button
                      type={'submit'}
                      style={{
                        flex: '0 0 auto',
                        border: '0',
                        borderRadius: '16px',
                        background: '#141416',
                        color: '#FFFFFF',
                        fontSize: '15px',
                        fontWeight: '500',
                        padding: '0 22px',
                        minHeight: '52px',
                      }}
                    >
                      {'Agenda una demo'}
                    </button>{' '}
                  </form>{' '}
                  <p style={{ margin: '12px 0 0', fontSize: '13px', color: '#5A5A61' }}>
                    {'Recibes un WhatsApp para coordinar. Sin compromiso.'}
                  </p>
                  <div style={{ position: 'relative', marginTop: '56px', width: '100%', maxWidth: '1040px' }}>
                    {' '}
                    <div style={{ boxSizing: 'border-box', paddingBottom: '40px' }}>
                      <img
                        src={'/img/hero-laptop-agenda.webp'}
                        width={'1792'}
                        height={'1084'}
                        fetchPriority={'high'}
                        alt={'Kensa en una laptop: la agenda semanal con citas confirmadas y por confirmar'}
                        style={{ display: 'block', width: '100%', height: 'auto' }}
                      />
                      <img
                        className={'hide-sm'}
                        src={'/img/hero-iphone-paciente.webp'}
                        width={'543'}
                        height={'1117'}
                        alt={'Kensa en el celular del paciente: completa tus documentos'}
                        style={{
                          position: 'absolute',
                          left: '-3%',
                          bottom: '30px',
                          width: '21%',
                          height: 'auto',
                          filter: 'drop-shadow(0 24px 40px rgba(20,20,22,0.22))',
                        }}
                      />
                    </div>{' '}
                  </div>{' '}
                </>
              ) : null}{' '}
              {v.sent ? (
                <>
                  {' '}
                  <p
                    role={'status'}
                    aria-live={'polite'}
                    style={{
                      margin: '32px 0 0',
                      background: '#FFFFFF',
                      border: '1px solid #E0E0E3',
                      borderRadius: '18px',
                      padding: '16px 22px',
                      fontSize: '15px',
                    }}
                  >
                    {'Listo. En breve recibes un WhatsApp para agendar tu demo.'}
                  </p>{' '}
                </>
              ) : null}{' '}
            </section>{' '}
          </div>{' '}
          <div className={'wrap'} style={{ paddingTop: '28px' }}>
            {' '}
            <p
              style={{
                margin: '0',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '8px 26px',
                fontSize: '14px',
                color: '#3D3D42',
              }}
            >
              {' '}
              <span>{'Hecho para clínicas en México'}</span>
              <span aria-hidden={'true'} style={{ color: '#B4B4BA' }}>
                {'/'}
              </span>{' '}
              <span>{'Sobre WhatsApp'}</span>
              <span aria-hidden={'true'} style={{ color: '#B4B4BA' }}>
                {'/'}
              </span>{' '}
              <span>{'Formatos basados en la NOM-004'}</span>
              <span aria-hidden={'true'} style={{ color: '#B4B4BA' }}>
                {'/'}
              </span>{' '}
              <span>{'Expedientes sellados'}</span>
              <span aria-hidden={'true'} style={{ color: '#B4B4BA' }}>
                {'/'}
              </span>{' '}
              <span>{'Modo de prueba'}</span>{' '}
            </p>{' '}
          </div>{' '}
          <section className={'wrap'} style={{ paddingTop: '120px' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 72px' }}>
              {' '}
              <div style={{ flex: '1 1 320px' }}>
                {' '}
                <h2
                  style={{
                    margin: '0',
                    fontSize: 'clamp(30px,3.8vw,46px)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.03em',
                    fontWeight: '600',
                  }}
                >
                  {'Tu recepción hace 5 trabajos a la vez.'}
                </h2>{' '}
                <p
                  style={{
                    margin: '16px 0 0',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#3D3D42',
                    maxWidth: '400px',
                  }}
                >
                  {
                    'Contestar WhatsApp, acomodar la agenda, llamar cuando alguien cancela, repartir formatos y perseguir firmas. Cada vez que una tarea pasa a la otra, se pierde tiempo y dinero.'
                  }
                </p>{' '}
              </div>{' '}
              <ul style={{ flex: '1.4 1 460px', listStyle: 'none', margin: '0', padding: '0' }}>
                {' '}
                <li style={{ borderTop: '1px solid #E6E6E8' }}>
                  <a
                    href={link('Funcion-Asistente.dc.html')}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '18px 0',
                    }}
                  >
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '17px', fontWeight: '500' }}>
                        {'“Todo el día contesto lo mismo por WhatsApp.”'}
                      </span>
                      <span style={{ fontSize: '14px', color: '#3D3D42' }}>
                        {'El asistente resuelve lo de siempre y te pasa lo demás.'}
                      </span>
                    </span>
                    <span aria-hidden={'true'} style={{ color: '#5A5A61', display: 'flex' }}>
                      <svg
                        width={'18'}
                        height={'18'}
                        viewBox={'0 0 24 24'}
                        fill={'none'}
                        stroke={'currentColor'}
                        strokeWidth={'2'}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                      >
                        <path d={'M5 12h14m0 0-7-7m7 7-7 7'} />
                      </svg>
                    </span>
                  </a>
                </li>{' '}
                <li style={{ borderTop: '1px solid #E6E6E8' }}>
                  <a
                    href={link('Funcion-ListaDeEspera.dc.html')}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '18px 0',
                    }}
                  >
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '17px', fontWeight: '500' }}>
                        {'“Alguien cancela y me pongo a llamar.”'}
                      </span>
                      <span style={{ fontSize: '14px', color: '#3D3D42' }}>
                        {'La lista de espera ofrece el horario, uno por uno.'}
                      </span>
                    </span>
                    <span aria-hidden={'true'} style={{ color: '#5A5A61', display: 'flex' }}>
                      <svg
                        width={'18'}
                        height={'18'}
                        viewBox={'0 0 24 24'}
                        fill={'none'}
                        stroke={'currentColor'}
                        strokeWidth={'2'}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                      >
                        <path d={'M5 12h14m0 0-7-7m7 7-7 7'} />
                      </svg>
                    </span>
                  </a>
                </li>{' '}
                <li style={{ borderTop: '1px solid #E6E6E8' }}>
                  <a
                    href={link('Funcion-FormatosCelular.dc.html')}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '18px 0',
                    }}
                  >
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '17px', fontWeight: '500' }}>
                        {'“Papel, escanear, volver a capturar.”'}
                      </span>
                      <span style={{ fontSize: '14px', color: '#3D3D42' }}>
                        {'El paciente llena y firma desde su celular.'}
                      </span>
                    </span>
                    <span aria-hidden={'true'} style={{ color: '#5A5A61', display: 'flex' }}>
                      <svg
                        width={'18'}
                        height={'18'}
                        viewBox={'0 0 24 24'}
                        fill={'none'}
                        stroke={'currentColor'}
                        strokeWidth={'2'}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                      >
                        <path d={'M5 12h14m0 0-7-7m7 7-7 7'} />
                      </svg>
                    </span>
                  </a>
                </li>{' '}
                <li style={{ borderTop: '1px solid #E6E6E8', borderBottom: '1px solid #E6E6E8' }}>
                  <a
                    href={link('Funcion-ExpedientesSellados.dc.html')}
                    style={{
                      textDecoration: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '18px 0',
                    }}
                  >
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '17px', fontWeight: '500' }}>{'“¿Aguantaríamos una auditoría?”'}</span>
                      <span style={{ fontSize: '14px', color: '#3D3D42' }}>
                        {'Expedientes firmados, bloqueados y sellados.'}
                      </span>
                    </span>
                    <span aria-hidden={'true'} style={{ color: '#5A5A61', display: 'flex' }}>
                      <svg
                        width={'18'}
                        height={'18'}
                        viewBox={'0 0 24 24'}
                        fill={'none'}
                        stroke={'currentColor'}
                        strokeWidth={'2'}
                        strokeLinecap={'round'}
                        strokeLinejoin={'round'}
                      >
                        <path d={'M5 12h14m0 0-7-7m7 7-7 7'} />
                      </svg>
                    </span>
                  </a>
                </li>{' '}
              </ul>{' '}
            </div>{' '}
          </section>{' '}
          <section className={'wrap'} style={{ paddingTop: '120px' }}>
            {' '}
            <h2
              style={{
                margin: '0',
                textAlign: 'center',
                fontSize: 'clamp(30px,4vw,48px)',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
                fontWeight: '600',
                textWrap: 'balance',
              }}
            >
              {'Un solo flujo. '}
              <span style={{ color: '#6E6E76' }}>{'Cada paso conectado.'}</span>
            </h2>{' '}
            <div style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'stretch' }}>
              {' '}
              <div style={{ flex: '1 1 360px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
                {' '}
                {(v.steps || []).map((s, $index) => (
                  <React.Fragment key={$index}>
                    {' '}
                    <div style={{ borderTop: '1px solid #E6E6E8' }}>
                      {' '}
                      <button
                        type={'button'}
                        onClick={s?.pick}
                        aria-expanded={s?.open}
                        style={{
                          width: '100%',
                          background: 'transparent',
                          border: '0',
                          padding: '18px 4px',
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '16px',
                          textAlign: 'left',
                          color: '#141416',
                        }}
                      >
                        {' '}
                        <span
                          aria-hidden={'true'}
                          style={{
                            width: '34px',
                            height: '34px',
                            borderRadius: '10px',
                            border: '1px solid #E0E0E3',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: '0',
                            alignSelf: 'center',
                          }}
                        >
                          <svg
                            width={'18'}
                            height={'18'}
                            viewBox={'0 0 24 24'}
                            fill={'none'}
                            stroke={'currentColor'}
                            strokeWidth={'2'}
                            strokeLinecap={'round'}
                            strokeLinejoin={'round'}
                          >
                            <path d={s?.ic} />
                          </svg>
                        </span>{' '}
                        <span style={{ flex: '1', fontSize: '19px', fontWeight: '500' }}>{s?.verb}</span>{' '}
                        <span aria-hidden={'true'} style={{ fontSize: '18px', color: '#5A5A61' }}>
                          {s?.sign}
                        </span>{' '}
                      </button>{' '}
                      {s?.open ? (
                        <>
                          {' '}
                          <p
                            style={{
                              margin: '0',
                              padding: '0 4px 20px 54px',
                              fontSize: '15px',
                              lineHeight: '1.6',
                              color: '#3D3D42',
                            }}
                          >
                            {s?.line}
                          </p>{' '}
                        </>
                      ) : null}{' '}
                    </div>{' '}
                  </React.Fragment>
                ))}{' '}
                <a href={link('Funciones.dc.html')} style={{ marginTop: '20px', fontSize: '15px', fontWeight: '500' }}>
                  {'Ver todas las funciones'}
                </a>{' '}
              </div>{' '}
              <div
                style={{
                  flex: '1.6 1 520px',
                  minWidth: '0',
                  background: '#F2F2F3',
                  borderRadius: '28px',
                  padding: 'clamp(20px,3vw,36px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '460px',
                }}
              >
                {' '}
                {v.shot?.isImg ? (
                  <>
                    {' '}
                    <img
                      src={v.shot?.src}
                      width={v.shot?.w}
                      height={v.shot?.h}
                      loading={'lazy'}
                      alt={v.shot?.alt}
                      style={{
                        display: 'block',
                        width: '100%',
                        height: 'auto',
                        maxHeight: '520px',
                        objectFit: 'contain',
                        borderRadius: '14px',
                        border: '1px solid #DCDCE0',
                        boxShadow: '0 14px 36px rgba(20,20,22,0.10)',
                        background: '#FFFFFF',
                      }}
                    />{' '}
                  </>
                ) : null}{' '}
                {v.shot?.isSeal ? (
                  <>
                    {' '}
                    <img
                      src={'/img/pantalla-expediente-sellado-v1.jpg'}
                      width={'1100'}
                      height={'600'}
                      loading={'lazy'}
                      alt={'Visita firmada y bloqueada con su huella digital'}
                      style={{
                        display: 'block',
                        width: '100%',
                        height: 'auto',
                        borderRadius: '14px',
                        border: '1px solid #DCDCE0',
                        boxShadow: '0 18px 40px rgba(20,20,22,0.14)',
                        background: '#FFFFFF',
                        maxWidth: '520px',
                      }}
                    />{' '}
                  </>
                ) : null}{' '}
                {v.shot?.isOffer ? (
                  <>
                    {' '}
                    <img
                      src={'/img/celular-oferta-v1.jpg'}
                      width={'780'}
                      height={'1688'}
                      loading={'lazy'}
                      alt={'Oferta de horario en el celular del paciente'}
                      style={{
                        display: 'block',
                        width: '260px',
                        maxWidth: '100%',
                        height: 'auto',
                        border: '8px solid #141416',
                        borderRadius: '36px',
                        boxShadow: '0 20px 44px rgba(20,20,22,0.18)',
                        background: '#FBFBFC',
                      }}
                    />{' '}
                  </>
                ) : null}{' '}
              </div>{' '}
            </div>{' '}
          </section>{' '}
          <div className={'wrap'} style={{ paddingTop: '120px' }}>
            {' '}
            <section
              style={{
                background: '#18181B',
                color: '#FAFAFA',
                borderRadius: '32px',
                padding: 'clamp(36px,6vw,72px)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '40px 64px',
              }}
            >
              {' '}
              <h2
                style={{
                  flex: '1 1 320px',
                  margin: '0',
                  fontSize: 'clamp(30px,3.8vw,46px)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: '600',
                  textWrap: 'balance',
                }}
              >
                {'Menos sillas vacías. Menos papeleo. Recepción tranquila.'}
              </h2>{' '}
              <dl style={{ flex: '1 1 420px', margin: '0', display: 'flex', flexDirection: 'column' }}>
                {' '}
                <div
                  style={{
                    borderTop: '1px solid #3A3A40',
                    padding: '18px 0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Protege tus ingresos'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#C9C9CF' }}>
                    {'Las cancelaciones vuelven a ocuparse.'}
                  </dd>
                </div>{' '}
                <div
                  style={{
                    borderTop: '1px solid #3A3A40',
                    padding: '18px 0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Libera a recepción'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#C9C9CF' }}>
                    {'Menos llamadas y chats repetidos.'}
                  </dd>
                </div>{' '}
                <div
                  style={{
                    borderTop: '1px solid #3A3A40',
                    padding: '18px 0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Pacientes más contentos'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#C9C9CF' }}>
                    {'Todo desde su celular, a su ritmo.'}
                  </dd>
                </div>{' '}
                <div
                  style={{
                    borderTop: '1px solid #3A3A40',
                    borderBottom: '1px solid #3A3A40',
                    padding: '18px 0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Listos para auditoría'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#C9C9CF' }}>
                    {'Expedientes firmados y sellados.'}
                  </dd>
                </div>{' '}
              </dl>{' '}
            </section>{' '}
          </div>{' '}
          <section className={'wrap'} style={{ paddingTop: '120px' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 72px' }}>
              {' '}
              <div style={{ flex: '1 1 300px' }}>
                {' '}
                <h2
                  style={{
                    margin: '0',
                    fontSize: 'clamp(30px,3.8vw,46px)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.03em',
                    fontWeight: '600',
                  }}
                >
                  {'Preguntas frecuentes'}
                </h2>{' '}
                <a
                  href={link('Precios.dc.html')}
                  style={{ display: 'inline-block', marginTop: '16px', fontSize: '15px', fontWeight: '500' }}
                >
                  {'Ver más preguntas'}
                </a>{' '}
              </div>{' '}
              <div style={{ flex: '1.6 1 480px' }}>
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
            </div>{' '}
          </section>{' '}
          <section
            id={'demo'}
            className={'wrap'}
            style={{
              paddingTop: '120px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {' '}
            <h2
              style={{
                margin: '0',
                fontSize: 'clamp(32px,4.4vw,54px)',
                lineHeight: '1.05',
                letterSpacing: '-0.03em',
                fontWeight: '600',
              }}
            >
              {'Conecta tu recepción.'}
            </h2>{' '}
            <p style={{ margin: '14px 0 0', fontSize: '16px', color: '#3D3D42' }}>
              {'Te lo enseñamos con tus propios formatos.'}
            </p>{' '}
            <a
              href={link('Contacto.dc.html')}
              style={{
                marginTop: '28px',
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
          </section>{' '}
          <CompPiePagina />{' '}
        </div>{' '}
      </>
    );
  }
}
