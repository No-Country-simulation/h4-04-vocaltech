import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import Header from "./Header";

export default function FormEmpresaNavi() {
    const navigate = useNavigate();
    const [selectedOption6, setSelectedOption6] = useState(""); // Estado para la respuesta de la pregunta 6

    const handleNextClick = (e) => {
        e.preventDefault();

        if (selectedOption6 ===  "Satisfecho/a" || selectedOption6 === "Muy satisfecho/a") {
            navigate("/mvp1"); // Navegar a MVP1
        } else if (
            selectedOption6 === "Neutral" ||
            selectedOption6 === "Insatisfecho/a" ||
            selectedOption6 === "Muy insatisfecho/a"
        ) {
            navigate("/comunicacion1"); // Navegar a Comunicacion1
        } else {
            alert("Por favor, seleccione todas las opciones .");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen py-8 bg-white">
            {/* Header */}
            <Header />    
            {/* Image Card */}
            <div className="w-full max-w-4xl mt-8">
                <div className="relative w-full h-auto overflow-hidden rounded-lg">
                    <img
                        src="/empresa.png"
                        alt="Empresas"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* Form */}
            <form className="w-full max-w-4xl px-4 mt-8" onSubmit={handleNextClick}>
                {/* Preguntas anteriores */}
                <div className="mb-6">
                    <label htmlFor="empresa" className="block text-lg font-semibold">
                        1. Nombre de tu Empresa
                    </label>
                    <input
                        id="empresa"
                        type="text"
                        placeholder="Nombre de tu empresa"
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
                        3. Redes Sociales / Sitio Web
                    </label>
                    <input
                        id="sector"
                        type="text"
                        placeholder="Redes / Sitio web de tu emprendimiento"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="sector" className="block text-lg font-semibold">
                        4. Sector de Actividad
                    </label>
                    <input
                        id="sector"
                        type="text"
                        placeholder="Ej. Tecnológico Comercial"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        5. ¿Número de Empleados?
                    </label>
                    <div className="mt-4 space-y-2">
                        {["de 1 a 10", "de 11 a 50", "de 51 a 99", "más de 100"].map((etapa, index) => (
                            <label key={index} className="flex items-center gap-2 cursor-pointer">
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

                {/* Pregunta 6 */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold">
                        6. ¿Qué tan satisfecho/a estás con la comunicación interna dentro de tu equipo?
                    </h2>
                    <div className="mt-4 space-y-2">
                        {[
                            "Muy satisfecho/a",
                            "Satisfecho/a",
                            "Neutral",
                            "Insatisfecho/a",
                            "Muy insatisfecho/a",
                        ].map((opcion, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="pregunta6"
                                    value={opcion}
                                    onChange={(e) => setSelectedOption6(e.target.value)}
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

                {/* Botón Siguiente */}
                <div className="flex items-center justify-center">
                    <button type="submit" className="flex items-center justify-center gap-4 mt-6 bg-[#2684FC] text-white rounded-full lg:w-36 h-11">
                        Siguiente <CgArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </form>
        </div>
    );
}
