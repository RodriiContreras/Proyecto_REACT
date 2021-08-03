import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useState} from 'react'
import { Link } from 'react-router-dom'

function ItemDetail({listaCervezas}) {
    const [cantidad, setCantidad] = useState(0)
  
    const Contador= (cantidades) =>{
    setCantidad(cantidades)
    evento()
    }
    function evento(){
        const DOM = document.getElementById('boton')
        DOM.addEventListener('click',function(){
            DOM.style.visibility=('hidden')
            if(DOM.visibility='hidden'){
             let botonNuevo =   document.getElementById('divLink')
             botonNuevo.style.visibility=('visible')
            }
        })
    }

    function Click (){
   return(
       <div id='divLink' style={{position:'relative',bottom:'70px',left:'170px',width:'200px',height:'40px',visibility:'hidden',backgroundColor:'rgba(237,176,38,255)',zIndex:'1000'}}>
       <Link style={{color:'black',textDecoration:'none'}} id='link' to='/cart'>Finalizar Mi Pedido</Link>
       </div>
   )
    }
    console.log(cantidad)

    return (
        <div style={{display:'flex', flexWrap:'wrap',width:'400px',position:'relative',left:'300px',top:'80px'}}>
            {listaCervezas.map(cervezas => (
            <div style={{paddingLeft:'20px',textAlign:'center',width:'450px',boxShadow:' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',borderRadius:'2%',backgroundColor:'#f0e9e9'}}>
                       
                <div><img style={{width:'50px'}} src={cervezas.image_url}></img></div>
                <h1 style={{fontSize:'30px'}}>{cervezas.name}</h1>
                <div><p> al precio de ${cervezas.boil_volume.value}</p></div>
                <p style={{fontWeight:'bolder'}}>{cervezas.description}</p>
                <div style={{position:'relative',right:'70px',bottom:'20px'}}>
                <ItemCount botonId='boton' stock={10} inicial={1} carrito={Contador}/>
                <Click/>

                </div>
            </div>))}
       </div>
    )
}

export default ItemDetail
