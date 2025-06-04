// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'], // ou une autre police pour les titres
      },
      colors: {
        'primary': '#1D4ED8',      // Bleu profond (Tailwind blue-700)
        'primary-hover': '#1E40AF',// Bleu plus foncé (Tailwind blue-800)
        'primary-light': '#EFF6FF',// Bleu très clair (Tailwind blue-50)
        'secondary': '#F59E0B',    // Ambre (Tailwind amber-500)
        'secondary-hover': '#D97706',// Ambre plus foncé (Tailwind amber-600)
        'accent': '#EC4899',       // Rose (Tailwind pink-500)
        'accent-hover': '#DB2777', // Rose plus foncé (Tailwind pink-600)
        'light-bg': '#F9FAFB',     // Gris très clair (Tailwind gray-50)
        'medium-bg': '#F3F4F6',   // Gris clair (Tailwind gray-100)
        'dark-text': '#1F2937',    // Gris foncé pour le texte (Tailwind gray-800)
        'medium-text': '#4B5563',  // Gris moyen pour le texte (Tailwind gray-600)
        'light-text': '#6B7280',   // Gris clair pour le texte (Tailwind gray-500)
      },
      // ... (animations, keyframes si vous en avez ajouté)
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Utile pour les images de portfolio
  ],
}