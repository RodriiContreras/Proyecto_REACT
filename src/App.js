import Logo from './component/imagen/logo2.png'
import './App.css';
import NavBar from './component/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css' 
import ItemListContainer from './component/ItemListContainer';
import Opacidad from './component/opacidad/Opacidad';
import ImagenHome from './component/imagen/ImagenHome';


function App() {
  return (
    <div className="App">
     <a href={'#'}><img style={{position:'absolute',width:'90px',left:'40px'}} src={Logo}></img></a> 
         <NavBar/>
         <Opacidad/>
         <ImagenHome />
         {/* <img style={{width:'99.14vw',height:'95vh',margin:'0'}} src={imagen1}/> */}
          <ItemListContainer greeting='Burger House'/>

    </div>
  );
}

export default App;
