import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import Header from "./Header";

export default function Pitch1() {
    const [selectedOption, setSelectedOption] = useState(""); // Estado para guardar la opción seleccionada
    const navigate = useNavigate(); // Hook para la navegación

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value); // Actualizar el estado con la opción seleccionada
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        if (selectedOption === "Sí, tenemos un pitch y es clave para nuestro crecimiento") {
            navigate("/mvpe1"); // Redirigir a la ruta "MVPE 2" si selecciona "Si"
        } else if (selectedOption === "Sí, pero necesitamos optimizarlo para captar mejor la atención"
            || selectedOption === "No, pero creemos que sería útil desarrollarlo"
            || selectedOption === "No, y no lo consideramos una oportunidad") {
            navigate("/pitch2"); // Redirigir a la ruta "Pitch 2" para las otras opciones
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
                    <label className="block text-lg font-semibold" htmlFor="">
                        1. ¿Cuentas con un pitch efectivo y sientes que es necesario para tu negocio? (presentación breve y persuasiva que se utiliza para promocionar un proyecto o vender un producto)
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Sí, tenemos un pitch y es clave para nuestro crecimiento",
                            "Sí, pero necesitamos optimizarlo para captar mejor la atención",
                            "No, pero creemos que sería útil desarrollarlo",
                            "No, y no lo consideramos una oportunidad"
                        ].map((option, index) => (
                            <label
                                htmlFor={`pitch-${index}`}
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    id={`pitch-${index}`}
                                    type="radio"
                                    name="pitch"
                                    value={option}
                                    className="hidden peer"
                                    onChange={handleOptionChange} // Manejar el cambio de opción
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{option}</span>
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
