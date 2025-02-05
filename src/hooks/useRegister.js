import { useState } from "react";
import { registerUser } from "../api/registerUser";

const useRegisterUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleRegister = async (userData) => {
        setLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const response = await registerUser(userData);
            setSuccess("Registro exitoso");
            return response;
        } catch (error) {
            setError(error.response?.data?.message || "Error en el registro");
        } finally {
            setLoading(false);
        }
    };

    return { handleRegister, loading, error, success };
};

export default useRegisterUser;
