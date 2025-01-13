import { useForm } from 'react-hook-form';

function DiagnosticoEmpresas() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Datos del diagnóstico para empresas:', data);
    // Aquí puedes agregar la lógica para enviar los datos a un backend o integrarlo con Make
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-lg mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-6 text-azul">Diagnóstico para Empresas</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Campo: Nombre de la Empresa */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre de la Empresa</label>
          <input
            type="text"
            {...register('empresa', { required: 'El nombre de la empresa es obligatorio' })}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          {errors.empresa && (
            <p className="text-red-500 text-sm">{errors.empresa.message}</p>
          )}
        </div>

        {/* Campo: Correo Electrónico */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            {...register('email', { required: 'El correo es obligatorio' })}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Campo: Área de Necesidad */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Área de Necesidad</label>
          <select
            {...register('necesidad', { required: 'Debes seleccionar un área de necesidad' })}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          >
            <option value="">Selecciona una opción</option>
            <option value="comunicacion">Comunicación y liderazgo</option>
            <option value="cultura">Cultura empresarial</option>
            <option value="reskilling">Reskilling / Upskilling</option>
            <option value="contratacion">Contratación de nuevo talento</option>
          </select>
          {errors.necesidad && (
            <p className="text-red-500 text-sm">{errors.necesidad.message}</p>
          )}
        </div>

        {/* Campo: Cargar audio */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Cargar Audio (opcional)</label>
          <input
            type="file"
            accept="audio/*"
            {...register('audio')}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="px-4 py-2 bg-rosado text-white rounded shadow hover:bg-pink-700 transition"
        >
          Enviar Diagnóstico
        </button>
      </form>
    </div>
  );
}

export default DiagnosticoEmpresas;
