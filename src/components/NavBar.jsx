import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logopokeball.png'

import SearchBar from './SearchBar'
//BOOSTRAP


export default function NavBar() {
    return (<>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to='/home'><img src={logo} alt="Pokeball Logo" height={40} width={40} /></Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto' >
                    <li className='nav-item active' >
                        <Link to='/001' className='nav-link sr-only' >About</Link>
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </div>
            
            <SearchBar />
        </nav>
    </>
    )
}
