import React from 'react'
import {useContext} from 'react'
import { CartContext } from '../Context/CartContext'
import {Table} from 'react-bootstrap'

function Cart() {
    const {itemCart}  = useContext(CartContext)
    console.log(itemCart)
    return (
        <div>
   <div style={{width:'100%',textAlign:'center',backgroundColor:'black'}}><h1 style={{color:'white'}}> Su Carrito</h1></div>

 {itemCart.length !== 0 && itemCart.map(item => 
  <Table striped bordered hover>
                <tbody> 
                    
    <tr>
      <td>{item.item.titulo}</td>
      <td> {item.quantity || item.newQuantity}</td>
      { item.quantity <10 && <td>{item.item.precio * item.quantity}</td>}
      { item.newQuantity >10 && <td>{item.item.precio * item.newQuantity}</td> }
      
    </tr>
                </tbody> 
                </Table>

)}
              {itemCart.length === 0 && <p>Actuamente No hay Productos en su carrito</p>}
        </div>
    )
}
// ``

export default Cart
