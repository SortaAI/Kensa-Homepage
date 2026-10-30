import React from 'react';

// Base for the page components. They were authored as design-canvas components:
// each one returns its template values from renderVals() and keeps UI state in this.state.
export class DCLogic extends React.Component {
  renderVals() {
    return {};
  }
}

// Canvas page name -> site route. Links in the pages still use the canvas names
// (e.g. "Precios.dc.html", "Funcion-Agenda.dc.html#demo"); link() maps them here.
export const ROUTES = {
  Main: '/',
  Funciones: '/funciones/',
  ComoFunciona: '/como-funciona/',
  Precios: '/precios/',
  Seguridad: '/seguridad/',
  Contacto: '/contacto/',
  QuienLoHace: '/quien-lo-hace/',
  'Funcion-ListaDeEspera': '/funciones/lista-de-espera/',
  'Funcion-Asistente': '/funciones/asistente-de-whatsapp/',
  'Funcion-Mensajes': '/funciones/mensajes/',
  'Funcion-Agenda': '/funciones/agenda/',
  'Funcion-PrepararVisitas': '/funciones/preparar-visitas/',
  'Funcion-Biblioteca': '/funciones/biblioteca-de-documentos/',
  'Funcion-TusFormatos': '/funciones/tus-propios-formatos/',
  'Funcion-FormatosCelular': '/funciones/formatos-en-el-celular/',
  'Funcion-Autollenado': '/funciones/autollenado/',
  'Funcion-Envios': '/funciones/envios/',
  'Funcion-FirmarBloquear': '/funciones/firmar-y-bloquear/',
  'Funcion-ExpedientesSellados': '/funciones/expedientes-sellados/',
  'Funcion-Recepcion': '/funciones/hoy-y-pacientes/',
  'Funcion-Equipo': '/funciones/equipo-y-roles/',
  'Funcion-Configuracion': '/funciones/configuracion-guiada/',
};

export function link(href) {
  if (typeof href !== 'string') return href;
  const m = href.match(/^([A-Za-z][\w-]*?)(?:-[a-z0-9]{4})?\.dc\.html(#.*)?$/);
  if (!m) return href;
  const route = ROUTES[m[1]];
  return route ? route + (m[2] || '') : '#';
}
