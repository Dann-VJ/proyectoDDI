import React from 'react'
import { View, Text, StyleSheet, ScrollView, Alert, ImageBackground } from 'react-native'
import { Avatar, Button } from 'react-native-paper';
import { useAuth } from '../hooks/useAuth'
import Menu from '../components/Menu/Menu';
import { getFavoriteApi } from '../api/favorito';
import { userController } from '../api/users';

export default function AccountScreen() {
  const { logout, user, upDateUser } = useAuth();
  // console.log('Datos del usuario', user);
  const logoutAlert = () => { 
    Alert.alert(
      "Cerrar sesión",
      "¿Estas seguro que deseas cerrar sesión?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Cerrar sesión",
          onPress: async () => {
            const favoriteResponse = await getFavoriteApi();
            const data = {
              favoritos: favoriteResponse
            }

            await userController.updateUser(user.id, data)
            upDateUser('favoritos', favoriteResponse)
            logout()
          }
        }
      ],
      { cancelable: false }
    )
  }

  return (
    <ImageBackground source={require('../assets/cielo-estrellado.jpg')} style={styles.backgroundImg}>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.email}>
          {user.FirstName && user.LastName ? `${user.FirstName} ${user.LastName}` : user.email}
        </Text>
        <Menu />
        <Button
          mode='contained'
          onPress={logoutAlert}
          style={styles.button}
        >
          Cerrar sesión
        </Button>
        {/* <Button mode="contained" onPress={logout}>
        Cerrar sesión
      </Button> */}
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center', // espacio entre los elementos,
    alignItems: 'center', // alinea los elementos al centro
    padding: 20,

  },
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // espacio entre los elementos,
    alignItems: 'center', // alinea los elementos al centro
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  backgroundImg:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
})