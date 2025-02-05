import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import Header from "./Header";

export default function Mvpe1() {
    const [selectedOption, setSelectedOption] = useState(""); // Estado para guardar la opción seleccionada
    const navigate = useNavigate(); // Hook para la navegación

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value); // Actualizar el estado con la opción seleccionada
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        if (selectedOption === "Sí, estamos en la fase de idea y necesitamos validar" || selectedOption === "Sí, ya tenemos una idea valida y queremos desarrollar el MVP") {
            navigate("/mvpe2"); // Redirigir a la ruta "MVPE 2"
        } else if (selectedOption === "No, ya tenemos un producto desarrollado"
            || selectedOption === "No, y no consideramos una prioridad") {
            navigate("/talento-empre1"); // Redirigir a la ruta "Pitch 2" para las otras opciones
        } else {
            alert("Por favor selecciona una opción antes de continuar."); // Validar que se haya seleccionado una opción
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen py-8 bg-white">
            <Header />
            <form
                className="w-full max-w-4xl px-4 mt-20"
                onSubmit={handleSubmit} // Manejar el evento de envío del formulario
            >
                <div>
                    <label className="block text-lg font-semibold" >
                        1. ¿Tu emprendimiento necesita desarrollar un MVP?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Sí, estamos en la fase de idea y necesitamos validar",
                            "Sí, ya tenemos una idea valida y queremos desarrollar el MVP",
                            "No, ya tenemos un producto desarrollado",
                            "No, y no consideramos una prioridad"
                        ].map((emprendimiento, index) => (
                            <label
                                htmlFor={`emprendimiento-${index}`}
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    id={`emprendimiento-${index}`}
                                    type="radio"
                                    name="emprendimiento"
                                    value={emprendimiento}
                                    className="hidden peer"
                                    onChange={handleOptionChange} // Manejar el cambio de opción
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{emprendimiento}</span>
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
