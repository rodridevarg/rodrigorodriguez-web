@echo off
chcp 65001 >nul
echo ========================================
echo  Deploy de rodrigorodriguez-web
echo ========================================
echo.

cd /d "C:\Users\rodri\desarrollos\rodrigorodriguez-web"

echo [1/3] Verificando cambios...
git status --short

echo.
echo [2/3] Haciendo push a GitHub...
git push origin main

if %errorlevel% neq 0 (
    echo.
    echo ❌ Error al hacer push. Verificá tu conexión SSH con GitHub.
    echo.
    echo Si nunca configuraste SSH, seguí esta guía:
    echo https://docs.github.com/es/authentication/connecting-to-github-with-ssh
    pause
    exit /b 1
)

echo.
echo [3/3] ✅ ¡Push exitoso!
echo.
echo Tu web se actualizará en 1-2 minutos en:
echo   https://rodrigorodriguez.com.ar
echo.
echo Si es la primera vez que deployás, activá GitHub Pages en:
echo   https://github.com/rodridevarg/rodrigorodriguez-web/settings/pages
echo.
pause
