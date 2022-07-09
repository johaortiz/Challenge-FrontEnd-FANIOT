import React from 'react'
import pikachu from '../../assets/pikachuloader.png'

export default function Loader({loader, image, text}) {
  return (
    <div >
        <img  src={pikachu} alt="Pikachú" />
        <h2  >LOADING...</h2>
    </div>
  )
}
