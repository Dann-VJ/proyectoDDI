import React, { useCallback, useState } from 'react'
import { getFavoriteApi } from '../api/favorito'
import { useFocusEffect } from '@react-navigation/native'
import axios from 'axios';
import { ENV } from '../utils/constants';
import HomeScreen from './HomeScreen'

const FavoritesScreen = () => {
  const [personajes, setPersonajes] = useState([])
  const [characters, setCharacters] = useState([])

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const favoriteResponse = await getFavoriteApi()
        setPersonajes(favoriteResponse) // Actualiza el estado de personajes con los favoritos

        try {
          const response = await axios.get(ENV.API_URL_RM)
          setCharacters(response.data.results)
        } catch (error) {
          console.log(error)
        }
      })()
    }, [])
  )

  // const checkFavorites = async () => {
  //   const response = await getFavoriteApi();
  //   console.log('response', response);
  // }
  // return (
  //   <View>
  //     <Button 
  //       mode='contained'
  //       onPress={checkFavorites}
  //     >
  //       Ver favoritos
  //     </Button>
  //   </View>
  // )

  return (
    <HomeScreen characters={characters.filter((character) => personajes.includes(character.id))} />
  )
}

export default FavoritesScreen