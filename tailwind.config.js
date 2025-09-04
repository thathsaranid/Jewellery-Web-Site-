/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",      // Include your HTML file(s)
    "./src/**/*.{html,js,jsx}" // Include all HTML/JS/JSX files in src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Optional: custom font
      },
      colors: {
        primary: '#facc15', // Optional: add custom colors
      },
    },
  },
  plugins: [],
}

