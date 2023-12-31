/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}',],
  theme: {
    extend: {
      fontFamily:{
        Sofia: ['Sofia Sans Condensed'],
      },
      backgroundImage: {
        'backgroundCover': "url('/img/backgroundcover.jpg')",
      }
    },
  },
  plugins: [],
}

