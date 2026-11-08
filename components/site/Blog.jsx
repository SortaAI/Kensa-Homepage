import CostaShell from './CostaShell';
import { G } from '@/lib/gradients';
import resourceIcons from '@/lib/resourceIcons.json';

// The resource library ("Recursos"): guides and free tools for clinic reception teams,
// ported from the old Sorta México library and rebranded.

const FEATURED = 'nom-004-expediente-clinico';

function ResourceIcon({ slug, size = 64 }) {
  const paths = resourceIcons.articles[slug] || resourceIcons.fallback;
  return (
    <svg data-resource-icon={slug} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

function fecha(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  return `${d} de ${meses[m - 1]} de ${y}`;
}

// All entries with their group and a gradient, in library order
export function flatEntries(index) {
  let n = 0;
  return index.groups.flatMap((g) => g.entries.map((e) => ({ ...e, group: g.id, groupTitle: g.title, bg: G[n++ % G.length] })));
}

function PostCard({ e, big = false }) {
  return (
    <a href={`/recursos/${e.slug}/`} className="kn-post-card kn-card">
      <div className="kn-post-art" style={{ background: e.bg, aspectRatio: big ? '16 / 10' : '16 / 9', alignItems: 'center', justifyContent: 'center' }}>
        <span
          style={{
            width: big ? '144px' : '112px',
            height: big ? '144px' : '112px',
            borderRadius: big ? '36px' : '28px',
            background: '#FFFFFF',
            color: '#18648A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 20px rgba(14,42,59,0.08)',
          }}
        >
          <ResourceIcon slug={e.slug} size={big ? 80 : 64} />
        </span>
      </div>
      <div style={{ padding: big ? '26px 28px 28px' : '20px 22px 24px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
        <span style={{ fontSize: '13px', color: '#5F707B' }}>
          {e.groupTitle} · <time dateTime={e.iso}>{fecha(e.iso)}</time>
        </span>
        <h3 style={{ margin: 0, fontSize: big ? 'clamp(24px,2.6vw,32px)' : '19px', lineHeight: 1.25, letterSpacing: '-0.01em', fontWeight: 600 }}>
          {e.title}
        </h3>
        <p style={{ margin: 0, fontSize: big ? '16px' : '15px', lineHeight: 1.6, color: '#4B5D69' }}>{e.summary}</p>
      </div>
    </a>
  );
}

export function BlogIndex({ index }) {
  const all = flatEntries(index);
  const featured = all.find((e) => e.slug === FEATURED) || all[0];
  return (
    <CostaShell>
      <section className="wrap" style={{ paddingTop: '80px' }}>
        <span className="kn-pill">Blog y recursos</span>
        <h1 style={{ margin: '20px 0 0', fontSize: 'clamp(40px,6vw,72px)', lineHeight: 1.02, letterSpacing: '-0.035em', fontWeight: 600, maxWidth: '900px' }}>
          Ideas para tu clínica. <span style={{ color: '#18648A' }}>Herramientas para hoy</span>
          <span style={{ color: '#E0987A' }}>.</span>
        </h1>
        <p style={{ margin: '20px 0 0', fontSize: '18px', lineHeight: 1.6, color: '#4B5D69', maxWidth: '620px' }}>
          Plantillas gratuitas, guías de recepción y criterios para elegir software. Empieza por el pendiente que quieres resolver.
        </p>
        <nav aria-label="Categorías" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '32px' }}>
          {index.groups.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="kn-chip">
              {g.title}
              <span>{g.entries.length}</span>
            </a>
          ))}
        </nav>
      </section>

      <section className="wrap kn-prose" style={{ paddingTop: '40px' }} aria-label="Kensa para tu clínica">
        <h2>Kensa para tu clínica</h2>
        <p>Explora el flujo de recepción para <a href="/para/consultorios-medicos/">consultorios médicos</a> y <a href="/para/clinicas-dentales/">clínicas dentales</a>.</p>
      </section>

      <section className="wrap" style={{ paddingTop: '48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '24px' }}>
          <PostCard e={featured} big />
          <div
            style={{
              borderRadius: '24px',
              background: '#0E2A3B',
              color: '#DCE6EC',
              padding: 'clamp(26px,3vw,40px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '28px',
            }}
          >
            <div>
              <h2 style={{ margin: 0, color: '#FFFFFF', fontSize: 'clamp(26px,3vw,36px)', lineHeight: 1.12, letterSpacing: '-0.02em', fontWeight: 600 }}>
                Descargas gratis, sin registro<span style={{ color: '#E0987A' }}>.</span>
              </h2>
              <p style={{ margin: '14px 0 0', fontSize: '16px', lineHeight: 1.6 }}>
                Formatos en Word y PDF, agendas en Excel y checklists listas para imprimir. Úsalas hoy, con o sin Kensa.
              </p>
            </div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
              {(index.groups.find((g) => g.id === 'herramientas')?.entries || []).slice(0, 4).map((e) => (
                <li key={e.slug} style={{ borderTop: '1px solid rgba(255,255,255,0.14)' }}>
                  <a
                    href={`/recursos/${e.slug}/`}
                    style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', padding: '14px 0', color: '#FFFFFF', textDecoration: 'none', fontSize: '15px' }}
                  >
                    <span>{e.title}</span>
                    <span aria-hidden="true" style={{ color: '#9DB4C2' }}>
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {index.groups.map((g) => (
        <section key={g.id} id={g.id} data-rv="1" className="wrap" style={{ paddingTop: '88px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '12px 40px' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,40px)', letterSpacing: '-0.03em', fontWeight: 600 }}>
              {g.title}
              <span style={{ color: '#E0987A' }}>.</span>
            </h2>
            <p style={{ margin: 0, fontSize: '16px', color: '#4B5D69', maxWidth: '440px' }}>{g.intro}</p>
          </div>
          <div style={{ marginTop: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
            {all
              .filter((e) => e.group === g.id)
              .map((e) => (
                <PostCard key={e.slug} e={e} />
              ))}
          </div>
        </section>
      ))}

      <Cierre />
    </CostaShell>
  );
}

function Cierre() {
  return (
    <section data-rv="1" className="wrap" style={{ paddingTop: '112px', paddingBottom: '112px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,42px)', letterSpacing: '-0.03em', fontWeight: 600 }}>
          Lleva la guía a tu recepción<span style={{ color: '#E0987A' }}>.</span>
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <a
            href="/contacto/"
            className="kn-btn"
            style={{ textDecoration: 'none', fontWeight: 500, fontSize: '16px', padding: '16px 28px', borderRadius: '999px', background: '#18648A', color: '#FFFFFF' }}
          >
            Agenda una demostración
          </a>
          <a
            href="/funciones/"
            className="kn-ghost"
            style={{ textDecoration: 'none', fontWeight: 500, fontSize: '16px', padding: '15px 26px', borderRadius: '999px', border: '1px solid #D6CBC4', color: '#0E2A3B', background: '#FFFFFF' }}
          >
            Todas las funciones
          </a>
        </div>
      </div>
    </section>
  );
}

// Old labels are often all caps; show them in sentence case, keeping proper names.
function label(t) {
  if (t !== t.toUpperCase()) return t;
  const s = t.charAt(0) + t.slice(1).toLowerCase();
  return s.replace(/whatsapp/gi, 'WhatsApp').replace(/nom-004/gi, 'NOM-004').replace(/méxico/gi, 'México').replace(/excel/gi, 'Excel');
}

export function BlogPost({ post, index }) {
  const all = flatEntries(index);
  const me = all.find((e) => e.slug === post.slug);
  const more = all.filter((e) => e.slug !== post.slug && e.group === me?.group).concat(all.filter((e) => e.group !== me?.group)).slice(0, 3);
  // Guides can carry FAQs (post.faqs: [[question, answer], ...]); they are shown at the end
  // and repeated as FAQPage structured data by the page, so both always match.
  const faqs = post.faqs || [];
  const tocItems = faqs.length ? [...post.toc, ['#preguntas-frecuentes', 'Preguntas frecuentes']] : post.toc;
  const toc = tocItems.map(([href, label]) => (
    <a key={href} href={href}>
      {label}
    </a>
  ));
  // The old "related" block opens with an all-caps kicker; the heading carries it fine without one.
  const related = post.related.replace(/^\s*<p>[^<]*<\/p>\s*/, '');
  const meta = post.metaText.filter((t) => t && !/^Equipo/.test(t));
  return (
    <CostaShell>
      <section className="wrap" style={{ paddingTop: '72px' }}>
        <nav className="kn-crumbs" aria-label="Migas de pan">
          <a href="/">Inicio</a>
          <span aria-hidden="true">/</span>
          <a href="/recursos/">Recursos</a>
          {me ? (
            <>
              <span aria-hidden="true">/</span>
              <a href={`/recursos/#${me.group}`}>{me.groupTitle}</a>
            </>
          ) : null}
        </nav>
        <div style={{ marginTop: '28px', borderRadius: '28px', background: me?.bg || G[0], padding: 'clamp(28px,5vw,64px)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', color: '#18648A' }}>
            <span style={{ display: 'inline-flex', padding: '14px', borderRadius: '20px', background: '#FFFFFF' }}>
              <ResourceIcon slug={post.slug} size={36} />
            </span>
            <span className="kn-pill" style={{ background: '#FFFFFF' }}>{label(post.label)}</span>
          </div>
          <h1 style={{ margin: '20px 0 0', fontSize: 'clamp(32px,4.6vw,56px)', lineHeight: 1.06, letterSpacing: '-0.03em', fontWeight: 600, maxWidth: '900px' }}>
            {post.title}
          </h1>
          <p style={{ margin: '18px 0 0', fontSize: '18px', lineHeight: 1.6, color: '#33495A', maxWidth: '700px' }}>{post.lead}</p>
          <p style={{ margin: '22px 0 0', fontSize: '14px', color: '#4B5D69', display: 'flex', flexWrap: 'wrap', gap: '6px 18px' }}>
            <a href="/quien-lo-hace/" rel="author" style={{ color: '#0E2A3B', fontWeight: 500 }}>
              Equipo de Kensa
            </a>
            {meta.map((t) => (
              <span key={t}>{t}</span>
            ))}
            {post.dates.map((d) => (
              <time key={d.iso + d.text} dateTime={d.iso}>
                {d.text}
              </time>
            ))}
          </p>
          {post.actions ? <div className="kn-prose kn-hero-actions" style={{ marginTop: '24px' }} dangerouslySetInnerHTML={{ __html: post.actions }} /> : null}
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: '56px' }}>
        <div className="kn-article-grid">
          <aside className="kn-toc" aria-label="En esta guía">
            <p>En esta guía</p>
            <nav>{toc}</nav>
          </aside>
          <div>
            <details className="kn-toc-sm">
              <summary>En esta guía</summary>
              <nav>{toc}</nav>
            </details>
            <article className="kn-prose" dangerouslySetInnerHTML={{ __html: post.body }} />
            {faqs.length ? (
              <section className="kn-prose kn-faq" aria-labelledby="preguntas-frecuentes" style={{ marginTop: '56px' }}>
                <h2 id="preguntas-frecuentes">Preguntas frecuentes</h2>
                {faqs.map(([q, a]) => (
                  <details key={q}>
                    <summary>{q}</summary>
                    <p>{a}</p>
                  </details>
                ))}
              </section>
            ) : null}
            {related ? (
              <div
                className="kn-prose kn-related"
                style={{ marginTop: '56px', borderRadius: '24px', background: '#0E2A3B', color: '#DCE6EC', padding: 'clamp(26px,4vw,40px)', maxWidth: '720px' }}
                dangerouslySetInnerHTML={{ __html: related }}
              />
            ) : null}
          </div>
        </div>
      </section>

      <section data-rv="1" className="wrap" style={{ paddingTop: '104px' }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(26px,3vw,36px)', letterSpacing: '-0.03em', fontWeight: 600 }}>
          Sigue leyendo<span style={{ color: '#E0987A' }}>.</span>
        </h2>
        <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
          {more.map((e) => (
            <PostCard key={e.slug} e={e} />
          ))}
        </div>
      </section>
      <Cierre />
    </CostaShell>
  );
}
