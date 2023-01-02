const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PP Object Sans", ...fontFamily.sans],
        rounded: ["PP Pangram Sans Rounded"]
      },
      colors: {
        cream: "#FFFFFA",
      },
    },
  },
  plugins: [],
};
