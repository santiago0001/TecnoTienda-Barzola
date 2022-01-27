import React, { useContext } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ItemCount } from "./ItemCount";

import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
  const { categoriaId } = useParams();

  return (
    <div>
      <div style={{ display: "flex" }}>
        <ItemList category={categoriaId} />
      </div>
    </div>
  );
};
