import React from "react";

const Tarjeta = ({ nombre, apellido, trabajo, imagenURL }) => {
  return (
    <div className="tarjeta">
      <img src={imagenURL} alt={`def`} />
      <h2>
        {nombre} {apellido}
      </h2>
      <p>{trabajo}</p>
    </div>
  );
};
