/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#03045e',
        secondary: '#0077b6',
        accent: '#00b4d8',
        background: '#caf0f8',
      }
    },
  },
  plugins: [],
}

