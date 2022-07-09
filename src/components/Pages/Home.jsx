import React, { useContext, useEffect, useState } from 'react'
import { getAllPokemons } from '../../utils/getsFunctions';
import Card from './Card';
import styles from '../../styles/module/Home.module.css';
import { Filters } from '../tools/Filters'
import { AppContext } from '../../Providers';
//import Pagination from '../tools/Pagination';
import logo from '../../assets/logoPokemon.png'
import Loader from './Loader';



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
        setPokemonCurrent(pokemons)
    }, [pokemons]);



    return (
        <div className={styles.bigBox} >
            <div>
            <img src={logo} alt="" className={styles.logoMenu} />
            <Filters className={styles.select} pokemonCurrent={pokemonCurrent} setPokemonCurrent={setPokemonCurrent}>Pokedex</Filters>
            </div>
            <ul className={styles.cardsGrid}>
                {(searchResults.length > 0)
                    ? (searchResults.map(pokemon => { return <Card key={pokemon.id} pokemon={pokemon} /> }))
                    : (pokemonCurrent.length > 0 || pokemonCurrent.name !== undefined)
                        ? pokemonCurrent?.map(pokemon => { return <Card key={pokemon.id} pokemon={pokemon} /> })
                        : <Loader styles={styles} />}
            </ul>
        </div>
    );
};


// <Pagination pokemons={pokemons} setPokemonCurrent={setPokemonCurrent} />