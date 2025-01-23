import Navbar from "../components/Navbar";
import { MdArrowRightAlt } from "react-icons/md";
import empresa from "../assets/images/empresa grande.png";
import emprendedor from "../assets/images/imagen ilustrativa.png";
import infrastructure from "../assets/icons/Buildings.png";
import Microphone from "../assets/icons/Microphone Large morado.png";
import CPU from "../assets/icons/CPU Bolt morado.png";
import Round from "../assets/icons/Round Graph morado.png";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="mt-[100px] px-8 py-16 bg-white shadow-md rounded-b-[16px] border border-gray-300 mx-16 flex flex-col gap-10">
        <div className="grid grid-cols-4 gap-8 w-full">
          {/* Soluciones Adaptadas */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={infrastructure}
                alt="infrastructure"
                className="w-6 h-6"
              />
              <h2 className="text-lg font-semibold text-stone-600">
                Soluciones Adaptadas
              </h2>
            </div>

            {/* Empresas */}
            <div className="flex items-end gap-4 p-2 h-[108px] rounded-lg">
              <img
                src={empresa}
                alt="Empresas"
                className="w-[40%] rounded-md object-cover"
              />
              <div className="flex flex-col justify-end h-full p-2 gap-4">
                <h3 className="text-[15px] font-semibold text-black font-manrope">
                  Empresas
                </h3>
                <p className="text-[10px] font-medium text-[#222] font-manrope">
                  Servicios personalizados para medianas y grandes empresas.
                </p>
              </div>
            </div>

            {/* Emprendedores */}
            <div className="flex items-end gap-4 p-2 h-[108px] rounded-lg mt-4">
              <img
                src={emprendedor}
                alt="Emprendedores"
                className="w-[40%] rounded-md object-cover"
              />
              <div className="flex flex-col justify-end h-full p-2 gap-4">
                <h3 className="text-[15px] font-semibold text-black font-manrope">
                  Emprendedores
                </h3>
                <p className="text-[10px] font-medium text-[#222] font-manrope">
                  Servicios personalizados para personas, startups y pequeños
                  negocios.
                </p>
              </div>
            </div>
          </div>

          {/* Comunicación y liderazgo */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={Microphone}
                alt="Microphone"
                className="w-6 h-6"
              />
              <h2 className="text-lg font-semibold text-stone-600">
                Comunicación y liderazgo
              </h2>
            </div>
            <ul className="space-y-2 text-black">
              <li>Comunicación para equipos</li>
              <li>Mejorar tu presencia ejecutiva</li>
              <li>Vender tu idea</li>
              <li>Construir confianza</li>
            </ul>
          </div>

          {/* Tecnología y talento */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={CPU}
                alt="CPU"
                className="w-6 h-6"
              />
              <h2 className="text-lg font-semibold text-stone-600">
                Tecnología y talento
              </h2>
            </div>
            <ul className="space-y-2 text-black">
              <li>Desarrollo de producto</li>
              <li>Talento IT validado</li>
              <li>Optimización de procesos</li>
              <li>Construcción de MVP</li>
            </ul>
          </div>

          {/* Combinado */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={Round}
                alt="Round"
                className="w-6 h-6"
              />
              <h2 className="text-lg font-semibold text-stone-600">
                Combinado
              </h2>
            </div>
            <ul className="space-y-2 text-black">
              <li>Comunicar MVP</li>
              <li>Escalar proyecto</li>
              <li>Fortalecer liderazgo</li>
              <li>Estrategias Digitales 360°</li>
              <li>Gestión Integral de Proyectos</li>
            </ul>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-end w-full">
          <button className="flex items-center gap-2 px-6 -py-4[1.5rem] text-black bg-white border border-gray-300 rounded-3xl hover:shadow-md">
            <span className="font-normal text-[18px] leading-normal">
              Comenzar ahora
            </span>
            <MdArrowRightAlt className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
