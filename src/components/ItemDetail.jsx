import { Box, Button, Card, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ItemCount } from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      display: "flex",
    },
    img: {
      objectFit: "scale-down",
      borderRadius: "20px",
      padding: "10px",
      maxWidth: "400px",
    },
    button: {
      backgroundColor: "#3483fa",
    },
  });

  const [IndexImg, SetIndexImg] = useState(0);

  const DisableBackImg = (index) => {
    return index === 0 ? true : false;
  };
  const DisableNextImg = (index, cantImg) => {
    return index < cantImg ? true : false;
  };
  const [counter, setCounter] = useState(1);
  const [AddDisabled, setAddDisabled] = useState(true);
  const [FinCompra, setFinCompra] = useState(false);

  const onAdd = () => {
    setAddDisabled(false);
    return alert("Usted ha agregado " + counter + " productos al carrito");
  };

  const add = () => {
    setCounter(counter + 1);
  };
  const reduce = () => {
    setCounter(counter + -1);
  };
  const disableAdd = () => {
    return counter >= item.stock ? true : false;
  };
  const disableReduce = () => {
    return counter <= 1 ? true : false;
  };

  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <img className={classes.img} src={item.srcimg} alt={item.title} />

        <div>
          <Box style={{ padding: "10px" }}>
            <h1>{item.title}</h1>
            <h1>$ {item.precio}</h1>
            Descripcion: {item.description}
          </Box>
          <Box style={{ padding: "10px", marginTop: "20px" }}>
            <div>
              {!FinCompra ? (
                <ItemCount
                  onAdd={onAdd}
                  add={add}
                  reduce={reduce}
                  disableAdd={disableAdd}
                  disableReduce={disableReduce}
                  stock={item.stock}
                  counter={counter}
                  id={item.id}
                  title={item.title}
                  precio={item.precio}
                  setFinCompra={setFinCompra}
                />
              ) : (
                <Link to="/cart">
                  <Button size="large" className={classes.button}>
                    Finalizar compra
                  </Button>
                </Link>
              )}
            </div>

            <h2>Llega mañana</h2>
            <p> Cantidad: 1 unidad ({item.stock} disponibles) </p>
          </Box>
        </div>
      </Card>
    </div>
  );
};

export default ItemDetail;
