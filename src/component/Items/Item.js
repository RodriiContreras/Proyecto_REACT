import React from 'react'
import './Item.css'

function Item({finalizar,descripcion,Itemcount,ruta,imagen,nombreItem,precioItem,paramsId,idalmacenador}){
    return (
        <div id='item_cardcontainer' >
        <div>
            <img style={{width:'220px',height:'150px'}} src={imagen}></img>
        </div>
        <h1 style={{fontSize:'20px',color:'black',fontFamily:'Raleway, sans-serif'}}>{nombreItem}</h1>
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
          <div style={{fontFamily:'Raleway, sans-serif'}}>
              {finalizar}
          </div>


        </div>
        </div>
    )
}

export default Item
