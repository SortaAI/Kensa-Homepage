# Kensa · sitio web

El sitio público de Kensa (holakensa.com). Es una copia fiel de las páginas diseñadas en el lienzo de diseño de Kensa, exportada como un sitio estático: HTML, CSS y JS que cualquier hosting puede servir.

## Correr y publicar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # escribe el sitio completo en out/
```

`out/` es lo que se publica. Funciona en Vercel, Netlify, Cloudflare Pages, GitHub Pages o cualquier servidor de archivos estáticos. En Vercel o Netlify basta con conectar el repositorio: el comando de build es `npm run build` y la carpeta de salida es `out`.

## Páginas

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/funciones/` | Funciones (los 6 pasos) |
| `/como-funciona/` | Cómo funciona |
| `/precios/` | Precios |
| `/seguridad/` | Seguridad y privacidad |
| `/contacto/` | Contacto (demo y clínicas fundadoras) |
| `/quien-lo-hace/` | Quién lo hace |
| `/funciones/lista-de-espera/` | Lista de espera |
| `/recursos/` | Blog y recursos: guías y descargas gratuitas para recepción |
| `/recursos/<guía>/` | Una página por guía (15), con sus descargas en `/recursos/descargas/` |
| `/privacidad/` | Aviso de privacidad (borrador) |
| `/terminos/` | Términos de servicio (borrador) |
| `/funciones/<función>/` | Una página por función: asistente-de-whatsapp, mensajes, agenda, preparar-visitas, biblioteca-de-documentos, tus-propios-formatos, formatos-en-el-celular, autollenado, envios, firmar-y-bloquear, expedientes-sellados, hoy-y-pacientes, equipo-y-roles, configuracion-guiada |

## Cómo está hecho

- `components/site/`: una componente por página del lienzo, más el encabezado, la navegación, los menús y el pie de página. Se generaron a partir de los archivos del lienzo y conservan su estructura y estilos en línea, así que cada cambio de diseño se hace aquí mismo.
- `components/site/FuncionPlantilla.jsx`: la plantilla de todas las páginas de funciones. El contenido de cada función está en el objeto `D`, por `slug`.
- `lib/dc.js`: la clase base de las componentes y `link()`, que convierte los nombres de página del lienzo (por ejemplo `Precios.dc.html`) en rutas del sitio (`/precios/`). Para agregar una página, agrégala a `ROUTES`.
- `app/`: una carpeta por ruta, con su título y descripción para buscadores.
- `public/img/`: las capturas y mockups del producto.
- `content/`: el texto del blog (`content/recursos/`) y de las páginas legales (`content/legal/`), traído del sitio anterior de Sorta México (repo `SortaAI/MX-Sorta`) con `scripts/import-mx-sorta.py`, que cambia la marca a Kensa, ajusta los enlaces y la oferta de clínicas fundadoras. Las páginas los leen al compilar (`components/site/Blog.jsx`, `components/site/LegalPage.jsx`).
- Formularios: el de la portada de Inicio y la solicitud de Contacto se envían a Formspree (`lib/forms.js`). Solo muestran "Listo" cuando Formspree confirma; si falla, el visitante ve un aviso y conserva lo que escribió. Incluyen un campo trampa (`_gotcha`) contra spam.
- `components/site/CookieBanner.jsx`: el aviso de cookies. Nada opcional se carga antes de aceptar. Los IDs de Google Analytics y Microsoft Clarity están vacíos: agrega los de Kensa ahí cuando existan.

## SEO

- `content/seo/pages.json`: título (la búsqueda primero, termina en "| Kensa"), descripción, encabezado de la imagen para compartir y prioridad de cada página. `lib/seo.js` arma con eso los metadatos, la URL canónica (`https://www.holakensa.com`) y las etiquetas Open Graph/Twitter. Para una página nueva, agrégala aquí.
- `app/sitemap.js`, `app/robots.js`, `app/manifest.js` y `app/llms.txt/route.js` generan `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest` y `/llms.txt` al compilar; el blog se agrega solo.
- Datos estructurados (`lib/schema.js`): Organization, WebSite y SoftwareApplication en Inicio; FAQPage donde hay preguntas frecuentes (`lib/faqs.js`, el mismo texto que se ve en la página); BreadcrumbList en todas; BlogPosting en cada guía.
- Imágenes para compartir de 1200×630 en `public/og/`, una por página. Para regenerarlas: `node scripts/og/og.cjs` (escribe PNG en `scripts/og/out/`; conviértelas a JPG en `public/og/`).
- Íconos: `app/favicon.ico`, `app/icon.svg`, `app/apple-icon.png` (también en `/apple-touch-icon.png`) y `public/icons/`. Salen de la K del logo; si cambian los colores, vuelve a exportarlos.
- Guías nuevas del blog: un JSON en `content/recursos/` y su entrada en `content/recursos/_nuevas.json`.

## Diseño: paleta Costa

Colores tomados del logo nuevo:

| Nombre | Hex | Uso |
|---|---|---|
| Tinta | `#0E2A3B` | Texto y títulos |
| Azul Kensa | `#18648A` | Logo, botones, palabras de acento |
| Azul profundo | `#114E6C` | Botón al pasar el cursor |
| Coral | `#E0987A` | El punto del logo y los puntos finales de los títulos. Nunca como texto. |
| Arena | `#F2E9E5` | Paneles cálidos |
| Marfil | `#F9F4F0` | Fondo de las páginas |
| Niebla | `#F6F6F6` | Tarjetas neutras |
| Noche | `#0E2A3B` | Bandas oscuras |

- Logo: `public/img/kensa-logo-*.svg` y `kensa-mark-azul.svg` (también es el favicon). Se trazaron a partir de una imagen; cuando exista el SVG original del diseñador, reemplázalos.
- Tipografía: Poppins, la familia más cercana al logotipo. Los títulos terminan con el punto coral del logo.

## Movimiento

- Inicio: los fragmentos de la portada llegan una vez al cargar; los cinco trabajos de recepción se iluminan uno por uno al hacer scroll (sigue al scroll, nunca se reproduce solo).
- Funciones: la laptop fija cambia de pantalla en los pasos 1 a 5.
- En todo el sitio: las secciones aparecen suavemente al entrar, los botones y tarjetas se elevan un poco al pasar el cursor y los menús caen con suavidad.
- Solo se animan `transform` y `opacity` (y el color en cambios de estado). Con "reducir movimiento" activado no se mueve ni se oculta nada.
- Los efectos usan clases (`kn-btn`, `kn-ghost`, `kn-card`, `data-rv`) en lugar de selectores por estilo en línea.

## Pendiente antes de publicar

- El aviso de privacidad y los términos son borradores: necesitan revisión de un abogado en México (y en Texas para Sorta LLC) y completar los recuadros [CONFIRMAR] y la fecha de vigencia.
- Analítica: agregar los IDs de Kensa en `CookieBanner.jsx` si se va a medir el sitio.
- El dominio canónico es `https://www.holakensa.com` (`lib/seo.js`). En el hosting, redirige `holakensa.com` a `www` con un 301.
- Search Console: verifica el dominio y envía `https://www.holakensa.com/sitemap.xml`.
