import React from 'react'
import {useState,useEffect} from 'react'

function ItemDetailContainer() {
    const [listaCervezas, setlistaCervezas] = useState([])
    useEffect(() => { 
        function obtenerDatos(){
        fetch('https://api.punkapi.com/v2/beers')
    .then(data=>data.json())
    .then(res =>setlistaCervezas(res))
}
obtenerDatos()
       },  [])
       console.log(listaCervezas)
    return (
        <div>
{listaCervezas.map(cervezas=>(<div style={{display:'flex'}}><p>{cervezas.name}
<p>{cervezas.description}</p>
</p></div>))}
        </div>
    )
}

export default ItemDetailContainer
