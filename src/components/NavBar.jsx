import { Moon, Sun } from "./Icons"

export const NavBar = ({ isDarkMode, setIsDarkMode, inputChecked, setInputChecked }) => {

  const handleClick = () => {
    setInputChecked(!inputChecked)
    setIsDarkMode(!isDarkMode)
  }
  const ballColor = isDarkMode ? "bg-[#444]" : "bg-[#FFD700]"
  const ballPosition = inputChecked ? "translate-x-[250%]" : "translate-x-0"

  return (
    <nav>
      <div className="flex items-center justify-center">
        <Sun />
        <label className="relative w-8 h-8 bg-white rounded cursor-pointer px-14">
          <input
            type="checkbox"
            name="darkeMode"
            hidden
            className="peer" 
            value={isDarkMode}
            onClick={handleClick}
          />
          <span className={`${ballColor} ${ballPosition} w-8 h-8 rounded-full absolute top-0 left-0 transition-all`}></span>
        </label>
        <Moon />
      </div>
    </nav>
  )
}
