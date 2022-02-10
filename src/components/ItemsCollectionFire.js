import React, { useState, useEffect } from "react";
import { getFirestore } from "../components/firebase/firebase";
import LoadingProccess from "../LoadingProccess";
import { ItemProducto } from "./ItemPoducto";

export default function ItemsCollectionFire({ category }) {
  const [Productos, setProductos] = useState([]);
  const [items, setItems] = useState({});
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
            {Productos.map((item) =>
              category ? (
                category === item.category && (
                  <div
                    style={{
                      display: "inline-block",
                      padding: "10px",
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
      ) : (
        <div>
          <LoadingProccess />
        </div>
      )}
    </div>
  );
}
