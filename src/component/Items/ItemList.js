import React from 'react'
import Item from './Item'
import wallpaper from '../imagen/wallpaper.jpg'
 function ItemList({listaItems}) {
    return(
        <div style={{backgroundImage:`url(${wallpaper})`}}>
            <div style={{display:'flex',textDecoration:'none',width:'1200px',position:'relative',left:'17%',flexWrap:'wrap',justifyContent:'space-evenly'}}>
           {listaItems.map(items=><Item finalizar={items.finalizar} descripcion={items.descripcion} Itemcount={items.Itemcount} ruta={items.link} imagen={items.imagen} nombreItem={items.titulo} precioItem={items.precio} idItem={items.id}/>)}
           </div>
        </div>
    )
}


export default ItemList
