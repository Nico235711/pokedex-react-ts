import { useState } from "react";
import { useEffect } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
const offsetHeight = 2000

export const usePokemon = () => {

  const [pokemons, setPokemons] = useState([])
  const [nextURL, setNextURL] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > offsetHeight) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setNextURL(data.next);

      const results = await Promise.all(data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();

        return {
          id: data.id,
          name: data.name,
          image: data.sprites.other["dream_world"].front_default || data.sprites.front_default
        };
      }));
      setPokemons(results);
    }
    getPokemon();
  }, []);

  const loadMore = async () => {
    const data = await fetch(nextURL);
    const res = await data.json();
    setNextURL(res.next);

    const results = await Promise.all(res.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();

      return {
        id: data.id,
        name: data.name,
        image: data.sprites.other["dream_world"].front_default || data.sprites.front_default
      };
    }));
    setPokemons([...pokemons, ...results]);
  }

  // const handleScrollUp = () => {
  //   window.scrollTo({
  //     top: 0, // Lleva al inicio de la página
  //     behavior: "smooth", // Desplazamiento suave
  //   });  }

  return {
    pokemons,
    loadMore,
    // handleScrollUp,
    
    isScrolled
  }
}