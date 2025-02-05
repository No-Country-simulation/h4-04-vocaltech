import { useState, useEffect } from "react";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import ibm from "../assets/icons/ibm.png";
import a from "../assets/icons/anegro.png";
import espiral from "../assets/icons/espiral.png";
import menor from "../assets/icons/mavor-menor-verde.png";
import tech from "../assets/icons/logo.png";
import perfilRoja from "../assets/images/perfil-niña.png";
import perfilBlanco from "../assets/images/perfil-blanco-negro.png";
import perfilCastaña from "../assets/images/perfil-castaña.png";
import perfilSeñor from "../assets/images/perfil-señor.png";
import perfilRubia from "../assets/images/perfil-rubia.png";

const testimonios = [
  { logo: ibm, texto: "Gracias a Vocal Tech, nuestro equipo mejoró la comunicación interna y logró una mayor cohesión. Ahora somos más eficientes y productivos", nombre: "Mariana López", cargo: "Gerente de Recursos Humanos, IBM", imagen: perfilRubia },
  { logo: a, texto: "El diagnóstico personalizado fue clave para optimizar nuestros procesos. Las recomendaciones prácticas nos ayudaron a alcanzar nuestras metas en tiempo récord", nombre: "Ricardo Torres", cargo: "CEO, Anthropic", imagen: perfilSeñor },
  { logo: espiral, texto: "Transformamos nuestra forma de comunicación con nuestros clientes e inversionistas con mayor claridad.", nombre: "Laura Fernández", cargo: "Fundadora, Technova", imagen: perfilCastaña },
  { logo: menor, texto: "Con la ayuda de Vocal Tech, desarrollamos nuestro MVP en solo 5 semanas. El apoyo de principio a fin fue excepcional, ¡Muchas gracias!", nombre: "Diego Ramírez", cargo: "Emprendedor, GreenCode", imagen: perfilBlanco },
  { logo: tech, texto: "El servicio al cliente de Vocal Tech es insuperable, siempre están atentos a nuestras necesidades y nos brindan soluciones rápidas y efectivas", nombre: "Carolina Martínez", cargo: "Directora de Operaciones", empresa: "TechSolutions", imagen: perfilRoja },
];

const HistoriasExito = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // En móviles solo muestra 1 testimonio
      } else {
        setItemsPerView(2); // En tablets y escritorio muestra 2 testimonios
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const totalItems = testimonios.length;
  const maxIndex = totalItems - itemsPerView;

  const scrollLeft = () => {
    if (index > 0) setIndex(index - 1);
  };

  const scrollRight = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  return (
    <div className="bg-white-100 py-12 px-6 md:px-16 relative">
      <h4 className="text-gray-500 text-sm uppercase">Historias de Éxito</h4>

      {/* Título dividido en dos líneas con los estilos específicos */}
      <h2 className="text-black font-dm-sans text-[48px] font-semibold leading-[120%] tracking-[-0.96px]">
        Lo que dicen <br /> nuestros clientes
      </h2>

      <div className="relative max-w-[600px] ml-auto overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${index * 304}px)`, width: `${testimonios.length * 304}px` }}
        >
          {testimonios.map((testimonio, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start w-[288px] h-[349px] p-6 rounded-xl border border-gray-200 bg-white shadow-md flex-shrink-0"
            >
              <div
                className="w-[132px] h-[60px] flex-shrink-0 rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${testimonio.logo})` }}
              ></div>
              <p className="text-[#424242] font-manrope text-[16px] font-medium align-self-stretch mt-2">
                {testimonio.texto}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={testimonio.imagen}
                  alt={testimonio.nombre}
                  className="w-[62px] h-[62px] rounded-full object-cover"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-[#424242] font-manrope text-[14px] font-normal align-self-stretch">
                    {testimonio.cargo}
                  </p>
                  {testimonio.empresa && (
                    <p className="text-[#424242] font-manrope text-[14px] font-normal align-self-stretch">
                      {testimonio.empresa}
                    </p>
                  )}
                  <p className="text-sm font-semibold text-gray-800">
                    {testimonio.nombre}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <div className="absolute bottom-4 left-32 flex gap-2">
        <button
          onClick={scrollLeft}
          className={`text-black text-3xl hover:text-gray-700 transition-all duration-300 ${
            index === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={index === 0}
        >
          <IoMdArrowDropleftCircle />
        </button>
        <button
          onClick={scrollRight}
          className={`text-black text-3xl hover:text-gray-700 transition-all duration-300 ${
            index >= maxIndex ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={index >= maxIndex}
        >
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
};

export default HistoriasExito;
