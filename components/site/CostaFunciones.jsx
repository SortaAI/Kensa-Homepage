'use client';
// Generated from the design canvas, Costa palette (Costa-Funciones-cs02.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import { G } from '@/lib/gradients';
import CostaEncabezado from './CostaEncabezado';
import CostaPiePagina from './CostaPiePagina';

const CSS =
  'body{margin:0;background:#F9F4F0}\n:root{color-scheme:light}\n[id]{scroll-margin-top:24px}\nh1,h2,h3{text-wrap:balance}\np{text-wrap:pretty}\na,button,input,label{touch-action:manipulation;-webkit-tap-highlight-color:rgba(14,42,59,0.08)}\na,button{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out}\nnav a:not([style*="background: #18648A"]):hover{text-decoration:underline}\n:is(a,button)[style*="background: #18648A"]:hover{background:#114E6C !important}\na[style*="border: 1px solid #D6CBC4"]:hover,a[style*="border: 1px solid #E3D9D3"]:hover{background:#F2E9E5 !important;border-color:#0E2A3B !important}\nbutton[aria-expanded]:hover{color:#4B5D69 !important}\nbutton[aria-pressed="false"]:hover{background:#E8DFDA !important}\nli a:hover > span > span:first-child{text-decoration:underline}\n.skip{position:absolute;left:-9999px;top:12px;z-index:10;background:#0E2A3B;color:#FFFFFF;padding:10px 16px;border-radius:999px;text-decoration:none}\n.skip:focus{left:16px}\n@media (prefers-reduced-motion:reduce){*{transition:none !important}}\na{color:#0E2A3B;text-underline-offset:3px}a:hover{color:#4B5D69}\n*{box-sizing:border-box}\n::selection{background:#0E2A3B;color:#FFFFFF}\n:focus-visible{outline:2px solid #0E2A3B;outline-offset:3px;border-radius:6px}\n.wrap{width:100%;max-width:1200px;margin:0 auto;padding-left:clamp(16px,4vw,40px);padding-right:clamp(16px,4vw,40px)}\n@media (max-width:820px){.hide-sm{display:none !important}.navlinks{display:none !important}}\n.kn-item:hover,.kn-trigger:hover{background:#F2E9E5 !important}\n.show-sm{display:none}\n@media (max-width:820px){.navlinks,.hide-sm{display:none !important}.show-sm{display:flex !important}}\n.fx-step{min-height:440px}\n@media (min-width:821px){.fx-step[data-active="no"]{opacity:.38}}\n@media (max-width:820px){.fx-step{min-height:0}}\n@media (prefers-reduced-motion:reduce){.fx-step,.fx-shot{transition:none !important}}\n/* motion */\n.kn-btn,.kn-ghost{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out,transform .2s cubic-bezier(.16,1,.3,1),box-shadow .2s ease-out}\n.kn-btn:hover{transform:translateY(-1px);box-shadow:0 10px 22px rgba(24,100,138,0.22)}\n.kn-btn:active{transform:translateY(0);box-shadow:0 2px 6px rgba(24,100,138,0.18);transition-duration:.08s}\n.kn-ghost:hover{transform:translateY(-1px);box-shadow:0 8px 18px rgba(14,42,59,0.08)}\nli a > span[aria-hidden] svg{transition:transform .2s cubic-bezier(.16,1,.3,1)}\nli a:hover > span[aria-hidden] svg,li a:focus-visible > span[aria-hidden] svg{transform:translateX(3px)}\n.kn-card{transition:transform .25s cubic-bezier(.16,1,.3,1),box-shadow .25s ease-out}\n.kn-card:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(14,42,59,0.10)}\nbutton[aria-expanded="true"] + *{animation:kn-open .3s cubic-bezier(.16,1,.3,1)}\n@keyframes kn-open{from{opacity:0;transform:translateY(-4px)}}\n[data-rv="pre"]{opacity:0;transform:translateY(14px)}\n[data-rv="in"]{opacity:1;transform:none;transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}\n@media (prefers-reduced-motion:reduce){[data-rv]{opacity:1 !important;transform:none !important}.kn-card:hover,.kn-btn:hover,.kn-ghost:hover,li a:hover > span[aria-hidden] svg{transform:none !important}button[aria-expanded="true"] + *{animation:none}}';

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

  constructor(props) {
    super(props);
    this.state = { active: 0 };
  }
  // Steps 1–5: the step nearest the middle of the window picks the laptop's screen.
  componentDidMount() {
    this.knReveal();
    var self = this;
    if (typeof IntersectionObserver === 'undefined') return;
    this.io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) self.setState({ active: Number(e.target.getAttribute('data-step')) });
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    document.querySelectorAll('[data-step]').forEach(function (el) {
      self.io.observe(el);
    });
  }
  componentWillUnmount() {
    if (this.knIo) this.knIo.disconnect();
    if (this.io) this.io.disconnect();
  }
  renderVals() {
    // Íconos de Untitled UI (@untitledui/icons, MIT)
    var FI = {
      'Asistente de WhatsApp': [
        'M6.094 11.229A8.01 8.01 0 0 1 6 10c0-4.418 3.605-8 8.053-8 4.447 0 8.052 3.582 8.052 8a7.94 7.94 0 0 1-.52 2.835c-.07.182-.105.274-.12.345a.897.897 0 0 0-.024.194c-.002.073.008.153.028.314l.403 3.27c.043.355.065.532.006.66a.5.5 0 0 1-.257.252c-.13.055-.306.03-.66-.022l-3.184-.467c-.167-.024-.25-.037-.326-.036a.898.898 0 0 0-.2.021 2.989 2.989 0 0 0-.358.122 8.174 8.174 0 0 1-4.07.42M7.632 22C10.597 22 13 19.538 13 16.5S10.597 11 7.632 11c-2.965 0-5.369 2.462-5.369 5.5 0 .61.097 1.198.277 1.747.075.232.113.348.126.427.013.083.015.13.01.213-.005.08-.025.17-.065.351L2 22l2.995-.409c.163-.022.245-.034.316-.033.076 0 .115.005.19.02.07.013.173.05.381.123a5.246 5.246 0 0 0 1.75.299Z',
      ],
      Mensajes: [
        'M2.5 12h3.382c.685 0 1.312.387 1.618 1 .306.613.933 1 1.618 1h5.764c.685 0 1.312-.387 1.618-1 .306-.613.933-1 1.618-1H21.5M8.967 4h6.066c1.077 0 1.616 0 2.091.164a3 3 0 0 1 1.121.693c.36.352.6.833 1.082 1.796l2.166 4.333c.19.378.284.567.35.765.06.177.102.357.128.541.029.207.029.418.029.841V15.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 20 18.88 20 17.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2v-2.067c0-.422 0-.634.029-.84.026-.184.068-.365.128-.541.066-.199.16-.388.35-.766l2.166-4.333c.482-.963.723-1.444 1.082-1.796a3 3 0 0 1 1.12-.693C7.352 4 7.89 4 8.968 4Z',
      ],
      'Agenda y solicitudes': [
        'M21 10H3m13-8v4M8 2v4m1 10 2 2 4.5-4.5M7.8 22h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22Z',
      ],
      'Preparar visitas': [
        'M16 4c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C20 6.605 20 7.07 20 8v9.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V8c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.122-2.122C6.605 4 7.07 4 8 4m1 11 2 2 4.5-4.5M9.6 6h4.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C16 5.24 16 4.96 16 4.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C15.24 2 14.96 2 14.4 2H9.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C8 2.76 8 3.04 8 3.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C8.76 6 9.04 6 9.6 6Z',
      ],
      'Biblioteca de documentos': [
        'M14 2.27V6.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.11.494.11 1.054.11h4.13M16 13H8m8 4H8m2-8H8m6-7H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V8l-6-6Z',
      ],
      'Tus propios formatos': [
        'M21 15v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V15m14-7-5-5m0 0L7 8m5-5v12',
      ],
      'Formatos en el celular': [
        'M12 17.5h.01M8.2 22h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 20.48 19 19.92 19 18.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 2 16.92 2 15.8 2H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 3.52 5 4.08 5 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 22 7.08 22 8.2 22Zm4.3-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
      ],
      Autollenado: [
        'M13 2 4.093 12.688c-.348.418-.523.628-.525.804a.5.5 0 0 0 .185.397c.138.111.41.111.955.111H12l-1 8 8.907-10.688c.348-.418.523-.628.525-.804a.5.5 0 0 0-.185-.397c-.138-.111-.41-.111-.955-.111H12l1-8Z',
      ],
      Envíos: [
        'M10.5 13.5 21 3M10.627 13.828l2.628 6.758c.232.596.347.893.514.98a.5.5 0 0 0 .462 0c.167-.086.283-.384.515-.979l6.59-16.888c.21-.537.315-.806.258-.977a.5.5 0 0 0-.316-.316c-.172-.057-.44.048-.978.257L3.413 9.253c-.595.233-.893.349-.98.516a.5.5 0 0 0 0 .461c.087.167.385.283.98.514l6.758 2.629c.121.046.182.07.233.106a.5.5 0 0 1 .116.117c.037.05.06.111.107.232Z',
      ],
      'Firmar y bloquear': [
        'M13 6 6.502 7.3c-.363.072-.545.108-.692.197a1 1 0 0 0-.325.312c-.094.144-.138.324-.225.684L2 22m0 0 13.507-3.26c.36-.087.54-.13.684-.225a1 1 0 0 0 .312-.325c.088-.148.125-.329.197-.692L18 11M2 22l7.586-7.586m11.283-6.546L16.13 3.131c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668l-.738.737c-.396.397-.594.595-.668.823a1 1 0 0 0 0 .618c.074.228.272.426.668.822l4.738 4.737c.396.396.594.595.822.669a1 1 0 0 0 .618 0c.228-.075.426-.273.822-.669l.738-.737c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.229-.272-.427-.668-.823ZM11 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z',
      ],
      'Expedientes sellados': [
        'm9 11.5 2 2L15.5 9m4.5 3c0 4.908-5.354 8.478-7.302 9.615-.221.129-.332.194-.488.227a1.137 1.137 0 0 1-.42 0c-.156-.034-.267-.098-.488-.227C9.354 20.478 4 16.908 4 12V7.217c0-.799 0-1.199.13-1.542a2 2 0 0 1 .548-.79c.276-.243.65-.383 1.398-.664l5.362-2.01c.208-.078.312-.117.419-.133a1 1 0 0 1 .286 0c.107.016.21.055.419.133l5.362 2.01c.748.28 1.123.421 1.398.664a2 2 0 0 1 .547.79c.131.343.131.743.131 1.542V12Z',
      ],
      'Lista de espera': ['M2 10s2.005-2.732 3.634-4.362A9 9 0 1 1 12 21a9.004 9.004 0 0 1-8.648-6.5M2 10V4m0 6h6'],
      'Hoy y Pacientes': [
        'M9 21v-7.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 12 10.04 12 10.6 12h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 12.76 15 13.04 15 13.6V21M11.018 2.764 4.235 8.039c-.453.353-.68.53-.843.75a2 2 0 0 0-.318.65C3 9.704 3 9.991 3 10.565V17.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8v-7.235c0-.574 0-.861-.074-1.126a2.002 2.002 0 0 0-.318-.65c-.163-.22-.39-.397-.843-.75l-6.783-5.275c-.351-.273-.527-.41-.72-.462a1 1 0 0 0-.523 0c-.194.052-.37.189-.721.462Z',
      ],
      'Equipo y roles': [
        'M22 21v-2a4.002 4.002 0 0 0-3-3.874M15.5 3.291a4.001 4.001 0 0 1 0 7.418M17 21c0-1.864 0-2.796-.305-3.53a4 4 0 0 0-2.164-2.165C13.796 15 12.864 15 11 15H8c-1.864 0-2.796 0-3.53.305a4 4 0 0 0-2.166 2.164C2 18.204 2 19.136 2 21M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
      ],
      'Configuración guiada': [
        'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
        'M18.727 14.727a1.5 1.5 0 0 0 .3 1.655l.055.054a1.816 1.816 0 0 1 0 2.573 1.818 1.818 0 0 1-2.573 0l-.055-.055a1.5 1.5 0 0 0-1.654-.3 1.5 1.5 0 0 0-.91 1.373v.155a1.818 1.818 0 1 1-3.636 0V20.1a1.5 1.5 0 0 0-.981-1.373 1.5 1.5 0 0 0-1.655.3l-.054.055a1.818 1.818 0 0 1-3.106-1.287 1.818 1.818 0 0 1 .533-1.286l.054-.055a1.5 1.5 0 0 0 .3-1.654 1.5 1.5 0 0 0-1.372-.91h-.155a1.818 1.818 0 1 1 0-3.636H3.9a1.5 1.5 0 0 0 1.373-.981 1.5 1.5 0 0 0-.3-1.655l-.055-.054A1.818 1.818 0 1 1 7.491 4.99l.054.054a1.5 1.5 0 0 0 1.655.3h.073a1.5 1.5 0 0 0 .909-1.372v-.155a1.818 1.818 0 0 1 3.636 0V3.9a1.499 1.499 0 0 0 .91 1.373 1.5 1.5 0 0 0 1.654-.3l.054-.055a1.817 1.817 0 0 1 2.573 0 1.819 1.819 0 0 1 0 2.573l-.055.054a1.5 1.5 0 0 0-.3 1.655v.073a1.5 1.5 0 0 0 1.373.909h.155a1.818 1.818 0 0 1 0 3.636H20.1a1.499 1.499 0 0 0-1.373.91Z',
      ],
      'Seguridad y privacidad': [
        'M17 10V8A5 5 0 0 0 7 8v2m5 4.5v2M8.8 21h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 18.72 20 17.88 20 16.2v-1.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 10 16.88 10 15.2 10H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 12.28 4 13.12 4 14.8v1.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 21 7.12 21 8.8 21Z',
      ],
    };
    var F = function (name, line, href) {
      var p = FI[name] || [''];
      return { name: name, line: line, href: href || '#', ic: { a: p[0], b: p[1] || '' } };
    };
    // I: a floating screen (white card). Ib: a device mockup or composite, shown without a frame.
    var gi = 0;
    var I = function (src, alt, maxw, w, h) {
      return {
        bg: G[gi++ % G.length],
        isImg: true,
        isBare: false,
        isSeal: false,
        isOffer: false,
        src: src,
        alt: alt,
        maxw: maxw || '100%',
        w: w,
        h: h,
      };
    };
    var Ib = function (src, alt, w, h) {
      return {
        isImg: false,
        isBare: true,
        isSeal: false,
        isOffer: false,
        src: src,
        alt: alt,
        maxw: '100%',
        w: w,
        h: h,
      };
    };
    var stages = [
      Object.assign(
        {
          id: 'conecta',
          n: '1',
          name: 'Conecta',
          line: 'El paciente te escribe por WhatsApp.',
          features: [
            F(
              'Asistente de WhatsApp',
              'Responde de día y de noche, y cede el paso cuando hace falta una persona.',
              'Funcion-Asistente.dc.html',
            ),
            F(
              'Mensajes',
              'Los chats que necesitan a alguien, en una bandeja que todo tu equipo ve.',
              'Funcion-Mensajes.dc.html',
            ),
          ],
        },
        I(
          '/img/laptop-mensajes.webp',
          'Kensa en una laptop: la bandeja de Mensajes con la conversación de una paciente abierta',
          '100%',
          1920,
          1440,
        ),
      ),
      Object.assign(
        {
          id: 'agenda',
          n: '2',
          name: 'Agenda',
          line: 'Citas con horarios reales.',
          features: [
            F(
              'Agenda y solicitudes',
              'Evita empalmes y le avisa al paciente cuando confirmas.',
              'Funcion-Agenda.dc.html',
            ),
          ],
        },
        I(
          '/img/pantalla-agenda-semana.webp',
          'Agenda semanal con citas confirmadas y por confirmar',
          '100%',
          1880,
          1348,
        ),
      ),
      Object.assign(
        {
          id: 'prepara',
          n: '3',
          name: 'Prepara',
          line: 'Cada cita con sus documentos.',
          features: [
            F('Preparar visitas', 'Las visitas de mañana y qué documentos faltan.', 'Funcion-PrepararVisitas.dc.html'),
            F(
              'Biblioteca de documentos',
              '7 formatos listos, basados en la normativa mexicana.',
              'Funcion-Biblioteca.dc.html',
            ),
            F(
              'Tus propios formatos',
              'Sube tu PDF o una foto y conviértelo en formato digital.',
              'Funcion-TusFormatos.dc.html',
            ),
          ],
        },
        Ib(
          '/img/laptop-preparar-visitas.webp',
          'Kensa en una laptop: las citas de mañana con el estado de cada cita y de sus documentos',
          1920,
          1440,
        ),
      ),
      Object.assign(
        {
          id: 'llena',
          n: '4',
          name: 'Llena',
          line: 'Desde el celular del paciente.',
          features: [
            F(
              'Formatos en el celular',
              'Llenan y firman a su ritmo, y pueden seguir después.',
              'Funcion-FormatosCelular.dc.html',
            ),
            F(
              'Autollenado',
              'Escriben sus datos una vez y se llenan en todo el paquete.',
              'Funcion-Autollenado.dc.html',
            ),
            F('Envíos', 'Por WhatsApp, correo o enlace, y ves en qué van.', 'Funcion-Envios.dc.html'),
          ],
        },
        Ib(
          '/img/combo-llena.webp',
          'El paciente llena su ficha en el celular y sus datos se reutilizan en todo el paquete',
          1880,
          1220,
        ),
      ),
      Object.assign(
        {
          id: 'firma',
          n: '5',
          name: 'Firma y sella',
          line: 'Expedientes que ya no cambian.',
          features: [
            F(
              'Firmar y bloquear',
              'Solo profesionales verificados firman. Las correcciones van en una nota posterior.',
              'Funcion-FirmarBloquear.dc.html',
            ),
            F(
              'Expedientes sellados',
              'Sellados contra alteraciones, con el historial de quién vio qué.',
              'Funcion-ExpedientesSellados.dc.html',
            ),
          ],
        },
        Ib(
          '/img/combo-firma.webp',
          'Registro sellado con su huella digital y la comprobación de que no ha cambiado',
          1880,
          1300,
        ),
      ),
      Object.assign(
        {
          id: 'recupera',
          n: '6',
          name: 'Recupera',
          line: 'Las cancelaciones vuelven a ocuparse.',
          features: [
            F(
              'Lista de espera',
              'Ofrece los horarios cancelados a quien quiere venir antes.',
              'Funcion-ListaDeEspera.dc.html',
            ),
          ],
        },
        Ib(
          '/img/combo-recupera.webp',
          'Ofrecer un horario libre a la lista de espera, la oferta que llega por WhatsApp y la página que abre',
          1880,
          1320,
        ),
      ),
      Object.assign(
        {
          id: 'base',
          n: '',
          name: 'La base',
          line: 'Lo que sostiene los seis pasos.',
          features: [
            F(
              'Hoy y Pacientes',
              'Encuentra al paciente y resuelve desde una sola pantalla.',
              'Funcion-Recepcion.dc.html',
            ),
            F(
              'Equipo y roles',
              'Cada quien con su acceso. Solo profesionales verificados firman.',
              'Funcion-Equipo.dc.html',
            ),
            F(
              'Configuración guiada',
              'Prueba con datos de práctica y activa cuando estés listo.',
              'Funcion-Configuracion.dc.html',
            ),
            F(
              'Seguridad y privacidad',
              'Los datos de tus pacientes, con el cuidado que requieren.',
              'Costa-Seguridad-cs05.dc.html',
            ),
          ],
        },
        Ib(
          '/img/laptop-hoy.webp',
          'Kensa en una laptop: Hoy, con los pacientes del día, las citas y lo que requiere atención',
          1920,
          1440,
        ),
      ),
    ];
    var shots = [
      [
        '/img/laptop-mensajes.webp',
        'Kensa en una laptop: la bandeja de Mensajes con la conversación de una paciente abierta',
      ],
      [
        '/img/laptop-agenda-dia.webp',
        'Kensa en una laptop: la agenda del día con citas confirmadas y una por confirmar',
      ],
      [
        '/img/laptop-preparar-visitas-fondo.webp',
        'Kensa en una laptop: las citas de mañana con el estado de cada cita y de sus documentos',
      ],
      [
        '/img/laptop-asi-va-quedando.webp',
        'Kensa en una laptop: las respuestas del paciente ya llenas en su formato, con la vista de cómo va quedando',
      ],
      [
        '/img/laptop-visita-firmada.webp',
        'Kensa en una laptop: visita firmada y bloqueada, con su registro sellado y su huella digital',
      ],
    ];
    var active = this.state.active;
    var flow = stages.slice(0, 5).map(function (st, i) {
      return Object.assign({}, st, {
        i: String(i),
        src: shots[i][0],
        alt: shots[i][1],
        bg: G[i % G.length],
        w: 1920,
        h: 1440,
        on: i === active ? 'yes' : 'no',
        shown: i === active ? '1' : '0',
        bar: i <= active ? '#18648A' : '#DED3CD',
      });
    });
    return { stages: stages, flow: flow, rest: stages.slice(5) };
  }
}

export default class CostaFunciones extends Logic {
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
            overflowX: 'clip',
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
              paddingTop: '96px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {' '}
            <h1
              style={{
                margin: '0',
                fontSize: 'clamp(38px,5.6vw,67px)',
                lineHeight: '1.04',
                letterSpacing: '-0.03em',
                fontWeight: '600',
                maxWidth: '820px',
                textWrap: 'balance',
              }}
            >
              {'6 pasos. '}
              <span style={{ color: '#18648A' }}>
                {'Una sola herramienta'}
                <span style={{ color: '#E0987A' }}>{'.'}</span>
              </span>
            </h1>{' '}
            <p style={{ margin: '18px 0 0', fontSize: '18px', lineHeight: '1.6', color: '#4B5D69', maxWidth: '480px' }}>
              {'Cada función le pasa su trabajo a la siguiente.'}
            </p>{' '}
            <nav
              aria-label={'Pasos'}
              style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}
            >
              {' '}
              {(v.stages || []).map((s, $index) => (
                <React.Fragment key={$index}>
                  {' '}
                  <a
                    className={'kn-ghost'}
                    href={link(`#${s?.id ?? ''}`)}
                    style={{
                      textDecoration: 'none',
                      fontSize: '14px',
                      border: '1px solid #E3D9D3',
                      borderRadius: '999px',
                      padding: '10px 16px',
                    }}
                  >
                    {s?.name}
                  </a>{' '}
                </React.Fragment>
              ))}{' '}
            </nav>{' '}
          </section>{' '}
          <section data-rv={'1'} className={'wrap'} style={{ paddingTop: '88px' }}>
            {' '}
            <div style={{ display: 'flex', gap: '56px', alignItems: 'flex-start' }}>
              {' '}
              <div style={{ flex: '1 1 380px', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
                {' '}
                {(v.flow || []).map((s, $index) => (
                  <React.Fragment key={$index}>
                    {' '}
                    <div
                      id={s?.id}
                      data-step={s?.i}
                      data-active={s?.on}
                      className={'fx-step'}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '40px 0',
                        transition: 'opacity .35s ease-out',
                      }}
                    >
                      {' '}
                      <h2
                        style={{
                          margin: '0',
                          fontSize: 'clamp(28px,3.2vw,40px)',
                          lineHeight: '1.1',
                          letterSpacing: '-0.03em',
                          fontWeight: '600',
                        }}
                      >
                        <span style={{ color: '#18648A', marginRight: '10px' }}>{s?.n}</span>
                        {s?.name}
                      </h2>{' '}
                      <p style={{ margin: '10px 0 0', fontSize: '16px', color: '#4B5D69' }}>{s?.line}</p>{' '}
                      <ul
                        style={{
                          margin: '24px 0 0',
                          padding: '0',
                          listStyle: 'none',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        {' '}
                        {(s?.features || []).map((f, $index) => (
                          <React.Fragment key={$index}>
                            {' '}
                            <li style={{ borderTop: '1px solid #E8DFDA' }}>
                              {' '}
                              <a
                                href={link(f?.href)}
                                style={{
                                  textDecoration: 'none',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  gap: '16px',
                                  padding: '16px 0',
                                }}
                              >
                                {' '}
                                <span
                                  aria-hidden={'true'}
                                  style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '12px',
                                    background: '#0E2A3B',
                                    color: '#FFFFFF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: '0',
                                  }}
                                >
                                  <svg
                                    width={'20'}
                                    height={'20'}
                                    viewBox={'0 0 24 24'}
                                    fill={'none'}
                                    stroke={'currentColor'}
                                    strokeWidth={'2'}
                                    strokeLinecap={'round'}
                                    strokeLinejoin={'round'}
                                  >
                                    <path d={f?.ic?.a} />
                                    <path d={f?.ic?.b} />
                                  </svg>
                                </span>{' '}
                                <span
                                  style={{
                                    flex: '1',
                                    minWidth: '0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px',
                                  }}
                                >
                                  <span style={{ fontSize: '17px', fontWeight: '500' }}>{f?.name}</span>
                                  <span style={{ fontSize: '14px', lineHeight: '1.55', color: '#4B5D69' }}>
                                    {f?.line}
                                  </span>
                                </span>{' '}
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
                                </span>{' '}
                              </a>{' '}
                            </li>{' '}
                          </React.Fragment>
                        ))}{' '}
                      </ul>{' '}
                      <div
                        className={'show-sm'}
                        style={{ marginTop: '24px', background: '#F2E9E5', borderRadius: '24px', overflow: 'hidden' }}
                      >
                        {' '}
                        <img
                          src={s?.src}
                          width={s?.w}
                          height={s?.h}
                          loading={'lazy'}
                          alt={s?.alt}
                          style={{ display: 'block', width: '100%', height: 'auto', background: s?.bg }}
                        />{' '}
                      </div>{' '}
                    </div>{' '}
                  </React.Fragment>
                ))}{' '}
              </div>{' '}
              <div
                className={'hide-sm'}
                style={{
                  flex: '1.3 1 520px',
                  minWidth: '0',
                  position: 'sticky',
                  top: '96px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                {' '}
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '4 / 3',
                    background: '#F2E9E5',
                    borderRadius: '28px',
                    overflow: 'hidden',
                  }}
                >
                  {' '}
                  {(v.flow || []).map((s, $index) => (
                    <React.Fragment key={$index}>
                      {' '}
                      <img
                        className={'fx-shot'}
                        src={s?.src}
                        width={s?.w}
                        height={s?.h}
                        loading={'lazy'}
                        alt={''}
                        aria-hidden={'true'}
                        style={{
                          position: 'absolute',
                          inset: '0',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'left bottom',
                          background: s?.bg,
                          opacity: s?.shown,
                          transition: 'opacity .45s ease-out',
                        }}
                      />{' '}
                    </React.Fragment>
                  ))}{' '}
                </div>{' '}
                <div aria-hidden={'true'} style={{ display: 'flex', gap: '6px', padding: '0 4px' }}>
                  {' '}
                  {(v.flow || []).map((s, $index) => (
                    <React.Fragment key={$index}>
                      {' '}
                      <span
                        style={{
                          flex: '1',
                          height: '4px',
                          borderRadius: '999px',
                          background: s?.bar,
                          transition: 'background-color .35s ease-out',
                        }}
                      ></span>{' '}
                    </React.Fragment>
                  ))}{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </section>{' '}
          {(v.rest || []).map((s, $index) => (
            <React.Fragment key={$index}>
              {' '}
              <section id={s?.id} data-rv={'1'} className={'wrap'} style={{ paddingTop: '104px' }}>
                {' '}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 56px', alignItems: 'center' }}>
                  {' '}
                  <div style={{ flex: '1 1 340px', minWidth: '0' }}>
                    {' '}
                    <h2
                      style={{
                        margin: '0',
                        fontSize: 'clamp(28px,3.2vw,40px)',
                        lineHeight: '1.1',
                        letterSpacing: '-0.03em',
                        fontWeight: '600',
                      }}
                    >
                      <span style={{ color: '#18648A', marginRight: '10px' }}>{s?.n}</span>
                      {s?.name}
                    </h2>{' '}
                    <p style={{ margin: '10px 0 0', fontSize: '16px', color: '#4B5D69' }}>{s?.line}</p>{' '}
                    <ul
                      style={{
                        margin: '28px 0 0',
                        padding: '0',
                        listStyle: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {' '}
                      {(s?.features || []).map((f, $index) => (
                        <React.Fragment key={$index}>
                          {' '}
                          <li style={{ borderTop: '1px solid #E8DFDA' }}>
                            {' '}
                            <a
                              href={link(f?.href)}
                              style={{
                                textDecoration: 'none',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '16px',
                                padding: '16px 0',
                              }}
                            >
                              {' '}
                              <span
                                aria-hidden={'true'}
                                style={{
                                  width: '40px',
                                  height: '40px',
                                  borderRadius: '12px',
                                  background: '#0E2A3B',
                                  color: '#FFFFFF',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexShrink: '0',
                                }}
                              >
                                <svg
                                  width={'20'}
                                  height={'20'}
                                  viewBox={'0 0 24 24'}
                                  fill={'none'}
                                  stroke={'currentColor'}
                                  strokeWidth={'2'}
                                  strokeLinecap={'round'}
                                  strokeLinejoin={'round'}
                                >
                                  <path d={f?.ic?.a} />
                                  <path d={f?.ic?.b} />
                                </svg>
                              </span>{' '}
                              <span
                                style={{
                                  flex: '1',
                                  minWidth: '0',
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '4px',
                                }}
                              >
                                <span style={{ fontSize: '17px', fontWeight: '500' }}>{f?.name}</span>
                                <span style={{ fontSize: '14px', lineHeight: '1.55', color: '#4B5D69' }}>
                                  {f?.line}
                                </span>
                              </span>{' '}
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
                              </span>{' '}
                            </a>{' '}
                          </li>{' '}
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
                      minHeight: '380px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {' '}
                    {s?.isImg ? (
                      <>
                        {' '}
                        <img
                          src={s?.src}
                          width={s?.w}
                          height={s?.h}
                          loading={'lazy'}
                          alt={s?.alt}
                          style={{
                            display: 'block',
                            width: '100%',
                            maxWidth: s?.maxw,
                            height: 'auto',
                            borderRadius: '14px',
                            border: '1px solid #E6DCD6',
                            boxShadow: '0 14px 36px rgba(14,42,59,0.10)',
                            background: s?.bg,
                          }}
                        />{' '}
                      </>
                    ) : null}{' '}
                    {s?.isBare ? (
                      <>
                        {' '}
                        <img
                          src={s?.src}
                          width={s?.w}
                          height={s?.h}
                          loading={'lazy'}
                          alt={s?.alt}
                          style={{ display: 'block', width: '100%', maxWidth: s?.maxw, height: 'auto' }}
                        />{' '}
                      </>
                    ) : null}{' '}
                    {s?.isSeal ? (
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
                    {s?.isOffer ? (
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
            </React.Fragment>
          ))}{' '}
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
              {'Velo funcionando con tus propios formatos'}
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
