import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';


import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";

export default function Pokemon(props) {
  const { navigation, route } = props;
  const { params } = route;

  // console.log(params);
  // console.log(route);
  // console.log(route.params.id);

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => <Ionicons 
      name="arrow-back-outline" 
      size={30} color="#fff"
       style={{ marginLeft: 15 }} 
       onPress={navigation.goBack}
       />
    })
  }, [navigation, params])

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
      <Type
        types={pokemon.types}
      />
      <Stats
        stats={pokemon.stats}
      />
    </ScrollView>
  )
}