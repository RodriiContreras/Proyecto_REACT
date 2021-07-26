import React from 'react'
import Item from './Item'

 function ItemList({listaItems}) {
    return(
        <div>
           {listaItems.map(items=><Item nombreItem={items.titulo} precioItem={items.precio} idItem={items.id}/>)}
        </div>
    )
}


export default ItemList
