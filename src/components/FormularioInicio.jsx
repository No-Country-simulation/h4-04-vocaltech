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
    };

    return (
        <div className="w-full max-w-5xl p-6 bg-white rounded-lg shadow-lg">
            {/* Sección izquierda del encabezado */}
            <div className="flex items-center mb-4">
                <button
                    onClick={handleBackClick}
                    className="flex items-center text-gray-600 transition-colors hover:text-gray-800"
                >
                    <FaArrowLeftLong className="w-5 h-5 mr-2" />
                    <span className="font-medium">Regresar</span>
                </button>
            </div>

            {/* Encabezado */}
            <div className="mb-6 text-center">
                <h1 className="text-5xl font-bold md:text-6xl">
                    <span className="text-black">Vocal</span>
                    <span className="text-purple-600">Tech</span>
                </h1>
                <ProgressBar />
            </div>

            {/* Subtítulo */}
            <h2 className="mt-4 text-2xl font-semibold text-gray-700">
                ¿Qué necesitas construir o mejorar?
            </h2>
            <p className="mt-2 text-sm text-gray-500">
            En Vocaltech te ayudamos a identificar y construir lo que tu negocio necesita.
            </p>

            {/* Tarjetas */}
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
    <Comunicación
        className="min-h-[250px] flex flex-col justify-between"
        title="Comunicación y Liderazgo"
        description="Potenciar tus habilidades de comunicación"
    />
    <Tecnología
        className="min-h-[250px] flex flex-col justify-between"
        title="Soluciones Tecnológicas"
        description="Impulsar tus proyectos Tech con soluciones a medida"
    />
    <Combinado
        className="min-h-[250px] flex flex-col justify-between"
        title="Combinado"
        description="Tu proyecto necesita tanto comunicación como tecnología"
    />
</div>


            {/* Nuevo texto centrado y botones */}
            <div className="mt-8 text-center">
                <h3 className="text-[#424242] text-xl font-medium font-[Manrope]">
                    Para continuar, cuéntanos quién eres para adaptar tu diagnóstico
                </h3>
            </div>

            {/* Botones de selección */}
            <div className="flex flex-col flex-wrap justify-center gap-4 mt-6 sm:flex-row sm:gap-6">
                {/* Botón Soy Emprendedor */}
                <button
                    onClick={handleEmprendedorClick}
                    className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg flex justify-center items-center gap-2 rounded-full border bg-[#C415D7] text-white font-medium transition-transform hover:scale-105"
                >
                    Soy Emprendedor
                </button>

                {/* Botón Represento una Empresa */}
                <button
                    onClick={handleEmpresaClick}
                    className="w-full sm:w-auto px-6 py-3 text-base sm:text-lg flex justify-center items-center gap-2 rounded-full text-white font-medium bg-gradient-to-r from-[#6A11CB] to-[#2575FC] bg-lightgray bg-blend-multiply transition-transform hover:scale-105"
                >
                    Represento una Empresa
                </button>
            </div>
        </div>
    );
};

export default FormularioInicio;
