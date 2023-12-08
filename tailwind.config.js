/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        textcol: '#f0ebd8',
        bgcol1:'#0d1321',
        bgcol2:'#1d2d44',
        bgcol3:'#3e5c76',
        bgcol4:'#748cab',
      },
      fontFamily:{
          "Merriweather":['Merriweather', 'sans-serif'],
          "Orbitron":['Orbitron','sans-serif'],
            
      },
    },
  },
  plugins: [],
}

