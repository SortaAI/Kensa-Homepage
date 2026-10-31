import CostaShell from '@/components/site/CostaShell';

export const metadata = { title: { absolute: 'Página no encontrada | Kensa' }, robots: { index: false, follow: true } };

const LINKS = [
  ['/funciones/', 'Funciones', 'WhatsApp, agenda, formatos y expediente.'],
  ['/precios/', 'Precios', 'El piloto de 45 días para clínicas fundadoras.'],
  ['/recursos/', 'Blog y recursos', 'Guías y plantillas gratis para recepción.'],
  ['/contacto/', 'Contacto', 'Agenda una demostración.'],
];

export default function NotFound() {
  return (
    <CostaShell>
      <section className="wrap" style={{ paddingTop: '96px', paddingBottom: '120px' }}>
        <span className="kn-pill">Error 404</span>
        <h1 style={{ margin: '20px 0 0', fontSize: 'clamp(40px,6vw,64px)', lineHeight: 1.04, letterSpacing: '-0.035em', fontWeight: 600 }}>
          Esta página no existe<span style={{ color: '#E0987A' }}>.</span>
        </h1>
        <p style={{ margin: '18px 0 0', fontSize: '18px', lineHeight: 1.6, color: '#4B5D69', maxWidth: '560px' }}>
          Quizá cambió de dirección. Esto es lo que más buscan las clínicas:
        </p>
        <div style={{ marginTop: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))', gap: '16px' }}>
          {LINKS.map(([href, name, line]) => (
            <a
              key={href}
              href={href}
              className="kn-card"
              style={{ textDecoration: 'none', color: '#0E2A3B', background: '#FFFFFF', border: '1px solid #E8DFDA', borderRadius: '20px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '6px' }}
            >
              <span style={{ fontSize: '17px', fontWeight: 600 }}>{name}</span>
              <span style={{ fontSize: '14px', lineHeight: 1.5, color: '#4B5D69' }}>{line}</span>
            </a>
          ))}
        </div>
      </section>
    </CostaShell>
  );
}
