// Seccion Home
import ImagenHome from './component/imagen/ImagenHome';
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer';
import Opacidad from './component/opacidad/Opacidad';
import 'bootstrap/dist/css/bootstrap.min.css';
// Finalizacion de  Seccion Home

// ROUTE
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// FINALIZACION DE ROUTE

// Fuentes,estilos, etc
import './App.css';
import UseCartContext from './component/Context/CartContext';
import ItemDetailContainer from './component/Items/ItemDetailContainer';
import { useEffect } from 'react';
import CartContextProvider from './component/Context/CartContext';
import Cart from './component/Cart/Cart';
import Sucursales from './component/Sucursales/Sucursales';
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
  <CartContextProvider >
    <Router>
     <div className="App">
    
       <UseCartContext>
       <ItemCart/>
       <NavBar/>
            <Switch>
            
            <Route exact path='/'>
               <ImagenHome greeting='Burger House'/>
               <Opacidad/>
               </Route>
               <Route exact path='/sucursales'>
                 <Sucursales/>
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
    </CartContextProvider>
  );
}

export default App;
