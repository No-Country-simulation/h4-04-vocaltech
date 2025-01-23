import React, { useState, useEffect } from "react";

const images = [
    "/Carrusel/Rectangle.png",
    "/Carrusel/Group1.png",
    "/Carrusel/image.png",
];

const SingIn = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    // Cambia de imagen automáticamente cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Cambia cada 5000 ms (5 segundos)

        return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
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
        if (validateForm()) {
            // Lógica para enviar el formulario
            console.log("Formulario enviado:", formData);
        }
    };

    return (
        <div className="flex flex-col-reverse w-screen h-screen md:flex-row overflow-hidden">
            {/* Left Section */}
            <div className="relative flex items-center justify-center w-full md:w-1/2 mt-5">
                {/* Regresar Arrow */}
                <a
                    href="#"
                    className="absolute top-1 left-10 gap-4 flex items-center text-[26px] font-medium"
                >
                    <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM26 7L1 7V9L26 9V7Z"
                            fill="black"
                        />
                    </svg>
                    Regresar
                </a>

                <div className="w-[600px] h-[800px] p-8 mt-60 ml-10">
                    <div className="flex mb-6">
                        <img src="/VocalTech.png" alt="VolcaTech" />
                    </div>
                    <h1 className="text-[32px] font-medium">Ingresa a tu cuenta</h1>
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
                                className="w-full p-2 mt-1 border rounded-md"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-[18px] font-medium"
                            >
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="*********"
                                className="w-full p-2 mt-1 border rounded-md"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                            )}
                        </div>
                        <div className="text-right">
                            <a href="#" className="text-sm text-[#6A11CB] hover:underline">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 text-[16px] text-white font-medium rounded-full bg-gradient-to-r from-[#6A11CB] to-[#2575FC]"
                        >
                            Ingresar
                        </button>
                    </form>
                    <p className="mt-10 text-sm text-center">
                        ¿No tienes una cuenta?{" "}
                        <a href="/registro" className="text-[#6A11CB] hover:underline">
                            Crear Cuenta
                        </a>
                    </p>
                </div>
            </div>

            {/* Right Section with Carousel */}
            <div className="relative hidden w-full p-3 md:w-1/2 md:block">
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="object-contain w-full h-full rounded-xl"
                />
                {/* Dots Indicator */}
                <div className="absolute flex space-x-2 transform -translate-x-1/2 bottom-10 left-1/2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-5 h-5 rounded-full ${index === currentIndex ? "bg-[#6A11CB]" : "bg-[#393939]"
                                }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SingIn;
