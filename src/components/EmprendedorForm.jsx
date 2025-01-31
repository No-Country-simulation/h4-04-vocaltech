import { useNavigate } from "react-router-dom";
import ProgresBar from "./ProgresBar";

export default function EmprendedorForm() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate("/formularioinicio");
    }

    return (
        <div className="flex flex-col items-center min-h-screen py-8 bg-white">
            {/* Header */}
            <header className="flex items-center justify-center w-full max-w-4xl px-4">
                <button  onClick={handleBackClick}
                className="absolute flex items-center gap-4 text-lg font-medium text-black lg:left-36 max-lg:left-72">
                    <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z"
                            fill="black"
                        />
                    </svg>
                    Regresar
                </button>
                <img
                    src="/VocalTech.png"
                    alt="VocalTech"
                    className="lg:w-[328px] h-[54px]"
                />
            </header>

            {/* Progress Bar */}
            <div className="flex items-center justify-between w-full max-w-4xl mt-8">
                <ProgresBar />
            </div>

            {/* Image Card */}
            <div className="w-full max-w-4xl mt-8">
                <div className="relative w-full h-auto overflow-hidden rounded-lg">
                    <img
                        src="/emprendedores.png"
                        alt="Empresas"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Form */}
            <form className="w-full max-w-4xl px-4 mt-8">
                <div className="mb-6">
                    <label htmlFor="empresa" className="block text-lg font-semibold">
                        1. Tu nombre
                    </label>
                    <input
                        id="empresa"
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="ubicacion" className="block text-lg font-semibold">
                        2. Ubicación
                    </label>
                    <input
                        id="ubicacion"
                        type="text"
                        placeholder="Ubicación de tu empresa"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="sector" className="block text-lg font-semibold">
                        3. Sector de Actividad
                    </label>
                    <input
                        id="sector"
                        type="text"
                        placeholder="Ej. Tecnológico, Comercial"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>
                <div>
                    <div className="mb-6">
                        <label className="block text-lg font-semibold">
                            4. ¿En qué etapa se encuentra tu emprendimiento?
                        </label>
                        <div className="mt-4 space-y-2">
                            {[
                                "Idea Inicial",
                                "Validando Mercado",
                                "Generando Ingresos",
                                "Buscando Escalabilidad",
                            ].map((etapa, index) => (
                                <label
                                    key={index}
                                    className="flex items-center gap-2 cursor-pointer"
                                >
                                    {/* El input y su contenido están en el mismo label */}
                                    <input
                                        type="radio"
                                        name="etapa"
                                        value={etapa}
                                        className="hidden peer"
                                    />
                                    <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                        <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                            {String.fromCharCode(65 + index)}
                                        </span>
                                    </div>
                                    <span className="text-black">{etapa}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold">
                                5. ¿Tienes un MVP desarrollado?
                            </h2>
                            <div className="mt-4 space-y-2">
                                {["Sí", "No"].map((opcion, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="mvp"
                                            value={opcion}
                                            className="hidden peer"
                                        />
                                        <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                            <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                        </div>
                                        <span className="text-black">{opcion}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold">
                                6. Selecciona la opción que más te representa.
                            </h2>
                            <div className="mt-4 space-y-2">
                                {[
                                    "Prefiero planificar cada paso antes de actuar",
                                    "Me resulta fácil adaptarme a situaciones inesperadas",
                                    "Disfruto trabajando solo para concentrarme mejor",
                                    "Obtengo energía al interactuar con otras personas",
                                ].map((seis, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="representacion"
                                            value={seis}
                                            className="hidden peer"
                                        />
                                        <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                            <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                        </div>
                                        <span className="text-black">{seis}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold">
                                7. ¿Cómo describírias tu capacidad para comunicar tu idea?
                            </h2>
                            <div className="mt-4 space-y-2">
                                {[
                                    "Ecxelente",
                                    "Buena, pero puede mejorar",
                                    "Necesito mucha ayuda",
                                ].map((opcion, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="representacion"
                                            value={opcion}
                                            className="hidden peer"
                                        />
                                        <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                            <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                        </div>
                                        <span className="text-black">{opcion}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold">
                                8. ¿Has realizado un pitch alguna vez? (presentación breve y
                                persuasiva que se utiliza para proporcionar un proyecto o vender
                                un producto )
                            </h2>
                            <div className="mt-4 space-y-2">
                                {["Si", "No"].map((opcion, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="representacion"
                                            value={opcion}
                                            className="hidden peer"
                                        />
                                        <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                            <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                                {String.fromCharCode(65 + index)}
                                            </span>
                                        </div>
                                        <span className="text-black">{opcion}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            <label htmlFor="sector" className="block text-lg font-semibold">
                                9. ¿Que esperas lograr con VocalTech?
                            </label>
                            <input
                                id="lograr"
                                type="text"
                                placeholder="Espero..."
                                className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            <label htmlFor="sector" className="block text-lg font-semibold">
                                10. ¿Que obstáculos crees que enfrentan tu comunicación o emprendimiento?
                            </label>
                            <input
                                id="obstaculos"
                                type="text"
                                placeholder="Enfrento los siguientes obstáculos..."
                                className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                            />
                        </div>
                    </div>
                    {/* Apartado 11: ¡Dale voz a tu historia! */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold">11. ¡Dale voz a tu historia!</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Queremos conocerte mejor. Si lo deseas, puedes grabar un audio corto (30-60 segundos) contándonos sobre ti, tus objetivos y cómo podemos ayudarte.
                        </p>
                        <div className="mt-4">
                            <label
                                htmlFor="audio-upload"
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                            >
                                📁 Adjuntar archivo de audio
                                <input
                                    type="file"
                                    id="audio-upload"
                                    accept="audio/*"
                                    className="hidden"
                                />
                            </label>
                            <div className="mt-3">
                                <a
                                    href="#"
                                    className="text-sm text-blue-600 underline hover:text-blue-800"
                                >
                                    grab-voz-2025-01-12.mp4
                                </a>
                                <button
                                    type="button"
                                    className="ml-2 text-gray-500 hover:text-red-500 focus:outline-none"
                                >
                                    ✖
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
}
