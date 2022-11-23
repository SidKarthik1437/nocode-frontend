/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FAFAFF",
        black: "#090F15",
      },
      fontFamily: {
        sans: ["var(--font-raleway)"],
      },
    },
  },
  plugins: [],
};
