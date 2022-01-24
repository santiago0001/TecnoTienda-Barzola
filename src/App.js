import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar, { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div>
      <PrimarySearchAppBar />

      <ItemDetailContainer></ItemDetailContainer>
      <ItemListContainer getting="Ofertas de la semana!" />
    </div>
  );
}

export default App;
