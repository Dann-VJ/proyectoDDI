import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { IconButton } from 'react-native-paper'
import { addFavoriteApi, isFavoriteApi, deleteFavoriteApi } from '../../api/favorito';
import Toast from 'react-native-root-toast'; 
import HomeScreen from '../../screen/HomeScreen';

export default function Favoritos(props) {
    const { id } = props;
    const [isFavorite, setIsFavorite] = useState(undefined);

    // Estado para recargar el componente cuando se añada o elimine de favoritos
    const [reloadFavorite, setReloadFavorite] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await isFavoriteApi(id)
            if (response) setIsFavorite(true)
            else setIsFavorite(false);
        })()
    }, [id, reloadFavorite]) // El useEffect se ejecutará cada vez que cambie el id o el reloadFavorite

    // Cada que cambie el estado de reloadFavorite, se ejecutará esta función
    const onReloadFavorite = () => {
        setReloadFavorite((prev) => !prev);
    }

    const addFavoritos = async () => {
        // console.log('Agregado a favoritos', id);
        // await addFavoriteApi(id);
        try{
            await addFavoriteApi(id);
            onReloadFavorite();
            if(!isFavorite) {
                Toast.show("Agregado a favoritos",{
                    position: Toast.positions.CENTER,
                });
            } 
        } catch (error) {
            console.log(error);
        }
    }

    const deleteFavorite = async () => {
        try {
            await deleteFavoriteApi(id);
            onReloadFavorite();
            Toast.show("Eliminado de favoritos", {
                position: Toast.positions.CENTER,
            });
        } catch (error) {
            console.log(error);
        }
    }


    const iconColor = isFavorite ? 'red' : 'white';
    
    return (
        
        <View>
            <IconButton
                icon="heart"
                iconColor={iconColor}
                size={50}
                onPress={isFavorite ? deleteFavorite : addFavoritos}
            />
        </View> 
    )
}