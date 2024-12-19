import { formatId } from "../helpers/formatId"

export const PokemonDetails = ({ pokemon }) => {

  const { id, name, image } = pokemon

  return (
    <div className="bg-white p-5 rounded-md shadow-md flex justify-center items-center flex-col relative hover:scale-95 transition-all cursor-pointer">
      <div className="p-3">
        <p className="text-gray-600 absolute top-4 right-4">{formatId(id)}</p>
      </div>
      <img
        src={image}
        alt={name} 
        className="w-36 h-36 object-contain"
      />
      <h2 className="text-xl font-bold capitalize">{name}</h2>
    </div>
  )
}
