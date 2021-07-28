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
        // const respuesta = await fetch(url)
        //  const json = await respuesta.json()
        //  const arrayLimitado = await json.slice(0,6)
        
}   
setTimeout(obtenerDatos,3000)
       },  [])


//  const resultadofinal = await json.slice(0,limite)


   return (
        <div>
      <ItemDetail listaCervezas={listaCervezas}/>
        </div> 
    )
}

export default ItemDetailContainer
