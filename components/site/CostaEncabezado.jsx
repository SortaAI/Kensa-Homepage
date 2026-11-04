'use client';
// Generated from the design canvas, Costa palette (Costa-Encabezado-cs08.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import CostaNavegacion from './CostaNavegacion';

const CSS =
  'body{margin:0}\n.kn-promo .kn-short{display:none}\n@media (max-width:600px){.kn-promo{font-size:12.5px !important;padding:9px 12px !important}.kn-promo .kn-long{display:none}.kn-promo .kn-short{display:inline}}';

class Logic extends DCLogic {
  renderVals() {
    return {};
  }
}

export default class CostaEncabezado extends Logic {
  render() {
    const v = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />{' '}
        <header
          style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            color: '#0E2A3B',
            width: '100%',
            position: 'relative',
            zIndex: '40',
          }}
        >
          {' '}
          <div
            className={'kn-promo'}
            style={{
              background: '#0E2A3B',
              color: '#F7F2EF',
              fontSize: '13px',
              textAlign: 'center',
              padding: '10px 16px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '4px 12px',
            }}
          >
            {' '}
            <span className={'kn-long'}>{'Clínicas fundadoras: piloto de 45 días sin costo y precio fundador reducido.'}</span>
            <span className={'kn-short'}>{'Piloto de 45 días sin costo.'}</span>{' '}
            <a
              href={link('Costa-Contacto-cs06.dc.html')}
              style={{ color: '#FFFFFF', fontWeight: '500', textUnderlineOffset: '3px' }}
            >
              {'Solicita tu lugar'}
            </a>{' '}
          </div>{' '}
          <CostaNavegacion />{' '}
        </header>{' '}
      </>
    );
  }
}
