// Render blog share images only; other pages and homepage art remain untouched.
// Run with Playwright installed, or QA_PLAYWRIGHT_PATH pointing to its module.
const { chromium } = require(process.env.QA_PLAYWRIGHT_PATH || 'playwright');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const root = path.resolve(__dirname, '../..');
const icons = require('../../lib/resourceIcons.json');
(async () => {
  const { G } = await import(pathToFileURL(path.join(root, 'lib/gradients.js')).href);
  const index = require('../../content/recursos/index.json');
  const extra = require('../../content/recursos/_nuevas.json');
  const entries = index.groups.flatMap(group => [...extra.entries.filter(e => e.group === group.id), ...group.entries].map(e => ({ ...e, groupTitle: group.title })));
  const browser = await chromium.launch({ channel: process.env.QA_BROWSER_CHANNEL || 'chrome', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
    await page.setContent(fs.readFileSync(path.join(__dirname, 'resources.html'), 'utf8'));
    await page.evaluate(src => { document.getElementById('logo').src = src; }, 'data:image/svg+xml;base64,' + fs.readFileSync(path.join(root, 'public/img/kensa-logo-azul.svg')).toString('base64'));
    await page.evaluate(() => document.fonts.ready);
    const posts = fs.readdirSync(path.join(root, 'content/recursos')).filter(f => f.endsWith('.json') && !f.startsWith('_') && f !== 'index.json').sort();
    for (const file of posts) {
      const post = JSON.parse(fs.readFileSync(path.join(root, 'content/recursos', file)));
      const i = entries.findIndex(e => e.slug === post.slug);
      const paths = icons.articles[post.slug] || icons.fallback;
      await page.evaluate(({ title, tag, paths, bg }) => {
        document.getElementById('cover').style.background = bg;
        document.getElementById('tag').textContent = tag;
        const h = document.getElementById('title');
        h.textContent = title;
        h.className = title.length > 100 ? 'longest' : title.length > 80 ? 'long' : '';
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        for (const [key,value] of Object.entries({viewBox:'0 0 24 24',fill:'none',stroke:'currentColor','stroke-width':'1.5','stroke-linecap':'round','stroke-linejoin':'round'})) svg.setAttribute(key,value);
        paths.forEach(d => { const p = document.createElementNS(svg.namespaceURI, 'path'); p.setAttribute('d', d); svg.append(p); });
        document.getElementById('icon').replaceChildren(svg);
      }, { title: post.title, tag: entries[i]?.groupTitle || 'Guía', paths, bg: G[Math.max(i,0) % G.length] });
      const fits = await page.evaluate(() => document.getElementById('title').getBoundingClientRect().bottom < 535);
      if (!fits) throw new Error(`Title overflow: ${post.slug}`);
      await page.screenshot({ path: path.join(root, `public/og/recursos-${post.slug}.jpg`), type: 'jpeg', quality: 90 });
    }
    console.log(`Rendered ${posts.length} blog share images with article-specific icons.`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
