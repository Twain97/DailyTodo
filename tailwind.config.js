/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./_src/**/*.{html,js,vue,css}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      height:{
        ht05:"5vh",
        ht1:"10vh",
        ht2:"20vh",
        ht3:"30vh",
        ht4:"40vh",
        ht5:"50vh",
        ht6:"60vh",
        ht7:"70vh",
        ht8:"80vh",
        ht9:"90vh",
        92:"92vh",
        htFull:"100vh"
      }
    },
  },
  plugins: [],
}

