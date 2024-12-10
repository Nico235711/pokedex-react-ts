const pokemonList = document.getElementById("pokemonList");

const allButton = document.querySelectorAll(".buttons button");

const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon";

// obtener los pokemones
async function getPokemonData(url) {
  const response = await fetch(url);

  return response.json();
}

// obtener los tipos de un pokemon
function getTypes(types) {
  const pokemonTypes = types.map(type => `<span class='type ${type.type.name}'>${type.type.name}</span>`).join(" ");
  return pokemonTypes
}

// mostrar los pokemones
async function showPokemon() {
  for (let i = 1; i <= 150; i++) {
    const pokemon = await getPokemonData(`${POKEAPI_URL}/${i}`);

    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon");

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, "0");

    const pokemonInnerHTML = `
      <div class="imgContainer">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
      </div>
      <div class="info">
        <span class="numberId">#${id}</span>
        <h3 class="name">${name}</h3>
        <p class="type">${getTypes(pokemon.types)}</p>
        <p class="stats">
          <span>HP: ${pokemon.stats[0].base_stat}</span>
          <span>Attack: ${pokemon.stats[1].base_stat}</span>
          <span>Defense: ${pokemon.stats[2].base_stat}</span>
          <span>Speed: ${pokemon.stats[5].base_stat}</span>
        </p>
        <div class="details">
          <p class="height">Height: ${pokemon.height} cm</p>
          <p class="weight">Weight: ${pokemon.weight} cm</p>
        </div>
      </div>
    `;

    pokemonCard.innerHTML = pokemonInnerHTML;

    pokemonList.appendChild(pokemonCard);
  }
}
showPokemon()