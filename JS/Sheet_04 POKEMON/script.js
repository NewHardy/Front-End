/*document.addEventListener("DOMContentLoaded", () => {
  async function getPokemonsName() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((result) => {
        api = result;
        pokemons = api.results;

        pokemons.forEach((pokemon) => {
          console.log(pokemon.name);
        });
      });
  }
  getPokemonsName();
});
*/
document.addEventListener("DOMContentLoaded", async () => {
  function createCard(foto, id, name, type) {
    const pokeCard = document.createElement("div");
    const cardTop = document.createElement("div");
    const cardBottom = document.createElement("div");
    const image = document.createElement("img");
    const ID = document.createElement("p");
    const pokeName = document.createElement("h3");
    const pokeTypes = document.createElement("div");
    const grid = document.getElementById("grid");

    //evo

    pokeCard.classList.add("card");
    cardTop.classList.add("card-top");
    cardBottom.classList.add("card-bottom");
    ID.classList.add("ID");
    pokeTypes.classList.add("type");

    image.src = foto;
    ID.textContent = "ID / " + id;
    pokeName.textContent = name;

    grid.appendChild(pokeCard);
    pokeCard.appendChild(cardTop);
    pokeCard.appendChild(cardBottom);
    cardTop.appendChild(image);
    cardTop.appendChild(ID);
    cardBottom.appendChild(pokeName);
    cardBottom.appendChild(pokeTypes);
    type.forEach((element) => {
      const pokeType = document.createElement("span");
      pokeType.textContent = element.type.name;
      pokeTypes.appendChild(pokeType);
    });
  }

  // function getPokemonsUrls() {
  //   const arrayUrls = [];
  //   fetch("https://pokeapi.co/api/v2/pokemon")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       pokemons = result.results;

  //       pokemons.forEach((pokemon) => {
  //         arrayUrls.push(pokemon.url);
  //       });
  //     });
  // }

  async function getinfo() {
    const response = await fetch("http://pokeapi.co/api/v2/pokemon");
    const result = await response.json();
    const arrayUrls = result.results;

    const createdPokemon = await Promise.all(
      arrayUrls.map(async (pokemon) => {
        const pokemoInfo = await fetch(pokemon.arrayUrls);
        const json = await pokemoInfo.json();
        const picture = json.sprites.front_default;
        const id = json.id;
        const types = json.types;
        const name = pokemon.name;
        return {
          photo: picture,
          id: id,
          name: name,
          types: types,
        };
      })
    );
    return createdPokemon;
  }

  async function main() {
    const arrayUrls = await getinfo();
    arrayUrls.forEach((pokemon) =>
      createCard(pokemon.photo, pokemon.id, pokemon.name, pokemon.type)
    );
  }

  main();
});
