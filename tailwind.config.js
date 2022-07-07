const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hover: '#c9a26f',
      },
      animation: {
        'spin-vinyl': 'spin 10s linear infinite',
      },
      fontFamily: {
        sans: ['acumin-pro', ...defaultTheme.fontFamily.sans],
        display: ['acumin-pro-wide', ...defaultTheme.fontFamily.sans],
      },
      transitionDelay: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
        1100: '1100ms',
        1200: '1200ms',
        1300: '1300ms',
        1400: '1400ms',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
