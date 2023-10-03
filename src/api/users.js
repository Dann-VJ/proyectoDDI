import { ENV } from "../utils/constants";

const getMe = async (token) => {
    try {
        const response = await fetch(`${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`,   
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const userController = {
    getMe
}