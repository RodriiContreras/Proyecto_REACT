import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import './ItemDetail.css'

function ItemDetail({listaCervezas}) {
  
    const [cantidad, setCantidad] = useState(0)
    const [boolean,setBoolean] = useState(true)
    const {setItemCart,itemCart} = useContext(CartContext)

    const CambioEstado = ()=>{
        setBoolean(false)
    }
    const Contador= (cantidades) =>{
    setCantidad(cantidades)
    setItemCart(
        [...itemCart,
        ]
    )
    }
    return (
        <div id='itemdetail_flexcontainer'>                                                 
            {listaCervezas.map(bebidas => (
            <div id='itemdetail_cardcontainer'>           
                {/* <div><img style={{width:'20px'}} src={cervezas.image_url}></img></div> */}
                <h1 style={{fontSize:'25px'}}>{bebidas.titulo}</h1>
                <div><p> al precio de ${bebidas.precio}</p></div>
                <div style={{position:'relative',right:'5px',bottom:'20px'}}>
                 <Link onClick={CambioEstado} to='/item/bebidas/cervezas'>Mas Detalles</Link>
                <ItemCount  stock={10} inicial={1} carrito={Contador}/>
                
                </div>
            </div>))}
       </div>
    )
}

export default ItemDetail
