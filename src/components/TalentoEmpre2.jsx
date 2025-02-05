import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom"; // O cambiar según tu sistema de rutas.

export default function TalentoEmpre2() {
    const navigate = useNavigate(); // Para redirigir al componente /talento1
    const [formData, setFormData] = useState({
        desafio: "",
        definido: "",
        talento: "",
        roles: "",
        perfil: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Verificar si todas las respuestas están seleccionadas
        const allAnswered = Object.values(formData).every((value) => value !== "");
        if (!allAnswered) {
            alert("Por favor responde todas las preguntas antes de continuar.");
            return;
        }

        // Si todo está respondido, redirigir al componente /talento1
        navigate("/talento1");
    };

    return (
        <div className="flex flex-col items-center min-h-screen py-8 bg-white">
            <Header />
            <form
                className="w-full max-w-4xl px-4 mt-20"
                onSubmit={handleSubmit}
            >
                {/* Pregunta 2 */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        2. ¿Qué cualidades consideras más importantes al seleccionar talento Junior para tu equipo?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Actitud positiva, capacidad de trabajo en equipo y comunicación efectiva",
                            "Productividad y capacidad de resolución de problemas",
                            "Conocimientos técnicos especificos para el puesto",
                            "No tenemos una preferencia especifica, lo evaluamos todo en conjunto",
                        ].map((desafio, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="desafio"
                                    value={desafio}
                                    className="hidden peer"
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{desafio}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Pregunta 3 */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        3. ¿Qué tan importante es para ti que los candidatos Junior sean evaluados mediante simulaciones o hackatones que midan su comportamiento y habilidades en tiempo real?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Muy importante, preferimos evaluar como se desempeña en situaciones reales de trabajo",
                            "Importante, pero también consideramos otros metodos de evaluación tradicionales",
                            "No lo considero una prioridad, prefiero centrarnos solo en entrevistas y pruebas técnicas",
                            "No creo que sea necesario, buscamos solo candidatos con experiencia previa"
                        ].map((definido, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="definido"
                                    value={definido}
                                    className="hidden peer"
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{definido}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Pregunta 4 */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        4. ¿Dentro de que vertical tech estas buscando perfiles?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "No-Code",
                            "Desarrollo Web",
                            "Data - Bi",
                            "Mobile"
                        ].map((talento, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="talento"
                                    value={talento}
                                    className="hidden peer"
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{talento}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Pregunta 5 */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        5. ¿En que rol?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Desarrollo Front-end",
                            "Desarrollo Back-end",
                            "Desarrollo No-Code",
                            "Diseñador UX/UI",
                            "Data",
                            "QA",
                            "Proyect Manager",
                            "Team Leader",
                            "Product Owner",
                            "Otro"
                        ].map((roles, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="roles"
                                    value={roles}
                                    className="hidden peer"
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{roles}</span>
                            </label>
                        ))}
                    </div>
                </div>
                {/* Pregunta 6 */}
                <div className="mb-6">
                    <label className="block text-lg font-semibold">
                        6. ¿Qué desafíos enfrentan actualmente en la contratación de talento Junior?
                    </label>
                    <div className="mt-4 space-y-2">
                        {[
                            "Evaluar sus habilidades interpersonales y su capacidad para trabajar en equipo",
                            "Medir su productividad y como se adaptan al entorno laboral",
                            "Encontrar candidatos que tengan las habilidades técnicas necesarias sin mucha experiencia ",
                            "No encontramos dificultades específicas, pero necesitamos un proceso de selección más eficiente"
                        ].map((perfil, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                            >
                                <input
                                    type="radio"
                                    name="perfil"
                                    value={perfil}
                                    className="hidden peer"
                                    onChange={handleInputChange}
                                />
                                <div className="flex items-center justify-center w-20 h-8 border-2 border-gray-300 rounded-lg peer-checked:bg-[#2575FC] peer-checked:border-[#2575FC]">
                                    <span className="text-sm font-normal text-[#9A9A9A] peer-checked:text-white">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                </div>
                                <span className="text-black">{perfil}</span>
                            </label>
                        ))}
                    </div>
                </div>
                {/* Apartado 7: ¡Dale voz a tu historia! */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold">7.¡Dale voz a tu historia!</h2>
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
                            </a>
                            <button
                                type="button"
                                className="ml-2 text-gray-500 hover:text-red-500 focus:outline-none"
                            >

                            </button>
                        </div>
                    </div>
                </div>
            </form>
            {/* Footer*/}
            <div className="w-full h-full  flex items-center justify-center min-h-screen bg-gradient-to-b from-[#525AF3] to-[#0B0B0BF7]">
                <div className="w-full h-full max-w-md p-8 text-center ">

                    {/* Título */}
                    <h1 className="mb-2 text-2xl font-bold text-white">
                        ¿Listo para conocer tu diagnóstico?
                    </h1>

                    {/* Subtítulo */}
                    <p className="mb-6 text-sm leading-relaxed text-white">
                        Completa tus datos de contacto y en breve recibirás un diagnóstico personalizado que se ajuste a tus necesidades.
                    </p>

                    {/* Formulario */}
                    <form className="space-y-4">
                        {/* Campo de correo electrónico */}
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-left text-white">
                                Email*
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="ejemplo@correo.com"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Campo de celular */}
                        <div>
                            <label htmlFor="celular" className="block mb-2 text-sm text-left text-white">
                                Celular*
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    id="code"
                                    placeholder="+"
                                    className="w-16 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                                <input
                                    type="tel"
                                    id="celular"
                                    placeholder="911111111"
                                    className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>
                        </div>

                        {/* Botón de enviar */}
                        <button
                            className="mt-0 w-full flex justify-center items-center gap-2 h-[46px] px-4 rounded-[16px] bg-gradient-to-r from-[#2575FC] via-[#052855] to-[#6A11CB] text-[#F8F8F8] font-semibold text-[18px] leading-normal shadow-[inset_2px_4px_4.8px_rgba(64,64,64,0.25),0px_0px_10px_rgba(48,58,197,0.01),0px_0px_9px_rgba(48,58,197,0.11),0px_0px_7px_rgba(48,58,197,0.39),0px_0px_6px_rgba(48,58,197,0.66),0px_0px_3px_rgba(48,58,197,0.76)] bg-[length:200%_200%] hover:animate-gradientMove whitespace-nowrap"
                            onClick={() => {
                                navigate("/formulario-terminado"); // Ruta actualizada
                            }}
                        >
                            Obtener Diagnóstico Gratis
                        </button>
                    </form>

                    {/* Información adicional */}
                    <p className="mt-6 text-xs leading-relaxed text-white">
                        Queremos asegurarte que tus datos están seguros con nosotros. Al enviar este formulario, nos das permiso para enviarte un diagnóstico personalizado y ponernos en contacto contigo. Para más información, revisa nuestros <span className="underline">Términos y Condiciones</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}
