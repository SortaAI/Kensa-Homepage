import CostaShell from './CostaShell';

// Privacy notice and terms. The text is still a draft awaiting legal review, so the
// draft notice and its [CONFIRMAR] markers stay visible.
export default function LegalPage({ doc }) {
  const toc = doc.toc.map(([href, label]) => (
    <a key={href} href={href}>
      {label}
    </a>
  ));
  return (
    <CostaShell>
      <section className="wrap" style={{ paddingTop: '72px', paddingBottom: '40px' }}>
        <nav className="kn-crumbs" aria-label="Migas de pan">
          <a href="/">Inicio</a>
          <span aria-hidden="true">/</span>
          <span>{doc.title}</span>
        </nav>
        <h1
          style={{
            margin: '20px 0 0',
            fontSize: 'clamp(36px,5vw,56px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            fontWeight: 600,
            maxWidth: '820px',
          }}
        >
          {doc.title}
          <span style={{ color: '#E0987A' }}>.</span>
        </h1>
        <p style={{ margin: '18px 0 0', fontSize: '18px', lineHeight: 1.6, color: '#4B5D69', maxWidth: '680px' }}>
          {doc.lead}
        </p>
        <p style={{ margin: '18px 0 0', fontSize: '14px', color: '#5F707B', display: 'flex', flexWrap: 'wrap', gap: '6px 20px' }}>
          {doc.metaText.slice(1).map((t) => (
            <span key={t}>{t}</span>
          ))}
          {doc.dates.map((d) => (
            <time key={d.iso + d.text} dateTime={d.iso}>
              {d.text}
            </time>
          ))}
        </p>
        {doc.draft ? (
          <div className="kn-draft kn-prose" role="note" style={{ marginTop: '32px', maxWidth: '900px' }}>
            <span aria-hidden="true" style={{ color: '#9E4A29', display: 'flex', paddingTop: '2px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
                <path d="M12 9v4M12 17h.01" />
              </svg>
            </span>
            <div dangerouslySetInnerHTML={{ __html: doc.draft }} />
          </div>
        ) : null}
      </section>
      <section className="wrap" style={{ paddingBottom: '112px' }}>
        <div className="kn-article-grid">
          <aside className="kn-toc" aria-label="Contenido">
            <p>Contenido</p>
            <nav>{toc}</nav>
          </aside>
          <div>
            <details className="kn-toc-sm">
              <summary>Contenido</summary>
              <nav>{toc}</nav>
            </details>
            <article className="kn-prose" dangerouslySetInnerHTML={{ __html: doc.body }} />
          </div>
        </div>
      </section>
    </CostaShell>
  );
}
