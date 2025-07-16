import React from "react";
import "./producto.css";

const Producto = ({ nombre, precio, descripcion }) => {
  return (
    <div className="box">
      <h2>{nombre}</h2>
      <p className="price">Precio:{precio}$</p>
      <p>{descripcion}</p>
    </div>
  );
};

export default Producto;
