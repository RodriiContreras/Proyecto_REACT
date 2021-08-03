import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useState} from 'react'

function ItemDetail({listaCervezas}) {
    const [cantidad, setCantidad] = useState(0)
   const contador= (cantidades) =>{
    setCantidad(cantidades)
    evento()
    }
    function evento(){
        let boton = document.getElementById('boton')  
        boton.addEventListener('mouseover',function(){
            boton.textContent='Finalizar mi pedido'
            
        })
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
                <ItemCount botonId='boton' stock={10} inicial={1} carrito={contador}/>
                </div>
            </div>))}
       </div>
    )
}

export default ItemDetail
