/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0D9488',   // A rich, modern teal
        'secondary': '#2dd4bf', // A lighter, vibrant teal for accents
        'accent': '#FBBF24',   // A warm amber/gold for buttons and highlights
        'dark': '#1F2937',     // A deep charcoal for text
        'light': '#F9FAFB',     // A very light gray for backgrounds
      },
      fontFamily: {
        // You can add a custom font here if you like, e.g., 'Poppins', sans-serif
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}