import { Box, Button, Card, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const ItemDetail = ({ item }) => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      display: "flex",
    },
    img: {
      borderRadius: "20px",
      padding: "10px",
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

  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <Button
          disabled={DisableBackImg(IndexImg)}
          onClick={() => SetIndexImg(IndexImg - 1)}
        >
          <ArrowBackIosIcon />
        </Button>
        <img
          className={classes.img}
          src={item.srcimg[IndexImg]}
          alt={item.title}
        />
        <Button onClick={() => SetIndexImg(IndexImg + 1)}>
          <NavigateNextIcon />
        </Button>
        <Box style={{ padding: "10px" }}>
          <h1>{item.title}</h1>
          <h1>$ {item.precio}</h1>
          Almacenamiento: <h3>{item.description.memoria}</h3>
          Sim: <h3>{item.description.sim}</h3>
          RAM: <h3>{item.description.Ram}</h3>
        </Box>
        <Box style={{ padding: "10px", marginTop: "200px" }}>
          <h2>Llega mañana</h2>
          <p> Cantidad: 1 unidad ({item.stock}disponibles) </p>
          <Button size="large" color="primary">
            Comprar ahora
          </Button>
        </Box>
      </Card>
    </div>
  );
};

export default ItemDetail;
