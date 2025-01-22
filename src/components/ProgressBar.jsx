import { FaCheck } from "react-icons/fa"; // Ícono del check
import img2 from "../assets/icons/Step Symbol-2.png"; // Ícono del paso 2
import img3 from "../assets/icons/Step Symbol.png"; // Ícono del paso 3

const ProgressBar = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="flex items-center">
        {/* Paso 1 */}
        <div className="relative flex flex-col items-center">
          {/* Círculo azul con el check */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600">
            <FaCheck className="text-white w-6 h-6" />
          </div>
          <p className="text-sm font-medium text-center mt-2 text-blue-600">
            ¿Qué necesitas?
          </p>
        </div>

        {/* Línea 1 */}
        <div className="relative w-[80px] h-[32px] flex items-center justify-center mx-2 -translate-y-1/2">
          <div className="w-full h-1 bg-blue-600"></div>
        </div>

        {/* Paso 2 */}
        <div className="relative flex flex-col items-center">
          {/* Círculo con ícono (sin fondo) */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full">
            <img src={img2} alt="Paso 2" className="w-full h-full" />
          </div>
          <p className="text-sm font-medium text-center mt-2 text-gray-500">
            Ayúdanos a entenderte
          </p>
        </div>

        {/* Línea 2 */}
        <div className="relative w-[80px] h-[32px] flex items-center justify-center mx-2 -translate-y-1/2">
          <div className="w-full h-1 bg-blue-600"></div>
        </div>

        {/* Paso 3 */}
        <div className="relative flex flex-col items-center">
          {/* Círculo con ícono (sin fondo) */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full">
            <img src={img3} alt="Paso 3" className="w-full h-full" />
          </div>
          <p className="text-sm font-medium text-center mt-2 text-gray-500">
            Te damos la solución
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
