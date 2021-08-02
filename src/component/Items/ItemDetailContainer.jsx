import React from 'react'
import {useState,useEffect} from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [listaCervezas, setlistaCervezas] = useState([])
    useEffect(() => { 

       async function obtenerDatos(){
 const url = 'https://api.punkapi.com/v2/beers'
 fetch('https://api.punkapi.com/v2/beers')
 .then(data=>data.json())
 .then(resp=>resp.filter(cerveza=>cerveza.name==='Pilsen Lager'))
 .then(respuestaArray=>setlistaCervezas(respuestaArray))

}   
setTimeout(obtenerDatos,5000)
},  [])


   return (
        <div>
        <div style={{width:'100%',position:'relative',top:'5px',textAlign:'center',backgroundColor:'rgba(237,176,38,255)'}}><h2 style={{paddingTop:'1px',fontSize:'60px',color:'BLACK'}}>Bebidas</h2></div>
      <ItemDetail listaCervezas={listaCervezas}/>
        </div> 
    )
}

export default ItemDetailContainer
