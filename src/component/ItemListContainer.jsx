import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import ItemList from './Items/ItemList'
import {useEffect, useState} from 'react'
import ItemDetailContainer from './Items/ItemDetailContainer'

const contador= (cantidad) =>{
    console.log(cantidad)
}
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



function ItemListContainer(props){
    const [itemLista, setListaItems] = useState([])

    useEffect(() => {
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
      .then((resp)=>setListaItems(resp))
      .catch(err=>{console.log('alto error')})
    },  [])


    return (
        <div>
            <h1 style={{position:'absolute',top:'350px',left:'35%',fontSize:'85px',color:'rgba(237,176,38,255)',zIndex:'+4100',fontFamily:'Raleway, sans-serif'}}>{props.greeting}</h1>
            <ItemCount stock={10} inicial={1} carrito={contador}/>
            <ItemList listaItems={itemLista}/>
            <ItemDetailContainer/>
        </div>

    )
}

export default ItemListContainer
