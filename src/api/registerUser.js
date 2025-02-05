import axios from "axios";

// Verificamos que las variables de entorno se carguen correctamente
console.log("Backend URL:", import.meta.env.VITE_BACKEND_URL);
console.log("Create Users Endpoint:", import.meta.env.VITE_CREATE_USERS);

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;
const CREATE_USERS = import.meta.env.VITE_CREATE_USERS;

export const registerUser = async (userData) => {
    try {
        const url = `${BACKEND_ENDPOINT}${CREATE_USERS}`;
        console.log("Registrando usuario en:", url);

        const response = await axios.post(url, userData, {
            headers: { "Content-Type": "application/json" },
        });

        console.log("Usuario registrado con éxito:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Error al registrar usuario:", error.message);
        
        if (error.response) {
            console.error("📌 Datos del error:", error.response.data);
            console.error("📌 Estado del error:", error.response.status);
        } else if (error.request) {
            console.error("📌 No hubo respuesta del servidor:", error.request);
        } else {
            console.error("📌 Error desconocido:", error.message);
        }

        throw error;
    }
};
