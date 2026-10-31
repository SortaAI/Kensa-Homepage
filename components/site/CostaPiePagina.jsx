'use client';
// Generated from the design canvas, Costa palette (Costa-PiePagina-cs12.dc.html), then edited by hand where noted.
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
            { t: 'Funciones', href: 'Costa-Funciones-cs02.dc.html' },
            { t: 'Cómo funciona', href: 'Costa-ComoFunciona-cs03.dc.html' },
            { t: 'Precios', href: 'Costa-Precios-cs04.dc.html' },
            { t: 'Seguridad', href: 'Costa-Seguridad-cs05.dc.html' },
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
            { t: 'Clínicas fundadoras', href: 'Costa-Contacto-cs06.dc.html' },
            { t: 'Quién lo hace', href: 'Costa-QuienLoHace-cs07.dc.html' },
            { t: 'Recursos para clínicas', href: '/recursos/' },
            { t: 'Preguntas frecuentes', href: 'Costa-Precios-cs04.dc.html' },
          ],
        },
        {
          title: 'Conversemos',
          links: [
            { t: 'Contacto', href: 'Costa-Contacto-cs06.dc.html' },
            { t: 'WhatsApp', href: 'https://wa.me/message/3JRJUFH6UNNLA1', ext: true },
            { t: 'contacto@holakensa.com', href: 'mailto:contacto@holakensa.com' },
          ],
        },
      ],
    };
  }
}

export default class CostaPiePagina extends Logic {
  render() {
    const v = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />{' '}
        <footer
          style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            color: '#0E2A3B',
            width: '100%',
            boxSizing: 'border-box',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '96px clamp(16px,4vw,40px) 24px',
          }}
        >
          {' '}
          <div style={{ background: '#F2E9E5', borderRadius: '32px', padding: 'clamp(28px,5vw,56px)' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 56px' }}>
              {' '}
              <div
                style={{ flex: '1 1 260px', maxWidth: '320px', display: 'flex', flexDirection: 'column', gap: '14px' }}
              >
                {' '}
                <a
                  href={link('Costa-Inicio-cs01.dc.html')}
                  aria-label={'Kensa, inicio'}
                  style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                >
                  <img
                    src={'/img/kensa-logo-azul.svg'}
                    width={'111'}
                    height={'26'}
                    alt={'Kensa'}
                    style={{ display: 'block', height: '26px', width: 'auto' }}
                  />
                </a>{' '}
                <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.6', color: '#4B5D69' }}>
                  {
                    'El flujo de tu clínica, del primer mensaje por WhatsApp al expediente firmado. Hecho para clínicas en México.'
                  }
                </p>{' '}
                <a
                  className={'kn-btn'}
                  href={link('Costa-Contacto-cs06.dc.html')}
                  style={{
                    alignSelf: 'flex-start',
                    marginTop: '6px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    padding: '11px 18px',
                    borderRadius: '999px',
                    background: '#18648A',
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
                      <h2 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: '500', color: '#5F707B' }}>
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
                                  color: '#0E2A3B',
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
                borderTop: '1px solid #DED3CD',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gap: '12px',
                fontSize: '13px',
                color: '#4B5D69',
              }}
            >
              {' '}
              <span>
                {'© 2026 '}
                <span translate={'no'}>{'Kensa'}</span>
                {'. Todos los derechos reservados.'}
              </span>{' '}
              <span style={{ display: 'flex', flexWrap: 'wrap', gap: '18px' }}>
                <a href={'/privacidad/'} style={{ color: '#4B5D69' }}>
                  {'Privacidad'}
                </a>
                <a href={'/terminos/'} style={{ color: '#4B5D69' }}>
                  {'Términos'}
                </a>
                <a href={'/privacidad/#cookies'} data-cookie-preferences={''} style={{ color: '#4B5D69' }}>
                  {'Cookies'}
                </a>
              </span>{' '}
            </div>{' '}
            <p style={{ margin: '12px 0 0', fontSize: '12px', color: '#5F707B' }}>
              {'Kensa trata los datos por cuenta de cada clínica. La clínica sigue siendo la responsable de ellos.'}
            </p>{' '}
          </div>{' '}
        </footer>{' '}
      </>
    );
  }
}
