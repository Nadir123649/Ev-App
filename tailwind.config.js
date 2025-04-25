/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        oxygen: ["Oxygen", "sans-serif"],
      },
      colors: {
        blue: "#4BB7F3",
        lightblack: "#515151",
        lightgray: "#EFEFEF",
        lightred: "#FF6D66",
      },
      screens: {
        xs: "426px",
        md: "769px",
        lg: "1025px",
        xl: "1280px",
      },
      width: {
        custom: "1240px",
      },
    },
  },
  plugins: [],
};
