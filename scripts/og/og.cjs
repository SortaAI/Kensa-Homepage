const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const R=require('path').resolve(__dirname,'../..');
const G=[
 'radial-gradient(70% 80% at 0% 0%, #CFDDEB 0%, transparent 70%), radial-gradient(60% 70% at 100% 55%, #F2CDB9 0%, transparent 70%), radial-gradient(60% 60% at 45% 100%, #EBDDE3 0%, transparent 70%), #F8F4F1',
 'radial-gradient(70% 80% at 100% 0%, #F2D2C1 0%, transparent 70%), radial-gradient(70% 80% at 0% 100%, #CBDDEA 0%, transparent 70%), radial-gradient(50% 50% at 60% 50%, #F3E8E4 0%, transparent 70%), #F8F4F1',
 'radial-gradient(80% 70% at 15% 10%, #D4E3EE 0%, transparent 70%), radial-gradient(60% 70% at 95% 90%, #EFCFC3 0%, transparent 70%), radial-gradient(50% 60% at 85% 10%, #E6DCE6 0%, transparent 70%), #F8F4F1',
 'radial-gradient(80% 70% at 50% 0%, #CDE2E8 0%, transparent 70%), radial-gradient(60% 60% at 90% 100%, #F1D1C3 0%, transparent 70%), radial-gradient(50% 60% at 0% 80%, #E9DEE6 0%, transparent 70%), #F8F4F1',
 'radial-gradient(70% 80% at 0% 100%, #F1D0C1 0%, transparent 70%), radial-gradient(70% 80% at 100% 0%, #D3DCEE 0%, transparent 70%), radial-gradient(50% 50% at 50% 50%, #F4EAE6 0%, transparent 70%), #F8F4F1',
 'radial-gradient(70% 80% at 100% 100%, #CDE0EC 0%, transparent 70%), radial-gradient(60% 70% at 0% 30%, #F0D3C6 0%, transparent 70%), radial-gradient(50% 60% at 70% 0%, #E7DDE7 0%, transparent 70%), #F8F4F1'];
const key=p=>p.replace(/^\/|\/$/g,'').replace(/\//g,'-')||'inicio';
const pages=JSON.parse(fs.readFileSync(R+'/content/seo/pages.json'));
const tagFor=p=>p==='/'?'Kensa':p.startsWith('/funciones/')&&p!=='/funciones/'?'Funciones':p==='/recursos/'?'Blog y recursos':p==='/privacidad/'||p==='/terminos/'?'Legal':'Kensa';
const jobs=Object.entries(pages).map(([p,v])=>({key:key(p),h:v.og,tag:tagFor(p)}));
const idx=JSON.parse(fs.readFileSync(R+'/content/recursos/index.json'));const extra=JSON.parse(fs.readFileSync(R+'/content/recursos/_nuevas.json'));
const gt={};idx.groups.forEach(g=>{g.entries.forEach(e=>gt[e.slug]=g.title)});extra.entries.forEach(e=>gt[e.slug]=idx.groups.find(g=>g.id===e.group).title);
for(const f of fs.readdirSync(R+'/content/recursos')){if(!f.endsWith('.json')||f.startsWith('_')||f==='index.json')continue;const d=JSON.parse(fs.readFileSync(R+'/content/recursos/'+f));const slug=f.slice(0,-5);
 jobs.push({key:'recursos-'+slug,h:d.title,tag:gt[slug]||'Guía'});}
(async()=>{const b=await chromium.launch();const pg=await b.newPage({viewport:{width:1200,height:630}});
await pg.goto('file://'+__dirname+'/og.html');await pg.evaluate(async()=>{document.getElementById('logo').src='kensa-logo-azul.svg';document.getElementById('mark').src='kensa-mark-azul.svg';await document.fonts.ready});
fs.mkdirSync(R+'/public/og',{recursive:true});let i=0;
for(const j of jobs){await pg.evaluate(([j,bg])=>{document.getElementById('c').style.background=bg;document.getElementById('tag').textContent=j.tag;const h=document.getElementById('h');
 const t=j.h.replace(/[.:]$/,'');h.className=t.length>70?'xs':t.length>44?'s':'';h.innerHTML='';h.append(t);const d=document.createElement('span');d.className='dot';d.textContent='.';h.append(d);},[j,G[i++%G.length]]);
 await pg.evaluate(()=>document.fonts.ready);await pg.screenshot({path:`'+__dirname+'/out/${j.key}.png`});}
console.log(jobs.length);await b.close()})()
