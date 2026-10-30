'use client';
// Generated from the design canvas, Costa palette (Costa-Navegacion-cs09.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import CostaMegaMenu from './CostaMegaMenu';
import CostaDropdown from './CostaDropdown';

const CSS =
  'body{margin:0}\n@keyframes kn-drop{from{opacity:0;transform:translateY(-6px)}}\n#menu-funciones,#menu-recursos,#menu-movil{animation:kn-drop .22s cubic-bezier(.16,1,.3,1)}\n@media (prefers-reduced-motion:reduce){#menu-funciones,#menu-recursos,#menu-movil{animation:none}}';

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
      fBg: o === 'f' ? '#F2E9E5' : 'transparent',
      rBg: o === 'r' ? '#F2E9E5' : 'transparent',
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

export default class CostaNavegacion extends Logic {
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
              border: '1px solid #E8DFDA',
              borderRadius: '999px',
              padding: '8px 8px 8px 20px',
              boxShadow: '0 8px 24px rgba(14,42,59,0.06)',
            }}
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
                    color: '#0E2A3B',
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
                  href={link('Costa-ComoFunciona-cs03.dc.html')}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: '#0E2A3B',
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
                  href={link('Costa-Seguridad-cs05.dc.html')}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: '#0E2A3B',
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
                  href={link('Costa-Precios-cs04.dc.html')}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: '#0E2A3B',
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
                    color: '#0E2A3B',
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
                  color: '#0E2A3B',
                  fontSize: '15px',
                  padding: '11px 14px',
                  borderRadius: '999px',
                }}
              >
                {'Iniciar sesión'}
              </a>{' '}
              <a
                className={'kn-btn'}
                href={link('Costa-Contacto-cs06.dc.html')}
                style={{
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '500',
                  padding: '11px 20px',
                  borderRadius: '999px',
                  background: '#18648A',
                  color: '#FFFFFF',
                  whiteSpace: 'nowrap',
                }}
              >
                {'Agenda una demo'}
              </a>{' '}
              <button
                type={'button'}
                className={'kn-ghost show-sm'}
                aria-label={v.mLabel}
                aria-expanded={v.mOpen}
                aria-controls={v.mCtl}
                onClick={v.toggleM}
                style={{
                  display: 'none',
                  width: '44px',
                  height: '44px',
                  border: '1px solid #E3D9D3',
                  borderRadius: '999px',
                  background: '#FFFFFF',
                  color: '#0E2A3B',
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
                <CostaMegaMenu />{' '}
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
                <CostaDropdown />{' '}
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
                  border: '1px solid #E8DFDA',
                  borderRadius: '24px',
                  boxShadow: '0 24px 60px rgba(14,42,59,0.14)',
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
                      href={link('Costa-Funciones-cs02.dc.html')}
                      style={{
                        display: 'block',
                        padding: '14px 12px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: '#0E2A3B',
                        fontSize: '16px',
                      }}
                    >
                      {'Funciones'}
                    </a>
                  </li>{' '}
                  <li>
                    <a
                      className={'kn-item'}
                      href={link('Costa-ComoFunciona-cs03.dc.html')}
                      style={{
                        display: 'block',
                        padding: '14px 12px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: '#0E2A3B',
                        fontSize: '16px',
                      }}
                    >
                      {'Cómo funciona'}
                    </a>
                  </li>{' '}
                  <li>
                    <a
                      className={'kn-item'}
                      href={link('Costa-Seguridad-cs05.dc.html')}
                      style={{
                        display: 'block',
                        padding: '14px 12px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: '#0E2A3B',
                        fontSize: '16px',
                      }}
                    >
                      {'Seguridad'}
                    </a>
                  </li>{' '}
                  <li>
                    <a
                      className={'kn-item'}
                      href={link('Costa-Precios-cs04.dc.html')}
                      style={{
                        display: 'block',
                        padding: '14px 12px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: '#0E2A3B',
                        fontSize: '16px',
                      }}
                    >
                      {'Precios'}
                    </a>
                  </li>{' '}
                  <li>
                    <a
                      className={'kn-item'}
                      href={link('Costa-Contacto-cs06.dc.html')}
                      style={{
                        display: 'block',
                        padding: '14px 12px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        color: '#0E2A3B',
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
                        color: '#0E2A3B',
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
