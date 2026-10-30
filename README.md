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

## Pendiente antes de publicar

- Los formularios (demo en Inicio y la solicitud en Contacto) todavía no envían datos a ningún lado: muestran "Recibimos tu solicitud", pero nada llega. Hay que conectarlos (por ejemplo, Formspree, un webhook o el backend de Kensa).
- Enlaces sin destino (`#`): Iniciar sesión, Privacidad, Términos, Cookies, aviso de privacidad, Guías y ayuda, y Recursos para clínicas.
- El dominio en `app/layout.jsx` (`metadataBase`) asume `https://holakensa.com`.
