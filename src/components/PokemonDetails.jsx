import { formatId } from "../helpers"

export const PokemonDetails = ({ pokemon }) => {

  const { id, name, image } = pokemon

  return (
    <div className="p-4 bg-white rounded-md flex flex-col items-center justify-center relative">
      <p className="text-xl tegt-gray-300 font-bold absolute top-2 right-5">{formatId(id)}</p>
      <img
        className="w-40"
        src={image}
        alt={name} 
      />
      <h2>{name}</h2>
    </div>
  )
}
