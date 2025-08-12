/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'spotify-black': '#121212',
        'spotify-green': '#1DB954',
        'spotify-dark-gray': '#282828',
        'spotify-light-gray': '#b3b3b3',
      },
      textColor: {
        'spotify-green': '#1DB954',
        'spotify-light-gray': '#b3b3b3',
      },
    },
  },
  plugins: [],
}

