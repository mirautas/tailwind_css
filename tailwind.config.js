/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*/*.html', 
  'public/styles.css'],
  theme: {
    extend: {
      colors:{
        primary: '#FF6363',
        secondary: {
          100: 'E2E2D5',
          200: '#888883',
        }
      }
    },
    fontFamily: {
      body: ['Nunito'],
    }
  },
  plugins: [],
}
