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
import 'bootstrap/dist/css/bootstrap.min.css' 
import ItemCount from './component/ItemCount/ItemCount';
import Item from './component/Items/Item';
import ItemList from './component/Items/ItemList';
import ItemDetailContainer from './component/Items/ItemDetailContainer';
// Finalizacion Fuentes,estilos, etc



function App() {

//  }
  return (
    <Router>
     <div className="App">
     <NavBar/>
            <Switch>
            
            <Route exact path='/'>
               <ImagenHome greeting='Burger House'/>
               <Opacidad/>
               {/* <ItemListContainer /> */}
               </Route>
               <Route exact path='/productos' >
                 <ItemListContainer/>
               </Route>
               <Route exact path="/productos/:productosId" >
                 <ItemListContainer/>
               </Route>
               <Route exact path="/item/bebidas/" >
                 <ItemDetailContainer/>
               </Route>
               <Route exact path="/item/bebidas/:Id" >
                 <ItemDetailContainer/>
               </Route>
            </Switch>
      </div>
    </Router>
  );
}

export default App;
