/** @type {import('tailwindcss').Config} */
export default {
  content:  [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        azul: '#1E3A8A',
        rosado: '#F472B6',
        violeta: '#6B21A8',
        blanco: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
