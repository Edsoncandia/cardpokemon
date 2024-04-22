document.addEventListener("DOMContentLoaded", function () {
  const generateBtn = document.getElementById("generate-btn");
  const cardContainer = document.getElementById("card-container");

  generateBtn.addEventListener("click", generateCard);

  async function generateCard() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();
    const randomPokemon =
      data.results[Math.floor(Math.random() * data.results.length)];
    const pokemonResponse = await fetch(randomPokemon.url);
    const pokemonData = await pokemonResponse.json();

    const card = createCard(pokemonData);
    cardContainer.appendChild(card);
  }

  function createCard(pokemon) {
    const card = document.createElement("div");
    card.classList.add("card");

    const name = document.createElement("h2");
    name.textContent = pokemon.name;

    const image = document.createElement("img");
    image.src = pokemon.sprites.front_default;
    image.alt = pokemon.name;

    card.appendChild(name);
    card.appendChild(image);

    return card;
  }
});
