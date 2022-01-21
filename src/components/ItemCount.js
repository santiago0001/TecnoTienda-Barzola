import React, { useState } from "react";
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";

export const ItemCount = ({ item }) => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    CarCount: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    Center: { display: "flex", justifyContent: "center" },
    img: { width: "50%" },
    buttonAdd: { fontSize: "30px" },
    ButtonRest: { fontSize: "50px" },

    ButtonAgregar: {
      backgroundColor: "rgba(65,137,230,.15)",
      padding: "10px 20px 10px;",
    },
    padding10: { padding: "10px" },
  });

  console.log(item);
  const [counter, setCounter] = useState(1);
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
  const onAdd = () => {
    return alert("Usted ha agregado " + counter + " productos al carrito");
  };
  const classes = useStyles();

  return (
    <>
      <div>
        <Card className={classes.root}>
          <Box className={classes.Center}>
            <Typography variant="h5" component="h2">
              {item.title}
            </Typography>
          </Box>
          <Box>
            <img className={classes.img} src={item.srcimg} alt={item.title} />
            <br />
            {item.description}
          </Box>
          <CardContent>
            {item.stock === counter && (
              <p style={{ color: "red" }}>* Llego al stock maximo</p>
            )}
            <Box className={classes.CarCount}>
              <Button
                className={classes.ButtonRest}
                onClick={reduce}
                disabled={disableReduce()}
              >
                -
              </Button>
              <p>{counter}</p>
              <Button
                className={classes.buttonAdd}
                onClick={add}
                disabled={disableAdd()}
              >
                +
              </Button>
            </Box>
          </CardContent>

          <Box className={classes.Center} style={{ padding: "0px 10px 10px" }}>
            <Button className={classes.ButtonAgregar} onClick={onAdd}>
              Agregar al carrito
            </Button>
          </Box>
        </Card>
      </div>
    </>
  );
};
