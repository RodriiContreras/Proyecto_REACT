import React from 'react'
import { useState } from 'react';
import './ItemCount.css'


function ItemCount({id,inicial,stock,onAdd,nombre}) {
    let [cantidad,setCantidad] =useState(inicial)

     const sumar =()=>{
  if(cantidad < stock){
     setCantidad (cantidad + 1)
  }
     }
     const restar =()=>{
         if(cantidad > inicial){
             setCantidad (cantidad - 1 )
          }  
     }



    return (
        <div id='itemcount_container' >
            <p>{nombre}</p>
            <div  id='contador_container'>
            <button class="btn btn-warning" style={{width:'30px',height:'30px'}} onClick={restar}>-</button>
            <p>{cantidad}</p>
            <button class="btn btn-warning" style={{width:'30px',height:'30px'}} onClick={sumar}>+</button>
           </div> 
           <button class='contador_boton' onClick={()=>onAdd(cantidad)} id={id}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
