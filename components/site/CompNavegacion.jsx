'use client';
// Generated from the design canvas (Comp-Navegacion-en5w.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import CompMegaMenu from './CompMegaMenu';
import CompDropdown from './CompDropdown';

const CSS = 'body{margin:0}';

class Logic extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { open: null };
  }
  renderVals() {
    var self = this,
      o = this.state.open;
    var t = function (k) {
      return function () {
        self.setState({ open: o === k ? null : k });
      };
    };
    return {
      fOpen: o === 'f',
      rOpen: o === 'r',
      mOpen: o === 'm',
      mClosed: o !== 'm',
      fRot: o === 'f' ? 180 : 0,
      rRot: o === 'r' ? 180 : 0,
      fBg: o === 'f' ? '#F2F2F3' : 'transparent',
      rBg: o === 'r' ? '#F2F2F3' : 'transparent',
      mLabel: o === 'm' ? 'Cerrar menú' : 'Abrir menú',
      fCtl: o === 'f' ? 'menu-funciones' : undefined,
      rCtl: o === 'r' ? 'menu-recursos' : undefined,
      mCtl: o === 'm' ? 'menu-movil' : undefined,
      toggleF: t('f'),
      toggleR: t('r'),
      toggleM: t('m'),
      onKey: function (e) {
        if (e.key === 'Escape' && o) self.setState({ open: null });
      },
    };
  }
}

export default class CompNavegacion extends Logic {
  render() {
    const v = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />{' '}
        <div
          style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            color: '#141416',
            width: '100%',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: '40',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '16px clamp(16px,4vw,40px) 0',
          }}
        >
          {' '}
          <nav
            aria-label={'Principal'}
            onKeyDown={v.onKey}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              background: '#FFFFFF',
              border: '1px solid #E6E6E8',
              borderRadius: '999px',
              padding: '8px 8px 8px 20px',
              boxShadow: '0 8px 24px rgba(20,20,22,0.06)',
            }}
          >
            {' '}
            <a
              href={link('Main.dc.html')}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#141416' }}
            >
              <span
                aria-hidden={'true'}
                style={{ width: '30px', height: '30px', borderRadius: '9px', background: '#141416' }}
              ></span>
              <span translate={'no'} style={{ fontWeight: '600', fontSize: '18px' }}>
                {'Kensa'}
              </span>
            </a>{' '}
            <ul
              className={'navlinks'}
              style={{
                listStyle: 'none',
                margin: '0',
                padding: '0',
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                fontSize: '15px',
              }}
            >
              {' '}
              <li>
                <button
                  type={'button'}
                  className={'kn-trigger'}
                  aria-expanded={v.fOpen}
                  aria-controls={v.fCtl}
                  onClick={v.toggleF}
                  style={{
                    border: '0',
                    background: v.fBg,
                    color: '#141416',
                    borderRadius: '999px',
                    padding: '10px 12px 10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '15px',
                  }}
                >
                  {'Funciones'}
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
                    style={{ transform: `rotate(${v.fRot ?? ''}deg)`, transition: 'transform .15s ease-out' }}
                  >
                    <path d={'m6 9 6 6 6-6'} />
                  </svg>
                </button>
              </li>{' '}
              <li>
                <a
                  className={'kn-trigger'}
                  href={link('ComoFunciona.dc.html')}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: '#141416',
                    borderRadius: '999px',
                    padding: '10px 14px',
                  }}
                >
                  {'Cómo funciona'}
                </a>
              </li>{' '}
              <li>
                <a
                  className={'kn-trigger'}
                  href={link('Seguridad.dc.html')}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: '#141416',
                    borderRadius: '999px',
                    padding: '10px 14px',
                  }}
                >
                  {'Seguridad'}
                </a>
              </li>{' '}
              <li>
                <a
                  className={'kn-trigger'}
                  href={link('Precios.dc.html')}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: '#141416',
                    borderRadius: '999px',
                    padding: '10px 14px',
                  }}
                >
                  {'Precios'}
                </a>
              </li>{' '}
              <li>
                <button
                  type={'button'}
                  className={'kn-trigger'}
                  aria-expanded={v.rOpen}
                  aria-controls={v.rCtl}
                  onClick={v.toggleR}
                  style={{
                    border: '0',
                    background: v.rBg,
                    color: '#141416',
                    borderRadius: '999px',
                    padding: '10px 12px 10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '15px',
                  }}
                >
                  {'Recursos'}
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
                    style={{ transform: `rotate(${v.rRot ?? ''}deg)`, transition: 'transform .15s ease-out' }}
                  >
                    <path d={'m6 9 6 6 6-6'} />
                  </svg>
                </button>
              </li>{' '}
            </ul>{' '}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              {' '}
              <a
                href={link('#')}
                className={'hide-sm kn-trigger'}
                style={{
                  textDecoration: 'none',
                  color: '#141416',
                  fontSize: '15px',
                  padding: '11px 14px',
                  borderRadius: '999px',
                }}
              >
                {'Iniciar sesión'}
              </a>{' '}
              <a
                href={link('Contacto.dc.html')}
                style={{
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '500',
                  padding: '11px 20px',
                  borderRadius: '999px',
                  background: '#141416',
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap',
                }}
              >
                {'Agenda una demo'}
              </a>{' '}
              <button
                type={'button'}
                className={'show-sm'}
                aria-label={v.mLabel}
                aria-expanded={v.mOpen}
                aria-controls={v.mCtl}
                onClick={v.toggleM}
                style={{
                  display: 'none',
                  width: '44px',
                  height: '44px',
                  border: '1px solid #E0E0E3',
                  borderRadius: '999px',
                  background: '#FFFFFF',
                  color: '#141416',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {' '}
                {v.mClosed ? (
                  <>
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
                      <path d={'M3 12h18M3 6h18M3 18h18'} />
                    </svg>
                  </>
                ) : null}{' '}
                {v.mOpen ? (
                  <>
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
                      <path d={'M18 6 6 18M6 6l12 12'} />
                    </svg>
                  </>
                ) : null}{' '}
              </button>{' '}
            </div>{' '}
          </nav>{' '}
          {v.fOpen ? (
            <>
              {' '}
              <div
                id={'menu-funciones'}
                style={{
                  position: 'absolute',
                  zIndex: '50',
                  left: 'clamp(16px,4vw,40px)',
                  right: 'clamp(16px,4vw,40px)',
                  top: 'calc(100% + 8px)',
                }}
              >
                {' '}
                <CompMegaMenu />{' '}
              </div>{' '}
            </>
          ) : null}{' '}
          {v.rOpen ? (
            <>
              {' '}
              <div
                id={'menu-recursos'}
                style={{
                  position: 'absolute',
                  zIndex: '50',
                  top: 'calc(100% + 8px)',
                  left: '50%',
                  width: '380px',
                  maxWidth: 'calc(100% - 32px)',
                }}
              >
                {' '}
                <CompDropdown />{' '}
              </div>{' '}
            </>
          ) : null}{' '}
          {v.mOpen ? (
            <>
              {' '}
              <div
                id={'menu-movil'}
                style={{
                  marginTop: '8px',
                  background: '#FFFFFF',
                  border: '1px solid #E6E6E8',
                  borderRadius: '24px',
                  boxShadow: '0 24px 60px rgba(20,20,22,0.14)',
                  padding: '12px',
                  overscrollBehavior: 'contain',
                }}
              >
                {' '}
                <ul style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column' }}>
                  {' '}
                  <li>
                    <a
                      className={'kn-item'}
                      href={link('Funciones.dc.html')}
                      style={{
                        display: 'block',
                        padding: '14px 12px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: '#141416',
                        fontSize: '16px',
                      }}
                    >
                      {'Funciones'}
                    </a>
                  </li>{' '}
                  <li>
                    <a
                      className={'kn-item'}
                      href={link('ComoFunciona.dc.html')}
                      style={{
                        display: 'block',
                        padding: '14px 12px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: '#141416',
                        fontSize: '16px',
                      }}
                    >
                      {'Cómo funciona'}
                    </a>
                  </li>{' '}
                  <li>
                    <a
                      className={'kn-item'}
                      href={link('Seguridad.dc.html')}
                      style={{
                        display: 'block',
                        padding: '14px 12px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: '#141416',
                        fontSize: '16px',
                      }}
                    >
                      {'Seguridad'}
                    </a>
                  </li>{' '}
                  <li>
                    <a
                      className={'kn-item'}
                      href={link('Precios.dc.html')}
                      style={{
                        display: 'block',
                        padding: '14px 12px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: '#141416',
                        fontSize: '16px',
                      }}
                    >
                      {'Precios'}
                    </a>
                  </li>{' '}
                  <li>
                    <a
                      className={'kn-item'}
                      href={link('Contacto.dc.html')}
                      style={{
                        display: 'block',
                        padding: '14px 12px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: '#141416',
                        fontSize: '16px',
                      }}
                    >
                      {'Contacto'}
                    </a>
                  </li>{' '}
                  <li>
                    <a
                      className={'kn-item'}
                      href={link('#')}
                      style={{
                        display: 'block',
                        padding: '14px 12px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: '#141416',
                        fontSize: '16px',
                      }}
                    >
                      {'Iniciar sesión'}
                    </a>
                  </li>{' '}
                </ul>{' '}
              </div>{' '}
            </>
          ) : null}{' '}
        </div>{' '}
      </>
    );
  }
}
