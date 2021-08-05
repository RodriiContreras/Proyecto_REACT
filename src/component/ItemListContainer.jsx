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
    link:<Link onClick={producto3} to='/productos/3'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount3'><ItemCount stock={10} inicial={1} carrito={contador}/></div>
    },
    {id:'4',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne',
    imagen:Bacon,
    descripcion:'awkflawjfwakfwa',
    link:<Link onClick={producto4} to='/productos/4'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount4'><ItemCount stock={10} inicial={1} carrito={contador}/></div>
    },
    {id:'5',
    titulo:'Tapa Arterias',
    precio:550,
    categoria:'Carne',
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link onClick={producto5} to='/productos/5'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount5'><ItemCount stock={10} inicial={1} carrito={contador}/></div>
    },
    {id:'6',
    titulo:'Old School Burger',
    categoria:'Carne',
    imagen:OldSchool,
    precio:550,
    descripcion:'awkflawjfwakfwa',
    link:<Link onClick={producto6} to='/productos/6'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount6'><ItemCount stock={10} inicial={1} carrito={contador}/></div>
    },
    {id:'7',
    titulo:'Triple CheeseBurger',
    precio:550,
    categoria:'Carne',
    imagen:TripleCheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link onClick={producto7} to='/productos/7'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount7'><ItemCount stock={10} inicial={1} carrito={contador}/></div>
    },
    {id:'8',
    titulo:'Old School Burger',
    precio:550,
    categoria:'Carne',
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link onClick={producto8} to='/productos/8'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount8'><ItemCount stock={10} inicial={1} carrito={contador}/></div>
    },
    {id:'9',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne',
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link onClick={producto9} to='/productos/9'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount9'><ItemCount stock={10} inicial={1} carrito={contador}/></div>
    },
    {id:'10',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link onClick={producto10} to='/productos/10'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount10'><ItemCount stock={10} inicial={1} carrito={contador}/></div>
    },
    {id:'11',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link onClick={producto11} to='/productos/11'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount11'><ItemCount stock={10} inicial={1} carrito={contador}/></div>
    },
    {id:'12',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    imagen:CheeseBurger,
    descripcion:'awkflawjfwakfwa',
    link:<Link onClick={producto12} to='/productos/12'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount12'><ItemCount stock={10} inicial={1} carrito={contador}/></div>
    }
  ]
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
  function producto3(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount3')
   div.style.visibility=('visible')
   },500)
   }
   function producto4(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount4')
   div.style.visibility=('visible')
   },500)
   }
   function producto5(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount5')
   div.style.visibility=('visible')
   },500)
   }
   function producto6(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount6')
   div.style.visibility=('visible')
   },500)
   }
   function producto7(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount7')
   div.style.visibility=('visible')
   },500)
   }
   function producto8(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount8')
   div.style.visibility=('visible')
   },500)
   }
   function producto9(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount9')
   div.style.visibility=('visible')
   },500)
   }
   function producto10(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount10')
   div.style.visibility=('visible')
   },500)
   }
   function producto11(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount11')
   div.style.visibility=('visible')
   },500)
   }
   function producto12(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount12')
   div.style.visibility=('visible')
   },500)
   }

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
else if (productosId === '9'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
}
else if (productosId === '10'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
}
else if (productosId === '11'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
}
else if (productosId === '12'){
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
