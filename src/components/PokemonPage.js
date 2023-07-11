import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon}) {

  const [pokemonName, setPokemonName] = useState("");

function handleSearch(e)
{
  setPokemonName(e.target.value)

};
const filterPokemon = pokemon.filter(pokemon => pokemon.name.includes(pokemonName));
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection pokemon={pokemon} filterPokemon={filterPokemon} />
    </Container>
  );
}

export default PokemonPage;
