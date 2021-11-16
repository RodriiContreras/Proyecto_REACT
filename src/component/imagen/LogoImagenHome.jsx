import React from 'react'
import LogoImagen from './logo2.png'

function LogoImagenHome() {
    return (
        <div>
            <img style={{position:'absolute',width:'220px',top:'130px',left:'43%',zIndex:'4001'}} src={LogoImagen}></img>
        </div>
    )
}

export default LogoImagenHome
