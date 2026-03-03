# 🚨 INSTRUCCIONES URGENTES - Configurar GitHub Pages

## ⚠️ El sitio se ve sin estilos porque GitHub Pages NO está configurado correctamente

## 📋 PASOS OBLIGATORIOS (Hazlo AHORA):

### Opción 1: Usar la rama gh-pages (MÁS RÁPIDO)

1. **Abre esta URL en tu navegador:**
   ```
   https://github.com/djpinto2/presskit-programacion/settings/pages
   ```

2. **En la sección "Source":**
   - Cambia de "Deploy from a branch" a **"Deploy from a branch"** (si no está seleccionado)
   - **Branch**: Selecciona `gh-pages`
   - **Folder**: Selecciona `/ (root)`
   - **Click en "Save"**

3. **Espera 2-3 minutos** y recarga tu sitio

### Opción 2: Usar GitHub Actions (Automático para el futuro)

1. **Abre esta URL:**
   ```
   https://github.com/djpinto2/presskit-programacion/settings/pages
   ```

2. **En la sección "Source":**
   - Cambia a **"GitHub Actions"**
   - **Click en "Save"**

3. **Ve a Actions:**
   ```
   https://github.com/djpinto2/presskit-programacion/actions
   ```

4. **Si no hay un workflow ejecutándose**, haz un pequeño cambio y push:
   ```bash
   git commit --allow-empty -m "Trigger GitHub Actions deploy"
   git push origin main
   ```

## ✅ Verificación

Después de configurar, verifica que:
- El sitio carga con fondo dark navy (NO blanco)
- Los estilos se aplican correctamente
- El botón "Contacto" es verde y tiene estilo

## 🔍 Si sigue sin funcionar:

1. Verifica que la rama `gh-pages` existe:
   ```
   https://github.com/djpinto2/presskit-programacion/tree/gh-pages
   ```

2. Verifica los Actions:
   ```
   https://github.com/djpinto2/presskit-programacion/actions
   ```

3. Espera 5 minutos después de cambiar la configuración

---

**⚠️ IMPORTANTE:** GitHub Pages NO funciona automáticamente. DEBES configurarlo manualmente en Settings → Pages.
