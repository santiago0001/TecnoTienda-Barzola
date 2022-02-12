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

  const nameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  function handleClick() {
    setLoading(true);
    const db = getFirestore();
    const orders = db.collection("orders");

    const miOrden = {
      buyer: {
        name: nameRef.current.value,
        address: addressRef.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
        email: emailRef.current.value,
        mobile: mobileRef.current.value,
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
            ref={nameRef}
            placeholder="Nombre y Apelllido"
          />
          <br />

          <input
            type="text"
            name="mobile"
            ref={mobileRef}
            placeholder="Nro de Celular"
          />
          <br />

          <input type="text" name="email" ref={emailRef} placeholder="Email" />
          <br />

          <input
            type="text"
            name="state"
            ref={stateRef}
            placeholder="Provincia"
          />
          <br />

          <input type="text" name="city" ref={cityRef} placeholder="Ciudad" />
          <br />

          <input
            type="text"
            name="address"
            ref={addressRef}
            placeholder="Direccion"
          />
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
