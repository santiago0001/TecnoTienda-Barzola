import React from "react";
import ItemCount from "./ItemCount";

export const ItemListContainer = (props) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ItemCount
          srcimg="https://images-na.ssl-images-amazon.com/images/I/41l64yALfpL.jpg"
          title="Teclado gamer"
          value="1"
          stock={10}
        />
      </div>
    </div>
  );
};
