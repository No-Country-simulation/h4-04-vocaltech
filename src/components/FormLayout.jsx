
import { Carousel } from "./Carousel"; // Asegúrate de ajustar la ruta
import image1 from "../assets/image1.png";
import image2 from "../assets/Rectangle.png";


export const FormLayout = ({ form }) => {
  const images = [image1, image2];

  return (
    <div className="flex h-screen">
      {/* Sección Izquierda: Formulario */}
      <div className="w-1/2 flex justify-center items-center">{form}</div>

      {/* Sección Derecha: Carrusel */}
      <div className="w-1/2 flex justify-center items-center bg-white overflow-hidden">
        <Carousel images={images} />
      </div>
    </div>
  );
};

