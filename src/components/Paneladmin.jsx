
import VocalTech1 from "../assets/icons/vovaltech.png";
import { useState, useEffect } from 'react';


const Sidebar = () => (
    <aside className="w-64 bg-gray-100 h-screen p-6 flex flex-col">
    {/* Logo */}
    <div className="ml-11 mb-11">
      <img src={VocalTech1} alt="VocalTech1" className="h-5 w-22 mb-6" />
    </div>
  
    {/* Menú de navegación */}
    <nav className="space-y-7 flex-1">
  <button className="flex items-center space-x-2 p-2 rounded-full w-full hover:bg-purple-700 hover:text-white">
    <span>🏠</span>
    <span>Inicio</span>
  </button>

  <button className="flex items-center space-x-2 p-2 w-full rounded-full hover:bg-purple-700 hover:text-white">
    <span>📋</span>
    <span>Leads</span>
  </button>

  <button className="flex items-center space-x-2 p-2 w-full rounded-full hover:bg-purple-700 hover:text-white">
    <span>🩺</span>
    <span>Diagnósticos</span>
  </button>
</nav>

    {/* Botón de Configuración (Siempre en la parte inferior) */}
    <button className="flex items-center space-x-2 p-2 w-full rounded-full hover:bg-purple-700 hover:text-white">
      <span>⚙️</span>
      <span>Configuración</span>
    </button>
  </aside>
  
);

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow-md">
  <div className="flex-grow"></div> {/* Empuja el input hacia la derecha */}
  
  <input
    type="text"
    placeholder="Buscar aquí..."
    className="border p-2 rounded-md w-1/3 ml-auto mr-4" /* Mueve más cerca de la campana */
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
// Simulando una respuesta de backend con datos mockeados
const mockData = [
  { id: 1, name: "Juan Pérez", email: "juan@correo.com", phone: "123456789", category: "Empresa", status: "Activo" },
  { id: 2, name: "Ana Gómez", email: "ana@correo.com", phone: "987654321", category: "Emprendedor", status: "Inactivo" },
  { id: 3, name: "Carlos Ruiz", email: "carlos@correo.com", phone: "456789123", category: "Empresa", status: "Activo" },
  { id: 4, name: "Lucía Martínez", email: "lucia@correo.com", phone: "987123456", category: "Emprendedor", status: "Activo" },
  { id: 5, name: "Pedro Sánchez", email: "pedro@correo.com", phone: "321654987", category: "Empresa", status: "Inactivo" },
];

const UsersTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulación de llamada a un API (mocking data)
    setTimeout(() => {
      setData(mockData);  // Mockea la respuesta
      setLoading(false);   // Cambio de estado de carga
    }, 1000);  // Simula un retraso de 1 segundo
  }, []);

  if (loading) return <div>Cargando...</div>; // Mostrar algo mientras se cargan los datos
  if (error) return <div>Error al cargar los datos.</div>;

  return (
    <section className="p-4">
      <h2 className="font-bold">Resumen Leads</h2>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-2">ID</th>
            <th className="p-2">Nombre</th>
            <th className="p-2">Email</th>
            <th className="p-2">Celular</th>
            <th className="p-2">Categoría</th>
            <th className="p-2">Estado</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((lead, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{lead.id}</td>
              <td className="p-2">{lead.name}</td>
              <td className="p-2">{lead.email}</td>
              <td className="p-2">{lead.phone}</td>
              <td className="p-2">{lead.category}</td>
              <td className="p-2">
                <span className="bg-green-100 text-green-600 p-1 rounded-md">{lead.status}</span>
              </td>
              <td className="p-2">
                <button className="text-blue-500">Ver Detalles</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {[1, 2, 3, "...", 10].map((page, index) => (
          <button key={index} className="mx-1 p-2 border rounded-md">
            {page}
          </button>
        ))}
      </div>
    </section>
  );
};

const Dashboard = () => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 flex flex-col">
      <Header />
      <Stats />
      <UsersTable />
    </main>
  </div>
);

export default Dashboard;
