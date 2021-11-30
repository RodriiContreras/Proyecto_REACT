import React from 'react'
import Item from './Item'
import './ItemList.css'
 function ItemList({listaItems}) {
    return(
        <div id='listcontainer_items'>
            <div id='flexcontainer_items'>
           {listaItems.map(items=><Item key={items.key} finalizar={items.finalizar} descripcion={items.descripcion} Itemcount={items.Itemcount} ruta={items.link} imagen={items.imagen} nombreItem={items.titulo} precioItem={items.precio} idItem={items.id}/>)}
           </div>
        </div>
    )
}


export default ItemList
