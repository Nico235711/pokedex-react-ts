import { Moon, Sun } from "./Icons"

export const NavBar = () => {

  return (
    <nav className="flex items-center">
      <Sun />
      <label className="cursor-pointer relative bg-slate-50 w-16 h-8 px-10 rounded-full">
        <input
          type="checkbox"
          className="peer"
          hidden
        />
        <span className="bg-slate-500 w-8 h-8 rounded-full absolute top-0 left-0 peer-checked:translate-x-[150%] transition-all"></span>
      </label>
      <Moon />
    </nav>
  )
}
