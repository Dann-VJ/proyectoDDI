import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ENV } from '../utils/constants';
import HomeScreen from '../screen/HomeScreen';

export default function RickandMortyAPI() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(ENV.API_URL_RM)
                setCharacters(response.data.results)
                console.log('response', response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])

    return (
        <HomeScreen characters={characters} />
    )
}
