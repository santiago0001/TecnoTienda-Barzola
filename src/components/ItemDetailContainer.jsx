import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../components/firebase/firebase";
import LoadingProccess from "../LoadingProccess";
const ItemDetailContainer = () => {
  const [arrayDeProductos, setArrayDeProductos] = useState([]);
  const { idItem } = useParams();
  const [Productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const itemCollection = db.collection("items");
    //.where('category', '==', 'adidas');

    itemCollection
      .get()
      .then((querySnapShot) => {
        if (querySnapShot.size == 0) {
          console.log("no hay documentos con en ese query");
          return;
        }

        console.log("hay documentos");

        //console.log(querySnapShot.docs);

        setProductos(
          querySnapShot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {!loading ? (
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
      ) : (
        <div>
          <LoadingProccess />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
