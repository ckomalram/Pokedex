import { View, Text , FlatList, StyleSheet} from 'react-native'
import React from 'react'

import PokemonCard from "../components/PokemonCard";

export default function PokemonList(props) {
    // console.log(props);
    const {pokemons} = props;
  return (
    <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id) }
        renderItem={({item})=>  <PokemonCard pokemon={item} />}
        contentContainerStyle={
                styles.flatListContentContainer
        }
    />
  )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    }
});