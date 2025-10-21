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
        // Set Montserrat as the default sans-serif font for Tailwind utilities
        'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        'poppins': ['Poppins', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // If you plan to use Tailwind Typography, uncomment the line below.
    // require('@tailwindcss/typography'), 
  ],
}