import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return (
  <div>
    <NavBar/>
    
    <ItemListContainer getting="Ofertas de la semana!"/>
  </div>
  );
}

export default App;
