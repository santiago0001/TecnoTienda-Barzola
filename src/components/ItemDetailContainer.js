import React, { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [arrayDeProductos, setArrayDeProductos] = useState([]);

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          title: "Samsung Galaxy Z Flip",
          stock: 500,
          precio: "200.000",
          description: { memoria: "200gb", sim: "Dual Sim", Ram: "6 GB" },

          srcimg: [
            "https://m.media-amazon.com/images/I/416fm1ITV6L._AC_SS450_.jpg",
            "https://m.media-amazon.com/images/I/41eayE0KpdL._AC_.jpg",
            "https://m.media-amazon.com/images/I/31qLWb2mX0L._AC_.jpg",
            "https://m.media-amazon.com/images/I/317ad3qdo+L._AC_.jpg",
          ],
        },
      ]);
    }, 2000);
  });

  useEffect(() => {
    getItem.then((res) => {
      setArrayDeProductos(res);
    });
  }, []);

  return (
    <div>
      <ul>
        <li style={{ listStyle: "none" }}>
          {arrayDeProductos.map((item) => (
            <div>
              <ItemDetail item={item} />
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default ItemDetailContainer;
