import React from 'react'
import {useContext} from 'react'
import { CartContext } from '../Context/CartContext'

function Cart() {
    const {itemCart}  = useContext(CartContext)
    console.log(itemCart)
    return (
        <div>
            <h1> Su Carrito</h1>
            {itemCart.length !== 0 && itemCart.map(item =>
<div 
    style={
    {paddingTop:'5px',
    marginTop:'5px',
    textAlign:'center',
    height:'450px',
    width:'255px',
    boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',borderRadius:'2%',backgroundColor:'#f0e9e9'}}>
<img alt='imagen de hamburguesas' style={{width:'220px',height:'150px'}} src={item.item.imagen} />

<h1 style={{fontSize:'20px'}}>{item.item.titulo}</h1>
<p>{item.item.descripcion}</p>
<p> al precio de : ${item.item.precio}</p>
<p>Cantidad : {item.quantity}</p>
</div>)}
              {itemCart.length === 0 && <p>no hay producto :S</p>}
        </div>
    )
}
// ``

export default Cart
