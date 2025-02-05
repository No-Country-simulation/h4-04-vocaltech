import union from "../assets/icons/Union.png";

const CarruselLandingSection = () => {
  return (
    <div className="w-full h-[60px] md:h-[80px] bg-black flex items-center overflow-hidden relative">
      
      {/* Contenedor del texto animado */}
      <div className="flex absolute min-w-max animate-marquee text-white font-bold text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] items-center gap-4 sm:gap-6">
        
        {/* Primera línea de texto (se repetirá para el efecto) */}
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex items-center gap-4 sm:gap-6">
            <span>Llega más lejos.</span>
            <img src={union} alt="Separador" className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px]" />
            <span>Conecta.</span>
            <img src={union} alt="Separador" className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px]" />
            <span>Talento.</span>
            <img src={union} alt="Separador" className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px]" />
            <span>Lidera.</span>
            <img src={union} alt="Separador" className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px]" />
            <span>Tecnología.</span>
            <img src={union} alt="Separador" className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px]" />
            <span>Persuade con tu voz.</span>
            <img src={union} alt="Separador" className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px]" />
            <span>Transforma.</span>
            <img src={union} alt="Separador" className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px]" />
            <span>Voces que inspiran.</span>
            <img src={union} alt="Separador" className="w-[40px] sm:w-[50px] md:w-[60px] h-[40px] sm:h-[50px] md:h-[60px]" />
            <span>Lidera.</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarruselLandingSection;
