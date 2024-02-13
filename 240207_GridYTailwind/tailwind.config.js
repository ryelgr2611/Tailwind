/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        'music': "url('imagenes/phone_14_01.jpg')",
        'get-ready': "url('imagenes/getReady.png')",
        'mystery': "url('imagenes/mystery.png')",
        'tipa': "url('imagenes/retrato-mujer-pelo-rosa-rizado-enormes-auriculares-blancos.jpg')",
        'musai': "url('imagenes/musai.png')",
        'tipa-musai': "url('imagenes/tipaMusai.png')",
        'auriculares': "url('imagenes/auriculares.png')",
        '1': "url('imagenesGrid2/1.png')",
        '2': "url('imagenesGrid2/2.png')",
        '3': "url('imagenesGrid2/3.png')",
        '4': "url('imagenesGrid2/4.png')",
        '5': "url('imagenesGrid2/5.png')",
        '6': "url('imagenesGrid2/6.png')",
        '7': "url('imagenesGrid2/7.png')",
        '8': "url('imagenesGrid2/8.png')",
        '9': "url('imagenesGrid2/9.png')",
        '10': "url('imagenesGrid2/10.png')",
        '11': "url('imagenesGrid2/11.png')",
        '12': "url('imagenesGrid2/12.png')",
        '13': "url('imagenesGrid2/13.png')",
        '14': "url('imagenesGrid2/14.png')",
        '15': "url('imagenesGrid2/15.png')",
        '16': "url('imagenesGrid2/16.png')",
        '17': "url('imagenesGrid2/17.png')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '100%': '100%',
      },
    },
  },
  plugins: [],
};
