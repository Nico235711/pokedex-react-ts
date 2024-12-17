import { useEffect } from "react";
import { useState } from "react"
import { PokemonDetails } from "./components/PokemonDetails";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"

export default function App() {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    (async () => {
      // hago una peticion a la url
      const fetchPokemon = await fetch(BASE_URL)
      const { results } = await fetchPokemon.json()
      // hago una peticion por cada pokemon
      const pokemonDetails = results.map(async (pokemon) => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        return {
          id: data.id,
          name: data.name,
          weight: data.weight,
          height: data.height,
          image: data.sprites.other["official-artwork"].front_default
        }
      })
      setPokemon(await Promise.all(pokemonDetails))
    })()
  }, []);

  return (
    <>
      <header className="p-5 bg-gradient-to-tr from-red-500 to-orange-500">
        <img src="/logo.png" alt="Logo de la Pokedex" />
      </header>

      <main className="container mx-auto my-5">
        <h1 className="text-4xl font-black text-center text-[#e5e7eb]">Pokedex</h1>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5">
          {pokemon.map((pokemon) => (
            <PokemonDetails key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </main>
    </>
  )
}
