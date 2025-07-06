import { useState, useEffect } from "react";

function getPokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);

  const pokemoInfo = fetch(pokemons.url);
  const json = pokemoInfo.json();

  const evoUrl = json.species.url;
  const evoResult = fetch(evoUrl);
  const evoJson = evoResult.json();
  const evo = evoJson.evolves_from_species;
  return (
    <div>
      <grid>
        <div className="card">
          <div className="cardTop">
            <img src={json.sprites.front_default}></img>
            <h2 className="ID">ID:{json.id}</h2>
          </div>
          <div className="cardBottom">
            <h2 className="Name">{pokemons.name}</h2>
            <ul className="Types">
              <li className="Type">{json.types}</li>
            </ul>
            <h3>Evolves from: {evo}</h3>
          </div>
        </div>
      </grid>
    </div>
  );
}

export default getPokemons;
