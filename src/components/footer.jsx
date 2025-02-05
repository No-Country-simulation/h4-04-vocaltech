import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import xIcon from "../assets/icons/X.png"; // Importa la imagen de X

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#2575FC] via-[#052855] to-[#6A11CB] flex flex-col items-start py-16 px-8 md:px-16 max-w-[1440px] mx-auto">
            {/* Contenedor principal (Columna en móvil, Fila en pantallas grandes) */}
            <div className="w-full flex flex-col lg:flex-row justify-between gap-10">
                {/* Bloque de VocalTech + Formulario */}
                <div className="w-full lg:w-[500px] flex flex-col items-start gap-6">
                    {/* VocalTech */}
                    <h2 className="text-lg font-semibold w-[106px] h-[17px] leading-[17px]">
                        VocalTech
                    </h2>

                    {/* Únete al boletín */}
                    <p className="text-white text-sm md:text-base font-normal leading-6 w-full font-roboto">
                        Únete a nuestro boletín para recibir actualizaciones sobre características y lanzamientos.
                    </p>

                    {/* Input y Botón de Suscripción */}
                    <div className="flex flex-col md:flex-row items-center gap-2 w-full">
                        {/* Input de Correo */}
                        <input
                            type="email"
                            placeholder="Introduce tu correo"
                            className="w-full md:flex-1 p-3 border border-white bg-transparent text-gray-500 placeholder-gray-500 rounded-md focus:outline-none text-base font-normal leading-6 font-roboto"
                        />

                        {/* Botón Suscribirse */}
                        <button className="w-full md:w-[119px] py-3 px-6 justify-center items-center gap-2 border border-white text-white bg-transparent rounded-md hover:bg-white hover:text-black transition">
                            Suscribirse
                        </button>
                    </div>

                    <p className="text-xs opacity-80">
                        Al suscribirte, aceptas nuestra <a href="#" className="underline">Política de Privacidad</a> y 
                        consientes recibir actualizaciones.
                    </p>
                </div>

                {/* Contenedor Derecho: Servicios, Institucional y Síguenos (Responsive) */}
                <div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-start gap-10 pl-6">
                    
                    {/* Servicios */}
                    <div>
                        <h3 className="font-semibold">Servicios</h3>
                        <ul className="mt-6 space-y-2 text-sm">
                            <li className="flex py-2 items-start w-full">
                                <a href="#" className="hover:underline">Para Empresas</a>
                            </li>
                            <li className="flex py-2 items-start w-full">
                                <a href="#" className="hover:underline">Para Emprendedores</a>
                            </li>
                        </ul>
                    </div>

                    {/* Institucional */}
                    <div>
                        <h3 className="font-semibold">Institucional</h3>
                        <ul className="mt-6 space-y-2 text-sm">
                            <li className="flex py-2 items-start w-full">
                                <a href="#" className="hover:underline">Nosotros</a>
                            </li>
                            <li className="flex py-2 items-start w-full">
                                <a href="#" className="hover:underline">Contacto</a>
                            </li>
                        </ul>
                    </div>

                    {/* Redes Sociales */}
                    <div>
                        <h3 className="font-semibold">Síguenos</h3>
                        <ul className="mt-6 space-y-2 text-sm">
                            <li className="flex py-2 items-start w-full">
                                <a href="#" className="flex items-center gap-2 hover:underline">
                                    <CiFacebook size={20} /> Facebook
                                </a>
                            </li>
                            <li className="flex py-2 items-start w-full">
                                <a href="#" className="flex items-center gap-2 hover:underline">
                                    <FaInstagram size={20} /> Instagram
                                </a>
                            </li>
                            <li className="flex py-2 items-start w-full">
                                <a href="#" className="flex items-center gap-2 hover:underline">
                                    <img src={xIcon} alt="X" className="w-5 h-5" /> X
                                </a>
                            </li>
                            <li className="flex py-2 items-start w-full">
                                <a href="#" className="flex items-center gap-2 hover:underline">
                                    <CiLinkedin size={20} /> LinkedIn
                                </a>
                            </li>
                            <li className="flex py-2 items-start w-full">
                                <a href="#" className="flex items-center gap-2 hover:underline">
                                    <FaYoutube size={20} /> Youtube
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Línea divisoria */}
            <div className="w-full h-px border-t border-white bg-white opacity-100 mt-10"></div>

            {/* Derechos reservados y políticas */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs opacity-80 mt-4">
                {/* Texto de derechos reservados alineado a la izquierda */}
                <p className="text-center md:text-left">&copy; 2025 VocalTech. Todos los derechos reservados.</p>

                {/* Enlaces alineados a la derecha en desktop, centrados en móvil */}
                <div className="flex flex-col md:flex-row gap-4 mt-2 md:mt-0">
                    <a href="#" className="hover:underline">Política de Privacidad</a>
                    <a href="#" className="hover:underline">Términos de Servicio</a>
                    <a href="#" className="hover:underline">Configuración de Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
