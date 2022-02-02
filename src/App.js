import logo from "./logo.svg";
import "./App.css";
import PrimarySearchAppBar, { NavBar } from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Provider from "./context/LoadingContext";
import { useContext } from "react";
import Cart from "./components/Cart";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <PrimarySearchAppBar />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/Category/:categoriaId">
              <ItemListContainer />
            </Route>
            <Route exact path="/item/:idItem">
              <ItemDetailContainer></ItemDetailContainer>
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
