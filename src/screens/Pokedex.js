import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { getPokemonApi } from "../api/pokemon";


export default function Pokedex() {
  useEffect(() => {
    console.log("Hola useeffect");

    //Anonima function
    (async() => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      console.log('loadPokemons');
      const response = await getPokemonApi();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text> Pokedex screen </Text>
    </View>
  );
}
