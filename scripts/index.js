const pokemonList = document.querySelector("#pokemon-list")
const buttons = document.querySelectorAll(".btn-header")
let pokeAPI = "https://pokeapi.co/api/v2/pokemon/"

// recorro los 151 pokemon
for (let index = 1; index <= 151; index++) {
  fetch(pokeAPI + index)
    .then(response => response.json())
    .then(data => showPokemon(data))
}

buttons.forEach(button => button.addEventListener("click", event => {
  const buttonId = event.currentTarget.id
  pokemonList.innerHTML = ""
  for (let index = 1; index <= 151; index++) {
    fetch(pokeAPI + index)
      .then(response => response.json())
      .then(data => {
        if (buttonId == "ver-todos") {
          showPokemon(data)
          return
        }
        const pokemonType = data.types.map(type => type.type.name)
        if (pokemonType.some(type => type === buttonId)) {
          showPokemon(data)
        }
      })
  }
}))