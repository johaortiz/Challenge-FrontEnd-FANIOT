import axios from "axios";

const webApi = 'https://pokeapi.co/api/v2/pokemon'

export async function getAllPokemons(){
    try {
        let pokemonsGeneral = await axios.get(`${webApi}?offset=0&limit=200`);
        let pokemonsDetailsUrl = pokemonsGeneral.data.results.map(pokemon=>axios.get(pokemon.url));
        let pokemonsDetails = await axios.all(pokemonsDetailsUrl);
        let dataPokemonsDetails = pokemonsDetails.map(pokemon=>pokemon.data);
        let finalDetailsPokemons = dataPokemonsDetails.map(pokemon=> pokemonFiltrerCreator(pokemon));
        return finalDetailsPokemons;
    } catch (error) {
        return error;
    };
};





export async function getPokemonById(id){
    try {
        let searchPokemonInApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let pokemonEncontrado = pokemonFiltrerCreator(searchPokemonInApi.data);
        return pokemonEncontrado;
    } catch (error) {
        return error;
    }
}


const pokemonFiltrerCreator = (pokemon)=>{
    const filterPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        sprite: pokemon.sprites.other.dream_world.front_default,
        types: pokemon.types.map(poke=>poke.type.name)
    };
    return filterPokemon;
};



