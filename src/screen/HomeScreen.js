import React from 'react'
import  { View, Text } from 'react-native'
import { useAuth } from '../hooks/useAuth'
import { Button } from 'react-native-paper';
import { globalStyles } from '../../styles';

const HomeScreen = () => {
  const {logout, user} = useAuth();
  console.log("Mi user: ",user)

  return (
    <View>
        <Text>HomeScreen</Text>
        <Button mode='contained' style={globalStyles.form.buttonSubmit} onPress={logout}>Salir</Button>
    </View>
  )
}

export default HomeScreen