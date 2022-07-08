import React, { useContext, useEffect, useState } from 'react'
import { getAllPokemons } from '../utils/getsFunctions';
import Card from './Card';
import styles from '../styles/Home.module.css';
import { Filters } from './Filters'
import { AppContext } from './Provider/search';
import Pagination from './Pagination';
import Loader from './Provider/Loader';



export default function Home() {

    //SEARCH
    const [pokemons, setPokemons] = useState([]);
    const [pokemonFilter, setPokemonFilter] = useContext(AppContext);

    useEffect(() => {
        getAllPokemons().then((data) => {
            setPokemons(data)
        });
    }, []);

    let searchResults = [];
    if (pokemonFilter.pokemon) {
        pokemons.forEach((pokemon) => {
            if (pokemon.name.toLowerCase().includes(pokemonFilter.pokemon.toLowerCase())) {
                searchResults.push(pokemon);
            }
        });
    };

    //FILTER
    const cards = 13;
    const [pokemonCurrent, setPokemonCurrent] = useState(pokemons);

    useEffect(() => {
        setPokemonCurrent([...pokemons].splice(0, cards))
    }, [pokemons]);



    return (
        <div>
            <Filters pokemonCurrent={pokemonCurrent} setPokemonCurrent={setPokemonCurrent} />
            <Pagination pokemons={pokemons} setPokemonCurrent={setPokemonCurrent} />
            <ul className={styles.cardsGrid}>
                {(searchResults.length > 0)
                    ? (searchResults.map(pokemon => { return <Card key={pokemon.id} pokemon={pokemon} /> }))
                    : (pokemonCurrent.length > 0 || pokemonCurrent.name !== undefined)
                        ? pokemonCurrent?.map(pokemon => { return <Card key={pokemon.id} pokemon={pokemon} /> })
                        : <Loader />}
            </ul>
        </div>
    );
};
