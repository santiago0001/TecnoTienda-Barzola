import React, { useContext, useEffect } from "react";
import { cartContext } from "../context/CartProvider";
import { Link } from "react-router-dom";
import { Box, Button, ButtonBase, Card, makeStyles } from "@material-ui/core";
import CreateOrder from "../components/CreateOrder";
import {
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { useState } from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function BasicTable() {
  const { cart, deleteItem, deleteAll, Total, setTotal } =
    useContext(cartContext);
  const [step, setStep] = useState(0);

  const useStyles = makeStyles({
    button: {
      backgroundColor: "#3483fa",
    },
  });
  const classes = useStyles();

  useEffect(() => {
    setTotal(0);
    let total = 0;
    cart.forEach((element) => {
      const aux = element.cantidad * element.precio;
      total = total + aux;
      setTotal(total);
      console.log(element);
    });
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        step === 0 ? (
          <div>
            Tenes cargado:
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Producto</TableCell>
                    <TableCell align="right">Precio</TableCell>
                    <TableCell align="right">Cantidad</TableCell>

                    <TableCell align="right">----</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((row) => (
                    <TableRow
                      key={row.title}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell align="right">{row.precio}</TableCell>
                      <TableCell align="right">{row.cantidad}</TableCell>
                      <TableCell align="right">
                        <button
                          value={row.id}
                          onClick={() => deleteItem(row.id)}
                        >
                          Eliminar
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <button onClick={() => deleteAll()}>Vaciar carrito</button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <h1 style={{ paddingRight: "50px" }}>TOTAL: ${Total}</h1>
              <button
                style={{
                  display: "flex",
                  maxHeight: "30px",
                  fontSize: "20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => setStep(1)}
              >
                Continuar
              </button>
            </div>
          </div>
        ) : (
          <CreateOrder setStep={setStep} />
        )
      ) : (
        <div>
          <h1>Carrito sin productos. </h1>
          <Link to="/">
            <Button size="large" className={classes.button}>
              Ir a comprar
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
