/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Poppins', 'sans-serif'],
      },
      colors: {
          primary: '#0284c7', 
          secondary: '#38bdf8', 
          dark: '#0f172a', 
      }
    },
  },
  plugins: [],
}