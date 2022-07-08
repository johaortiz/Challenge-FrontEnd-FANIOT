import React from 'react'
import pikachu from '../../images/pikachuloader.png'

export default function Loader() {
  return (
    <div>
        <img src={pikachu} alt="Pikachú" />
        <h2>LOADING...</h2>
    </div>
  )
}
