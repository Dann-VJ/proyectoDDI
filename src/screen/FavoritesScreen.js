import React, { useCallback, useState, useEffect } from 'react'
import { getFavoriteApi } from '../api/favorito'
import { useFocusEffect } from '@react-navigation/native'
import axios from 'axios';
import { ENV } from '../utils/constants';
import HomeScreen from './HomeScreen'

const FavoritesScreen = () => {
  const [personajes, setPersonajes] = useState([])
  const [characters, setCharacters] = useState([])

  const fetchCharacters = async (url) => {
    if (characters.length > 200) {
      return;
    }
    try {
      const response = await axios.get(url);
      const newCharacters = response.data.results;
      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);

      if (response.data.info.next) {
        fetchCharacters(response.data.info.next);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters(ENV.API_URL_RM);
  }, []);

  // useFocusEffect(
  //   useCallback(() => {
  //     (async () => {
  //       const favoriteResponse = await getFavoriteApi()
  //       setPersonajes(favoriteResponse) // Actualiza el estado de personajes con los favoritos

  //       try {
  //         const response = await axios.get(ENV.API_URL_RM)
  //         setCharacters(response.data.results)
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     })()
  //   }, [])
  // )
  useFocusEffect(
    useCallback(() => {
      (async  () => {
        const favoriteResponse = await getFavoriteApi();
        setPersonajes(favoriteResponse);
      })()
    }, [])
  )  


  return (
    <HomeScreen characters={characters.filter((character) => personajes.includes(character.id))} />
  )
}

export default FavoritesScreen