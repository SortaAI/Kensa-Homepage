'use client';
// Generated from the design canvas, Costa palette (Costa-MegaMenu-cs10.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';

const CSS = 'body{margin:0}';

class Logic extends DCLogic {
  renderVals() {
    var I = {
      chat: 'M6.094 11.229A8.01 8.01 0 0 1 6 10c0-4.418 3.605-8 8.053-8 4.447 0 8.052 3.582 8.052 8a7.94 7.94 0 0 1-.52 2.835c-.07.182-.105.274-.12.345a.897.897 0 0 0-.024.194c-.002.073.008.153.028.314l.403 3.27c.043.355.065.532.006.66a.5.5 0 0 1-.257.252c-.13.055-.306.03-.66-.022l-3.184-.467c-.167-.024-.25-.037-.326-.036a.898.898 0 0 0-.2.021 2.989 2.989 0 0 0-.358.122 8.174 8.174 0 0 1-4.07.42M7.632 22C10.597 22 13 19.538 13 16.5S10.597 11 7.632 11c-2.965 0-5.369 2.462-5.369 5.5 0 .61.097 1.198.277 1.747.075.232.113.348.126.427.013.083.015.13.01.213-.005.08-.025.17-.065.351L2 22l2.995-.409c.163-.022.245-.034.316-.033.076 0 .115.005.19.02.07.013.173.05.381.123a5.246 5.246 0 0 0 1.75.299Z',
      inbox:
        'M2.5 12h3.382c.685 0 1.312.387 1.618 1 .306.613.933 1 1.618 1h5.764c.685 0 1.312-.387 1.618-1 .306-.613.933-1 1.618-1H21.5M8.967 4h6.066c1.077 0 1.616 0 2.091.164a3 3 0 0 1 1.121.693c.36.352.6.833 1.082 1.796l2.166 4.333c.19.378.284.567.35.765.06.177.102.357.128.541.029.207.029.418.029.841V15.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 20 18.88 20 17.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2v-2.067c0-.422 0-.634.029-.84.026-.184.068-.365.128-.541.066-.199.16-.388.35-.766l2.166-4.333c.482-.963.723-1.444 1.082-1.796a3 3 0 0 1 1.12-.693C7.352 4 7.89 4 8.968 4Z',
      calendar:
        'M21 10H3m13-8v4M8 2v4m1 10 2 2 4.5-4.5M7.8 22h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 19.72 21 18.88 21 17.2V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22Z',
      refresh: 'M2 10s2.005-2.732 3.634-4.362A9 9 0 1 1 12 21a9.004 9.004 0 0 1-8.648-6.5M2 10V4m0 6h6',
      clipboard:
        'M16 4c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C20 6.605 20 7.07 20 8v9.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V8c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.122-2.122C6.605 4 7.07 4 8 4m1 11 2 2 4.5-4.5M9.6 6h4.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C16 5.24 16 4.96 16 4.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C15.24 2 14.96 2 14.4 2H9.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C8 2.76 8 3.04 8 3.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C8.76 6 9.04 6 9.6 6Z',
      file: 'M14 2.27V6.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.11.494.11 1.054.11h4.13M16 13H8m8 4H8m2-8H8m6-7H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 4.28 4 5.12 4 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 22 7.12 22 8.8 22h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V8l-6-6Z',
      upload:
        'M21 15v1.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V15m14-7-5-5m0 0L7 8m5-5v12',
      phone:
        'M12 17.5h.01M8.2 22h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 20.48 19 19.92 19 18.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.48 2 16.92 2 15.8 2H8.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C5 3.52 5 4.08 5 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 22 7.08 22 8.2 22Zm4.3-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z',
      zap: 'M13 2 4.093 12.688c-.348.418-.523.628-.525.804a.5.5 0 0 0 .185.397c.138.111.41.111.955.111H12l-1 8 8.907-10.688c.348-.418.523-.628.525-.804a.5.5 0 0 0-.185-.397c-.138-.111-.41-.111-.955-.111H12l1-8Z',
      send: 'M10.5 13.5 21 3M10.627 13.828l2.628 6.758c.232.596.347.893.514.98a.5.5 0 0 0 .462 0c.167-.086.283-.384.515-.979l6.59-16.888c.21-.537.315-.806.258-.977a.5.5 0 0 0-.316-.316c-.172-.057-.44.048-.978.257L3.413 9.253c-.595.233-.893.349-.98.516a.5.5 0 0 0 0 .461c.087.167.385.283.98.514l6.758 2.629c.121.046.182.07.233.106a.5.5 0 0 1 .116.117c.037.05.06.111.107.232Z',
      pen: 'M13 6 6.502 7.3c-.363.072-.545.108-.692.197a1 1 0 0 0-.325.312c-.094.144-.138.324-.225.684L2 22m0 0 13.507-3.26c.36-.087.54-.13.684-.225a1 1 0 0 0 .312-.325c.088-.148.125-.329.197-.692L18 11M2 22l7.586-7.586m11.283-6.546L16.13 3.131c-.396-.396-.594-.594-.822-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668l-.738.737c-.396.397-.594.595-.668.823a1 1 0 0 0 0 .618c.074.228.272.426.668.822l4.738 4.737c.396.396.594.595.822.669a1 1 0 0 0 .618 0c.228-.075.426-.273.822-.669l.738-.737c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.229-.272-.427-.668-.823ZM11 11a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z',
      shield:
        'm9 11.5 2 2L15.5 9m4.5 3c0 4.908-5.354 8.478-7.302 9.615-.221.129-.332.194-.488.227a1.137 1.137 0 0 1-.42 0c-.156-.034-.267-.098-.488-.227C9.354 20.478 4 16.908 4 12V7.217c0-.799 0-1.199.13-1.542a2 2 0 0 1 .548-.79c.276-.243.65-.383 1.398-.664l5.362-2.01c.208-.078.312-.117.419-.133a1 1 0 0 1 .286 0c.107.016.21.055.419.133l5.362 2.01c.748.28 1.123.421 1.398.664a2 2 0 0 1 .547.79c.131.343.131.743.131 1.542V12Z',
      home: 'M9 21v-7.4c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C9.76 12 10.04 12 10.6 12h2.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C15 12.76 15 13.04 15 13.6V21M11.018 2.764 4.235 8.039c-.453.353-.68.53-.843.75a2 2 0 0 0-.318.65C3 9.704 3 9.991 3 10.565V17.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8v-7.235c0-.574 0-.861-.074-1.126a2.002 2.002 0 0 0-.318-.65c-.163-.22-.39-.397-.843-.75l-6.783-5.275c-.351-.273-.527-.41-.72-.462a1 1 0 0 0-.523 0c-.194.052-.37.189-.721.462Z',
      users:
        'M22 21v-2a4.002 4.002 0 0 0-3-3.874M15.5 3.291a4.001 4.001 0 0 1 0 7.418M17 21c0-1.864 0-2.796-.305-3.53a4 4 0 0 0-2.164-2.165C13.796 15 12.864 15 11 15H8c-1.864 0-2.796 0-3.53.305a4 4 0 0 0-2.166 2.164C2 18.204 2 19.136 2 21M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
      gear1: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
      gear2:
        'M18.727 14.727a1.5 1.5 0 0 0 .3 1.655l.055.054a1.816 1.816 0 0 1 0 2.573 1.818 1.818 0 0 1-2.573 0l-.055-.055a1.5 1.5 0 0 0-1.654-.3 1.5 1.5 0 0 0-.91 1.373v.155a1.818 1.818 0 1 1-3.636 0V20.1a1.5 1.5 0 0 0-.981-1.373 1.5 1.5 0 0 0-1.655.3l-.054.055a1.818 1.818 0 0 1-3.106-1.287 1.818 1.818 0 0 1 .533-1.286l.054-.055a1.5 1.5 0 0 0 .3-1.654 1.5 1.5 0 0 0-1.372-.91h-.155a1.818 1.818 0 1 1 0-3.636H3.9a1.5 1.5 0 0 0 1.373-.981 1.5 1.5 0 0 0-.3-1.655l-.055-.054A1.818 1.818 0 1 1 7.491 4.99l.054.054a1.5 1.5 0 0 0 1.655.3h.073a1.5 1.5 0 0 0 .909-1.372v-.155a1.818 1.818 0 0 1 3.636 0V3.9a1.499 1.499 0 0 0 .91 1.373 1.5 1.5 0 0 0 1.654-.3l.054-.055a1.817 1.817 0 0 1 2.573 0 1.819 1.819 0 0 1 0 2.573l-.055.054a1.5 1.5 0 0 0-.3 1.655v.073a1.5 1.5 0 0 0 1.373.909h.155a1.818 1.818 0 0 1 0 3.636H20.1a1.499 1.499 0 0 0-1.373.91Z',
    };
    var X = function (name, line, href, a, b) {
      return { name: name, line: line, href: href, a: I[a], b: b ? I[b] : '' };
    };
    var groups = [
      {
        title: 'Conecta y agenda',
        items: [
          X('Asistente de WhatsApp', 'Responde y canaliza, de día y de noche.', 'Funcion-Asistente.dc.html', 'chat'),
          X('Mensajes', 'Una bandeja para todo el equipo.', 'Funcion-Mensajes.dc.html', 'inbox'),
          X('Agenda', 'Horarios reales, sin empalmes.', 'Funcion-Agenda.dc.html', 'calendar'),
          X('Lista de espera', 'Las cancelaciones se vuelven a ocupar.', 'Funcion-ListaDeEspera.dc.html', 'refresh'),
        ],
      },
      {
        title: 'Documentos',
        items: [
          X(
            'Preparar visitas',
            'Lo que les falta a las citas de mañana.',
            'Funcion-PrepararVisitas.dc.html',
            'clipboard',
          ),
          X('Biblioteca de documentos', '7 formatos listos para usar.', 'Funcion-Biblioteca.dc.html', 'file'),
          X('Tus propios formatos', 'Sube tu PDF o una foto.', 'Funcion-TusFormatos.dc.html', 'upload'),
          X('Formatos en el celular', 'Llenan y firman a su ritmo.', 'Funcion-FormatosCelular.dc.html', 'phone'),
          X('Autollenado', 'Se escribe una sola vez.', 'Funcion-Autollenado.dc.html', 'zap'),
          X('Envíos', 'Por WhatsApp, correo o enlace.', 'Funcion-Envios.dc.html', 'send'),
        ],
      },
      {
        title: 'Expediente y equipo',
        items: [
          X('Firmar y bloquear', 'Firmado, ya no cambia.', 'Funcion-FirmarBloquear.dc.html', 'pen'),
          X('Expedientes sellados', 'Comprobables y con historial.', 'Funcion-ExpedientesSellados.dc.html', 'shield'),
          X('Hoy y Pacientes', 'Tu día en una pantalla.', 'Funcion-Recepcion.dc.html', 'home'),
          X('Equipo y roles', 'Cada quien con su acceso.', 'Funcion-Equipo.dc.html', 'users'),
          X('Configuración guiada', 'Prueba antes de arrancar.', 'Funcion-Configuracion.dc.html', 'gear1', 'gear2'),
        ],
      },
    ];
    return { groups: groups };
  }
}

export default class CostaMegaMenu extends Logic {
  render() {
    const v = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />{' '}
        <div
          style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            color: '#0E2A3B',
            width: '100%',
            boxSizing: 'border-box',
            background: '#FFFFFF',
            border: '1px solid #E8DFDA',
            borderRadius: '24px',
            boxShadow: '0 24px 60px rgba(14,42,59,0.14)',
            padding: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          {' '}
          <div
            style={{
              flex: '3 1 640px',
              minWidth: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '8px 16px',
            }}
          >
            {' '}
            {(v.groups || []).map((g, $index) => (
              <React.Fragment key={$index}>
                {' '}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {' '}
                  <h2
                    style={{ margin: '0', padding: '8px 10px', fontSize: '13px', fontWeight: '500', color: '#5F707B' }}
                  >
                    {g?.title}
                  </h2>{' '}
                  <ul
                    style={{
                      listStyle: 'none',
                      margin: '0',
                      padding: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                    }}
                  >
                    {' '}
                    {(g?.items || []).map((it, $index) => (
                      <React.Fragment key={$index}>
                        {' '}
                        <li>
                          <a
                            className={'kn-item'}
                            href={link(it?.href)}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px',
                              padding: '10px',
                              borderRadius: '12px',
                              textDecoration: 'none',
                              color: '#0E2A3B',
                            }}
                          >
                            {' '}
                            <span
                              aria-hidden={'true'}
                              style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '10px',
                                border: '1px solid #E3D9D3',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: '0',
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
                                <path d={it?.a} />
                                <path d={it?.b} />
                              </svg>
                            </span>{' '}
                            <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: '0' }}>
                              <span style={{ fontSize: '14px', fontWeight: '500' }}>{it?.name}</span>
                              <span style={{ fontSize: '13px', lineHeight: '1.4', color: '#5F707B' }}>{it?.line}</span>
                            </span>{' '}
                          </a>
                        </li>{' '}
                      </React.Fragment>
                    ))}{' '}
                  </ul>{' '}
                </div>{' '}
              </React.Fragment>
            ))}{' '}
          </div>{' '}
          <div
            style={{
              flex: '1 1 260px',
              minWidth: '0',
              background: '#0E2A3B',
              color: '#F7F2EF',
              borderRadius: '18px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {' '}
            <p
              style={{ margin: '0', fontSize: '20px', fontWeight: '600', lineHeight: '1.25', letterSpacing: '-0.02em' }}
            >
              {'Un solo flujo, 6 pasos.'}
            </p>{' '}
            <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.55', color: '#B9C7D0' }}>
              {'Del primer mensaje por WhatsApp al expediente firmado. Cada función le pasa su trabajo a la siguiente.'}
            </p>{' '}
            <a
              href={link('Costa-ComoFunciona-cs03.dc.html')}
              style={{
                marginTop: 'auto',
                alignSelf: 'flex-start',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
                padding: '11px 18px',
                borderRadius: '999px',
                background: '#FFFFFF',
                color: '#0E2A3B',
              }}
            >
              {'Ve cómo funciona'}
            </a>{' '}
            <a
              href={link('Costa-Funciones-cs02.dc.html')}
              style={{ alignSelf: 'flex-start', fontSize: '14px', color: '#F7F2EF' }}
            >
              {'Todas las funciones'}
            </a>{' '}
          </div>{' '}
        </div>{' '}
      </>
    );
  }
}
