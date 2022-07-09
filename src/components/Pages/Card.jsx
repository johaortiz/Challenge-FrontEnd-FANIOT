import React from 'react'
import styles from '../../styles/module/Card.module.css';
import { NavLink } from 'react-router-dom'

export default function Card({ pokemon }) {
  return (

    <NavLink to={`/pokemon/${pokemon.id}`} >
      <li className={styles.card}>
        <div className={styles.card} >
        <img
          className={styles.cardImage}
          src={pokemon.sprite} alt={pokemon.name}
          height={200}
          width={200}
          />
          </div>
        <div className={styles.conteinerTexts}>
          <div className={styles.textName} >{pokemon.name.toUpperCase()}</div>
          <div className={styles.textType} >{pokemon.types.join(' - ').toUpperCase()}</div>
        </div>
      </li>
    </NavLink>
  )
}


//