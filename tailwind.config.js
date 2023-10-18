/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#1E2122",
        "secondary-color": "#4C5255",
      },
      // fontFamily: {
      //   dmSans: ["DMSans", "sans-serif"],
      //   space: ["SpaceGrotesk", "sans-serif"],
      // },
      // fontFamily: {
      //   raleway: ["Raleway", "sans-serif"],
      //   rancho: ["Rancho", "cursive"],
      // },
    },
  },
  plugins: [require("daisyui")],
};
