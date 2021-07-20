import React from 'react'
import { useState } from 'react';


function ItemCount() {
    let [state,setState] =useState(0)
function sumar (){
    if (state < 10){
       setState(state + 1) 
    }
    else if (useState >10){
     setState(state)
    }   

}
function restar (){
    if (state > 0){
        setState(state - 1) 
     }
     else if (useState < 0){
      setState(state)
     }   
}
    return (
        <div style={{width:'300px',textAlign:'center',backgroundColor:'rgb(227, 225, 225)'}}>
            <p>Hamburguesa Burger House </p>
           
            <div className="Count_Button" style={{ display:'flex',justifyContent:'center',width:'300px',flexWrap:'wrap'}}>
          
           <button  style={{height:'35px'}} className="btn btn-dark" onClick={restar}>-</button>
          
            <p id='cantidad' style={{width:'100px',textAlign:'center'}}>{state}</p>

            <button style={{height:'35px'}} className="btn btn-dark" onClick={sumar}>+</button>
           </div> 
           <button onClick={()=> console.log("La cantidad seleccionada es de " + state)} class="btn btn-warning" style={{display:'block',width:'200px',position:'relative',left:'60px'}}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
