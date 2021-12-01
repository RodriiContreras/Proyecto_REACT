import React from 'react'
import Item from './Item'
import './ItemList.css'
 function ItemList({listaItems,paramsId,loading,idalmacenador}) {
    return(
        <div>
    {!loading&& 
        <div id='listcontainer_items'>

            <div id='flexcontainer_items'
             style={
         paramsId === 'Carne' ? {height:'1000px'} 
        : paramsId === 'Vegano' || idalmacenador?{height:'763.5px'}
        :{height:'1600px'}}>


           {listaItems.map(items=>
           <Item key={items.key}
            finalizar={items.finalizar}
             descripcion={items.descripcion} 
             Itemcount={items.Itemcount}
              ruta={items.link}
               imagen={items.imagen} 
               nombreItem={items.titulo} 
               precioItem={items.precio}
               idItem={items.id}/>)}
           </div>

     </div>
    }
     </div>

    )
}


export default ItemList
