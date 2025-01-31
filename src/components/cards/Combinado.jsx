/* eslint-disable react/prop-types */
import { useState } from 'react';
import round from "../../assets/icons/Round Graph.png";
import image16 from "../../assets/images/image 16.png";
import vector from "../../assets/icons/Vector.png";
import checkCircle from "../../assets/icons/Check Circle.png";

const Combinado = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-lg shadow-lg flex flex-col w-[300px] h-[350px] overflow-hidden transition-transform duration-300 ${
        isHovered ? "bg-blue-950" : "bg-purple-700"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen como fondo dinámico */}
      {isHovered && (
        <img
          src={image16}
          alt="Background Image"
          className="absolute bottom-0 right-0 object-contain h-[267px] w-[217px] -mb-[0.5rem] -mr-[0.5rem] opacity-20 pointer-events-none"
        />
      )}

      {!isHovered ? (
        <>
          <div className="flex items-center p-4">
            <img src={round} alt="Round Graph Icon" className="w-6 h-6" />
            <h3 className="text-base font-bold text-white ml-2">{title}</h3>
          </div>
          <div className="relative flex-1">
            <img
              src={image16}
              alt={title}
              className="absolute bottom-0 right-0 object-contain h-[267px] w-[217px] -mb-[0.5rem] -mr-[0.5rem]"
            />
          </div>
          <div className="absolute bottom-0 w-full bg-gray-400 bg-opacity-50 px-4 py-2">
            <p className="text-sm text-white">{description}</p>
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
            <h3 className="text-lg font-bold text-white font-manrope leading-normal">
              Servicio recomendado para...
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-left w-full">
            {[  
              "Crear y presentar mi proyecto de forma efectiva.",
              "No estoy seguro cómo comunicar mi MVP a clientes o inversores.",
              "Tengo problemas para escalar mi proyecto.",
              "Fortalecer mi liderazgo para quiar a mi equipo.",
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-2">
                {/* Icono con el check estilizado */}
                <img
                  src={checkCircle}
                  alt="Check Circle Icon"
                  className="w-3 h-3 flex-shrink-0"
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

export default Combinado;
