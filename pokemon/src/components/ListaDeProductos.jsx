import React from "react";

const ListaDeProductos = ({ productos }) => {
  return (
    <div>
      {productos.map((item, index) => (
        <Producto
          key={index}
          nombre={item.nombre}
          precio={item.precio}
          descripcion={item.descripcion}
        />
      ))}
    </div>
  );
};
