/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
            light: '#00FFAA',
            DEFAULT: '#00FF88',
            dark: '#00CC6E',
            // Mejores contrastes para accesibilidad
            '50': '#E6FFF5',
            '100': '#CCFFEB',
            '200': '#99FFD7',
            '300': '#66FFC3',
            '400': '#33FFAF',
            '500': '#00FF88', // Color base fluorescente radioactivo
            '600': '#00CC6E',
            '700': '#009955',
            '800': '#00663C',
            '900': '#003322'
        },
        secondary: {
            light: '#4A4A4A',
            DEFAULT: '#2D2D2D',
            dark: '#1A1A1A',
            // Escala de grises mejorada
            '50': '#F9FAFB',
            '100': '#F3F4F6',
            '200': '#E5E7EB',
            '300': '#D1D5DB',
            '400': '#9CA3AF',
            '500': '#6B7280',
            '600': '#4B5563',
            '700': '#374151',
            '800': '#1F2937',
            '900': '#111827'
        },
        accent: {
            light: '#00FFAA',
            DEFAULT: '#00FF88',
            dark: '#00CC6E'
        },
        success: {
            light: '#00FFAA',
            DEFAULT: '#00FF88',
            dark: '#00CC6E'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true
  }
}