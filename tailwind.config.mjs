/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
            light: '#7CFF9F',
            DEFAULT: '#4FFF85',
            dark: '#2BEB6C',
            // Mejores contrastes para accesibilidad
            '50': '#EFFFF6',
            '100': '#DAFFE9',
            '200': '#B6FFD5',
            '300': '#8EFFBF',
            '400': '#6AFFAD',
            '500': '#4FFF85', // Color base fluorescente
            '600': '#33E56A',
            '700': '#22C657',
            '800': '#169A43',
            '900': '#0D6E32'
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
            light: '#7CFF9F',
            DEFAULT: '#4FFF85',
            dark: '#2BEB6C'
        },
        success: {
            light: '#7CFF9F',
            DEFAULT: '#4FFF85',
            dark: '#2BEB6C'
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