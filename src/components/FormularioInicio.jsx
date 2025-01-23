import { FaArrowLeftLong } from "react-icons/fa6";
import ProgressBar from "./ProgressBar";
import Comunicación from "./cards/Comunicacion";
import Tecnología from "./cards/Tecnologia";
import Combinado from "./cards/Combinado";

const FormularioInicio = () => {
    return (
        <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
            {/* Sección izquierda del encabezado */}
            <div className="flex items-center mb-4">
                <FaArrowLeftLong className="text-gray-600 w-5 h-5 mr-2" />
                <span className="text-gray-600 font-medium">Regresar</span>
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
                Selecciona una opción para que podamos comprender mejor tus necesidades.
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
        </div>
    );
};

export default FormularioInicio;
