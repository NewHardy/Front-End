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
    async function getEvo(speciesUrl) {
      const res = await fetch(speciesUrl);
      const speciesData = await res.json();
      return speciesData.evolves_from_species
        ? speciesData.evolves_from_species.name
        : "";
    }

    async function getInfo() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");

      const data = await response.json();
      const pokemons = data.results;

      const finalData = await Promise.all(
        pokemons.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const url = await res.json();

          const id = url.id;
          const image = url.sprites.front_default;
          const name = url.name;
          const types = url.types.map((t) => t.type.name);
          const evoFrom = url.species?.url ? await getEvo(url.species.url) : "";
          post({ id, image, name, types, evoFrom });
        })
      );

      return finalData;
    }
    function post(pokemon) {
      fetch("http://localhost:8080", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pokemon),
      });
    }

    getInfo();
  }, []);

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
