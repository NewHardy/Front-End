import React from "react";
import Ex1 from "./useState/Ex1";
import Ex2 from "./useState/Ex2";
import Ex3 from "./useState/Ex3";
import Ex4 from "./useState/Ex4";
import Ex5 from "./useState/Ex5";
import Ex6 from "./useState/Ex6";
import Ex7 from "./useState/Ex7";
import Ex8 from "./useState/Ex8";
import Ex9 from "./useState/Ex9";
import Ex10 from "./useState/Ex10";
import Ex11 from "./useState/Ex11";
import Ex12 from "./useState/Ex12";
import Ex13 from "./useState/Ex13";
import PokeGrid from "./pokemons/pokegrid";
import "./App.css";

const pokemon = [
  {
    id: 1,
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
    evo: null,
  },
  {
    id: 2,
    name: "yessaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
    types: [{ type: { name: "yes" } }, { type: { name: "perhaps" } }],
    evo: "yesisaur",
  },
];

function App() {
  return (
    <div className="App">
      <PokeGrid pokemons={pokemon} />
    </div>
  );
}

export default App;
