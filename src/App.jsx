import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { PokemonDetails } from "./components/PokemonDetails";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

export default function App() {

  const [pokemon, setPokemon] = useState([])
  const [nextURL, setNextURL] = useState("")

  useEffect(() => {
    (async () => {
      const response = await fetch(API_URL)
      const { next, results } = await response.json()
      setNextURL(next)
      // console.log({ results });
      const pokemonDetails = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url)
        const data = await response.json()
        return {
          id: data.id,
          name: data.name,
          image: data.sprites.other.dream_world.front_default || data.sprites.front_default
        }
      })

      setPokemon(await Promise.all(pokemonDetails))

    })()
  }, []);

  const seeMorePokemons = async () => {
    const response = await fetch(nextURL)
    const { next, results } = await response.json()
    setNextURL(next)
    const pokemonDetails = results.map(async (pokemon) => {
      const response = await fetch(pokemon.url)
      const data = await response.json()
      return {
        id: data.id,
        name: data.name,
        image: data.sprites.other.dream_world.front_default || data.sprites.front_default
      }
    })

    setPokemon([...pokemon, ...await Promise.all(pokemonDetails)])
  }

  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto">
        <h1 className="text-4xl text-center my-8">Más de 800 pokemon para ver</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          {pokemon.map((pokemon) => (
            <PokemonDetails key={pokemon.id} pokemon={pokemon} />
          ))}
          <button
            type="button"
            className="col-span-1 md:col-span-2 lg:col-span-3 text-white bg-gradient-to-r from-pink-500 to-violet-500 p-5 rounded-md shadow-md hover:from-pink-600 hover:to-violet-600 transition-all"
          onClick={seeMorePokemons}
          >Mostrar Más</button>
        </div>
      </main>
    </>
  )
}
