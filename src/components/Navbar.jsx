import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdArrowDropDown, MdMenu, MdClose } from "react-icons/md";
import ServicesPage from "../Pages/ServicesPage"; // Importamos la página de servicios

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false); // Estado para mostrar el modal de servicios

  // Permitir cerrar el modal con la tecla "Escape"
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowServices(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <nav
        className="fixed top-[10px] left-0 right-0 z-50 mx-auto bg-white border border-gray-300 shadow-md rounded-[32px] max-w-[95%] md:w-[1374px] h-[82px] px-6 md:px-[53px] flex justify-between items-center"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <div className="flex items-center justify-between w-full md:justify-start">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-black">
            Vocal<span className="text-purple-600">Tech</span>
          </h1>

          {/* Botón de menú en móviles */}
          <button
            className="text-3xl text-black md:hidden"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </button>

          {/* Menú en pantallas grandes */}
          <ul className="hidden ml-8 space-x-6 md:flex">
            <li
              className="flex items-end gap-[4px] px-2 text-black hover:text-blue-600 cursor-pointer"
              onClick={() => setShowServices(true)} // Abre el modal de servicios
            >
              <span>Servicios</span>
              <MdArrowDropDown className="text-lg" />
            </li>
            <li className="text-black cursor-pointer hover:text-blue-600">Emprendedores</li>
            <li className="text-black cursor-pointer hover:text-blue-600">Empresas</li>
            <li className="text-black cursor-pointer hover:text-blue-600">Nosotros</li>
            <li className="text-black cursor-pointer hover:text-blue-600">Contacto</li>
          </ul>
        </div>

        {/* Botón y login en pantallas grandes */}
        <div className="items-center hidden space-x-4 md:flex">
          <Link to="/login" className="text-sm text-gray-700 hover:text-gray-900">
            Ingresar
          </Link>
          <button
            className="mt-0 w-[90%] max-w-[300px] flex justify-center items-center gap-2 h-[46px] px-4 rounded-[16px] bg-gradient-to-r from-[#2575FC] via-[#052855] to-[#6A11CB] text-[#F8F8F8] font-semibold text-[18px] leading-normal shadow-[inset_2px_4px_4.8px_rgba(64,64,64,0.25),0px_0px_10px_rgba(48,58,197,0.01),0px_0px_9px_rgba(48,58,197,0.11),0px_0px_7px_rgba(48,58,197,0.39),0px_0px_6px_rgba(48,58,197,0.66),0px_0px_3px_rgba(48,58,197,0.76)] bg-[length:200%_200%] hover:animate-gradientMove whitespace-nowrap"
            onClick={() => {
              navigate("/formularioinicio");
              setMenuOpen(false);
            }}
          >
            Obtener Diagnóstico Gratis
          </button>
        </div>
      </nav>

      {/* Modal de Servicios - Máximo Ancho */}
      {showServices && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 backdrop-blur-md">
          <div className="relative w-[98%] md:w-[95%] max-w-[2100px] bg-white p-[24px] rounded-lg shadow-lg overflow-y-auto mt-[100px]">
            {/* Botón de cerrar con React Icon */}
            <button
              className="absolute text-2xl text-gray-400 transition top-4 right-4 hover:text-gray-600"
              onClick={() => setShowServices(false)}
            >
              <MdClose />
            </button>

            <ServicesPage />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
