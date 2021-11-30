import React from 'react'
import Footer from '../Footer/Footer'
import SucursalesOpacidad from './SucursalesOpacidad.jsx'
import './Sucursales.css'

function Sucursales() {
    return (
        <div>
            <SucursalesOpacidad/>
            <h1 id='h1' >Nuestras Sucursales</h1>
        <div id='sucursales_background' >
             <div  id='sucursales_contenedor'> 
            
             <div className='sucursales_mapas' style={{textAlign:'center'}}>
           <iframe className='mapas' src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d820.5270757653378!2d-58.67291753844495!3d-34.65196768848382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e3!4m3!3m2!1d-34.6517614!2d-58.671533499999995!4m5!1s0x95bcbf67b544521b%3A0xdc39f2808283c28c!2sGervasio%20de%20Posadas%20924%2C%20B1714FFT%20Ituzaing%C3%B3%2C%20Provincia%20de%20Buenos%20Aires!3m2!1d-34.6518306!2d-58.6715143!5e0!3m2!1ses-419!2sar!4v1638227459267!5m2!1ses-419!2sar" 
           style={{
               border:'0',
               allowfullscreen:"",
               loading:"lazy",
               paddingRight:'30px'
               }}></iframe>
          <p style={{color:'white',fontFamily:'Raleway, sans-serif'}}>MORENO</p>
            </div>

            <div className='sucursales_mapas' style={{textAlign:'center'}}>
            <iframe className='mapas' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.0111785644003!2d-58.62326381130473!3d-34.65442062071521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7eac7717a59%3A0xa9b5a3b001c33eb7!2sBaum%20Mor%C3%B3n!5e0!3m2!1ses-419!2sar!4v1636134878361!5m2!1ses-419!2sar"
            style={
                {border:'0',
                allowfullscreen:"",
                loading:'lazy',
                paddingRight:'30px'
                }} ></iframe>
                <p style={{color:'white',fontFamily:'Raleway, sans-serif'}}>CASTELAR</p>
           
            </div>

            <div className='sucursales_mapas' style={{textAlign:'center'}}>
            <iframe  className='mapas' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.0111785644003!2d-58.62326381130473!3d-34.65442062071521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7eac7717a59%3A0xa9b5a3b001c33eb7!2sBaum%20Mor%C3%B3n!5e0!3m2!1ses-419!2sar!4v1636134878361!5m2!1ses-419!2sar"
            style={
                {border:'0',
                allowfullscreen:"",
                loading:'lazy',
                paddingRight:'30px'
                }}></iframe>
                  <p style={{color:'white',fontFamily:'Raleway, sans-serif'}}>MORÓN</p>
            </div>

            <div className='sucursales_mapas' style={{textAlign:'center'}}>
            <iframe className='mapas' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.0111785644003!2d-58.62326381130473!3d-34.65442062071521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7eac7717a59%3A0xa9b5a3b001c33eb7!2sBaum%20Mor%C3%B3n!5e0!3m2!1ses-419!2sar!4v1636134878361!5m2!1ses-419!2sar"
            style={
                {border:'0',
                allowfullscreen:"",
                loading:'lazy',
                paddingRight:'30px'
                }} ></iframe>
             <p style={{color:'white',fontFamily:'Raleway, sans-serif'}}>HAEDO</p>
            </div>

             </div> 
        </div>
        <div id='footer'><Footer/></div>
        </div>
    )
}

export default Sucursales
