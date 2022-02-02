import React, { useState, useEffect } from "react";
import { ItemProducto } from "./ItemPoducto";

export const ItemList = ({ category }) => {
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
          {Productos.map((item) =>
            category ? (
              category == item.category && (
                <div
                  style={{
                    display: "inline-block",
                    padding: "10px"
                    
                  }}
                >
                  <ItemProducto item={item} />
                </div>
              )
            ) : (
              <div style={{ display: "inline-block", padding: "10px" }}>
                <ItemProducto item={item} />
              </div>
            )
          )}
        </li>
      </ul>
    </div>
  );
};
