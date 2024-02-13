/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      fontFamily: {
        'custom': ['"Coolvetica RG"'],
        'feo': ['Teko', 'sans-serif'],
        'gg': ['Roboto', 'sans-serif'],
        'teko': ["Teko variant0", 'Tofu'],

      },
      listStyleImage: {
        checkmark: 'url("../img/checkmark.png")',
      },
      div:{
        
      },
    },
    container:{
      center:true,
    }
  },
  plugins: [],
}
