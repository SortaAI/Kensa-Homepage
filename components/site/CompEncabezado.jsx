'use client';
// Generated from the design canvas (Comp-Encabezado-2gft.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import CompNavegacion from './CompNavegacion';

const CSS = 'body{margin:0}';

class Logic extends DCLogic {
  renderVals() {
    return {};
  }
}

export default class CompEncabezado extends Logic {
  render() {
    const v = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />{' '}
        <header
          style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            color: '#141416',
            width: '100%',
            position: 'relative',
            zIndex: '40',
          }}
        >
          {' '}
          <div
            style={{
              background: '#141416',
              color: '#FAFAFA',
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
            <span>{'Clínicas fundadoras: piloto de 45 días sin costo y precio fundador reducido.'}</span>{' '}
            <a
              href={link('Contacto.dc.html')}
              style={{ color: '#FFFFFF', fontWeight: '500', textUnderlineOffset: '3px' }}
            >
              {'Solicita tu lugar'}
            </a>{' '}
          </div>{' '}
          <CompNavegacion />{' '}
        </header>{' '}
      </>
    );
  }
}
