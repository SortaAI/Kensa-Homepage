'use client';
// Generated from the design canvas (Precios-pmj5.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import CompEncabezado from './CompEncabezado';
import CompPiePagina from './CompPiePagina';

const CSS =
  'body{margin:0;background:#FFFFFF}\n:root{color-scheme:light}\n[id]{scroll-margin-top:24px}\nh1,h2,h3{text-wrap:balance}\np{text-wrap:pretty}\na,button,input,label{touch-action:manipulation;-webkit-tap-highlight-color:rgba(20,20,22,0.08)}\na,button{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out}\nnav a:not([style*="background: #18181B"]):hover{text-decoration:underline}\n:is(a,button)[style*="background: #18181B"]:hover{background:#34343A !important}\na[style*="border: 1px solid #D4D4D8"]:hover{background:#F2F2F3 !important;border-color:#141416 !important}\nbutton[aria-expanded]:hover{color:#3D3D42 !important}\n.skip{position:absolute;left:-9999px;top:12px;z-index:10;background:#141416;color:#FFFFFF;padding:10px 16px;border-radius:999px;text-decoration:none}\n.skip:focus{left:16px}\n@media (prefers-reduced-motion:reduce){*{transition:none !important}}\n::selection{background:#141416;color:#FFFFFF}\n:focus-visible{outline:2px solid #141416;outline-offset:3px;border-radius:6px}\ninput{caret-color:#141416}\na{color:#18181B}a:hover{color:#3F3F46}\n*{box-sizing:border-box}\nbutton{font:inherit;cursor:pointer}\n.wrap{width:100%;max-width:1200px;margin:0 auto;padding-left:clamp(16px,4vw,40px);padding-right:clamp(16px,4vw,40px)}\n@media (max-width:820px){.hide-sm{display:none !important}.navlinks{display:none !important}}\n.kn-item:hover,.kn-trigger:hover{background:#F2F2F3 !important}\n.show-sm{display:none}\n@media (max-width:820px){.navlinks,.hide-sm{display:none !important}.show-sm{display:flex !important}}';

class Logic extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { faq: 0, fee: '', cancels: '', share: 10, patients: '', mins: '' };
  }
  renderVals() {
    var self = this,
      st = this.state;
    var hf = "'Poppins', system-ui, sans-serif";
    var data = [
      ['¿Mis pacientes tienen que descargar algo?', 'No. Usan WhatsApp y el navegador de su celular.'],
      [
        '¿Puedo seguir usando mi número de WhatsApp?',
        'Sí. Puedes conectar el mismo número y seguir usando WhatsApp Business en tu celular, o usar uno dedicado.',
      ],
      [
        '¿Puedo usar mis propios formatos?',
        'Sí. Sube un PDF o una foto y Kensa detecta los campos para que tu equipo los revise. O empieza con nuestra biblioteca de siete formatos.',
      ],
      [
        '¿Qué pasa si hay que corregir un expediente firmado?',
        'Agregas una nota posterior firmada. El original no cambia.',
      ],
      ['¿Podemos probarlo sin datos reales?', 'Sí. El modo de prueba con datos de práctica siempre está disponible.'],
      [
        '¿La firma es una firma electrónica certificada?',
        'No. Es una firma en pantalla ligada al expediente. Kensa todavía no ofrece firma electrónica certificada.',
      ],
    ];
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

export default class Precios extends Logic {
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
          <section id={'contenido'} className={'wrap'} style={{ paddingTop: '88px' }}>
            {' '}
            <h1
              style={{
                fontFamily: v.hf,
                margin: '0',
                textAlign: 'center',
                fontSize: 'clamp(38px,5.6vw,64px)',
                lineHeight: '1.04',
                letterSpacing: '-0.035em',
                fontWeight: '600',
              }}
            >
              {'Precio por sede. '}
              <span style={{ color: '#74747C' }}>{'Sin costos ocultos.'}</span>
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
                style={{
                  border: '1px solid #E4E4E7',
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
                  <span style={{ display: 'block', marginTop: '6px', fontSize: '13px', color: '#3F3F46' }}>
                    {'MXN al mes + IVA. Te lo damos en la demo, por escrito.'}
                  </span>
                </div>{' '}
                <span style={{ fontSize: '14px', color: '#3F3F46' }}>
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
                    borderTop: '1px solid #DCDCE0',
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
                  href={link('Contacto.dc.html')}
                  style={{
                    marginTop: 'auto',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontSize: '15px',
                    fontWeight: '500',
                    padding: '13px',
                    borderRadius: '999px',
                    border: '1px solid #D4D4D8',
                  }}
                >
                  {'Agenda una demo'}
                </a>{' '}
              </div>{' '}
              <div
                style={{
                  background: '#EDEDEF',
                  border: '1px solid #D4D4D8',
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
                  <span style={{ display: 'block', marginTop: '6px', fontSize: '13px', color: '#3F3F46' }}>
                    {'Piloto completo. Después, precio fundador por sede + IVA.'}
                  </span>
                </div>{' '}
                <span style={{ fontSize: '14px', color: '#3F3F46' }}>
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
                    borderTop: '1px solid #DCDCE0',
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
                  href={link('Contacto.dc.html')}
                  style={{
                    marginTop: 'auto',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontSize: '15px',
                    fontWeight: '500',
                    padding: '13px',
                    borderRadius: '999px',
                    background: '#18181B',
                    color: '#FFFFFF',
                  }}
                >
                  {'Solicita tu lugar'}
                </a>{' '}
              </div>{' '}
              <div
                style={{
                  border: '1px solid #E4E4E7',
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
                  <span style={{ display: 'block', marginTop: '6px', fontSize: '13px', color: '#3F3F46' }}>
                    {'Precio por sede + IVA.'}
                  </span>
                </div>{' '}
                <span style={{ fontSize: '14px', color: '#3F3F46' }}>{'Para grupos con dos o más ubicaciones.'}</span>{' '}
                <ul
                  style={{
                    margin: '0',
                    padding: '16px 0 0',
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    borderTop: '1px solid #DCDCE0',
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
                  href={link('Contacto.dc.html')}
                  style={{
                    marginTop: 'auto',
                    textDecoration: 'none',
                    textAlign: 'center',
                    fontSize: '15px',
                    fontWeight: '500',
                    padding: '13px',
                    borderRadius: '999px',
                    border: '1px solid #D4D4D8',
                  }}
                >
                  {'Escríbenos'}
                </a>{' '}
              </div>{' '}
            </div>{' '}
            <p style={{ margin: '16px 0 0', textAlign: 'center', fontSize: '13px', color: '#52525B' }}>
              {
                'Precios en pesos mexicanos, más IVA. Todos incluyen modo de prueba y acompañamiento en tu primer envío real.'
              }
            </p>{' '}
          </section>{' '}
          <section className={'wrap'} style={{ paddingTop: '96px' }}>
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
                <li style={{ borderTop: '1px solid #E6E6E8', padding: '14px 0', fontSize: '15px' }}>
                  {'Asistente de WhatsApp y bandeja compartida'}
                </li>{' '}
                <li style={{ borderTop: '1px solid #E6E6E8', padding: '14px 0', fontSize: '15px' }}>
                  {'Agenda y solicitudes por confirmar'}
                </li>{' '}
                <li style={{ borderTop: '1px solid #E6E6E8', padding: '14px 0', fontSize: '15px' }}>
                  {'Lista de espera'}
                </li>{' '}
                <li style={{ borderTop: '1px solid #E6E6E8', padding: '14px 0', fontSize: '15px' }}>
                  {'Biblioteca de 7 formatos y tus propios PDF'}
                </li>{' '}
                <li style={{ borderTop: '1px solid #E6E6E8', padding: '14px 0', fontSize: '15px' }}>
                  {'Autollenado y firma en el celular'}
                </li>{' '}
                <li style={{ borderTop: '1px solid #E6E6E8', padding: '14px 0', fontSize: '15px' }}>
                  {'Expedientes firmados y sellados'}
                </li>{' '}
                <li style={{ borderTop: '1px solid #E6E6E8', padding: '14px 0', fontSize: '15px' }}>
                  {'Modo de prueba'}
                </li>{' '}
                <li style={{ borderTop: '1px solid #E6E6E8', padding: '14px 0', fontSize: '15px' }}>
                  {'Acompañamiento en tu primer envío'}
                </li>{' '}
              </ul>{' '}
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
                gap: '32px',
              }}
            >
              {' '}
              <div style={{ flex: '1 1 300px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {' '}
                <h2
                  style={{
                    fontFamily: v.hf,
                    margin: '0',
                    fontSize: 'clamp(26px,3vw,36px)',
                    lineHeight: '1.15',
                    letterSpacing: '-0.025em',
                    fontWeight: '600',
                  }}
                >
                  {'¿Cuánto se te va en cancelaciones?'}
                </h2>{' '}
                <p style={{ margin: '0', fontSize: '13px', lineHeight: '1.5', color: '#C4C4CA' }}>
                  {'Es una estimación con tus datos, no una promesa.'}
                </p>{' '}
              </div>{' '}
              <div
                style={{
                  flex: '2 1 480px',
                  minWidth: '0',
                  background: '#FFFFFF',
                  color: '#18181B',
                  borderRadius: '20px',
                  padding: '24px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
                  gap: '12px',
                }}
              >
                {' '}
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#3F3F46' }}
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
                      border: '1px solid #D4D4D8',
                      borderRadius: '12px',
                      color: '#18181B',
                    }}
                  />
                </label>{' '}
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#3F3F46' }}
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
                      border: '1px solid #D4D4D8',
                      borderRadius: '12px',
                      color: '#18181B',
                    }}
                  />
                </label>{' '}
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#3F3F46' }}
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
                    style={{ width: '100%', accentColor: '#27272A', marginTop: '12px' }}
                  />
                </label>{' '}
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#3F3F46' }}
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
                      border: '1px solid #D4D4D8',
                      borderRadius: '12px',
                      color: '#18181B',
                    }}
                  />
                </label>{' '}
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '13px', color: '#3F3F46' }}
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
                      border: '1px solid #D4D4D8',
                      borderRadius: '12px',
                      color: '#18181B',
                    }}
                  />
                </label>{' '}
                <div
                  style={{
                    background: '#F4F4F5',
                    borderRadius: '14px',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span style={{ fontSize: '12px', color: '#3F3F46' }}>{'Ingreso que podrías recuperar al mes'}</span>
                  <span
                    aria-live={'polite'}
                    style={{ fontSize: '26px', fontWeight: '600', fontVariantNumeric: 'tabular-nums' }}
                  >
                    {v.revOut}
                  </span>
                </div>{' '}
                <div
                  style={{
                    background: '#F4F4F5',
                    borderRadius: '14px',
                    padding: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span style={{ fontSize: '12px', color: '#3F3F46' }}>{'Horas al mes que hoy se van en papeleo'}</span>
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
          <section className={'wrap'} style={{ paddingTop: '96px' }}>
            {' '}
            <div style={{ maxWidth: '820px', margin: '0 auto' }}>
              {' '}
              <h2
                style={{
                  fontFamily: v.hf,
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
                    <div style={{ borderBottom: '1px solid #E4E4E7' }}>
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
                          color: '#18181B',
                          fontSize: '17px',
                          fontWeight: '500',
                        }}
                      >
                        {f?.q}
                        <span aria-hidden={'true'}>{f?.sign}</span>
                      </button>{' '}
                      {f?.open ? (
                        <>
                          <p
                            style={{
                              margin: '0',
                              padding: '0 0 20px',
                              fontSize: '15px',
                              lineHeight: '1.6',
                              color: '#3F3F46',
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
                {'Conecta tu recepción.'}
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
