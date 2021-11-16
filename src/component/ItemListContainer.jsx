import React, {useContext} from 'react'
import {CartContext} from './Context/CartContext'
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
import VeggieBurger from './imagen/VeggieBurger.jpg'
import VeggieBurger2 from './imagen/VeggieBurger2.png'  
import { Spinner } from 'react-bootstrap'


function ItemListContainer(props){
  const [boolean, setBoolean] = useState(false)
  const [count, setCount] = useState(0)
function onAdd(cantidad){
setCount(cantidad)
setBoolean(true)
console.log(cantidad)}

function Click ({id,precio,titulo,imagen}){  
const {setItemCart,itemCart} = useContext(CartContext)

 const addToCart =  ({id,precio,titulo,imagen}) =>{
   setTimeout(() => {
const productoContext = {item:{id,precio,titulo,imagen},quantity:count}
console.log(productoContext)
setItemCart([
  ...itemCart,
  productoContext,
])
}, 200);
 }
  return(
      <div id='divLink'>
       {boolean && <Link  onClick={()=>addToCart({id,precio,titulo,imagen})} style={{color:'black',textDecoration:'none'}}  to='/cart'>Finalizar Mi Pedido</Link>}
      </div>
  )
   }


const items =[
    {id:'1',
    titulo:'cheeseBurger',
    precio:650,
    categoria:'Carne',
    imagen:CheeseBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='1' style={{textDecoration:'none',color:'black'}} onClick={producto1} to='/productos/1'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount1'> <ItemCount id='boton1' stock={10} inicial={1} onAdd={onAdd}/></div>,
    finalizar:<div style={{visibility:'visible'}} id='producto1'> <Click id={'1'} titulo={'cheeseBurger'} imagen ={CheeseBurger} precio={650}/></div>
  },
    {id:'2',
    titulo:'CheeseBurger',
    precio:550,
    categoria:'Carne',
    cantidad:1,
    imagen:TapaArterias,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='2' style={{textDecoration:'none',color:'black'}} onClick={producto2} to='/productos/2'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount2'><ItemCount id='boton2' stock={10} inicial={1} onAdd={onAdd}/></div>,
    finalizar:<div style={{visibility:'hidden'}} id='producto2'><Click id={'2'} titulo={'cheeseBurger'} imagen ={TapaArterias} precio={550}/></div>
    },
    {id:'3',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    cantidad:1,
    imagen:VeganBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='3' style={{textDecoration:'none',color:'black'}} onClick={producto3} to='/productos/3'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount3'><ItemCount id='boton3' stock={10} inicial={1} onAdd={onAdd}/></div>,
    finalizar:<div style={{visibility:'hidden'}} id='producto3'><Click id={'3'} titulo={'Veggie Burger'} imagen ={TapaArterias} precio={550}/></div>
    },
    {id:'4',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne',
    cantidad:1,
    imagen:Bacon,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='4' style={{textDecoration:'none',color:'black'}} onClick={producto4} to='/productos/4'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount4'><ItemCount id='boton4' stock={10} inicial={1} onAdd={onAdd}/></div>,
    finalizar:<div style={{visibility:'hidden'}} id='producto4'><Click id={'4'} titulo={'Double Bacon'} imagen ={Bacon} precio={550}/></div>
    },
    {id:'5',
    titulo:'Tapa Arterias',
    precio:550,
    categoria:'Carne',
    cantidad:1,
    imagen:CheeseBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='5' style={{textDecoration:'none',color:'black'}} onClick={producto5} to='/productos/5'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount5'><ItemCount  id='boton5' stock={10} inicial={1} onAdd={onAdd}/></div>,
    finalizar:<div style={{visibility:'hidden'}} id='producto5'><Click id={'5'} titulo={'Tapa Arterias'} imagen ={TapaArterias} precio={550}/></div>
    },
    {id:'6',
    titulo:'Old School Burger',
    precio:550,
    categoria:'Carne',
    cantidad:1,
    imagen:OldSchool,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='6' style={{textDecoration:'none',color:'black'}} onClick={producto6} to='/productos/6'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount6'><ItemCount  id='boton6' stock={10} inicial={1} onAdd={onAdd}/></div>,
    finalizar:<div style={{visibility:'hidden'}} id='producto6'><Click id={'6'} titulo={'Old School Burger'} imagen ={TapaArterias} precio={550}/></div>
    },
    {id:'7',
    titulo:'Triple CheeseBurger',
    precio:550,
    categoria:'Carne',
    cantidad:1,
    imagen:TripleCheeseBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='7' style={{textDecoration:'none',color:'black'}} onClick={producto7} to='/productos/7'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount7'><ItemCount  id='boton7' stock={10} inicial={1} onAdd={onAdd}/></div>,
    finalizar:<div style={{visibility:'hidden'}} id='producto7'><Click id={'7'} titulo={'Triple CheeseBurger'} imagen ={TripleCheeseBurger} precio={550}/></div>
    },
    {id:'8',
    titulo:'Old School Burger',
    precio:550,
    categoria:'Carne',
    cantidad:1,
    imagen:TripleCheeseBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='8' style={{textDecoration:'none',color:'black'}} onClick={producto8} to='/productos/8'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount8'><ItemCount  id='boton8' stock={10} inicial={1} onAdd={onAdd}/></div>,
    finalizar:<div style={{visibility:'hidden'}} id='producto8'><Click id={'8'} titulo={'Old School Burger'} imagen ={TripleCheeseBurger} precio={550}/></div>
    },
    {id:'9',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne',
    imagen:CheeseBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='9' style={{textDecoration:'none',color:'black'}} onClick={producto9} to='/productos/9'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount9'><ItemCount  id='boton9' stock={10} inicial={1} onAdd={onAdd}/></div>,
    finalizar:<div style={{visibility:'hidden'}} id='producto9'><Click id={'9'} titulo={'Double Bacon'} imagen ={CheeseBurger} precio={550}/></div>
    },
    {id:'10',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    imagen:VeggieBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='10' style={{textDecoration:'none',color:'black'}} onClick={producto10} to='/productos/10'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount10'><ItemCount  id='boton10' stock={10} inicial={1} onAdd={onAdd}/></div>,
    finalizar:<div style={{visibility:'hidden'}} id='producto10'><Click id={'10'} titulo={'Veggie Burger'} imagen ={VeggieBurger} precio={550}/></div>
    },
    {id:'11',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    imagen:VeggieBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='11' style={{textDecoration:'none',color:'black'}} onClick={producto11} to='/productos/11'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}} id='contenedorcount11'><ItemCount  id='boton11' stock={10} inicial={1} onAdd={onAdd}/></div>,
    finalizar:<div style={{visibility:'hidden'}} id='producto11'><Click id={'11'} titulo={'Veggie Burger'} imagen ={VeggieBurger} precio={550}/></div>
    },
    {id:'12',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    cantidad:1,
    imagen:VeggieBurger2,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='12' style={{textDecoration:'none',color:'black'}} onClick={producto12} to='/productos/12'>Mas detalles</Link>,
    Itemcount:<div style={{visibility:'hidden'}}  id='contenedorcount12'><ItemCount  id='boton12' stock={10} inicial={1} onAdd={onAdd}/></div>,
    finalizar:<div style={{visibility:'hidden'}} id='producto12'><Click id={'12'} titulo={'Veggie Burger'} imagen ={VeggieBurger2} precio={550}/></div>
    }
  ]
  function producto1(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount1')
  div.style.visibility=('visible')
  },800)
  }
  function producto2(){
   setTimeout(()=>{
  let div =document.getElementById('contenedorcount2')
  div.style.visibility=('visible')
  },800)
  }
  function producto3(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount3')
   div.style.visibility=('visible')
   },800)
   }
   function producto4(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount4')
   div.style.visibility=('visible')
   },800)
   }
   function producto5(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount5')
   div.style.visibility=('visible')
   },800)
   }
   function producto6(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount6')
   div.style.visibility=('visible')
   },800)
   }
   function producto7(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount7')
   div.style.visibility=('visible')
   },800)
   }
   function producto8(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount8')
   div.style.visibility=('visible')
   },800)
   }
   function producto9(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount9')
   div.style.visibility=('visible')
   },800)
   }
   function producto10(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount10')
   div.style.visibility=('visible')
   },800)
   }
   function producto11(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount11')
   div.style.visibility=('visible')
   },800)
   }
   function producto12(){
    setTimeout(()=>{
   let div =document.getElementById('contenedorcount12')
   div.style.visibility=('visible')
   },800)
   }


    const [itemLista, setListaItems] = useState([])
    const [loading, setLoading] = useState(true)
const {productosId} =useParams()
const task = new Promise ((resuelto)=>{
  if (productosId === 'Carne'){
      setTimeout(()=>{
         resuelto(items.filter(carne=> carne.categoria===productosId))   
      },800)
  }
 else if (productosId === '1'){
    setTimeout(()=>{
       resuelto(items.filter(carne=> carne.id===productosId))   
    
    },800)
    
    let boton= document.getElementById('boton1')
       boton.addEventListener('click',function(){
         let count = document.getElementById('contenedorcount1')
         count.style.visibility=('hidden')
       })
}
else if (productosId === '2'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
  let boton1=  document.getElementById('boton2')
  boton1.addEventListener('click',function(){
    let count1 = document.getElementById('contenedorcount2')
    count1.style.visibility=('hidden')
    let finalizar1 = document.getElementById('producto2')
    finalizar1.style.visibility=('visible')
  })

}
else if (productosId === '3'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
  let boton3=  document.getElementById('boton3')
  boton3.addEventListener('click',function(){
    let count3 = document.getElementById('contenedorcount3')
    count3.style.visibility=('hidden')
    let finalizar3 = document.getElementById('producto3')
    finalizar3.style.visibility=('visible')
  })
}

else if (productosId === '4'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
  let boton4=  document.getElementById('boton4')
  boton4.addEventListener('click',function(){
    let count4 = document.getElementById('contenedorcount4')
    count4.style.visibility=('hidden')
    let finalizar4 = document.getElementById('producto4')
    finalizar4.style.visibility=('visible')
  })
}
else if (productosId === '5'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
  let boton5=  document.getElementById('boton5')
  boton5.addEventListener('click',function(){
    let count5 = document.getElementById('contenedorcount5')
    count5.style.visibility=('hidden')
    let finalizar5 = document.getElementById('producto5')
    finalizar5.style.visibility=('visible')
  })
}
else if (productosId === '6'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
  let boton6=  document.getElementById('boton6')
  boton6.addEventListener('click',function(){
    let count6 = document.getElementById('contenedorcount6')
    count6.style.visibility=('hidden')
    let finalizar6 = document.getElementById('producto6')
    finalizar6.style.visibility=('visible')
  })
}
else if (productosId === '7'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
  let boton7=  document.getElementById('boton7')
  boton7.addEventListener('click',function(){
    let count7 = document.getElementById('contenedorcount7')
    count7.style.visibility=('hidden')
    let finalizar7 = document.getElementById('producto7')
    finalizar7.style.visibility=('visible')
  })
}
else if (productosId === '8'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
  let boton8=  document.getElementById('boton8')
  boton8.addEventListener('click',function(){
    let count8 = document.getElementById('contenedorcount8')
    count8.style.visibility=('hidden')
    let finalizar8 = document.getElementById('producto8')
    finalizar8.style.visibility=('visible')
  })
}
else if (productosId === '9'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
  let boton9=  document.getElementById('boton9')
  boton9.addEventListener('click',function(){
    let count9 = document.getElementById('contenedorcount8')
    count9.style.visibility=('hidden')
    let finalizar9 = document.getElementById('producto9')
    finalizar9.style.visibility=('visible')
  })
}
else if (productosId === '10'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
  let boton10=  document.getElementById('boton10')
  boton10.addEventListener('click',function(){
    let count10 = document.getElementById('contenedorcount10')
    count10.style.visibility=('hidden')
    let finalizar10 = document.getElementById('producto10')
    finalizar10.style.visibility=('visible')
  })
}
else if (productosId === '11'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
  let boton11=  document.getElementById('boton11')
  boton11.addEventListener('click',function(){
    let count11 = document.getElementById('contenedorcount11')
    count11.style.visibility=('hidden')
    let finalizar11 = document.getElementById('producto11')
    finalizar11.style.visibility=('visible')
  })
}
else if (productosId === '12'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },500)
  let boton12=  document.getElementById('boton12')
  boton12.addEventListener('click',function(){
    let count12 = document.getElementById('contenedorcount12')
    count12.style.visibility=('hidden')
    let finalizar12 = document.getElementById('producto12')
    finalizar12.style.visibility=('visible')
  })
}


  else if(productosId ==='Vegano'){
   
   setTimeout(()=>{
    
   resuelto(items.filter(vegano=> vegano.categoria===productosId)) 
   },500)
 }
 else{
  setTimeout(()=>{
   resuelto(items)
   setLoading(false)
  },6000)
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
          <div style={{backgroundColor:'rgba(237,176,38,255)',left:'30%',display:'flex',justifyContent:'center'}}>
            <Link style={{borderRadius:'2%',fontSize:'30px',textDecoration:'none',color:'black', fontFamily:'Raleway, sans-serif'}}  to="/productos/Carne">Hamburguesas</Link>
            <Link style={{position:'relative',left:'40px',borderRadius:'2%',fontSize:'30px',textDecoration:'none',color:'black', fontFamily:'Raleway, sans-serif'}} to="/productos/Vegano">Hamburguesas Veganas</Link>
            <Link style={{fontSize:'30px',position:'relative',left:'80px',textDecoration:'none',color:'black', fontFamily:'Raleway, sans-serif'}} to='/item/bebidas/'>Cervezas</Link>
          </div>
            {loading && 
            <div style={{position:'relative',width:'20px',left:'50%',top:'355px'}}> 
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>}
             <ItemList listaItems={itemLista} />  
          
          <h1 style={{position:'absolute',top:'350px',left:'35%',fontSize:'85px',color:'rgba(237,176,38,255)',zIndex:'+4100',fontFamily:'Raleway, sans-serif'}}>{props.greeting}</h1>
         <div>    
              <ItemDetailContainer/>
          </div>
        </div>

    )
}

export default ItemListContainer
