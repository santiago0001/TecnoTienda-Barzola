import React, { useState, useEffect } from "react";

import { getFirestore } from "../components/firebase/firebase";

export default function TestItemFirebase() {
  const [item, setItem] = useState({});

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    //PONER ACA EL ID DE SU DOCUMENTO
    const miItem = itemCollection.doc("FYP6yza6NLYnkkdLbhuM");

    miItem
      .get()
      .then((doc) => {
        /* console.log(doc.data());
        console.log(doc.id);

        console.log({ id: doc.id, ...doc.data() }); */

        if (!doc.exists) {
          console.log("no existe ese documento");
          return;
        }

        console.log("item found");
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <>{JSON.stringify(item)}</>;
}
