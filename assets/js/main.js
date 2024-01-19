import pokeapi from './poke-api.js'

// the fetch (url) used to fetch data from the url, returns a promise, which is an object that represents the eventual completion or failure of an asynchronous operation. an asynchronous operation is one that allows the computer to “move on” to other tasks while waiting for the asynchronous operation to complete. therefore, a promise is a placeholder for a value that we do not yet have.

// function to convert the pokemon data to html
function pokemonToHtml(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">#001</span>
      <span class="name">${pokemon.name}</span>

      <div class="details">
        <ol class="types">
          <li class="type">Grass</li>
          <li class="type">Poison</li>
        </ol>
        <img src="http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt="${pokemon.name}" />
      </div>
  </li>
  `
}

const pokemonList = document.getElementById('pokemonList')

pokeapi.getPokemons().then((pokemons) => { // gets the results array and loops through it to get each pokemon object

  for (let i = 0; i < pokemons.length; i++) {
    const pokemon = pokemons[i];
    pokemonList.innerHTML += pokemonToHtml(pokemon);

  }

})
