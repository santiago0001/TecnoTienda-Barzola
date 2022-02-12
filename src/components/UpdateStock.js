import React, { useState, useEffect, useContext } from "react";
import firebase from "firebase";
import { getFirestore } from "../components/firebase/firebase";
import { cartContext } from "../context/CartProvider";

export default function UpdateStock({ Productos }) {
  const { cart, deleteAll } = useContext(cartContext);
  useEffect(() => {
    cart.forEach((item) => {
      const db = getFirestore();
      const docRef = db.collection("items").doc(item.id);

      let updateStockItem = "";
      Productos.forEach((prod) => {
        if (prod.id === item.id) {
          updateStockItem = prod.stock - item.cantidad;
        }
      });

      docRef
        .update({ stock: updateStockItem })
        .then(() => {
          console.log("cambio el stock!");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  return <></>;
}
