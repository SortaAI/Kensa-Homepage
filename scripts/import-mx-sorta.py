"""Convert MX-Sorta legal pages and resource posts into Kensa content JSON.

Usage: python3 convert_mx.py <mx repo> <kensa repo>
Writes <kensa>/content/legal/*.json and <kensa>/content/recursos/*.json + index.json.
"""
import json, re, sys
from pathlib import Path
from bs4 import BeautifulSoup, Comment

MX, KENSA = Path(sys.argv[1]), Path(sys.argv[2])

LINKS = {
    '/': '/', '/recursos': '/recursos/', '/nosotros': '/quien-lo-hace/', '/contacto': '/contacto/',
    '/precios': '/precios/', '/como-funciona': '/como-funciona/', '/privacidad': '/privacidad/',
    '/terminos': '/terminos/', '/seguridad': '/seguridad/', '/preguntas-frecuentes': '/precios/',
    '/producto/agenda': '/funciones/agenda/', '/producto/whatsapp': '/funciones/asistente-de-whatsapp/',
    '/producto/formatos-medicos': '/funciones/biblioteca-de-documentos/',
    '/producto/documentos-firmados': '/funciones/firmar-y-bloquear/',
    '/soluciones/recepcion-clinicas': '/funciones/',
    'https://app.getsorta.io': 'https://app.holakensa.com', 'https://mx.getsorta.io': 'https://holakensa.com',
    'mailto:hola@getsorta.io': 'mailto:contacto@holakensa.com',
    'mailto:legal@getsorta.io': 'mailto:legal@holakensa.com',
    'mailto:privacidad@getsorta.io': 'mailto:privacidad@holakensa.com',
}
# Old product screenshots -> Kensa equivalents (src, width, height)
IMAGES = {
    '/assets/homepage/02-mensajes-whatsapp.png': ('/img/combo-conecta.webp', 1920, 1440),
    '/assets/homepage/06-recepcion-expediente.png': ('/img/laptop-preparar-visitas-fondo.webp', 1920, 1440),
    '/assets/downloads/ficha-identificacion-paciente-preview.png': ('/recursos/descargas/ficha-identificacion-paciente-preview.webp', 935, 1210),
}
OFFER = [
    ('Clínicas fundadoras: 10 lugares, 30 días sin costo y acceso a toda la aplicación. Tu precio fundador quedará fijo para tu clínica cuando lo definamos.',
     'Clínicas fundadoras: un piloto de 45 días sin costo con Kensa completo. Después, un precio fundador reducido por sede, fijo mientras sigas con Kensa.'),
    ('Clínicas fundadoras: 10 lugares, 30 días sin costo y acceso completo. Precio fundador fijo una vez definido.',
     'Clínicas fundadoras: piloto de 45 días sin costo y precio fundador reducido mientras sigas con Kensa.'),
    ('Conocer los 30 días sin costo', 'Conocer el piloto de 45 días'),
    ('una prueba de 30 días sin costo para clínicas fundadoras', 'un piloto de 45 días sin costo para clínicas fundadoras'),
    ('/funciones/agenda/#lista-de-espera', '/funciones/lista-de-espera/'),
]
KEEP_CLASSES = {
    'message-example', 'resource-download', 'resource-download--preview', 'resource-download__copy',
    'resource-download__actions', 'article-callout', 'article-callout__icon', 'resource-summary',
    'article-checklist', 'legal-placeholder', 'legal-caps', 'legal-table-wrap', 'legal-table',
    'resource-table-scroll', 'guide-product-image', 'resource-workflow', 'resource-example',
    'resource-audience', 'resource-statuses', 'resource-flow', 'resource-next-step', 'resource-companions',
    'vendor-comparison', 'comparison-sources', 'agenda-file-preview', 'related-guides', 'button', 'text-link',
    'message-jumps',
}


def rebrand(html):
    html = html.replace('mx.getsorta.io', 'holakensa.com').replace('app.getsorta.io', 'app.holakensa.com')
    html = html.replace('getsorta.io', 'holakensa.com')
    # The legal entity stays Sorta LLC; Kensa is the brand it operates.
    html = re.sub(r'\s?\("<strong>Sorta</strong>"', ', que opera la marca Kensa ("<strong>Kensa</strong>"', html)
    html = html.replace('Sorta LLC', '\0LLC')
    html = html.replace('SORTA', 'KENSA').replace('Sorta', 'Kensa').replace('sorta', 'kensa')
    html = html.replace('\0LLC', 'Sorta LLC')
    # Kensa's founding-clinic offer replaces Sorta's old one
    for a, b in OFFER:
        html = html.replace(a, b)
    return html


def map_href(h):
    if h.startswith('#'):
        return h
    base, _, frag = h.partition('#')
    base = base.split('?')[0]
    if base.startswith('/assets/downloads/'):
        base = '/recursos/descargas/' + base.rsplit('/', 1)[1]
    elif base.startswith('/recursos/'):
        base = base.rstrip('/') + '/'
    elif base in LINKS:
        base = LINKS[base]
    elif h.startswith('mailto:') and h in LINKS:
        base = LINKS[h]
    return base + ('#' + frag if frag else '')


def clean(node):
    for c in node.find_all(string=lambda t: isinstance(t, Comment)):
        c.extract()
    for b in node.select('button, script, .copy-status, .legal-lang-switch'):
        b.decompose()
    for el in node.find_all(True):
        attrs = {}
        for k, v in el.attrs.items():
            if k == 'class':
                keep = [c for c in v if c in KEEP_CLASSES]
                if keep:
                    attrs['class'] = keep
            elif k in ('id', 'href', 'src', 'alt', 'width', 'height', 'datetime', 'colspan', 'rowspan', 'scope', 'download', 'loading', 'role', 'aria-label', 'target', 'rel', 'viewBox', 'd', 'fill', 'stroke', 'stroke-width', 'stroke-linecap', 'stroke-linejoin', 'cx', 'cy', 'r', 'points', 'x', 'y', 'rx'):
                attrs[k] = v
        el.attrs = attrs
        if el.name == 'a' and el.get('href'):
            el['href'] = map_href(el['href'])
            if el['href'].startswith('http') and 'holakensa.com' not in el['href']:
                el['target'] = '_blank'
                el['rel'] = 'noopener'
        if el.name == 'img' and el.get('src') in IMAGES:
            src, w, h = IMAGES[el['src']]
            el['src'], el['width'], el['height'] = src, str(w), str(h)
            el['loading'] = 'lazy'
    return node


def text(el):
    return re.sub(r'\s+', ' ', el.get_text(' ', strip=True)) if el else ''


def page(path, legal=False):
    soup = BeautifulSoup(path.read_text(), 'html.parser')
    desc = soup.find('meta', attrs={'name': 'description'})
    main = soup.find('main')
    hero = main.find('section', class_='article-hero')
    meta = hero.find(class_='article-meta')
    times = meta.find_all('time') if meta else []
    toc = main.select('.article-toc nav a')
    body = main.find(class_='article-body')
    related = main.find(class_='article-related')
    actions = hero.find(class_='resource-hero-actions')
    out = {
        'slug': path.stem,
        'label': text(hero.find(class_='section-label')),
        'title': text(hero.find('h1')),
        'lead': text(hero.find(class_='article-hero__lead')),
        'description': desc['content'] if desc else '',
        'dates': [{'iso': t.get('datetime', ''), 'text': text(t)} for t in times],
        'metaText': [text(s) for s in meta.find_all('span', recursive=False)] if meta else [],
        'toc': [[a['href'], text(a)] for a in toc],
        'actions': str(clean(actions)) if actions else '',
        'body': str(clean(body).decode_contents()),
        'related': str(clean(related).decode_contents()) if related else '',
    }
    if legal:
        banner = main.find(class_='legal-draft-banner')
        out['draft'] = str(clean(banner.find('div')).decode_contents()) if banner else ''
    def deep(v):
        if isinstance(v, str):
            return rebrand(v)
        if isinstance(v, list):
            return [deep(x) for x in v]
        if isinstance(v, dict):
            return {k: deep(x) for k, x in v.items()}
        return v
    return deep(out)


(KENSA / 'content/legal').mkdir(parents=True, exist_ok=True)
(KENSA / 'content/recursos').mkdir(parents=True, exist_ok=True)
def drop_leadsy(doc):
    # The Kensa site does not load Leadsy, so the notice should not describe it.
    b = doc['body']
    b = re.sub(r'<p>En el sitio público de México, <strong>Leadsy</strong>.*?</p>\s*', '', b, flags=re.S)
    b = re.sub(r'<tr><td><strong>Leadsy</strong>.*?</tr>\s*', '', b, flags=re.S)
    b = re.sub(r'<p>La información clínica de pacientes no se comparte con Leadsy.*?</p>\s*', '', b, flags=re.S)
    b = re.sub(r'<li><strong>Identificación de visitas empresariales</strong>.*?</li>\s*', '', b, flags=re.S)
    b = b.replace('Google Analytics, Microsoft Clarity y Leadsy se cargan', 'Google Analytics y Microsoft Clarity se cargan')
    b = b.replace(' Al incorporar Leadsy solicitamos una nueva elección, incluso si antes aceptaste la analítica.', '')
    assert 'Leadsy' not in b, b[b.find('Leadsy') - 200:b.find('Leadsy') + 100]
    doc['body'] = b
    return doc


for name in ['privacidad', 'terminos']:
    doc = page(MX / f'{name}.html', legal=True)
    if name == 'privacidad':
        doc = drop_leadsy(doc)
    (KENSA / f'content/legal/{name}.json').write_text(json.dumps(doc, ensure_ascii=False, indent=1))

# Resource library: groups and entries in the old index order
idx = BeautifulSoup((MX / 'recursos.html').read_text(), 'html.parser').find('main')
groups = []
for g in idx.select('section.library-group'):
    head = g.find(class_='library-group__heading')
    entries = []
    for e in g.select('article.library-entry'):
        a = e.find('h3').find('a')
        entries.append({'slug': a['href'].rstrip('/').rsplit('/', 1)[1], 'title': text(a),
                        'summary': text(e.select('div > p')[-1]), 'meta': text(e.find(class_='library-entry__meta')),
                        'iso': e.find('time')['datetime'] if e.find('time') else ''})
    groups.append({'id': g['id'], 'title': text(head.find('h2')), 'intro': text(head.find('h2').find_next_sibling('p')), 'entries': entries})
(KENSA / 'content/recursos/index.json').write_text(rebrand(json.dumps({'groups': groups}, ensure_ascii=False, indent=1)))

posts = sorted((MX / 'recursos').glob('*.html'))
for p in posts:
    (KENSA / f'content/recursos/{p.stem}.json').write_text(json.dumps(page(p), ensure_ascii=False, indent=1))
print(len(posts), 'posts;', sum(len(g['entries']) for g in groups), 'in index')
