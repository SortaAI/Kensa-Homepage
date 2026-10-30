'use client';
// Generated from the design canvas, Costa palette (Costa-Dropdown-cs11.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';

const CSS = 'body{margin:0}';

class Logic extends DCLogic {
  renderVals() {
    return {
      items: [
        {
          name: 'Preguntas frecuentes',
          line: 'Lo que más nos preguntan las clínicas.',
          href: 'Costa-Precios-cs04.dc.html',
          icon: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z',
        },
        {
          name: 'Guías y ayuda',
          line: 'Paso a paso para tu equipo.',
          href: '#',
          icon: 'm12 21-.1-.15c-.695-1.042-1.042-1.563-1.5-1.94a4 4 0 0 0-1.378-.737C8.453 18 7.827 18 6.575 18H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 16.48 2 15.92 2 14.8V6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 3 4.08 3 5.2 3h.4c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C12 6.04 12 7.16 12 9.4M12 21V9.4M12 21l.1-.15c.695-1.042 1.042-1.563 1.5-1.94a3.999 3.999 0 0 1 1.378-.737C15.547 18 16.173 18 17.425 18H18.8c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 16.48 22 15.92 22 14.8V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 3 19.92 3 18.8 3h-.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C12 6.04 12 7.16 12 9.4',
        },
        {
          name: 'Comprobar un documento',
          line: 'Verifica que un PDF no cambió.',
          href: 'Funcion-ExpedientesSellados.dc.html',
          icon: 'm9 11.5 2 2L15.5 9m4.5 3c0 4.908-5.354 8.478-7.302 9.615-.221.129-.332.194-.488.227a1.137 1.137 0 0 1-.42 0c-.156-.034-.267-.098-.488-.227C9.354 20.478 4 16.908 4 12V7.217c0-.799 0-1.199.13-1.542a2 2 0 0 1 .548-.79c.276-.243.65-.383 1.398-.664l5.362-2.01c.208-.078.312-.117.419-.133a1 1 0 0 1 .286 0c.107.016.21.055.419.133l5.362 2.01c.748.28 1.123.421 1.398.664a2 2 0 0 1 .547.79c.131.343.131.743.131 1.542V12Z',
        },
        {
          name: 'Quién lo hace',
          line: 'Quién fundó Kensa y por qué.',
          href: 'Costa-QuienLoHace-cs07.dc.html',
          icon: 'M22 21v-2a4.002 4.002 0 0 0-3-3.874M15.5 3.291a4.001 4.001 0 0 1 0 7.418M17 21c0-1.864 0-2.796-.305-3.53a4 4 0 0 0-2.164-2.165C13.796 15 12.864 15 11 15H8c-1.864 0-2.796 0-3.53.305a4 4 0 0 0-2.166 2.164C2 18.204 2 19.136 2 21M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
        },
      ],
    };
  }
}

export default class CostaDropdown extends Logic {
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
            borderRadius: '20px',
            boxShadow: '0 24px 60px rgba(14,42,59,0.14)',
            padding: '8px',
          }}
        >
          {' '}
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
            {(v.items || []).map((it, $index) => (
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
                      padding: '12px',
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
                        <path d={it?.icon} />
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
          <a
            href={link('Costa-Contacto-cs06.dc.html')}
            style={{
              margin: '6px 4px 4px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 14px',
              borderRadius: '12px',
              background: '#F2E9E5',
              textDecoration: 'none',
              color: '#0E2A3B',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            {'¿Tienes una pregunta? Escríbenos'}
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
          </a>{' '}
        </div>{' '}
      </>
    );
  }
}
