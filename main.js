import { searchPokemon, getPokemons } from "./js/api";

const $ = (selector) => document.querySelector(selector);

// Variables
const input = $("#input");
// const btn = $("#btn");
const poke_container = $("#poke_container");

// AddEventListener
input.addEventListener("change", onChange);
// btn.addEventListener("click", onChange);

// Escuchar el input
function onChange(event) {
  if (event.target.value === "") {
    console.log("No has escrito nada en el input");
  } else {
    let idPokemon = event.target.value;
    searchPokemon(idPokemon);
  }
}

// Crear card pokemon
export const pokeCard = (data) => {
  // Crear el div contenedor de la card
  let card = document.createElement("div");
  card.classList.add("card");
  // Crear contenedor de imagen
  let cardContent = document.createElement("div");
  cardContent.classList.add("card-content_img");
  // Crear tag img con su src
  let cardImg = document.createElement("img");
  cardImg.setAttribute("src", `${data.sprites.front_default}`);
  // Div para Nombre y id
  let cardContentId = document.createElement("div");
  cardContentId.classList.add("card-content_id");
  // name y id
  let name = document.createElement("h3");
  name.textContent = `${data.name}`;
  let id = document.createElement("p");
  id.textContent = `#${data.id}`;
  // Div para tipos del pokemon
  let cardContentType = document.createElement("div");
  cardContentType.classList.add("card-content_type");
  // Tipos
  let tipo = document.createElement("p");
  tipo.classList.add("type");
  tipo.textContent = `${data.types[0].type.name}`;

  // Anidacion de items
  cardContentType.appendChild(tipo);
  cardContentId.appendChild(name);
  cardContentId.appendChild(id);
  cardContent.appendChild(cardImg);
  card.appendChild(cardContentType);
  card.appendChild(cardContentId);
  card.appendChild(cardContent);

  poke_container.appendChild(card);
};
