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

export const userController = {
    getMe
}