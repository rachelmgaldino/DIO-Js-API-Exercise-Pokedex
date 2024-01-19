const pokeapi = {}

pokeapi.getPokemons = (offset = 0, limit = 10) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  return fetch(url)
    .then((response) => response.json())
    .then((bodyJson) => bodyJson.results)
    .catch((error) => console.error('Error:', error))
}

// module exports this to be used in main.js
export default pokeapi