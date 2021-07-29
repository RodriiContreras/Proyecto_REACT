import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import ItemList from './Items/ItemList'
import {useEffect, useState} from 'react'
import ItemDetailContainer from './Items/ItemDetailContainer'
import { useParams } from 'react-router-dom'

const contador= (cantidad) =>{
    console.log(cantidad)
}
const items =[
    {id:'1',
    titulo:'Hamburguesa Burger House',
    precio:650,
    categoria:'Carne'
  },
    {id:'2',
    titulo:'CheeseBurger',
    precio:550,
    categoria:'Carne'
    },
    {id:'3',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano'
    },
    {id:'4',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne'
    },
    {id:'5',
    titulo:'Tapa Arterias',
    precio:550,
    categoria:'Carne'
    },
    {id:'6',
    titulo:'Old School Burger',
    categoria:'Carne',
    precio:550
    },
    {id:'7',
    titulo:'Triple CheeseBurger',
    precio:550,
    categoria:'Carne'
    },
    {id:'8',
    titulo:'Old School Burger',
    precio:550,
    categoria:'Carne'
    },
    {id:'9',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne'
    },
    {id:'10',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano'
    }
  ]



function ItemListContainer(props){
    const [itemLista, setListaItems] = useState([])
const {productosId} =useParams()
    useEffect(() => {
        const task = new Promise ((resuelto,rechazado)=>{
         if (productosId === 'Carne'){
             setTimeout(()=>{
                resuelto(items.filter(carne=> carne.categoria===productosId))   
             },2000)
         }
         else if(productosId ==='Vegano'){
          
          setTimeout(()=>{
           
          resuelto(items.filter(vegano=> vegano.categoria===productosId)) 
          },2000)
        }
        else{
          rechazado('no Messirve')
        }
    })
      .then(resp=>setListaItems(resp))
      .catch(err=>{console.log('alto error')}) 

    } ,  [])
console.log(productosId)
    return (
        <div>
            <h1 style={{position:'absolute',top:'350px',left:'35%',fontSize:'85px',color:'rgba(237,176,38,255)',zIndex:'+4100',fontFamily:'Raleway, sans-serif'}}>{props.greeting}</h1>
          <div style={{display:'flex',flexWrap:'wrap',width:'90%'}}>
            <ItemCount nombre={'Hamburguesa Burger House'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount nombre={'Veggie Burger'}  stock={10} inicial={1} carrito={contador}/>
            <ItemCount nombre={'Double Bacon'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount nombre={'Tapa Arterias'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount nombre={'Old School Burger'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount nombre={'Double Bacon'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount nombre={'Triple CheeseBurger'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount nombre={'Veggie Burger'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount nombre={'Old School Burger'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount nombre={'Double Bacon'} stock={10} inicial={1} carrito={contador}/>
          </div>
            <ItemList listaItems={itemLista}/>
            <ItemDetailContainer/>
        </div>

    )
}

export default ItemListContainer
