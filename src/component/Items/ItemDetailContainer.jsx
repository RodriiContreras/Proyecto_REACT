import React from 'react'
import {useState,useEffect} from 'react'

function ItemDetailContainer() {
    const [listaCervezas, setlistaCervezas] = useState([])
    useEffect(() => { 
        fetch('https://api.punkapi.com/v2/beers')
    .then(data=>data)
    .then(res =>setlistaCervezas(res))
    console.log(listaCervezas)
       },  [])
    return (
        <div>
            {listaCervezas.map()}
        </div>
    )
}

export default ItemDetailContainer
