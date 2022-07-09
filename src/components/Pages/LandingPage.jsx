import React from 'react'
import Logo from '../../assets/logoPokemon.png'
import styles from '../../styles/module/Landing.module.css'
import { Button } from '../tools/Button'


export default function LandingPage() {
    return (
        <div className={styles.landing}>
            <img src={Logo} alt="Btn let's go" width="680" height="500" />
            <div>
            <Button link={'/home'} name={"Let's Go"}/>
            </div>
            
        </div>
    )
}


/*
<div className={styles.landing}>
            <img src={Logo} alt="Btn let's go" width="680" height="500" />
            <div>
            <Button />
            </div>
            
        </div>
*/