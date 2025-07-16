import React from "react";
import PokeGrid from "./components/pokegrid";
import Pokedex from "./components/pokedex";
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
  {
    id: 3,
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
    evo: null,
  },
];

function App() {
  return (
    <div className="App">
      <Pokedex />
    </div>
  );
}

export default App;
