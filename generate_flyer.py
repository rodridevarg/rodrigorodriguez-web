from PIL import Image, ImageDraw, ImageFont
import os

# Configuración
canvas_size = 1080
output_path = "flyer-promo-v1.png"

# Colores
color_bg_dark = "#0B0C10"
color_accent = "#00A86B"
color_white = "#FFFFFF"
color_gray = "#C5C6C7"
color_light_gray = "#8A8D91"

# Crear imagen
img = Image.new("RGB", (canvas_size, canvas_size), color_bg_dark)
draw = ImageDraw.Draw(img)

# Fondo con degradado sutil (simulado con rectángulos)
for i in range(canvas_size):
    alpha = int(255 * (1 - abs(i - canvas_size//2) / (canvas_size//1.5)))
    if alpha > 0:
        r = int(11 + (0 - 11) * (alpha / 255))
        g = int(12 + (168 - 12) * (alpha / 255) * 0.15)
        b = int(16 + (107 - 16) * (alpha / 255) * 0.1)
        draw.line([(0, i), (canvas_size, i)], fill=(r, g, b))

# Fuentes (usar fuentes del sistema Windows)
try:
    font_title = ImageFont.truetype("C:/Windows/Fonts/Inter-Bold.ttf", 80)
except:
    try:
        font_title = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 80)
    except:
        font_title = ImageFont.load_default()

try:
    font_subtitle = ImageFont.truetype("C:/Windows/Fonts/Inter-SemiBold.ttf", 48)
except:
    try:
        font_subtitle = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 48)
    except:
        font_subtitle = ImageFont.load_default()

try:
    font_body = ImageFont.truetype("C:/Windows/Fonts/Inter-Regular.ttf", 38)
except:
    try:
        font_body = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 38)
    except:
        font_body = ImageFont.load_default()

try:
    font_cta = ImageFont.truetype("C:/Windows/Fonts/Inter-Bold.ttf", 44)
except:
    try:
        font_cta = ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf", 44)
    except:
        font_cta = ImageFont.load_default()

try:
    font_small = ImageFont.truetype("C:/Windows/Fonts/Inter-Regular.ttf", 28)
except:
    try:
        font_small = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 28)
    except:
        font_small = ImageFont.load_default()

# Dibujar círculo decorativo grande detrás
cx, cy = 540, 300
r = 180
for i in range(r, 0, -1):
    color_val = int(30 + (0 - 30) * (i / r))
    draw.ellipse([cx-i, cy-i, cx+i, cy+i], fill=(color_val, color_val+40, color_val+20), outline=None)

# Dibujar icono de chat/robot (simplificado con círculo y texto)
draw.ellipse([cx-100, cy-100, cx+100, cy+100], fill=color_accent, outline=None)
# Ojos del robot
draw.ellipse([cx-35, cy-25, cx-15, cy-5], fill=color_white)
draw.ellipse([cx+15, cy-25, cx+35, cy-5], fill=color_white)
# Boca sonrisa
draw.arc([cx-40, cy-10, cx+40, cy+40], start=0, end=180, fill=color_bg_dark, width=6)
# Antenas
draw.line([(cx-30, cy-100), (cx-50, cy-140)], fill=color_accent, width=6)
draw.line([(cx+30, cy-100), (cx+50, cy-140)], fill=color_accent, width=6)
draw.ellipse([cx-60, cy-150, cx-40, cy-130], fill=color_accent)
draw.ellipse([cx+40, cy-150, cx+60, cy-130], fill=color_accent)

# Texto principal
y_pos = 520

# Badge "DEMO GRATIS"
badge_text = "DEMO GRATUITA DE 5 DÍAS"
bbox = draw.textbbox((0, 0), badge_text, font=font_small)
badge_w = bbox[2] - bbox[0]
badge_h = bbox[3] - bbox[1]
badge_x = (canvas_size - badge_w) // 2
badge_y = y_pos
padding_x = 30
padding_y = 12
# Fondo del badge
draw.rounded_rectangle(
    [badge_x - padding_x, badge_y - padding_y, badge_x + badge_w + padding_x, badge_y + badge_h + padding_y],
    radius=20,
    fill=color_accent
)
draw.text((badge_x, badge_y), badge_text, fill=color_white, font=font_small)

y_pos += badge_h + 60

# Título principal
title = "Tu Secretaria Virtual"
bbox = draw.textbbox((0, 0), title, font=font_title)
title_w = bbox[2] - bbox[0]
title_x = (canvas_size - title_w) // 2
draw.text((title_x, y_pos), title, fill=color_white, font=font_title)

y_pos += 100

# Subtítulo
subtitle = "Atendé clientes 24/7 automáticamente"
bbox = draw.textbbox((0, 0), subtitle, font=font_subtitle)
sub_w = bbox[2] - bbox[0]
sub_x = (canvas_size - sub_w) // 2
draw.text((sub_x, y_pos), subtitle, fill=color_gray, font=font_subtitle)

y_pos += 80

# Body text
body = "Sin saber tecnología. Sin contratos."
bbox = draw.textbbox((0, 0), body, font=font_body)
body_w = bbox[2] - bbox[0]
body_x = (canvas_size - body_w) // 2
draw.text((body_x, y_pos), body, fill=color_light_gray, font=font_body)

y_pos += 120

# CTA Button
cta_text = "HABLAME POR WHATSAPP →"
bbox = draw.textbbox((0, 0), cta_text, font=font_cta)
cta_w = bbox[2] - bbox[0]
cta_h = bbox[3] - bbox[1]
cta_x = (canvas_size - cta_w) // 2
cta_y = y_pos
btn_padding_x = 50
btn_padding_y = 25
# Sombra del botón
shadow_offset = 6
draw.rounded_rectangle(
    [cta_x - btn_padding_x + shadow_offset, cta_y - btn_padding_y + shadow_offset,
     cta_x + cta_w + btn_padding_x + shadow_offset, cta_y + cta_h + btn_padding_y + shadow_offset],
    radius=60,
    fill=(0, 0, 0)
)
# Botón
draw.rounded_rectangle(
    [cta_x - btn_padding_x, cta_y - btn_padding_y,
     cta_x + cta_w + btn_padding_x, cta_y + cta_h + btn_padding_y],
    radius=60,
    fill=color_accent
)
draw.text((cta_x, cta_y), cta_text, fill=color_white, font=font_cta)

y_pos += 130

# Footer info
footer = "rodrigorodriguez.com.ar  ·  Argentina"
bbox = draw.textbbox((0, 0), footer, font=font_small)
foot_w = bbox[2] - bbox[0]
foot_x = (canvas_size - foot_w) // 2
draw.text((foot_x, y_pos), footer, fill=color_light_gray, font=font_small)

# Guardar
img.save(output_path, "PNG", quality=95)
print(f"Flyer guardado: {os.path.abspath(output_path)}")
