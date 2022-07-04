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
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
