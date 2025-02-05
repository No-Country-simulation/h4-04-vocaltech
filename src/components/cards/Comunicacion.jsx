/* eslint-disable react/prop-types */
import { useState } from 'react';
import microphone from "../../assets/icons/Microphone Large.png";
import image20 from "../../assets/images/image 20.png";
import vector from "../../assets/icons/Vector.png";
import checkCircle from "../../assets/icons/Check Circle.png";

const Comunicacion = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-lg shadow-lg flex flex-col w-[300px] h-[350px] overflow-hidden transition-transform duration-300 ${
        isHovered ? "bg-blue-950" : "bg-blue-500"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen como fondo dinámico */}
      {isHovered && (
        <img
          src={image20}
          alt="Background Image"
          className="absolute bottom-0 right-0 object-contain h-[267px] w-[194px] -mb-[0.5rem] -mr-[0.1rem] opacity-20 pointer-events-none"
        />
      )}

      {!isHovered ? (
        <>
          {/* Título e icono */}
          <div className="flex items-center p-4">
            <img src={microphone} alt="Microphone Icon" className="w-6 h-6" />
            <h3 className="text-lg font-bold text-blanco ml-2 font-manrope">
              {title}
            </h3>
          </div>
          {/* Imagen posicionada */}
          <div className="relative flex-1">
            <img
              src={image20}
              alt={title}
              className="absolute bottom-0 right-0 object-contain h-[267px] w-[194px] -mb-[0.5rem] -mr-[0.1rem]"
            />
          </div>
          {/* Franja gris */}
          <div className="absolute bottom-0 w-full bg-gray-400 bg-opacity-50 px-4 py-0">
            <p className="text-lg font-bold text-blanco font-manrope">
              {description}
            </p>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full text-white px-4">
          {/* Contenedor para el vector y texto */}
          <div className="flex items-center mb-4">
            <img
              src={vector}
              alt="Vector Icon"
              className="w-5 h-5 flex-shrink-0 mr-2"
            />
            <h3 className="text-lg font-bold font-manrope text-blanco">
              Servicio Recomendado para...
            </h3>
          </div>
          {/* Lista de recomendaciones */}
          <ul className="space-y-2 text-sm text-center">
            {[
              "Presentar ideas con impacto.",
              "Inspirar a tu equipo y audiencia.",
              "Mejorar tu presencia ejecutiva.",
              "Propulsar tu negocio.",
              "Superar el miedo escénico.",
              "Fomentar una cultura de colaboración.",
              "Construir confianza en sí mismo.",
            ].map((text, index) => (
              <li key={index} className="flex items-center">
                {/* Icono con el check estilizado */}
                <img
                  src={checkCircle}
                  alt="Check Circle Icon"
                  className="w-3 h-3 flex-shrink-0 mr-2"
                />
                <span className="leading-tight">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Comunicacion;
