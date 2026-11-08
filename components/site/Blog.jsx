import CostaShell from './CostaShell';
import { G } from '@/lib/gradients';
import resourceIcons from '@/lib/resourceIcons.json';
import BlogBrowser from './BlogBrowser';

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

// Free templates, shown with their file formats so readers find downloads fast.
const DOWNLOADS = [
  ['historia-clinica-formato-nom-004', 'Historia clínica NOM-004', 'Word · PDF'],
  ['consentimiento-informado-formato', 'Consentimiento informado', 'Word · PDF'],
  ['aviso-privacidad-consultorio-medico', 'Aviso de privacidad para consultorio', 'Word · PDF'],
  ['ficha-identificacion-paciente', 'Ficha de identificación del paciente', 'Word · PDF'],
  ['agenda-citas-medicas-excel', 'Agenda de citas médicas', 'Excel'],
  ['verificacion-sanitaria-consultorio-checklist', 'Checklist de verificación sanitaria', 'PDF'],
  ['mensajes-confirmar-citas-whatsapp', 'Mensajes para confirmar citas', 'Copiar'],
];

export function BlogIndex({ index }) {
  const all = flatEntries(index);
  const featured = all.find((e) => e.slug === FEATURED) || all[0];
  const groups = index.groups.map((g, i) => ({ id: g.id, title: g.title, intro: g.intro, count: g.entries.length, bg: G[(i * 3 + 1) % G.length] }));
  const downloads = DOWNLOADS.filter(([slug]) => all.some((e) => e.slug === slug));
  return (
    <CostaShell>
      <section className="wrap" style={{ paddingTop: '64px' }}>
        <span className="kn-pill">Blog y recursos</span>
        <h1 style={{ margin: '18px 0 0', fontSize: 'clamp(36px,5.2vw,64px)', lineHeight: 1.04, letterSpacing: '-0.035em', fontWeight: 600, maxWidth: '880px' }}>
          Guías y plantillas para <span style={{ color: '#18648A' }}>tu clínica</span>
          <span style={{ color: '#E0987A' }}>.</span>
        </h1>
        <p style={{ margin: '16px 0 28px', fontSize: '18px', lineHeight: 1.6, color: '#4B5D69', maxWidth: '640px' }}>
          Expediente y NOM-004, agenda, WhatsApp y cómo elegir software. Encuentra lo que necesitas en segundos.
        </p>
        <BlogBrowser groups={groups} entries={all} downloadsCount={downloads.length} featured={
          <div className="kn-feature-grid">
            <a href={`/recursos/${featured.slug}/`} className="kn-feature kn-card" style={{ background: featured.bg }}>
              <span className="kn-feature-tag">Guía destacada</span>
              <span className="kn-feature-icon">
                <ResourceIcon slug={featured.slug} size={44} />
              </span>
              <span className="kn-feature-title">{featured.title}</span>
              <span className="kn-feature-sum">{featured.summary}</span>
              <span className="kn-feature-cta">
                Leer la guía <span aria-hidden="true">→</span>
              </span>
            </a>
            <div className="kn-downloads">
              <h2>
                Descargas gratis<span style={{ color: '#E0987A' }}>.</span>
              </h2>
              <p>Formatos y plantillas listos para usar hoy, con o sin Kensa. Sin registro.</p>
              <ul>
                {downloads.map(([slug, name, fmt]) => (
                  <li key={slug}>
                    <a href={`/recursos/${slug}/`}>
                      <span>{name}</span>
                      <span className="kn-fmt">{fmt}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        } />
      </section>

      <section className="wrap" style={{ paddingTop: '72px' }} aria-label="Kensa para tu clínica">
        <div className="kn-for">
          <p>
            <strong>¿Quieres ver cómo se resuelve en tu clínica?</strong> Explora el flujo de recepción para{' '}
            <a href="/para/consultorios-medicos/">consultorios médicos</a> y <a href="/para/clinicas-dentales/">clínicas dentales</a>.
          </p>
        </div>
      </section>

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
