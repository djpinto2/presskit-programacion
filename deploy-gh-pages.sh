#!/bin/bash

# Script para hacer build y deploy a GitHub Pages

echo "🔨 Haciendo build del proyecto..."
npm run build

echo "📦 Preparando deploy a GitHub Pages..."

# Crear rama gh-pages con el contenido de dist
cd dist
git init
git add .
git commit -m "Deploy a GitHub Pages"
git branch -M gh-pages

echo "✅ Build completado!"
echo ""
echo "📤 Para hacer deploy, ejecuta:"
echo "   git remote add origin https://github.com/djpinto2/presskit-programacion.git"
echo "   git push -u origin gh-pages --force"
echo ""
echo "Luego configura GitHub Pages para usar la rama 'gh-pages'"
