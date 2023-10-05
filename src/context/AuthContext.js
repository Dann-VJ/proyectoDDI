import React, { useState, useEffect, createContext } from "react";
import { storageController } from "../api/token";
import { userController } from "../api/users";
import { tokenExpired } from "../utils/tokenExpired";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props

    // Crear el estado del usuario
    const [user, setUser] = useState(null);
    // Crear el estado de carga
    const [isLoading, setIsLoading] = useState(true);

    // Comprobar si existe un token en AsyncStorage
    useEffect(() => {
        getSession();
    }, []);

    const getSession = async () => {
        const token = await storageController.getToken();
        console.log('Token recuperado desde authContext:', token);
        if (!token) {
            //logout();
            setIsLoading(false);
            return;
        }if(tokenExpired(token)){
            logout();
        }else{
            login(token);
        }
    };

    const login = async (token) => {
        try {
            console.log('Obtenido ', token);
            await storageController.setToken(token);
            const response = await userController.getMe();
            setUser(response);
            setIsLoading(false);
            console.log('user-->', response);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const logout = async () => {
        try {
            await storageController.removeToken();
            setUser(null);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    const upDateUser = async (key, value) => {
        setUser({
            ...user,
            [key]: value
        })
    }

    const data = {
        user,
        login,
        logout,
        upDateUser,
    }

    if (isLoading) return null;
    
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}



