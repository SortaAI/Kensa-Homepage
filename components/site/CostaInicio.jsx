'use client';
// Generated from the design canvas, Costa palette (Costa-Inicio-cs01.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import { FAQ_INICIO } from '@/lib/faqs';
import { G } from '@/lib/gradients';
import CostaEncabezado from './CostaEncabezado';
import CostaPiePagina from './CostaPiePagina';

const CSS =
  'body{margin:0;background:#F9F4F0}\n:root{color-scheme:light}\n[id]{scroll-margin-top:24px}\nh1,h2,h3{text-wrap:balance}\np{text-wrap:pretty}\na,button,input,label{touch-action:manipulation;-webkit-tap-highlight-color:rgba(14,42,59,0.08)}\na,button{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out}\nnav a:not([style*="background: #18648A"]):hover{text-decoration:underline}\n:is(a,button)[style*="background: #18648A"]:hover{background:#114E6C !important}\na[style*="border: 1px solid #D6CBC4"]:hover,a[style*="border: 1px solid #E3D9D3"]:hover{background:#F2E9E5 !important;border-color:#0E2A3B !important}\nbutton[aria-expanded]:hover{color:#4B5D69 !important}\nbutton[aria-pressed="false"]:hover{background:#E8DFDA !important}\nli a:hover > span > span:first-child{text-decoration:underline}\n.skip{position:absolute;left:-9999px;top:12px;z-index:10;background:#0E2A3B;color:#FFFFFF;padding:10px 16px;border-radius:999px;text-decoration:none}\n.skip:focus{left:16px}\n@media (prefers-reduced-motion:reduce){*{transition:none !important}}\na{color:#0E2A3B;text-underline-offset:3px}a:hover{color:#4B5D69}\n*{box-sizing:border-box}\n::selection{background:#0E2A3B;color:#FFFFFF}\n:focus-visible{outline:2px solid #0E2A3B;outline-offset:3px;border-radius:6px}\ninput{caret-color:#0E2A3B}\ninput::placeholder{color:#6B6B72}\nbutton{font:inherit;cursor:pointer}\n.wrap{width:100%;max-width:1200px;margin:0 auto;padding-left:clamp(16px,4vw,40px);padding-right:clamp(16px,4vw,40px)}\n@media (max-width:820px){.hide-sm{display:none !important}.navlinks{display:none !important}}\n.kn-item:hover,.kn-trigger:hover{background:#F2E9E5 !important}\n.show-sm{display:none}\n@media (max-width:820px){.navlinks,.hide-sm{display:none !important}.show-sm{display:flex !important}}\n.orbit{position:absolute;display:flex;align-items:center;gap:10px;background:#FFFFFF;border:1px solid #E8DFDA;border-radius:14px;padding:10px 14px;font-size:13px;line-height:1.35;color:#0E2A3B;text-align:left;box-shadow:0 14px 32px rgba(14,42,59,0.08);white-space:nowrap}\n.orbit small{display:block;font-size:11px;color:#5F707B}\n.orbit i{flex:0 0 28px;height:28px;border-radius:9px;display:grid;place-items:center;font-style:normal}\n@media (max-width:1360px){.orbit{display:none !important}}\n@media (max-width:1100px){.arc{display:none !important}}\n/* motion */\n.kn-btn,.kn-ghost{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out,transform .2s cubic-bezier(.16,1,.3,1),box-shadow .2s ease-out}\n.kn-btn:hover{transform:translateY(-1px);box-shadow:0 10px 22px rgba(24,100,138,0.22)}\n.kn-btn:active{transform:translateY(0);box-shadow:0 2px 6px rgba(24,100,138,0.18);transition-duration:.08s}\n.kn-ghost:hover{transform:translateY(-1px);box-shadow:0 8px 18px rgba(14,42,59,0.08)}\nli a > span[aria-hidden] svg{transition:transform .2s cubic-bezier(.16,1,.3,1)}\nli a:hover > span[aria-hidden] svg,li a:focus-visible > span[aria-hidden] svg{transform:translateX(3px)}\n.kn-card{transition:transform .25s cubic-bezier(.16,1,.3,1),box-shadow .25s ease-out}\n.kn-card:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(14,42,59,0.10)}\nbutton[aria-expanded="true"] + *{animation:kn-open .3s cubic-bezier(.16,1,.3,1)}\n@keyframes kn-open{from{opacity:0;transform:translateY(-4px)}}\n[data-rv="pre"]{opacity:0;transform:translateY(14px)}\n[data-rv="in"]{opacity:1;transform:none;transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}\n@media (prefers-reduced-motion:reduce){[data-rv]{opacity:1 !important;transform:none !important}.kn-card:hover,.kn-btn:hover,.kn-ghost:hover,li a:hover > span[aria-hidden] svg{transform:none !important}button[aria-expanded="true"] + *{animation:none}}\n@keyframes kn-arrive{from{opacity:0;transform:translateY(12px) scale(.97)}}\n.orbit{animation:kn-arrive .7s cubic-bezier(.16,1,.3,1) both}\n.kn-job{transform-origin:left center;transition:color .4s ease-out,transform .5s cubic-bezier(.16,1,.3,1)}\n@media (prefers-reduced-motion:reduce){.orbit{animation:none}.kn-job{transition:color .2s ease-out}}';

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
  // The five front-desk jobs: the highlight moves down the list as the reader scrolls past it.
  knJobs() {
    var self = this,
      el = document.getElementById('kn-jobs');
    if (!el) return;
    this.knScroll = function () {
      var r = el.getBoundingClientRect(),
        vh = window.innerHeight;
      var p = Math.min(1, Math.max(0, (vh * 0.78 - r.top) / (vh * 0.5)));
      var j = Math.round(p * 4);
      if (j !== self.state.job) self.setState({ job: j });
    };
    window.addEventListener('scroll', this.knScroll, { passive: true });
    this.knScroll();
  }

  componentDidMount() {
    this.knReveal();
    this.knJobs();
  }
  componentWillUnmount() {
    if (this.knIo) this.knIo.disconnect();
    if (this.knScroll) window.removeEventListener('scroll', this.knScroll);
  }
  constructor(props) {
    super(props);
    this.state = { step: 0, sent: false, faq: 0, job: 2 };
  }
  renderVals() {
    var self = this,
      st = this.state;
    var gi = 0;
    var img = function (src, alt, w, h) {
      return { isImg: true, isSeal: false, isOffer: false, src: src, alt: alt, w: w, h: h, bg: G[gi++ % G.length] };
    };
    var jobNames = [
      'Contesta WhatsApp',
      'Acomoda la agenda',
      'Llama cuando alguien cancela',
      'Reparte formatos',
      'Persigue firmas',
    ];
    var jobs = jobNames.map(function (t, i) {
      var d = Math.abs(i - st.job);
      return { t: t, color: d === 0 ? '#18648A' : d === 1 ? '#4B5D69' : '#7A8A95', scale: d === 0 ? '1' : '0.76' };
    });
    var data = [
      {
        ic: 'M6.094 11.229A8.01 8.01 0 0 1 6 10c0-4.418 3.605-8 8.053-8 4.447 0 8.052 3.582 8.052 8a7.94 7.94 0 0 1-.52 2.835c-.07.182-.105.274-.12.345a.897.897 0 0 0-.024.194c-.002.073.008.153.028.314l.403 3.27c.043.355.065.532.006.66a.5.5 0 0 1-.257.252c-.13.055-.306.03-.66-.022l-3.184-.467c-.167-.024-.25-.037-.326-.036a.898.898 0 0 0-.2.021 2.989 2.989 0 0 0-.358.122 8.174 8.174 0 0 1-4.07.42M7.632 22C10.597 22 13 19.538 13 16.5S10.597 11 7.632 11c-2.965 0-5.369 2.462-5.369 5.5 0 .61.097 1.198.277 1.747.075.232.113.348.126.427.013.083.015.13.01.213-.005.08-.025.17-.065.351L2 22l2.995-.409c.163-.022.245-.034.316-.033.076 0 .115.005.19.02.07.013.173.05.381.123a5.246 5.246 0 0 0 1.75.299Z',
        verb: 'Conecta',
        line: 'El paciente escribe por WhatsApp. Lo que necesita a una persona llega a tu bandeja.',
        shot: img(
          '/img/combo-conecta.webp',
          'El paciente reagenda por WhatsApp con el asistente y la bandeja de Mensajes de Kensa en una laptop',
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
          '/img/iphone-oferta-whatsapp.webp',
          'La oferta del horario llega por WhatsApp y abre la página para aceptarla',
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
    var faqData = FAQ_INICIO;
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
      jobs: jobs,
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

export default class CostaInicio extends Logic {
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
                position: 'relative',
                padding: 'clamp(48px,7vw,96px) 0 0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              {' '}
              <div
                className={'arc'}
                aria-hidden={'true'}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '56px',
                  width: '1480px',
                  height: '1480px',
                  marginLeft: '-740px',
                  borderRadius: '50%',
                  border: '1px solid rgba(24,100,138,0.16)',
                  pointerEvents: 'none',
                  webkitMaskImage: 'linear-gradient(to bottom, #000 0, #000 34%, transparent 52%)',
                  maskImage: 'linear-gradient(to bottom, #000 0, #000 34%, transparent 52%)',
                }}
              ></div>{' '}
              <div
                aria-hidden={'true'}
                style={{
                  position: 'absolute',
                  left: '-40vw',
                  right: '-40vw',
                  top: '-120px',
                  bottom: '0',
                  background:
                    'radial-gradient(820px 460px at 50% 170px, rgba(224,152,122,0.15), rgba(249,244,240,0) 72%), radial-gradient(900px 420px at 50% 640px, rgba(24,100,138,0.07), rgba(249,244,240,0) 72%)',
                  pointerEvents: 'none',
                }}
              ></div>{' '}
              <div
                className={'orbit'}
                aria-hidden={'true'}
                data-o={'0'}
                style={{ animationDelay: '0.15s', left: '0', top: '30px' }}
              >
                <i aria-hidden={'true'} style={{ background: '#E3EEF4', color: '#18648A' }}>
                  <svg
                    width={'15'}
                    height={'15'}
                    viewBox={'0 0 24 24'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  >
                    <path d={'M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.8-.9L3 20l1.1-4.9A8.4 8.4 0 1 1 21 11.5Z'} />
                  </svg>
                </i>
                <span>
                  <small>{'WhatsApp · ahora'}</small>
                  {'Hola, quisiera agendar una cita…'}
                </span>
              </div>{' '}
              <div
                className={'orbit'}
                aria-hidden={'true'}
                data-o={'1'}
                style={{ animationDelay: '0.3s', left: '2%', top: '250px' }}
              >
                <i aria-hidden={'true'} style={{ background: '#FBEDE6', color: '#9E4A29' }}>
                  <svg
                    width={'15'}
                    height={'15'}
                    viewBox={'0 0 24 24'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  >
                    <path d={'M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'} />
                  </svg>
                </i>
                <span>
                  {'Por confirmar '}
                  <b
                    style={{
                      marginLeft: '6px',
                      background: '#9E4A29',
                      color: '#FFFFFF',
                      borderRadius: '999px',
                      padding: '1px 7px',
                      fontSize: '11px',
                    }}
                  >
                    {'3'}
                  </b>
                </span>
              </div>{' '}
              <div
                className={'orbit'}
                aria-hidden={'true'}
                data-o={'2'}
                style={{ animationDelay: '0.45s', left: '0', top: '388px' }}
              >
                <i aria-hidden={'true'} style={{ background: '#E6F2EC', color: '#1F6B45' }}>
                  <svg
                    width={'15'}
                    height={'15'}
                    viewBox={'0 0 24 24'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  >
                    <path d={'M20 6 9 17l-5-5'} />
                  </svg>
                </i>
                <span>
                  <small>{'Ficha de identificación'}</small>
                  {'Lista'}
                </span>
              </div>{' '}
              <div
                className={'orbit'}
                aria-hidden={'true'}
                data-o={'3'}
                style={{ animationDelay: '0.25s', right: '0', top: '30px' }}
              >
                <i aria-hidden={'true'} style={{ background: '#E3EEF4', color: '#18648A' }}>
                  <svg
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
                      d={'M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z'}
                    />
                  </svg>
                </i>
                <span>
                  <small>{'Se liberó un horario'}</small>
                  {'Vie 30 · 10:00 a.m.'}
                </span>
              </div>{' '}
              <div
                className={'orbit'}
                aria-hidden={'true'}
                data-o={'4'}
                style={{ animationDelay: '0.4s', right: '0', top: '236px' }}
              >
                <i aria-hidden={'true'} style={{ background: '#FBEDE6', color: '#9E4A29' }}>
                  <svg
                    width={'15'}
                    height={'15'}
                    viewBox={'0 0 24 24'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  >
                    <path d={'M13 2 4 14h7l-1 8 9-12h-7l1-8Z'} />
                  </svg>
                </i>
                <span>{'Se reutiliza en campos iguales'}</span>
              </div>{' '}
              <div
                className={'orbit'}
                aria-hidden={'true'}
                data-o={'5'}
                style={{ animationDelay: '0.55s', right: '0', top: '378px' }}
              >
                <i aria-hidden={'true'} style={{ background: '#E6F2EC', color: '#1F6B45' }}>
                  <svg
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
                        'M7 11V7a5 5 0 0 1 10 0v4M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z'
                      }
                    />
                  </svg>
                </i>
                <span>
                  <small>{'Registro 42'}</small>
                  {'Firmado y bloqueado'}
                </span>
              </div>{' '}
              <h1
                style={{
                  position: 'relative',
                  margin: '0',
                  fontSize: 'clamp(40px,5vw,64px)',
                  lineHeight: '1.05',
                  letterSpacing: '-0.035em',
                  fontWeight: '600',
                  maxWidth: '840px',
                  textWrap: 'balance',
                }}
              >
                {'Del primer mensaje '}
                <span style={{ color: '#18648A' }}>
                  {'al expediente firmado'}
                  <span style={{ color: '#E0987A' }}>{'.'}</span>
                </span>
              </h1>{' '}
              <p
                style={{
                  margin: '20px 0 0',
                  fontSize: 'clamp(16px,1.5vw,18px)',
                  lineHeight: '1.6',
                  color: '#4B5D69',
                  maxWidth: '520px',
                  position: 'relative',
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
                      position: 'relative',
                      marginTop: '32px',
                      width: '100%',
                      maxWidth: '640px',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      background: '#FFFFFF',
                      border: '1px solid #E3D9D3',
                      borderRadius: '22px',
                      padding: '6px',
                      textAlign: 'left',
                      boxShadow: '0 10px 30px rgba(14,42,59,0.07)',
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
                        color: '#5F707B',
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
                          color: '#0E2A3B',
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
                        color: '#5F707B',
                        borderLeft: '1px solid #EEE6E2',
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
                          color: '#0E2A3B',
                          padding: '2px 0',
                        }}
                      />
                    </label>{' '}
                    <button
                      className={'kn-btn'}
                      type={'submit'}
                      style={{
                        flex: '0 0 auto',
                        border: '0',
                        borderRadius: '16px',
                        background: '#18648A',
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
                  <p style={{ margin: '12px 0 0', fontSize: '13px', color: '#5F707B' }}>
                    {'Recibes un WhatsApp para coordinar. Sin compromiso.'}
                  </p>
                  <div style={{ position: 'relative', marginTop: '64px', width: '100%', maxWidth: '1040px' }}>
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
                          filter: 'drop-shadow(0 24px 40px rgba(14,42,59,0.22))',
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
                      border: '1px solid #E3D9D3',
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
          <div data-rv={'1'} className={'wrap'} style={{ paddingTop: '28px' }}>
            {' '}
            <p
              style={{
                margin: '0',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '8px 26px',
                fontSize: '14px',
                color: '#4B5D69',
              }}
            >
              {' '}
              <span>{'Hecho para clínicas en México'}</span>
              <span aria-hidden={'true'} style={{ color: '#9AAAB5' }}>
                {'/'}
              </span>{' '}
              <span>{'Sobre WhatsApp'}</span>
              <span aria-hidden={'true'} style={{ color: '#9AAAB5' }}>
                {'/'}
              </span>{' '}
              <span>{'Formatos basados en la NOM-004'}</span>
              <span aria-hidden={'true'} style={{ color: '#9AAAB5' }}>
                {'/'}
              </span>{' '}
              <span>{'Expedientes sellados'}</span>
              <span aria-hidden={'true'} style={{ color: '#9AAAB5' }}>
                {'/'}
              </span>{' '}
              <span>{'Modo de prueba'}</span>{' '}
            </p>{' '}
          </div>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '120px' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 72px' }}>
              {' '}
              <div style={{ flex: '1 1 320px' }}>
                {' '}
                <h2
                  style={{
                    margin: '0',
                    fontSize: 'clamp(30px,3.8vw,47px)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.03em',
                    fontWeight: '600',
                  }}
                >
                  {'Tu recepción hace 5 trabajos a la vez'}
                  <span style={{ color: '#E0987A' }}>{'.'}</span>
                </h2>{' '}
                <ul
                  id={'kn-jobs'}
                  aria-label={'Los 5 trabajos de recepción'}
                  style={{
                    listStyle: 'none',
                    margin: '28px 0 0',
                    padding: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  {(v.jobs || []).map((j, $index) => (
                    <React.Fragment key={$index}>
                      <li
                        className={'kn-job'}
                        style={{
                          fontSize: '28px',
                          fontWeight: '600',
                          letterSpacing: '-0.02em',
                          lineHeight: '1.25',
                          color: j?.color,
                          transform: `scale(${j?.scale ?? ''})`,
                        }}
                      >
                        {j?.t}
                      </li>
                    </React.Fragment>
                  ))}
                </ul>{' '}
                <p
                  style={{
                    margin: '24px 0 0',
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#4B5D69',
                    maxWidth: '400px',
                  }}
                >
                  {'Cada vez que una tarea pasa a la otra, se pierde tiempo y dinero.'}
                </p>{' '}
              </div>{' '}
              <ul style={{ flex: '1.4 1 460px', listStyle: 'none', margin: '0', padding: '0' }}>
                {' '}
                <li style={{ borderTop: '1px solid #E8DFDA' }}>
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
                      <span style={{ fontSize: '14px', color: '#4B5D69' }}>
                        {'El asistente resuelve lo de siempre y te pasa lo demás.'}
                      </span>
                    </span>
                    <span aria-hidden={'true'} style={{ color: '#5F707B', display: 'flex' }}>
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
                <li style={{ borderTop: '1px solid #E8DFDA' }}>
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
                      <span style={{ fontSize: '14px', color: '#4B5D69' }}>
                        {'La lista de espera ofrece el horario, uno por uno.'}
                      </span>
                    </span>
                    <span aria-hidden={'true'} style={{ color: '#5F707B', display: 'flex' }}>
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
                <li style={{ borderTop: '1px solid #E8DFDA' }}>
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
                      <span style={{ fontSize: '14px', color: '#4B5D69' }}>
                        {'El paciente llena y firma desde su celular.'}
                      </span>
                    </span>
                    <span aria-hidden={'true'} style={{ color: '#5F707B', display: 'flex' }}>
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
                <li style={{ borderTop: '1px solid #E8DFDA', borderBottom: '1px solid #E8DFDA' }}>
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
                      <span style={{ fontSize: '14px', color: '#4B5D69' }}>
                        {'Expedientes firmados, bloqueados y sellados.'}
                      </span>
                    </span>
                    <span aria-hidden={'true'} style={{ color: '#5F707B', display: 'flex' }}>
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
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '120px' }}>
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
              <span style={{ color: '#18648A' }}>
                {'Cada paso conectado'}
                <span style={{ color: '#E0987A' }}>{'.'}</span>
              </span>
            </h2>{' '}
            <div style={{ marginTop: '48px', display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'stretch' }}>
              {' '}
              <div style={{ flex: '1 1 360px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
                {' '}
                {(v.steps || []).map((s, $index) => (
                  <React.Fragment key={$index}>
                    {' '}
                    <div style={{ borderTop: '1px solid #E8DFDA' }}>
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
                          color: '#0E2A3B',
                        }}
                      >
                        {' '}
                        <span
                          aria-hidden={'true'}
                          style={{
                            width: '34px',
                            height: '34px',
                            borderRadius: '10px',
                            border: '1px solid #E3D9D3',
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
                        <span aria-hidden={'true'} style={{ fontSize: '18px', color: '#5F707B' }}>
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
                              color: '#4B5D69',
                            }}
                          >
                            {s?.line}
                          </p>{' '}
                        </>
                      ) : null}{' '}
                    </div>{' '}
                  </React.Fragment>
                ))}{' '}
                <a
                  href={link('Costa-Funciones-cs02.dc.html')}
                  style={{ marginTop: '20px', fontSize: '15px', fontWeight: '500' }}
                >
                  {'Ver todas las funciones'}
                </a>{' '}
              </div>{' '}
              <div
                style={{
                  flex: '1.6 1 520px',
                  minWidth: '0',
                  background: '#F2E9E5',
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
                        border: '1px solid #E6DCD6',
                        boxShadow: '0 14px 36px rgba(14,42,59,0.10)',
                        background: v.shot?.bg,
                        transition: 'background .4s ease-out',
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
                        border: '1px solid #DED3CD',
                        boxShadow: '0 18px 40px rgba(14,42,59,0.14)',
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
                        border: '8px solid #0E2A3B',
                        borderRadius: '36px',
                        boxShadow: '0 20px 44px rgba(14,42,59,0.18)',
                        background: '#FBF8F6',
                      }}
                    />{' '}
                  </>
                ) : null}{' '}
              </div>{' '}
            </div>{' '}
          </section>{' '}
          <div data-rv={'1'} className={'wrap'} style={{ paddingTop: '120px' }}>
            {' '}
            <section
              style={{
                background: '#0E2A3B',
                color: '#F7F2EF',
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
                  fontSize: 'clamp(30px,3.8vw,47px)',
                  lineHeight: '1.1',
                  letterSpacing: '-0.03em',
                  fontWeight: '600',
                  textWrap: 'balance',
                }}
              >
                {'Menos sillas vacías. Menos papeleo. '}
                <span style={{ color: '#E0987A' }}>
                  {'Recepción tranquila'}
                  <span style={{ color: '#E0987A' }}>{'.'}</span>
                </span>
              </h2>{' '}
              <dl style={{ flex: '1 1 420px', margin: '0', display: 'flex', flexDirection: 'column' }}>
                {' '}
                <div
                  style={{
                    borderTop: '1px solid #24475C',
                    padding: '18px 0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Protege tus ingresos'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#B9C7D0' }}>
                    {'Las cancelaciones vuelven a ocuparse.'}
                  </dd>
                </div>{' '}
                <div
                  style={{
                    borderTop: '1px solid #24475C',
                    padding: '18px 0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Libera a recepción'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#B9C7D0' }}>
                    {'Menos llamadas y chats repetidos.'}
                  </dd>
                </div>{' '}
                <div
                  style={{
                    borderTop: '1px solid #24475C',
                    padding: '18px 0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Pacientes más contentos'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#B9C7D0' }}>
                    {'Todo desde su celular, a su ritmo.'}
                  </dd>
                </div>{' '}
                <div
                  style={{
                    borderTop: '1px solid #24475C',
                    borderBottom: '1px solid #24475C',
                    padding: '18px 0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px 24px',
                  }}
                >
                  <dt style={{ flex: '0 0 220px', fontWeight: '500' }}>{'Listos para auditoría'}</dt>
                  <dd style={{ flex: '1 1 200px', margin: '0', color: '#B9C7D0' }}>
                    {'Expedientes firmados y sellados.'}
                  </dd>
                </div>{' '}
              </dl>{' '}
            </section>{' '}
          </div>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '120px' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 72px' }}>
              {' '}
              <div style={{ flex: '1 1 300px' }}>
                {' '}
                <h2
                  style={{
                    margin: '0',
                    fontSize: 'clamp(30px,3.8vw,47px)',
                    lineHeight: '1.1',
                    letterSpacing: '-0.03em',
                    fontWeight: '600',
                  }}
                >
                  {'Preguntas frecuentes'}
                </h2>{' '}
                <a
                  href={link('Costa-Precios-cs04.dc.html')}
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
            </div>{' '}
          </section>{' '}
          <section
            id={'demo'}
            data-rv={'1'}
            className={'wrap'}
            style={{
              position: 'relative',
              marginTop: '120px',
              paddingTop: '96px',
              paddingBottom: '72px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            {' '}
            <div
              aria-hidden={'true'}
              style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                width: '1600px',
                height: '1600px',
                marginLeft: '-800px',
                borderRadius: '50%',
                borderTop: '1px solid rgba(24,100,138,0.18)',
                background: 'radial-gradient(50% 18% at 50% 6%, rgba(24,100,138,0.10), rgba(249,244,240,0) 100%)',
                pointerEvents: 'none',
              }}
            ></div>{' '}
            <h2
              style={{
                margin: '0',
                fontSize: 'clamp(32px,4.4vw,53px)',
                lineHeight: '1.05',
                letterSpacing: '-0.03em',
                fontWeight: '600',
              }}
            >
              {'Conecta tu '}
              <span style={{ color: '#18648A' }}>
                {'recepción'}
                <span style={{ color: '#E0987A' }}>{'.'}</span>
              </span>
            </h2>{' '}
            <p style={{ position: 'relative', margin: '14px 0 0', fontSize: '16px', color: '#4B5D69' }}>
              {'Te lo enseñamos con tus propios formatos.'}
            </p>{' '}
            <a
              className={'kn-btn'}
              href={link('Costa-Contacto-cs06.dc.html')}
              style={{
                position: 'relative',
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
