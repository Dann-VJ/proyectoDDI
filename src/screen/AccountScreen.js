import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Avatar, Button } from 'react-native-paper';
import { useAuth } from '../context/AuthContext';

export default function AccountScreen() {
  const { logout, user } = useAuth();
  console.log('Datos del usuario', user);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 20 }}>Cuenta</Text>
        <Avatar.Image size={200} source={require('../assets/person1.jpeg')} />
      </View>
      <ScrollView style={styles.MainContainer}>
        <Text style={ styles.username }>Nombre: {user.username}</Text>
        <Text style={ styles.email }>Email: {user.email}</Text>
        <Button
          mode="contained"
          onPress={logout}
        >
          Cerrar sesión
        </Button>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // espacio entre los elementos,
    alignItems: 'center', // alinea los elementos al centro
    padding: 10,

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
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // espacio entre los elementos,
    alignItems: 'center', // alinea los elementos al centro
    padding: 10,

  }
})