import { useState } from "react";
import round from "../assets/icons/Round Alt Arrow Down.png";
import roundUp from "../assets/icons/Round Alt Arrow Up.png";

const faqs = [
  { 
    question: "¿Qué es Vocal Tech y cómo puede ayudarme?", 
    answer: "Vocal Tech es una alianza entre No Country y Vos y Tu Voz que combina comunicación estratégica y tecnología avanzada. Ayudamos a emprendedores y empresas a superar desafíos específicos con soluciones personalizadas y diagnósticos adaptados a tus necesidades." 
  },
  { 
    question: "¿El diagnóstico tiene algún costo?", 
    answer: "No, el diagnóstico es completamente gratuito. Nuestro objetivo es entender tus necesidades para ofrecerte una propuesta personalizada que te ayude a crecer." 
  },
  { 
    question: "Soy emprendedor, ¿qué puedo obtener con el diagnóstico?", 
    answer: "Si eres emprendedor, el diagnóstico te ayudará a identificar áreas clave como la construcción de tu MVP, estrategias de comunicación para captar inversores o clientes, y recursos para desarrollar tu proyecto de manera efectiva." 
  },
  { 
    question: "¿Cuánto tiempo lleva recibir el diagnóstico personalizado?", 
    answer: "Nuestro equipo evalúa cuidadosamente cada caso, y recibirás tu diagnóstico personalizado en un plazo de 3 a 5 días hábiles." 
  },
  { 
    question: "¿Puedo acceder a soluciones combinadas de comunicación y tecnología?", 
    answer: "¡Por supuesto! Muchas de nuestras soluciones están diseñadas para integrar comunicación estratégica con herramientas tecnológicas, asegurando un enfoque integral que cubra todas tus necesidades." 
  },
  { 
    question: "¿Qué tipo de empresas pueden beneficiarse de sus servicios?", 
    answer: "Empresas de todos los tamaños, desde startups hasta grandes corporaciones." 
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 md:px-10 bg-white text-center">
      <p className="text-[#9A9A9A] text-center font-dm-sans text-[20px] font-normal leading-[120%]">
        FQA
      </p>

      <h2 className="text-[#000] text-center font-dm-sans text-[32px] md:text-[48px] font-semibold leading-[120%] tracking-[-0.96px] mt-6">
        Preguntas Frecuentes
      </h2>

      {/* Grid ajustable para responsividad */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-16 relative">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="relative bg-white p-4 rounded-lg shadow-md text-left cursor-pointer transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <span className="text-[#000] font-manrope text-[16px] md:text-[18px] font-semibold hover:text-violet-700 transition duration-300">
                {faq.question}
              </span>
              <img 
                src={openIndex === index ? roundUp : round} 
                alt="Expandir" 
                className="w-6 h-6 ml-2 transition-transform duration-300" 
              />
            </div>

            {/* Contenido con expansión correcta sin afectar a otras tarjetas */}
            <div 
              className={`absolute left-0 w-full bg-white p-4 shadow-lg rounded-lg transition-all duration-300 z-10 ${
                openIndex === index ? "opacity-100 visible top-full mt-2" : "opacity-0 invisible"
              }`}
            >
              <p className="text-[#555] font-manrope text-[14px] md:text-[16px]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
