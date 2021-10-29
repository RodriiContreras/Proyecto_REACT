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
import { useContext, useEffect ,useState} from 'react';
import CartContextProvider from './component/Context/CartContext';
import ProductContextProvider from './component/Context/ProductsContext';
import Cart from './component/Cart/Cart';
// Finalizacion Fuentes,estilos, etc
const Detail =()=>{
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
    <CartContextProvider>
  <ProductContextProvider>
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
               <Route exact path="/cart" >
                <Cart/>
               </Route>
            </Switch>
          
       </UseCartContext>


      </div>
    </Router>
    </ProductContextProvider>
    </CartContextProvider>
  );
}

export default App;
