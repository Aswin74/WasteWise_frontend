/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ww: {
          logo: "#5ce1e6",
          primary: "#323650",
          white: "#f0efeb",
          black: "#212529",
          gray: "#6b7280"
        },
      },
    },
  },
  plugins: [],
}
