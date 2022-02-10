import React, { useContext } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ItemsCollectionFire from "./ItemsCollectionFire";


import { ItemList } from "./ItemList";
import TestItemFirebase from "./TestItemBase";

export const ItemListContainer = (props) => {
  const { categoriaId } = useParams();

  return (
    <div>
      <ItemsCollectionFire category={categoriaId} />
    </div>
  );
};
