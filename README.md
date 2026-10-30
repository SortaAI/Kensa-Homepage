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
| `/funciones/<función>/` | Una página por función: asistente-de-whatsapp, mensajes, agenda, preparar-visitas, biblioteca-de-documentos, tus-propios-formatos, formatos-en-el-celular, autollenado, envios, firmar-y-bloquear, expedientes-sellados, hoy-y-pacientes, equipo-y-roles, configuracion-guiada |

## Cómo está hecho

- `components/site/`: una componente por página del lienzo, más el encabezado, la navegación, los menús y el pie de página. Se generaron a partir de los archivos del lienzo y conservan su estructura y estilos en línea, así que cada cambio de diseño se hace aquí mismo.
- `components/site/FuncionPlantilla.jsx`: la plantilla de todas las páginas de funciones. El contenido de cada función está en el objeto `D`, por `slug`.
- `lib/dc.js`: la clase base de las componentes y `link()`, que convierte los nombres de página del lienzo (por ejemplo `Precios.dc.html`) en rutas del sitio (`/precios/`). Para agregar una página, agrégala a `ROUTES`.
- `app/`: una carpeta por ruta, con su título y descripción para buscadores.
- `public/img/`: las capturas y mockups del producto.

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

- Los formularios (demo en Inicio y la solicitud en Contacto) todavía no envían datos a ningún lado: muestran "Recibimos tu solicitud", pero nada llega. Hay que conectarlos (por ejemplo, Formspree, un webhook o el backend de Kensa).
- Enlaces sin destino (`#`): Iniciar sesión, Privacidad, Términos, Cookies, aviso de privacidad, Guías y ayuda, y Recursos para clínicas.
- El dominio en `app/layout.jsx` (`metadataBase`) asume `https://holakensa.com`.
