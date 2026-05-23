# rodrigorodriguez.com.ar

Web personal de Rodrigo Rodriguez - Desarrollador especializado en automatización y Secretaria Virtual para negocios.

## 🚀 Deploy en GitHub Pages

1. Crear un nuevo repositorio en GitHub (por ejemplo `rodrigorodriguez-web`).
2. Subir todos estos archivos a la rama `main`.
3. Ir a **Settings > Pages**.
4. En "Source" seleccionar **Deploy from a branch** y elegir `main` / `root`.
5. En **Settings > Pages > Custom domain** ingresar: `rodrigorodriguez.com.ar`.
6. GitHub generará un archivo de verificación. Asegurate de que el archivo `CNAME` con `rodrigorodriguez.com.ar` esté en la raíz.
7. En tu proveedor de dominio, agregar un registro **CNAME**:
   - Nombre: `@` o `www`
   - Valor: `tuusuario.github.io` (reemplazá con tu usuario real)
   - También podés usar registros **A** apuntando a las IPs de GitHub Pages si querés el dominio raíz sin www.

## 📝 Configuraciones adicionales

### Formspree
El formulario de contacto usa Formspree. Si querés cambiar el email destino o usar un endpoint propio:
- Andá a [formspree.io](https://formspree.io) y creá un nuevo formulario.
- Reemplazá la URL en `index.html` dentro del `<form action="...">`.

### Google Analytics 4
En `index.html`, descomentá el bloque de GA4 y reemplazá `GA_MEASUREMENT_ID` con tu ID de medición.

### Meta Pixel (Facebook/Instagram Ads)
En `index.html`, descomentá el bloque del Meta Pixel y reemplazá `PIXEL_ID` con tu ID de píxel.

### OG Image
Subí una imagen `og-image.jpg` (1200x630px recomendado) dentro de la carpeta `assets/` para que el link se vea bien al compartir.

## 🎨 Tecnologías

- HTML5 semántico
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript vanilla (sin frameworks)
- Mobile First / Responsive
- Intersección Observer para animaciones suaves

## 📱 Contacto

- WhatsApp: +54 9 2477 614405
- Email: rodrigo.desarrollador@gmail.com
