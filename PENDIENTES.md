# Pendientes para Completar - Jairo Traine Landing Page

## 🎨 Recursos Visuales

### Favicon y Logo
- [ ] Crear/agregar `public/favicon.png` (192x192 y 512x512)
- [ ] Crear/agregar `public/logo.png` para el header (opcional, actualmente usa texto "JAIRO TRAINE")

### Imágenes de Contenido
- [ ] Foto profesional de Jairo para `TeamSection.astro`
- [ ] Foto para Hero Section (actualmente usa placeholder de Unsplash)
- [ ] Foto para About Us (actualmente usa placeholder de Unsplash)
- [ ] Fotos de clientes reales para testimonios (actualmente usa placeholders de Unsplash)

## 📞 Información de Contacto

### Datos Personales
Actualizar en `src/components/Footer.astro` y `src/pages/contacto.astro`:

- [ ] **Email**: Reemplazar `contacto@jairotraine.com` con el email real
- [ ] **Teléfono**: Reemplazar `+57 (300) 123-4567` con el teléfono real
- [ ] **WhatsApp**: Actualizar link `https://wa.me/573001234567` con el número real

### Redes Sociales
Actualizar en `src/components/Footer.astro`:

- [ ] **Instagram**: Reemplazar `https://instagram.com/jairotraine` con el perfil real
- [ ] **Facebook**: Reemplazar `https://facebook.com/jairotraine` con la página real
- [ ] **TikTok**: Reemplazar `https://tiktok.com/@jairotraine` con el perfil real

## 📝 Formulario de Contacto

### Formspree
En `src/pages/contacto.astro`:

1. Crear cuenta en [Formspree.io](https://formspree.io/)
2. Crear un nuevo formulario
3. Reemplazar `YOUR_FORM_ID` en dos lugares:
   - Línea del form action: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Línea del fetch: `fetch('https://formspree.io/f/YOUR_FORM_ID'`

## 🌐 Dominio y Hosting

### Configuración de Dominio
- [ ] Registrar dominio (sugerencia: jairotraine.com)
- [ ] Actualizar en `astro.config.mjs`: `site: 'https://tudominio.com'`

### Deployment
Opciones recomendadas:
- **Vercel** (Recomendado): [vercel.com](https://vercel.com)
- **Netlify**: [netlify.com](https://netlify.com)

## ✏️ Contenido Personalizado

### Texto y Bio
- [ ] Revisar y personalizar la historia en `AboutUs.astro`
- [ ] Ajustar las estadísticas (años de experiencia, clientes transformados, etc.)
- [ ] Personalizar las certificaciones en `TeamSection.astro`

### Testimonios Reales
En `src/components/TestimonialSlider.tsx`:
- [ ] Reemplazar testimonios de ejemplo con testimonios reales de clientes
- [ ] Usar fotos reales de clientes (con su permiso)
- [ ] Actualizar transformaciones y logros reales

### Servicios
- [ ] Revisar descripciones de servicios en `FeaturedServices.astro`
- [ ] Ajustar precios si es necesario (actualmente no se muestran)
- [ ] Personalizar features de cada servicio según lo que ofreces

## 🎨 Ajustes de Diseño (Opcional)

### Colores
Los colores actuales son:
- **Primary (Verde limón oscuro)**: `#7BA82F`
- **Secondary (Negro/Gris)**: `#1A1A1A`

Si deseas cambiarlos, edita `tailwind.config.mjs`

### Logo en lugar de Texto
Si prefieres un logo en lugar del texto "JAIRO TRAINE":
1. Agrega tu logo a `/public/logo.png`
2. Edita `src/components/Header.astro` líneas 10-13

## 📱 PWA y Manifest

En `public/manifest.json` ya está configurado pero podrías:
- [ ] Personalizar los iconos cuando tengas el favicon
- [ ] Ajustar colores del tema si los cambias

## 🚀 Testing

Antes de publicar:
- [ ] Probar el formulario de contacto
- [ ] Verificar links de redes sociales
- [ ] Probar en móvil (responsive)
- [ ] Verificar que todos los links funcionen
- [ ] Revisar ortografía y gramática

## 📊 Analytics (Opcional)

Considera agregar:
- Google Analytics
- Facebook Pixel
- Instagram Insights

## 🔒 SEO Adicional (Opcional)

- [ ] Crear cuenta en Google Search Console
- [ ] Enviar sitemap.xml
- [ ] Configurar Google My Business
- [ ] Optimizar meta descriptions por página

---

## Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Ver sitio en: http://localhost:4321
```

## Contacto para Soporte

Si necesitas ayuda con alguna de estas tareas, no dudes en contactar al desarrollador.

---

**¡Tu nueva landing page está lista para personalizar! 🎉**

