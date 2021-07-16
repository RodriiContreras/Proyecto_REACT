
import './App.css';
import NavBar from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css' 
import ItemListContainer from './component/ItemListContainer';

function App() {
  return (
    <div className="App">
         <NavBar/>
         <ItemListContainer greeting='Bienvenidos a mi pagina web'/>
    </div>
  );
}

export default App;
