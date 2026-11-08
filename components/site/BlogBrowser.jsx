'use client';
// The resource library browser on /recursos/: topic tiles, search and a compact list.
// Every guide is rendered in the HTML (for readers without JS and for search engines);
// the filters only hide what doesn't match.
import React from 'react';
import resourceIcons from '@/lib/resourceIcons.json';

const GROUP_ICONS = {
  herramientas: ['M12 3v12M7 10l5 5 5-5', 'M4 17v3h16v-3'],
  recepcion: ['M3 5h18v16H3ZM3 10h18M8 3v4M16 3v4', 'M8 14h3M8 17h6'],
  documentos: ['M14 2H5v20h14V7Z', 'M14 2v5h5M8 12h8M8 16h5'],
  evaluacion: ['M12 3v18M5 21h14', 'M3 7h7l-3.5 7ZM14 7h7l-3.5 7ZM3 14a3.5 2 0 0 0 7 0M14 14a3.5 2 0 0 0 7 0M7 7l5-3 5 3'],
};

export function Icon({ paths, size = 24, stroke = 1.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function fecha(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  return `${d} ${meses[m - 1]} ${y}`;
}

const PREVIEW = 6; // guides per topic in the "Todas" view

function Row({ e, hidden, isNew }) {
  return (
    <li hidden={hidden} style={{ listStyle: 'none' }}>
      <a href={`/recursos/${e.slug}/`} className="kn-row kn-card">
        <span className="kn-row-icon" style={{ background: e.bg }}>
          <Icon paths={resourceIcons.articles[e.slug] || resourceIcons.fallback} size={26} />
        </span>
        <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: 0 }}>
          <span className="kn-row-meta">
            {isNew ? <span className="kn-new">Nuevo</span> : null}
            <time dateTime={e.iso}>{fecha(e.iso)}</time>
          </span>
          <span className="kn-row-title">{e.title}</span>
          <span className="kn-row-sum">{e.summary}</span>
        </span>
      </a>
    </li>
  );
}

export default function BlogBrowser({ groups, entries, downloadsCount, featured }) {
  const [group, setGroup] = React.useState('todas');
  const [q, setQ] = React.useState('');
  const listRef = React.useRef(null);

  // Old links like /recursos/#documentos open that topic.
  React.useEffect(() => {
    const h = window.location.hash.slice(1);
    if (groups.some((g) => g.id === h)) setGroup(h);
  }, [groups]);

  const words = norm(q).split(/\s+/).filter(Boolean);
  const matches = (e) => {
    if (group !== 'todas' && e.group !== group) return false;
    if (!words.length) return true;
    const text = norm(`${e.title} ${e.summary} ${e.groupTitle}`);
    return words.every((w) => text.includes(w));
  };
  const shown = entries.filter(matches).length;
  // "Nuevo": published within a week of the newest guide (fixed at build time).
  const newest = entries.map((e) => e.iso).filter(Boolean).sort().pop() || '';
  const cutoff = newest ? new Date(Date.parse(newest) - 7 * 864e5).toISOString().slice(0, 10) : '';
  const browsing = group === 'todas' && !words.length;

  function pick(id, ev) {
    if (ev) ev.preventDefault();
    setGroup(id);
    try {
      history.replaceState(null, '', id === 'todas' ? location.pathname : `#${id}`);
    } catch {}
    const top = listRef.current?.getBoundingClientRect().top;
    if (ev && top !== undefined && (top < 0 || top > window.innerHeight * 0.6)) {
      listRef.current.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }
  }

  return (
    <>
      {/* Search sits in the hero */}
      <div className="kn-search">
        <Icon paths={['M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14ZM21 21l-5-5']} size={20} />
        <label htmlFor="buscar-recursos" className="kn-sr">Buscar guías y plantillas</label>
        <input
          id="buscar-recursos"
          type="search"
          placeholder="Busca: NOM-004, consentimiento, WhatsApp, Excel…"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            if (e.target.value && group !== 'todas') setGroup('todas');
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') listRef.current?.scrollIntoView({ block: 'start' });
          }}
        />
      </div>
      <p style={{ margin: '14px 0 0', fontSize: '14px', color: '#5F707B' }}>
        {entries.length} guías · {downloadsCount} plantillas descargables · gratis y sin registro
      </p>

      {/* Topic tiles */}
      <nav className="kn-topics" aria-label="Temas">
        {groups.map((g) => (
          <a key={g.id} href={`#${g.id}`} onClick={(ev) => pick(g.id, ev)} className="kn-topic kn-card" style={{ background: g.bg }}>
            <span className="kn-topic-icon">
              <Icon paths={GROUP_ICONS[g.id] || resourceIcons.fallback} size={24} />
            </span>
            <span className="kn-topic-title">{g.title}</span>
            <span className="kn-topic-intro">{g.intro}</span>
            <span className="kn-topic-count">
              {g.count} guías <span aria-hidden="true">→</span>
            </span>
          </a>
        ))}
      </nav>

      <div style={{ paddingTop: '56px' }}>{featured}</div>

      {/* Library */}
      <div ref={listRef} id="biblioteca" style={{ scrollMarginTop: '24px', paddingTop: '72px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px 32px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,40px)', letterSpacing: '-0.03em', fontWeight: 600 }}>
            Toda la biblioteca<span style={{ color: '#E0987A' }}>.</span>
          </h2>
          <p role="status" style={{ margin: 0, fontSize: '14px', color: '#5F707B' }}>
            {shown === entries.length ? `${shown} guías` : `${shown} de ${entries.length} guías`}
          </p>
        </div>
        <div className="kn-tabs" role="toolbar" aria-label="Filtrar por tema">
          {[{ id: 'todas', title: 'Todas', count: entries.length }, ...groups].map((g) => (
            <button key={g.id} type="button" aria-pressed={group === g.id} onClick={() => pick(g.id)} className="kn-tab">
              {g.title}
              <span>{g.count}</span>
            </button>
          ))}
        </div>

        {groups.map((g) => {
          const items = entries.filter((e) => e.group === g.id);
          const visible = items.filter(matches).length;
          const capped = browsing && items.length > PREVIEW;
          return (
            <section key={g.id} id={g.id} hidden={visible === 0} aria-labelledby={`t-${g.id}`} style={{ marginTop: '36px', scrollMarginTop: '24px' }}>
              <h3 id={`t-${g.id}`} className="kn-group-h">
                <span className="kn-group-dot" aria-hidden="true">
                  <Icon paths={GROUP_ICONS[g.id] || resourceIcons.fallback} size={18} stroke={1.8} />
                </span>
                {g.title}
              </h3>
              <ul className={capped ? 'kn-rows kn-capped' : 'kn-rows'}>
                {items.map((e, i) => (
                  <Row key={e.slug} e={e} isNew={e.iso >= cutoff} hidden={!matches(e) || (capped && i >= PREVIEW)} />
                ))}
              </ul>
              {capped ? (
                <a href={`#${g.id}`} onClick={(ev) => pick(g.id, ev)} className="kn-more">
                  Ver las {items.length} guías de {g.title.charAt(0).toLowerCase() + g.title.slice(1)} <span aria-hidden="true">→</span>
                </a>
              ) : null}
            </section>
          );
        })}

        {shown === 0 ? (
          <div style={{ marginTop: '32px', padding: '28px', borderRadius: '20px', background: '#FFFFFF', border: '1px solid #E8DFDA' }}>
            <p style={{ margin: 0, fontWeight: 600 }}>No encontramos guías con “{q}”.</p>
            <p style={{ margin: '6px 0 0', color: '#4B5D69' }}>
              Prueba con otra palabra o{' '}
              <button type="button" className="kn-linkbtn" onClick={() => { setQ(''); setGroup('todas'); }}>
                ve toda la biblioteca
              </button>
              .
            </p>
          </div>
        ) : null}
      </div>
    </>
  );
}
