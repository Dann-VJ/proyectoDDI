import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Favoritos from '../../components/Favoritos/Favoritos';

export default function Detalle() {
    const route = useRoute();
    const { personaje } = route.params;

    return (
        <View>
            <Image style={{ width: 200, height: 200 }} source={{ uri: personaje.image }} />
            <Text>Nombre: {personaje.name}</Text>
            <Text>Estado: {personaje.status}</Text>
            <Text>Especie: {personaje.species}</Text> 
            {/* Mostrar otros detalles del personaje aquí */}

            {/* Componente Favoritos */}
            <Favoritos id={personaje.id} />
        </View>
    );
}
  