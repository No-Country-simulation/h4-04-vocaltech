
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">
        {/* Formulario */}
        <div className="p-10 flex flex-col justify-center">
          <a href="#" className="text-gray-500 text-sm flex items-center space-x-2">
            <ArrowLeftIcon className="h-4 w-4 text-gray-500" /> {/* Flecha más pequeña */}
            <span>Regresar</span>
          </a>
          <h1 className="text-4xl font-bold mt-6">
            Vocal<span className="text-indigo-600">Tech</span>
          </h1>
          <p className="mt-2 text-gray-600">Ingresa a tu cuenta</p>
          <p className="text-sm text-gray-500 mt-1">
            ¡Qué gusto tenerte por aquí de vuelta! Por favor, completa los campos.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="ejemplo@correo.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Ingresar
            </button>
          </form>

          <p className="mt-4 text-sm text-center">
            ¿No tienes una cuenta?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Crear Cuenta
            </a>
          </p>
        </div>

        {/* Imagen */}
        <div className="hidden md:block">
          <img
            src="https://via.placeholder.com/400x500"
            alt="Login Illustration"
            className="w-full h-full object-cover rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
