import { useNavigate } from "react-router-dom";

const FinEmpre = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate("/talento-empre1");
    };
    return (
        <div className="w-full  flex items-center justify-center min-h-screen bg-gradient-to-b from-[#525AF3] to-[#0B0B0BF7]">
            <div className="w-full max-w-md p-8 text-center ">
                {/* Botón de regresar */}
                <div className="flex items-center justify-start mb-4">
                    <button onClick={handleBackClick} className="absolute flex items-center gap-4 text-lg font-medium text-white lg:left-36 max-lg:left-72">
                        <svg
                            width="26"
                            height="16"
                            viewBox="0 0 26 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z"
                                fill="white"
                            />
                        </svg>
                        Regresar
                    </button>
                </div>

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
    );
};

export default FinEmpre;
