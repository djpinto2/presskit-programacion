#!/bin/bash

# Script para crear repositorio en GitHub y hacer push

REPO_NAME="presskit-programacion"
GITHUB_USER="djpinto2"

echo "🚀 Creando repositorio en GitHub..."

# Verificar si gh está instalado
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI encontrado"
    gh repo create $REPO_NAME --public --source=. --remote=origin --push
    echo "✅ Repositorio creado y código subido!"
else
    echo "⚠️  GitHub CLI no está instalado"
    echo ""
    echo "📝 Opción 1: Instalar GitHub CLI y ejecutar este script de nuevo"
    echo "   brew install gh"
    echo "   gh auth login"
    echo ""
    echo "📝 Opción 2: Crear el repositorio manualmente:"
    echo "   1. Ve a: https://github.com/new"
    echo "   2. Nombre: $REPO_NAME"
    echo "   3. NO marques 'Initialize with README'"
    echo "   4. Luego ejecuta:"
    echo "      git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git"
    echo "      git push -u origin main"
fi
