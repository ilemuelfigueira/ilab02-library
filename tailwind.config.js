/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './stories/**/*.{html, ts, js, tsx, jsx}',
      './stories/**/*'
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          500: '#81D8F7',
          300: '#A1E1F9'
        },
        gray: {
          900: '#121214',
          800: '#202024',
          400: '#7C7CBA',
          200: '#C4C4CC',
          100: '#E1E1E6'
        }
      }
    },
  },
  plugins: [],
}