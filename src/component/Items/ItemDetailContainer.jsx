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
            <div style={{display:'flex', flexWrap:'wrap'}}>
{listaCervezas.map(cervezas=>(<div style={{paddingLeft:'30px'}}><p style={{fontWeight:'bolder'}}>{cervezas.name}
<p>{cervezas.id}</p>
</p></div>))}
      </div>
        </div>
    )
}

export default ItemDetailContainer
