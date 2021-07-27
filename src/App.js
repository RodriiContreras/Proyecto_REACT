// Seccion Home
import Logo from './component/imagen/logo2.png'
import ImagenHome from './component/imagen/ImagenHome';
import NavBar from './component/NavBar/NavBar';
import ItemListContainer from './component/ItemListContainer';
import Opacidad from './component/opacidad/Opacidad';
// Finalizacion de  Seccion Home

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
    <div className="App">
     <a href={'#'}><img style={{position:'absolute',width:'90px',left:'40px'}} src={Logo}></img></a> 
         <NavBar/>
         <Opacidad/>
         <ImagenHome />
          <ItemListContainer greeting='Burger House'/>

    </div>
  );
}

export default App;
