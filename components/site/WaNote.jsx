import { whatsapp } from '@/lib/contact';

// A quiet second option under a main call to action: "¿Prefieres escribir? Pregúntanos por WhatsApp".
// `k` picks the pre-filled message (lib/contact.js); `where` names the spot in analytics.
export default function WaNote({ k = 'general', where, lead = '¿Prefieres escribir?', label = 'Pregúntanos por WhatsApp', align = 'center', style }) {
  return (
    <p style={{ margin: '16px 0 0', fontSize: '15px', lineHeight: 1.5, color: '#4B5D69', textAlign: align, ...style }}>
      {lead}{' '}
      <a href={whatsapp(k)} target="_blank" rel="noopener" data-wa={where} style={{ color: '#18648A', fontWeight: 500, textUnderlineOffset: '3px' }}>
        {label}
      </a>
    </p>
  );
}
