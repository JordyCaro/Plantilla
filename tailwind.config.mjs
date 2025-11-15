/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
            light: '#B8E986',
            DEFAULT: '#9FD356',
            dark: '#7BA82F',
            // Mejores contrastes para accesibilidad
            '50': '#F0F9E8',
            '100': '#E1F3D1',
            '200': '#C3E7A3',
            '300': '#A5DB75',
            '400': '#87CF47',
            '500': '#7BA82F', // Color base
            '600': '#6B9629',
            '700': '#5B8423',
            '800': '#4B721D',
            '900': '#3B6017'
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
            light: '#B8E986',
            DEFAULT: '#9FD356',
            dark: '#7BA82F'
        },
        success: {
            light: '#B8E986',
            DEFAULT: '#9FD356',
            dark: '#7BA82F'
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