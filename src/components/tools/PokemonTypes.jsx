import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getTypes, type0 } from '../../store/actions';
import styles from '../../styles/module/CreatePokemon.module.css'

export default function CreatePokemonTypes({ }) {

    let dispatch = useDispatch();

    let types = useSelector(state => state.types);
    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch]);



    return (
        <>
            <div className={styles.type}>
                <select required id='type0'>
                    {
                        types?.map(type => {
                            return <option key={type} name={type} id={type}>{type.toUpperCase()}</option>
                        })
                    }
                </select>
            </div>
            <div className={styles.type} >
                <select required id='type1'>
                    {
                        types?.map(type => {
                            return <option key={type} name={type} id={type}>{type.toUpperCase()}</option>
                        })
                    }
                </select>
            </div>
        </>
    )
}
