import { View, Text, TouchableOpacity, Image } from "react-native";
import React from 'react';
import { globalStyles } from "../../../styles";
// import { styles } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function Card(props) {
    const { characters } = props;
    const navigation = useNavigation();

    const goToPersonaje = () => {
        // console.log(`Conoce más del personaje: ', ${characters.name}`)
        // Navegar a la pantalla de detalles con los datos del personaje
        navigation.navigate('Detalles', { personaje: characters });
    }

    return (
        <TouchableOpacity onPress={goToPersonaje} style={globalStyles.card.card} >
            <View style={globalStyles.card.container}>
                <Image
                    style={globalStyles.card.img}
                    source={{ uri: characters.image }} />
                <Text style={globalStyles.card.containerText} >{characters.name}</Text> 
            </View>
        </TouchableOpacity>
    )
}