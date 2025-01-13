import { useForm } from 'react-hook-form';

function DiagnosticoEmprendedores() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-lg mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-6 text-azul">Diagnóstico para Emprendedores</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            {...register('nombre', { required: true })}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          {errors.nombre && <p className="text-red-500 text-sm">El nombre es obligatorio</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">El correo es obligatorio</p>}
        </div>

        <button type="submit" className="px-4 py-2 bg-rosado text-white rounded shadow">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default DiagnosticoEmprendedores;
