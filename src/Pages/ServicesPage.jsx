import { MdArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import empresa from "../assets/images/empresa grande.png";
import emprendedor from "../assets/images/imagen ilustrativa.png";
import infrastructure from "../assets/icons/Buildings.png";
import Microphone from "../assets/icons/Microphone Large morado.png";
import CPU from "../assets/icons/CPU Bolt morado.png";
import Round from "../assets/icons/Round Graph morado.png";

function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-8 md:p-10 rounded-lg shadow-md w-full max-w-[1500px] border border-gray-300">
      {/* Contenedor principal con columnas bien alineadas */}
      <div className="grid grid-cols-4 gap-8 w-full pb-4">
        {/* Columna 1: Soluciones Adaptadas */}
        <div className="col-span-1 flex flex-col items-start gap-4 w-[250px]">
          <div className="flex items-center gap-2 mb-1">
            <img src={infrastructure} alt="infrastructure" className="w-5 h-5" />
            <h2 className="text-[14px] font-normal text-[#626262] font-manrope">Soluciones Adaptadas</h2>
          </div>

          {/* Empresas */}
          <div className="flex h-[108px] p-2 items-end gap-4 rounded-lg bg-white w-full">
            <img src={empresa} alt="Empresas" className="h-[100px] w-[100px] rounded-md object-cover -ml-3 mt-4" />
            <div className="flex flex-col justify-end h-full">
              <h3 className="text-[13px] font-semibold text-black">Empresas</h3>
              <p className="text-[13px] font-medium text-[#222] font-manrope text-justify leading-tight">
                Servicios personalizados para medianas y grandes empresas.
              </p>
            </div>
          </div>

          {/* Emprendedores */}
          <div className="flex h-[108px] p-2 items-end gap-4 rounded-lg bg-white w-full ">
            <img src={emprendedor} alt="Emprendedores" className="h-[100px] w-[100px] rounded-md object-cover -ml-3" />
            <div className="flex flex-col justify-end h-full">
              <h3 className="text-[13px] font-semibold text-black">Emprendedores</h3>
              <p className="text-[13px] font-medium text-[#222] font-manrope text-justify leading-tight">
                Servicios personalizados para startups y pequeños negocios.
              </p>
            </div>
          </div>
        </div>

        {/* Columna 2: Comunicación y Liderazgo */}
        <div className="col-span-1 w-[250px]">
          <div className="flex items-center gap-2 mb-1">
            <img src={Microphone} alt="Microphone" className="w-5 h-5" />
            <h2 className="text-[14px] font-normal text-[#626262] font-manrope">Comunicación y liderazgo</h2>
          </div>
          <ul className="space-y-2 text-[#222] text-[15px] font-medium font-manrope text-justify leading-tight">
            <li>Comunicación para equipos</li>
            <li>Mejorar tu presencia ejecutiva</li>
            <li>Vender tu idea</li>
            <li>Construir confianza</li>
          </ul>
        </div>

        {/* Columna 3: Tecnología y Talento */}
        <div className="col-span-1 w-[250px]">
          <div className="flex items-center gap-2 mb-1">
            <img src={CPU} alt="CPU" className="w-5 h-5" />
            <h2 className="text-[14px] font-normal text-[#626262] font-manrope">Tecnología y talento</h2>
          </div>
          <ul className="space-y-2 text-[#222] text-[15px] font-medium font-manrope text-justify leading-tight">
            <li>Desarrollo de producto</li>
            <li>Talento IT validado</li>
            <li>Optimización de procesos</li>
            <li>Construcción de MVP</li>
          </ul>
        </div>

        {/* Columna 4: Combinado */}
        <div className="col-span-1 w-[250px]">
          <div className="flex items-center gap-2 mb-1">
            <img src={Round} alt="Round" className="w-5 h-5" />
            <h2 className="text-[14px] font-normal text-[#626262] font-manrope">Combinado</h2>
          </div>
          <ul className="space-y-2 text-[#222] text-[15px] font-medium font-manrope text-justify leading-tight">
            <li>Comunicar MVP</li>
            <li>Escalar proyecto</li>
            <li>Fortalecer liderazgo</li>
            <li>Estrategias Digitales 360°</li>
            <li>Gestión Integral de Proyectos</li>
          </ul>
        </div>
      </div>

      {/* Botón de Acción */}
      <div className="flex justify-end w-full mt-6">
        <button
          className="flex items-center gap-3 px-7 py-3 bg-white text-black rounded-lg border border-gray-400 hover:bg-gray-100 transition text-[16px] font-semibold"
          onClick={() => navigate("/formularioinicio")}
        >
          <span>Comenzar ahora</span>
          <MdArrowRightAlt className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default ServicesPage;
