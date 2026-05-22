# Plan de Rediseño — Home como Landing del Bot

> Fecha: 2026-05-22
> Estado: Pendiente de ejecución

---

## Objetivo

Convertir `index.html` en una **landing de ventas simple y clara** enfocada en el **Bot de WhatsApp para tiendas**, eliminando contenido técnico que confunde a personas no programadoras. Mantener la identidad de Rodrigo como creador para generar confianza.

---

## Decisiones tomadas

| Tema | Decisión |
|------|----------|
| **Sección "Mi stack"** | ❌ **Eliminar completamente** del HTML y CSS. |
| **Landing `/bot/`** | ❌ **Eliminar la carpeta `/bot/`**. La web es nueva, no hay links externos. Todo se centraliza en la home. |
| **"Proyectos destacados"** | ❌ **Reemplazar por "Beneficios del Bot"** (3 tarjetas simples, sin tecnicismos). |
| **Demo interactiva** | ✅ **Mantener**, simplificar texto. CTA directo a WhatsApp. |
| **Tracking** | ➕ **Agregar Google Analytics 4 + Meta Pixel** con eventos en CTAs principales. |
| **SEO** | Actualizar title, description y Open Graph para enfocarse en el bot. |

---

## Nueva estructura de `index.html`

| # | Sección | Contenido clave |
|---|---------|-----------------|
| 1 | **`<head>`** | Meta tags SEO actualizados. Scripts de GA4 (`G-XXXXXXXXXX`) y Meta Pixel (`PIXEL_ID`) — reemplazar placeholders. |
| 2 | **Navbar** | Links: Inicio · Sobre mí · Beneficios · ¿Cómo funciona? · Contacto. Botón "Hablame" → WhatsApp. **Quitar link a "El Bot"**. |
| 3 | **Hero** | Título: *"Vendé más con un Bot de WhatsApp para tu tienda"*. Subtítulo simple, sin tecnicismos. **Chat visual animado** a la derecha (reutilizado del `/bot/`). CTAs: "Quiero mi Bot" (WhatsApp) y "Ver cómo funciona" (scroll a pasos). |
| 4 | **Sobre mí** | Texto corto enfocado en confianza: quién sos, por qué hiciste esto, experiencia real. Stats: **10+ años**, **15+ tiendas**, **3 países**. |
| 5 | **Beneficios** | 3 tarjetas simples:<br>1. **Atención 24/7** — No perdés ventas por no responder.<br>2. **Más ventas, menos trabajo** — El bot responde por vos.<br>3. **Funciona con lo que ya tenés** — WhatsApp, WooCommerce, Shopify, TiendaNube. |
| 6 | **¿Cómo funciona?** | 3 pasos claros:<br>1. **Hablás conmigo** — Me contás sobre tu tienda. Gratis, sin compromiso.<br>2. **Armamos tu bot** — Configuro todo por vos. No necesitás saber de tecnología.<br>3. **Empezás a vender** — El bot atiende solo. Vos cerrás los leads calientes. |
| 7 | **¿Por qué elegirme?** | 3 bullets de confianza:<br>• Hecho a tu medida<br>• Soporte humano real (soy yo)<br>• Sin contratos largos |
| 8 | **Demo** | Widget embebido + texto simplificado. CTA: "Consultar por mi Bot" → WhatsApp. |
| 9 | **Contacto** | Formulario + WhatsApp. Subtitle: *"¿Listo para que tu tienda venda sola? Escribime y armamos tu bot."* |
| 10 | **Footer** | Sin cambios. |

---

## Cambios en CSS

- **`css/home.css`**:
  - Eliminar `.tech-stack` y `.tech-tag`.
  - Importar `bot-landing.css` en `index.html` para reutilizar estilos del chat visual, tarjetas de beneficios y pasos.
  - Ajustar grid del hero para mostrar chat visual a la derecha en desktop.
- **`css/bot-landing.css`** y **`css/responsive.css`**: Reutilizar tal cual, posiblemente sin cambios.

---

## Cambios en archivos y carpetas

- **Eliminar**: `bot/index.html` (la carpeta `/bot/` completa).
- **Eliminar**: sección `#tech` en `index.html`.
- **Eliminar**: estilos `.tech-stack`, `.tech-tag` en `css/home.css`.
- **Modificar**: `index.html` (estructura completa, SEO, tracking).
- **Modificar**: `css/home.css` (limpieza de estilos del stack).

---

## Tracking: Eventos a implementar

| Evento | Disparador | Meta Pixel | GA4 |
|--------|-----------|------------|-----|
| `PageView` | Carga de página | `fbq('track', 'PageView')` | `gtag('event', 'page_view')` |
| `Contact` | Click en cualquier link de WhatsApp | `fbq('track', 'Contact')` | `gtag('event', 'contact')` |
| `Lead` | Click en "Quiero mi Bot" (Hero) | `fbq('track', 'Lead')` | `gtag('event', 'generate_lead')` |
| `Lead` | Envío del formulario de contacto | `fbq('track', 'Lead')` | `gtag('event', 'generate_lead')` |

> ⚠️ **Reemplazar placeholders en `<head>`:**
> - `G-XXXXXXXXXX` → Tu Measurement ID de Google Analytics 4.
> - `PIXEL_ID` → Tu ID de Meta Pixel.

---

## Copy sugerido por sección

### Hero
- **Pre-title:** *"Rodrigo Rodriguez — Especialista en automatización para tiendas"*
- **Title:** *"Vendé más con un Bot de WhatsApp para tu tienda"*
- **Subtitle:** *"Atendé clientes, respondé preguntas y cerrá ventas automáticamente 24/7. Sin necesidad de saber tecnología."*
- **CTA primario:** "Quiero mi Bot" → WhatsApp.
- **CTA secundario:** "Ver cómo funciona" → scroll a `#como-funciona`.

### Sobre mí
- *"Soy Rodrigo. Hace más de 10 años ayudo a emprendedores a vender más con tecnología simple. Creé este bot porque vi que muchas tiendas perdían ventas por no responder rápido. Vivo en Argentina y trabajo con tiendas de toda Latinoamérica."*

### Beneficios
1. **Atención instantánea 24/7** — No perdés ninguna venta por no responder, ni de noche ni los fines de semana.
2. **Más ventas, menos trabajo** — El bot responde por vos mientras hacés otras cosas. Tus clientes reciben respuesta inmediata.
3. **Funciona con lo que ya tenés** — WhatsApp, WooCommerce, Shopify o TiendaNube. No necesitás cambiar nada.

### ¿Cómo funciona?
1. **Hablás conmigo** — Me contás sobre tu tienda. Es gratis y sin compromiso.
2. **Armamos tu bot** — Configuro todo por vos en pocos días. No necesitás saber de tecnología.
3. **Empezás a vender** — El bot atiende solo. Vos solo cerrás los leads calientes.

### ¿Por qué elegirme?
- Hecho a tu medida — Configuro tus productos, precios y tono de marca.
- Soporte humano real — Soy yo el que te atiende, no un equipo enorme.
- Sin contratos largos — Podés probarlo sin riesgo.

### Demo
- *"Probá esta demo. Es una versión simplificada de lo que puedo construir para tu negocio. En la versión completa, el bot se conecta con tu catálogo y responde sobre tus productos reales."*

### Contacto
- *"¿Listo para que tu tienda venda sola? Escribime y armamos tu bot."*

---

## SEO sugerido

- **Title:** `Bot de WhatsApp para Tiendas | Rodrigo Rodriguez`
- **Description:** *"Automatizá tu tienda con un bot de WhatsApp. Atención 24/7, más ventas y menos trabajo. Funciona con WooCommerce, Shopify y TiendaNube."*
- **OG/Twitter:** Actualizar imágenes y textos para reflejar el producto.

---

## Próximos pasos al retomar

1. [ ] Revisar este plan y confirmar copys finales.
2. [ ] Obtener IDs de GA4 y Meta Pixel para insertar en `<head>`.
3. [ ] Ejecutar cambios en `index.html` y `css/home.css`.
4. [ ] Eliminar carpeta `/bot/`.
5. [ ] Probar en desktop y mobile.
6. [ ] Validar que los eventos de tracking se disparen correctamente (usar Meta Pixel Helper y GA Debug).

---

> Guardado por OpenCode. Para continuar, indicá los IDs de tracking o confirmá que querés ejecutar el plan tal cual está.
