import React from 'react'
import styles from '../../styles/module/NotFound.module.css'

export default function Error404() {
    return (
        <div className={styles.notFound} >
            <img src="https://steamuserimages-a.akamaihd.net/ugc/919165899908013085/95B72CE6418B2A230EA46F1B39D1BAEC9465399D/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
                alt="https://www.nintenderos.com/wp-content/uploads/2021/04/pikachu-pokemon.jpg"
                height={450}
                width={450}
            />
            <span className={styles.textNotFound} >{`Error 404: Not Found :(`}</span>
        </div>
    )
}
