'use client';
// Generated from the design canvas (Funcion-Autollenado-s6i9.dc.html), then edited by hand where noted.
import React from 'react';
import { DCLogic } from '@/lib/dc';
import FuncionPlantilla from './FuncionPlantilla';

const CSS =
  'body{margin:0;background:#FFFFFF}\n*{box-sizing:border-box}\na{text-underline-offset:3px}\n::selection{background:#141416;color:#FFFFFF}\n:focus-visible{outline:2px solid #141416;outline-offset:3px;border-radius:6px}\n:root{color-scheme:light}\n[id]{scroll-margin-top:24px}\nh1,h2,h3{text-wrap:balance}\np{text-wrap:pretty}\na,button{touch-action:manipulation;-webkit-tap-highlight-color:rgba(20,20,22,0.08);transition:background-color .15s ease-out,border-color .15s ease-out,color .15s ease-out}\nnav a:not([style*="background: #141416"]):hover{text-decoration:underline}\na[style*="background: #141416"]:hover{background:#34343A !important}\na[style*="border: 1px solid #E0E0E3"]:hover{background:#F2F2F3 !important;border-color:#141416 !important}\n.skip{position:absolute;left:-9999px;top:12px;z-index:10;background:#141416;color:#FFFFFF;padding:10px 16px;border-radius:999px;text-decoration:none}\n.skip:focus{left:16px}\nsection[style*="background: #18181B"] :focus-visible{outline-color:#FFFFFF}\na[style*="background: #FFFFFF; color: #141416"]:hover{background:#E6E6E8 !important}\n@media (prefers-reduced-motion:reduce){*{transition:none !important}}\n.kn-item:hover,.kn-trigger:hover{background:#F2F2F3 !important}\n.show-sm{display:none}\n@media (max-width:820px){.navlinks,.hide-sm{display:none !important}.show-sm{display:flex !important}}';

class Logic extends DCLogic {
  renderVals() {
    return {};
  }
}

export default class FuncionAutollenado extends Logic {
  render() {
    const v = this.renderVals() || {};
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: CSS }} /> <FuncionPlantilla slug={'autollenado'} />{' '}
      </>
    );
  }
}
