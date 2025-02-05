import { CgArrowRight } from "react-icons/cg";
import Header from "./Header";
import { useState } from "react";



export default function Pitch2() {
    const [formData, setFormData] = useState({
        etapa: "",
        opcion: "",
        lograr: "",
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
        // Validar que todos los campos están llenos
        if (formData.etapa && formData.opcion && formData.lograr) {
            // Aquí puedes realizar alguna acción adicional, como redirigir o limpiar el formulario
            window.location.href = "/mvpe1"; // Redirige a /mvpe1
        } else {
            // Si no están todos llenos, mostrar un error
            setIsFormValid(false);
            alert("Por favor, llena todos los campos antes de continuar.");
        }
    }

    return (
        <div className="flex flex-col items-center min-h-screen py-8 bg-white">
            {/* Header */}
            <Header />
            {/* Form */}
            <form className="w-full max-w-4xl px-4 mt-8" onSubmit={handleSubmit}>
                <div>
                    <div className="mb-6">
                        <label className="block text-lg font-semibold">
                            2. ¿Con qué frecuencia presentas tu negocio a clientes, inversores o aliados estratégicos?
                        </label>
                        <div className="mt-4 space-y-2">
                            {[
                                "Frecuentemente (al menos una vez al mes",
                                "Ocasionalmente (varias veces al año)",
                                "Rara vez (menos de una vez al año)",
                                "Nunca lo he hecho",
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
                                        checked={formData.etapa === etapa}
                                        onChange={handleInputChange}
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
                                3. ¿Qué tan preparado te sientes para presentar tu negocio en un pitch breve y convincente?
                            </h2>
                            <div className="mt-4 space-y-2">
                                {[
                                    "Totalmente preparado, tengo un pitch sólido",
                                    "Algo preparado, pero podría mejorar",
                                    "No muy preparado, me cuesta estructurar un mensaje claro",
                                    "Nada preparado, no tengo un pitch definido",
                                ].map((opcion, index) => (
                                    <label
                                        key={index}
                                        className="flex items-center gap-2 cursor-pointer"
                                    >
                                        <input
                                            type="radio"
                                            name="opcion"
                                            value={opcion}
                                            className="hidden peer"
                                            checked={formData.opcion === opcion}
                                            onChange={handleInputChange}
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
                            <label className="text-lg font-semibold">4. Si tuvieras que mejorar tu pitch, ¿Qué de estos elementos incluyes en tu pitch? cuantifícalo</label>
                            <form className="mt-4 space-y-6">
                                {/* Claridad de los objetivos organizacionales */}
                                <div>
                                    <label htmlFor="" className="block ">
                                        Claridad en el mensaje
                                    </label>
                                    <div className="flex items-center justify-between mt-2">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <label
                                                htmlFor={`objetivos-${value}`}
                                                key={value}
                                                className="flex flex-col items-center"
                                            >
                                                <input
                                                    type="radio"
                                                    id={`objetivos-${value}`}
                                                    name="claridad_objetivos"
                                                    value={value}
                                                    className="w-4 h-4 border border-gray-300 rounded-full appearance-none checked:bg-blue-500 focus:ring focus:ring-blue-300"
                                                />
                                                <span className="mt-1 text-sm text-gray-500">{value}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* */}
                                <div>
                                    <label htmlFor="" className="block ">
                                        Impacto y persuasión
                                    </label>
                                    <div className="flex items-center justify-between mt-2">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <label
                                                htmlFor={`satisfaccion-${value}`}
                                                key={value}
                                                className="flex flex-col items-center"
                                            >
                                                <input
                                                    type="radio"
                                                    id={`satisfaccion-${value}`}
                                                    name="satisfaccion_comunicacion"
                                                    value={value}
                                                    className="w-4 h-4 border border-gray-300 rounded-full appearance-none checked:bg-blue-500 focus:ring focus:ring-blue-300"
                                                />
                                                <span className="mt-1 text-sm text-gray-500">{value}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* */}
                                <div>
                                    <label htmlFor="" className="block ">
                                        Presentación visual (diapositivas, material de apoyo)
                                    </label>
                                    <div className="flex items-center justify-between mt-2">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <label
                                                htmlFor={`disposicion-${value}`}
                                                key={value}
                                                className="flex flex-col items-center"
                                            >
                                                <input
                                                    type="radio"
                                                    id={`disposicion-${value}`}
                                                    name="disposicion_cambio"
                                                    value={value}
                                                    className="w-4 h-4 border border-gray-300 rounded-full appearance-none checked:bg-blue-500 focus:ring focus:ring-blue-300"
                                                />
                                                <span className="mt-1 text-sm text-gray-500">{value}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                {/* */}
                                <div>
                                    <label htmlFor="" className="block ">
                                        Seguridad y confianza al hablar
                                    </label>
                                    <div className="flex items-center justify-between mt-2">
                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <label
                                                htmlFor={`seguridad-${value}`}
                                                key={value}
                                                className="flex flex-col items-center"
                                            >
                                                <input
                                                    type="radio"
                                                    id={`seguridad-${value}`}
                                                    name="seguridad_hablar"
                                                    value={value}
                                                    className="w-4 h-4 border border-gray-300 rounded-full appearance-none checked:bg-blue-500 focus:ring focus:ring-blue-300"
                                                />
                                                <span className="mt-1 text-sm text-gray-500">{value}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div>
                        <div className="mb-6">
                            <label htmlFor="lograr" className="block text-lg font-semibold">
                                5. ¿Cuáles han sido los principales desafíos al presentar tu proyecto a clientes o inversores?
                            </label>
                            <input
                                id="lograr"
                                name="lograr"
                                type="text"
                                placeholder="Describe aquí"
                                className="w-full p-2 mt-2 border-b border-gray-300 focus:outline-none focus:border-b-[#2575FC]"
                                value={formData.lograr}
                                onChange={handleInputChange}
                            />
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
