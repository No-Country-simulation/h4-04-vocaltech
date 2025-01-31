import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import  manos from "../assets/icons/High five representing team success.png"
import Navbar from "./Navbar";

const FormularioEnviado = () => {
  return (
    <>
      <header className="p-4 bg-white">
        <Navbar />
      </header>
      {/* conetenedor de la vista enviado */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-white">
        <h1 className="text-4xl font-bold text-gray-900">
          ¡Tu formulario ha sido enviado con éxito!
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-lg">
          Revisaremos tus respuestas y te enviaremos un diagnóstico personalizado a tu correo y WhatsApp.
        </p>
        <Link
          to="/"
          className="mt-6 flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all"
        >
          Continuar explorando VocalTech <FaArrowRight className="ml-2" />
        </Link>
        <div className="mt-8">
          <img
            src={manos}
            alt="High five"
            className="w-36 h-36 drop-shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default FormularioEnviado;
