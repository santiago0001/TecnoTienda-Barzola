import React, { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";

export const ItemList = () => {
  const [arrayDeProductos, setArrayDeProductos] = useState([]);

  const stockDeProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          title: "Dune",
          stock: 5,
          description: "Teclado gamer made in china",
          srcimg:
            "data:image/jpeg;base64,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",
        },
        {
          title: "Mouse gamer",
          stock: 10,
          description: "Mouse importado",
          srcimg:
            "https://http2.mlstatic.com/D_NQ_NP_966913-MLA32149634914_092019-V.webp",
        },
        {
          title: "Silla gamer",
          stock: 5,
          description: "",
          srcimg:
            "https://http2.mlstatic.com/D_NQ_NP_926092-MLA46178657119_052021-V.webp",
        },
      ]);
    }, 2000);
  });

  useEffect(() => {
    stockDeProductos.then((res) => {
      setArrayDeProductos(res);
    });
  }, []);

  return (
    <div>
      <ul>
        <li>
          {arrayDeProductos.map((item) => (
            <div style={{ display: "inline-block" }}>
              <ItemCount item={item} />
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};