// Seccion Home
import Logo from './component/imagen/logo2.png'
import ImagenHome from './component/imagen/ImagenHome';
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer';
import Opacidad from './component/opacidad/Opacidad';
// Finalizacion de  Seccion Home

// ROUTE
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
// FINALIZACION DE ROUTE

// Fuentes,estilos, etc
import './App.css';
import ItemCount from './component/ItemCount/ItemCount';
import UseCartContext, { CartContext } from './component/Context/CartContext';
import Item from './component/Items/Item';
import ItemList from './component/Items/ItemList';
import ItemDetailContainer from './component/Items/ItemDetailContainer';
import { useContext,createContext, useEffect ,useState} from 'react';
// Finalizacion Fuentes,estilos, etc
const Detail =()=>{
  const {Itemcart,setItemCart}= useContext(CartContext)
  console.log(setItemCart)
  console.log(Itemcart)
  return (
    <div>
     
    </div>
  )
}

const ItemCart=()=>{
return (
  <div>
  <Detail/>
  </div>
)
}

function App() {
  useEffect(()=>{

  },[])
  return (
    <Router>
     <div className="App">
       <UseCartContext>
       <ItemCart/>
       <NavBar/>
            <Switch>
            
            <Route exact path='/'>
               <ImagenHome greeting='Burger House'/>
               <Opacidad/>
                <ItemListContainer /> 
               </Route>
               
               <Route exact path='/productos' >
                 <ItemListContainer/>
               </Route>
               <Route exact path="/productos/:productosId" >
                 <ItemListContainer/>
               </Route>
               <Route exact path="/productos/:Id" >
                 <ItemListContainer/>
               </Route>
               <Route exact path="/item/bebidas/" >
                 <ItemDetailContainer/>
               </Route>
            </Switch>
 
       </UseCartContext>

    
      </div>
    </Router>
  );
}

export default App;
