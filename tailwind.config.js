/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
      fontFamily: {
          montserrat: 'Montserrat',
          raleway: 'Raleway',
          proximaNova: 'Proxima Nova',
          leckerliOne: 'Leckerli One',
      },
  
      fontSize: {
          button1: '1.56rem',
          h4: '1.38rem',
          h2: '2.62rem',
          h3: '1.88rem',
          h1: '4.62rem',
          text1: '1.38rem',
          h5: '1.25rem',
          text3: '0.74rem',
          text2: '1rem',
          texte4: '1.19rem'
      },
    extend: {},
  },
  plugins: [],
}

