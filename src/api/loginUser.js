import axios from "axios";

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;
const VITE_USERS = import.meta.env.VITE_USERS;


export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${BACKEND_ENDPOINT}${VITE_USERS}`, credentials);
        return response.data;
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        throw error;
    }
};