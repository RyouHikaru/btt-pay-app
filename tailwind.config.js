/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ], 
  theme: {
    extend: {
      fontFamily: {
        'sans':  ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        'slide-out': {
          '100%': {
            top: '-0.75rem',
            backgroundColor: 'rgb(254 243 199)',
            transform: 'scale(0.85)'
          }
        },
        'show-menu': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'slide-out': 'slide-out 0.2s ease-in-out forwards',
        'show-menu': 'show-menu 0.2s ease-in-out forwards',
        'fade-in-short': 'fade-in 0.3s ease-in-out',
      }
    },
  },
  plugins: [],
}
