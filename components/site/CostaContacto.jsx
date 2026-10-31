'use client';
// Generated from the design canvas, Costa palette (Costa-Contacto-cs06.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import { FORMS, sendForm } from '@/lib/forms';
import CostaEncabezado from './CostaEncabezado';
import CostaPiePagina from './CostaPiePagina';

const CSS =
  'body{margin:0;background:#F9F4F0}\n*{box-sizing:border-box}\na{color:#0E2A3B;text-underline-offset:3px}a:hover{color:#4B5D69}\n:root{color-scheme:light}\n::selection{background:#0E2A3B;color:#FFFFFF}\n:focus-visible{outline:2px solid #0E2A3B;outline-offset:3px;border-radius:6px}\n[id]{scroll-margin-top:24px}\nh1,h2,h3{text-wrap:balance}\np{text-wrap:pretty}\ninput,textarea{caret-color:#0E2A3B}\ninput::placeholder,textarea::placeholder{color:#6B6B72}\ninput:focus,textarea:focus{border-color:#0E2A3B !important}\nbutton{font:inherit;cursor:pointer}\na,button,input,label,textarea{touch-action:manipulation;-webkit-tap-highlight-color:rgba(14,42,59,0.08)}\na,button,label{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out,box-shadow .15s ease-out}\n:is(a,button)[style*="background: #18648A"]:hover{background:#114E6C !important}\n:is(a,button)[style*="border: 1px solid #D6CBC4"]:hover{background:#F2E9E5 !important;border-color:#0E2A3B !important}\nlabel[data-choice]:hover{border-color:#0E2A3B !important}\n.kn-item:hover,.kn-trigger:hover{background:#F2E9E5 !important}\n.skip{position:absolute;left:-9999px;top:12px;z-index:60;background:#0E2A3B;color:#FFFFFF;padding:10px 16px;border-radius:999px;text-decoration:none}\n.skip:focus{left:16px}\n.show-sm{display:none}\n@media (max-width:820px){.navlinks,.hide-sm{display:none !important}.show-sm{display:flex !important}}\n@media (prefers-reduced-motion:reduce){*{transition:none !important}}\n/* motion */\n.kn-btn,.kn-ghost{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out,transform .2s cubic-bezier(.16,1,.3,1),box-shadow .2s ease-out}\n.kn-btn:hover{transform:translateY(-1px);box-shadow:0 10px 22px rgba(24,100,138,0.22)}\n.kn-btn:active{transform:translateY(0);box-shadow:0 2px 6px rgba(24,100,138,0.18);transition-duration:.08s}\n.kn-ghost:hover{transform:translateY(-1px);box-shadow:0 8px 18px rgba(14,42,59,0.08)}\nli a > span[aria-hidden] svg{transition:transform .2s cubic-bezier(.16,1,.3,1)}\nli a:hover > span[aria-hidden] svg,li a:focus-visible > span[aria-hidden] svg{transform:translateX(3px)}\n.kn-card{transition:transform .25s cubic-bezier(.16,1,.3,1),box-shadow .25s ease-out}\n.kn-card:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(14,42,59,0.10)}\nbutton[aria-expanded="true"] + *{animation:kn-open .3s cubic-bezier(.16,1,.3,1)}\n@keyframes kn-open{from{opacity:0;transform:translateY(-4px)}}\n[data-rv="pre"]{opacity:0;transform:translateY(14px)}\n[data-rv="in"]{opacity:1;transform:none;transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}\n@media (prefers-reduced-motion:reduce){[data-rv]{opacity:1 !important;transform:none !important}.kn-card:hover,.kn-btn:hover,.kn-ghost:hover,li a:hover > span[aria-hidden] svg{transform:none !important}button[aria-expanded="true"] + *{animation:none}}';

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
    this.state = {
      step: 1,
      sent: false,
      sending: false,
      error: '',
      tried: {},
      v: {
        interes: 'demo',
        nombre: '',
        consultorio: '',
        ciudad: '',
        sedes: '',
        whatsapp: '',
        formatos: '',
        tiempo: '',
      },
    };
  }
  renderVals() {
    var self = this,
      st = this.state,
      v = st.v;
    var setV = function (k, val) {
      var nv = Object.assign({}, st.v);
      nv[k] = val;
      self.setState({ v: nv });
    };
    var errs = {
      nombre: v.nombre.trim() ? '' : 'Escribe tu nombre.',
      consultorio: v.consultorio.trim() ? '' : 'Escribe el nombre de tu consultorio.',
      ciudad: v.ciudad.trim() ? '' : 'Escribe tu ciudad.',
      sedes: parseInt(v.sedes, 10) >= 1 ? '' : 'Escribe cuántas sedes tiene tu clínica.',
      whatsapp: v.whatsapp.replace(/\D/g, '').length >= 10 ? '' : 'Escribe un WhatsApp de 10 dígitos o más, con lada.',
      formatos: v.formatos ? '' : 'x',
    };
    var stepOk = function (s) {
      if (s === 2) return !errs.nombre && !errs.consultorio && !errs.ciudad && !errs.sedes && !errs.whatsapp;
      if (s === 3) return !errs.formatos;
      return true;
    };
    var I = {
      play: [
        'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z',
        'M9.5 8.965c0-.477 0-.716.1-.849a.5.5 0 0 1 .364-.199c.166-.012.367.117.769.375l4.72 3.035c.349.224.523.336.583.478a.5.5 0 0 1 0 .39c-.06.142-.234.254-.583.478l-4.72 3.035c-.402.258-.603.387-.769.375a.5.5 0 0 1-.364-.2c-.1-.132-.1-.371-.1-.848v-6.07Z',
      ],
      building: [
        'M7.5 11H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 11.76 3 12.04 3 12.6V21m13.5-10h2.9c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 11.76 21 12.04 21 12.6V21m-4.5 0V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.98 3 14.42 3 13.3 3h-2.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7.5 4.52 7.5 5.08 7.5 6.2V21M22 21H2m9-14h2m-2 4h2m-2 4h2',
        '',
      ],
    };
    var interestList = [
      ['demo', 'Ver una demo', 'Te enseñamos Kensa con ejemplos de tu clínica.', 'play'],
      [
        'fundadora',
        'Ser clínica fundadora',
        'Piloto de 45 días sin costo y precio fundador, si hay lugar.',
        'building',
      ],
    ];
    var interests = interestList.map(function (o) {
      var sel = v.interes === o[0];
      return {
        v: o[0],
        t: o[1],
        d: o[2],
        a: I[o[3]][0],
        b: I[o[3]][1],
        on: sel,
        bc: sel ? '#18648A' : '#D6CBC4',
        sh: sel ? 'inset 0 0 0 1px #0E2A3B' : 'none',
        dot: sel ? '#18648A' : 'transparent',
        ib: sel ? '#18648A' : '#F2E9E5',
        ic: sel ? '#FFFFFF' : '#18648A',
        pick: function () {
          setV('interes', o[0]);
        },
      };
    });
    var fdef = [
      ['nombre', 'Nombre', 'text', 'text', 'name', 'Ana Rodríguez…'],
      ['consultorio', 'Consultorio', 'text', 'text', 'organization', 'Clínica Vida…'],
      ['ciudad', 'Ciudad', 'text', 'text', 'address-level2', 'Ciudad Juárez…'],
      ['sedes', '¿Cuántas sedes?', 'text', 'numeric', 'off', '1…'],
      ['whatsapp', 'WhatsApp', 'tel', 'tel', 'tel', '+52 656 123 4567…'],
    ];
    var fields = fdef.map(function (d) {
      var bad = !!(st.tried[2] && errs[d[0]]);
      return {
        k: d[0],
        label: d[1],
        type: d[2],
        mode: d[3],
        ac: d[4],
        ph: d[5],
        val: v[d[0]],
        bad: bad,
        msg: errs[d[0]],
        eid: 'e-' + d[0],
        border: bad ? '2px solid #0E2A3B' : '1px solid #D6CBC4',
        set: function (e) {
          setV(d[0], e.target.value);
        },
      };
    });
    var flist = [
      ['mano', 'A mano, en hojas impresas'],
      ['office', 'En Word o Excel, y se imprime'],
      ['sistema', 'En un sistema, pero se recaptura'],
      ['mezcla', 'Una mezcla de todo'],
    ];
    var formats = flist.map(function (o) {
      var sel = v.formatos === o[0];
      return {
        v: o[0],
        t: o[1],
        on: sel,
        bc: sel ? '#18648A' : '#D6CBC4',
        sh: 'none',
        bg: sel ? '#18648A' : '#FFFFFF',
        fg: sel ? '#FFFFFF' : '#0E2A3B',
        pick: function () {
          setV('formatos', o[0]);
        },
      };
    });
    var labelOf = function (list, key) {
      for (var i = 0; i < list.length; i++) if (list[i][0] === key) return list[i][1];
      return '';
    };
    var rowsSrc = [
      ['Interés', labelOf(interestList, v.interes)],
      ['Nombre', v.nombre],
      ['Consultorio', v.consultorio],
      ['Ciudad', v.ciudad],
      ['Sedes', v.sedes],
      ['WhatsApp', v.whatsapp],
      ['Formatos hoy', labelOf(flist, v.formatos)],
      ['Lo que más tarda', v.tiempo],
    ];
    var rows = rowsSrc.map(function (r) {
      var has = !!(r[1] && String(r[1]).trim());
      return { k: r[0], v: r[1], has: has, empty: !has };
    });
    var names = ['Interés', 'Tu clínica', 'Formatos'];
    var steps = names.map(function (t, i) {
      var n = i + 1,
        cur = st.step === n,
        done = st.step > n || st.sent;
      return {
        n: n,
        t: t,
        cur: cur && !st.sent ? 'step' : undefined,
        bar: cur || done ? '#18648A' : '#E3D9D3',
        weight: cur ? 600 : 400,
        color: cur || done ? '#18648A' : '#5F707B',
      };
    });
    return {
      steps: steps,
      interests: interests,
      fields: fields,
      formats: formats,
      rows: rows,
      v: v,
      is1: st.step === 1,
      is2: st.step === 2,
      is3: st.step === 3,
      canBack: st.step > 1,
      noBack: st.step === 1,
      cta: st.step === 3 ? (st.sending ? 'Enviando…' : 'Enviar solicitud') : 'Continuar',
      sending: st.sending,
      error: st.error,
      badFormatos: !!(st.tried[3] && errs.formatos),
      sent: st.sent,
      notSent: !st.sent,
      firstName: v.nombre.trim().split(' ')[0] || '',
      today: new Intl.DateTimeFormat('es-MX', { dateStyle: 'long' }).format(new Date()),
      setTiempo: function (e) {
        setV('tiempo', e.target.value);
      },
      back: function () {
        self.setState({ step: Math.max(1, st.step - 1) });
      },
      submit: function (e) {
        e.preventDefault();
        var tried = Object.assign({}, st.tried);
        tried[st.step] = true;
        if (!stepOk(st.step)) {
          self.setState({ tried: tried });
          return;
        }
        if (st.step < 3) return self.setState({ step: st.step + 1, tried: tried });
        if (st.sending) return;
        var gotcha = new FormData(e.currentTarget).get('_gotcha') || '';
        var payload = { _subject: 'Nueva solicitud · ' + labelOf(interestList, v.interes) + ' · ' + (v.consultorio || v.nombre) };
        rowsSrc.forEach(function (r) {
          payload[r[0]] = r[1] || '';
        });
        payload._gotcha = gotcha;
        self.setState({ sending: true, error: '', tried: tried });
        sendForm(FORMS.contacto, payload).then(
          function () {
            self.setState({ sending: false, sent: true });
          },
          function (err) {
            self.setState({ sending: false, error: err.message });
          },
        );
      },
    };
  }
}

export default class CostaContacto extends Logic {
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
          <main
            id={'contenido'}
            style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px clamp(16px,4vw,40px) 0' }}
          >
            {' '}
            <nav aria-label={'Ruta'} style={{ fontSize: '14px', color: '#4B5D69' }}>
              <a href={link('Costa-Inicio-cs01.dc.html')} style={{ color: '#4B5D69' }}>
                {'Inicio'}
              </a>
              {' / '}
              <span aria-current={'page'} style={{ color: '#0E2A3B', fontWeight: '500' }}>
                {'Contacto'}
              </span>
            </nav>{' '}
            <div
              style={{
                marginTop: '28px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '16px 48px',
              }}
            >
              {' '}
              <h1
                style={{
                  margin: '0',
                  flex: '1 1 520px',
                  fontSize: 'clamp(36px,4.8vw,58px)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.03em',
                  fontWeight: '600',
                }}
              >
                {'Conoce Kensa para tu clínica. '}
                <span style={{ color: '#18648A' }}>
                  {'Empieza con una demo'}
                  <span style={{ color: '#E0987A' }}>{'.'}</span>
                </span>
              </h1>{' '}
              <p style={{ margin: '0', flex: '0 1 380px', fontSize: '16px', lineHeight: '1.6', color: '#4B5D69' }}>
                {
                  'Llena tu solicitud una vez y mira cómo se arma sola, igual que los formatos de tus pacientes en Kensa.'
                }
              </p>{' '}
            </div>{' '}
            <section
              aria-label={'Solicitud'}
              style={{
                marginTop: '40px',
                background: '#F2E9E5',
                borderRadius: '32px',
                padding: 'clamp(12px,2vw,20px)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(12px,2vw,20px)',
              }}
            >
              {' '}
              <div
                style={{
                  flex: '1.15 1 440px',
                  minWidth: '0',
                  background: '#FFFFFF',
                  borderRadius: '22px',
                  padding: 'clamp(24px,3.5vw,40px)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {' '}
                <ol
                  aria-label={'Pasos de la solicitud'}
                  style={{
                    listStyle: 'none',
                    margin: '0',
                    padding: '0',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                    gap: '8px',
                  }}
                >
                  {' '}
                  {(v.steps || []).map((s, $index) => (
                    <React.Fragment key={$index}>
                      {' '}
                      <li aria-current={s?.cur} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {' '}
                        <span
                          aria-hidden={'true'}
                          style={{ height: '4px', borderRadius: '999px', background: s?.bar }}
                        ></span>{' '}
                        <span style={{ fontSize: '13px', fontWeight: s?.weight, color: s?.color }}>
                          {s?.n}
                          {'. '}
                          {s?.t}
                        </span>{' '}
                      </li>{' '}
                    </React.Fragment>
                  ))}{' '}
                </ol>{' '}
                {v.notSent ? (
                  <>
                    {' '}
                    <form
                      onSubmit={v.submit}
                      noValidate={true}
                      style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', flex: '1' }}
                    >
                      {' '}
                      {v.is1 ? (
                        <>
                          {' '}
                          <fieldset
                            style={{
                              border: '0',
                              margin: '0',
                              padding: '0',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '12px',
                            }}
                          >
                            {' '}
                            <legend
                              style={{
                                padding: '0',
                                marginBottom: '16px',
                                fontSize: '24px',
                                fontWeight: '600',
                                letterSpacing: '-0.02em',
                              }}
                            >
                              {'¿Qué te interesa?'}
                            </legend>{' '}
                            {(v.interests || []).map((o, $index) => (
                              <React.Fragment key={$index}>
                                {' '}
                                <label
                                  data-choice={'1'}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '16px',
                                    border: `1px solid ${o?.bc ?? ''}`,
                                    boxShadow: o?.sh,
                                    borderRadius: '16px',
                                    padding: '18px 20px',
                                    cursor: 'pointer',
                                  }}
                                >
                                  {' '}
                                  <input
                                    type={'radio'}
                                    name={'interes'}
                                    value={o?.v ?? ''}
                                    checked={o?.on}
                                    onChange={o?.pick}
                                    style={{ position: 'absolute', opacity: '0', width: '1px', height: '1px' }}
                                  />{' '}
                                  <span
                                    aria-hidden={'true'}
                                    style={{
                                      width: '44px',
                                      height: '44px',
                                      borderRadius: '12px',
                                      background: o?.ib,
                                      color: o?.ic,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      flexShrink: '0',
                                    }}
                                  >
                                    <svg
                                      width={'22'}
                                      height={'22'}
                                      viewBox={'0 0 24 24'}
                                      fill={'none'}
                                      stroke={'currentColor'}
                                      strokeWidth={'2'}
                                      strokeLinecap={'round'}
                                      strokeLinejoin={'round'}
                                    >
                                      <path d={o?.a} />
                                      <path d={o?.b} />
                                    </svg>
                                  </span>{' '}
                                  <span style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <span style={{ fontSize: '17px', fontWeight: '500' }}>{o?.t}</span>
                                    <span style={{ fontSize: '14px', lineHeight: '1.5', color: '#4B5D69' }}>
                                      {o?.d}
                                    </span>
                                  </span>{' '}
                                  <span
                                    aria-hidden={'true'}
                                    style={{
                                      width: '22px',
                                      height: '22px',
                                      borderRadius: '999px',
                                      border: `1.5px solid ${o?.bc ?? ''}`,
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      flexShrink: '0',
                                      marginTop: '2px',
                                    }}
                                  >
                                    <span
                                      style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '999px',
                                        background: o?.dot,
                                      }}
                                    ></span>
                                  </span>{' '}
                                </label>{' '}
                              </React.Fragment>
                            ))}{' '}
                          </fieldset>{' '}
                        </>
                      ) : null}{' '}
                      {v.is2 ? (
                        <>
                          {' '}
                          <fieldset style={{ border: '0', margin: '0', padding: '0' }}>
                            {' '}
                            <legend
                              style={{
                                padding: '0',
                                marginBottom: '20px',
                                fontSize: '24px',
                                fontWeight: '600',
                                letterSpacing: '-0.02em',
                              }}
                            >
                              {'Tu clínica'}
                            </legend>{' '}
                            <div
                              style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '18px 16px',
                              }}
                            >
                              {' '}
                              {(v.fields || []).map((f, $index) => (
                                <React.Fragment key={$index}>
                                  {' '}
                                  <label
                                    style={{
                                      display: 'flex',
                                      flexDirection: 'column',
                                      gap: '6px',
                                      fontSize: '14px',
                                      fontWeight: '500',
                                    }}
                                  >
                                    {f?.label}{' '}
                                    <input
                                      name={f?.k}
                                      type={f?.type}
                                      inputMode={f?.mode}
                                      autoComplete={f?.ac}
                                      placeholder={f?.ph}
                                      value={f?.val ?? ''}
                                      onChange={f?.set}
                                      aria-invalid={f?.bad}
                                      aria-describedby={f?.eid}
                                      style={{
                                        font: 'inherit',
                                        fontWeight: '400',
                                        fontSize: '16px',
                                        padding: '13px 14px',
                                        border: f?.border,
                                        borderRadius: '12px',
                                        color: '#0E2A3B',
                                        background: '#FFFFFF',
                                      }}
                                    />{' '}
                                    {f?.bad ? (
                                      <>
                                        <span
                                          id={f?.eid}
                                          role={'alert'}
                                          style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            fontSize: '13px',
                                            fontWeight: '500',
                                          }}
                                        >
                                          <svg
                                            aria-hidden={'true'}
                                            width={'15'}
                                            height={'15'}
                                            viewBox={'0 0 24 24'}
                                            fill={'none'}
                                            stroke={'currentColor'}
                                            strokeWidth={'2'}
                                            strokeLinecap={'round'}
                                            strokeLinejoin={'round'}
                                          >
                                            <path
                                              d={
                                                'M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z'
                                              }
                                            />
                                          </svg>
                                          {f?.msg}
                                        </span>
                                      </>
                                    ) : null}{' '}
                                  </label>{' '}
                                </React.Fragment>
                              ))}{' '}
                            </div>{' '}
                          </fieldset>{' '}
                        </>
                      ) : null}{' '}
                      {v.is3 ? (
                        <>
                          {' '}
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {' '}
                            <fieldset style={{ border: '0', margin: '0', padding: '0' }}>
                              {' '}
                              <legend
                                style={{
                                  padding: '0',
                                  marginBottom: '16px',
                                  fontSize: '24px',
                                  fontWeight: '600',
                                  letterSpacing: '-0.02em',
                                }}
                              >
                                {'¿Cómo llenan los formatos hoy?'}
                              </legend>{' '}
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {' '}
                                {(v.formats || []).map((o, $index) => (
                                  <React.Fragment key={$index}>
                                    {' '}
                                    <label
                                      data-choice={'1'}
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        border: `1px solid ${o?.bc ?? ''}`,
                                        boxShadow: o?.sh,
                                        background: o?.bg,
                                        color: o?.fg,
                                        borderRadius: '999px',
                                        padding: '11px 16px',
                                        fontSize: '15px',
                                        cursor: 'pointer',
                                      }}
                                    >
                                      {' '}
                                      <input
                                        type={'radio'}
                                        name={'formatos'}
                                        value={o?.v ?? ''}
                                        checked={o?.on}
                                        onChange={o?.pick}
                                        style={{ position: 'absolute', opacity: '0', width: '1px', height: '1px' }}
                                      />
                                      {o?.t}
                                    </label>{' '}
                                  </React.Fragment>
                                ))}{' '}
                              </div>{' '}
                              {v.badFormatos ? (
                                <>
                                  <p
                                    role={'alert'}
                                    style={{
                                      margin: '10px 0 0',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '6px',
                                      fontSize: '13px',
                                      fontWeight: '500',
                                    }}
                                  >
                                    <svg
                                      aria-hidden={'true'}
                                      width={'15'}
                                      height={'15'}
                                      viewBox={'0 0 24 24'}
                                      fill={'none'}
                                      stroke={'currentColor'}
                                      strokeWidth={'2'}
                                      strokeLinecap={'round'}
                                      strokeLinejoin={'round'}
                                    >
                                      <path
                                        d={
                                          'M12 8v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z'
                                        }
                                      />
                                    </svg>
                                    {'Elige una opción para continuar.'}
                                  </p>
                                </>
                              ) : null}{' '}
                            </fieldset>{' '}
                            <label
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                                fontSize: '14px',
                                fontWeight: '500',
                              }}
                            >
                              {'¿Qué parte les quita más tiempo? '}
                              <span style={{ fontWeight: '400', color: '#5F707B' }}>{'Opcional'}</span>{' '}
                              <textarea
                                name={'tiempo'}
                                rows={'3'}
                                placeholder={'Ej. capturar los mismos datos en varios formatos…'}
                                value={v.v?.tiempo}
                                onChange={v.setTiempo}
                                style={{
                                  font: 'inherit',
                                  fontWeight: '400',
                                  fontSize: '16px',
                                  padding: '13px 14px',
                                  border: '1px solid #D6CBC4',
                                  borderRadius: '12px',
                                  color: '#0E2A3B',
                                  resize: 'vertical',
                                }}
                              ></textarea>
                            </label>{' '}
                          </div>{' '}
                        </>
                      ) : null}{' '}
                      <div
                        style={{
                          marginTop: 'auto',
                          paddingTop: '32px',
                          display: 'flex',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                        }}
                      >
                        {' '}
                        {v.canBack ? (
                          <>
                            <button
                              className={'kn-ghost'}
                              type={'button'}
                              onClick={v.back}
                              style={{
                                border: '1px solid #D6CBC4',
                                background: '#FFFFFF',
                                color: '#0E2A3B',
                                borderRadius: '999px',
                                padding: '14px 22px',
                                fontSize: '15px',
                                fontWeight: '500',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                              }}
                            >
                              <svg
                                aria-hidden={'true'}
                                width={'16'}
                                height={'16'}
                                viewBox={'0 0 24 24'}
                                fill={'none'}
                                stroke={'currentColor'}
                                strokeWidth={'2'}
                                strokeLinecap={'round'}
                                strokeLinejoin={'round'}
                              >
                                <path d={'M19 12H5m0 0 7 7m-7-7 7-7'} />
                              </svg>
                              {'Atrás'}
                            </button>
                          </>
                        ) : null}{' '}
                        {v.noBack ? (
                          <>
                            <span style={{ fontSize: '13px', color: '#5F707B' }}>{'Toma menos de un minuto.'}</span>
                          </>
                        ) : null}{' '}
                        <input
                          type={'text'}
                          name={'_gotcha'}
                          tabIndex={-1}
                          autoComplete={'off'}
                          aria-hidden={'true'}
                          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                        />
                        <button
                          className={'kn-btn'}
                          type={'submit'}
                          disabled={v.sending}
                          aria-busy={v.sending}
                          style={{
                            cursor: v.sending ? 'progress' : 'pointer',
                            opacity: v.sending ? 0.75 : 1,
                            border: '0',
                            borderRadius: '999px',
                            background: '#18648A',
                            color: '#FFFFFF',
                            fontSize: '16px',
                            fontWeight: '500',
                            padding: '15px 26px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                          }}
                        >
                          {v.cta}
                          <svg
                            aria-hidden={'true'}
                            width={'16'}
                            height={'16'}
                            viewBox={'0 0 24 24'}
                            fill={'none'}
                            stroke={'currentColor'}
                            strokeWidth={'2'}
                            strokeLinecap={'round'}
                            strokeLinejoin={'round'}
                          >
                            <path d={'M5 12h14m0 0-7-7m7 7-7 7'} />
                          </svg>
                        </button>{' '}
                      </div>{' '}
                      {v.error ? (
                        <p role={'alert'} style={{ margin: '14px 0 0', fontSize: '14px', color: '#9E4A29' }}>
                          {v.error}
                        </p>
                      ) : null}
                      <p style={{ margin: '16px 0 0', fontSize: '13px', lineHeight: '1.55', color: '#5F707B' }}>
                        {'Comparte solo datos de contacto de tu equipo, sin información de pacientes. Consulta el '}
                        <a href={'/privacidad/'} style={{ color: '#4B5D69' }}>
                          {'aviso de privacidad'}
                        </a>
                        {'.'}
                      </p>{' '}
                    </form>{' '}
                  </>
                ) : null}{' '}
                {v.sent ? (
                  <>
                    {' '}
                    <div
                      role={'status'}
                      aria-live={'polite'}
                      style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '14px', flex: '1' }}
                    >
                      {' '}
                      <p style={{ margin: '0', fontSize: '26px', fontWeight: '600', letterSpacing: '-0.02em' }}>
                        {'Listo, '}
                        {v.firstName}
                        {'. Recibimos tu solicitud.'}
                      </p>{' '}
                      <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#4B5D69' }}>
                        {'Te escribimos por WhatsApp al '}
                        {v.v?.whatsapp}
                        {' para coordinar la plática. Si prefieres, escríbenos tú primero.'}
                      </p>{' '}
                      <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {' '}
                        <a
                          className={'kn-btn'}
                          href={link('https://wa.me/message/3JRJUFH6UNNLA1')}
                          style={{
                            textDecoration: 'none',
                            fontWeight: '500',
                            fontSize: '15px',
                            padding: '13px 22px',
                            borderRadius: '999px',
                            background: '#18648A',
                            color: '#FFFFFF',
                          }}
                        >
                          {'Abrir WhatsApp'}
                        </a>{' '}
                        <a
                          className={'kn-ghost'}
                          href={link('Costa-Funciones-cs02.dc.html')}
                          style={{
                            textDecoration: 'none',
                            fontWeight: '500',
                            fontSize: '15px',
                            padding: '13px 22px',
                            borderRadius: '999px',
                            border: '1px solid #D6CBC4',
                            color: '#0E2A3B',
                          }}
                        >
                          {'Mientras, ve las funciones'}
                        </a>{' '}
                      </div>{' '}
                    </div>{' '}
                  </>
                ) : null}{' '}
              </div>{' '}
              <div
                style={{
                  flex: '1 1 360px',
                  minWidth: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: 'clamp(8px,1.5vw,16px)',
                }}
              >
                {' '}
                <p
                  style={{
                    margin: '0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#4B5D69',
                  }}
                >
                  <svg
                    aria-hidden={'true'}
                    width={'16'}
                    height={'16'}
                    viewBox={'0 0 24 24'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  >
                    <path
                      d={
                        'M13 2 4.093 12.688c-.348.418-.523.628-.525.804a.5.5 0 0 0 .185.397c.138.111.41.111.955.111H12l-1 8 8.907-10.688c.348-.418.523-.628.525-.804a.5.5 0 0 0-.185-.397c-.138-.111-.41-.111-.955-.111H12l1-8Z'
                      }
                    />
                  </svg>
                  {'Se llena mientras escribes'}
                </p>{' '}
                <div
                  aria-live={'off'}
                  style={{
                    flex: '1',
                    background: '#FFFFFF',
                    borderRadius: '6px 6px 18px 18px',
                    boxShadow: '0 1px 0 #E8DFDA, 0 20px 40px rgba(14,42,59,0.10)',
                    padding: '28px 28px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  {' '}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '12px',
                      paddingBottom: '16px',
                      borderBottom: '2px solid #0E2A3B',
                    }}
                  >
                    {' '}
                    <div>
                      <div style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '-0.01em' }}>
                        {'Solicitud de clínica'}
                      </div>
                      <div style={{ fontSize: '12px', color: '#5F707B', marginTop: '2px' }}>
                        <span translate={'no'}>{'Kensa'}</span>
                        {' · '}
                        {v.today}
                      </div>
                    </div>{' '}
                    {v.sent ? (
                      <>
                        <span
                          style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            letterSpacing: '0.04em',
                            border: '2px solid #0E2A3B',
                            borderRadius: '8px',
                            padding: '5px 10px',
                            transform: 'rotate(-4deg)',
                          }}
                        >
                          {'RECIBIDA'}
                        </span>
                      </>
                    ) : null}{' '}
                    {v.notSent ? (
                      <>
                        <span
                          style={{
                            fontSize: '12px',
                            color: '#5F707B',
                            border: '1px dashed #9AAAB5',
                            borderRadius: '8px',
                            padding: '5px 10px',
                          }}
                        >
                          {'Borrador'}
                        </span>
                      </>
                    ) : null}{' '}
                  </div>{' '}
                  <dl style={{ margin: '0', display: 'flex', flexDirection: 'column' }}>
                    {' '}
                    {(v.rows || []).map((r, $index) => (
                      <React.Fragment key={$index}>
                        {' '}
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '128px minmax(0, 1fr)',
                            gap: '12px',
                            alignItems: 'baseline',
                            padding: '12px 0',
                            borderBottom: '1px solid #EEE6E2',
                          }}
                        >
                          {' '}
                          <dt style={{ fontSize: '12px', color: '#5F707B' }}>{r?.k}</dt>{' '}
                          {r?.has ? (
                            <>
                              <dd
                                style={{ margin: '0', fontSize: '14px', fontWeight: '500', overflowWrap: 'anywhere' }}
                              >
                                {r?.v}
                              </dd>
                            </>
                          ) : null}{' '}
                          {r?.empty ? (
                            <>
                              <dd
                                aria-label={'Sin llenar'}
                                style={{ margin: '0', height: '14px', borderBottom: '1.5px dotted #9AAAB5' }}
                              ></dd>
                            </>
                          ) : null}{' '}
                        </div>{' '}
                      </React.Fragment>
                    ))}{' '}
                  </dl>{' '}
                  <p
                    style={{
                      margin: 'auto 0 0',
                      paddingTop: '16px',
                      fontSize: '12px',
                      lineHeight: '1.5',
                      color: '#5F707B',
                    }}
                  >
                    {
                      'Así funciona el autollenado en Kensa: el paciente escribe una vez y sus datos aparecen en cada formato de su visita.'
                    }
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </section>{' '}
            <section style={{ marginTop: '96px', display: 'flex', flexWrap: 'wrap', gap: '48px 72px' }}>
              {' '}
              <div style={{ flex: '1.3 1 440px', minWidth: '0' }}>
                {' '}
                <h2
                  style={{ margin: '0', fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.03em', fontWeight: '600' }}
                >
                  {'Qué sigue'}
                </h2>{' '}
                <ol
                  style={{
                    listStyle: 'none',
                    margin: '24px 0 0',
                    padding: '0',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '20px',
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
                    <span style={{ fontSize: '15px', lineHeight: '1.5' }}>
                      {'Coordinamos la plática por WhatsApp.'}
                    </span>
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
                    <span style={{ fontSize: '15px', lineHeight: '1.5' }}>
                      {'Revisamos el flujo y los documentos que tu equipo ya usa.'}
                    </span>
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
                    <span style={{ fontSize: '15px', lineHeight: '1.5' }}>
                      {'Si hay encaje y un lugar disponible, arranca tu piloto de 45 días sin costo.'}
                    </span>
                  </li>{' '}
                </ol>{' '}
                <p style={{ margin: '24px 0 0', fontSize: '14px', lineHeight: '1.6', color: '#4B5D69' }}>
                  {
                    'Como clínica fundadora usas Kensa completo en un piloto de 45 días sin costo. Después pagas un precio fundador reducido por sede, fijo mientras sigas con Kensa. '
                  }
                  <a href={link('Costa-Precios-cs04.dc.html')}>{'Consulta el programa'}</a>
                  {'.'}
                </p>{' '}
              </div>{' '}
              <div
                style={{
                  flex: '1 1 320px',
                  minWidth: '0',
                  borderTop: '2px solid #0E2A3B',
                  paddingTop: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                {' '}
                <h2 style={{ margin: '0', fontSize: '18px', fontWeight: '600' }}>
                  {'¿Prefieres mandar mensaje directo?'}
                </h2>{' '}
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.55', color: '#4B5D69' }}>
                  {'Escríbenos desde el teléfono del consultorio o sigue por correo.'}
                </p>{' '}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {' '}
                  <a
                    className={'kn-btn'}
                    href={link('https://wa.me/message/3JRJUFH6UNNLA1')}
                    style={{
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '15px',
                      padding: '12px 20px',
                      borderRadius: '999px',
                      background: '#18648A',
                      color: '#FFFFFF',
                    }}
                  >
                    {'Abrir WhatsApp'}
                  </a>{' '}
                  <a
                    className={'kn-ghost'}
                    href={link('mailto:contacto@holakensa.com')}
                    style={{
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '15px',
                      padding: '12px 20px',
                      borderRadius: '999px',
                      border: '1px solid #D6CBC4',
                      color: '#0E2A3B',
                    }}
                  >
                    {'contacto@holakensa.com'}
                  </a>{' '}
                </div>{' '}
              </div>{' '}
            </section>{' '}
          </main>{' '}
          <CostaPiePagina />{' '}
        </div>{' '}
      </>
    );
  }
}
