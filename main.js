import { searchPokemon, getPokemons } from "./js/api";

const $ = (selector) => document.querySelector(selector);

// Variables
const input = $("#input");
const btn = $("#btn");
const poke_container = $("#poke_container");

// AddEventListener
input.addEventListener("change", onChange);
btn.addEventListener("click", onChange);

// Escuchar el input
function onChange(event) {
  let idPokemon = event.target.value;
  searchPokemon(idPokemon);
}

// Crear card pokemon
export const pokeCard = (data) => {
  let card = document.createElement("div");
  let cardImg = document.createElement("img");
  cardImg.setAttribute("src", `${data.sprites.front_default}`);

  card.appendChild(cardImg);

  poke_container.appendChild(card);
};
