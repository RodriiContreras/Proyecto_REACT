import React from 'react'
import { useState,useContext } from 'react';


function ItemCount({id,inicial,stock,carrito,nombre}) {
    let [cantidad,setCantidad] =useState(inicial)

//      const sumar =()=>{
//   if(cantidad < stock){
//      setCantidad (cantidad + 1)
//   }
//      }
//      const restar =()=>{
//          if(cantidad > inicial){
//              setCantidad (cantidad - 1 )
//           }  
//      }



    return (
        <div style={{width:'250px',textAlign:'center',height:'0px',top:'5px',marginTop:'25px'}}>
            <p>{nombre}</p>

            <div className="Count_Button" style={{ display:'flex',justifyContent:'center',width:'270px',flexWrap:'wrap'}}>
            <p> Cantidad : {cantidad}</p>
           </div> 
           <button onClick={()=>carrito(cantidad)} id={id} class="btn btn-warning" style={{display:'block',width:'200px',position:'relative',left:'30px',backgroundColor:'yellow',fontFamily:'Raleway, sans-serif'}}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
