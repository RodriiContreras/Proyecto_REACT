import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

function ItemDetail({listaCervezas}) {
  
    const [cantidad, setCantidad] = useState(0)
    const [boolean,setBoolean] = useState(true)
    const {setItemCart,itemCart} = useContext(CartContext)
    const cerveza = listaCervezas.find(cerveza => cerveza.name === 'Pilsen Lager')

    const CambioEstado = ()=>{
        setBoolean(false)
    }
    const Contador= (cantidades) =>{
    setCantidad(cantidades)
    setItemCart(
        [...itemCart,
          cerveza
        ]
    )
    }
    return (
        <div style={{display:'flex', flexWrap:'wrap',width:'400px',position:'relative',left:'300px',top:'80px'}}>                                                 
            {listaCervezas.map(cervezas => (
            <div  style={{paddingLeft:'20px',textAlign:'center',width:'450px',height:'400px',boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',borderRadius:'2%',backgroundColor:'#f0e9e9'}}>           
                <div><img style={{width:'20px'}} src={cervezas.image_url}></img></div>
                <h1 style={{fontSize:'25px'}}>{cervezas.name}</h1>
                <div><p> al precio de ${cervezas.boil_volume.value}</p></div>
                <p style={{fontWeight:'bolder',fontSize:'10px'}}>{cervezas.description}</p>
                <div style={{position:'relative',right:'5px',bottom:'20px'}}>
                 <Link onClick={CambioEstado} to='/item/bebidas/cervezas'>Mas Detalles</Link>
                <ItemCount  stock={10} inicial={1} carrito={Contador}/>
                
                </div>
            </div>))}
       </div>
    )
}

export default ItemDetail
