const pokeapi = {}

pokeapi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json())
}

// a js method is a property containing a function definition
pokeapi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((bodyJson) => bodyJson.results)
    .then((pokemons) => pokemons.map(pokeapi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonDetails) => pokemonDetails)
}


// module exports this to be used in main.js
export default pokeapi