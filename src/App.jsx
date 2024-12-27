import { Header } from "./components/Header";
import { PokemonDetails } from "./components/PokemonDetails";
import { usePokemon } from "./hooks/usePokemon";
import { ArrowUp } from "./components/Icons";

export default function App() {
  
  const { pokemons, loadMore, handleScrollUp, isScrolled } = usePokemon();  

  return (
    <>
      <Header />
      <main className="max-w-2xl lg:max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl text-center my-8">Más de 800 pokemons</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            pokemons.map((pokemon) => (
              <PokemonDetails
                key={pokemon.id}
                pokemon={pokemon}
              />
            ))
          }
        </div>
        <button
          type="button"
          className="bg-red-500 text-white py-3 px-10 text-center rounded-full mt-8 hover:bg-red-600 transition-all font-bold uppercase"
          onClick={loadMore}
        >Ver mas</button>
      </main>
      <a href="#root"
        type="button"
        className={`${isScrolled ? "translate-y-0" : "translate-y-52"} fixed bottom-5 right-5 bg-red-500 rounded-full text-white p-4 transition-all`}
        onClick={handleScrollUp}
      ><ArrowUp /></a>
    </>
  )
}
