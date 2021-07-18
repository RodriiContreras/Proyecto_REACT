
import React from 'react'
import CartWidget from '../CartWidget'
import './NavBar.css'

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
            <a className="navbar_botones" style={{paddingRight:'50px',fontSize:'25px',paddingTop:'20px',textDecoration:'none',color:'black', fontFamily:'Raleway, sans-serif'}} href={''}>Productos</a>
            <a className="navbar_botones" style={{paddingRight:'50px',fontSize:'25px',paddingTop:'20px',textDecoration:'none',color:'black',fontFamily:'Raleway, sans-serif'}} href={''}>Sucursales</a>
            <a className="navbar_botones"style={{fontSize:'25px',paddingTop:'20px',textDecoration:'none',color:'black',fontFamily:'Raleway, sans-serif'}} href={'#'}>Contactanos</a>
        </div>
        <CartWidget/>

</nav>

    )
}

export default NavBar
