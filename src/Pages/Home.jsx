import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-azul to-violeta text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 animate-bounce">Bienvenido a la Alianza</h1>
      <p className="text-lg mb-8">Selecciona una opción para continuar:</p>
      <div className="space-x-4">
        <Link
          to="/emprendedores"
          className="px-6 py-3 bg-rosado rounded-lg shadow-lg hover:bg-pink-700 transition"
        >
          Soy Emprendedor
        </Link>
        <Link
          to="/empresas"
          className="px-6 py-3 bg-azul rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Soy Empresa
        </Link>
      </div>
    </div>
  );
}

export default Home;
