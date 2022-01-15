import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar, { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div>
      <PrimarySearchAppBar />

      <ItemListContainer getting="Ofertas de la semana!" />


    </div>
  );
}

export default App;
