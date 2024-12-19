import { NavBar } from "./NavBar"

export const Header = ({ darkMode, setDarkMode, setIsChecked, isChecked }) => {

  const headerStyle =
    darkMode ? 'from-gray-800 via-gray-900 to-black' : 'from-pink-500 to-violet-500 p-5'

  return (
    <header className={`${headerStyle} bg-gradient-to-r p-5 sticky top-0 z-10`}>
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <img src="/logo.png" alt="Logo de la pokedex" />
        <NavBar 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setIsChecked={setIsChecked}
          isChecked={isChecked}
        />
      </div>
    </header>
  )
}
