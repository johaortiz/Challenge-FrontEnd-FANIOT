import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonById } from '../utils/getsFunctions';
import styles from '../styles/Details.module.css';

export default function Details() {

    const [pokemon, setPokemon] = useState('');
    const { id } = useParams();

    useEffect(()=> {
        getPokemonById(id).then((data) => {
            setPokemon(data)
        });
    }, [id]);

    const { sprite, hp, types, name, height, attack, defense, speed, weight } = pokemon;

  return (
    <>
        {sprite && name && types ?
        <div className={styles.detailsContainer}>
          <img className={`${styles.columns} ${styles.image}`} src={sprite} alt={sprite} height={400} width={400} />
          <div className={`${styles.columns} ${styles.text}`}>
          <h2>{name.toUpperCase()}</h2>
          <p><strong>Hp: {hp}</strong></p>
          <p><strong>{types.map(type=>type).join(' - ').toUpperCase()}</strong></p>
          <p><strong>Attack: {attack}</strong></p>
          <p><strong>Defense: {defense}</strong></p>
          <p><strong>Speed: {speed}</strong></p>
          <p><strong>Height: {height}</strong></p>
          <p><strong>Weight: {weight}</strong></p>
          </div>
        </div>
      
      : <div>Loading</div>}
    </>
  )
}
