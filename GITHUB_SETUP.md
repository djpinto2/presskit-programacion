# 🚀 Configuración de GitHub

## Pasos para subir el proyecto a GitHub:

### 1. Crear el repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `presskit-programacion` (o el nombre que prefieras)
3. **NO** inicialices con README, .gitignore o licencia (ya los tenemos)
4. Haz clic en "Create repository"

### 2. Conectar el repositorio local con GitHub

Si el repositorio se llama `presskit-programacion`:

```bash
git remote add origin https://github.com/djpinto2/presskit-programacion.git
git branch -M main
git push -u origin main
```

Si usaste otro nombre, reemplaza `presskit-programacion` con el nombre que elegiste.

### 3. Configurar GitHub Pages

1. Ve a Settings del repositorio en GitHub
2. En el menú lateral, ve a "Pages"
3. En "Source", selecciona:
   - Branch: `main`
   - Folder: `/ (root)` o `/dist` si prefieres usar la carpeta de build
4. Guarda los cambios

### 4. URL de tu sitio

Tu sitio estará disponible en:
- `https://djpinto2.github.io/presskit-programacion/`

---

## ⚡ Comandos rápidos

```bash
# Si ya creaste el repositorio en GitHub:
git remote add origin https://github.com/djpinto2/presskit-programacion.git
git push -u origin main

# Para hacer builds y deploy:
npm run build
# Luego sube la carpeta dist/ a GitHub Pages o configura GitHub Actions
```
