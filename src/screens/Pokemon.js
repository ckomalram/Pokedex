import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";

export default function Pokemon(props) {
  const { navigation, route } = props;
  const { params } = route;

  // console.log(params);
  // console.log(route);
  // console.log(route.params.id);

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        // console.log(response);
        setPokemon(response);
      } catch (error) {
        console.error(error);
        navigation.goBack();
      }
    })()
  }, [params])

  if (!pokemon) return null;
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other['official-artwork'].front_default}
        type={pokemon.types[0].type.name}
      />
    </ScrollView>
  )
}