import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Input } from "@material-ui/core";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    width: "30%",
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
  img: { width: "80%" },
  buttonAdd: { fontSize: "30px" },
  ButtonRest: { fontSize: "50px" },
  imputCount: { border: "none", width: "30px", textAlign: "end" },
  ButtonAgregar: {
    backgroundColor: "rgba(65,137,230,.15)",
    padding: "10px 20px 10px;",
  },
  padding10: { padding: "10px" },
});

export default function ItemCount(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [Stock, SetStock] = useState(props.stock);
  const [Carrito, SetCarrito] = useState(1);

  const takeOut = () => {
    SetCarrito(Carrito - 1);
  };
  const disabletakeOut = () => {
    return Carrito < 1 ? true : false;
  };
  const OnAdd = () => {
    SetCarrito(Carrito + 1);
  };
  const disabledOnAdd = () => {
    return Carrito >= Stock ? true : false;
  };

  return (
    <Card className={classes.root}>
      <Box className={classes.Center}>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
      </Box>
      <Box className={classes.Center}>
        <img className={classes.img} src={props.srcimg} />
      </Box>

      <CardContent>
        {Stock === Carrito && (
          <p style={{ color: "red" }}>* Llego al stock maximo</p>
        )}
        <Box className={classes.CarCount}>
          <Button
            disabled={disabletakeOut()}
            onClick={() => takeOut()}
            className={classes.ButtonRest}
          >
            -
          </Button>
          <Input
            className={classes.imputCount}
            value={Carrito}
            variant="standard"
          ></Input>
          <Button
            disabled={disabledOnAdd()}
            onClick={() => OnAdd()}
            className={classes.buttonAdd}
          >
            +
          </Button>
        </Box>
      </CardContent>
      <Box className={classes.Center} style={{ padding: "0px 10px 10px" }}>
        <Button
          disabled={disabletakeOut()}
          color="primary"
          className={classes.ButtonAgregar}
        >
          Agregar al carrito
        </Button>
      </Box>
    </Card>
  );
}
