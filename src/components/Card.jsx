import React from 'react'
import styles from '../styles/Card.module.css';
import { NavLink } from 'react-router-dom'

export default function Card({pokemon}) {
  return (
    <li className={styles.card}>
        <NavLink to={`/pokemon/${pokemon.id}`} >
            <img 
            src={pokemon.sprite} alt={pokemon.name} 
            height={200}
            width={200}
            />
            <div className={styles.textName} >{pokemon.name.toUpperCase()}</div>
            <div className={styles.textType} >{pokemon.types.join(' - ').toUpperCase()}</div>
        </NavLink>
    </li>
  )
}
