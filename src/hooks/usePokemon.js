import { useEffect } from "react"
import { useState } from "react"

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"

const darkModeLS = () => {
  const darkModeLocalStorage = localStorage.getItem("darkMode")
  return darkModeLocalStorage ? JSON.parse(darkModeLocalStorage) : false
}

const inputCheckedLS = () => {
  const inputCheckedLocalStorage = localStorage.getItem("darkMode")
  return inputCheckedLocalStorage ? JSON.parse(inputCheckedLocalStorage) : false
}

export const usePokemon = () => {

  const [pokemon, setPokemon] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(darkModeLS)
  const [inputChecked, setInputChecked] = useState(inputCheckedLS)

  useEffect(() => {
    (async () => {
      // hago una peticion a la url
      const fetchPokemon = await fetch(BASE_URL)
      const { results } = await fetchPokemon.json()
      // hago una peticion por cada pokemon
      const pokemonDetails = results.map(async (pokemon) => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        // console.log(data);

        return {
          id: data.id,
          name: data.name,
          weight: data.weight,
          height: data.height,
          image: data.sprites.other["dream_world"].front_default
        }
      })
      setPokemon(await Promise.all(pokemonDetails))
    })()
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    }
    else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode)
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem("inputDarkModeChecked", inputChecked)
  }, [inputChecked]);

  return {
    pokemon,
    isDarkMode,
    setIsDarkMode,
    inputChecked,
    setInputChecked
  }
}