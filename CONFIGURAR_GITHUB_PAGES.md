# 🚀 Configurar GitHub Pages

## ✅ Cambios Realizados

1. ✅ Build configurado con rutas relativas (`base: './'`)
2. ✅ Workflow de GitHub Actions creado para deploy automático
3. ✅ Código subido a GitHub

## 📋 Pasos para Activar GitHub Pages

### Opción 1: Usar GitHub Actions (Recomendado - Automático)

1. Ve a: https://github.com/djpinto2/presskit-programacion/settings/pages
2. En **"Source"**, selecciona:
   - **Deploy from a branch** → Cambia a **"GitHub Actions"**
3. Guarda los cambios
4. El workflow se ejecutará automáticamente y desplegará tu sitio

### Opción 2: Deploy Manual desde Branch

Si prefieres deploy manual:

1. Ve a: https://github.com/djpinto2/presskit-programacion/settings/pages
2. En **"Source"**, selecciona:
   - **Branch**: `main`
   - **Folder**: `/dist`
3. Guarda los cambios

**Nota**: Con esta opción necesitarás hacer `npm run build` y commitear la carpeta `dist/` cada vez que hagas cambios.

## 🔄 Deploy Automático

Con GitHub Actions configurado, cada vez que hagas `git push`:
1. Se ejecutará el workflow automáticamente
2. Se hará build del proyecto
3. Se desplegará a GitHub Pages

## 🌐 URL de tu Sitio

Una vez configurado, tu sitio estará en:
**https://djpinto2.github.io/presskit-programacion/**

## ⏱️ Tiempo de Espera

- Primera vez: 2-5 minutos
- Deploys siguientes: 1-3 minutos

## 🔍 Verificar el Deploy

1. Ve a: https://github.com/djpinto2/presskit-programacion/actions
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Cuando termine (✓ verde), tu sitio estará actualizado

## 🐛 Solución de Problemas

### El sitio no se ve bien
- Verifica que GitHub Pages esté usando **GitHub Actions** como fuente
- Espera unos minutos para que el deploy termine
- Limpia la caché del navegador (Ctrl+Shift+R o Cmd+Shift+R)

### El workflow falla
- Ve a la pestaña "Actions" en GitHub
- Revisa los logs del workflow para ver el error
- Asegúrate de que `package.json` tenga el script `build`

### Los estilos no cargan
- Verifica que `vite.config.js` tenga `base: './'`
- Asegúrate de que el build se haya hecho correctamente
- Revisa la consola del navegador para errores
