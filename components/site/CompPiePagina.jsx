'use client';
// Generated from the design canvas (Comp-PiePagina-uqhk.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';

const CSS = 'body{margin:0}';

class Logic extends DCLogic {
  renderVals() {
    return {
      cols: [
        {
          title: 'Producto',
          links: [
            { t: 'Funciones', href: 'Funciones.dc.html' },
            { t: 'Cómo funciona', href: 'ComoFunciona.dc.html' },
            { t: 'Precios', href: 'Precios.dc.html' },
            { t: 'Seguridad', href: 'Seguridad.dc.html' },
          ],
        },
        {
          title: 'Funciones',
          links: [
            { t: 'Asistente de WhatsApp', href: 'Funcion-Asistente.dc.html' },
            { t: 'Agenda', href: 'Funcion-Agenda.dc.html' },
            { t: 'Lista de espera', href: 'Funcion-ListaDeEspera.dc.html' },
            { t: 'Formatos médicos', href: 'Funcion-Biblioteca.dc.html' },
            { t: 'Expedientes sellados', href: 'Funcion-ExpedientesSellados.dc.html' },
          ],
        },
        {
          title: 'Kensa',
          links: [
            { t: 'Clínicas fundadoras', href: 'Contacto.dc.html' },
            { t: 'Quién lo hace', href: 'QuienLoHace.dc.html' },
            { t: 'Recursos para clínicas', href: '#' },
            { t: 'Preguntas frecuentes', href: 'Precios.dc.html' },
          ],
        },
        {
          title: 'Conversemos',
          links: [
            { t: 'Contacto', href: 'Contacto.dc.html' },
            { t: 'WhatsApp', href: 'https://wa.me/message/3JRJUFH6UNNLA1', ext: true },
            { t: 'contacto@holakensa.com', href: 'mailto:contacto@holakensa.com' },
          ],
        },
      ],
    };
  }
}

export default class CompPiePagina extends Logic {
  render() {
    const v = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />{' '}
        <footer
          style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            color: '#141416',
            width: '100%',
            boxSizing: 'border-box',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '96px clamp(16px,4vw,40px) 24px',
          }}
        >
          {' '}
          <div style={{ background: '#F2F2F3', borderRadius: '32px', padding: 'clamp(28px,5vw,56px)' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 56px' }}>
              {' '}
              <div
                style={{ flex: '1 1 260px', maxWidth: '320px', display: 'flex', flexDirection: 'column', gap: '14px' }}
              >
                {' '}
                <a
                  href={link('Main.dc.html')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    color: '#141416',
                  }}
                >
                  <span
                    aria-hidden={'true'}
                    style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#141416' }}
                  ></span>
                  <span translate={'no'} style={{ fontWeight: '600', fontSize: '18px' }}>
                    {'Kensa'}
                  </span>
                </a>{' '}
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.6', color: '#3D3D42' }}>
                  {
                    'El flujo de tu clínica, del primer mensaje por WhatsApp al expediente firmado. Hecho para clínicas en México.'
                  }
                </p>{' '}
                <a
                  href={link('Contacto.dc.html')}
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '6px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '11px 18px',
                    borderRadius: '999px',
                    background: '#141416',
                    color: '#FFFFFF',
                  }}
                >
                  {'Agenda una demo'}
                </a>{' '}
              </div>{' '}
              <div
                style={{
                  flex: '2 1 520px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '28px 24px',
                  fontSize: '14px',
                }}
              >
                {' '}
                {(v.cols || []).map((c, $index) => (
                  <React.Fragment key={$index}>
                    {' '}
                    <div>
                      {' '}
                      <h2 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: '500', color: '#5A5A61' }}>
                        {c?.title}
                      </h2>{' '}
                      <ul
                        style={{
                          listStyle: 'none',
                          margin: '0',
                          padding: '0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '10px',
                        }}
                      >
                        {' '}
                        {(c?.links || []).map((l, $index) => (
                          <React.Fragment key={$index}>
                            {' '}
                            <li>
                              <a
                                href={link(l?.href)}
                                style={{
                                  textDecoration: 'none',
                                  color: '#141416',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '6px',
                                }}
                              >
                                {l?.t}
                                {l?.ext ? (
                                  <>
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
                                      <path d={'M7 17 17 7m0 0H7m10 0v10'} />
                                    </svg>
                                  </>
                                ) : null}
                              </a>
                            </li>{' '}
                          </React.Fragment>
                        ))}{' '}
                      </ul>{' '}
                    </div>{' '}
                  </React.Fragment>
                ))}{' '}
              </div>{' '}
            </div>{' '}
            <div
              style={{
                marginTop: '48px',
                paddingTop: '20px',
                borderTop: '1px solid #DCDCE0',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '12px',
                fontSize: '13px',
                color: '#3D3D42',
              }}
            >
              {' '}
              <span>
                {'© 2026 '}
                <span translate={'no'}>{'Kensa'}</span>
                {'. Todos los derechos reservados.'}
              </span>{' '}
              <span style={{ display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
                <a href={link('#')} style={{ color: '#3D3D42' }}>
                  {'Privacidad'}
                </a>
                <a href={link('#')} style={{ color: '#3D3D42' }}>
                  {'Términos'}
                </a>
                <a href={link('#')} style={{ color: '#3D3D42' }}>
                  {'Cookies'}
                </a>
              </span>{' '}
            </div>{' '}
            <p style={{ margin: '12px 0 0', fontSize: '12px', color: '#5A5A61' }}>
              {'Kensa trata los datos por cuenta de cada clínica. La clínica sigue siendo la responsable de ellos.'}
            </p>{' '}
          </div>{' '}
        </footer>{' '}
      </>
    );
  }
}
