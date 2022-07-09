import React, { useState } from 'react'
import CreatePokemonTypes from '../tools/PokemonTypes'
import { useDispatch } from 'react-redux';
import { postPokemon } from '../../store/actions';
import styles from '../../styles/module/CreatePokemon.module.css'


export default function CreatePokemon() {

    const dispatch = useDispatch();
    const [pokemon, setPokemon] = useState({
        name: '',
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        weight: '',
        height: '',
        type0: '',
        type1: '',
    });

    function handleChange(e) {
        e.preventDefault();
        setPokemon((poke) => ({ ...poke, [e.target.name]: e.target.value }))
    }


    function addType(type0, type1) {
        let nameOfType0 = type0.selectedOptions[0].text;
        let nameOfType1 = type1.selectedOptions[0].text;

        setPokemon((poke) => ({ ...poke, type0: type0.value }))
        setPokemon((poke) => ({ ...poke, type1: type1.value }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(postPokemon(pokemon));
        setPokemon({
            name: '',
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            weight: '',
            height: '',
            type0: '',
            type1: ''
        })
    }


    return (
        <div className={styles.form}>
            <div className={styles.card} >
                <h2 className={styles.createU} >Create your Pokemon</h2>
                <div className={styles.divForm}>
                    <form className={styles.formNowYes} onSubmit={e => handleSubmit(e) }>
                        <input className={styles.inputs} type="text" name="name" id="" placeholder='Name' required onChange={(e) => handleChange(e)} />                 <br />
                        <input className={styles.inputs} type="text" name="hp" id="" placeholder='Health' required onChange={(e) => handleChange(e)} />                 <br />
                        <input className={styles.inputs} type="text" name="attack" id="" placeholder='Attack' required onChange={(e) => handleChange(e)} />             <br />
                        <input className={styles.inputs} type="text" name="defense" id="" placeholder='Defense' required onChange={(e) => handleChange(e)} />           <br />
                        <input className={styles.inputs} type="text" name="speed" id="" placeholder='Speed' required onChange={(e) => handleChange(e)} />               <br />
                        <input className={styles.inputs} type="text" name="height" id="" placeholder='Height' required onChange={(e) => handleChange(e)} />             <br />
                        <input className={styles.inputs} type="text" name="weight" id="" placeholder='Weight' required onChange={(e) => handleChange(e)} />             <br />
                        <input className={styles.inputs} type="text" name="sprite" id="" placeholder='Image(URL)' required onChange={(e) => handleChange(e)} />         <br />
                        <CreatePokemonTypes />
                        <input type="button" value='Charge Types' onClick={() => { addType(document.getElementById('type0'), document.getElementById('type1')) }} />
                        <input type='submit' value='Create' />
                    </form>
                </div>
            </div>
        </div>
    )
}
