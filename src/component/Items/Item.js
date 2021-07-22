import React from 'react'
import { useState, useEffect } from 'react';


function Item() {
    const [itemLista, setListaItems] = useState([])
useEffect(() => {
    const items =[
        {id:'1',
        titulo:'Hamburguesa Burger House',
        precio:650},
        {id:'2',
        titulo:'CheeseBurger',
        precio:550
        },
        {id:'3',
        titulo:'Veggie Burger',
        precio:550
        }
      ]

      const task = new Promise ((resuelto,rechazado)=>{
        let status = 400
       if (status === 400){
           setTimeout(()=>{
              resuelto(items)   
           },2000)
       }
       else{
           rechazado('rechazado')
       } 
 })
 const ObtenerPromesa=()=>{
    return task
}

       ObtenerPromesa()
       .then((resp)=>setListaItems(resp))
       .catch(err=>{console.log('alto error')})
     },  [])

    return (
        <div>
             {itemLista.map((item,valor)=><ul key={valor}>
             <li>{item.titulo}</li>
             <li>{item.precio}</li>
             </ul>)} 
        </div>
    )
}

export default Item
