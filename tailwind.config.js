/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          300: '#2A2C2D',
        },
        primary: {
          DEFAULT: '#4242E0',
          500: '#4242E0'
        },
        secondary: {
          DEFAULT: '#EBEFF2',
          300: '#959EA6',
          400: '#D4E0E9',
          500: '#EBEFF2',
          600: '#C8D2DA'
        },
      }
    },
  },
  plugins: [],
}

