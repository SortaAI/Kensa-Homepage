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
          <section id="contenido" className="wrap" style={{ paddingTop: '72px' }}>
            <h1 style={{ margin: 0, textAlign: 'center', fontSize: 'clamp(36px,5.6vw,65px)', lineHeight: '1.06', letterSpacing: '-0.03em', fontWeight: 600 }}>
              Un precio simple. <span style={{ color: '#18648A' }}>Todo Kensa incluido<span style={{ color: '#E0987A' }}>.</span></span>
            </h1>
            <p style={{ maxWidth: '720px', margin: '24px auto 0', textAlign: 'center', color: '#4B5D69', fontSize: '18px', lineHeight: 1.6 }}>
              Sin plazo forzoso, sin cobro por usuario y sin límite de citas. Pagas por consultorio o sucursal y tu equipo completo usa todo Kensa. Los cargos de Meta por WhatsApp se pagan aparte.
            </p>
            <div style={{ maxWidth: '1000px', margin: '40px auto 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '24px' }}>
              {[
                { name: 'Clínicas fundadoras', price: '$999', founder: true, description: 'Para las primeras clínicas que construyen Kensa con nosotros.', features: ['Todo Kensa, sin límites de citas ni cobro por usuario', '45 días gratis, contados desde que tu clínica está lista', 'Precio de fundador fijo mientras tu suscripción siga activa', 'Configuración personal: dejamos tus formatos y tu agenda listos', 'Línea directa con Emiliano, el fundador', 'Voz en lo que construimos después'], cta: 'Quiero ser clínica fundadora' },
                { name: 'Estándar', price: '$1,499', founder: false, description: 'Todo lo que tu recepción necesita, en un solo lugar.', features: ['Todo Kensa, sin límites de citas ni cobro por usuario', '14 días gratis, contados desde que tu clínica está lista', 'Todo tu equipo, sin cobro por usuario', 'Soporte por WhatsApp y correo', 'Sin plazo forzoso: cancela cuando quieras'], cta: 'Empezar prueba gratis' },
              ].map((plan) => (
                <section key={plan.name} className="kn-card" aria-label={plan.name} style={{ background: plan.founder ? '#F2E9E5' : '#FFFFFF', border: '1px solid #D6CBC4', borderRadius: '24px', padding: 'clamp(24px,4vw,36px)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 600 }}>{plan.name}</h2>
                    {plan.founder ? <span style={{ background: '#0E2A3B', color: '#FFFFFF', borderRadius: '999px', padding: '6px 12px', fontSize: '12px' }}>Solo 10 lugares</span> : null}
                  </div>
                  <p style={{ margin: 0 }}><strong style={{ fontSize: 'clamp(42px,5vw,56px)', fontWeight: 600, letterSpacing: '-0.04em' }}>{plan.price}</strong> <span style={{ fontSize: '15px' }}>MXN + IVA</span><span style={{ display: 'block', color: '#4B5D69', fontSize: '15px' }}>por consultorio, al mes</span></p>
                  <p style={{ margin: 0, color: '#4B5D69', lineHeight: 1.6 }}>{plan.description}</p>
                  <ul style={{ margin: 0, padding: '20px 0', listStyle: 'none', borderTop: '1px solid #DED3CD', display: 'grid', gap: '14px' }}>
                    {plan.features.map((feature) => <li key={feature} style={{ display: 'flex', gap: '10px', fontSize: '15px', lineHeight: 1.5 }}><span aria-hidden="true" style={{ color: '#18648A' }}>✓</span><span>{feature}</span></li>)}
                  </ul>
                  <a className={plan.founder ? 'kn-btn' : 'kn-ghost'} href="/contacto/" style={{ marginTop: 'auto', textDecoration: 'none', textAlign: 'center', fontSize: '15px', fontWeight: 500, padding: '14px 20px', borderRadius: '999px', background: plan.founder ? '#18648A' : '#FFFFFF', color: plan.founder ? '#FFFFFF' : '#0E2A3B', border: '1px solid ' + (plan.founder ? '#18648A' : '#D6CBC4') }}>{plan.cta}</a>
                  {plan.founder ? <p style={{ margin: 0, fontSize: '13px', color: '#4B5D69', lineHeight: 1.5 }}>Disponible para las primeras 10 ubicaciones que continúen con una suscripción de pago después de su piloto. El precio se mantiene mientras la suscripción siga activa.</p> : null}
                </section>
              ))}
            </div>
            <p style={{ maxWidth: '760px', margin: '24px auto 0', textAlign: 'center', fontSize: '15px', lineHeight: 1.6, color: '#4B5D69' }}>Cada consultorio o sucursal es una ubicación física. Dos sucursales en Estándar pagan $2,998 MXN al mes + IVA. Todo el equipo de cada ubicación está incluido.</p>
          </section>
          <section className="wrap" aria-labelledby="cargos-whatsapp" style={{ paddingTop: '40px' }}>
            <div style={{ background: '#0E2A3B', color: '#FFFFFF', borderRadius: '24px', padding: 'clamp(24px,4vw,36px)', maxWidth: '1000px', margin: '0 auto' }}>
              <h2 id="cargos-whatsapp" style={{ margin: '0 0 16px', fontSize: 'clamp(24px,3vw,30px)', lineHeight: 1.2, fontWeight: 600 }}>Los mensajes de WhatsApp los cobra Meta directamente.</h2>
              <p style={{ margin: 0, lineHeight: 1.7 }}>Meta cobra por algunos mensajes de WhatsApp Business y lo paga tu clínica con su propio método de pago. Kensa no cobra comisión ni pone intermediarios. Los cargos de Meta están separados de la suscripción y también pueden aplicarse durante la prueba de 14 días o el piloto de 45 días.</p>
              <p style={{ margin: '16px 0 0', color: '#DCE6EC', lineHeight: 1.7 }}>Como estimación orientativa de Kensa, una clínica con unas 350 visitas al mes puede gastar entre $175 y $550 MXN al mes en mensajes. No es una tarifa fija: el total depende de los mensajes que envíes y las tarifas vigentes de Meta. Tu equipo puede seguir usando la app de WhatsApp Business como siempre.</p>
            </div>
          </section>
          <section className="wrap" aria-labelledby="incluye-kensa" style={{ paddingTop: '80px' }}>
            <h2 id="incluye-kensa" style={{ margin: '0 0 32px', fontSize: 'clamp(28px,3.4vw,40px)', fontWeight: 600, letterSpacing: '-0.03em' }}>Lo que incluye todo Kensa</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '28px 40px' }}>
              {[
                ['WhatsApp con tu mismo número', 'Tus pacientes agendan, reagendan o piden hablar con el doctor desde un menú automático. Tu equipo contesta todo desde una sola bandeja.'],
                ['Agenda sin empalmes', 'Horarios, días cerrados y solicitudes por confirmar. Las confirmaciones salen por WhatsApp.'],
                ['Lista de espera para cubrir cancelaciones', 'Cuando alguien cancela, tu equipo elige a quién ofrecerle el horario. Kensa envía las ofertas por WhatsApp, una por una, para ayudarte a recuperar ese espacio.'],
                ['Formatos que se llenan solos', 'El paciente escribe sus datos una vez y salen en todos los formatos de la visita. Usa nuestra biblioteca de 7 formatos o sube los tuyos.'],
                ['Firma desde el celular', 'Envía los formatos por WhatsApp, correo o enlace. El paciente llena y firma en su teléfono, sin descargar nada.'],
                ['Expediente sellado', 'El doctor firma con su cédula verificada. El expediente queda bloqueado, con fecha, historial de acceso y página de verificación.'],
                ['Equipo y roles', 'Recepción, doctores y administración, cada quien con su acceso.'],
              ].map(([title, description]) => <div key={title} style={{ borderTop: '1px solid #DED3CD', paddingTop: '20px' }}><h3 style={{ margin: '0 0 10px', fontSize: '20px', fontWeight: 600 }}>{title}</h3><p style={{ margin: 0, color: '#4B5D69', fontSize: '16px', lineHeight: 1.7 }}>{description}</p></div>)}
            </div>
          </section>
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
