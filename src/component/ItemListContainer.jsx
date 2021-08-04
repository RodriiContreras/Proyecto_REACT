import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import ItemList from './Items/ItemList'
import {useEffect, useState} from 'react'
import ItemDetailContainer from './Items/ItemDetailContainer'
import { Link, useParams } from 'react-router-dom'
import CheeseBurger from './imagen/cheeseBurger.jpg'
import TapaArterias from './imagen/TapaArterias.jpg'
import Bacon from './imagen/HamburguesaBacon.jpg'
import VeganBurger from './imagen/VeganBurger.jpg'
import OldSchool from './imagen/OldSchool.jpg'
import TripleCheeseBurger from './imagen/TripleCheeseBurger.jpg'
const contador= (cantidad) =>{
    console.log(cantidad)
}
const items =[
    {id:'1',
    titulo:'Hamburguesa Burger House',
    precio:650,
    categoria:'Carne',
    imagen:CheeseBurger
  },
    {id:'2',
    titulo:'CheeseBurger',
    precio:550,
    categoria:'Carne',
    imagen:TapaArterias
    },
    {id:'3',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    imagen:VeganBurger

    },
    {id:'4',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne',
    imagen:Bacon
    },
    {id:'5',
    titulo:'Tapa Arterias',
    precio:550,
    categoria:'Carne',
    imagen:CheeseBurger
    },
    {id:'6',
    titulo:'Old School Burger',
    categoria:'Carne',
    imagen:OldSchool,
    precio:550
    },
    {id:'7',
    titulo:'Triple CheeseBurger',
    precio:550,
    categoria:'Carne',
    imagen:TripleCheeseBurger
    },
    {id:'8',
    titulo:'Old School Burger',
    precio:550,
    categoria:'Carne',
    imagen:CheeseBurger
    },
    {id:'9',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne',
    imagen:CheeseBurger
    },
    {id:'10',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    imagen:CheeseBurger
    },
    {id:'10',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    imagen:CheeseBurger
    },
    {id:'10',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    imagen:CheeseBurger
    }
  ]



function ItemListContainer(props){
    const [itemLista, setListaItems] = useState([])
const {productosId} =useParams()
const task = new Promise ((resuelto)=>{
  if (productosId === 'Carne'){
      setTimeout(()=>{
         resuelto(items.filter(carne=> carne.categoria===productosId))   
      },500)
  }
  else if(productosId ==='Vegano'){
   
   setTimeout(()=>{
    
   resuelto(items.filter(vegano=> vegano.categoria===productosId)) 
   },500)
   console.log(productosId)
 }
 else{
   resuelto(items)
 }
},

    useEffect(() => {
      const getPromise =()=>{
        return task
      }
         getPromise()
        .then(resp=>setListaItems(resp))
        .catch(err=>{console.log('alto error')}) 
    }),[])
console.log(productosId)
    return (
        <div>
          <div style={{backgroundColor:'black',display:'flex',justifyContent:'center',paddingTop:'5px'}}>
            <Link style={{borderRadius:'2%',fontSize:'30px',textDecoration:'none',color:'white', fontFamily:'Raleway, sans-serif'}} to="/productos/Carne">Hamburguesas</Link>
            <Link style={{position:'relative',left:'40px',borderRadius:'2%',fontSize:'30px',textDecoration:'none',color:'white', fontFamily:'Raleway, sans-serif'}} to="/productos/Vegano">Hamburguesas Veganas</Link>
            <Link style={{fontSize:'30px',position:'relative',left:'80px',textDecoration:'none',color:'white', fontFamily:'Raleway, sans-serif'}} to='/item/bebidas/'>Bebidas</Link>
          </div>
             <ItemList listaItems={itemLista}/> 
          <h1 style={{position:'absolute',top:'350px',left:'35%',fontSize:'85px',color:'rgba(237,176,38,255)',zIndex:'+4100',fontFamily:'Raleway, sans-serif'}}>{props.greeting}</h1>
          <div style={{display:'flex',flexWrap:'wrap',width:'90%'}}>
            <ItemCount  nombre={'Hamburguesa Burger House'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount  nombre={'Veggie Burger'}  stock={10} inicial={1} carrito={contador}/>
            <ItemCount  nombre={'Double Bacon'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount  nombre={'Tapa Arterias'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount  nombre={'Old School Burger'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount  nombre={'Double Bacon'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount  nombre={'Triple CheeseBurger'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount  nombre={'Veggie Burger'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount  nombre={'Old School Burger'} stock={10} inicial={1} carrito={contador}/>
            <ItemCount  nombre={'Double Bacon'} stock={10} inicial={1} carrito={contador}/>
          </div>
         <div>    
            <ItemDetailContainer/>
          </div>
        </div>

    )
}

export default ItemListContainer
