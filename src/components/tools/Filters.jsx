import React, { useEffect, useState } from 'react'
import styles from '../../styles/module/Home.module.css';

export const Filters = ( { pokemonCurrent, setPokemonCurrent} ) => {

    const [event, setEvent] = useState('');


    const selected = (event)=>{
        const value = event.target.value;
        switch (value) {
            case 'asc':
                orderAlphabet(value);
                setEvent(value);
                break;
            case 'dec':
                orderAlphabet(value);
                setEvent(value);
                break
            case 'id':
                orderAlphabet(value);
                setEvent(value);
                break;
            default:
                break;
        };
    };

    const orderAlphabet = (order)=>{
        if(order==='asc'){
            setPokemonCurrent([...pokemonCurrent].sort((pokemon0,pokemon1)=>{
                if(pokemon0.name > pokemon1.name) return 1;
                else if(pokemon0.name < pokemon1.name) return -1;
                else return 0;
            }))
        } else if(order==='dec'){
            setPokemonCurrent([...pokemonCurrent].sort((pokemon0,pokemon1)=>{
                if(pokemon0.name < pokemon1.name) return 1;
                else if(pokemon0.name > pokemon1.name) return -1;
                else return 0;
            }))
        }else {
            setPokemonCurrent([...pokemonCurrent].sort((pokemon0,pokemon1)=>{
                if(pokemon0.id < pokemon1.id) return -1;
                else if(pokemon0.id > pokemon1.id) return 1;
                else return 0;
            }))
        }
    };

    return (
        <div className={styles.box} > 
            <select value={event} onChange={selected} name="Filters" >
                <option value="id">Id</option>
                <option value="asc">A-Z</option>
                <option value="dec">Z-A</option>
            </select>
            <span className={styles.customArrorw} ></span>
        </div>
    )
}

