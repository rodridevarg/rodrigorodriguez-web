# Design System — Clinical Precision

> **Marca:** Rodrigo Rodriguez — Secretaria Virtual para Médicos
> **Propósito:** Sistema de diseño para entornos médicos donde la claridad, confiabilidad y precisión son primordiales.

---

## Brand & Style

El sistema de diseño está diseñado para entornos médicos de alto riesgo donde la claridad, confiabilidad y precisión son primordiales. La personalidad de marca es clínica, autoritaria y calmada, diseñada para generar confianza inmediata en profesionales de la salud y pacientes.

La estética se inclina hacia lo **Moderno Corporativo** con enfoque en el minimalismo funcional. Evita decoración innecesaria, priorizando la densidad de información y la legibilidad. El peso visual se usa estratégicamente para guiar al usuario a través de datos complejos.

---

## Colors

La paleta está basada en un **Teal Médico** (`#0D9488`), color asociado con higiene, foco y salud moderna.

| Token | Hex | Uso |
|-------|-----|-----|
| **primary** | `#00685f` | Acciones principales, estados activos, presencia de marca |
| **on-primary** | `#ffffff` | Texto sobre primary |
| **primary-container** | `#008378` | Contenedores de primary |
| **on-primary-container** | `#f4fffc` | Texto sobre primary-container |
| **inverse-primary** | `#6bd8cb` | Primary en superficies oscuras |
| **secondary** | `#515f74` | Acciones secundarias, etiquetas |
| **on-secondary** | `#ffffff` | Texto sobre secondary |
| **secondary-container** | `#d5e3fd` | Contenedores de secondary |
| **on-secondary-container** | `#57657b` | Texto sobre secondary-container |
| **tertiary** | `#00628d` | Terciario, indicadores de progreso |
| **on-tertiary** | `#ffffff` | Texto sobre tertiary |
| **tertiary-container** | `#007cb1` | Contenedores de tertiary |
| **on-tertiary-container** | `#fcfcff` | Texto sobre tertiary-container |
| **error** | `#ba1a1a` | Errores, estados críticos |
| **on-error** | `#ffffff` | Texto sobre error |
| **error-container** | `#ffdad6` | Contenedores de error |
| **on-error-container** | `#93000a` | Texto sobre error-container |
| **surface** | `#f7f9fb` | Fondo principal |
| **on-surface** | `#191c1e` | Texto principal sobre surface |
| **on-surface-variant** | `#3d4947` | Texto secundario |
| **surface-dim** | `#d8dadc` | Superficie atenuada |
| **surface-bright** | `#f7f9fb` | Superficie brillante |
| **surface-container** | `#eceef0` | Contenedor de superficie |
| **surface-container-low** | `#f2f4f6` | Contenedor bajo |
| **surface-container-high** | `#e6e8ea` | Contenedor alto |
| **surface-container-highest** | `#e0e3e5` | Contenedor más alto |
| **surface-container-lowest** | `#ffffff` | Contenedor más bajo (blanco puro) |
| **surface-variant** | `#e0e3e5` | Variante de superficie |
| **inverse-surface** | `#2d3133` | Superficie inversa (oscuro) |
| **inverse-on-surface** | `#eff1f3` | Texto sobre superficie inversa |
| **outline** | `#6d7a77` | Bordes, divisores |
| **outline-variant** | `#bcc9c6` | Bordes sutiles |
| **surface-tint** | `#006a61` | Tinte de superficie |
| **background** | `#f7f9fb` | Fondo general |
| **on-background** | `#191c1e` | Texto sobre fondo |
| **primary-fixed** | `#89f5e7` | Primary fijo (accesible) |
| **primary-fixed-dim** | `#6bd8cb` | Primary fijo atenuado |
| **on-primary-fixed** | `#00201d` | Texto sobre primary-fixed |
| **on-primary-fixed-variant** | `#005049` | Texto sobre variante primary-fixed |
| **secondary-fixed** | `#d5e3fd` | Secondary fijo |
| **secondary-fixed-dim** | `#b9c7e0` | Secondary fijo atenuado |
| **on-secondary-fixed** | `#0d1c2f` | Texto sobre secondary-fixed |
| **on-secondary-fixed-variant** | `#3a485c` | Texto sobre variante secondary-fixed |
| **tertiary-fixed** | `#c9e6ff` | Tertiary fijo |
| **tertiary-fixed-dim** | `#89ceff` | Tertiary fijo atenuado |
| **on-tertiary-fixed** | `#001e2f` | Texto sobre tertiary-fixed |
| **on-tertiary-fixed-variant** | `#004c6e` | Texto sobre variante tertiary-fixed |

### Fixed Colors (Accesibles)
| Token | Hex | Uso |
|-------|-----|-----|
| primary-fixed | `#89f5e7` | Primary fijo |
| primary-fixed-dim | `#6bd8cb` | Primary fijo atenuado |
| on-primary-fixed | `#00201d` | Texto sobre primary-fixed |
| on-primary-fixed-variant | `#005049` | Texto sobre variante primary-fixed |
| secondary-fixed | `#d5e3fd` | Secondary fijo |
| secondary-fixed-dim | `#b9c7e0` | Secondary fijo atenuado |
| on-secondary-fixed | `#0d1c2f` | Texto sobre secondary-fixed |
| on-secondary-fixed-variant | `#3a485c` | Texto sobre variante secondary-fixed |
| tertiary-fixed | `#c9e6ff` | Tertiary fijo |
| tertiary-fixed-dim | `#89ceff` | Tertiary fijo atenuado |
| on-tertiary-fixed | `#001e2f` | Texto sobre tertiary-fixed |
| on-tertiary-fixed-variant | `#004c6e` | Texto sobre variante tertiary-fixed |

---

## Typography

Sistema tipográfico basado en **Inter** para máxima legibilidad y sensación sistemática.

| Token | Tamaño | Peso | Altura | Espaciado |
|-------|--------|------|--------|-----------|
| **display-lg** | 48px | 700 | 56px | -0.02em |
| **headline-lg** | 32px | 600 | 40px | -0.01em |
| **headline-lg-mobile** | 24px | 600 | 32px | — |
| **headline-md** | 24px | 600 | 32px | — |
| **title-lg** | 20px | 600 | 28px | — |
| **body-lg** | 18px | 400 | 28px | — |
| **body-md** | 16px | 400 | 24px | — |
| **body-sm** | 14px | 400 | 20px | — |
| **label-md** | 12px | 600 | 16px | 0.05em |
| **mono-data** | 14px | 500 | 20px | — |

### Principios tipográficos

- **Data Precision:** Para valores numéricos (vitales, dosis), usar `mono-data` con números tabulares para alinear columnas perfectamente.
- **Hierarchy:** Fuerte contraste de peso entre headlines (600/700) y body text (400) para escaneo eficiente.
- **Labels:** Etiquetas pequeñas, mayúsculas, para metadata.

---

## Layout & Spacing

Grid **Híbrido Fijo-Fluido**. Dashboards usan layout fluido para maximizar datos; páginas administrativas usan grid centrado fijo para foco.

### Baseline de 4px

| Token | Valor | Uso |
|-------|-------|-----|
| base | 4px | Unidad base |
| xs | 4px | Micro espacios |
| sm | 8px | Padding interno estándar |
| md | 16px | Padding interno componentes |
| lg | 24px | Espaciado entre secciones |
| xl | 40px | Espaciado mayor |
| container-margin | 24px | Márgenes de contenedor |
| gutter | 16px | Espaciado entre columnas |

### Responsive

- **Mobile:** Márgenes reducen a 16px, tablas multi-columna colapsan a cards estructurados.
- **Density:** Soporta modo "Compact" para dashboards clínicos donde el espacio vertical es premium.

---

## Elevation & Depth

Profundidad señalizada por **Capas Tonal** y sombras sutiles, crisp. Mantiene apariencia limpia, flat, contemporánea y confiable.

| Nivel | Color | Uso |
|-------|-------|-----|
| **Level 0 (Surface)** | `#f7f9fb` | Fondo principal |
| **Level 1 (Cards/Sections)** | `#ffffff` | Superficies blancas sobre fondo |
| **Level 2 (Dropdowns/Modals)** | `#ffffff` | Blanco puro con sombra 4% black, 8px blur, 4px offset |
| **Outline** | 1px border `#e2e8f0` | Todos los elementos Level 1 |

---

## Shapes

Sistema usa geometría **Rounded** (Nivel 2).

| Token | Valor | Uso |
|-------|-------|-----|
| sm | 0.25rem (4px) | Bordes pequeños |
| DEFAULT | 0.5rem (8px) | Estándar componentes |
| md | 0.75rem (12px) | Bordes medianos |
| lg | 1rem (16px) | Bordes grandes |
| xl | 1.5rem (24px) | Bordes extra grandes |
| full | 9999px | Píldoras, badges |

> **Principio:** 0.5rem (8px) es el radio de esquina estándar. Equilibra la naturaleza técnica "sharp" de instrumentos médicos con la naturaleza "suave" del cuidado al paciente. Evita ser demasiado juguetón (pill-shaped) mientras permanece más invitador que una UI industrial de bordes afilados.

---

## Components

### Buttons

- **Primary:** Fondo Teal `#0D9488`, texto blanco. Altura estricta 40px estándar, 32px compacto.
- **Secondary:** Estilo ghost con tinte slate.
- **Tertiary:** Mínimo, solo texto con icono.

### Input Fields

- Fondo blanco, bordes `#e2e8f0`.
- Estado focus: anillo 2px Teal.
- Labels siempre sobre el input, nunca solo como placeholders.

### Status Chips

- Background tintes de alto contraste con texto oscuro.
- Ejemplo: Fondo Light Red + texto Dark Red para "Critical".

### Cards

- Fondo blanco, borde 1px Slate-200, radio de esquina 8px.
- Datos agrupados dentro de cards usan divisores horizontales en lugar de cajas para mantener la UI "ligera".

### Data Tables

- Basadas en filas con hover states sutiles (`#f1f5f9`).
- Bordes verticales omitidos para enfatizar el flujo horizontal de datos de pacientes.

### Progress Indicators

- Tertiary blue (`#0EA5E9`) para loading neutro.
- Teal para procesos médicos completados.

---

## Accesibilidad

- Contraste máximo para legibilidad: texto `#0F172A` sobre fondos claros.
- Colores funcionales ligeramente desaturados para mantener profesionalismo.
- Estados semánticos claros para vitales de pacientes y alertas de sistema.

---

## Archivos del proyecto

| Archivo | Descripción |
|---------|-------------|
| `css/base.css` | Variables CSS base, reset, utilities |
| `css/main.css` | Componentes principales |
| `css/home.css` | Estilos específicos de la home |
| `css/bot-landing.css` | Estilos del widget de chat |
| `css/responsive.css` | Media queries, mobile-first |
| `js/main.js` | Scripts principales |
| `js/home.js` | Scripts de la home |
| `js/bot-widget.js` | Widget de chat interactivo |
| `index.html` | Landing principal |
| `manifest.json` | PWA manifest |
| `DESIGN.md` | Este documento |

---

> **Versión:** 1.0
> **Fecha:** 2026-06-09
> **Autor:** OpenCode
