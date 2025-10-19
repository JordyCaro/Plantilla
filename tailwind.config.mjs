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
          dark: '#7BA82F'
        },
        secondary: {
          light: '#4A4A4A',
          DEFAULT: '#2D2D2D',
          dark: '#1A1A1A'
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