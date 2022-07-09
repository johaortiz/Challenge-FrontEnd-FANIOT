import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonById } from '../../utils/getsFunctions';
import styles from '../../styles/module/Details.module.css';
import Loader from './Loader';

export default function Details() {

  const [pokemon, setPokemon] = useState('');
  const { id } = useParams();

  useEffect(() => {
    getPokemonById(id).then((data) => {
      setPokemon(data)
    });
  }, [id]);

  const { sprite, hp, types, name, height, attack, defense, speed, weight } = pokemon;

  return (
    <div className={styles.detailsContainer}>
      {sprite && name && types ?
        <div>
          
          <img className={`${styles.columns} ${styles.image}`} src={sprite} alt={sprite} height={350} width={350} />

          <div className={`${styles.columns} ${styles.text}`}>
            <h2>{name.toUpperCase()}</h2>
            <p className={styles.text} ><strong>Hp: {hp}</strong></p>
            <p className={styles.text} ><strong>{types.map(type => type).join(' - ').toUpperCase()}</strong></p>
            <p className={styles.text} ><strong>Attack: {attack}</strong></p>
            <p className={styles.text} ><strong>Defense: {defense}</strong></p>
            <p className={styles.text} ><strong>Speed: {speed}</strong></p>
            <p className={styles.text} ><strong>Height: {height}</strong></p>
            <p className={styles.text} ><strong>Weight: {weight}</strong></p>
          </div>

        </div>

        : <Loader />}
    </div>
  )
}
