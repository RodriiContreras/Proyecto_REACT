import {NavLink} from 'react-router-dom'
import React from 'react'
import CartWidget from '../CartWidget'
import Logo from '../imagen/logo2.png'
import './NavBar.css'
function NavBar() {
    return (
<nav id='navbar_nav'>
        <div id='navbar_contenedorflex'>
            <NavLink  to='/'><img  id='navbar_logo' src={Logo}></img></NavLink>
            <NavLink className='navbar_secciones' to="/productos">Productos</NavLink>
            <NavLink className='navbar_secciones' to="/sucursales">Sucursales</NavLink>
        </div>
        <CartWidget/>

</nav>

    )
}

export default NavBar
