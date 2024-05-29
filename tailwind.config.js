/** @type {import('tailwindcss').Config} */
/*eslint no-undef: "error"*/
/*eslint-env node*/
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#ffffff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        bg1: "url('../src/assets/bg1.png')",
      },
      animation: {
        dropIn: "dropin .5s ease-in-out",
      },

      // that is actual animation
      keyframes: () => ({
        dropin: {
          "0%": { opacity: 0, transform: "translate(0,-200px)" },
          "100%": { opacity: 1, transform: "translate(0,0)" },
        },
      }),
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
});
