import React from "react";
import ListaDeTarjetas from "./components/ListaDeTarjetas";
import "./App.css";

function App() {
  const productos = [
    {
      nombre: "Camiseta",
      precio: 19.99,
      descripcion: "Camiseta de algodón 100% orgánico.",
    },
    {
      nombre: "Pantalones",
      precio: 39.99,
      descripcion: "Pantalones cómodos para uso diario.",
    },
    {
      nombre: "Zapatos deportivos",
      precio: 59.99,
      descripcion: "Perfectos para correr o caminar largas distancias.",
    },
  ];

  return (
    <div className="App">
      <h1>Lista de Productos</h1>
      <ListaDeProductos productos={productos} />
    </div>
  );
}

export default App;
