import React, {useContext} from 'react'
import {CartContext} from './Context/CartContext'
import ItemCount from './ItemCount/ItemCount'
import ItemList from './Items/ItemList'
import {useEffect, useState} from 'react'
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
import Footer from './Footer/Footer'
import './ItemListContainer.css'


function ItemListContainer(props){
  const [boolean, setBoolean] = useState(false)
  const [booleanLink, setBooleanLink] = useState(true)
  const [booleanItems, setBooleanItems] = useState(false)
  const [count, setCount] = useState(0)
function onAdd(cantidad){
setCount(cantidad)
setBoolean(true)
setBooleanItems(false)
console.log(cantidad)}

function Click ({id,precio,titulo,imagen}){  
const {setItemCart,itemCart} = useContext(CartContext)

 const addToCart =  ({id,precio,titulo,imagen}) =>{

const productoContext = {item:{id,precio,titulo,imagen},quantity:count}
const findIndex = itemCart.findIndex(item => productoContext.item.id === item.item.id)
if (findIndex === -1){
  setItemCart([
    ...itemCart,
    productoContext,
  ])
}
else{
  const newQuantity = itemCart[findIndex].quantity + productoContext.quantity
  const oldList = itemCart.filter(item=>item.item.id !== productoContext.item.id)
  setItemCart([...oldList,{item:productoContext.item,newQuantity}])
}
console.log(findIndex)
console.log(productoContext)

 }
  return(
      <div id='divLink'>
       {boolean && <Link  style={{color:'black',fontSize:'20px',textDecoration:'none'}} to='/cart'><button onClick={()=>addToCart({id,precio,titulo,imagen})} style={{fontFamily:'Raleway, sans-serif',width:'98%',position:'relative',top:'50px'}}>Finalizar mi Pedido</button></Link>}
      </div>
  )
   }


const items =[
    {id:'1',
    titulo:'Cheese Burger',
    precio:650,
    categoria:'Carne',
    key:1,
    imagen:CheeseBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='1' style={{textDecoration:'none',color:'black',fontSize:'20px'}} onClick={producto1} to='/productos/1'>{booleanLink ?<button style={{fontFamily:'Raleway, sans-serif',width:'98%',position:'relative',top:'55px'}}>Ver el Producto</button> :<div></div>}</Link>,
    Itemcount:<div> { booleanItems ?<ItemCount id='boton1' stock={10} inicial={1} onAdd={onAdd}/> :<div></div>}</div>,
    finalizar: <Click id={'1'} titulo={'Cheese Burger'} imagen ={CheeseBurger} precio={650}/>
  },
    {id:'2',
    titulo:'Cheese Burger',
    precio:550,
    categoria:'Carne',
    key:2,
    imagen:TapaArterias,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='2' style={{textDecoration:'none',color:'black',fontSize:'18px'}} onClick={producto2} to='/productos/2'>{booleanLink ?<button style={{fontFamily:'Raleway, sans-serif',width:'98%',position:'relative',top:'55px'}}>Ver el Producto</button> :<div></div>}</Link>,
    Itemcount:<div>{ booleanItems ? <ItemCount id='boton2' stock={10} inicial={1} onAdd={onAdd}/> : <div></div>}</div>,
    finalizar:<Click id={'2'} titulo={'Cheese Burger'} imagen ={TapaArterias} precio={550}/>
    },
    {id:'3',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    key:3,
    imagen:VeganBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='3' style={{textDecoration:'none',color:'black',fontSize:'18px'}} onClick={producto3} to='/productos/3'>{booleanLink ?<button style={{fontFamily:'Raleway, sans-serif',width:'98%',position:'relative',top:'55px'}}>Ver el Producto</button> :<div></div>}</Link>,
    Itemcount:<div>{booleanItems ?<ItemCount id='boton3' stock={10} inicial={1} onAdd={onAdd}/> :<div></div>}</div>,
    finalizar:<Click id={'3'} titulo={'Veggie Burger'} imagen ={TapaArterias} precio={550}/>
    },
    {id:'4',
    titulo:'Double Bacon',
    precio:550,
    categoria:'Carne',
    key:4,
    imagen:Bacon,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='4' style={{textDecoration:'none',color:'black',fontSize:'18px'}} onClick={producto4} to='/productos/4'>{booleanLink ?<button style={{fontFamily:'Raleway, sans-serif',width:'98%',position:'relative',top:'55px'}}>Ver el Producto</button> :<div></div>}</Link>,
    Itemcount:<div>{ booleanItems ?<ItemCount id='boton4' stock={10} inicial={1} onAdd={onAdd}/>: <div></div>}</div>,
    finalizar:<Click id={'4'} titulo={'Double Bacon'} imagen ={Bacon} precio={550}/>
    },
    {id:'5',
    titulo:'Tapa Arterias',
    precio:550,
    categoria:'Carne',
    cantidad:5,
    imagen:CheeseBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='5' style={{textDecoration:'none',color:'black',fontSize:'18px'}} onClick={producto5} to='/productos/5'>{booleanLink ?<button style={{fontFamily:'Raleway, sans-serif',width:'98%',position:'relative',top:'55px'}}>Ver el Producto</button> :<div></div>}</Link>,
    Itemcount:<div>{booleanItems ?<ItemCount  id='boton5' stock={10} inicial={1} onAdd={onAdd}/> :<div></div>}</div>,
    finalizar:<Click id={'5'} titulo={'Tapa Arterias'} imagen ={TapaArterias} precio={550}/>
    },
    {id:'6',
    titulo:'Old School Burger',
    precio:550,
    categoria:'Carne',
    key:6,
    imagen:OldSchool,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='6' style={{textDecoration:'none',color:'black',fontSize:'18px'}} onClick={producto6} to='/productos/6'>{booleanLink ?<button style={{fontFamily:'Raleway, sans-serif',width:'98%',position:'relative',top:'55px'}}>Ver el Producto</button> :<div></div>}</Link>,
    Itemcount:<div>{booleanItems? <ItemCount  id='boton6' stock={10} inicial={1} onAdd={onAdd}/> :<div></div>}</div>,
    finalizar:<Click id={'6'} titulo={'Old School Burger'} imagen ={TapaArterias} precio={550}/>
    },
    {id:'7',
    titulo:'Triple CheeseBurger',
    precio:550,
    categoria:'Carne',
    key:7,
    imagen:TripleCheeseBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='7' style={{textDecoration:'none',color:'black',fontSize:'18px'}} onClick={producto7} to='/productos/7'>{booleanLink ?<button style={{fontFamily:'Raleway, sans-serif',width:'98%',position:'relative',top:'55px'}}>Ver el Producto</button> :<div></div>}</Link>,
    Itemcount:<div>{booleanItems ?<ItemCount  id='boton7' stock={10} inicial={1} onAdd={onAdd}/> :<div></div>}</div>,
    finalizar:<Click id={'7'} titulo={'Triple CheeseBurger'} imagen ={TripleCheeseBurger} precio={550}/>
    },
    {id:'8',
    titulo:'Old School Burger',
    precio:550,
    categoria:'Carne',
    key:8,
    imagen:TripleCheeseBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='8' style={{textDecoration:'none',color:'black',fontSize:'18px'}} onClick={producto8} to='/productos/8'>{booleanLink ?<button style={{fontFamily:'Raleway, sans-serif',width:'98%',position:'relative',top:'55px'}}>Ver el Producto</button> :<div></div>}</Link>,
    Itemcount:<div>{booleanItems? <ItemCount  id='boton8' stock={10} inicial={1} onAdd={onAdd}/>:<div></div>}</div>,
    finalizar:<Click id={'8'} titulo={'Old School Burger'} imagen ={TripleCheeseBurger} precio={550}/>
    },
    {id:'9',
    titulo:'Double Bacon',
    precio:550,
    key:9,
    categoria:'Carne',
    imagen:CheeseBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='9' style={{textDecoration:'none',color:'black',fontSize:'18px'}} onClick={producto9} to='/productos/9'>{booleanLink ?<button style={{fontFamily:'Raleway, sans-serif',width:'98%',position:'relative',top:'55px'}}>Ver el Producto</button> :<div></div>}</Link>,
    Itemcount:<div>{booleanItems?<ItemCount  id='boton9' stock={10} inicial={1} onAdd={onAdd}/> :<div></div>}</div>,
    finalizar:<Click id={'9'} titulo={'Double Bacon'} imagen ={CheeseBurger} precio={550}/>
    },
    {id:'10',
    titulo:'Veggie Burger',
    precio:550,
    key:10,
    categoria:'Vegano',
    imagen:VeggieBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='10' style={{textDecoration:'none',color:'black',fontSize:'18px'}} onClick={producto10} to='/productos/10'>{booleanLink ?<button style={{fontFamily:'Raleway, sans-serif',width:'98%',position:'relative',top:'55px'}}>Ver el Producto</button> :<div></div>}</Link>,
    Itemcount:<div>{booleanItems ?<ItemCount  id='boton10' stock={10} inicial={1} onAdd={onAdd}/> :<div></div>}</div>,
    finalizar:<Click id={'10'} titulo={'Veggie Burger'} imagen ={VeggieBurger} precio={550}/>
    },
    {id:'11',
    titulo:'Veggie Burger',
    precio:550,
    key:11,
    categoria:'Vegano',
    imagen:VeggieBurger,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='11' style={{textDecoration:'none',color:'black',fontSize:'18px'}} onClick={producto11} to='/productos/11'>{booleanLink ?<button style={{fontFamily:'Raleway, sans-serif',width:'98%',position:'relative',top:'55px'}}>Ver el Producto</button> :<div></div>}</Link>,
    Itemcount:<div>{booleanItems ?<ItemCount  id='boton11' stock={10} inicial={1} onAdd={onAdd}/>:<div></div>}</div>,
    finalizar:<Click id={'11'} titulo={'Veggie Burger'} imagen ={VeggieBurger} precio={550}/>
    },
    {id:'12',
    titulo:'Veggie Burger',
    precio:550,
    categoria:'Vegano',
    key:12,
    imagen:VeggieBurger2,
    descripcion:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    link:<Link id='12' style={{textDecoration:'none',color:'black',fontSize:'18px'}} onClick={producto12} to='/productos/12'>{booleanLink ?<button style={{fontFamily:'Raleway, sans-serif',width:'98%',position:'relative',top:'55px'}}>Ver el Producto</button> :<div></div>}</Link>,
    Itemcount:<div>{booleanItems ?<ItemCount  id='boton12' stock={10} inicial={1} onAdd={onAdd}/>:<div></div>}</div>,
    finalizar:<Click id={'12'} titulo={'Veggie Burger'} imagen ={VeggieBurger2} precio={550}/>
    }
  ]
  const [idalmacenador, setIdalmacenador] = useState()
  function producto1(){
    let id = '1' 
    setIdalmacenador(id)
    setBooleanItems(true)
    setBooleanLink(false)
  }
  function producto2(){
    let id = '2' 
    setBooleanLink(false)
    setBooleanItems(true)
    setIdalmacenador(id)
  }
  function producto3(){
    let id = '3' 
    setIdalmacenador(id)
    setBooleanItems(true)
    setBooleanLink(false)

   }
   function producto4(){
    let id = '4' 
    setIdalmacenador(id)
    setBooleanItems(true)
    setBooleanLink(false)

   }
   function producto5(){
    let id = '5' 
    setIdalmacenador(id)
    setBooleanItems(true)
    setBooleanLink(false)
   }
   function producto6(){
    let id = '6' 
    setIdalmacenador(id)
    setBooleanItems(true)
    setBooleanLink(false)

   }
   function producto7(){
    let id = '7' 
    setIdalmacenador(id)
    setBooleanItems(true)
    setBooleanLink(false)

   }
   function producto8(){
    let id = '8' 
    setIdalmacenador(id)
    setBooleanItems(true)
    setBooleanLink(false)
   }
   function producto9(){
    let id = '9' 
    setIdalmacenador(id)
    setBooleanItems(true)
    setBooleanLink(false)

   }
   function producto10(){
    let id = '10' 
    setIdalmacenador(id)
    setBooleanItems(true)
    setBooleanLink(false)
   }
   function producto11(){
    let id = '11' 
    setIdalmacenador(id)
    setBooleanItems(true)
    setBooleanLink(false)
   }
   function producto12(){
    let id = '12' 
    setIdalmacenador(id)
    setBooleanItems(true)
    setBooleanLink(false)
   }


    const [itemLista, setListaItems] = useState([])
    const [loading, setLoading] = useState(true)
const {productosId} =useParams()
const task = new Promise ((resuelto)=>{
  if (productosId === 'Carne'){
      setTimeout(()=>{
         resuelto(items.filter(carne=> carne.categoria===productosId))   
      },200)
  }
 else if (productosId === '1'){
    setTimeout(()=>{
       resuelto(items.filter(carne=> carne.id===productosId))   
    
    },200)
    
}
else if (productosId === '2'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },200)

}
else if (productosId === '3'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },200)
}

else if (productosId === '4'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },200)
}
else if (productosId === '5'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },200)
}
else if (productosId === '6'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },200)
}
else if (productosId === '7'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },200)
}
else if (productosId === '8'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },200)
}
else if (productosId === '9'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },200)
}
else if (productosId === '10'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },200)
}
else if (productosId === '11'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },200)
}
else if (productosId === '12'){
  setTimeout(()=>{
     resuelto(items.filter(carne=> carne.id===productosId))   
  },200)
}
  else if(productosId ==='Vegano'){
   
   setTimeout(()=>{
    
   resuelto(items.filter(vegano=> vegano.categoria===productosId)) 
   },200)
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
          {!loading && 
          <div id='listcontainer_containerflex'>
            <Link id='link_hamburguesas'  to="/productos/Carne">Hamburguesas</Link>
            <Link id='link_veganas'  to="/productos/Vegano">Hamburguesas Veganas</Link>
            <Link id='link_bebidas' to='/item/bebidas/'>Bebidas</Link>
          </div>
          }
            {loading && 
            <div style={{position:'relative',width:'20px',left:'50%',top:'355px'}}> 
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>}
             <ItemList idalmacenador={idalmacenador} loading = {loading} paramsId={productosId}  listaItems={itemLista} />  
          
          <h1 style={{position:'absolute',top:'350px',left:'35%',fontSize:'85px',color:'rgba(237,176,38,255)',zIndex:'+4100',fontFamily:'Raleway, sans-serif'}}>{props.greeting}</h1>
          {!loading && 
          <div>
        <Footer/>
          </div>
          }
        </div>

    )
}
//rgba(237,176,38,255)

export default ItemListContainer
