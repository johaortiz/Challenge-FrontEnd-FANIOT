import React, { useContext, useState } from 'react'
import { AppContext } from './Provider/search';
import filter from '../components/Home'

export default function SearchBar() {

    const [pokemonFilter, setPokemonFilter] = useContext(AppContext);
    const [search, setSearch] = useState('');

    const handleChange = (e)=>{
        e.preventDefault();
        setSearch(e.target.value);
        setPokemonFilter({...pokemonFilter, pokemon: e.target.value});
    }
    return (
    <div>
        <input 
        className="form-control inputBuscar"
        value={search}
        placeholder="Search Pokemon"
        onChange={handleChange}
        />
    </div>
  )
}


