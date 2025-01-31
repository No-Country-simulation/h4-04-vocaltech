import { FaArrowLeftLong } from "react-icons/fa6";
import ProgressBar from "./ProgressBar";
import Comunicación from "./cards/Comunicacion";
import Tecnología from "./cards/Tecnologia";
import Combinado from "./cards/Combinado";
import { useNavigate } from "react-router-dom";

const FormularioInicio = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate("/");
    };

    const handleEmpresaClick = () => {
        navigate("/form-empresa");
    };
    const handleEmprendedorClick = () => {
        navigate("/form-emprendedor");
    }

    return (
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
            {/* Sección izquierda del encabezado */}
            <div className="flex items-center mb-4">
                <button
                    onClick={handleBackClick} // Maneja el clic del botón
                    className="flex items-center text-gray-600"
                >
                    <FaArrowLeftLong className="w-5 h-5 mr-2" />
                    <span className="font-medium">Regresar</span>
                </button>
            </div>

            {/* Encabezado */}
            <div className="text-center mb-6">
                <h1 className="text-5xl md:text-6xl font-bold">
                    <span className="text-black">Vocal</span>
                    <span className="text-purple-600">Tech</span>
                </h1>
                <ProgressBar />
            </div>

            {/* Subtítulo */}
            <h2 className="mt-4 text-2xl text-gray-700 font-semibold">
                ¿Qué necesitas construir o mejorar?
            </h2>
            <p className="text-sm text-gray-500 mt-2">
            En Vocaltech te ayudamos a identificar y construir lo que tu negocio necesita.
            </p>

            {/* Tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Comunicación
                    title="Comunicación y Liderazgo"
                    description="Potenciar tus habilidades de comunicación"
                />
                <Tecnología
                    title="Soluciones Tecnológicas"
                    description="Impulsar tus proyectos Tech con soluciones a medida"
                />
                <Combinado
                    title="Combinado"
                    description="Tu proyecto necesita tanto comunicación como tecnología"
                />
            </div>

            {/* Nuevo texto centrado y botones */}
            <div className="text-center mt-8">
                <h3 className="text-[#424242] text-xl font-medium font-[Manrope]">
                    Para continuar, cuéntanos quién eres para adaptar tu diagnóstico
                </h3>
            </div>
            <div className="flex justify-center gap-6 mt-6">
                {/* Botón Soy Emprendedor */}
                
                <button
                onClick={handleEmpresaClick} // Maneja el clic del botón
                    className="flex px-4 py-2 justify-center items-center gap-2 rounded-full border bg-[#C415D7] text-white font-medium"
                >
                    Soy Emprendedor
                </button>
                {/* Botón Represento una Empresa */}
                <button
                    onClick={handleEmprendedorClick}
                    className="flex w-[235px] h-[45px] px-3 py-2 justify-center items-center gap-2 rounded-full text-white font-medium bg-gradient-to-r from-[#6A11CB] to-[#2575FC] bg-lightgray bg-blend-multiply"
                >
                    Represento una Empresa
                </button>
            </div>
        </div>
    );
};

export default FormularioInicio;
