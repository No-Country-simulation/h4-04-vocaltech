/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      // Colores personalizados
      colors: {
        oscuro: "#041D3E",
        verde: "#2A897D",
        violeta: "#8326E9",
        blanco: "#FFFFFF",
        azul: "#3F8AED"
      },
      // Fuentes personalizadas
      fontFamily: {
        manrope: ["Manrope", "sans-serif"], 
      },
      // Otras extensiones que puedas necesitar en el futuro
    },
  },
  plugins: [],
};
