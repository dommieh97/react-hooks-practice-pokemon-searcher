import React,{useState} from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ filterPokemon}) {


  const pokemonList = filterPokemon.map((pokemon) => 
  <PokemonCard key={pokemon.id} pokemon={pokemon} />);
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
