import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 mx-auto bg-white border border-gray-300 shadow-md rounded-[32px] max-w-[95%] md:w-[1374px] h-[82px] px-6 md:px-[53px] flex justify-between items-center"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-black">
          Vocal<span className="text-purple-600">Tech</span>
        </h1>
        <ul className="hidden md:flex space-x-6 ml-8 relative">
          {/* Dropdown para Servicios */}
          <li
            className="flex items-end gap-[4px] px-2 hover:text-blue-600 cursor-pointer relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span>Servicios</span>
            <MdArrowDropDown className="text-lg" />
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg w-48">
                <ul className="flex flex-col">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Consultoría
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Desarrollo de Software
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Capacitación
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Soporte Técnico
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="hover:text-blue-600 cursor-pointer">Emprendedores</li>
          <li className="hover:text-blue-600 cursor-pointer">Empresas</li>
          <li className="hover:text-blue-600 cursor-pointer">Nosotros</li>
          <li className="hover:text-blue-600 cursor-pointer">Contacto</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-sm text-gray-700 hover:text-gray-900">
          Ingresar
        </button>
        <button
          className="flex justify-center items-center gap-2 h-[46px] px-4 rounded-[16px] bg-gradient-to-r from-[#2575FC] via-[#052855] to-[#6A11CB] shadow-[inset_2px_4px_4.8px_rgba(64,64,64,0.25),0px_0px_10px_rgba(48,58,197,0.01),0px_0px_9px_rgba(48,58,197,0.11),0px_0px_7px_rgba(48,58,197,0.39),0px_0px_6px_rgba(48,58,197,0.66),0px_0px_3px_rgba(48,58,197,0.76)] text-[#F8F8F8] font-semibold text-[18px] leading-normal"
        >
          Obtener Diagnóstico Gratis
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
