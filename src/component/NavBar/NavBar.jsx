import {NavLink} from 'react-router-dom'
import React from 'react'
import CartWidget from '../CartWidget'
import './NavBar.css'
import Logo from '../imagen/logo2.png'

function NavBar() {
    return (
<nav style={{height:'80px'}}>
        <div style={{
          display:'flex',
          width:'99.14vw',
          backgroundColor:'rgba(237,176,38,255)',
          height:'80px',
          margin:0,
          justifyContent:'center' 
          }}>
            <NavLink to='/'><img style={{position:'absolute',width:'90px',left:'40px'}} src={Logo}></img></NavLink>
            <NavLink style={{paddingRight:'50px',fontSize:'25px',paddingTop:'20px',textDecoration:'none',color:'black', fontFamily:'Raleway, sans-serif'}} to="/productos">Productos</NavLink>
            {/* <NavLink style={{paddingRight:'50px',fontSize:'25px',paddingTop:'20px',textDecoration:'none',color:'black', fontFamily:'Raleway, sans-serif'}} to="/productos/Vegano">Productos Veganos</NavLink> */}
            <NavLink style={{paddingRight:'50px',fontSize:'25px',paddingTop:'20px',textDecoration:'none',color:'black', fontFamily:'Raleway, sans-serif'}} to="/sucursales">Sucursales</NavLink>
            <NavLink style={{paddingRight:'50px',fontSize:'25px',paddingTop:'20px',textDecoration:'none',color:'black', fontFamily:'Raleway, sans-serif'}} to="/contactanos">Contactanos</NavLink>
        </div>
        <CartWidget/>

</nav>

    )
}

export default NavBar
