import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native'
import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';
import { styles } from './AuthScreen.styles';
import Spawn from '../../assets/pngwing.png';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);

  const cambioAuth = () => {
    setIsLogin(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
        <Image style={styles.image} source={Spawn} />
        {isLogin ? <Login cambioAuth={cambioAuth} /> : <Register cambioAuth={cambioAuth} />}
      </KeyboardAvoidingView>
    </View>
  );
}

export default AuthScreen
