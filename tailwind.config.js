/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        main:{
          'blue':'#1C1E53',
          'yellow': '#FCD980',
          'gray': '#EEF4FA',
          'text-color': '#282938',
          'Royal-blu':'#2405F2'
        }
      },
      fontFamily:{
        'poppins': ['Poppins', 'Arial', 'sans-serif'],
      },
      maxWidth:{
        'base': '1320px',
        'blog':'840px'
      },
      fontSize:{
        'h3size':'38px'
      },
      lineHeight:{
        'h3height':'56px'
      },
      backgroundImage:{
        'main-img': "url('/img/woman.png')"
      }
    },
  },
  plugins: [],
}