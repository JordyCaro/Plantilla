# 🚀 Inicio Rápido - Jairo Traine Landing Page

## 📋 Lo que tienes

Una landing page **100% funcional** lista para personalizar con tu información real.

---

## 🎯 3 Pasos para Ver tu Sitio

### 1. Instalar Dependencias (si aún no lo has hecho)
```bash
npm install
```

### 2. Iniciar el Servidor de Desarrollo
```bash
npm run dev
```

### 3. Abrir en el Navegador
Abre: **http://localhost:4321**

---

## ✏️ Primeras Personalizaciones

### 🖼️ 1. Agregar Tu Foto (5 min)

Reemplaza las imágenes placeholder en:
- `src/components/HeroSection.astro` (línea 51)
- `src/components/AboutUs.astro` (línea 20)
- `src/components/TeamSection.astro` (línea 19)

**Tip**: Usa servicios como [Unsplash](https://unsplash.com) temporalmente si no tienes fotos aún.

### 📞 2. Actualizar Contacto (10 min)

Busca y reemplaza en **TODO el proyecto**:
- `contacto@jairotraine.com` → tu email real
- `+57 (300) 123-4567` → tu teléfono real
- `573001234567` → tu número de WhatsApp (sin +)

**Archivos principales**:
- `src/components/Footer.astro`
- `src/pages/contacto.astro`

### 🌐 3. Redes Sociales (5 min)

Edita `src/components/Footer.astro` (líneas 50-77):
```astro
<a href="https://instagram.com/TU_USUARIO">
<a href="https://facebook.com/TU_PAGINA">
<a href="https://tiktok.com/@TU_USUARIO">
```

### 📝 4. Formulario de Contacto (10 min)

1. Ve a [formspree.io](https://formspree.io)
2. Crea una cuenta gratis
3. Crea un nuevo formulario
4. Copia el Form ID
5. Edita `src/pages/contacto.astro`:
   - Busca `YOUR_FORM_ID` (aparece 2 veces)
   - Reemplaza con tu Form ID real

---

## 📖 Personalizar Contenido

### Historia Personal
Edita `src/components/AboutUs.astro`:
- Tu historia como entrenador
- Tu filosofía
- Tus estadísticas reales

### Testimonios
Edita `src/components/TestimonialSlider.tsx`:
- Reemplaza con testimonios reales
- Usa fotos reales de clientes (con permiso)

### Servicios
Revisa y ajusta en:
- `src/components/FeaturedServices.astro`
- `src/pages/index.astro` (sección "Más Servicios")

---

## 🎨 Personalizar Diseño (Opcional)

### Cambiar Colores
Edita `tailwind.config.mjs`:
```javascript
colors: {
  primary: {
    dark: '#7BA82F'  // Tu color principal
  }
}
```

### Agregar Tu Logo
1. Guarda tu logo en `public/logo.png`
2. Edita `src/components/Header.astro` (líneas 10-13)
3. Reemplaza el texto con una etiqueta `<img>`

---

## 🌍 Publicar Tu Sitio

### Opción 1: Vercel (Recomendado - Gratis)
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio GitHub
3. Click en "Deploy"
4. ¡Listo! Tu sitio está en línea

### Opción 2: Netlify (Gratis)
1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `dist/` después de hacer `npm run build`
3. ¡Listo!

---

## 🆘 Comandos Útiles

```bash
# Ver el sitio en desarrollo
npm run dev

# Crear versión de producción
npm run build

# Ver versión de producción localmente
npm run preview

# Detener el servidor
Ctrl + C
```

---

## 📚 Documentación Completa

- **PENDIENTES.md** - Lista completa de personalizaciones
- **RESUMEN_TRANSFORMACION.md** - Todo lo que se cambió
- **README.md** - Documentación técnica completa

---

## ✅ Checklist Rápido

- [ ] Sitio corriendo en localhost
- [ ] Email actualizado
- [ ] Teléfono actualizado
- [ ] WhatsApp actualizado
- [ ] Redes sociales actualizadas
- [ ] Formulario Formspree configurado
- [ ] Fotos agregadas
- [ ] Contenido personalizado
- [ ] Testimonios reales
- [ ] Sitio desplegado en Vercel/Netlify

---

## 💡 Tip Final

**Hazlo por etapas:**
1. Primero, actualiza la información de contacto
2. Luego, agrega tus fotos
3. Después, personaliza el contenido
4. Finalmente, publica

No necesitas hacerlo todo de una vez. ¡Ve paso a paso!

---

## 🎉 ¡Listo para Arrancar!

Tu sitio ya está funcionando. Solo necesita tu toque personal.

**"Soy tu mayor fan"** 💪

¿Dudas? Revisa los archivos de documentación o contacta al desarrollador.

