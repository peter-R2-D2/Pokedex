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

// Obtener un limite de pokemones
export const getPokemons = (limit = 151, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0${offset}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  } catch (e) {
    console.log(e);
  }
};
