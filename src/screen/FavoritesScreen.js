import React from 'react'
import  { View, Text } from 'react-native'
import { getFavoriteApi } from '../api/favorito'
import { Button } from 'react-native-paper'

const FavoritesScreen = () => {
  const checkFavorites = async () => {
    const response = await getFavoriteApi();
    console.log('response', response);
  }
  return (
    <View>
      <Button 
        mode='contained'
        onPress={checkFavorites}
      >
        Ver favoritos
      </Button>
    </View>
  )
}

export default FavoritesScreen