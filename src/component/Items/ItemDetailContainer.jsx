import React from 'react'
import {useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [listaCervezas, setlistaCervezas] = useState([])
    const {Id} =useParams()

const itemsId =new Promise((resuelto)=>{
  setTimeout(()=>{
if(Id === 'cervezas'){
  const url = 'https://api.punkapi.com/v2/beers'
resuelto(fetch('https://api.punkapi.com/v2/beers'))
}
},2000)
})
console.log(Id)
    useEffect(() => { 
    const ObtenerItems =()=>{
      return itemsId
    }
   ObtenerItems()
 .then(data=>data.json())
 .then(resp=>resp.filter(cerveza=>cerveza.name==='Pilsen Lager'))
 .then(respuestaArray=>setlistaCervezas(respuestaArray))
},  [])


   return (
        <div>
      <ItemDetail listaCervezas={listaCervezas}/>
        </div> 
    )
}

export default ItemDetailContainer
