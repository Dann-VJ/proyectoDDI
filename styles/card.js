import { StyleSheet } from 'react-native';

export const card = StyleSheet.create({
    img : {
        width: 100,
        height: 100,
        borderRadius: 200,
    },
    card : {
        backgroundColor: 'rgba(92, 173, 74, 0.5)',
        marginBottom: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        backdropFilter: 'blur(50px)', // Cambia el valor según el nivel de desenfoque que desees
    },
    container : {
        margin: 10, 
        flexDirection: 'row',
    },
    containerText : {
        marginLeft: 25, 
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
});