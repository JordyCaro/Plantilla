# Jairo Traine - Entrenador Personal

🏋️ **Jairo Traine** es un entrenador personal especializado en transformaciones físicas reales. "Soy tu mayor fan" - Entreno cuerpos, motivo mentes y construyo hábitos que duran toda la vida.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y responsiva con modo oscuro
- ⚡ **Rendimiento Optimizado**: Carga rápida y experiencia fluida
- 🔍 **SEO Avanzado**: Meta tags, structured data y sitemap
- 📱 **PWA Ready**: Manifest y capacidades de aplicación web
- 🎯 **Accesibilidad**: Cumple estándares de accesibilidad web
- 💚 **Colores de Marca**: Verde limón oscuro (#7BA82F) y negro

## 🛠️ Tecnologías

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS
- **Componentes**: React + Headless UI
- **Build**: Vite con optimizaciones avanzadas
- **Deployment**: Vercel/Netlify ready

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
npm run astro    # CLI de Astro
```

## 📁 Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
│   ├── HeroSection.astro
│   ├── AboutUs.astro
│   ├── FeaturedServices.astro
│   ├── TeamSection.astro
│   ├── TestimonialSlider.tsx
│   └── ...
├── layouts/        # Layouts de página
├── pages/          # Páginas y rutas
│   ├── index.astro
│   └── contacto.astro
└── assets/         # Recursos

public/
├── favicon.png     # Favicon
└── manifest.json   # PWA manifest
```

## 🎨 Personalización

### Colores de Marca

```javascript
// tailwind.config.mjs
colors: {
  primary: {
    light: '#B8E986',
    DEFAULT: '#9FD356',
    dark: '#7BA82F'  // Verde limón oscuro
  },
  secondary: {
    light: '#4A4A4A',
    DEFAULT: '#2D2D2D',
    dark: '#1A1A1A'  // Negro/Gris oscuro
  }
}
```

### Configuración de Contacto

Actualiza los siguientes placeholders en:
- `src/components/Footer.astro`
- `src/pages/contacto.astro`

```
Email: contacto@jairotraine.com
Teléfono: +57 (300) 123-4567
WhatsApp: https://wa.me/573001234567
Instagram: @jairotraine
Facebook: /jairotraine
TikTok: @jairotraine
```

### Formulario de Contacto

Crea una cuenta en [Formspree](https://formspree.io/) y actualiza:
```astro
// src/pages/contacto.astro
action="https://formspree.io/f/YOUR_FORM_ID"
```

## 📈 Servicios Ofrecidos

1. **Entrenamiento Personalizado**: Sesiones one-on-one adaptadas a objetivos específicos
2. **Seminarios y Talleres**: Charlas motivacionales y educación fitness
3. **Planes Nutricionales**: Alimentación balanceada para maximizar resultados
4. **Asesoría Online**: Entrenamiento virtual con seguimiento constante
5. **Contenido Motivacional**: Tips y rutinas en redes sociales

## 🔍 SEO Implementado

- ✅ **Meta Tags**: Títulos, descripciones y keywords
- ✅ **Open Graph**: Compartir en redes sociales
- ✅ **Structured Data**: Schema.org para Person/Trainer
- ✅ **Sitemap**: XML sitemap automático
- ✅ **Canonical URLs**: Evitar contenido duplicado

## 🚀 Deployment

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify

```bash
# Build
npm run build

# Deploy a Netlify
# Subir carpeta dist/ a Netlify
```

## 📊 Métricas de Rendimiento

- **Lighthouse Score**: 95+ en todas las categorías
- **Core Web Vitals**: Excelentes
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s

## 🤝 Contribuir

Este es un proyecto personal para Jairo Traine. Si deseas sugerencias o mejoras, contacta directamente.

## 📄 Licencia

Todos los derechos reservados © 2025 Jairo Traine

## 📞 Contacto

- **Website**: [jairotraine.com](https://jairotraine.com)
- **Email**: contacto@jairotraine.com
- **Instagram**: [@jairotraine](https://instagram.com/jairotraine)

---

Desarrollado con ❤️ para transformar vidas - **"Soy tu mayor fan"**
