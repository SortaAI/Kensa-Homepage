'use client';
// Generated from the design canvas (QuienLoHace-k7qd.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic, link } from '@/lib/dc';
import CompEncabezado from './CompEncabezado';
import CompPiePagina from './CompPiePagina';

const CSS =
  'body{margin:0;background:#FFFFFF}\n:root{color-scheme:light}\n[id]{scroll-margin-top:24px}\nh1,h2,h3{text-wrap:balance}\np{text-wrap:pretty}\na,button{touch-action:manipulation;-webkit-tap-highlight-color:rgba(20,20,22,0.08);transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out}\nnav a:not([style*="background: #141416"]):hover{text-decoration:underline}\na[style*="background: #141416"]:hover{background:#34343A !important}\na[style*="border: 1px solid #D4D4D8"]:hover{background:#F2F2F3 !important;border-color:#141416 !important}\n.skip{position:absolute;left:-9999px;top:12px;z-index:10;background:#141416;color:#FFFFFF;padding:10px 16px;border-radius:999px;text-decoration:none}\n.skip:focus{left:16px}\n@media (prefers-reduced-motion:reduce){*{transition:none !important}}\n::selection{background:#141416;color:#FFFFFF}\n:focus-visible{outline:2px solid #141416;outline-offset:3px;border-radius:6px}\na{color:#141416;text-underline-offset:3px}a:hover{color:#3D3D42}\n*{box-sizing:border-box}\n.wrap{width:100%;max-width:1200px;margin:0 auto;padding-left:clamp(16px,4vw,40px);padding-right:clamp(16px,4vw,40px)}\n@media (max-width:820px){.hide-sm{display:none !important}.navlinks{display:none !important}}\n.kn-item:hover,.kn-trigger:hover{background:#F2F2F3 !important}\n.show-sm{display:none}\n@media (max-width:820px){.navlinks,.hide-sm{display:none !important}.show-sm{display:flex !important}}';

class Logic extends DCLogic {
  renderVals() {
    return {};
  }
}

export default class QuienLoHace extends Logic {
  render() {
    const v = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />{' '}
        <div
          style={{
            fontFamily: "'Poppins', system-ui, sans-serif",
            color: '#141416',
            background: '#FFFFFF',
            width: '100%',
            overflowX: 'hidden',
          }}
        >
          {' '}
          <a href={link('#contenido')} className={'skip'}>
            {'Saltar al contenido'}
          </a>{' '}
          <CompEncabezado />{' '}
          <section id={'contenido'} className={'wrap'} style={{ paddingTop: '88px' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px 72px' }}>
              {' '}
              <div
                style={{ flex: '1.3 1 440px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                {' '}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#5A5A61',
                  }}
                >
                  <span
                    aria-hidden={'true'}
                    style={{ width: '8px', height: '8px', borderRadius: '999px', background: '#141416' }}
                  ></span>
                  {'Quién lo hace · El Paso y Ciudad Juárez'}
                </span>{' '}
                <h1
                  style={{
                    margin: '0',
                    fontSize: 'clamp(38px,5.4vw,64px)',
                    lineHeight: '1.04',
                    letterSpacing: '-0.035em',
                    fontWeight: '600',
                  }}
                >
                  {'Kensa empezó del otro lado '}
                  <span style={{ color: '#6E6E76' }}>{'del mostrador.'}</span>
                </h1>{' '}
                <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.6', color: '#3D3D42', maxWidth: '560px' }}>
                  {
                    'Soy Emiliano Rodríguez. Trabajé como técnico de atención al paciente y vi a recepción escribir el mismo nombre una y otra vez: en la historia clínica, el consentimiento, el aviso de privacidad y la hoja que faltaba.'
                  }
                </p>{' '}
              </div>{' '}
              <figure
                style={{
                  flex: '1 1 320px',
                  minWidth: '0',
                  maxWidth: '420px',
                  margin: '0',
                  background: '#F2F2F3',
                  borderRadius: '28px',
                  padding: '14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {' '}
                <img
                  src={'/img/emiliano-rodriguez.webp'}
                  width={'640'}
                  height={'640'}
                  alt={'Emiliano Rodríguez, fundador de Kensa'}
                  style={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    borderRadius: '18px',
                    background: '#FFFFFF',
                  }}
                />{' '}
                <figcaption style={{ padding: '0 8px 6px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {' '}
                  <span style={{ fontSize: '16px', fontWeight: '600' }}>{'Emiliano Rodríguez'}</span>{' '}
                  <span style={{ fontSize: '14px', color: '#3D3D42' }}>
                    {'Fundador · Ex técnico de atención al paciente'}
                  </span>{' '}
                </figcaption>{' '}
              </figure>{' '}
            </div>{' '}
          </section>{' '}
          <section className={'wrap'} style={{ paddingTop: '112px' }}>
            {' '}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px 72px' }}>
              {' '}
              <h2
                style={{
                  flex: '1 1 300px',
                  margin: '0',
                  fontSize: 'clamp(28px,3.4vw,40px)',
                  lineHeight: '1.12',
                  letterSpacing: '-0.03em',
                  fontWeight: '600',
                }}
              >
                {'Lo frustrante no era lo clínico.'}
              </h2>{' '}
              <div
                style={{
                  flex: '1.6 1 480px',
                  minWidth: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  fontSize: '17px',
                  lineHeight: '1.65',
                  color: '#3D3D42',
                }}
              >
                {' '}
                <p style={{ margin: '0' }}>
                  {
                    'Era la repetición, las correcciones a mano y el tiempo perdido buscando el documento correcto. Nada de eso mejora la atención, y todo le quita tiempo al equipo que está frente al paciente.'
                  }
                </p>{' '}
                <p style={{ margin: '0' }}>
                  {
                    'Hoy estudio ciencias computacionales y construyo Kensa desde la frontera entre El Paso y Ciudad Juárez, hablando directo con los consultorios que lo van a usar.'
                  }
                </p>{' '}
              </div>{' '}
            </div>{' '}
          </section>{' '}
          <section className={'wrap'} style={{ paddingTop: '112px' }}>
            {' '}
            <h2
              style={{
                margin: '0',
                fontSize: 'clamp(30px,3.6vw,46px)',
                lineHeight: '1.1',
                letterSpacing: '-0.03em',
                fontWeight: '600',
              }}
            >
              {'Una empresa chica. '}
              <span style={{ color: '#6E6E76' }}>{'La responsabilidad completa.'}</span>
            </h2>{' '}
            <p style={{ margin: '14px 0 0', fontSize: '16px', lineHeight: '1.6', color: '#3D3D42', maxWidth: '560px' }}>
              {'Estar al principio significa que la conversación con cada consultorio importa más, no menos.'}
            </p>{' '}
            <div
              style={{
                marginTop: '40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '12px',
              }}
            >
              {' '}
              <div
                style={{
                  background: '#F2F2F3',
                  borderRadius: '20px',
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {' '}
                <span style={{ fontSize: '13px', fontWeight: '500', color: '#5A5A61' }}>{'Escuchar'}</span>{' '}
                <span style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '-0.01em' }}>
                  {'Hablo antes de vender.'}
                </span>{' '}
                <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#3D3D42' }}>
                  {
                    'Empiezo por entender qué llena tu recepción, dónde se repiten los datos y qué parte del flujo de verdad estorba.'
                  }
                </span>{' '}
              </div>{' '}
              <div
                style={{
                  background: '#F2F2F3',
                  borderRadius: '20px',
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {' '}
                <span style={{ fontSize: '13px', fontWeight: '500', color: '#5A5A61' }}>{'Claridad'}</span>{' '}
                <span style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '-0.01em' }}>
                  {'Digo lo que Kensa no hace.'}
                </span>{' '}
                <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#3D3D42' }}>
                  {'No prometo un expediente clínico completo ni funciones que todavía no existen.'}
                </span>{' '}
              </div>{' '}
              <div
                style={{
                  background: '#F2F2F3',
                  borderRadius: '20px',
                  padding: '26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {' '}
                <span style={{ fontSize: '13px', fontWeight: '500', color: '#5A5A61' }}>{'Cercanía'}</span>{' '}
                <span style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '-0.01em' }}>
                  {'En español y por WhatsApp.'}
                </span>{' '}
                <span style={{ fontSize: '15px', lineHeight: '1.55', color: '#3D3D42' }}>
                  {'Hablas con la persona que construye el producto, en el canal donde tu consultorio ya trabaja.'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </section>{' '}
          <div className={'wrap'} style={{ paddingTop: '112px' }}>
            {' '}
            <section
              style={{
                background: '#18181B',
                color: '#FAFAFA',
                borderRadius: '32px',
                padding: 'clamp(32px,5vw,56px)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '32px 64px',
              }}
            >
              {' '}
              <div style={{ flex: '1 1 340px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {' '}
                <span style={{ fontSize: '13px', fontWeight: '500', color: '#B4B4BA' }}>
                  {'Por qué empezar aquí'}
                </span>{' '}
                <h2
                  style={{
                    margin: '0',
                    fontSize: 'clamp(28px,3.4vw,40px)',
                    lineHeight: '1.12',
                    letterSpacing: '-0.03em',
                    fontWeight: '600',
                  }}
                >
                  {'Una tarea pequeña quita mucha fricción.'}
                </h2>{' '}
                <p style={{ margin: '0', fontSize: '16px', lineHeight: '1.6', color: '#D4D4D8' }}>
                  {
                    'Kensa empezó con una tarea concreta: que el mismo dato no se escriba en cada hoja de la visita. De ahí creció al resto del flujo de tu recepción.'
                  }
                </p>{' '}
              </div>{' '}
              <div
                style={{
                  flex: '1 1 340px',
                  minWidth: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  borderTop: '1px solid #3D3D42',
                  paddingTop: '20px',
                }}
              >
                {' '}
                <span style={{ fontSize: '13px', fontWeight: '500', color: '#B4B4BA' }}>
                  {'Construido desde la frontera'}
                </span>{' '}
                <p style={{ margin: '0', fontSize: '18px', lineHeight: '1.55', color: '#FAFAFA' }}>
                  {
                    'Entre dos ciudades y dos sistemas de salud, con una sola obsesión: respetar cómo trabaja el equipo que está frente al paciente.'
                  }
                </p>{' '}
              </div>{' '}
            </section>{' '}
          </div>{' '}
          <section
            className={'wrap'}
            style={{
              paddingTop: '112px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {' '}
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#5A5A61' }}>{'Te contesta Emiliano'}</span>{' '}
            <h2
              style={{
                margin: '12px 0 0',
                fontSize: 'clamp(30px,4vw,48px)',
                lineHeight: '1.08',
                letterSpacing: '-0.03em',
                fontWeight: '600',
                maxWidth: '720px',
              }}
            >
              {'Cuéntame cómo llenan sus formatos hoy.'}
            </h2>{' '}
            <p style={{ margin: '16px 0 0', fontSize: '16px', lineHeight: '1.6', color: '#3D3D42', maxWidth: '520px' }}>
              {'Quince minutos por WhatsApp para entender el problema real de tu clínica, sin presentación de ventas.'}
            </p>{' '}
            <div
              style={{ marginTop: '28px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}
            >
              {' '}
              <a
                href={link('https://wa.me/message/3JRJUFH6UNNLA1')}
                style={{
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '15px 26px',
                  borderRadius: '999px',
                  background: '#141416',
                  color: '#FFFFFF',
                }}
              >
                {'Escríbeme por WhatsApp'}
              </a>{' '}
              <a
                href={link('mailto:contacto@holakensa.com')}
                style={{
                  textDecoration: 'none',
                  fontWeight: '500',
                  fontSize: '16px',
                  padding: '15px 26px',
                  borderRadius: '999px',
                  border: '1px solid #D4D4D8',
                  color: '#141416',
                }}
              >
                {'contacto@holakensa.com'}
              </a>{' '}
            </div>{' '}
          </section>{' '}
          <CompPiePagina />{' '}
        </div>{' '}
      </>
    );
  }
}
