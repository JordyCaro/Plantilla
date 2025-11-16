/**
 * Helper functions for image handling in the project
 */

import type { ImageMetadata } from 'astro';

/**
 * Type guard to check if a value is ImageMetadata
 */
export function isImageMetadata(src: string | ImageMetadata): src is ImageMetadata {
  return typeof src === 'object' && src !== null && 'src' in src && 'width' in src && 'height' in src;
}

/**
 * Get image src as string (works with both URL strings and ImageMetadata)
 */
export function getImageSrc(src: string | ImageMetadata): string {
  if (isImageMetadata(src)) {
    return src.src;
  }
  return src;
}

/**
 * Get optimized image dimensions from ImageMetadata
 */
export function getImageDimensions(
  src: string | ImageMetadata, 
  fallbackWidth: number = 800, 
  fallbackHeight: number = 600
): { width: number; height: number } {
  if (isImageMetadata(src)) {
    return {
      width: src.width,
      height: src.height
    };
  }
  return { width: fallbackWidth, height: fallbackHeight };
}

/**
 * Image path constants for easier imports
 * 
 * Usage:
 * import { IMAGES } from '../utils/imageHelpers';
 * import heroImage from IMAGES.hero.main;
 */
export const IMAGE_PATHS = {
  // Update these paths when you add images
  hero: {
    main: '../assets/images/hero/hero-bg.jpg',
    alt: '../assets/images/hero/hero-alt.jpg'
  },
  about: {
    profile: '../assets/images/about/jairo-profile.jpg'
  },
  servicios: {
    entrenamiento: '../assets/images/servicios/entrenamiento-personalizado.jpg',
    seminarios: '../assets/images/servicios/seminarios-talleres.jpg',
    nutricion: '../assets/images/servicios/planes-nutricionales.jpg',
    asesoria: '../assets/images/servicios/asesoria-online.jpg',
    articulos: '../assets/images/servicios/venta-articulos-deportivos.jpg'
  }
} as const;

