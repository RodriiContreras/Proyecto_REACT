import React from 'react'
import './Item.css'

function Item({finalizar,descripcion,Itemcount,ruta,imagen,nombreItem,precioItem}){
    return (
        <div id='item_cardcontainer' >
        <div>
            <img id='item_image' alt='imagen de hamburguesa' src={imagen}></img>
        </div>
        <h1 id='item_title'>{nombreItem}</h1>
        <p style={{color:'black',fontWeight:'bolder',fontFamily:'Raleway, sans-serif'}}>(incluyen Papas!)</p>
        <div>
         <p style={{color:'black',fontWeight:'bolder',fontFamily:'Raleway, sans-serif'}}>Precio: ${precioItem}</p>
        </div>
        <div>
        </div>
        <div id='descripcion'>
            <p style={{fontFamily:'Raleway, sans-serif',fontWeight:'bolder'}}>
               {descripcion}
            </p>
          <div>
           {ruta}
          </div>
          <div id='item_itemcount'>
              {Itemcount}
          </div>

              {finalizar}



        </div>
        </div>
    )
}

export default Item
