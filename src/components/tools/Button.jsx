import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../styles/module/Landing.module.css'

export const Button = ({link, name}) => {
    return (
        <div>
            <Link to={link} >
                <button className={styles.btn}>{name}</button>
            </Link>
        </div>
    )
};

/*
import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../styles/module/Landing.module.css'

export const Button = ({  }) => {
    return (
        <div>
            <Link to='/' >
                <button className={styles.btn}>Let's Go</button>
            </Link>
        </div>
    )
};

*/