
import './App.css';
import NavBar from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css' 
import ItemListContainer from './component/ItemListContainer';

function App() {
  return (
    <div className="App">
         <NavBar/>
         <ItemListContainer/>
    </div>
  );
}

export default App;
