import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Image, ImageBackground } from 'react-native'
import Login from '../../components/Auth/Login/Login';
import Register from '../../components/Auth/Register/Register';
import { styles } from './AuthScreen.styles';
import RYM from '../../assets/RickMorty.png';

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);

  const cambioAuth = () => {
    setIsLogin(prevState => !prevState);
  };

  return (
    <ImageBackground source={require('../../assets/cielo-estrellado.jpg')} style={styles.backgroundImg}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
          <Image style={styles.image} source={RYM} />
          {isLogin ? <Login cambioAuth={cambioAuth} /> : <Register cambioAuth={cambioAuth} />}
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

export default AuthScreen
