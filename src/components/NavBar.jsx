import { Moon, Sun } from "./Icons"

export const NavBar = ({ darkMode, setDarkMode, setIsChecked, isChecked }) => {

  const handleClick = () => {
    setDarkMode(!darkMode)
    setIsChecked(!isChecked)
  }

  return (
    <nav className="flex items-center">
      <Sun />
      <label className="cursor-pointer relative bg-slate-50 w-16 h-8 px-10 rounded-full">
        <input
          type="checkbox"
          className="peer"
          value={darkMode}
          onChange={handleClick}
          hidden
        />
        <span className={`${isChecked ? 'translate-x-[150%]' : ''}  bg-slate-500 w-8 h-8 rounded-full absolute top-0 left-0 transition-all`}></span>
      </label>
      <Moon />
    </nav>
  )
}
