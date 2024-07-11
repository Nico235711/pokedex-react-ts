function showPokemon(poke) {
  
  // me traigo los nombres de los tipos
  let types = poke.types.map(type => (
    `<p class="${type.type.name} type">${type.type.name}</p>`
  ))
  types = types.join("")

  let pokeId = poke.id < 10 ? "00" + poke.id : poke.id < 100 ?"0" + poke.id : poke.id

  const div = document.createElement("div")
  div.classList.add("pokemon")
  div.innerHTML = `<p class="pokemon-id-back">#${poke.id}</p>
                    <div class="pokemon-image">
                      <img src=${poke.sprites.other.home.front_default}
                        alt="imagen de ${poke.name}">
                    </div>
                    <div class="pokemon-details">
                      <div class="name-container">
                        <p class="pokemon-id">#${pokeId}</p>
                        <h2 class="pokemon-name">${poke.name}</h2>
                      </div>
                      <div class="pokemon-types">
                        ${types}
                      </div>
                      <div class="pokemon-stats">
                        <p class="stat">${poke.height}m</p>
                        <p class="stat">${poke.weight}kg</p>
                      </div>
                    </div>
                  </div>`
  pokemonList.appendChild(div)
}
