
const DetalleLead = ({ leadId }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <div className="p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto w-full">
        {/* Encabezado */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            Detalles Lead: <span className="text-gray-700">ID {leadId || "Desconocido"}</span>
          </h2>
          <div className="flex space-x-2">
            <button className="border px-4 py-2 rounded-md flex items-center space-x-2 text-blue-500 border-blue-500">
              <span>✉️</span>
              <span>Email</span>
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center space-x-2">
              <span>📱</span>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Contenedor principal */}
        <div className="grid grid-cols-2 gap-6 bg-gray-100 p-6 rounded-lg">
          {/* Información Básica */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Información Básica</h3>

            {[
              { label: "Fecha de Alta", value: "15/01/2025" },
              { label: "Categoría", value: "Emprendedor" },
              { label: "Nombre Empresa/Emprendimiento", value: "Innovación TI" },
              { label: "Etapa", value: "Idea Inicial" },
              { label: "Redes Sociales / Sitio Web", value: "innova.com.ar" },
              { label: "Sector de Actividad", value: "Tecnología" },
              { label: "Ubicación", value: "Argentina, Buenos Aires" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col mb-2">
                <span className="font-semibold">{item.label}:</span>
                <span>{item.value}</span>
              </div>
            ))}

            <div className="flex flex-col mt-2">
              <span className="font-semibold">Estado:</span>
              <span className="ml-2 bg-yellow-200 text-yellow-800 px-2 py-1 rounded-md w-fit">
                Pendiente
              </span>
            </div>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Información de Contacto</h3>

            <div className="flex flex-col mb-2">
              <span className="font-semibold">Celular:</span>
              <span>+54 9 333333333</span>
            </div>

            <div className="flex flex-col">
              <span className="font-semibold">Email:</span>
              <span>innovacionti@creatividad.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botón Final - Asegurar que siempre es visible */}
      <div className="mt-4 flex justify-end p-4">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center space-x-2">
          <span>📂</span>
          <span>Ver Respuestas del Formulario</span>
        </button>
      </div>
    </div>
  );
};

export default DetalleLead;


  