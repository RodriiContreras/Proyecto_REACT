import React from 'react'
import {useState,useEffect} from 'react'
import { Link,useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const [listaCervezas, setlistaCervezas] = useState([])
    const {Id} =useParams()
    const ObtenerItems =()=>{
      return itemsId
    }
const itemsId =new Promise((resuelto)=>{
  setTimeout(()=>{
if(Id === 'cervezas'){
  const url = 'https://api.punkapi.com/v2/beers'
resuelto(fetch('https://api.punkapi.com/v2/beers'))
}
},2000)
})
    useEffect(() => { 

   ObtenerItems()
 .then(data=>data.json())
 .then(resp=>resp.filter(cerveza=>cerveza.name==='Pilsen Lager'))
 .then(respuestaArray=>setlistaCervezas(respuestaArray))
},  [])


   return (
        <div>
        <div style={{width:'100%',position:'relative',textAlign:'center',backgroundColor:'black'}}><h2 style={{paddingTop:'1px',fontSize:'60px',color:'rgba(237,176,38,255)'}}>Bebidas</h2></div>
      <Link to='/item/bebidas/cervezas'>Cervezas</Link>
      <ItemDetail listaCervezas={listaCervezas}/>
        </div> 
    )
}

export default ItemDetailContainer
