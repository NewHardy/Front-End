import { useEffect, useState } from "react";
import Pokegrid from "./pokegrid.jsx";
import "./pokedex.css";
import NavButtons from "./navButtons.jsx";
import SearchBar from "./searchBar.jsx";
import Loading from "./loading.jsx";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filter, setFilter] = useState("");
  const [offset, setOffset] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [size, setSize] = useState(0);
  //THE USE EFFECT
  // useEffect(() => {
  //   async function getEvo(speciesUrl) {
  //     const res = await fetch(speciesUrl);
  //     const speciesData = await res.json();
  //     return speciesData.evolves_from_species
  //       ? speciesData.evolves_from_species.name
  //       : "";
  //   }

  //   async function getInfo() {
  //     const response = await fetch(
  //       "https://pokeapi.co/api/v2/pokemon?offset=0&limit=106"
  //     );

  //     const data = await response.json();
  //     const pokemons = data.results;

  //     const finalData = await Promise.all(
  //       pokemons.map(async (pokemon) => {
  //         const res = await fetch(pokemon.url);
  //         const url = await res.json();

  //         const id = url.id;
  //         const image = url.sprites.front_default;
  //         const name = url.name;
  //         const types = url.types.map((t) => t.type.name);
  //         const evoFrom = url.species?.url ? await getEvo(url.species.url) : "";
  //         post({ id, image, name, types, evoFrom });
  //       })
  //     );

  //     return finalData;
  //   }
  //   function post(pokemon) {
  //     fetch("http://localhost:8080/pokemons", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(pokemon),
  //     });
  //   }

  //   getInfo();
  // }, []);

  useEffect(() => {
    setLoading(true);
    const getPokemons = async () => {
      const resul = await fetch(`http://localhost:8080/pokemons/${offset}/`);
      const info = await resul.json();
      setPokemons(info);
    };
    getPokemons();
    setLoading(false);
  }, [offset]);

  const filtredPokemons = pokemons.filter((p) => p.name.includes(filter));

  const getSize = async () => {
    const resul = await fetch(`http://localhost:8080/pokemons/size`);
    const size = await resul.json();
    console.log(size);
    setSize(size);
  };
  getSize();

  return (
    <>
      <SearchBar setFilter={setFilter} />
      {isLoading === true ? (
        <Loading />
      ) : (
        <Pokegrid pokemons={filtredPokemons} />
      )}
      <NavButtons offset={offset} size={size} setOffset={setOffset} />
    </>
  );
};

export default Pokedex;
