import React from 'react'
import { View, Text, SafeAreaView, FlatList, ImageBackground } from 'react-native'
import { Button } from 'react-native-paper';
import { globalStyles } from '../../styles';
import Card from '../components/Card/Card';
import { styles } from './Auth/AuthScreen.styles';

export default function HomeScreen(props) {
  const { characters } = props;
  console.log('characters', characters);

  return (
    <ImageBackground source={require('../assets/cielo-estrellado.jpg')} style={styles.backgroundImg}>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <FlatList
          style={{ marginTop: 30 }}
          data={characters}
          showsVerticalScrollIndicator={false}
          keyExtractor={(characters) => String(characters.id)}
          renderItem={({ item }) => <Card characters={item} />}
        />
      </SafeAreaView>
    </ImageBackground>
  )
}


