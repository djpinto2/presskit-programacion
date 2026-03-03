# 🔧 Solución: Ver el PressKit en Puerto 5500

## Problema: No se ve la vista previa

Sigue estos pasos en orden:

## Paso 1: Detener procesos en el puerto 5500

Abre la Terminal y ejecuta:

```bash
# Ver qué procesos están usando el puerto 5500
lsof -ti:5500

# Si hay procesos, detenerlos (reemplaza PID con el número que aparezca)
kill -9 PID

# O detener todos los procesos en el puerto 5500
lsof -ti:5500 | xargs kill -9
```

## Paso 2: Verificar/Reinstalar dependencias

```bash
cd "/Users/pinto.djs/Desktop/PROTYECTOS PROGRAMACION/presskit programacion"

# Si hay problemas, reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

Esto puede tardar 2-3 minutos.

## Paso 3: Iniciar el servidor

```bash
npm run dev
```

Deberías ver algo como:

```
▲ Next.js 14.x.x
- Local:        http://localhost:5500
✓ Ready in Xs
```

## Paso 4: Abrir en el navegador

Abre Chrome o tu navegador y ve a:

**http://localhost:5500**

## ⚠️ Si sigue sin funcionar

### Opción A: Verificar errores

Si ves errores en la terminal, compártelos y te ayudo a solucionarlos.

### Opción B: Usar otro puerto

Si el puerto 5500 sigue dando problemas:

```bash
# Detener el servidor (Ctrl + C)
# Luego iniciar en otro puerto:
next dev -p 5501
```

Y abre: **http://localhost:5501**

### Opción C: Verificar que Next.js está instalado

```bash
npx next --version
```

Si dice "command not found", las dependencias no están instaladas correctamente.

## ✅ Checklist

- [ ] Puerto 5500 está libre
- [ ] Dependencias instaladas (`node_modules` existe)
- [ ] Servidor iniciado con `npm run dev`
- [ ] Mensaje "Ready" aparece en la terminal
- [ ] Navegador abierto en http://localhost:5500

---

**Nota:** El servidor debe estar corriendo para ver el sitio. Si cierras la terminal, el servidor se detiene.
