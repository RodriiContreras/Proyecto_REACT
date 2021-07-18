import React from 'react'
import imagen1 from '../imagen/Imagen.jpg'
import LogoImagenHome from './LogoImagenHome'

function ImagenHome() {
    return (
        <div>
             <img style={{width:'99.14vw',height:'95vh',margin:'0'}} src={imagen1}/>
             <LogoImagenHome/>
        </div>
    )
}

export default ImagenHome
