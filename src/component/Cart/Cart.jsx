import React from 'react'
import {useContext,useState} from 'react'
import { CartContext } from '../Context/CartContext'
import {getFireDb} from '../Firebase/firebase'
import { collection,addDoc } from 'firebase/firestore/lite'
import {Table,Button,Form} from 'react-bootstrap'
import './Cart.css'

function Cart() {
  const [buyer, setBuyer] = useState(initialState)
 const handlerChange= (evt) =>{
   setBuyer(
     {
       ...buyer,
       [evt.target.name]:evt.target.value // toma los valores que se Tipean en los input 
     }
   )
   
 }

 const handlerSubmit = async (evt) =>{
  evt.preventDefault()
  const fechaPedido = new Date()
  const precioTotal = totalPrice()
  const order = {buyer,item:{itemCart},date:{fechaPedido},total:{precioTotal}}
  console.log(precioTotal)
  if (buyer.email === buyer.email2){
   const db = getFireDb()
   const colleccion = addDoc(collection(db,'pedidos'),{
  order:order
   })
   .then(resp => console.log(resp))
  }
  else{
    console.log('los emails no son iguales')
  }
 }

 function totalPrice(){
    let total =  itemCart.reduce((accum, valor) =>(accum + (valor.quantity* valor.item.precio)),0)
  
    return total
  }
  const vaciarCarrito =() =>{
    setItemCart([])
  }



    const {itemCart,setItemCart}  = useContext(CartContext)
    console.log(itemCart)
    return (
        <div>
   <div style={{width:'100%',textAlign:'center',backgroundColor:'black'}}><h1 style={{color:'white'}}> Su Carrito</h1></div>

{itemCart.length !== 0 &&

<div>

<button style={{position:'relative',left:'47%',fontFamily:'Raleway, sans-serif',backgroundColor:'orange'}} onClick={vaciarCarrito}>Vaciar mi Carrito</button>

<Table style={{marginTop:'10px'}} striped bordered hover>
<tr>
      <th>Nombre Del Producto</th>
      <th>Cantidad</th>
      <th>Precio</th>
</tr>

 {itemCart.map(item => 
                <tbody> 
                    
    <tr>
      <td>{item.item.titulo}</td>
      <td> {item.quantity || item.newQuantity}</td>
      { item.quantity <10 && <td>{item.item.precio * item.quantity}</td>}
      { item.quantity ===10 && <td>{item.item.precio * item.quantity}</td>}
      { item.newQuantity >10 && <td>{item.item.precio * item.newQuantity}</td> }
    </tr>
                </tbody> 
)}
</Table>


</div>
}
{itemCart.length !==0 ?<p style={{position:'relative',top:'2px'}} id='totalPrice'>{totalPrice}</p> : <h2>Total de su Carrito : {totalPrice} </h2>}
 {itemCart.length !==0 && 
<Form id='cart_form'
  onSubmit={handlerSubmit}
  onChange={handlerChange}
 >
  <div><h1>Formulario de Contacto</h1></div>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Ingrese su Nombre</Form.Label>
    <Form.Control type="text" name='name' value={buyer.name} placeholder="Ingrese su Nombre" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Ingrese su numero de telefono</Form.Label>
    <Form.Control type="number" name='phone' value={buyer.phone} placeholder="Numero de Telefono" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Ingrese su E-mail</Form.Label>
    <Form.Control type="email" name='email' value={buyer.email} placeholder="Ingrese su Email"  required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Escriba nuevamente su E-mail</Form.Label>
    <Form.Control type="email" name='email2' value={buyer.email2} placeholder="Ingrese su Email"  required/>
  </Form.Group>

  <Button variant="warning" type="submit" style={{width:'100%',borderTop:'1px solid black'}}>
    Enviar Mi Pedido!
  </Button>
</Form>
} 

              {itemCart.length === 0 && <p style={{fontFamily:'Raleway, sans-serif'}}>Actualmente No hay Productos en su Carrito</p>}
        </div>
    )
}
// ``

export default Cart
const initialState = {
  name:'',
  phone:'',
  email:'',
  email2:''
}
