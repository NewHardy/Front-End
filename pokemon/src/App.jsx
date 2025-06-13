import React from "react";
import ListaDeTarjetas from "./components/ListaDeTarjetas";
import ListaDeProductos from "./components/ListaDeProductos";
import Menu from "./components/menu";
import "./App.css";
const yes = [
  {
    text: "hello",
    url: "yes.com",
  },
  {
    text: "adios",
    url: "no.com",
  },
  {
    text: "cya",
    url: "maybe.com",
  },
  {
    text: "yesterday",
    url: "perhaps.com",
  },
];
function App() {
  return (
    <div className="App">
      <h1>Lista de Tarjetas</h1>
      <ListaDeTarjetas />
    </div>
  );
}

export default App;
