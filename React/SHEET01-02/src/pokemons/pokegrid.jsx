import Card from "./pokecard";

const PokeGrid = ({ pokemons }) => {
  return (
    <div className="grid">
      {pokemons.map((pokemon) => (
        <Card
          key={pokemon.id}
          image={pokemon.image}
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          evo={pokemon.evo}
        />
      ))}
    </div>
  );
};

export default PokeGrid;
