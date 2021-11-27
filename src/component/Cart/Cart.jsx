import React from 'react'
import {useContext,useState} from 'react'
import { CartContext } from '../Context/CartContext'
import {getFireDb} from '../Firebase/firebase'
import {Table,Button,Form} from 'react-bootstrap'
import { collection, doc,setDoc } from 'firebase/firestore/lite'

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
  const order = {buyer,item:{itemCart}}
   evt.preventDefault()
   const db = getFireDb()
   const AñadiendoPedido = await setDoc(doc(db,'pedidos','pedido'),{
     name:buyer.name,
     phone:buyer.phone,
     email:buyer.email
   })
  console.log(AñadiendoPedido)
 }
  console.log(buyer)

    const {itemCart}  = useContext(CartContext)
    console.log(itemCart)
    return (
        <div>
   <div style={{width:'100%',textAlign:'center',backgroundColor:'black'}}><h1 style={{color:'white'}}> Su Carrito</h1></div>

{itemCart.length !== 0 &&
<Table striped bordered hover>
<tr>
      <th>Nombre Del Producto</th>
      <th>Cantidad</th>
      <th>Precio total</th>
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
}
{/* {itemCart.length !==0 && */}
<Form 
  style={{
    width:'500px'
    ,border:'2px solid blue'
    ,borderRadius:'1%'
    ,textAlign:'center'
    ,fontFamily:'Raleway, sans-serif'
    ,position:'relative',
    left:'36%'
  }} 
  onSubmit={handlerSubmit}
  onChange={handlerChange}
 >
  <div><h1>Formulario de Contacto</h1></div>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Ingrese su Nombre</Form.Label>
    <Form.Control type="text" name='name' value={buyer.name} placeholder="Ingrese su nombre" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Ingrese su numero de telefono</Form.Label>
    <Form.Control type="number" name='phone' value={buyer.phone} placeholder="Numero de Telefono" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Ingrese su E-mail</Form.Label>
    <Form.Control type="text" name='email' value={buyer.email} placeholder="Ingrese su Email" />
  </Form.Group>

  <Button variant="primary" type="submit" style={{width:'100%'}}>
    Enviar Mi Pedido!
  </Button>
</Form>

{/* } */}

              {itemCart.length === 0 && <p style={{fontFamily:'Raleway, sans-serif'}}>Actuamente No hay Productos en su carrito</p>}
        </div>
    )
}
// ``

export default Cart
const initialState = {
  name:'',
  phone:'',
  email:''
}
