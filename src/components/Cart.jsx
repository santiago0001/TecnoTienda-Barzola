import React, { useContext } from "react";

import BasicTable from "./TableCart";
const Cart = () => {
  
  return (
    <div>
      <h1>Soy el carrito</h1>
      Tenes cargado:
      <BasicTable></BasicTable>
    </div>
  );
};

export default Cart;
