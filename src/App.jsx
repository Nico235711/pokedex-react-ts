import { Header } from "./components/Header";
import { PokemonDetails } from "./components/PokemonDetails";
import { usePokemon } from "./hooks/usePokemon";
import { ArrowUp } from "./components/Icons";
import InfiniteScroll from "react-infinite-scroll-component";

export default function App() {

  const { pokemons, loadMore, handleScrollUp, isScrolled, seeMore } = usePokemon();

  return (
    <>
      <Header />
      <main className="max-w-2xl lg:max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl text-center my-8">Más de 800 pokemons</h1>
        <InfiniteScroll
          dataLength={pokemons.length}
          next={loadMore}
          hasMore={seeMore}
          loader={<h4 className="text-center font-bold text-lg mt-8">Cargando...</h4>}
          endMessage={<h4 className="text-center font-bold text-lg mt-8">No hay mas pokemons</h4>}
        >
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
        </InfiniteScroll>
      </main>
      <button
        type="button"
        className={`${isScrolled ? "translate-y-0" : "translate-y-52"} fixed bottom-5 right-5 bg-red-500 rounded-full text-white p-4 transition-all`}
        onClick={handleScrollUp}
      ><ArrowUp /></button>
    </>
  )
}
