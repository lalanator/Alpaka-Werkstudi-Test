/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./presets.js')
  ],
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

