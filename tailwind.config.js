/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      colors: {
        Gradient1: "hsl(6, 100%, 80%) to hsl(335, 100%, 65%)",
        PaleBlue: "hsl(243, 100%, 93%)",
        GrayishBlue: "hsl(229, 7%, 55%)",
        DarkBlue: "hsl(228, 56%, 26%)",
        VeryDarkBlue: "hsl(229, 57%, 11%)",
      },
      backgroundImage:{
        'mobile-bg': "url('../images/bg-mobile.png')",
        'desktop-bg': "url('../images/bg-desktop.png')",
      }
    },
  },
  plugins: [],
};
