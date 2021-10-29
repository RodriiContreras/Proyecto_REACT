import React from 'react'
import { useState,useContext } from 'react';
import {CartContext} from '../Context/CartContext'


function ItemCount({id,inicial,stock,carrito,nombre}) {
    const {setItemCart,itemCart} = useContext(CartContext)
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
        <div style={{width:'250px',textAlign:'center',height:'100px',backgroundColor:'rgb(227, 225, 225)',top:'5px',marginTop:'25px'}}>
            <p>{nombre}</p>

            <div className="Count_Button" style={{ display:'flex',justifyContent:'center',width:'270px',flexWrap:'wrap'}}>
          
           <button  style={{height:'35px'}} className="btn btn-dark" onClick={restar}>-</button>
          
            <p style={{width:'100px',textAlign:'center'}}>{cantidad}</p>

            <button style={{height:'35px'}} className="btn btn-dark" onClick={sumar}>+</button>
           </div> 
           <button onClick={()=>carrito(cantidad)} id={id} class="btn btn-warning" style={{display:'block',width:'200px',position:'relative',left:'30px'}}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
