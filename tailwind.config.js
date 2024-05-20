/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //colours in the project 
      colors:{
        primary:"#23B5FF",
        secondary:"#EF863E"
      }
    },

  },
  plugins: [],
}