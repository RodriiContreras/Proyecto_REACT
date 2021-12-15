import React from 'react'
import './Item.css'

function Item({finalizar,paramsId,descripcion,Itemcount,ruta,imagen,nombreItem,precioItem}){
    return (
     <div>
         { paramsId === undefined ? 
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
        :
        paramsId === 'Vegano'?
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
        : paramsId === 'Carne'?
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
        :
        <div id='item_cardcontainerDetallado' >
    <div id='item_contenedordatos'>
        <div>
            <img id='item_imageDetallado' alt='imagen de hamburguesa' src={imagen}></img>
        </div>
    
        <h1 id='item_titleDetallado'>{nombreItem}</h1>
        <p style={{color:'black',fontSize:'30px',fontFamily:'Raleway, sans-serif'}}>(incluyen Papas!)</p>
        <div>
         <p style={{color:'black',fontSize:'30px',fontFamily:'Raleway, sans-serif'}}>Precio: ${precioItem}</p>
        </div>
       </div>
        <div>
        </div>
        <div id='descripcionDetallada'>
            <p style={{fontFamily:'Raleway, sans-serif'}}>
               {descripcion}
            </p>
            </div>  
          <div>
           {ruta}
          </div>
          <div id='item_itemcountDetallado'>
              {Itemcount}
          </div>
    
              {finalizar}
        </div>
        }

        </div>
    )
}

export default Item
