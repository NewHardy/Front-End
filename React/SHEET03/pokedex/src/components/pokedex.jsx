import { useEffect, useState } from "react";
import Pokegrid from "./pokegrid.jsx";
import "./pokedex.css";
import NavButtons from "./navButtons.jsx";
import SearchBar from "./searchBar.jsx";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState("");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const getPokemons = async () => {
      const resul = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
      );
      const info = await resul.json();
      const formatedPokemon = await Promise.all(
        info.results.map(async (result) => {
          const pokemonResult = await fetch(result.url);
          const pokemonJson = await pokemonResult.json();
          const pokeId = pokemonJson.id;
          const evoResult = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${pokeId}/`
          );
          const evoValue = await evoResult.json();
          return {
            image: pokemonJson.sprites.front_default,
            id: pokeId,
            name: pokemonJson.name,
            types: pokemonJson.types,
            evo: evoValue.evolves_from_species?.name || null,
          };
        })
      );
      setPokemons(formatedPokemon);
    };
    getPokemons();
  }, [offset]);

  const filtredPokemons = pokemons.filter((p) => p.name.includes(filter));

  return (
    <>
      <SearchBar setFilter={setFilter} />
      <Pokegrid pokemons={filtredPokemons} />
      <NavButtons offset={offset} setOffset={setOffset} />
    </>
  );
};

export default Pokedex;
