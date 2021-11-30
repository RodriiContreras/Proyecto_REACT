import React from 'react'
import facebook from '../imagen/imagenesFooter/facebook.png'
import instagram from '../imagen/imagenesFooter/instagram.png'
import twitter from '../imagen/imagenesFooter/twitter.png'
import './Footer.css'

function Footer() {
    return (
        <div>
        <div id='footer_contenedor'>
        <div id='footer_contenedorLogos' style={{paddingTop:'20px'}}>
            <a  href='https://twitter.com/explore'><img className='footer_logos' src={twitter}></img></a>
            <a  href='https://www.facebook.com/'><img id='footer_facebooklogo'  src={facebook}></img></a>
            <a  href='https://www.instagram.com/rodriicontrerass_/?hl=es'><img className='footer_logos' src={instagram}></img></a>
        </div>
            <p id='footer_derechos' >© Rodrigo Contreras | 2021 Derechos reservados</p>
        </div>
        </div>
    )
}

export default Footer
