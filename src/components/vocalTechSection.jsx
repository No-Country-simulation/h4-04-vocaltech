import { FaLongArrowAltRight } from "react-icons/fa";
import rectangleTwo from "../assets/images/CUADRO-ESQUINA-2.png";

const Vocaltech = () => {
    return (
        <section className="relative flex flex-col items-center justify-center py-16 overflow-hidden text-center bg-white">
            {/* Imagen en la esquina superior izquierda más visible */}
            <img 
                src={rectangleTwo} 
                alt="Esquina superior izquierda"
                className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] rotate-[30deg] opacity-40 z-[0]"
            />

            {/* Imagen de la derecha con más visibilidad (marca de agua) */}
            <img 
                src={rectangleTwo} 
                alt="Cuadro decorativo"
                className="absolute bottom-[-50px] right-[-150px] w-[500px] h-[490px] opacity-50 z-[0]"
                style={{ transform: 'rotate(-114deg)', mixBlendMode: 'multiply' }}
            />

            {/* Imagen en la esquina inferior izquierda más visible */}
            <img 
                src={rectangleTwo} 
                alt="Cuadro inferior izquierdo"
                className="absolute bottom-[-50px] left-[-100px] w-[250px] h-[240px] rotate-[20deg] opacity-50 z-[0]"
            />

            {/* Contenido */}
            <div className="max-w-lg md:max-w-xl lg:max-w-[993px] w-full px-6 z-[2]">
                <h1 className="text-[36px] md:text-[48px] font-semibold leading-tight tracking-tight text-black font-['DM_Sans']">
                    VocalTech le pone voz y tecnología a tu proyecto
                </h1>
                <p className="mt-4 text-lg text-gray-800">
                    Empieza hoy mismo: soluciones para emprendedores y empresas.
                </p>
            </div>

            {/* Botón con margen superior para bajar su posición */}
            <button className="mt-16 inline-flex h-[46px] px-[10px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[16px] 
    bg-gradient-to-r from-[#2575FC]  via-[#6A11CB] to-[#D230E3] 
    shadow-[inset_2px_4px_4.8px_rgba(64,64,64,0.25),0px_0px_10px_rgba(48,58,197,0.01),0px_0px_9px_rgba(48,58,197,0.11),0px_0px_7px_rgba(48,58,197,0.39),0px_0px_6px_rgba(48,58,197,0.66),0px_0px_3px_rgba(48,58,197,0.76)]
    text-white font-medium text-lg hover:scale-105 transition-transform duration-300">
                <span>Obtener Diagnóstico Ahora</span>
                <FaLongArrowAltRight className="w-5 h-5" />
            </button>
        </section>
    );
};

export default Vocaltech;
