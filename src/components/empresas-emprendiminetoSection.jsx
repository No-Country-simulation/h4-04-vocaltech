import empresa from "../assets/icons/Buildings 2.png";
import emprendimiento from "../assets/icons/Buildings 2.png";
import videoEmpresas from "../assets/images/376a102a79128d91587d5269f7120c5d850aaa83.mp4";
import imagen from "../assets/images/Placeholder Image-hombre.png";
import fondoUnificado from "../assets/icons/fonto-unificado.png"; // Imagen grande para fondo

import { MdArrowRightAlt } from "react-icons/md";

const SeccionesUnificadas = () => {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${fondoUnificado})` }}>
            {/* Contenedor de Secciones */}
            <div className="relative z-10 py-16 px-8 text-white max-w-7xl mx-auto">
                
                {/* Sección Empresas */}
                <section id="empresas" className="relative flex flex-col lg:flex-row items-center lg:justify-center py-16">
                    {/* Contenido */}
                    <div className="relative lg:w-2/5 text-left space-y-6 lg:ml-32">
                        <div className="flex items-center space-x-2 bg-purple-700 text-white px-3 py-1 rounded-full w-max">
                            <img src={empresa} alt="Icono Empresa" className="w-5 h-5" />
                            <span className="text-sm font-medium">Empresas</span>
                        </div>
                        <h2 className="text-5xl font-bold leading-[1.2] text-white font-dmSans">
                            Soluciones IT para <br />
                            <span className="block">Empresas</span>
                            <span className="block">Innovadoras</span>
                        </h2>
                        <p className="text-[18px] font-semibold leading-normal text-[#EAEAEA] font-manrope">
                            Identificamos tus necesidades en áreas clave como comunicación, liderazgo y desarrollo de skills, brindando soluciones prácticas y acceso a talento validado.
                        </p>
                        <div className="flex space-x-8">
                            <div>
                                <p className="text-[48px] font-bold leading-[1.2] font-dmSans bg-gradient-to-r from-[#B77C44] via-[#FEE5BB] to-[#BF854A] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">+15</p>
                                <p className="text-[16px] font-normal leading-[1.5] text-[#EAEAEA] font-manrope">
                                    Empresas ya están generando resultados positivos con Vocaltech.
                                </p>
                            </div>
                            <div>
                                <p className="text-[48px] font-bold leading-[1.2] font-dmSans bg-gradient-to-r from-[#B77C44] via-[#FEE5BB] to-[#BF854A] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">+1.000</p>
                                <p className="text-[16px] font-normal leading-[1.5] text-[#EAEAEA] font-manrope">
                                    Talleres impartidos en empresas líderes de todo LATAM.
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg">
                                Diagnosticar mi empresa
                            </button>
                            <button className="flex items-center justify-center text-white text-lg border-b-2 border-transparent hover:border-violet gap-2">
                                Más Información <MdArrowRightAlt className="text-2xl relative top-1" />
                            </button>
                        </div>
                    </div>

                    {/* Video */}
                    <div className="relative lg:w-2/5 mt-10 lg:mt-0 flex justify-center flex-[1_0_0]">
                        <video className="rounded-2xl shadow-lg h-[465px] w-[61%] object-cover" autoPlay loop muted>
                            <source src={videoEmpresas} type="video/mp4" />
                            Tu navegador no soporta videos.
                        </video>
                    </div>
                </section>

                {/* Sección Emprendedores */}
                <section id="emprendedores" className="relative flex flex-col lg:flex-row-reverse items-center lg:justify-center py-16">
                    {/* Contenido */}
                    <div className="relative lg:w-2/5 text-left space-y-6 lg:mr-32">
                        <div className="flex items-center space-x-2 bg-purple-700 text-white px-3 py-1 rounded-full w-max">
                            <img src={emprendimiento} alt="Icono Emprendedores" className="w-5 h-5" />
                            <span className="text-sm font-medium">Emprendedores</span>
                        </div>
                        <h2 className="text-5xl font-bold leading-[1.2] text-white font-dmSans">
                            Impulsa tu proyecto <br />
                            <span className="block">ahora</span>
                        </h2>
                        <p className="text-[18px] font-semibold leading-normal text-[#EAEAEA] font-manrope">
                            Como emprendedor, accede a herramientas y recursos diseñados para potenciar tu crecimiento. Completa el diagnóstico gratis y recibe una propuesta personalizada adaptada a tus necesidades.
                        </p>
                        <div className="flex space-x-8">
                            <div>
                                <p className="text-[48px] font-bold leading-[1.2] font-dmSans bg-gradient-to-r from-[#B77C44] via-[#FEE5BB] to-[#BF854A] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">95%</p>
                                <p className="text-[16px] font-normal leading-[1.5] text-[#EAEAEA] font-manrope">
                                    De nuestros clientes emprendedores recomiendan el servicio.
                                </p>
                            </div>
                            <div>
                                <p className="text-[48px] font-bold leading-[1.2] font-dmSans bg-gradient-to-r from-[#B77C44] via-[#FEE5BB] to-[#BF854A] bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">75%</p>
                                <p className="text-[16px] font-normal leading-[1.5] text-[#EAEAEA] font-manrope">
                                    De las startups lograron atraer inversores en el primer trimestre.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg whitespace-nowrap">
        Diagnosticar mi emprendimiento
    </button>
    <button className="flex items-center justify-center text-white text-lg  px-4 py-3 rounded-lg hover:border-violet gap-2 flex-shrink-0">
        Más Información <MdArrowRightAlt className="text-2xl relative top-1" />
    </button>
</div>

                    </div>

                    {/* Imagen */}
                    <div className="relative lg:w-2/5 mt-10 lg:mt-0 flex justify-center flex-[1_0_0]">
                        <img src={imagen} alt="Emprendedor" className="rounded-2xl shadow-lg h-[465px] w-[61%] object-cover" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SeccionesUnificadas;
