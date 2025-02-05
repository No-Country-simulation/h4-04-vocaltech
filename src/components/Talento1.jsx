import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgArrowRight } from "react-icons/cg";
import Header from "./Header";

export default function Talento1() {
    const [selectedTalento1, setSelectedTalento1] = useState(""); 
    const navigate = useNavigate(); 

    const handleOptionTalento1 = (event) => {
        setSelectedTalento1(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedTalento1 === "Si") {
            navigate("/talento2");
        } else if (selectedTalento1 === "No" || selectedTalento1 === "No estoy seguro/a") {
            navigate("/fin");
        } else {
            alert("Por favor selecciona una opción antes de continuar.");
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen py-8 bg-white">
            <Header />
            <form className="w-full max-w-4xl px-4 mt-20" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-lg font-semibold">
                        1.-¿Tu empresa está buscando nuevo talento?
                    </label>
                    <div className="mt-4 space-y-2">
                        {["Si", "No", "No estoy seguro/a"].map((talento1, index) => (
                            <label key={index} className="flex items-center gap-2 cursor-pointer">
                                <input
                                    id={`talento1-${index}`} 
                                    type="radio"
                                    name="talento1"
                                    value={talento1}
                                    className="hidden peer"
                                    onChange={handleOptionTalento1}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{talento1}</span>
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
