import { TiArrowRightThick } from "react-icons/ti";
import etiqueta from "../assets/icons/Bolt-morado.png";
import VOS from "../assets/icons/image 23.png";
import fondo from "../assets/images/image 44.png";
import Nocountry from "../assets/images/image 31.png";

const HeroTitle = () => (
  <div className="flex flex-col items-center">
    {/* Etiqueta de nuevo */}
    <div className="inline-flex p-2 items-center justify-between gap-2 rounded-[16px] border border-[#6A11CB] bg-[rgba(106,17,203,0.11)] mt-[7rem]">
      <img src={etiqueta} alt="Etiqueta" className="w-6 h-6" />
      <p className="text-[#D4D3F6] font-manrope text-[18px] font-semibold leading-normal">
        Nuevo : ¡Herramienta de diagnóstico personalizado!
      </p>
    </div>

    {/* Título */}
    <h1 className="text-white text-center font-dm-sans text-[55px] font-bold leading-normal mt-6">
      Impulsa tu Crecimiento con Soluciones a Medida
    </h1>

    {/* Subtítulo */}
    <p className="text-[#EAEAEA] text-center font-manrope text-[24px] font-semibold leading-normal mt-4 max-w-[804px] mx-auto">
      VocalTech le pone voz y tecnología a tu proyecto.
    </p>
  </div>
);

const HeroButtons = () => (
  <div className="mt-6 flex flex-wrap justify-center gap-4">
    {/* Botón para emprendedores */}
    <button className="flex items-center justify-center gap-2 h-[46px] px-4 rounded-[16px] bg-[#0F0F0F] hover:bg-[#1a1a1a] text-white font-bold">
      Soluciones para emprendedores
      <TiArrowRightThick className="w-6 h-6 text-white" />
    </button>

    {/* Botón para empresas */}
    <button className="flex items-center justify-center gap-2 h-[46px] px-4 rounded-[16px] bg-gradient-to-br from-[#2575FC] via-[#052855] to-[#D230E3] 
      shadow-[inset_2px_4px_4.8px_rgba(64,64,64,0.25),0px_0px_10px_rgba(48,58,197,0.01),0px_0px_9px_rgba(48,58,197,0.11),0px_0px_7px_rgba(48,58,197,0.39),0px_0px_6px_rgba(48,58,197,0.66),0px_0px_3px_rgba(48,58,197,0.76)] animate-gradientMove 
      text-white font-bold">
      Potencia tu Empresa Ahora
      <TiArrowRightThick className="w-6 h-6 text-white" />
    </button>
  </div>
);

const HeroFooter = () => (
  <div className="mt-12 text-[#CCC] font-manrope text-[20px] font-semibold leading-normal flex items-center gap-2">
    <span>Powered by</span>
    {/* Imagen de NoCountry con width y height personalizados */}
    <img src={Nocountry} alt="logo NoCountry" className="w-[122px] h-[21px]" />
    <span>&</span>
    {/* Imagen de VOS */}
    <img src={VOS} alt="logo VOS" className="w-[42px] h-[42px]" />
  </div>
);


const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative text-center flex flex-col items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden pb-16-[23rem]"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <HeroTitle />
      <HeroButtons />
      <HeroFooter />
    </section>
  );
};

export default HeroSection;
