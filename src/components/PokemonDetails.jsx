
export const PokemonDetails = ({ pokemon }) => {

  const { image, height, weight, name } = pokemon

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded shadow relative">
      <span className="absolute top-0 right-0 text-gray-600">#{pokemon.id}</span>
      <img
        src={image}
        alt={name} 
        width={150}
      />
      <h2 className="text-2xl font-bold">{name}</h2>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
    </div>
  )
}
