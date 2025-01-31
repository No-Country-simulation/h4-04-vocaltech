import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar la imagen automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, [images.length]);

  return (
    <div className="relative w-full max-w-[90%] h-[110vh] overflow-hidden flex items-center justify-center mx-auto">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="max-w-full max-h-full object-contain flex-shrink-0"
          />
        ))}
      </div>

      {/* Fondo de degradado para diseño estético */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none"></div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
