import React, { useState, useEffect, createContext } from "react";
import { storageController } from "../api/token";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const { children } = props

    const login = async (token) => {
        try {
            console.log('Obtenido ', token);
            await storageController.setToken(token);

            const getSession = async () => {
                try {
                    const storedToken = await storageController.getToken();
                    setToken(storedToken);
                    console.log('token-->', storedToken);
                } catch (error) {
                    console.log(error);
                }
            };

            useEffect(() => {
                getSession();
            }, []);
        } catch (error) {
            console.log(error);
        }
    }

    const data = {
        user: null,
        login,
        logout: () => console.log('logout'),
        upDateUser: () => console.log('update user')
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

