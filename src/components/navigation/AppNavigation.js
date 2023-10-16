import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigations from './TabNavigation/TabNavigations';
import Detalles from '../../screen/Details/Detalles';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigations"
          component={TabNavigations}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Detalles"
          component={Detalles}
          options={{ title: 'Detalles' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation