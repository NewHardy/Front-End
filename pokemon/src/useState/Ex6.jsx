import { useState, useEffect } from "react";

function Kakudobno() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemons(data.results));
  }, []);
  return (
    <>
      {pokemons.map((yes, hhtp) => (
        <p key={hhtp}>{yes.name}</p>
      ))}
    </>
  );
}

export default Kakudobno;
