/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.08)',
        'blue-glow': '0 0 25px rgba(59, 130, 246, 0.25)',
      },
      backdropBlur: {
        'md': '12px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'all': 'all',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}; 