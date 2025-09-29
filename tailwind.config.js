/** @type {import('tailwindcss').Config} */
// biome-ignore lint/style/noDefaultExport: <explanation>
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
        },
        'primary-red': '#DC2626',
      }
    },
  },
  plugins: [],
}