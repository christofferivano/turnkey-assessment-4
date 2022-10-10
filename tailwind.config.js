/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button': '#009DD4',
        'google-button': '#40494D',
        'gray-text': '#586368',
        'green-gain': '#22AB1F',
        'red-loss': '#D43232'
      },
      height: {
        '100': '32rem'
      }
    },
  },
  plugins: [],
}
