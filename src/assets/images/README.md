# 📸 Carpeta de Imágenes

Esta carpeta está diseñada para almacenar **todas las imágenes reales del proyecto** que se usarán en lugar de las imágenes de Unsplash.

## 📁 Estructura Recomendada

```
src/assets/images/
├── hero/              # Imágenes del hero principal
│   ├── hero-bg.jpg
│   └── hero-alt.jpg
├── about/             # Imágenes de la sección "Sobre Mí"
│   └── jairo-profile.jpg
├── servicios/         # Imágenes para cada servicio
│   ├── entrenamiento-personalizado.jpg
│   ├── seminarios-talleres.jpg
│   ├── planes-nutricionales.jpg
│   ├── asesoria-online.jpg
│   └── venta-articulos-deportivos.jpg
├── transformaciones/  # Imágenes antes/después
│   ├── cliente1-antes.jpg
│   ├── cliente1-despues.jpg
│   └── ...
├── blog/              # Imágenes de artículos del blog
│   ├── errores-comunes-peso.jpg
│   ├── mentalidad-ganadora.jpg
│   └── rutina-principiantes.jpg
├── equipo/            # Fotos del equipo
│   └── jairo-main.jpg
└── logos/             # Logos y favicons
    ├── logo.png
    └── favicon.png
```

## 🚀 Cómo Usar las Imágenes

### Opción 1: Con OptimizedImage (Recomendado)

Para imágenes optimizadas automáticamente:

```astro
---
import OptimizedImage from '../components/ui/OptimizedImage.astro';
import heroImage from '../assets/images/hero/hero-bg.jpg';
---

<OptimizedImage 
  src={heroImage} 
  alt="Descripción de la imagen"
  width={1200}
  height={800}
  loading="eager"
/>
```

### Opción 2: Con Image de Astro directamente

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero/hero-bg.jpg';
---

<Image 
  src={heroImage} 
  alt="Descripción"
  width={1200}
  height={800}
  format="webp"
  quality={80}
/>
```

### Opción 3: Imágenes en public/ (Sin optimización)

Para imágenes estáticas que no necesitan optimización (como favicons):

```html
<!-- Coloca el archivo en public/logo.png -->
<img src="/logo.png" alt="Logo" />
```

## 📝 Notas Importantes

1. **Formato recomendado**: JPG para fotos, PNG para logos/transparencias, WebP cuando sea posible
2. **Tamaños sugeridos**:
   - Hero: 1920x1080px (Full HD)
   - Cards/Servicios: 800x600px
   - Perfiles: 600x600px (cuadradas)
   - Blog: 1200x630px (ratio 1.91:1 para Open Graph)
3. **Peso máximo**: Intenta mantener las imágenes bajo 500KB antes de optimización
4. **Nombres descriptivos**: Usa nombres descriptivos como `jairo-training-gym.jpg` en lugar de `IMG_1234.jpg`

## 🔄 Reemplazar Imágenes de Unsplash

Cuando tengas las imágenes reales, simplemente:
1. Colócalas en la estructura correspondiente arriba
2. Importa la imagen en el componente
3. Reemplaza la URL de Unsplash con la imagen importada

Ejemplo:
```astro
// Antes:
<img src="https://images.unsplash.com/photo-..." />

// Después:
---
import heroImage from '../assets/images/hero/hero-bg.jpg';
---
<img src={heroImage.src} alt="..." />
```

## ✅ Ventajas de Usar src/assets/

- ✅ Optimización automática de imágenes
- ✅ Generación de formatos WebP/AVIF
- ✅ Lazy loading automático
- ✅ Placeholders blur
- ✅ Responsive images con srcset
- ✅ Mejor rendimiento y SEO

