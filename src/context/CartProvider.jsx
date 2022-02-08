import React, { createContext, useState } from "react";
export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [Total, setTotal] = useState();

  const deleteItem = (id) => {
    let newArray = cart.filter((item) => item.id !== id);
    setTotal(0);
    setCart(newArray);
  };

  const deleteAll = (id) => {
    setCart([]);
    setTotal(0);
  };

  const isInCart = (id) => {
    return cart.some((element) => element.id == id);
  };

  const AddCart = (item, counter) => {
    if (isInCart(item.id)) {
      const indexItem = cart.findIndex((ele) => ele.id === item.id);
      cart[indexItem].cantidad = cart[indexItem].cantidad + counter;
      setCart([...cart]);
    } else {
      setCart([...cart, item]);
    }
    alert("Usted ha agregado " + counter + " productos al carrito");
  };

  return (
    <cartContext.Provider
      value={{ cart, setCart, deleteItem, deleteAll, AddCart, Total, setTotal }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
