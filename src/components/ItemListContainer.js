import React from "react";
import { ItemCount } from "./ItemCount";

import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <ItemList />
      </div>
    </div>
  );
};
