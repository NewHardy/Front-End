import React, { useState, useEffect } from "react";

function ListaPokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
    <div>
      <h2>Lista de Pokémon</h2>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPokemons;
