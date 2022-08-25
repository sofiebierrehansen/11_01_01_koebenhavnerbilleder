/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      cloudy: "#CFEAEB",
      gloomy: "#6DA4A3",
      army: "#6DA4A3",
      light: "#FAFAFA",
      dark: "#262626",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
