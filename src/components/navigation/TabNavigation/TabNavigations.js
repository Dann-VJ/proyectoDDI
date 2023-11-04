import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../../../screen/FavoritesScreen';
import { View, Image  } from 'react-native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { styles } from './TabNavigation.styles';
import RickandMortyAPI from '../../../api/rm';
import StackAccount from '../StackNavigation/StackAccount';





const TabNavigations = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus)
      })}
    >

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}  
        options={{ title: 'Favoritos', tabBarShowLabel: false }} />

      <Tab.Screen
        name="Home"
        component={RickandMortyAPI} 
        options={{ title: 'Inicio', tabBarShowLabel: false }} />

      <Tab.Screen
        name="Account"
        component={StackAccount}
        options={{ title: 'Cuenta', tabBarLabel: '', tabBarShowLabel: true }}
      />

    </Tab.Navigator>
  )
}

const setIcon = (route, routeStatus) => {
  let iconName = '';
  let color = '#6E6E6E';

  if (routeStatus.focused) {
    color = '#5CAD4A';
  }
  if (route.name === 'Home') {
    iconName = require('../../../assets/Rick.png'); 
  }
  if (route.name === 'Settings') {
    iconName = 'cog';
  }
  if (route.name === 'Favorites') {
    iconName = 'heart';
  }
  if (route.name === 'Account') {
    iconName = 'user';
  }

  // Estructura condicional en el return para determinar si mostrar un icono o una imagen
  return typeof iconName === 'string' ? (
    <AwesomeIcon name={iconName} color={color} style={styles.icon} />
  ) : (
    <Image source={iconName} style={styles.iconIMG} />
  );
}


export default TabNavigations