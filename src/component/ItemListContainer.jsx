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
function producto1(){
   setTimeout(()=>{
  let div =document.getElementById('contenedorcount1')
div.style.visibility=('visible')
},500)
}
function producto2(){
  setTimeout(()=>{
 let div =document.getElementById('contenedorcount2')
div.style.visibility=('visible')
},500)
}
const items =[
    {id:'1',
    titulo:'Burger House',
    precio:650,
    categoria:'Carne',
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link id='link1' onClick={producto1} to='/productos/1'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount1'><ItemCount stock={10} inicial={1} carrito={contador}/></div>
  },
    {id:'2',
    titulo:'CheeseBurger',
    precio:550,
    categoria:'Carne',
    imagen:TapaArterias,
    descripcion:'awkflawjfwakfwa',
    link:<Link onClick={producto2} to='/productos/2'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount2'><ItemCount stock={10} inicial={1} carrito={contador}/></div>
    },
    {id:'3',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    imagen:VeganBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link to='/productos/3'>Mas detalles</Link>,
    Itemcount:<ItemCount stock={10} inicial={1} carrito={contador}/>
    },
    {id:'4',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne',
    imagen:Bacon,
    descripcion:'awkflawjfwakfwa',
    link:<Link to='/productos/4'>Mas detalles</Link>,
    Itemcount:<ItemCount stock={10} inicial={1} carrito={contador}/>
    },
    {id:'5',
    titulo:'Tapa Arterias',
    precio:550,
    categoria:'Carne',
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link to='/productos/5'>Mas detalles</Link>,
    Itemcount:<ItemCount stock={10} inicial={1} carrito={contador}/>
    },
    {id:'6',
    titulo:'Old School Burger',
    categoria:'Carne',
    imagen:OldSchool,
    precio:550,
    descripcion:'awkflawjfwakfwa',
    link:<Link to='/productos/6'>Mas detalles</Link>,
    Itemcount:<ItemCount stock={10} inicial={1} carrito={contador}/>
    },
    {id:'7',
    titulo:'Triple CheeseBurger',
    precio:550,
    categoria:'Carne',
    imagen:TripleCheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link to='/productos/7'>Mas detalles</Link>,
    Itemcount:<ItemCount stock={10} inicial={1} carrito={contador}/>
    },
    {id:'8',
    titulo:'Old School Burger',
    precio:550,
    categoria:'Carne',
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link to='/productos/8'>Mas detalles</Link>,
    Itemcount:<ItemCount stock={10} inicial={1} carrito={contador}/>
    },
    {id:'9',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne',
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link to='/productos/9'>Mas detalles</Link>,
    Itemcount:<ItemCount stock={10} inicial={1} carrito={contador}/>
    },
    {id:'10',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link to='/productos/10'>Mas detalles</Link>,
    Itemcount:<ItemCount stock={10} inicial={1} carrito={contador}/>
    },
    {id:'11',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link to='/productos/11'>Mas detalles</Link>,
    Itemcount:<ItemCount stock={10} inicial={1} carrito={contador}/>
    },
    {id:'12',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link to='/productos/12'>Mas detalles</Link>,
    Itemcount:<ItemCount stock={10} inicial={1} carrito={contador}/>
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
 else if (productosId === '1'){
    setTimeout(()=>{
       resuelto(items.filter(carne=> carne.id===productosId))   
    },500)

}
else if (productosId === '2'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
}
else if (productosId === '3'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
}
else if (productosId === '4'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
}
else if (productosId === '5'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
}
else if (productosId === '6'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   

  },500)
}
else if (productosId === '7'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
}
else if (productosId === '8'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
}

  else if(productosId ==='Vegano'){
   
   setTimeout(()=>{
    
   resuelto(items.filter(vegano=> vegano.categoria===productosId)) 
   },500)
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
    return (
        <div>
          <div style={{backgroundColor:'black',display:'flex',justifyContent:'center',paddingTop:'5px'}}>
            <Link style={{borderRadius:'2%',fontSize:'30px',textDecoration:'none',color:'white', fontFamily:'Raleway, sans-serif'}} to="/productos/Carne">Hamburguesas</Link>
            <Link style={{position:'relative',left:'40px',borderRadius:'2%',fontSize:'30px',textDecoration:'none',color:'white', fontFamily:'Raleway, sans-serif'}} to="/productos/Vegano">Hamburguesas Veganas</Link>
            <Link style={{fontSize:'30px',position:'relative',left:'80px',textDecoration:'none',color:'white', fontFamily:'Raleway, sans-serif'}} to='/item/bebidas/'>Cervezas</Link>
          </div>
             <ItemList listaItems={itemLista}/> 
          <h1 style={{position:'absolute',top:'350px',left:'35%',fontSize:'85px',color:'rgba(237,176,38,255)',zIndex:'+4100',fontFamily:'Raleway, sans-serif'}}>{props.greeting}</h1>
         <div>    
              <ItemDetailContainer/>
          </div>
        </div>

    )
}

export default ItemListContainer
