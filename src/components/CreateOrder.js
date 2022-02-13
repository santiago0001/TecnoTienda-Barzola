import React, { useState, useContext, useRef } from "react";
import firebase from "firebase";
import { getFirestore } from "../components/firebase/firebase";
import { cartContext } from "../context/CartProvider";
import UpdateStock from "../components/UpdateStock";
import LoadingProccess from "../LoadingProccess";

export default function TestForm({ setStep }) {
  const [orderId, setOrderId] = useState("");
  const { cart } = useContext(cartContext);
  const [Productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [Name, SetName] = useState();
  const [addressRef, SetaddressRef] = useState();
  const [cityRef, SetcityRef] = useState();
  const [emailRef, SetemailRef] = useState();
  const [stateRef, SestateRef] = useState();
  const [mobileRef, SetmobileRef] = useState();
  const [Warning, SetWarning] = useState(false);

  // const nameRef = useRef();
  // const addressRef = useRef();
  // const cityRef = useRef();
  // const stateRef = useRef();
  // const emailRef = useRef();
  // const mobileRef = useRef();
  const FormComplet = () => {
    if (Name && addressRef && cityRef && stateRef && mobileRef) {
      return true;
    } else {
      return false;
    }
  };

  function handleClick() {
    SetWarning(true);
    if (FormComplet()) {
      setLoading(true);
      const db = getFirestore();
      const orders = db.collection("orders");

      const miOrden = {
        buyer: {
          name: Name,
          address: addressRef,
          city: cityRef,
          state: stateRef,
          email: emailRef,
          mobile: mobileRef,
        },
        items: cart,
        total: 1500,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
      };

      orders
        .add(miOrden)
        .then(({ id }) => {
          console.log("orden ingresada: " + id);
          setOrderId(id);
        })
        .catch((err) => {
          console.log(err);
        });

      const itemCollection = db.collection("items");

      itemCollection
        .get()
        .then((querySnapShot) => {
          if (querySnapShot.size == 0) {
            console.log("no hay documentos con en ese query");
            return;
          }

          console.log("hay documentos");

          //console.log(querySnapShot.docs);

          setProductos(
            querySnapShot.docs.map((doc) => {
              return { id: doc.id, ...doc.data() };
            })
          );
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <>
      {loading && <LoadingProccess />}
      {orderId && !loading ? (
        <div>
          <h1>Felicitaciones tu order es {orderId}</h1>{" "}
          <UpdateStock Productos={Productos} />
        </div>
      ) : (
        <div style={{ paddingLeft: "100px" }}>
          <h3>Ingresa tus datos:</h3>
          <input
            type="text"
            name="name"
            placeholder="Nombre y Apelllido"
            onChange={(event) => SetName(event.target.value)}
          />
          {!Name && Warning && (
            <span style={{ color: "red" }}> Falta completar</span>
          )}
          <br />
          <input
            type="text"
            name="mobile"
            placeholder="Nro de Celular"
            onChange={(event) => SetmobileRef(event.target.value)}
          />
          {!mobileRef && Warning && (
            <span style={{ color: "red" }}> Falta completar</span>
          )}
          <br />
          <input
            type="text"
            name="state"
            placeholder="Provincia"
            onChange={(event) => SestateRef(event.target.value)}
          />{" "}
          {!stateRef && Warning && (
            <span style={{ color: "red" }}> Falta completar</span>
          )}
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(event) => SetemailRef(event.target.value)}
          />{" "}
          {!emailRef && Warning && (
            <span style={{ color: "red" }}> Falta completar</span>
          )}
          <br />
          <input
            type="text"
            name="city"
            placeholder="Ciudad"
            onChange={(event) => SetcityRef(event.target.value)}
          />{" "}
          {!cityRef && Warning && (
            <span style={{ color: "red" }}> Falta completar</span>
          )}
          <br />
          <input
            type="text"
            name="address"
            placeholder="Direccion"
            onChange={(event) => SetaddressRef(event.target.value)}
          />{" "}
          {!addressRef && Warning && (
            <span style={{ color: "red" }}> Falta completar</span>
          )}
          <br />
          <div style={{ paddingTop: "30px" }}>
            <button style={{ cursor: "pointer" }} onClick={() => setStep(0)}>
              Atras
            </button>
            <span style={{ padding: "30px" }}></span>
            <button style={{ cursor: "pointer" }} onClick={() => handleClick()}>
              Vamos!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
