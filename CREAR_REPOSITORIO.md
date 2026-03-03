# 🚀 Crear Repositorio en GitHub

## Método Rápido (Recomendado)

### Paso 1: Crear el repositorio en GitHub

1. **Abre tu navegador** y ve a: **https://github.com/new**
2. **Nombre del repositorio**: `presskit-programacion`
3. **Descripción** (opcional): "Portfolio personal con intro animada"
4. **Visibilidad**: Selecciona **Public**
5. **⚠️ IMPORTANTE**: **NO** marques ninguna de estas opciones:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. Haz clic en **"Create repository"**

### Paso 2: Conectar y hacer push

Una vez creado el repositorio, ejecuta estos comandos en tu terminal:

```bash
cd "/Users/pinto.djs/Desktop/PROTYECTOS PROGRAMACION/presskit programacion"

# Conectar con GitHub
git remote add origin https://github.com/djpinto2/presskit-programacion.git

# Hacer push
git push -u origin main
```

### Paso 3: Configurar GitHub Pages

1. Ve a tu repositorio en GitHub: https://github.com/djpinto2/presskit-programacion
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click en **Save**

### ✅ Tu sitio estará disponible en:

**https://djpinto2.github.io/presskit-programacion/**

---

## Método Alternativo: Usar GitHub CLI

Si tienes GitHub CLI instalado:

```bash
# Instalar GitHub CLI (si no lo tienes)
brew install gh

# Autenticarte
gh auth login

# Crear repositorio y hacer push
gh repo create presskit-programacion --public --source=. --remote=origin --push
```

---

## Solución de Problemas

### Error: "repository already exists"
- El repositorio ya existe. Usa otro nombre o elimina el repositorio existente.

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/djpinto2/presskit-programacion.git
```

### Error: "authentication failed"
- Necesitas autenticarte. Ve a GitHub → Settings → Developer settings → Personal access tokens
- Crea un token con permisos de repositorio
- O usa: `gh auth login`
