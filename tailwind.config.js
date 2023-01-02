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
      fontSize: {
        'caption': '0.425rem',
        'b3': '0.5625rem',
        'b2': '0.75rem',
        'b': '1rem',
        'sh2': '1.33125rem',
        'sh1': '1.775rem',
        'h3': '2.36875rem',
        'h3': '3.15625rem',
        'h1': '4.20625rem',
      },
      colors: {
        cream: "#FFFFFA",
        tomato: "#FF5D43",
        lake: "#00AFFA",
        lavender: "#B2AFFF",
        teal: "#38DEDE",
        cottonCandy: "FFD4D4",
        warmGray: "F0F0F0",
        lemonLime: "F6F963",
        peach: "#FFDBA5",
        sienna: "#D75844",
        robinEgg: "#CFF4FF",
        coal: "#121712",
        lime: "#90D644",
        algae: "#5AC7B1",
        cobalt: "#3522EC",
      },
    },
  },
  plugins: [],
};
