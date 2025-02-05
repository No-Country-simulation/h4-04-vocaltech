

/* export default function FormularioTerminado() {
  return (
    <div>FormularioTerminado</div>
  )
} */

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import manos from "../assets/icons/High five representing team success.png";
import Navbar from "./Navbar";

const FormularioEnviado = () => {
  return (
    <>
      {/* Navbar fijo en la parte superior */}
      <header className="p-4 bg-white w-full fixed top-0 left-0 z-50 shadow-md">
        <Navbar />
      </header>

      {/* Contenedor principal con padding-top para evitar que se esconda detrás del navbar */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-white w-full max-w-3xl mx-auto pt-20">
        <h1 className="text-4xl font-bold text-gray-900 text-center leading-tight">
          ¡Tu formulario ha sido enviado con éxito!
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-lg px-4 md:px-0">
          Revisaremos tus respuestas y te enviaremos un diagnóstico personalizado a tu correo y WhatsApp.
        </p>
        <Link
          to="/"
          className="mt-6 flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all text-sm md:text-base"
        >
          Continuar explorando VocalTech <FaArrowRight className="ml-2" />
        </Link>
        <div className="mt-8 flex justify-center">
          <img
            src={manos}
            alt="High five"
            className="max-w-[200px] max-h-[200px] w-full h-auto drop-shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default FormularioEnviado;

  
  

