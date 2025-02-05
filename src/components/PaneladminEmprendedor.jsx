import { useState, useEffect } from "react";
import VocalTech1 from "../assets/icons/vovaltech.png";
import { useParams } from "react-router-dom";
import DetalleLead from "./DetalleLead";


// Sidebar
const Sidebar = ({ setView }) => (
  <aside className="w-64 bg-gray-100 h-screen p-6 flex flex-col">
    {/* Logo */}
    <div className="ml-11 mb-11">
      <img src={VocalTech1} alt="VocalTech1" className="h-5 w-22 mb-6" />
    </div>

    {/* Menú de navegación */}
    <nav className="space-y-7 flex-1">
      <button
        onClick={() => setView("stats")}
        className="flex items-center space-x-2 p-2 rounded-full w-full hover:bg-purple-700 hover:text-white"
      >
        <span>🏠</span>
        <span>Inicio</span>
      </button>

      <button
        onClick={() => setView("leads")}
        className="flex items-center space-x-2 p-2 w-full rounded-full hover:bg-purple-700 hover:text-white"
      >
        <span>📋</span>
        <span>Leads</span>
      </button>
    </nav>

    {/* Botón de Configuración */}
    <button className="flex items-center space-x-2 p-2 w-full rounded-full hover:bg-purple-700 hover:text-white">
      <span>⚙️</span>
      <span>Configuración</span>
    </button>
  </aside>
);

// Header
const Header = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow-md">
    <div className="flex-grow"></div>
    <input
      type="text"
      placeholder="Buscar aquí..."
      className="border p-2 rounded-md w-1/3 ml-auto mr-4"
    />
    <div className="flex items-center space-x-4">
      <button>🔔</button>
      <div className="flex items-center space-x-2">
        <span>Admin</span>
        <img
          src="https://via.placeholder.com/40"
          alt="Perfil"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  </header>
);


  const Dashboard2 = () => {
    const { id } = useParams(); // Obtiene el ID desde la URL
  const [view, setView] = useState(id ? "leadDetails" : "leads"); // Si hay ID, muestra detalles

    return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar setView={setView} />
  
        {/* Contenedor Principal */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* Header */}
          <Header />
  
          {/* Contenido Dinámico */}
          <div className="p-6">
            {view === "leads" && <DetalleLead />}
            {view === "stats" && <h2 className="text-xl font-bold">Dashboard de Estadísticas</h2>}
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard2;