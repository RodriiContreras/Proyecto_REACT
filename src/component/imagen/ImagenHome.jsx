import React from 'react'
import imagen1 from '../imagen/HamburguesaPortada.jpg'
import LogoImagenHome from './LogoImagenHome'

function ImagenHome({greeting}) {
    return (
        <div>
             <img style={{width:'100%',height:'91.7vh',margin:'0'}} src={imagen1}/>
             <h1 style={{position:'absolute',top:'350px',left:'35%',fontSize:'85px',color:'rgba(237,176,38,255)',zIndex:'+4100',fontFamily:'Raleway, sans-serif'}}>{greeting}</h1>
             <LogoImagenHome/>
        </div>
    )
}

export default ImagenHome
