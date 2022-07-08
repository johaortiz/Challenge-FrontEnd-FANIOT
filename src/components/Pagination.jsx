import React, { useState } from 'react'

export default function Pagination( {pokemons, setPokemonCurrent} ) {

    const cards = 13;
    const [currentPag, setCurrentPag] = useState(0);


    const next = () => {
        const totalPoke = pokemons.length
        const next = currentPag + 1
        const index = next * cards
        if (index > totalPoke) return;
        setPokemonCurrent([...pokemons].splice(index, cards))
        setCurrentPag(next)
    };

    const prev = () => {
        const prev = currentPag - 1
        if (prev < 0) return;
        const index = prev * cards
        setPokemonCurrent([...pokemons].splice(index, cards))
        setCurrentPag(prev)
    };

  return (
    <div>
        <button onClick={()=>prev()}>Prev</button>
        <label>{currentPag + 1}</label>
        <button onClick={()=>next()}>Next</button>
    </div>
  )
}
