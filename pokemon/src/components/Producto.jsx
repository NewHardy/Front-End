import React from "react";

const Producto = ({ nombre, precio, descripcion }) => {
  return (
    <div>
      <h2>{nombre}</h2>
      <p>Precio:{precio}$</p>
      <p>{descripcion}</p>
    </div>
  );
};
