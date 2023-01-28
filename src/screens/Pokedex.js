import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";

import { getPokemonApi, getPokemonDetailbyUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null)

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
      const response = await getPokemonApi(nextUrl);
      setNextUrl(response.next);
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


      setPokemons([...pokemons, ...pokemonsArray]);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={nextUrl} />
    </SafeAreaView>
  );
}
