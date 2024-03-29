import { FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'

import PokemonCard from "../components/PokemonCard";

export default function PokemonList(props) {
  // console.log(props);
  // console.log(Platform.OS);
  const { pokemons, loadPokemons, isNext } = props;
  const loadMore = () => {
    console.log('Cargando mas pokemons');
    loadPokemons();
  }
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={
        styles.flatListContentContainer
      }
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.2}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )

      }
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android"? 30 : 0
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android"? 90 : 60
  }
});