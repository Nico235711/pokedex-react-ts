import { PokemonDetails } from "./components/PokemonDetails";
import { NavBar } from "./components/NavBar";
import { usePokemon } from "./hooks/usePokemon";

export default function App() {

  const { pokemon, isDarkMode, setIsDarkMode, inputChecked, setInputChecked } = usePokemon()
  const darkModeStyle = isDarkMode ? "from-[#141E30] to-[#243B55]" : "from-red-500 to-orange-500 "

  return (
    <>
      <header className={`${darkModeStyle} flex items-center justify-between p-5 bg-gradient-to-tr shadow-lg sticky top-0 z-50`}>
        <img src="/logo.png" alt="Logo de la Pokedex" />
        <NavBar
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          inputChecked={inputChecked}
          setInputChecked={setInputChecked}
        />
      </header>

      <main className="container mx-auto my-5">
        <h1 className={`${isDarkMode ? "text-white" : ""} text-4xl font-black text-center`}>Pokedex</h1>
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3">
          {pokemon.map((pokemon) => (
            <PokemonDetails key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </main>
    </>
  )
}
