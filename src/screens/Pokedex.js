import React, { useEffect, useState } from "react";
import {  View } from "react-native";

import { getPokemonApi, getPokemonDetailbyUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  // console.log('pok state--->', pokemons);

  useEffect(() => {
    // console.log("Hola useeffect");

    //Anonima function
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      console.log('loadPokemons');
      const response = await getPokemonApi();
      const pokemonsArray = [];

      for await (const pokemon of response.results) {
        // console.log(pokemon);
        const pokemonDetail = await getPokemonDetailbyUrlApi(pokemon.url);
        // console.log(pokemonDetail);
        pokemonsArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other['official-artwork'].front_default
        })
      }


      setPokemons([...pokemons ,...pokemonsArray]);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <PokemonList pokemons={pokemons} />
    </View>
  );
}
