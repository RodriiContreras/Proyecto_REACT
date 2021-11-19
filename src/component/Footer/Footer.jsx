import React from 'react'
import facebook from '../imagen/imagenesFooter/facebook.png'
import instagram from '../imagen/imagenesFooter/instagram.png'
import twitter from '../imagen/imagenesFooter/twitter.png'

function Footer() {
    return (
        <div>
        <div style={{width:'100%',backgroundColor:'black',marginTop:'100px',height:'80px',display:'flex',justifyContent:'center'}}>
        <div style={{paddingTop:'20px'}}>
            <a href='https://twitter.com/explore'><img style={{width:'40px',borderRadius:'50%'}} src={twitter}></img></a>
            <a href='https://www.facebook.com/'><img style={{width:'40px',marginLeft:'15px',borderRadius:'50%'}} src={facebook}></img></a>
            <a href='https://www.instagram.com/rodriicontrerass_/?hl=es'><img style={{width:'40px',marginLeft:'15px',borderRadius:'50%'}} src={instagram}></img></a>
        </div>
            <p style={{color:'white',paddingTop:'20px',fontSize:'25px',paddingLeft:'20px',fontFamily:'Raleway, sans-serif'}}>© Rodrigo Contreras | 2021 Derechos reservados</p>
        </div>
        </div>
    )
}

export default Footer
