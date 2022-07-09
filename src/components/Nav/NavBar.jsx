import { React, useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logopokeball.png'
import SearchBar from './SearchBar'
import '../../styles/css/NavBar.css'

export default function NavBar() {
    
    const [showLinks, setShowLinks]= useState(false);

    let random = Math.random().toString(36).substring(5);
    
    return (<>
        <div className='navBar'>
        <Link to='/'><img src={logo} alt="Pokeball Logo"  className='logo' /></Link>
            <div className='leftSide'>
                <div className='link' id={ showLinks ? "hidden" : "another" }>
                    <Link className='aA' to='/home'>Home</Link>
                    <Link className='aA' to='/create' >Create</Link>
                    <Link className='aA' to={`/${random}`}>?Err0r¿</Link>
                </div>
                <button id='btnNav' onClick={()=>setShowLinks(!showLinks)}><ion-icon name="reorder-three-outline"></ion-icon></button>
            </div>
            <div className='rightSide'><SearchBar /></div>
        </div>

    </>
    )
}



/*




<nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to='/home'><img src={logo} alt="Pokeball Logo" height={40} width={40} /></Link>
        </nav>





*/