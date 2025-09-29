/** @type {import('tailwindcss').Config} */
// biome-ignore lint/style/noDefaultExport: <explanation>
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        accent: '#EAC243',
        primary: {
          red: '#DC2626',
          black: '#000000',
          white: '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
}