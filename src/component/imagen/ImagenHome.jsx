import React from 'react'
import imagen1 from './HamburguesaPortada.jpg'
import LogoImagenHome from './LogoImagenHome'
import './ImagenHome.css'

function ImagenHome({greeting}) {
    return (
        <div>
             <img  id='home_imagen'/>
             <h1 id='home_h1'>{greeting}</h1>
             <LogoImagenHome/>
        </div>
    )
}

export default ImagenHome
