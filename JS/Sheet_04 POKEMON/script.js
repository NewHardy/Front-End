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
  const limit = 20;
  let offset =
    parseInt(new URLSearchParams(window.location.search).get("offset")) || 0;

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  function createCard(foto, id, name, type, evo) {
    const pokeCard = document.createElement("div");
    const cardTop = document.createElement("div");
    const cardBottom = document.createElement("div");
    const image = document.createElement("img");
    const ID = document.createElement("p");
    const pokeName = document.createElement("h3");
    const pokeTypes = document.createElement("div");
    const grid = document.getElementById("grid");

    pokeCard.classList.add("card");
    cardTop.classList.add("card-top");
    cardBottom.classList.add("card-bottom");
    ID.classList.add("ID");
    pokeTypes.classList.add("type");

    image.src = foto;
    ID.textContent = "ID / " + id;
    pokeName.textContent = capitalize(name);

    grid.appendChild(pokeCard);
    pokeCard.appendChild(cardTop);
    pokeCard.appendChild(cardBottom);
    cardTop.appendChild(image);
    cardTop.appendChild(ID);
    cardBottom.appendChild(pokeName);
    cardBottom.appendChild(pokeTypes);
    type.forEach((element) => {
      const pokeType = document.createElement("span");
      pokeType.textContent = element.type.name.toUpperCase();
      pokeTypes.appendChild(pokeType);
    });

    if (evo != null) {
      const evolution = document.createElement("div");
      const evoFrom = document.createElement("p");
      const evoName = document.createElement("p");
      evolution.classList.add("evo");
      evoName.classList.add("evo-name");
      evoFrom.textContent = "Evolves from:";
      evoName.textContent = evo.name;
      cardBottom.appendChild(evolution);
      evolution.appendChild(evoFrom);
      evolution.appendChild(evoName);
    }
  }

  async function getinfo() {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const result = await response.json();
    const arrayUrls = result.results;

    const createdPokemon = await Promise.all(
      arrayUrls.map(async (pokemon) => {
        const pokemoInfo = await fetch(pokemon.url);
        const json = await pokemoInfo.json();
        const picture = json.sprites.front_default;
        const id = json.id;
        const types = json.types;
        const name = pokemon.name;
        const evoUrl = json.species.url;
        const evoResult = await fetch(evoUrl);
        const evoJson = await evoResult.json();
        const evo = evoJson.evolves_from_species;

        return {
          photo: picture,
          id: id,
          name: name,
          types: types,
          evo: evo,
        };
      })
    );
    return createdPokemon;
  }

  async function main() {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    const arrayUrls = await getinfo();
    arrayUrls.forEach((pokemon) =>
      createCard(
        pokemon.photo,
        pokemon.id,
        pokemon.name,
        pokemon.types,
        pokemon.evo
      )
    );
    createNavigationButtons();
  }

  function createNavigationButtons() {
    const grid = document.getElementById("grid");
    const buttonContainer = document.createElement("div");
    const prevButton = document.createElement("button");
    const nextButton = document.createElement("button");

    buttonContainer.classList.add("nav-buttons");
    prevButton.textContent = "Prev";
    nextButton.textContent = "Next";

    prevButton.classList.add("nav-button");
    nextButton.classList.add("nav-button");

    prevButton.addEventListener("click", () => {
      const newOffset = Math.max(offset - limit, 0);
      window.location.search = `?offset=${newOffset}`;
    });
    function randomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    }
    function changeColor() {
      div.style.backgroundColor = randomColor();
      div.style.color = randomColor();
    }
    prevButton.addEventListener("mouseover", "changeColor()");
    prevButton.addEventListener("mouseout", "changeColor()");
    nextButton.addEventListener("mouseover", "changeColor()");
    prevButton.addEventListener("mouseout", "chageColor()");
    nextButton.addEventListener("click", () => {
      const newOffset = offset + limit;
      window.location.search = `?offset=${newOffset}`;
    });

    buttonContainer.appendChild(prevButton);
    buttonContainer.appendChild(nextButton);
    grid.appendChild(buttonContainer);
  }

  main();
});
