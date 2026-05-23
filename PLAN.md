# Plan de Rediseño — Home como Landing de la Secretaria Virtual

> Fecha: 2026-05-23
> Estado: ✅ Ejecutado
> Versión: 2.0

---

## Objetivo

Convertir `index.html` en una **landing de ventas simple y clara** enfocada en la **"Secretaria Virtual"** — un producto que responde automáticamente los mensajes de WhatsApp de clientes. El producto apunta a **tiendas y profesionales** que atienden por WhatsApp.

Eliminar contenido técnico que confunde a personas no programadoras. Mantener la identidad de Rodrigo como creador para generar confianza.

---

## Decisiones tomadas

| Tema | Decisión |
|------|----------|
| **Nombre del producto** | **"Secretaria Virtual"** (antes: Bot de WhatsApp) |
| **Alcance del producto** | Tiendas y profesionales que atienden clientes por WhatsApp |
| **Sección "Mi stack"** | ❌ **Eliminada** |
| **Landing `/bot/`** | ❌ **Eliminada** |
| **"Proyectos destacados"** | ❌ **Reemplazada por "Beneficios"** |
| **Sección "Más que bots"** | ❌ **Omitida**. Foco 100% en la Secretaria Virtual |
| **Demo interactiva** | ✅ **Mantenida**, CTA directo a WhatsApp |
| **Tracking** | ➕ **Agregados placeholders** de GA4 y Meta Pixel (esperando IDs reales) |
| **SEO** | Actualizado para "Secretaria Virtual para Negocios" |

---

## Estructura final de `index.html`

| # | Sección | Estado |
|---|---------|--------|
| 1 | **`<head>`** | ✅ Title, meta tags, OG, GA4 placeholder, Meta Pixel placeholder |
| 2 | **Navbar** | ✅ Sin link "El Bot". Links: Inicio, Sobre mí, Beneficios, ¿Cómo funciona?, Contacto |
| 3 | **Hero** | ✅ Chat visual animado a la derecha. CTAs a WhatsApp |
| 4 | **Sobre mí** | ✅ Stats: 10+ años, 15+ clientes, 3 países |
| 5 | **Beneficios** | ✅ 3 tarjetas: Atención 24/7, Más ventas menos trabajo, Funciona con lo que ya tenés |
| 6 | **¿Cómo funciona?** | ✅ 3 pasos: Hablás conmigo → Armamos tu Secretaria Virtual → Empezás a vender |
| 7 | **¿Por qué elegirme?** | ✅ 3 bullets: Hecho a tu medida, Soporte humano real, Sin contratos largos |
| 8 | **Demo** | ✅ Widget embebido + CTA a WhatsApp |
| 9 | **Contacto** | ✅ Formulario + WhatsApp |
| 10 | **Footer** | ✅ Sin cambios |

---

## Archivos modificados

| Archivo | Cambios |
|---------|---------|
| `index.html` | ✅ Reestructurado completo: nuevo copy, SEO, tracking placeholders, navbar, hero con chat, beneficios, pasos, demo, contacto |
| `css/home.css` | ✅ Eliminado `.tech-stack`, `.tech-tag`, `.hero--home`, `.projects`. Agregado `.section--benefits`, `.section--why`, `.section__cta` |
| `css/bot-landing.css` | ✅ Importado en `index.html` para reutilizar estilos de chat visual, beneficios y pasos |
| `css/responsive.css` | ✅ Sin cambios necesarios |
| `js/bot-widget.js` | ✅ Actualizado copy: "Bot" → "Secretaria Virtual". CTA `/bot/` → `#beneficios` |
| `README.md` | ✅ Actualizado para reflejar el nuevo producto |
| `bot/index.html` | ❌ **Eliminado** (carpeta `/bot/` completa) |

---

## Tracking implementado (placeholders)

| Evento | Disparador | Estado |
|--------|-----------|--------|
| `PageView` | Carga de página | ✅ GA4 + Meta Pixel |
| `Contact` | Click en links de WhatsApp | ✅ Atributos `data-track="contact"` en CTAs |
| `Lead` | Click en "Quiero mi Secretaria Virtual" | ✅ Atributo `data-track="lead"` en hero CTA |
| `Lead` | Envío de formulario | ✅ Atributo `data-track-form="lead"` en form |

> ⚠️ **Pendiente:** Reemplazar placeholders en `<head>`:
> - `G-XXXXXXXXXX` → Measurement ID de Google Analytics 4
> - `PIXEL_ID` → ID de Meta Pixel

---

## SEO final

- **Title:** `Secretaria Virtual para Negocios | Rodrigo Rodriguez`
- **Description:** *"Automatizá tu atención con una Secretaria Virtual por WhatsApp. Atención 24/7, más ventas y menos trabajo. Para tiendas y profesionales."*

---

## Pendientes futuros

1. [ ] Reemplazar placeholders de GA4 (`G-XXXXXXXXXX`) y Meta Pixel (`PIXEL_ID`) con IDs reales
2. [ ] Validar que los eventos de tracking se disparen correctamente (Meta Pixel Helper y GA Debug)
3. [ ] Subir imagen OG actualizada a `assets/og-home.jpg`
4. [ ] Probar en múltiples dispositivos y navegadores

---

> ✅ Ejecutado por OpenCode el 2026-05-23. Para continuar, proporcioná los IDs de tracking o indicá ajustes adicionales.
