import { useNavigate } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import { useState } from "react";
import HeaderEmprendedor from "./HeaderEmprendedor";

export default function EmprendedorForm() {
    const navigate = useNavigate();

    const [SelectOption, setSelectOption] = useState("");

    const handleSelectChange = (event) => {
        event.preventDefault();

        if (SelectOption === "Excelente") {
            navigate("/pitch1");
        }else if (
            SelectOption === "Buena, pero puede mejorar" ||
            SelectOption === "Necesito mucha ayuda" 
        ){
            navigate("/comunicacion-empre1");
        } else {
            alert("Por favor, seleccione todas las opciones.");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen py-8 bg-white">
            {/* Header */}
            <HeaderEmprendedor />

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
            <form className="w-full max-w-4xl px-4 mt-8" onSubmit={handleSelectChange}>
                <div className="mb-6">
                    <label htmlFor="empresa" className="block text-lg font-semibold">
                        1. Nombre de tu emprendimiento
                    </label>
                    <input
                        id="empresa"
                        type="text"
                        placeholder="Nombre"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="ubicacion" className="block text-lg font-semibold">
                        2. ¿Hace cuanto te encuentras emprendiendo esta iniciativa?
                    </label>
                    <input
                        id="ubicacion"
                        type="text"
                        placeholder="Ubicación de tu empresa"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="redes" className="block text-lg font-semibold">
                        3. Redes Sociales / Sitio Web
                    </label>
                    <input
                        id="redes"
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
                        placeholder="Ej. Tecnológico, Comercial"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                    />
                </div>
                <div>
                    <div className="mb-6">
                        <label className="block text-lg font-semibold">
                            5. ¿En qué etapa se encuentra tu emprendimiento?
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
                                6. ¿Cómo describirías tu capacidad para comunicar tu idea?
                            </h2>
                            <div className="mt-4 space-y-2">
                                {["Excelente", "Buena, pero puede mejorar", "Necesito mucha ayuda"].map((opcion, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="mvp"
                                            value={opcion}
                                            onChange={(event) => setSelectOption(event.target.value)}
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
                </div>
                {/* Botón Siguiente */}
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-4 mt-6 bg-[#2684FC] text-white rounded-full lg:w-36 h-11"
                    >
                        Siguiente <CgArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </form>
        </div>
    );
}
