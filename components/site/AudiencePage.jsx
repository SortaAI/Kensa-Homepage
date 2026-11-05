import CostaShell from './CostaShell';
import { G } from '@/lib/gradients';

export default function AudiencePage({ page }) {
  return (
    <CostaShell>
      <section className="wrap" style={{ paddingTop: '72px' }}>
        <nav className="kn-crumbs" aria-label="Migas de pan">
          <a href="/">Inicio</a><span aria-hidden="true">/</span><span>{page.label}</span>
        </nav>
        <div style={{ marginTop: '28px', borderRadius: '28px', background: G[0], padding: 'clamp(28px,5vw,64px)' }}>
          <span className="kn-pill" style={{ background: '#FFFFFF' }}>{page.label}</span>
          <h1 style={{ margin: '20px 0 0', fontSize: 'clamp(32px,4.6vw,56px)', lineHeight: 1.08, letterSpacing: '-0.03em', fontWeight: 600, maxWidth: '900px' }}>{page.title}</h1>
          <p style={{ marginTop: '24px', fontSize: '18px', lineHeight: 1.7, maxWidth: '760px' }}>{page.lead}</p>
          {page.intro ? <p style={{ lineHeight: 1.7, maxWidth: '760px' }}>{page.intro}</p> : null}
          <div className="kn-prose" style={{ marginTop: '28px' }}><a className="button" href="/contacto/">Solicitar una demo</a></div>
          <p style={{ fontSize: '13px', lineHeight: 1.7, maxWidth: '640px', color: '#4B5D69' }}>{page.microcopy}</p>
        </div>
      </section>
      <section className="wrap" style={{ paddingTop: '56px', paddingBottom: '88px' }}>
        <div className="kn-article-grid">
          <aside className="kn-toc" aria-label="Explora Kensa"><p>Explora Kensa</p><nav>{page.links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav></aside>
          <div>
            <article className="kn-prose" dangerouslySetInnerHTML={{ __html: page.body }} />
            <nav className="kn-prose" aria-label="Recursos relacionados" style={{ marginTop: '40px' }}>
              <h2>Sigue explorando</h2>
              <ul>{page.links.map(([label, href]) => <li key={href}><a href={href}>{label}</a></li>)}</ul>
            </nav>
            <div className="kn-prose kn-related" style={{ marginTop: '48px', padding: 'clamp(26px,4vw,40px)', borderRadius: '24px', background: '#0E2A3B', color: '#DCE6EC' }}>
              <h2>Revisa el flujo de tu recepción</h2>
              <a className="button" href="/contacto/">{page.cta}</a>
              <p>{page.microcopy}</p>
            </div>
          </div>
        </div>
      </section>
    </CostaShell>
  );
}
