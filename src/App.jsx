import { PokemonDetails } from "./components/PokemonDetails";
import { NavBar } from "./components/NavBar";
import { usePokemon } from "./hooks/usePokemon";

// me crea un arreglo con todas las letras del abecedario
const alphabeticLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

export default function App() {

  const { filteredPokemon, isDarkMode, setIsDarkMode, inputChecked, setInputChecked, setLetter, letter } = usePokemon()
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
        <div>
          <h2 className={`${isDarkMode ? "text-white" : ""}  text-2xl font-bold mb-5`}>Búsqueda por letra</h2>
          {
            alphabeticLetters.map(letter => (
              <button
                key={letter}
                className="m-1 px-4 py-2 rounded bg-slate-600 text-white hover:scale-110 transition-all"
                onClick={() => setLetter(letter)}
              >
                {letter}
              </button>
            ))
          }
        </div>
        <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredPokemon.map((pokemon) => (
            <PokemonDetails key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </main>
    </>
  )
}
