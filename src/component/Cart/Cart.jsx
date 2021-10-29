import React from 'react'
import {useContext} from 'react'
import { CartContext } from '../Context/CartContext'

function Cart() {
    const {itemCart}  = useContext(CartContext)
    console.log(itemCart)
    return (
        <div>
            <h1>CARRITO</h1>
            {itemCart.length !== 0 && itemCart.map(item => <p>{item.titulo}</p>)}
              {itemCart.length === 0 && <p>no hay producto :S</p>}
        </div>
    )
}

export default Cart
