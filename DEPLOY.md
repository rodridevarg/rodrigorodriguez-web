# Guía de Deploy — rodrigorodriguez-web

> Cómo publicar cambios en tu web

---

## TL;DR (resumen rápido)

```bash
cd C:\Users\rodri\desarrollos\rodrigorodriguez-web
git add .
git commit -m "descripción del cambio"
git push origin main
```

Tu web se actualiza automáticamente en **1-2 minutos** en:
👉 [https://rodrigorodriguez.com.ar](https://rodrigorodriguez.com.ar)

---

## Flujo completo de deploy

### 1. Hacer cambios
Editá los archivos (`index.html`, `css/`, `js/`, etc.) como necesites.

### 2. Ver qué cambió
```bash
git status
```

### 3. Agregar todo al commit
```bash
git add .
```

### 4. Crear el commit con un mensaje descriptivo
```bash
git commit -m "fix: corrección de typo en hero"
```

**Tip:** Usá prefijos para los mensajes:
- `feat:` — nueva funcionalidad
- `fix:` — corrección de bug
- `chore:` — tarea de mantenimiento
- `docs:` — cambios en documentación

### 5. Subir a GitHub (deploy)
```bash
git push origin main
```

### 6. Esperar 1-2 minutos
GitHub Pages reconstruye la web automáticamente. Podés ver el estado en:
👉 [github.com/rodridevarg/rodrigorodriguez-web/actions](https://github.com/rodridevarg/rodrigorodriguez-web/actions)

---

## Token de GitHub — ¿Cómo funciona?

Tu token de GitHub ya está guardado de forma segura en el **Windows Credential Manager**. Esto significa que:

- ✅ No tenés que escribir usuario/contraseña cada vez
- ✅ El `git push` funciona directamente
- ✅ Está protegido por tu sesión de Windows

### Si alguna vez falla el push

**Opción A: Verificar que el token sigue vigente**
1. Andá a [github.com/settings/tokens](https://github.com/settings/tokens)
2. Verificá que el token no esté expirado ni revocado

**Opción B: Regenerar el token y guardarlo de nuevo**

Si el token expiró o fue revocado:

1. Creá un nuevo token en [github.com/settings/tokens](https://github.com/settings/tokens)
   - Seleccioná el scope **`repo`**
2. Guardalo en Windows Credential Manager:
   ```bash
   git credential reject
   git push origin main
   ```
   Git te pedirá usuario y contraseña. Ingresá:
   - **Usuario:** `rodridevarg`
   - **Contraseña:** el token que copiaste

**Opción C: Usar el token como variable de entorno**

Si preferís, podés configurar una variable de entorno:

```bash
setx GITHUB_TOKEN "ghp_tu_token_aqui"
```

Y luego en un script:
```bash
git remote set-url origin https://%GITHUB_TOKEN%@github.com/rodridevarg/rodrigorodriguez-web.git
git push origin main
```

---

## Configuración actual

| Dato | Valor |
|------|-------|
| **Repositorio** | `rodridevarg/rodrigorodriguez-web` |
| **Rama de deploy** | `main` |
| **Hosting** | GitHub Pages |
| **Dominio** | `rodrigorodriguez.com.ar` |
| **URL final** | [https://rodrigorodriguez.com.ar](https://rodrigorodriguez.com.ar) |
| **Tracking** | Meta Pixel + Google Analytics 4 |

---

## Script rápido (opcional)

Si querés, creá un archivo `deploy.bat` en la raíz del proyecto con esto:

```batch
@echo off
cd /d "C:\Users\rodri\desarrollos\rodrigorodriguez-web"

echo Verificando cambios...
git status --short

echo.
echo Haciendo commit...
git add .
set /p msg="Mensaje del commit: "
git commit -m "%msg%"

echo.
echo Haciendo push...
git push origin main

echo.
echo ✅ Listo. Tu web se actualizara en 1-2 minutos.
pause
```

Ejecutalo haciendo doble click en `deploy.bat`.

---

## ¿Problemas?

| Problema | Solución |
|----------|----------|
| `Permission denied` al hacer push | El token expiró. Seguí **Opción B** arriba. |
| La web no se actualiza | Esperá 2-3 minutos. Si no, revisá [Actions](https://github.com/rodridevarg/rodrigorodriguez-web/actions). |
| Dominio no carga | Verificá que el archivo `CNAME` con `rodrigorodriguez.com.ar` exista en la raíz. |

---

> Guardado el 2026-05-23. Si cambiás el token o la configuración, actualizá este archivo.
