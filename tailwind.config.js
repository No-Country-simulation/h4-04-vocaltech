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
        'dm-sans': ['DM Sans', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'], 
      },
      // Animaciones personalizadas
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        gradientMove: 'gradientMove 3s ease infinite',
        marquee: 'marquee 40s linear infinite', // ← Esta es la animación de texto en movimiento
      },
      // Agregar imagen de fondo personalizada
      backgroundImage: {
        'hero-background': "url('../assets/images/image 44.png')",
      },
    },
  },
  plugins: [],  
};
