import { ENV } from "../utils/constants";
import { authFetch } from "../utils/authFetch";

const getMe = async (token) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`
        const response = await authFetch(url);

        //return await response.json();
        if (response && response.ok) {
            return await response.json();
        } else {
            // Manejar errores de la respuesta, response.status
            console.log('Error en la respuesta de la API', response.status);
            return null;
        }


    } catch (error) {
        // Manejar errores de red u otros errores
        console.log('Error en la solicitud: ', error);
        return null;
    }
}

const updateUser = async (id, data) => {

    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}/${id}`;
        const params = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await authFetch(url, params);
        if (response.statusCode) throw "Error al actualizar datos del usuario";
        return await response.json();
    } catch (error) {
        console.log('Error en la solicitud: ', error);
        throw error;
    }
}

export const userController = {
    getMe,
    updateUser
}