import React from 'react'
import { useState } from 'react';


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
        <div style={{width:'250px',textAlign:'center',height:'0px',top:'5px',marginTop:'25px'}}>
            <p>{nombre}</p>
            <div className="Count_Button" style={{ display:'flex',justifyContent:'space-evenly',width:'270px',flexWrap:'wrap'}}>
            <button class="btn btn-warning" style={{width:'30px',height:'30px'}} onClick={restar}>-</button>
            <p>{cantidad}</p>
            <button class="btn btn-warning" style={{width:'30px',height:'30px'}} onClick={sumar}>+</button>
           </div> 
           <button onClick={()=>onAdd(cantidad)} id={id} class="btn btn-warning" style={{display:'block',width:'200px',position:'relative',left:'30px',backgroundColor:'yellow',fontFamily:'Raleway, sans-serif'}}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
