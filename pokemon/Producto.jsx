import React from "react";

function createProduct(nombre, precio, descripcion) {
  return (
    <div>
      <h1>{nombre}</h1>
      <h3>{precio}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

function productList(arrayProductos) {
  return (
    <ul>
      <Producto {...arrayProductos[0]} />
      <Producto {...arrayProductos[1]} />
      <Producto {...arrayProductos[2]} />
    </ul>
  );
}
