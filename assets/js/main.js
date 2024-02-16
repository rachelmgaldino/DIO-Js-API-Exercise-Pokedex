import pokeapi from './poke-api.js'

// the fetch (url) used to fetch data from the url, returns a promise, which is an object that represents the eventual completion or failure of an asynchronous operation. an asynchronous operation is one that allows the computer to “move on” to other tasks while waiting for the asynchronous operation to complete. therefore, a promise is a placeholder for a value that we do not yet have.

// function to convert the pokemon data to html
function pokeTypeToList(pokeType) {
  return pokeType.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function pokemonToList(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#${pokemon.order}</span>
      <span class="name">${pokemon.name}</span>

      <div class="details">
        <ol class="types">
          ${pokeTypeToList(pokemon.types).join('')}
        </ol>
        <img src="${pokemon.sprites.other.dream_world.front_default}"
          alt="${pokemon.name}" />
      </div>
  </li>
  `
}

const pokemonList = document.getElementById('pokemonList')

pokeapi.getPokemons().then((pokemons = []) => { // gets the results array and loops through it to get each pokemon object

  // map is a method that creates a new array with the results of calling a provided function on every element in the calling array
  pokemonList.innerHTML = pokemons.map(pokemonToList).join('')

})
