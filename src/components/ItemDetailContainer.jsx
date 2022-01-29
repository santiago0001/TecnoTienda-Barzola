import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [arrayDeProductos, setArrayDeProductos] = useState([]);
  const { idItem } = useParams();
  const [Productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("../json/productos.json")
      .then((response) => response.json())
      .then((datos) => {
        setProductos(datos);
      });
  }, []);

  console.log(Productos);

  return (
    <div>
      <ul>
        <li style={{ listStyle: "none" }}>
          {Productos.map(
            (item) =>
              idItem == item.id && (
                <div>
                  <ItemDetail item={item} />
                </div>
              )
          )}
        </li>
      </ul>
    </div>
  );
};

export default ItemDetailContainer;
