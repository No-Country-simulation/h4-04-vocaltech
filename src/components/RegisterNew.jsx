import { useFormik } from "formik";
import { useState } from "react"; // Importa useState
import { registerSchema } from "../../client/src/modules/auth/validations/ValidationsForm"; // Importamos las validaciones
import logo from "../assets/VocalTech.png";
import { Link } from "react-router-dom";
import { handleFormSubmit } from "../../client/src/modules/auth/services/handleFormSubmit"; // Importa la función

export const SignupForm = () => {
  const [serverError, setServerError] = useState(""); // Declara el estado para manejar errores

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { resetForm }) => {
      const result = await handleFormSubmit(values, "register");
      if (result.success) {
        alert("Cuenta creada exitosamente.");
        resetForm();
      } else {
        setServerError(
          result.message || "Ocurrió un error al crear la cuenta. Inténtalo nuevamente."
        );
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white text-white p-8 rounded-lg w-96">
        <div className="flex flex-col mb-5">
          <img src={logo} alt="logo" className="w-60 h-auto mb-4" />
          <h1 className="text-2xl font-bold text-black">Crear Cuenta</h1>
          <p className="text-sm text-[#616161]">
            Potenciamos tus Ideas & Proyectos.
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          {/* Nombre */}
          <h2 className="text-black">Nombre</h2>
          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 mb-4 border-2 border-gray-500 rounded-lg bg-transparent text-black focus:outline-none"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}

          {/* Email */}
          <h2 className="text-black">Email</h2>
          <input
            type="email"
            name="email"
            placeholder="ejemplo@correo.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 mb-4 border-2 border-gray-500 rounded-lg bg-transparent text-black focus:outline-none"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}

          {/* Contraseña */}
          <h2 className="text-black">Contraseña</h2>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 mb-4 border-2 border-gray-500 rounded-lg bg-transparent text-black focus:outline-none"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}

          {/* Confirmar Contraseña */}
          <h2 className="text-black">Confirmar Contraseña</h2>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Contraseña"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 mb-4 border-2 border-gray-500 rounded-lg bg-transparent text-black focus:outline-none"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {formik.errors.confirmPassword}
            </p>
          )}

          {/* Botón de Crear Cuenta */}
          <button
            type="submit"
            className="w-full p-2 mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold focus:outline-none"
          >
            Crear Cuenta
          </button>
        </form>
        {/* Mostrar error del servidor si existe */}
        {serverError && (
          <p className="text-red-500 text-sm text-center mt-4">{serverError}</p>
        )}
        <div className="text-center">
          <span className="text-sm text-gray-600">¿Ya tienes una cuenta? </span>
          <Link to="/login" className="text-purple-700 hover:underline text-sm">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </div>
  );
};
