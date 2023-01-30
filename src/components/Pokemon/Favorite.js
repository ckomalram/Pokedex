import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { addPokemonFavoriteApi , getPokemonsFavoriteApi } from "../../api/Favorite";

export default function Favorite(props) {
    const { id} = props;

    const addFavorite = async () => {
        console.log('Agregando favorito');
        await addPokemonFavoriteApi(id);
      };
    return (
        <Ionicons
            name='heart-outline'
            color='#fff'
            size={20}
            onPress={ addFavorite}
        />
    )
}