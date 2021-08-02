import React from 'react'
import { useState } from 'react';


function ItemCount({inicial,stock,carrito,nombre}) {
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
        <div style={{width:'300px',textAlign:'center',height:'150px',backgroundColor:'rgb(227, 225, 225)',position:'relative',left:'90px',top:'5px',marginLeft:'25px',marginTop:'25px'}}>
            <p>{nombre}</p>

            <div className="Count_Button" style={{ display:'flex',justifyContent:'center',width:'300px',flexWrap:'wrap'}}>
          
           <button  style={{height:'35px'}} className="btn btn-dark" onClick={restar}>-</button>
          
            <p style={{width:'100px',textAlign:'center'}}>{cantidad}</p>

            <button style={{height:'35px'}} className="btn btn-dark" onClick={sumar}>+</button>
           </div> 
           <button onClick={()=>carrito(cantidad)} class="btn btn-warning" style={{display:'block',width:'200px',position:'relative',left:'60px'}}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
