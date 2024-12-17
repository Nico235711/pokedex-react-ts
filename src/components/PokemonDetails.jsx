import { formatId } from "../helpers/formatId"

export const PokemonDetails = ({ pokemon }) => {

  const { image, height, weight, name, id } = pokemon

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded shadow relative p-5">
      <span className="absolute top-5 left-5 text-gray-400 text-lg font-bold">{formatId(id)}</span>
      <img
        src={image}
        alt={name} 
        width={150}
      />
      <h2 className="text-2xl font-bold capitalize">{name}</h2>
    </div>
  )
}
