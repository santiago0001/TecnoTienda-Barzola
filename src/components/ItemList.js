import React, { useState, useEffect } from "react";
import { ItemCount } from "./ItemCount";

export const ItemList = () => {
  const [arrayDeProductos, setArrayDeProductos] = useState([]);

  const stockDeProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          title: "Teclado",
          stock: 5,
          description: "Teclado gamer made in china",
          srcimg:
            "https://www.tiendaplayon.com/365-large_default/jr-teclado-mec%C3%A1nico-kx410tkl.jpg",
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
          description: "Silla gamer cuero ",
          srcimg:
            "https://http2.mlstatic.com/D_NQ_NP_926092-MLA46178657119_052021-V.webp",
        },
        {
          title: "Teclado",
          stock: 5,
          description: "Teclado gamer made in china",
          srcimg:
            "https://www.tiendaplayon.com/365-large_default/jr-teclado-mec%C3%A1nico-kx410tkl.jpg",
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
          description: "Silla gamer cuero ",
          srcimg:
            "https://http2.mlstatic.com/D_NQ_NP_926092-MLA46178657119_052021-V.webp",
        },
        {
          title: "Teclado",
          stock: 5,
          description: "Teclado gamer made in china",
          srcimg:
            "https://www.tiendaplayon.com/365-large_default/jr-teclado-mec%C3%A1nico-kx410tkl.jpg",
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
          description: "Silla gamer cuero ",
          srcimg:
            "https://http2.mlstatic.com/D_NQ_NP_926092-MLA46178657119_052021-V.webp",
        },
        {
          title: "Teclado",
          stock: 5,
          description: "Teclado gamer made in china",
          srcimg:
            "https://www.tiendaplayon.com/365-large_default/jr-teclado-mec%C3%A1nico-kx410tkl.jpg",
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
          description: "Silla gamer cuero ",
          srcimg:
            "https://http2.mlstatic.com/D_NQ_NP_926092-MLA46178657119_052021-V.webp",
        },
        {
          title: "Teclado",
          stock: 5,
          description: "Teclado gamer made in china",
          srcimg:
            "https://www.tiendaplayon.com/365-large_default/jr-teclado-mec%C3%A1nico-kx410tkl.jpg",
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
          description: "Silla gamer cuero ",
          srcimg:
            "https://http2.mlstatic.com/D_NQ_NP_926092-MLA46178657119_052021-V.webp",
        },
        {
          title: "Teclado",
          stock: 5,
          description: "Teclado gamer made in china",
          srcimg:
            "https://www.tiendaplayon.com/365-large_default/jr-teclado-mec%C3%A1nico-kx410tkl.jpg",
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
          description: "Silla gamer cuero ",
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
        <li style={{ listStyle: "none" }}>
          {arrayDeProductos.map((item) => (
            <div style={{ display: "inline-block", padding: "10px" }}>
              <ItemCount item={item} />
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};
