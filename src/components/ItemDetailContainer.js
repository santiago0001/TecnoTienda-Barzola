import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [arrayDeProductos, setArrayDeProductos] = useState([]);
  const { idItem } = useParams();
  console.log(idItem);

  const getItem = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          title: "Samsung Galaxy Z Flip",
          stock: 500,
          category: "celulares",
          precio: "200.000",
          description: "celular tactil",
          srcimg:
            "https://m.media-amazon.com/images/I/416fm1ITV6L._AC_SS450_.jpg",
          id: 1,
        },
        {
          title: "Xiaomi Mi 11 Lite 5G ",
          stock: 300,
          category: "celulares",
          precio: "80.000",
          description:
            "Experiencia visual increíble Mirá tus series y películas favoritas con la mejor definición a través de su pantalla AMOLED de 6.55. Disfrutá de colores brillantes y detalles precisos en todos tus contenidos.",
          srcimg:
            "https://http2.mlstatic.com/D_NQ_NP_797325-MLA48495988639_122021-O.webp",
          id: 5,
        },
        {
          title: "Xiaomi Redmi Note 9 Pro ",
          stock: 300,
          category: "celulares",
          precio: "80.000",
          description:
            "Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.",
          srcimg:
            "https://http2.mlstatic.com/D_NQ_NP_991678-MLA45878240428_052021-O.webp",
          id: 6,
        },
        {
          title: "Teclado",
          stock: 5,
          category: "Perifericos",
          precio: "90.000",
          description: "Teclado gamer made in china",
          srcimg:
            "https://www.tiendaplayon.com/365-large_default/jr-teclado-mec%C3%A1nico-kx410tkl.jpg",
          id: 2,
        },
        {
          title: "Mouse gamer",
          stock: 10,
          category: "Perifericos",
          precio: "200.000",
          description: "Mouse importado",
          srcimg:
            "https://http2.mlstatic.com/D_NQ_NP_966913-MLA32149634914_092019-V.webp",
          id: 3,
        },
        {
          title: "Silla gamer",
          stock: 5,
          category: "Otros",
          precio: "200.000",
          description: "Silla gamer cuero ",
          srcimg:
            "https://http2.mlstatic.com/D_NQ_NP_926092-MLA46178657119_052021-V.webp",
          id: 4,
        },
        {
          title: "Pc  Gamer Amd Ryzen 5 ",
          stock: 7,
          category: "Otros",
          precio: "200.000",
          description:
            "- MICRO PROCESADOR: AMD Ryzen 5 5600G 6/12 NUCLEOS 4.4GHZ... - PLACA DE VIDEO INCORPORADA RADEON VEGA RX... - MOTHER: ASUS B450M-A II PRIME PCI 3.0 USB 3.1... - DISCO SSD: 480GB SATA3 ADATA 500MBs... ",
          srcimg:
            "https://http2.mlstatic.com/D_NQ_NP_909897-MLA31193856811_062019-O.webp",
          id: 7,
        },
      ]);
    }, 0);
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
          {arrayDeProductos.map(
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
