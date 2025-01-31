import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Image1 from "../assets/Rectangle.png";
import Image2 from "../assets/Group1.png";
import Image3 from "../assets/image.png";
import vocal from "../assets/VocalTech.png";

const images = [Image1, Image2, Image3];

// 🔹 Definimos usuarios válidos para autenticación
const validUsers = {
    "sasha@example.com": "sasha123",
    "sashasawosz@hotmail.com": "sasha123"
};

const SignIn = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value, 
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = "El campo Email es obligatorio.";
        }
        if (!formData.password.trim()) {
            newErrors.password = "El campo Contraseña es obligatorio.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailIngresado = formData.email.trim();
        const passwordIngresada = formData.password.trim();

        console.log("Email ingresado:", `"${emailIngresado}"`);
        console.log("Contraseña ingresada:", `"${passwordIngresada}"`);

        if (validateForm()) {
            if (validUsers[emailIngresado] && validUsers[emailIngresado] === passwordIngresada) {
                console.log("✅ Autenticación exitosa");
                navigate("/admin");
            } else {
                console.log("❌ Error de autenticación");
                setLoginError("Correo o contraseña incorrectos.");
            }
        }
    };

    return (
        <div className="flex w-[1440px] h-[1024px] overflow-hidden">
            <div className="relative flex flex-col items-start justify-center w-full md:w-1/2 px-16">
                <button 
                    onClick={() => navigate("/")} 
                    className="absolute top-8 left-8 flex items-center text-gray-600 font-medium text-[16px] font-manrope"
                >
                    <FaArrowLeftLong className="text-gray-600 w-5 h-5 mr-2" />
                    Regresar
                </button>
                <div className="w-[480px]">
                    <div className="flex mb-6">
                        <img src={vocal} alt="VolcaTech" className="w-auto h-auto" />
                    </div>
                    <h1 className="text-[32px] font-semibold text-black font-manrope leading-normal">
                        Ingresa a tu cuenta
                    </h1>
                    <p className="text-[16px] mt-4 text-[#616161]">
                        ¡Qué gusto tenerte por aquí de vuelta! Por favor, completa los
                        campos.
                    </p>
                    <form className="space-y-5 mt-9" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-[18px] font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="ejemplo@correo.com"
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6A11CB] focus:outline-none"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-[18px] font-medium">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="*********"
                                className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#6A11CB] focus:outline-none"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                        </div>
                        {loginError && <p className="text-sm text-red-500">{loginError}</p>}
                        <div className="text-right">
                            <a href="#" className="text-sm text-[#6A11CB] hover:underline">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                        <button type="submit" className="w-full py-3 text-[16px] text-white font-medium rounded-full bg-gradient-to-r from-[#6A11CB] to-[#2575FC] hover:opacity-90">
                            Ingresar
                        </button>
                    </form>
                    <p className="mt-10 text-sm text-center">
                        ¿No tienes una cuenta?{" "}
                        <Link to="/registro" className="text-[#6A11CB] hover:underline">
                            Crear Cuenta
                        </Link>
                    </p>
                </div>
            </div>
            <div className="relative hidden w-full md:w-1/2 md:block items-center justify-center bg-transparent">
                <div className="relative w-[80%] h-[73%] overflow-hidden rounded-lg shadow-lg bg-transparent">
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="object-cover w-full h-full bg-transparent" />
                    <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2">
                        {images.map((_, index) => (
                            <div key={index} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#6A11CB]" : "bg-[#393939]"}`}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
