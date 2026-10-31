'use client';
// Generated from the design canvas, Costa palette (FuncionPlantilla-ifzy.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import CostaEncabezado from './CostaEncabezado';
import CostaPiePagina from './CostaPiePagina';

const CSS =
  'body{margin:0}\n/* motion */\n.kn-btn,.kn-ghost{transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out,transform .2s cubic-bezier(.16,1,.3,1),box-shadow .2s ease-out}\n.kn-btn:hover{transform:translateY(-1px);box-shadow:0 10px 22px rgba(24,100,138,0.22)}\n.kn-btn:active{transform:translateY(0);box-shadow:0 2px 6px rgba(24,100,138,0.18);transition-duration:.08s}\n.kn-ghost:hover{transform:translateY(-1px);box-shadow:0 8px 18px rgba(14,42,59,0.08)}\nli a > span[aria-hidden] svg{transition:transform .2s cubic-bezier(.16,1,.3,1)}\nli a:hover > span[aria-hidden] svg,li a:focus-visible > span[aria-hidden] svg{transform:translateX(3px)}\n.kn-card{transition:transform .25s cubic-bezier(.16,1,.3,1),box-shadow .25s ease-out}\n.kn-card:hover{transform:translateY(-3px);box-shadow:0 18px 40px rgba(14,42,59,0.10)}\nbutton[aria-expanded="true"] + *{animation:kn-open .3s cubic-bezier(.16,1,.3,1)}\n@keyframes kn-open{from{opacity:0;transform:translateY(-4px)}}\n[data-rv="pre"]{opacity:0;transform:translateY(14px)}\n[data-rv="in"]{opacity:1;transform:none;transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}\n@media (prefers-reduced-motion:reduce){[data-rv]{opacity:1 !important;transform:none !important}.kn-card:hover,.kn-btn:hover,.kn-ghost:hover,li a:hover > span[aria-hidden] svg{transform:none !important}button[aria-expanded="true"] + *{animation:none}}';

// Guides from the blog that go deeper on each feature (internal links for readers and search).
const GUIDES = {
  asistente: [
    ['WhatsApp Business API para clínicas: qué permite y qué no', 'whatsapp-business-api-clinicas'],
    ['8 mensajes para confirmar y reagendar citas médicas por WhatsApp', 'mensajes-confirmar-citas-whatsapp'],
    [
      'Asistente virtual para consultorios: qué automatizar y cuándo debe intervenir recepción',
      'asistente-virtual-consultorios',
    ],
  ],
  mensajes: [
    ['WhatsApp Business API para clínicas: qué permite y qué no', 'whatsapp-business-api-clinicas'],
    ['8 mensajes para confirmar y reagendar citas médicas por WhatsApp', 'mensajes-confirmar-citas-whatsapp'],
    ['Checklist de recepción para clínicas: antes, durante y después de la consulta', 'checklist-recepcion-clinica'],
  ],
  agenda: [
    ['Cómo reducir las inasistencias a citas médicas en tu clínica', 'reducir-inasistencias-citas-medicas'],
    ['Agenda de citas médicas en Excel: plantilla gratis para recepción', 'agenda-citas-medicas-excel'],
    ['8 mensajes para confirmar y reagendar citas médicas por WhatsApp', 'mensajes-confirmar-citas-whatsapp'],
  ],
  preparar: [
    ['Preconsulta digital: qué puede completar el paciente antes de llegar', 'preconsulta-digital'],
    ['Checklist de recepción para clínicas: antes, durante y después de la consulta', 'checklist-recepcion-clinica'],
    ['Cómo reducir las inasistencias a citas médicas en tu clínica', 'reducir-inasistencias-citas-medicas'],
  ],
  biblioteca: [
    ['Llenado de formatos médicos. Qué aporta frente a la NOM-004.', 'llenado-formatos-nom-004'],
    ['Ficha de identificación del paciente: formato en Word y PDF', 'ficha-identificacion-paciente'],
    ['Checklist para digitalizar los formatos de tu consultorio', 'checklist-formatos-consultorio'],
  ],
  tusformatos: [
    ['Cómo digitalizar formatos médicos sin cambiar de sistema', 'digitalizar-formatos-medicos'],
    ['Checklist para digitalizar los formatos de tu consultorio', 'checklist-formatos-consultorio'],
    ['Cómo reducir el papeleo repetido en la recepción de un consultorio', 'reducir-papeleo-consultorio'],
  ],
  celular: [
    ['Preconsulta digital: qué puede completar el paciente antes de llegar', 'preconsulta-digital'],
    ['Cómo digitalizar formatos médicos sin cambiar de sistema', 'digitalizar-formatos-medicos'],
    ['Cómo automatizar formatos médicos por WhatsApp en tu consultorio', 'automatizar-formatos-medicos-whatsapp'],
  ],
  autollenado: [
    ['Cómo reducir el papeleo repetido en la recepción de un consultorio', 'reducir-papeleo-consultorio'],
    ['Ficha de identificación del paciente: formato en Word y PDF', 'ficha-identificacion-paciente'],
    ['Cómo digitalizar formatos médicos sin cambiar de sistema', 'digitalizar-formatos-medicos'],
  ],
  envios: [
    ['Cómo automatizar formatos médicos por WhatsApp en tu consultorio', 'automatizar-formatos-medicos-whatsapp'],
    ['Preconsulta digital: qué puede completar el paciente antes de llegar', 'preconsulta-digital'],
    ['WhatsApp Business API para clínicas: qué permite y qué no', 'whatsapp-business-api-clinicas'],
  ],
  firmar: [
    ['Llenado de formatos médicos. Qué aporta frente a la NOM-004.', 'llenado-formatos-nom-004'],
    ['Software médico en la nube: qué pedir antes de subir datos de pacientes', 'seguridad-software-medico-nube'],
  ],
  sellados: [
    ['Software médico en la nube: qué pedir antes de subir datos de pacientes', 'seguridad-software-medico-nube'],
    ['Llenado de formatos médicos. Qué aporta frente a la NOM-004.', 'llenado-formatos-nom-004'],
  ],
  recepcion: [
    ['Checklist de recepción para clínicas: antes, durante y después de la consulta', 'checklist-recepcion-clinica'],
    ['Cómo reducir las inasistencias a citas médicas en tu clínica', 'reducir-inasistencias-citas-medicas'],
    ['Agenda de citas médicas en Excel: plantilla gratis para recepción', 'agenda-citas-medicas-excel'],
  ],
  equipo: [
    ['Checklist de recepción para clínicas: antes, durante y después de la consulta', 'checklist-recepcion-clinica'],
    ['Software médico en la nube: qué pedir antes de subir datos de pacientes', 'seguridad-software-medico-nube'],
  ],
  configuracion: [
    ['Cómo elegir software para una clínica: qué probar antes de contratar', 'elegir-software-clinica'],
    ['Checklist para digitalizar los formatos de tu consultorio', 'checklist-formatos-consultorio'],
    ['WhatsApp Business API para clínicas: qué permite y qué no', 'whatsapp-business-api-clinicas'],
  ],
};

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
    // Íconos de Untitled UI (@untitledui/icons, MIT), trazos de 24×24
    var IC = {
      chat: [
        'M6.094 11.229A8.01 8.01 0 0 1 6 10c0-4.418 3.605-8 8.053-8 4.447 0 8.052 3.582 8.052 8a7.94 7.94 0 0 1-.52 2.835c-.07.182-.105.274-.12.345a.897.897 0 0 0-.024.194c-.002.073.008.153.028.314l.403 3.27c.043.355.065.532.006.66a.5.5 0 0 1-.257.252c-.13.055-.306.03-.66-.022l-3.184-.467c-.167-.024-.25-.037-.326-.036a.898.898 0 0 0-.2.021 2.989 2.989 0 0 0-.358.122 8.174 8.174 0 0 1-4.07.42M7.632 22C10.597 22 13 19.538 13 16.5S10.597 11 7.632 11c-2.965 0-5.369 2.462-5.369 5.5 0 .61.097 1.198.277 1.747.075.232.113.348.126.427.013.083.015.13.01.213-.005.08-.025.17-.065.351L2 22l2.995-.409c.163-.022.245-.034.316-.033.076 0 .115.005.19.02.07.013.173.05.381.123a5.246 5.246 0 0 0 1.75.299Z',
      ],
      inbox: [
        'M2.5 12h3.382c.685 0 1.312.387 1.618 1 .306.613.933 1 1.618 1h5.764c.685 0 1.312-.387 1.618-1 .306-.613.933-1 1.618-1H21.5M8.967 4h6.066c1.077 0 1.616 0 2.091.164a3 3 0 0 1 1.121.693c.36.352.6.833 1.082 1.796l2.166 4.333c.19.378.284.567.35.765.06.177.102.357.128.541.029.207.029.418.029.841V15.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 20 18.88 20 17.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2v-2.067c0-.422 0-.634.029-.84.026-.184.068-.365.128-.541.066-.199.16-.388.35-.766l2.166-4.333c.482-.963.723-1.444 1.082-1.796a3 3 0 0 1 1.12-.693C7.352 4 7.89 4 8.968 4Z',
      ],
      calendar: [
        'M21 10H3m13-8v4M8 2v4m1 10 2 2 4.5-4.5M7.8 22h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22Z',
      ],
      clipboard: [
        'M16 4c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C20 6.605 20 7.07 20 8v9.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V8c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.122-2.122C6.605 4 7.07 4 8 4m1 11 2 2 4.5-4.5M9.6 6h4.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C16 5.24 16 4.96 16 4.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C15.24 2 14.96 2 14.4 2H9.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C8 2.76 8 3.04 8 3.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C8.76 6 9.04 6 9.6 6Z',
      ],
      file: [
        'M14 2.27V6.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.11.494.11 1.054.11h4.13M16 13H8m8 4H8m2-8H8m6-7H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V8l-6-6Z',
      ],
      fileShield: [
        'M14 11H8m2 4H8m8-8H8m12 3V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 2 16.88 2 15.2 2H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h3.7m5.5-1s3-1.43 3-3.575v-2.502l-2.188-.782a2.41 2.41 0 0 0-1.626 0L15 14.923v2.502C15 19.57 18 21 18 21Z',
      ],
      upload: [
        'M21 15v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V15m14-7-5-5m0 0L7 8m5-5v12',
      ],
      phone: [
        'M12 17.5h.01M8.2 22h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 20.48 19 19.92 19 18.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 2 16.92 2 15.8 2H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 3.52 5 4.08 5 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 22 7.08 22 8.2 22Zm4.3-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
      ],
      zap: [
        'M13 2 4.093 12.688c-.348.418-.523.628-.525.804a.5.5 0 0 0 .185.397c.138.111.41.111.955.111H12l-1 8 8.907-10.688c.348-.418.523-.628.525-.804a.5.5 0 0 0-.185-.397c-.138-.111-.41-.111-.955-.111H12l1-8Z',
      ],
      send: [
        'M10.5 13.5 21 3M10.627 13.828l2.628 6.758c.232.596.347.893.514.98a.5.5 0 0 0 .462 0c.167-.086.283-.384.515-.979l6.59-16.888c.21-.537.315-.806.258-.977a.5.5 0 0 0-.316-.316c-.172-.057-.44.048-.978.257L3.413 9.253c-.595.233-.893.349-.98.516a.5.5 0 0 0 0 .461c.087.167.385.283.98.514l6.758 2.629c.121.046.182.07.233.106a.5.5 0 0 1 .116.117c.037.05.06.111.107.232Z',
      ],
      pen: [
        'M13 6 6.502 7.3c-.363.072-.545.108-.692.197a1 1 0 0 0-.325.312c-.094.144-.138.324-.225.684L2 22m0 0 13.507-3.26c.36-.087.54-.13.684-.225a1 1 0 0 0 .312-.325c.088-.148.125-.329.197-.692L18 11M2 22l7.586-7.586m11.283-6.546L16.13 3.131c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668l-.738.737c-.396.397-.594.595-.668.823a1 1 0 0 0 0 .618c.074.228.272.426.668.822l4.738 4.737c.396.396.594.595.822.669a1 1 0 0 0 .618 0c.228-.075.426-.273.822-.669l.738-.737c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.229-.272-.427-.668-.823ZM11 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z',
      ],
      shield: [
        'm9 11.5 2 2L15.5 9m4.5 3c0 4.908-5.354 8.478-7.302 9.615-.221.129-.332.194-.488.227a1.137 1.137 0 0 1-.42 0c-.156-.034-.267-.098-.488-.227C9.354 20.478 4 16.908 4 12V7.217c0-.799 0-1.199.13-1.542a2 2 0 0 1 .548-.79c.276-.243.65-.383 1.398-.664l5.362-2.01c.208-.078.312-.117.419-.133a1 1 0 0 1 .286 0c.107.016.21.055.419.133l5.362 2.01c.748.28 1.123.421 1.398.664a2 2 0 0 1 .547.79c.131.343.131.743.131 1.542V12Z',
      ],
      refresh: ['M2 10s2.005-2.732 3.634-4.362A9 9 0 1 1 12 21a9.004 9.004 0 0 1-8.648-6.5M2 10V4m0 6h6'],
      home: [
        'M9 21v-7.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 12 10.04 12 10.6 12h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 12.76 15 13.04 15 13.6V21M11.018 2.764 4.235 8.039c-.453.353-.68.53-.843.75a2 2 0 0 0-.318.65C3 9.704 3 9.991 3 10.565V17.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8v-7.235c0-.574 0-.861-.074-1.126a2.002 2.002 0 0 0-.318-.65c-.163-.22-.39-.397-.843-.75l-6.783-5.275c-.351-.273-.527-.41-.72-.462a1 1 0 0 0-.523 0c-.194.052-.37.189-.721.462Z',
      ],
      users: [
        'M22 21v-2a4.002 4.002 0 0 0-3-3.874M15.5 3.291a4.001 4.001 0 0 1 0 7.418M17 21c0-1.864 0-2.796-.305-3.53a4 4 0 0 0-2.164-2.165C13.796 15 12.864 15 11 15H8c-1.864 0-2.796 0-3.53.305a4 4 0 0 0-2.166 2.164C2 18.204 2 19.136 2 21M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
      ],
      settings: [
        'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
        'M18.727 14.727a1.5 1.5 0 0 0 .3 1.655l.055.054a1.816 1.816 0 0 1 0 2.573 1.818 1.818 0 0 1-2.573 0l-.055-.055a1.5 1.5 0 0 0-1.654-.3 1.5 1.5 0 0 0-.91 1.373v.155a1.818 1.818 0 1 1-3.636 0V20.1a1.5 1.5 0 0 0-.981-1.373 1.5 1.5 0 0 0-1.655.3l-.054.055a1.818 1.818 0 0 1-3.106-1.287 1.818 1.818 0 0 1 .533-1.286l.054-.055a1.5 1.5 0 0 0 .3-1.654 1.5 1.5 0 0 0-1.372-.91h-.155a1.818 1.818 0 1 1 0-3.636H3.9a1.5 1.5 0 0 0 1.373-.981 1.5 1.5 0 0 0-.3-1.655l-.055-.054A1.818 1.818 0 1 1 7.491 4.99l.054.054a1.5 1.5 0 0 0 1.655.3h.073a1.5 1.5 0 0 0 .909-1.372v-.155a1.818 1.818 0 0 1 3.636 0V3.9a1.499 1.499 0 0 0 .91 1.373 1.5 1.5 0 0 0 1.654-.3l.054-.055a1.817 1.817 0 0 1 2.573 0 1.819 1.819 0 0 1 0 2.573l-.055.054a1.5 1.5 0 0 0-.3 1.655v.073a1.5 1.5 0 0 0 1.373.909h.155a1.818 1.818 0 0 1 0 3.636H20.1a1.499 1.499 0 0 0-1.373.91Z',
      ],
      lock: [
        'M17 10V8A5 5 0 0 0 7 8v2m5 4.5v2M8.8 21h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 18.72 20 17.88 20 16.2v-1.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 10 16.88 10 15.2 10H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 12.28 4 13.12 4 14.8v1.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 21 7.12 21 8.8 21Z',
      ],
      userCheck: [
        'M12 15.5H7.5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C2 18.907 2 19.604 2 21m14-3 2 2 4-4m-7.5-8.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z',
      ],
      building: [
        'M7.5 11H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 11.76 3 12.04 3 12.6V21m13.5-10h2.9c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 11.76 21 12.04 21 12.6V21m-4.5 0V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.98 3 14.42 3 13.3 3h-2.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7.5 4.52 7.5 5.08 7.5 6.2V21M22 21H2m9-14h2m-2 4h2m-2 4h2',
      ],
      heart: [
        'M16.111 3C19.633 3 22 6.353 22 9.48 22 15.814 12.178 21 12 21c-.178 0-10-5.186-10-11.52C2 6.352 4.367 3 7.889 3 9.91 3 11.233 4.024 12 4.924 12.767 4.024 14.089 3 16.111 3Z',
      ],
      key: [
        'M17 9a1.99 1.99 0 0 0-.586-1.414A1.994 1.994 0 0 0 15 7m0 8a6 6 0 1 0-5.946-5.193c.058.434.087.651.068.789a.853.853 0 0 1-.117.346c-.068.121-.187.24-.426.479l-5.11 5.11c-.173.173-.26.26-.322.36a1 1 0 0 0-.12.29C3 17.296 3 17.418 3 17.663V19.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21H7v-2h2v-2h2l1.58-1.58c.238-.238.357-.357.478-.425a.852.852 0 0 1 .346-.117c.138-.02.355.01.789.068.264.036.533.054.807.054Z',
      ],
      check: ['m7.5 12 3 3 6-6m5.5 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z'],
      clock: ['M12 6v6l4 2m6-2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z'],
      eye: [
        'M2.42 12.713c-.136-.215-.204-.323-.242-.49a1.173 1.173 0 0 1 0-.446c.038-.167.106-.274.242-.49C3.546 9.505 6.895 5 12 5s8.455 4.505 9.58 6.287c.137.215.205.323.243.49.029.125.029.322 0 .446-.038.167-.106.274-.242.49C20.455 14.495 17.105 19 12 19c-5.106 0-8.455-4.505-9.58-6.287Z',
        'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
      ],
      database: [
        'M21 5c0 1.657-4.03 3-9 3S3 6.657 3 5m18 0c0-1.657-4.03-3-9-3S3 3.343 3 5m18 0v14c0 1.66-4 3-9 3s-9-1.34-9-3V5m18 7c0 1.66-4 3-9 3s-9-1.34-9-3',
      ],
      link: [
        'm12.708 18.364-1.415 1.414a5 5 0 1 1-7.07-7.07l1.413-1.415m12.728 1.414 1.415-1.414a5 5 0 0 0-7.071-7.071l-1.415 1.414M8.5 15.5l7-7',
      ],
      fingerprint: [
        'm5.807 18.53.054-.089A13.916 13.916 0 0 0 8 11a4 4 0 1 1 8 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0 0 15.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 0 0 8 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4M12 11c0 3.517-1.009 6.799-2.753 9.571',
      ],
      bell: [
        'M9.354 21c.705.622 1.632 1 2.646 1s1.94-.378 2.646-1M18 8A6 6 0 1 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.732.099 1.928.099H18.61c1.196 0 1.795 0 1.927-.098.147-.11.186-.179.2-.361.014-.165-.353-.755-1.088-1.936C18.78 13.206 18 11.09 18 8Z',
      ],
      hourglass: [
        'M12 12 7.727 8.44c-.635-.53-.952-.794-1.18-1.119a3 3 0 0 1-.444-.947C6 5.991 6 5.578 6 4.752V2m6 10 4.273-3.56c.635-.53.952-.794 1.18-1.119a3 3 0 0 0 .444-.947C18 5.991 18 5.578 18 4.752V2m-6 10-4.273 3.56c-.635.53-.952.794-1.18 1.119a3 3 0 0 0-.444.947C6 18.009 6 18.422 6 19.248V22m6-10 4.273 3.56c.635.53.952.794 1.18 1.119a3 3 0 0 1 .444.947c.103.383.103.796.103 1.622V22M4 2h16M4 22h16',
      ],
      server: [
        'M6 6h.01M6 18h.01m-.81-8h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 8.48 22 7.92 22 6.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 2 19.92 2 18.8 2H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 3.52 2 4.08 2 5.2v1.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 10 4.08 10 5.2 10Zm0 12h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 20.48 22 19.92 22 18.8v-1.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 14 19.92 14 18.8 14H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 15.52 2 16.08 2 17.2v1.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 22 4.08 22 5.2 22Z',
      ],
    };
    var I = function (k) {
      var p = IC[k] || IC.check;
      return { a: p[0], b: p[1] || '' };
    };
    var order = [
      ['asistente', 'Asistente de WhatsApp', 'Funcion-Asistente.dc.html', 'chat'],
      ['mensajes', 'Mensajes', 'Funcion-Mensajes.dc.html', 'inbox'],
      ['agenda', 'Agenda', 'Funcion-Agenda.dc.html', 'calendar'],
      ['preparar', 'Preparar visitas', 'Funcion-PrepararVisitas.dc.html', 'clipboard'],
      ['biblioteca', 'Biblioteca de documentos', 'Funcion-Biblioteca.dc.html', 'file'],
      ['tusformatos', 'Tus propios formatos', 'Funcion-TusFormatos.dc.html', 'upload'],
      ['celular', 'Formatos en el celular', 'Funcion-FormatosCelular.dc.html', 'phone'],
      ['autollenado', 'Autollenado', 'Funcion-Autollenado.dc.html', 'zap'],
      ['envios', 'Envíos', 'Funcion-Envios.dc.html', 'send'],
      ['firmar', 'Firmar y bloquear', 'Funcion-FirmarBloquear.dc.html', 'pen'],
      ['sellados', 'Expedientes sellados', 'Funcion-ExpedientesSellados.dc.html', 'shield'],
      ['lista', 'Lista de espera', 'Funcion-ListaDeEspera.dc.html', 'refresh'],
      ['recepcion', 'Hoy y Pacientes', 'Funcion-Recepcion.dc.html', 'home'],
      ['equipo', 'Equipo y roles', 'Funcion-Equipo.dc.html', 'users'],
      ['configuracion', 'Configuración guiada', 'Funcion-Configuracion.dc.html', 'settings'],
      ['seguridad', 'Seguridad y privacidad', 'Costa-Seguridad-cs05.dc.html', 'lock'],
    ];
    var L = function (slug) {
      for (var i = 0; i < order.length; i++)
        if (order[i][0] === slug) return { name: order[i][1], href: order[i][2], icon: I(order[i][3]) };
      return { name: '', href: '#', icon: I('check') };
    };
    var S = function (arr) {
      return arr.map(function (s, i) {
        return { n: String(i + 1), t: s[0], d: s[1] };
      });
    };
    var K = function (arr) {
      return arr.map(function (k) {
        return { icon: I(k[0]), t: k[1] };
      });
    };
    var PI = {
      'Para recepción': 'userCheck',
      'Para la dirección': 'building',
      'Para tus pacientes': 'heart',
      'Para tu clínica': 'building',
      'Para administración': 'key',
    };
    var W = function (who, t) {
      return { who: who, t: t, icon: I(PI[who] || 'check') };
    };
    var D = {
      asistente: {
        stage: 'Conecta',
        name: 'Asistente de WhatsApp',
        visual: 'whatsapp',
        h1: 'Tu clínica contesta por WhatsApp, de día y de noche.',
        sub: 'Un menú sencillo para agendar, reagendar o hablar con el doctor. Cuando tu equipo entra, el asistente se hace a un lado.',
        facts: K([
          ['chat', 'Menú de 3 opciones'],
          ['clock', 'Responde fuera de horario'],
          ['users', 'Pasa el chat a tu equipo'],
        ]),
        steps: S([
          ['El paciente escribe', 'Recibe un menú: Agendar, Reagendar o Hablar con doctor.'],
          ['Si sus formatos ya están listos', 'Le manda su enlace personal en ese momento.'],
          ['Si quiere reagendar', 'Ve días y horas libres reales. Tu equipo confirma la solicitud.'],
          ['Si pide a una persona', 'La conversación pasa a Mensajes.'],
        ]),
        why1: W('Para recepción', 'Las preguntas de siempre se resuelven solas. Tú ves solo lo que te necesita.'),
        why2: W('Para la dirección', 'Tus pacientes te encuentran en la app que ya usan, también fuera de horario.'),
        note: 'Es un menú automático, no un chatbot con IA. No agenda citas sin que tu equipo confirme. Funciona con tu número actual de WhatsApp Business.',
        links: ['mensajes', 'agenda', 'envios'],
      },
      mensajes: {
        stage: 'Conecta',
        name: 'Mensajes',
        visual: 'img',
        src: '/img/laptop-mensajes.webp',
        w: 1920,
        h: 1440,
        alt: 'Kensa en una laptop: la bandeja de Mensajes con la conversación de una paciente abierta',
        maxw: '100%',
        h1: 'Cada chat que necesita a una persona, en una sola bandeja.',
        sub: 'Todo tu equipo ve qué está pendiente y quién ya contestó.',
        facts: K([
          ['inbox', 'Una bandeja para todo el equipo'],
          ['hourglass', 'Aviso de la ventana de 24 horas'],
          ['database', 'Retención de 30 días a 10 años'],
        ]),
        steps: S([
          ['Llega con el motivo', '“Pidió su formato”, “Quiere hablar con el doctor”, “Pidió reagendar”.'],
          ['Respondes desde la computadora', 'Y marcas la conversación como resuelta.'],
          ['El asistente retoma', 'En cuanto la resuelves.'],
          ['Ventana de 24 horas', 'Te avisa cuando WhatsApp ya no deja responder.'],
        ]),
        why1: W('Para recepción', 'Un solo lugar para ver qué falta. Se acabó revisar el celular personal.'),
        why2: W(
          'Para la dirección',
          'Las conversaciones se quedan en la clínica, con borrado y retención según tu política.',
        ),
        note: 'Puedes borrar una conversación si el paciente lo pide y elegir cuánto tiempo se guardan los chats, de 30 días a 10 años.',
        links: ['asistente', 'agenda'],
      },
      agenda: {
        stage: 'Agenda',
        name: 'Agenda',
        visual: 'device',
        src: '/img/hero-laptop-agenda.webp',
        w: 1792,
        h: 1084,
        alt: 'Kensa en una laptop: la agenda semanal con citas confirmadas y por confirmar',
        maxw: '100%',
        h1: 'Una agenda que conoce tus horarios.',
        sub: 'Evita empalmes, respeta tus días cerrados y le avisa al paciente cuando confirmas.',
        facts: K([
          ['calendar', 'Vista de día, semana y mes'],
          ['bell', 'Aviso por WhatsApp al confirmar'],
          ['clock', 'Respeta tu zona horaria'],
        ]),
        steps: S([
          ['Configura tu horario', 'Horario de atención, duración de citas, días cerrados y zona horaria.'],
          ['Llegan solicitudes', 'Las de WhatsApp esperan en Por confirmar.'],
          ['Confirmas con un clic', 'Y al paciente le llega el aviso por WhatsApp.'],
          ['Si alguien cancela', 'Te ofrece cubrir el horario con tu lista de espera.'],
        ]),
        why1: W('Para recepción', 'Confirmar y avisar en un clic, sin llamadas de seguimiento.'),
        why2: W('Para la dirección', 'Una agenda limpia que respeta tus horarios y no empalma citas.'),
        note: 'Los horarios se validan al agendar. Un espacio libre en el calendario no es disponibilidad garantizada.',
        links: ['asistente', 'preparar', 'lista'],
      },
      preparar: {
        stage: 'Prepara',
        name: 'Preparar visitas',
        visual: 'img',
        src: '/img/pantalla-preparar-visitas.webp',
        w: 1880,
        h: 1313,
        alt: 'Citas de mañana con el estado de la cita y de sus documentos',
        maxw: '100%',
        h1: 'Las visitas de mañana y lo que les falta.',
        sub: 'Cada cita con su estado y sus propios documentos, en una sola lista.',
        facts: K([
          ['clipboard', 'Abre en las citas de mañana'],
          ['check', 'Un siguiente paso por cita'],
          ['file', 'Los documentos de esa visita'],
        ]),
        steps: S([
          ['Abre en mañana', 'Con todas las citas, en el horario de tu clínica.'],
          ['Dos estados por cita', 'Si está confirmada y en qué van sus documentos.'],
          ['Un botón por visita', 'Ligar paciente, preparar documentos o revisar la cita.'],
        ]),
        why1: W('Para recepción', 'Preparas el día siguiente en minutos, sin buscar en el historial.'),
        why2: W('Para la dirección', 'Los pacientes llegan con sus formatos listos y empiezas a tiempo.'),
        note: '“Enviado” no significa “recibido”, y “llenado” no es revisión clínica. Cada estado se muestra tal cual.',
        links: ['agenda', 'biblioteca', 'firmar'],
      },
      biblioteca: {
        stage: 'Prepara',
        name: 'Biblioteca de documentos',
        visual: 'img',
        src: '/img/pantalla-mis-documentos.webp',
        w: 1912,
        h: 1122,
        alt: 'Mis documentos: formatos de tu clínica, listos o por confirmar',
        maxw: '100%',
        h1: '7 formatos listos para usar.',
        sub: 'Estructurados conforme a la NOM-004-SSA3-2012 y la LFPDPPP 2025. Tu clínica los revisa y los aprueba.',
        facts: K([
          ['file', '7 formatos de inicio'],
          ['fileShield', 'Con base en NOM-004 y LFPDPPP'],
          ['check', 'Los apruebas antes de usarlos'],
        ]),
        steps: S([
          [
            'Elige',
            'Ficha de identificación, antecedentes, historia clínica, nota de evolución, nota de referencia, aviso de privacidad y consentimiento informado.',
          ],
          ['Personaliza', 'Nombre, domicilio, responsable y color de tu clínica.'],
          [
            'Aprueba y usa',
            'Revisas cada página antes de usarla. Hay paquetes sugeridos para primera vez y seguimiento.',
          ],
        ]),
        why1: W('Para la dirección', 'Empiezas con formatos pensados para la norma, no con copias de copias.'),
        why2: W('Para recepción', 'Nada de diseñar ni buscar formatos. Eliges, configuras y usas.'),
        note: 'Estructurados conforme a la norma, no certificados. No sustituyen la revisión legal de tu clínica.',
        links: ['tusformatos', 'envios', 'celular'],
      },
      tusformatos: {
        stage: 'Prepara',
        name: 'Tus propios formatos',
        visual: 'img',
        src: '/img/pantalla-tus-formatos.webp',
        w: 1168,
        h: 1464,
        alt: 'Revisar los campos detectados sobre tu propio formato',
        maxw: '440px',
        h1: 'Tus formatos de siempre, ahora digitales.',
        sub: 'Sube un PDF, un escaneo o una foto y Kensa detecta los campos.',
        facts: K([
          ['upload', 'PDF, escaneo o foto'],
          ['file', 'Hasta 20 páginas'],
          ['eye', 'Vista previa antes de guardar'],
        ]),
        steps: S([
          ['Sube tu formato', 'PDF, escaneo o foto, de hasta 20 páginas.'],
          ['Revisa los campos', 'Cajas de texto, casillas y filas de sí/no, sobre tu página original.'],
          ['Ajusta y guarda', 'Cambia nombres, agrega campos y revisa la vista previa.'],
        ]),
        why1: W(
          'Para recepción',
          'Sin volver a capturar tus formatos ni perder el diseño que tus pacientes ya conocen.',
        ),
        why2: W('Para la dirección', 'Conservas los documentos en los que ya invertiste.'),
        note: 'La detección es asistida: tu equipo revisa los campos antes de usarlos.',
        links: ['biblioteca', 'envios', 'celular'],
      },
      celular: {
        stage: 'Llena',
        name: 'Formatos en el celular',
        visual: 'device',
        src: '/img/hero-iphone-paciente.webp',
        w: 543,
        h: 1117,
        alt: 'El paciente llena sus documentos desde su celular',
        maxw: '300px',
        h1: 'Llenan y firman desde su celular.',
        sub: 'Nada de tabla y pluma en la sala de espera. En casa, a su ritmo.',
        facts: K([
          ['phone', 'Sin descargar nada'],
          ['clock', 'Guardan y siguen después'],
          ['pen', 'Firma con el dedo'],
        ]),
        steps: S([
          ['Abren su enlace', 'Una página limpia con sus documentos, uno tras otro.'],
          ['Guardan y siguen después', 'Su avance se queda hasta que envían.'],
          ['Firman con el dedo', 'Al enviar, el enlace se cierra y tu clínica recibe el aviso.'],
        ]),
        why1: W('Para tus pacientes', 'Sin prisas y sin papeles. Lo hacen cuando pueden.'),
        why2: W('Para tu clínica', 'Las consultas empiezan con la información completa.'),
        note: 'La firma en pantalla queda ligada al expediente, pero no es una firma electrónica certificada.',
        links: ['envios', 'autollenado', 'firmar'],
      },
      autollenado: {
        stage: 'Llena',
        name: 'Autollenado',
        visual: 'img',
        src: '/img/pantalla-autollenado.webp',
        w: 1848,
        h: 1146,
        alt: 'Respuestas del paciente ya llenas en la ficha, con la vista de cómo va quedando',
        maxw: '100%',
        h1: 'Lo escriben una vez. Se llena en todo el paquete.',
        sub: 'Nombre, fecha de nacimiento y contacto pasan solos a cada formato de la visita.',
        facts: K([
          ['zap', 'Se escribe una sola vez'],
          ['clock', 'La edad se calcula sola'],
          ['shield', 'Nunca sobrescribe una respuesta'],
        ]),
        steps: S([
          ['Una sola captura', 'Los datos compartidos se llenan en cada campo que coincide.'],
          ['La edad se calcula sola', 'Con la fecha de nacimiento y la de la visita.'],
          [
            'Nada se sobrescribe',
            'Un campo vacío no borra una respuesta, y lo que no coincide se marca para revisión.',
          ],
        ]),
        why1: W('Para tus pacientes', 'Sin escribir su nombre 6 veces.'),
        why2: W('Para recepción', 'Sin recapturar y con menos errores.'),
        note: 'Funciona dentro de un paquete. No copia datos de visitas anteriores ni entre pacientes.',
        links: ['celular', 'biblioteca'],
      },
      envios: {
        stage: 'Llena',
        name: 'Envíos',
        visual: 'img',
        src: '/img/pantalla-enviar.webp',
        w: 1848,
        h: 943,
        alt: 'Enviar documentos por WhatsApp, correo o enlace',
        maxw: '100%',
        phone: '/img/iphone-whatsapp-envio.webp',
        phoneAlt: 'El paciente recibe por WhatsApp el enlace para completar sus documentos',
        h1: 'Manda los documentos como prefiera tu paciente.',
        sub: 'Por WhatsApp, correo o enlace, y ve en qué van.',
        facts: K([
          ['send', 'WhatsApp, correo o enlace'],
          ['link', 'Enlaces que vencen a los 7 días'],
          ['check', 'Sin envíos duplicados'],
        ]),
        steps: S([
          ['Confirma el destinatario', 'Antes de enviar, para no mandarlo a la persona equivocada.'],
          ['Elige el medio', 'WhatsApp, correo o copiar enlace.'],
          ['Revisa el historial', 'Cada intento con su estado. Los clics repetidos no mandan duplicados.'],
        ]),
        why1: W('Para recepción', 'Un clic y listo. Sin imprimir ni llamadas de “¿te llegó mi correo?”.'),
        why2: W('Para la dirección', 'Los formatos llegan antes de la consulta, no en la sala de espera.'),
        note: 'Mostramos el estado de envío: “aceptado por el proveedor” no significa entregado ni leído. Cada enlace es personal y vence a los 7 días.',
        links: ['preparar', 'celular'],
      },
      firmar: {
        stage: 'Firma y sella',
        name: 'Firmar y bloquear',
        visual: 'img',
        src: '/img/pantalla-firmar.webp',
        w: 1848,
        h: 732,
        alt: 'Firmar y bloquear la visita confirmando con tu contraseña',
        maxw: '100%',
        h1: 'Firmado y bloqueado. Después, nada cambia.',
        sub: 'El profesional revisa, completa, firma y bloquea el expediente.',
        facts: K([
          ['pen', 'Firma con cédula verificada'],
          ['lock', 'Bloqueo permanente'],
          ['file', 'PDF completo con firmas'],
        ]),
        steps: S([
          ['Revisa y completa', 'Las respuestas del paciente y las secciones clínicas.'],
          ['Firma con cédula verificada', 'Y vuelve a escribir su contraseña.'],
          ['Bloquea', 'Para corregir algo, agrega una nota posterior firmada. El original no cambia.'],
          ['Exporta', 'El expediente completo en PDF, con respuestas y firmas.'],
        ]),
        why1: W('Para la dirección', 'Expedientes firmados que nadie puede editar a escondidas.'),
        why2: W('Para recepción', 'Una meta clara: “Firmado y bloqueado” significa terminado.'),
        note: 'Solo pueden firmar los profesionales que un administrador verificó.',
        links: ['celular', 'sellados', 'equipo'],
      },
      sellados: {
        stage: 'Firma y sella',
        name: 'Expedientes sellados',
        visual: 'img',
        src: '/img/pantalla-expediente-sellado.webp',
        w: 1848,
        h: 989,
        alt: 'Registro sellado con su huella digital y los documentos que contiene',
        maxw: '100%',
        h1: 'Expedientes que se pueden comprobar.',
        sub: 'Sellados contra alteraciones, con el historial de quién vio qué.',
        facts: K([
          ['fingerprint', 'Huella SHA-256'],
          ['eye', 'Historial de accesos'],
          ['database', 'Paquete de evidencia descargable'],
        ]),
        steps: S([
          ['Sello digital', 'Cada expediente bloqueado lleva una huella SHA-256 encadenada a los anteriores.'],
          ['Comprobación', 'Cualquiera confirma que un PDF coincide con el original, sin ver su contenido.'],
          ['Paquete de evidencia', 'Archivos, huellas e historial de accesos en una descarga.'],
          ['Historial de accesos', 'Quién vio o descargó cada documento.'],
        ]),
        why1: W(
          'Para la dirección',
          'Si te lo pide un auditor, una aseguradora o un abogado, demuestras que el expediente no cambió.',
        ),
        why2: W('Para administración', 'Responsabilidad clara en todo el equipo, sin trabajo extra.'),
        note: 'Sellado y comprobable, no certificado. Todavía no hay un tercero que certifique la fecha.',
        links: ['firmar', 'equipo', 'seguridad'],
      },
      recepcion: {
        stage: 'La base',
        name: 'Hoy y Pacientes',
        visual: 'device',
        src: '/img/laptop-hoy.webp',
        w: 1920,
        h: 1440,
        alt: 'Kensa en una laptop: Hoy, con los pacientes del día, las citas y lo que requiere atención',
        maxw: '100%',
        h1: 'Encuentra al paciente y resuelve desde una sola pantalla.',
        sub: 'Busca o registra pacientes, edita sus datos y abre sus documentos.',
        facts: K([
          ['home', 'Resumen del día'],
          ['users', 'Pacientes que nunca se mezclan'],
          ['inbox', 'Pendientes a la vista'],
        ]),
        steps: S([
          ['Pacientes', 'Busca por teléfono o apellido, registra y edita el contacto.'],
          ['Cada paciente es único', 'Dos personas con el mismo teléfono nunca se mezclan.'],
          ['Hoy', 'El resumen del día: pacientes de hoy y lo que requiere atención.'],
        ]),
        why1: W('Para recepción', 'Todo tu día empieza en una pantalla.'),
        why2: W('Para la dirección', 'Ves cómo va la clínica de un vistazo.'),
        note: '',
        links: ['mensajes', 'agenda', 'preparar'],
      },
      equipo: {
        stage: 'La base',
        name: 'Equipo y roles',
        visual: 'img',
        src: '/img/pantalla-equipo.webp',
        w: 1816,
        h: 1040,
        alt: 'Equipo con roles y cédulas verificadas',
        maxw: '100%',
        h1: 'Cada quien con su acceso.',
        sub: 'Y solo profesionales verificados firman.',
        facts: K([
          ['users', 'Administrador o Personal'],
          ['userCheck', 'Cédula revisada en la SEP'],
          ['key', 'Contraseña propia para cada quien'],
        ]),
        steps: S([
          ['Agrega a tu equipo', 'Médicos y recepción, cada uno con su usuario, como Administrador o Personal.'],
          ['Contraseña propia', 'Una temporal al inicio, que cada quien cambia en su primer acceso.'],
          [
            'Verifica la cédula',
            'Un administrador la revisa en el Registro Nacional de Profesionistas de la SEP y la marca como verificada.',
          ],
        ]),
        why1: W('Para administración', 'Cada acción ligada a una persona y cada firma a un profesional verificado.'),
        why2: W('Para la dirección', 'Desactivas cuentas o restableces contraseñas cuando lo necesitas.'),
        note: 'La verificación de cédula es una revisión manual del administrador, no una consulta automática al gobierno.',
        links: ['firmar', 'sellados'],
      },
      configuracion: {
        stage: 'La base',
        name: 'Configuración guiada',
        visual: 'img',
        src: '/img/pantalla-activacion.webp',
        w: 1816,
        h: 1367,
        alt: 'Lista para activar la clínica paso a paso',
        maxw: '100%',
        h1: 'Prueba todo antes de usarlo con pacientes reales.',
        sub: 'Una guía paso a paso y un modo de prueba con datos de práctica.',
        facts: K([
          ['settings', 'Guía paso a paso'],
          ['server', 'Modo de prueba con datos de práctica'],
          ['lock', 'Nada llega a pacientes antes de activar'],
        ]),
        steps: S([
          ['Sigue la guía', 'Clínica, equipo, documentos, WhatsApp, horarios y activación.'],
          [
            'Conecta WhatsApp tú mismo',
            'Con el inicio de sesión de Meta. Puedes seguir usando WhatsApp Business en tu celular.',
          ],
          ['Practica', 'El modo de prueba siempre está disponible.'],
          [
            'Activa',
            'Un administrador acepta las responsabilidades de la clínica y se habilitan los pacientes reales.',
          ],
        ]),
        why1: W('Para recepción', 'Aprendes sin riesgo antes de tocar datos reales.'),
        why2: W('Para la dirección', 'Tú decides cuándo arrancar. Nada llega a pacientes reales antes.'),
        note: 'La aprobación de tus mensajes depende de Meta y normalmente tarda como un día.',
        links: ['equipo', 'asistente'],
      },
    };
    var slug = this.props.slug ?? 'asistente';
    var f = D[slug] || D.asistente;
    var idx = 0;
    for (var i = 0; i < order.length; i++) if (order[i][0] === slug) idx = i;
    var dark = idx % 2 === 1;
    var t = dark
      ? {
          bg: '#0E2A3B',
          fg: '#F7F2EF',
          sub: '#B9C7D0',
          btnBg: '#FFFFFF',
          btnFg: '#18648A',
          badgeBg: '#FFFFFF',
          badgeFg: '#18648A',
          dir: 'row-reverse',
        }
      : {
          bg: '#F2E9E5',
          fg: '#0E2A3B',
          sub: '#4B5D69',
          btnBg: '#18648A',
          btnFg: '#FFFFFF',
          badgeBg: '#18648A',
          badgeFg: '#FFFFFF',
          dir: 'row',
        };
    var view = {
      img: f.visual === 'img',
      device: f.visual === 'device',
      whatsapp: f.visual === 'whatsapp',
      prep: f.visual === 'prep',
      mobile: f.visual === 'mobile',
      send: f.visual === 'send',
      seal: f.visual === 'seal',
      verify: f.visual === 'verify',
      team: f.visual === 'team',
      setup: f.visual === 'setup',
    };
    var p = order[(idx - 1 + order.length) % order.length],
      n = order[(idx + 1) % order.length];
    var full = Object.assign({}, f, {
      icon: I(order[idx][3]),
      hasNote: !!f.note,
      links: f.links.map(L),
      guides: (GUIDES[slug] || []).map(([t, g]) => ({ title: t, href: '/recursos/' + g + '/' })),
      maxw: f.maxw || '100%',
      // the logo's coral period on the headline
      h1Body: /\.$/.test(f.h1) ? f.h1.slice(0, -1) : f.h1,
      h1Dot: /\.$/.test(f.h1) ? '.' : '',
    });
    return {
      f: full,
      v: view,
      t: t,
      prev: { name: p[1], href: p[2] },
      next: { name: n[1], href: n[2] },
      setupItems: [
        { t: 'Datos de la clínica', done: true, todo: false },
        { t: 'Equipo y verificación', done: true, todo: false },
        { t: 'Documentos', done: true, todo: false },
        { t: 'WhatsApp y mensajes', done: false, todo: true },
        { t: 'Horario y zona horaria', done: false, todo: true },
        { t: 'Activar la clínica', done: false, todo: true },
      ],
    };
  }
}

export default class FuncionPlantilla extends Logic {
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
          <div
            id={'contenido'}
            style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px clamp(16px,4vw,40px) 0' }}
          >
            {' '}
            <section
              style={{
                background: v.t?.bg,
                color: v.t?.fg,
                borderRadius: '32px',
                padding: 'clamp(28px,5vw,64px)',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: v.t?.dir,
                alignItems: 'center',
                gap: '40px 56px',
              }}
            >
              {' '}
              <div style={{ flex: '1 1 380px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {' '}
                <nav aria-label={'Ruta'} style={{ fontSize: '14px', color: v.t?.sub }}>
                  <a href={link('Costa-Funciones-cs02.dc.html')} style={{ color: v.t?.sub }}>
                    {'Funciones'}
                  </a>
                  {' / '}
                  {v.f?.stage}
                  {' / '}
                  <span aria-current={'page'} style={{ color: v.t?.fg, fontWeight: '500' }}>
                    {v.f?.name}
                  </span>
                </nav>{' '}
                <span
                  aria-hidden={'true'}
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: v.t?.badgeBg,
                    color: v.t?.badgeFg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: '0',
                  }}
                >
                  <svg
                    width={'26'}
                    height={'26'}
                    viewBox={'0 0 24 24'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  >
                    <path d={v.f?.icon?.a} />
                    <path d={v.f?.icon?.b} />
                  </svg>
                </span>{' '}
                <h1
                  style={{
                    margin: '0',
                    fontSize: 'clamp(34px,4.6vw,56px)',
                    lineHeight: '1.05',
                    letterSpacing: '-0.035em',
                    fontWeight: '600',
                    textWrap: 'balance',
                  }}
                >
                  {v.f?.h1Body}
                  <span style={{ color: '#E0987A' }}>{v.f?.h1Dot}</span>
                </h1>{' '}
                <p style={{ margin: '0', fontSize: '17px', lineHeight: '1.6', color: v.t?.sub, maxWidth: '480px' }}>
                  {v.f?.sub}
                </p>{' '}
                <a
                  href={link('Costa-Contacto-cs06.dc.html')}
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '8px',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '16px',
                    padding: '15px 26px',
                    borderRadius: '999px',
                    background: v.t?.btnBg,
                    color: v.t?.btnFg,
                  }}
                >
                  {'Agenda una demostración'}
                </a>{' '}
              </div>{' '}
              <div
                style={{
                  flex: '1.2 1 400px',
                  minWidth: '0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '360px',
                }}
              >
                {' '}
                {v.v?.img ? (
                  <>
                    {' '}
                    <div style={{ position: 'relative', width: '100%', maxWidth: v.f?.maxw }}>
                      <img
                        src={v.f?.src}
                        width={v.f?.w}
                        height={v.f?.h}
                        fetchPriority={'high'}
                        alt={v.f?.alt}
                        style={{
                          display: 'block',
                          width: '100%',
                          maxWidth: v.f?.maxw,
                          height: 'auto',
                          borderRadius: '14px',
                          border: '1px solid #DED3CD',
                          boxShadow: '0 18px 40px rgba(14,42,59,0.16)',
                          background: '#FFFFFF',
                        }}
                      />
                      {v.f?.phone ? (
                        <img
                          src={v.f?.phone}
                          width={'1086'}
                          height={'2234'}
                          alt={v.f?.phoneAlt}
                          style={{
                            position: 'absolute',
                            right: '-28px',
                            bottom: '-120px',
                            width: 'clamp(120px, 34%, 190px)',
                            height: 'auto',
                            filter: 'drop-shadow(0 24px 36px rgba(14,42,59,0.26))',
                          }}
                        />
                      ) : null}
                    </div>{' '}
                  </>
                ) : null}{' '}
                {v.v?.device ? (
                  <>
                    {' '}
                    <img
                      src={v.f?.src}
                      width={v.f?.w}
                      height={v.f?.h}
                      fetchPriority={'high'}
                      alt={v.f?.alt}
                      style={{
                        display: 'block',
                        width: '100%',
                        maxWidth: v.f?.maxw,
                        height: 'auto',
                        filter: 'drop-shadow(0 20px 32px rgba(14,42,59,0.14))',
                      }}
                    />{' '}
                  </>
                ) : null}{' '}
                {v.v?.whatsapp ? (
                  <>
                    <img
                      src={'/img/iphone-whatsapp-asistente.webp'}
                      width={'1086'}
                      height={'2234'}
                      fetchPriority={'high'}
                      alt={
                        'Chat de WhatsApp con el asistente: la paciente toca Reagendar y elige el jueves 5 de noviembre'
                      }
                      style={{
                        display: 'block',
                        width: '300px',
                        maxWidth: '100%',
                        height: 'auto',
                        filter: 'drop-shadow(0 24px 40px rgba(14,42,59,0.22))',
                      }}
                    />
                  </>
                ) : null}{' '}
                {v.v?.prep ? (
                  <>
                    {' '}
                    <div
                      role={'img'}
                      aria-label={'Ejemplo: lista de citas de mañana con el estado de sus documentos'}
                      style={{
                        width: '100%',
                        maxWidth: '480px',
                        background: '#FFFFFF',
                        color: '#0E2A3B',
                        border: '1px solid #DED3CD',
                        borderRadius: '16px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        boxShadow: '0 18px 40px rgba(14,42,59,0.16)',
                      }}
                    >
                      {' '}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <span style={{ fontWeight: '600' }}>{'Preparar visitas'}</span>
                        <span style={{ fontSize: '12px', color: '#5F707B' }}>{'Mañana · 4 citas'}</span>
                      </div>{' '}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          border: '1px solid #EEE6E2',
                          borderRadius: '12px',
                          padding: '10px 12px',
                          fontSize: '13px',
                        }}
                      >
                        <span style={{ width: '44px', color: '#5F707B' }}>{'9:00'}</span>
                        <span style={{ flex: '1' }}>{'Regina Ayala'}</span>
                        <span
                          style={{
                            background: '#0E2A3B',
                            color: '#FFFFFF',
                            borderRadius: '999px',
                            padding: '3px 9px',
                            fontSize: '11px',
                          }}
                        >
                          {'Firmado y bloqueado'}
                        </span>
                      </div>{' '}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          border: '1px solid #EEE6E2',
                          borderRadius: '12px',
                          padding: '10px 12px',
                          fontSize: '13px',
                        }}
                      >
                        <span style={{ width: '44px', color: '#5F707B' }}>{'9:30'}</span>
                        <span style={{ flex: '1' }}>{'Tomás Cervantes'}</span>
                        <span
                          style={{
                            border: '1px solid #0E2A3B',
                            borderRadius: '999px',
                            padding: '3px 9px',
                            fontSize: '11px',
                          }}
                        >
                          {'Por revisar'}
                        </span>
                      </div>{' '}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          border: '1px solid #EEE6E2',
                          borderRadius: '12px',
                          padding: '10px 12px',
                          fontSize: '13px',
                        }}
                      >
                        <span style={{ width: '44px', color: '#5F707B' }}>{'10:30'}</span>
                        <span style={{ flex: '1' }}>{'Ana Rodríguez'}</span>
                        <span
                          style={{ background: '#F2E9E5', borderRadius: '999px', padding: '3px 9px', fontSize: '11px' }}
                        >
                          {'Esperando paciente'}
                        </span>
                      </div>{' '}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          border: '1px solid #EEE6E2',
                          borderRadius: '12px',
                          padding: '10px 12px',
                          fontSize: '13px',
                        }}
                      >
                        <span style={{ width: '44px', color: '#5F707B' }}>{'11:00'}</span>
                        <span style={{ flex: '1' }}>{'Lucía Márquez'}</span>
                        <span style={{ textDecoration: 'underline', fontSize: '12px' }}>{'Preparar documentos'}</span>
                      </div>{' '}
                    </div>{' '}
                  </>
                ) : null}{' '}
                {v.v?.mobile ? (
                  <>
                    {' '}
                    <div
                      role={'img'}
                      aria-label={'Ejemplo: formato en el celular con campo de firma'}
                      style={{
                        width: '280px',
                        background: '#FFFFFF',
                        color: '#0E2A3B',
                        border: '8px solid #0E2A3B',
                        borderRadius: '36px',
                        padding: '22px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        boxShadow: '0 20px 44px rgba(14,42,59,0.18)',
                      }}
                    >
                      {' '}
                      <span style={{ fontSize: '12px', color: '#5F707B' }}>{'Tus documentos · 2 de 3'}</span>{' '}
                      <span style={{ fontSize: '16px', fontWeight: '600' }}>{'Aviso de privacidad'}</span>{' '}
                      <span style={{ fontSize: '12px', color: '#4B5D69' }}>{'Nombre completo'}</span>{' '}
                      <span
                        style={{
                          border: '1px solid #D6CBC4',
                          borderRadius: '10px',
                          padding: '9px 10px',
                          fontSize: '13px',
                        }}
                      >
                        {'Ana Rodríguez López'}
                      </span>{' '}
                      <span style={{ fontSize: '12px', color: '#4B5D69' }}>{'Firma'}</span>{' '}
                      <div
                        style={{
                          border: '1px dashed #8A8A92',
                          borderRadius: '10px',
                          height: '76px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <svg
                          aria-hidden={'true'}
                          width={'140'}
                          height={'36'}
                          viewBox={'0 0 140 36'}
                          fill={'none'}
                          stroke={'#0E2A3B'}
                          strokeWidth={'1.8'}
                          strokeLinecap={'round'}
                        >
                          <path d={'M6 26c12-16 18-16 20-5s9 9 15-4 11-9 14 2 11 7 20-6 13-4 18 4 14 3 35-7'} />
                        </svg>
                      </div>{' '}
                      <span
                        style={{
                          textAlign: 'center',
                          fontSize: '13px',
                          fontWeight: '500',
                          background: '#0E2A3B',
                          color: '#FFFFFF',
                          borderRadius: '999px',
                          padding: '11px',
                        }}
                      >
                        {'Siguiente documento'}
                      </span>{' '}
                      <span style={{ textAlign: 'center', fontSize: '12px', color: '#4B5D69' }}>
                        {'Guardar y seguir después'}
                      </span>{' '}
                    </div>{' '}
                  </>
                ) : null}{' '}
                {v.v?.send ? (
                  <>
                    {' '}
                    <div
                      role={'img'}
                      aria-label={'Ejemplo: enviar documentos por WhatsApp, correo o enlace, con historial de envíos'}
                      style={{
                        width: '100%',
                        maxWidth: '420px',
                        background: '#FFFFFF',
                        color: '#0E2A3B',
                        border: '1px solid #DED3CD',
                        borderRadius: '16px',
                        padding: '22px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        boxShadow: '0 18px 40px rgba(14,42,59,0.16)',
                      }}
                    >
                      {' '}
                      <span style={{ fontWeight: '600' }}>{'Enviar al paciente'}</span>{' '}
                      <span style={{ fontSize: '13px', color: '#4B5D69' }}>
                        {'Para: Ana Rodríguez · +52 55 5555 0142'}
                      </span>{' '}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                          gap: '8px',
                          fontSize: '13px',
                          textAlign: 'center',
                        }}
                      >
                        <span
                          style={{ background: '#0E2A3B', color: '#FFFFFF', borderRadius: '10px', padding: '10px 4px' }}
                        >
                          {'WhatsApp'}
                        </span>
                        <span style={{ border: '1px solid #D6CBC4', borderRadius: '10px', padding: '10px 4px' }}>
                          {'Correo'}
                        </span>
                        <span style={{ border: '1px solid #D6CBC4', borderRadius: '10px', padding: '10px 4px' }}>
                          {'Copiar enlace'}
                        </span>
                      </div>{' '}
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          color: '#5F707B',
                          borderTop: '1px solid #EEE6E2',
                          paddingTop: '12px',
                        }}
                      >
                        {'Envíos anteriores'}
                      </span>{' '}
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                        <span>{'WhatsApp · mié 4:02 p.m.'}</span>
                        <span style={{ color: '#4B5D69' }}>{'Enviado'}</span>
                      </div>{' '}
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                        <span>{'Correo · mar 6:40 p.m.'}</span>
                        <span style={{ color: '#4B5D69' }}>{'Aceptado por el proveedor'}</span>
                      </div>{' '}
                    </div>{' '}
                  </>
                ) : null}{' '}
                {v.v?.seal ? (
                  <>
                    {' '}
                    <div
                      role={'img'}
                      aria-label={'Ejemplo: nota firmada y bloqueada con una nota posterior'}
                      style={{
                        width: '100%',
                        maxWidth: '420px',
                        background: '#FFFFFF',
                        color: '#0E2A3B',
                        border: '1px solid #DED3CD',
                        borderRadius: '16px',
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        boxShadow: '0 18px 40px rgba(14,42,59,0.16)',
                      }}
                    >
                      {' '}
                      <div
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}
                      >
                        <span style={{ fontWeight: '600' }}>{'Nota de evolución'}</span>
                        <span
                          style={{
                            fontSize: '12px',
                            border: '1px solid #0E2A3B',
                            borderRadius: '999px',
                            padding: '3px 10px',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {'Firmado y bloqueado'}
                        </span>
                      </div>{' '}
                      <div style={{ fontSize: '13px', color: '#4B5D69', lineHeight: '1.7' }}>
                        {'Firmado por Dra. [Nombre]'}
                        <br />
                        {'Cédula verificada · jue 10:58 a.m.'}
                      </div>{' '}
                      <div
                        style={{ border: '1px solid #EEE6E2', borderRadius: '12px', padding: '12px', fontSize: '13px' }}
                      >
                        <span style={{ fontWeight: '500' }}>{'Nota posterior'}</span>
                        <br />
                        <span style={{ color: '#4B5D69' }}>
                          {'Se agrega indicación de seguimiento. Firmada · jue 12:40 p.m.'}
                        </span>
                      </div>{' '}
                      <span
                        style={{
                          textAlign: 'center',
                          fontSize: '13px',
                          border: '1px solid #D6CBC4',
                          borderRadius: '999px',
                          padding: '10px',
                        }}
                      >
                        {'Exportar PDF'}
                      </span>{' '}
                    </div>{' '}
                  </>
                ) : null}{' '}
                {v.v?.verify ? (
                  <>
                    {' '}
                    <div
                      role={'img'}
                      aria-label={'Ejemplo: documento sellado con su huella digital e historial de accesos'}
                      style={{
                        width: '100%',
                        maxWidth: '420px',
                        background: '#FFFFFF',
                        color: '#0E2A3B',
                        border: '1px solid #DED3CD',
                        borderRadius: '16px',
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        boxShadow: '0 18px 40px rgba(14,42,59,0.16)',
                      }}
                    >
                      {' '}
                      <span style={{ fontWeight: '600' }}>{'Documento sellado'}</span>{' '}
                      <span style={{ fontSize: '12px', color: '#5F707B' }}>{'Huella digital (SHA-256)'}</span>{' '}
                      <span
                        style={{
                          fontSize: '12px',
                          background: '#F2E9E5',
                          borderRadius: '8px',
                          padding: '10px',
                          wordBreak: 'break-all',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {'9f2c 41ab 7e03 d1c8 … 52e9 a71e'}
                      </span>{' '}
                      <span
                        style={{
                          textAlign: 'center',
                          fontSize: '13px',
                          fontWeight: '500',
                          background: '#0E2A3B',
                          color: '#FFFFFF',
                          borderRadius: '999px',
                          padding: '11px',
                        }}
                      >
                        {'Descargar paquete de evidencia'}
                      </span>{' '}
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '500',
                          color: '#5F707B',
                          borderTop: '1px solid #EEE6E2',
                          paddingTop: '12px',
                        }}
                      >
                        {'Quién ha visto o descargado este documento'}
                      </span>{' '}
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                        <span>{'Recepción · vio'}</span>
                        <span style={{ color: '#4B5D69' }}>{'jue 11:02'}</span>
                      </div>{' '}
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                        <span>{'Dra. [Nombre] · descargó'}</span>
                        <span style={{ color: '#4B5D69' }}>{'jue 12:45'}</span>
                      </div>{' '}
                    </div>{' '}
                  </>
                ) : null}{' '}
                {v.v?.team ? (
                  <>
                    {' '}
                    <div
                      role={'img'}
                      aria-label={'Ejemplo: equipo con roles y cédulas verificadas'}
                      style={{
                        width: '100%',
                        maxWidth: '440px',
                        background: '#FFFFFF',
                        color: '#0E2A3B',
                        border: '1px solid #DED3CD',
                        borderRadius: '16px',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        boxShadow: '0 18px 40px rgba(14,42,59,0.16)',
                      }}
                    >
                      {' '}
                      <span style={{ fontWeight: '600' }}>{'Equipo'}</span>{' '}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          borderTop: '1px solid #EEE6E2',
                          paddingTop: '10px',
                          fontSize: '13px',
                        }}
                      >
                        <span
                          aria-hidden={'true'}
                          style={{ width: '30px', height: '30px', borderRadius: '999px', background: '#D6CBC4' }}
                        ></span>
                        <span style={{ flex: '1' }}>
                          {'Dra. [Nombre]'}
                          <br />
                          <span style={{ color: '#5F707B' }}>{'Administrador'}</span>
                        </span>
                        <span
                          style={{
                            border: '1px solid #0E2A3B',
                            borderRadius: '999px',
                            padding: '3px 9px',
                            fontSize: '11px',
                          }}
                        >
                          {'Cédula verificada'}
                        </span>
                      </div>{' '}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          borderTop: '1px solid #EEE6E2',
                          paddingTop: '10px',
                          fontSize: '13px',
                        }}
                      >
                        <span
                          aria-hidden={'true'}
                          style={{ width: '30px', height: '30px', borderRadius: '999px', background: '#D6CBC4' }}
                        ></span>
                        <span style={{ flex: '1' }}>
                          {'Dr. [Nombre]'}
                          <br />
                          <span style={{ color: '#5F707B' }}>{'Personal'}</span>
                        </span>
                        <span
                          style={{ background: '#F2E9E5', borderRadius: '999px', padding: '3px 9px', fontSize: '11px' }}
                        >
                          {'Por verificar'}
                        </span>
                      </div>{' '}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          borderTop: '1px solid #EEE6E2',
                          paddingTop: '10px',
                          fontSize: '13px',
                        }}
                      >
                        <span
                          aria-hidden={'true'}
                          style={{ width: '30px', height: '30px', borderRadius: '999px', background: '#D6CBC4' }}
                        ></span>
                        <span style={{ flex: '1' }}>
                          {'recepcion@vida.mx'}
                          <br />
                          <span style={{ color: '#5F707B' }}>{'Personal'}</span>
                        </span>
                        <span style={{ fontSize: '12px', textDecoration: 'underline' }}>
                          {'Restablecer contraseña'}
                        </span>
                      </div>{' '}
                    </div>{' '}
                  </>
                ) : null}{' '}
                {v.v?.setup ? (
                  <>
                    {' '}
                    <div
                      role={'img'}
                      aria-label={'Ejemplo: guía de primera configuración en modo de prueba'}
                      style={{
                        width: '100%',
                        maxWidth: '420px',
                        background: '#FFFFFF',
                        color: '#0E2A3B',
                        border: '1px solid #DED3CD',
                        borderRadius: '16px',
                        padding: '22px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        boxShadow: '0 18px 40px rgba(14,42,59,0.16)',
                      }}
                    >
                      {' '}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <span style={{ fontWeight: '600' }}>{'Primera configuración'}</span>
                        <span
                          style={{
                            fontSize: '12px',
                            border: '1px solid #D6CBC4',
                            borderRadius: '999px',
                            padding: '3px 9px',
                          }}
                        >
                          {'Modo de prueba'}
                        </span>
                      </div>{' '}
                      {(v.setupItems || []).map((it, $index) => (
                        <React.Fragment key={$index}>
                          {' '}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              fontSize: '13px',
                              borderTop: '1px solid #EEE6E2',
                              paddingTop: '10px',
                            }}
                          >
                            {' '}
                            {it?.done ? (
                              <>
                                <svg
                                  aria-hidden={'true'}
                                  width={'18'}
                                  height={'18'}
                                  viewBox={'0 0 24 24'}
                                  fill={'none'}
                                  stroke={'#0E2A3B'}
                                  strokeWidth={'2'}
                                  strokeLinecap={'round'}
                                  strokeLinejoin={'round'}
                                >
                                  <path
                                    d={
                                      'm7.5 12 3 3 6-6m5.5 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z'
                                    }
                                  />
                                </svg>
                              </>
                            ) : null}{' '}
                            {it?.todo ? (
                              <>
                                <svg
                                  aria-hidden={'true'}
                                  width={'18'}
                                  height={'18'}
                                  viewBox={'0 0 24 24'}
                                  fill={'none'}
                                  stroke={'#8A8A92'}
                                  strokeWidth={'1.8'}
                                >
                                  <circle cx={'12'} cy={'12'} r={'9.5'} />
                                </svg>
                              </>
                            ) : null}{' '}
                            <span>{it?.t}</span>{' '}
                          </div>{' '}
                        </React.Fragment>
                      ))}{' '}
                    </div>{' '}
                  </>
                ) : null}{' '}
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px clamp(16px,4vw,40px) 0' }}>
            {' '}
            <ul
              style={{
                listStyle: 'none',
                margin: '0',
                padding: '0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px 32px',
              }}
            >
              {' '}
              {(v.f?.facts || []).map((k, $index) => (
                <React.Fragment key={$index}>
                  {' '}
                  <li
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      borderTop: '1px solid #E8DFDA',
                      paddingTop: '18px',
                    }}
                  >
                    {' '}
                    <span
                      aria-hidden={'true'}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '12px',
                        border: '1px solid #E3D9D3',
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
                        <path d={k?.icon?.a} />
                        <path d={k?.icon?.b} />
                      </svg>
                    </span>{' '}
                    <span style={{ fontSize: '15px', fontWeight: '500' }}>{k?.t}</span>{' '}
                  </li>{' '}
                </React.Fragment>
              ))}{' '}
            </ul>{' '}
          </div>{' '}
          <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px clamp(16px,4vw,40px) 0' }}>
            {' '}
            <h2
              style={{ margin: '0', fontSize: 'clamp(28px,3.4vw,42px)', letterSpacing: '-0.03em', fontWeight: '600' }}
            >
              {'Cómo funciona'}
            </h2>{' '}
            <ol
              style={{
                listStyle: 'none',
                margin: '36px 0 0',
                padding: '0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '28px 24px',
              }}
            >
              {' '}
              {(v.f?.steps || []).map((s, $index) => (
                <React.Fragment key={$index}>
                  {' '}
                  <li
                    style={{
                      borderTop: '2px solid #0E2A3B',
                      paddingTop: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}
                  >
                    {' '}
                    <span style={{ fontSize: '13px', color: '#5F707B' }}>{s?.n}</span>{' '}
                    <span style={{ fontSize: '17px', fontWeight: '500' }}>{s?.t}</span>{' '}
                    <span style={{ fontSize: '14px', lineHeight: '1.55', color: '#4B5D69' }}>{s?.d}</span>{' '}
                  </li>{' '}
                </React.Fragment>
              ))}{' '}
            </ol>{' '}
          </section>{' '}
          <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px clamp(16px,4vw,40px) 0' }}>
            {' '}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {' '}
              <div
                style={{
                  background: '#0E2A3B',
                  color: '#F7F2EF',
                  borderRadius: '24px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {' '}
                <span
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#B9C7D0' }}
                >
                  <svg
                    aria-hidden={'true'}
                    width={'20'}
                    height={'20'}
                    viewBox={'0 0 24 24'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  >
                    <path d={v.f?.why1?.icon?.a} />
                    <path d={v.f?.why1?.icon?.b} />
                  </svg>
                  {v.f?.why1?.who}
                </span>{' '}
                <span style={{ fontSize: '20px', fontWeight: '500', lineHeight: '1.4' }}>{v.f?.why1?.t}</span>{' '}
              </div>{' '}
              <div
                style={{
                  background: '#F2E9E5',
                  borderRadius: '24px',
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {' '}
                <span
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', color: '#5F707B' }}
                >
                  <svg
                    aria-hidden={'true'}
                    width={'20'}
                    height={'20'}
                    viewBox={'0 0 24 24'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  >
                    <path d={v.f?.why2?.icon?.a} />
                    <path d={v.f?.why2?.icon?.b} />
                  </svg>
                  {v.f?.why2?.who}
                </span>{' '}
                <span style={{ fontSize: '20px', fontWeight: '500', lineHeight: '1.4' }}>{v.f?.why2?.t}</span>{' '}
              </div>{' '}
            </div>{' '}
            {v.f?.hasNote ? (
              <>
                {' '}
                <p
                  style={{
                    margin: '24px 0 0',
                    maxWidth: '760px',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#4B5D69',
                  }}
                >
                  <span style={{ fontWeight: '600', color: '#0E2A3B' }}>{'Con claridad: '}</span>
                  {v.f?.note}
                </p>{' '}
              </>
            ) : null}{' '}
            <div
              style={{
                marginTop: '32px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '10px',
                fontSize: '14px',
              }}
            >
              {' '}
              <span style={{ color: '#5F707B' }}>{'Se conecta con'}</span>{' '}
              {(v.f?.links || []).map((l, $index) => (
                <React.Fragment key={$index}>
                  {' '}
                  <a
                    className={'kn-ghost'}
                    href={link(l?.href)}
                    style={{
                      textDecoration: 'none',
                      color: '#0E2A3B',
                      border: '1px solid #E3D9D3',
                      borderRadius: '999px',
                      padding: '8px 14px 8px 10px',
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
                      <path d={l?.icon?.a} />
                      <path d={l?.icon?.b} />
                    </svg>
                    {l?.name}
                  </a>{' '}
                </React.Fragment>
              ))}{' '}
            </div>{' '}
            {(v.f?.guides || []).length ? (
              <div style={{ marginTop: '40px', maxWidth: '760px' }}>
                <h2 style={{ margin: '0 0 6px', fontSize: '18px', fontWeight: '600' }}>{'Guías relacionadas'}</h2>
                <ul style={{ margin: '0', padding: '0', listStyle: 'none' }}>
                  {v.f.guides.map((g) => (
                    <li key={g.href} style={{ borderTop: '1px solid #E8DFDA' }}>
                      <a
                        href={g.href}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: '16px',
                          padding: '14px 0',
                          color: '#0E2A3B',
                          textDecoration: 'none',
                          fontSize: '15px',
                        }}
                      >
                        <span>{g.title}</span>
                        <span aria-hidden={'true'} style={{ color: '#18648A' }}>
                          {'→'}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}{' '}
          </section>{' '}
          <nav
            aria-label={'Más funciones'}
            style={{ maxWidth: '1200px', margin: '0 auto', padding: '104px clamp(16px,4vw,40px) 0' }}
          >
            {' '}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '16px',
                borderTop: '1px solid #E8DFDA',
                paddingTop: '24px',
              }}
            >
              {' '}
              <a
                href={link(v.prev?.href)}
                style={{
                  textDecoration: 'none',
                  color: '#0E2A3B',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}
              >
                <span style={{ fontSize: '13px', color: '#5F707B', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg
                    aria-hidden={'true'}
                    width={'14'}
                    height={'14'}
                    viewBox={'0 0 24 24'}
                    fill={'none'}
                    stroke={'currentColor'}
                    strokeWidth={'2'}
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                  >
                    <path d={'M19 12H5m0 0 7 7m-7-7 7-7'} />
                  </svg>
                  {'Anterior'}
                </span>
                <span style={{ fontSize: '18px', fontWeight: '500' }}>{v.prev?.name}</span>
              </a>{' '}
              <a
                href={link(v.next?.href)}
                style={{
                  textDecoration: 'none',
                  color: '#0E2A3B',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  textAlign: 'right',
                }}
              >
                <span
                  style={{
                    fontSize: '13px',
                    color: '#5F707B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: '6px',
                  }}
                >
                  {'Siguiente'}
                  <svg
                    aria-hidden={'true'}
                    width={'14'}
                    height={'14'}
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
                <span style={{ fontSize: '18px', fontWeight: '500' }}>{v.next?.name}</span>
              </a>{' '}
            </div>{' '}
          </nav>{' '}
          <CostaPiePagina />{' '}
        </div>{' '}
      </>
    );
  }
}
