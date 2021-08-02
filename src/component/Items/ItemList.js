import React from 'react'
import Item from './Item'

 function ItemList({listaItems}) {
    return(
        <div style={{display:'flex'}}>
            <div style={{display:'flex',textDecoration:'none',width:'1100px',position:'relative',left:'20%',marginTop:'30px',flexWrap:'wrap',justifyContent:'space-evenly'}}>
           {listaItems.map(items=><Item imagen={items.imagen} nombreItem={items.titulo} precioItem={items.precio} idItem={items.id}/>)}
           </div>
        </div>
    )
}


export default ItemList
