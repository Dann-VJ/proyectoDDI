import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Favoritos from '../../components/Favoritos/Favoritos';
import { styles } from './Detalles.styles';

export default function Detalle() { 
    const route = useRoute();
    const { personaje } = route.params;

    return (
        <View style={styles.container}>
            <Image style={styles.imgDetails} source={{ uri: personaje.image }} />
            <Text style={styles.textDetails}>Nombre: {personaje.name}</Text>
            <Text>Estado: {personaje.status}</Text>
            <Text>Especie: {personaje.species}</Text> 
            <Text>Genero: {personaje.gender}</Text>
            {/* Mostrar otros detalles del personaje aquí */}

            {/* Componente Favoritos */}
            <Favoritos id={personaje.id} />
        </View>
    );
}
  