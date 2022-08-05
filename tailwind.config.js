/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        orange: "#D87D4A",
        lightorange: "#FBAF85",
        gray: "#F1F1F1",
        lightgray: "#FAFAFA",
        charcoal: "#101010",
      },
    },
  },
  plugins: [],
};
