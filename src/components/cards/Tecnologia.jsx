/* eslint-disable react/prop-types */
import { useState } from 'react';
import cpu from "../../assets/icons/CPU Bolt.png";
import imag17 from "../../assets/images/image 17.png";
import vector from "../../assets/icons/Vector.png";
import checkCircle from "../../assets/icons/Check Circle.png";

const Tecnologia = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-lg shadow-lg flex flex-col w-[300px] h-[350px] overflow-hidden transition-transform duration-300 ${
        isHovered ? "bg-blue-950" : "bg-emerald-600"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen como fondo dinámico */}
      {isHovered && (
        <img
          src={imag17}
          alt="Background Image"
          className="absolute bottom-0 right-0 object-contain h-[267px] w-[207px] -mb-[0.5rem] -mr-[0.5rem] opacity-20 pointer-events-none"
        />
      )}

      {!isHovered ? (
        <>
          <div className="flex items-center p-4">
            <img src={cpu} alt="CPU Icon" className="w-6 h-6" />
            <h3 className="text-base font-bold text-white ml-2">{title}</h3>
          </div>
          <div className="relative flex-1">
            <img
              src={imag17}
              alt={title}
              className="absolute bottom-0 right-0 object-contain h-[267px] w-[207px] -mb-[0.5rem] -mr-[0.5rem]"
            />
          </div>
          <div className="absolute bottom-0 w-full bg-gray-400 bg-opacity-50 px-4 py-2">
            <p className="text-sm font-bold text-white font-manrope">{description}</p>
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
            <h3 className="text-lg font-bold font-manrope text-white">
              Servicio recomendado para...
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-left w-full">
            {[
              "No sé por donde empezar a desarrollar mi producto digital.",
              "No encuentro talento TI validado.",
              "Busco optimizar mis procesos con soluciones digitales.",
              "Construir un MVP sólido y escalable.",
              "Evaluación de habilidades técnicas en candidatos.",
              "Automatizar tareas repetitivas.",
              "Fortalecer la seguridad tecnológica.",
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

export default Tecnologia;
