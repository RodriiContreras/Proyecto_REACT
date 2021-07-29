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
 .then(resp=>resp.slice(0,6))
 .then(respuestaArray=>setlistaCervezas(respuestaArray))

        
}   
setTimeout(obtenerDatos,3000)
       },  [])


   return (
        <div>
      <ItemDetail listaCervezas={listaCervezas}/>
        </div> 
    )
}

export default ItemDetailContainer
