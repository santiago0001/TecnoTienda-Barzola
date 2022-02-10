import { CircularProgress } from "@material-ui/core";
import React from "react";

const LoadingProccess = () => {
  return (
    <div
      style={{
        color: "#3f51b5",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ paddingTop: "10%", width: "50%" }}>
          <div
            style={{
              display: "flex",

              justifyContent: "center",
              padding: "10px",
            }}
          >
            <CircularProgress size={80} />
          </div>

          <p style={{ fontSize: "5em" }}>
            <b>TECNOTIENDA</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingProccess;
