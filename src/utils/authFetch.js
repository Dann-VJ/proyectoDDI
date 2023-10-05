import { storageController } from "../api/token";
import { tokenExpired } from "./tokenExpired";

export const authFetch = async (url, params) => {
    console.log("Hola desde authFetch");

    const token = await storageController.getToken();
    console.log('Token recuperado:', token);

    const logout = () => {
        storageController.removeToken();
    }

    if (!token) {
        logout();
        return Promise.reject("No hay token de autenticación.");
    }

    // Funcion para añadir el token a la cabecera de la peticion
    const paramsTemp = {
        ...params,
        headers: {
            // Añadimos el token a la cabecera de la peticion
            ...params?.headers,
            Authorization: `Bearer ${token}`
        }
    };

    try {
        // Hacemos la peticion con los parametros
        const response = await fetch(url, paramsTemp);

        if (response.ok) {
            // Si la respuesta es exitosa, devolvemos la respuesta para que sea procesada en getMe
            return response;
        } else {
            // Si la respuesta no es exitosa, lanzamos un objeto de error con detalles del error
            const errorResponse = await response.json();
            return Promise.reject(errorResponse);
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        return Promise.reject(error);
    }
};
