import React from 'react'
import { View, Text, SafeAreaView, FlatList, ImageBackground, ActivityIndicator } from 'react-native'
import { globalStyles } from '../../styles';
import Card from '../components/Card/Card';
import { styles } from './Auth/AuthScreen.styles';
import { styles2 } from './HomeScreen.styles';

export default function HomeScreen(props) {
  const { characters, loadMoreData, nextUrl } = props;
  console.log('characters', characters);
  const loadMore = () => {
    // console.log('Cargando más personajes');
    if (nextUrl) {
      loadMoreData();
    }
  }

  return (
    <ImageBackground source={require('../assets/cielo-estrellado.jpg')} style={styles.backgroundImg}> 
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <FlatList
          style={{ marginTop: 30 }}
          data={characters}
          showsVerticalScrollIndicator={false}
          keyExtractor={(characters) => String(characters.id)}
          renderItem={({ item }) => <Card characters={item} />}
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            nextUrl && <ActivityIndicator style={styles2.sniper} size="large" color="#79B543"></ActivityIndicator>
          }
        />
      </SafeAreaView>
    </ImageBackground>
  )
}


