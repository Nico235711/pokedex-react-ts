import { NavBar } from "./NavBar"

export const Header = () => {

  return (
    <header className="bg-gradient-to-r from-pink-500 to-violet-500 p-5">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <img src="/logo.png" alt="Logo de la pokedex" />
        <NavBar />
      </div>
    </header>
  )
}
