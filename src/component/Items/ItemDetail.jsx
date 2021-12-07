import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useState,useContext} from 'react'
import { Link,useParams } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import './ItemDetail.css'
import wallpaper from '../imagen/wallpaper.jpg'


function ItemDetail({listaCervezas,detailBoolean}) {
    const [cantidad, setCantidad] = useState(0)
    const [boolean,setBoolean] = useState(true)
    const {setItemCart,itemCart} = useContext(CartContext)

    const CambioEstado = ()=>{
        setBoolean(false)
    }
    const onAdd= (cantidades) =>{
    setCantidad(cantidades)
    }
   const Click = ({titulo,id,imagen,precio}) =>{
       const addToCart=()=>{
        const productDetail = {item:{titulo,id,imagen,precio},quantity:cantidad}
        const findIndex = itemCart.findIndex(item => productDetail.item.id === item.item.id)
        if (findIndex === -1){
            setItemCart([
              ...itemCart,
              productDetail,
            ])
          }
          else{
            const newQuantity = itemCart[findIndex].quantity + productDetail.quantity
            const oldList = itemCart.filter(item=>item.item.id !== productDetail.item.id)
            setItemCart([...oldList,{item:productDetail.item,newQuantity}])
          }
       }

    return(
        <div>
           <Link to='/cart'><button onClick={addToCart}>Finalizar mi Pedido</button></Link>
        </div>
    )
   }
    return (
        <div id='itemdetail_flexcontainer' >                                                 
            {listaCervezas.map(bebidas => (
            <div id='itemdetail_cardcontainer'>           
                 <div><img style={{width:'95px'}} src={bebidas.url}></img></div> 
                <h1 style={{fontSize:'25px'}}>{bebidas.titulo}</h1>
                <div><p> Precio: ${bebidas.precio}</p></div>
                <div style={{position:'relative',right:'5px',bottom:'20px'}}>
                 <Link onClick={CambioEstado} to={`/item/bebidas/${bebidas.id}`}>Mas Detalles</Link>
                <ItemCount titulo={bebidas.titulo} id={bebidas.id} imagen={bebidas.url} precio={bebidas.precio}  stock={10} inicial={1} onAdd={onAdd}/>
                <Click titulo={bebidas.titulo} id={bebidas.id} imagen={bebidas.url} precio={bebidas.precio}/>
                </div>
            </div>))}
       </div>
    )
}

export default ItemDetail
