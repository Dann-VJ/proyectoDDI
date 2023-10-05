import AsyncStorage from "@react-native-async-storage/async-storage";
import { ENV } from "../utils/constants";

// Funcion para guardar el token en el storage
const setToken = async (token) => {
    await AsyncStorage.setItem(ENV.STORAGE.TOKEN, token);
}

// Funcion para obtener el token del storage
const getToken = async () => {
    return await AsyncStorage.getItem(ENV.STORAGE.TOKEN);
}

// Funcion para eliminar el token del storage
const removeToken = async () => {
    await AsyncStorage.removeItem(ENV.STORAGE.TOKEN);
}

export const storageController = {
    setToken,
    getToken,
    removeToken 
}