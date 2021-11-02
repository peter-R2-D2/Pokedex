import "css/main.css";
import { pokeCard } from "../main";

// Obtener pokemon API
export const searchPokemon = (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        pokeCard(data);
      });
  } catch (err) {
    console.log(err);
  }
};

// Obtener pokemones
const fetchpokemon = async () => {
  for (let i = 1; i <= 151; i++) {
    await getPokemons(i);
  }
};

// Obtener un limite de pokemones
export const getPokemons = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  pokeCard(pokemon);
};

fetchpokemon();
