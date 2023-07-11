import React,{useEffect, useState} from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const API = "http://localhost:3001/pokemon"
  const [pokemonState, setPokemonState] = useState([])
  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(setPokemonState)
  },[])
  return (
    <div className="App">
      <PokemonPage pokemon={pokemonState} />
    </div>
  );
}

export default App;
