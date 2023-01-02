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
        sans: ["var(--pp-object-sans)", ...fontFamily.sans],
      },
      colors: {
        cream: "#FFFFFA",
      },
    },
  },
  plugins: [],
};
