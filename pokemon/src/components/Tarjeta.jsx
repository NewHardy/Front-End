import React from "react";
import "./Tarjeta.css";

const Tarjeta = ({ nombre, apellido, trabajo, imagenURL }) => {
  return (
    <div className="tarjeta">
      <img src={imagenURL} alt={`def`} />
      <div className="content">
        <h2>
          {nombre} {apellido}
        </h2>
        <p>{trabajo}</p>
      </div>
    </div>
  );
};

export default Tarjeta;
