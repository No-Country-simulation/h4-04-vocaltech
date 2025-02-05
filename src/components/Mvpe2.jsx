import { useState } from "react";
import Header from "./Header";
import { CgArrowRight } from "react-icons/cg";

export default function Mvpe2() {
    const [formData, setFormData] = useState({
        importante: "",
        seguro: "",
        desafio: "",
        barrera: "",
        
        

    });
    const [isFormValid, setIsFormValid] = useState(true);

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
        if (formData.importante && formData.seguro &&
            formData.desafio && formData.barrera) {
            // Aquí puedes realizar alguna acción adicional, como redirigir o limpiar el formulario
            window.location.href = "/talento-empre1"; // Redirige a /pitch1
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
                    <label className="block text-lg font-semibold" >
                        2. ¿En qué etapa de desarrollo se encuentra tu MVP?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Idea",
                            "Prototipo funcional",
                            "Producto validado con usuarios",
                            "Producto listo para escalar",
                            "Otro"
                        ].map((importante, index) => (
                            <label 
                            key={index}
                            className="flex items-center gap-2 cursor-pointer">
                                <input 
                                type="radio"
                                name="importante"
                                value={importante}
                                className="hidden peer"
                                checked={formData.importante === importante }
                                onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{importante}</span>
                        </label>
                        ))}

                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        3. ¿Cómo has validado tu idea hasta el momento?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Encuestas o entrevistas con clientes potenciales",
                            "Desarrollo de prototipos y pruebas de usuario",
                            "Lanzamiento de una versión inicial al mercado",
                            "Aún no he validado mi idea",
                            "Otro"
                        ].map((seguro, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="seguro"
                                    value={seguro}
                                    className="hidden peer"
                                    checked={formData.seguro === seguro}
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{seguro}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                <label className="block text-lg font-semibold" htmlFor="desafio">
                        4. ¿Cuál es el problema específico que tu MVP busca resolver?
                    </label>
                    <input
                        id="desafio"
                        name="desafio"
                        type="text"
                        placeholder="Ej. Problema específico"
                        className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                        value={formData.desafio}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-lg font-semibold" htmlFor="barrera">
                        5. ¿Hasta ahora que ha sido la mayor dificultad para tu MVP ?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Falta de financiamiento",
                            "Falta de conocimiento técnicos",
                            "Dificultad para encontrar un equipo adecuado",
                            "No saber cómo validar la idea",
                            "Otro"
                        ].map((barrera, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    name="barrera"
                                    type="radio"
                                    value={barrera}
                                    className="hidden peer"
                                    checked={formData.barrera === barrera}
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{barrera}</span>
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
