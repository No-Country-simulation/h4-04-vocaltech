import { GoCheck } from "react-icons/go";

const ProgresBar = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-4xl mt-8 gap-4 sm:gap-0">
            {/* Paso 1: ¿Qué necesitas? */}
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 bg-[#0162DD] rounded-full">
                    <GoCheck className="text-white"/>
                </div>
                <span className="font-semibold text-[#0162DD] text-center">¿Qué necesitas?</span>
            </div>

            {/* Línea de conexión */}
            <div className="hidden sm:flex items-center justify-center">
                <hr className="w-16 border-t-2 border-[#0162DD]" />
            </div>

            {/* Paso 2: Ayúdanos a entenderte */}
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 bg-[#0162DD] rounded-full">
                    <GoCheck className="text-white"/>
                </div>
                <span className="font-semibold text-[#0162DD] text-center">Ayúdanos a entenderte</span>
            </div>

            {/* Línea de conexión */}
            <div className="hidden sm:flex">
                <hr className="w-16 border-t-2 border-[#0162DD]" />
            </div>

            {/* Paso 3: Te damos la solución */}
            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-[#465668] rounded-full">
                    <span className="font-normal">3</span>
                </div>
                <span className="font-semibold text-[#465668] text-center">Te damos la solución</span>
            </div>
        </div>
    );
};

export default ProgresBar;
