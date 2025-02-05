/* import { useState } from "react";

const useLoginUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleLogin = async (credentials) => {
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }, 
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Error en el inicio de sesión");
            }

            setSuccess("Inicio de sesión exitoso");
            console.log(data);
            
            return data;
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };


    return { handleLogin, loading, error, success };
};

export default useLoginUser;
 */


import { useState } from "react";

const useLoginUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleLogin = async (credentials) => {
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Error en el inicio de sesión");
            }

            // Guardar el token en localStorage
            localStorage.setItem("authToken", data.token);
            
            setSuccess("Inicio de sesión exitoso");
            return data;
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { handleLogin, loading, error, success };
};

export default useLoginUser;
