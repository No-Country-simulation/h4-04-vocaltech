import { useState } from "react";
import Header from "./Header";
import { CgArrowRight } from "react-icons/cg";

export default function Comunicacion1() {
    const [formData, setFormData] = useState({
        desafio: "",
        consideras: "",
        impacto: "",
    });
    const [setIsFormValid] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar que todas las preguntas están contestadas
        if (formData.desafio && formData.consideras && formData.impacto) {
            // Si todas las respuestas están completas, mostrar un mensaje de éxito
            // Aquí puedes realizar alguna acción adicional, como redirigir o limpiar el formulario
            window.location.href = "/mvp1"; // Redirige a /mvp1
        } else {
            // Si no están todas contestadas, mostrar un error
            setIsFormValid(false);
            alert("Por favor, responde todas las preguntas antes de continuar.");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen py-8 bg-white">
            <Header />
            <form className="w-full max-w-4xl px-4 mt-20" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block text-lg font-semibold" htmlFor="desafio">
                        1. ¿Qué desafíos principales enfrenta tu equipo en términos de liderazgo y motivación?
                    </label>
                    <input
                        id="desafio"
                        name="desafio"
                        type="text"
                        placeholder="Desafíos en liderazgo y motivación"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                        value={formData.desafio}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        2. ¿Consideras que tu equipo necesita mejorar habilidades blandas como resolución de conflictos, comunicación asertiva, liderazgo o trabajo en equipo?
                    </label>
                    <div className="mt-4 space-y-2">
                        {["Si", "No", "No estoy seguro/a"].map((consideras, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="consideras"
                                    value={consideras}
                                    className="hidden peer"
                                    checked={formData.consideras === consideras}
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{consideras}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-lg font-semibold" htmlFor="impacto">
                        3. ¿Qué impacto esperas lograr si mejoras la comunicación, el liderazgo y la gestión de tu equipo?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Mayor productividad",
                            "Mejora del clima laboral",
                            "Reducción de rotación",
                            "Mejora en la calidad del producto/servicio",
                            "Otro",
                        ].map((impacto, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    id="impacto"
                                    name="impacto"
                                    type="radio"
                                    value={impacto}
                                    className="hidden peer"
                                    checked={formData.impacto === impacto}
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{impacto}</span>
                            </label>
                        ))}
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
