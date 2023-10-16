import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screen/HomeScreen';
import SettingsScreen from '../../../screen/SettingsScreen';
import FavoritesScreen from '../../../screen/FavoritesScreen';
import AccountScreen from '../../../screen/AccountScreen';
import { View, Image  } from 'react-native'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { styles } from './TabNavigation.styles';
import AuthScreen from '../../../screen/Auth/AuthScreen';
import RickandMortyAPI from '../../../api/rm';




const TabNavigations = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus)
      })}
    >
      {/* <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{title: 'Ajustes'}} /> */}

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: 'Favoritos' }} />

      <Tab.Screen
        name="Home"
        component={RickandMortyAPI} 
        options={{ title: 'Inicio' }} />

      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: 'Cuenta' }}
      />

    </Tab.Navigator>
  )
}

const setIcon = (route, routeStatus) => {
  let iconName = '';
  let icon = ''
  let color = '#6E6E6E';

  if (routeStatus.focused) {
    color = '#BE81F7';
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