import VocalTech1 from "../assets/icons/vovaltech.png";
import { FaEllipsisV, FaInfoCircle, FaTrashAlt, FaClipboardCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import chica from "../assets/images/perfil-castaña.png";

// Sidebar
const Sidebar = ({ setView }) => (
  <aside className="w-64 bg-gray-100 h-screen p-6 flex flex-col">
    <div className="ml-11 mb-11">
      <img src={VocalTech1} alt="VocalTech1" className="h-5 w-22 mb-6" />
    </div>

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
        <img src={chica} alt="Perfil" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  </header>
);

// Stats
const Stats = () => (
  <section className="grid grid-cols-3 gap-4 p-4">
    {[
      { title: "Leads", value: "1222", extra: "+10 Este Mes", color: "blue" },
      { title: "Convertidos", value: "55", extra: "+10 Este Mes", color: "green" },
      { title: "Pendientes", value: "12", extra: "+12 Este Mes", color: "purple" },
    ].map(({ title, value, extra }) => (
      <div key={title} className="p-4 bg-white shadow-md rounded-lg">
        <p className="text-gray-500 font-medium">{title}</p>
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-blue-500 mr-2">{value}</h2>
          <p className="text-sm text-green-500">{extra}</p>
        </div>
      </div>
    ))}
  </section>
);

// Tabla de usuarios (Leads)
const UsersTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://vocaltech-api-gateway-production.up.railway.app/api/leads/findAll")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los leads:", error);
        setLoading(false);
      });
  }, []);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleViewDetails = (index) => {
    navigate(`/adminEmprendedor/${index}`);
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <section className="p-4">
      <h2 className="font-bold">Resumen Leads</h2>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">Nombre</th>
            <th className="p-2">Email</th>
            <th className="p-2">Celular</th>
            <th className="p-2">Categoría</th>
            <th className="p-2">Estado</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lead, index) => (
            <tr key={index} className="border-t relative">
              <td className="p-2">{lead.name}</td>
              <td className="p-2">{lead.email}</td>
              <td className="p-2">{lead.phone}</td>
              <td className="p-2">{lead.category}</td>
              <td className="p-2">
                <span className="bg-green-100 text-green-600 p-1 rounded-md">
                  {lead.status}
                </span>
              </td>
              <td className="p-2 relative">
                <button
                  onClick={() => toggleMenu(index)}
                  className="text-gray-600 p-2 hover:bg-gray-200 rounded-full"
                >
                  <FaEllipsisV />
                </button>

                {openMenu === index && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                    <button
                      onClick={() => handleViewDetails(index)}
                      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full"
                    >
                      <FaInfoCircle className="mr-2" /> Ver Detalles
                    </button>

                    <button className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 w-full">
                      <FaClipboardCheck className="mr-2" /> Diagnosticar
                    </button>
                    <button className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100 w-full">
                      <FaTrashAlt className="mr-2" /> Eliminar Lead
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

// Dashboard con cambio de vistas
const Dashboard = () => {
  const [view, setView] = useState("stats");

  return (
    <div className="flex">
      <Sidebar setView={setView} />
      <main className="flex-1 flex flex-col">
        <Header />
        {view === "stats" ? (
          <>
            <Stats />
            <UsersTable />
          </>
        ) : (
          <>
            <UsersTable />
          </>
        )}
      </main>
    </div>
  );
};

export default Dashboard;