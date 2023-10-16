import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { ENV } from "../utils/constants";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

// Crear la función que trae los favoritos
export const getFavoriteApi = async () => {
    try {
        const response = await AsyncStorage.getItem(ENV.STORAGE.FAVORITE);
        return JSON.parse(response || []);
    } catch (error) {
        console.log(error);
        return [];
    }
}; 

// Crear la función que agrega un favorito
export const addFavoriteApi = async (id) => {
    try {
        const favorites = await getFavoriteApi();
        favorites.push(id);
        await AsyncStorage.setItem(
            ENV.STORAGE.FAVORITE,
            JSON.stringify(favorites)
        );  
    } catch (error) {
        console.log(error);
    }
};

// Crear la función que valida si un personaje es favorito
export const isFavoriteApi = async (id) => {
    try {
        const favorites = await getFavoriteApi();
        return includes(favorites, id);
    } catch (error) {
        console.log(error);
        return false;
    }
};

// Crear la función que elimina un favorito
export const deleteFavoriteApi = async (id) => {
    try {
        const favorite = await getFavoriteApi();
        const newFavorites = pull(favorite, id);
        await AsyncStorage.setItem(
            ENV.STORAGE.FAVORITE,
            JSON.stringify(newFavorites)
        );
    } catch (error) {
        console.log(error);
    }
};

