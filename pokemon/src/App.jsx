import React from "react";
import ListaDeTarjetas from "./components/ListaDeTarjetas";
import ListaDeProductos from "./components/ListaDeProductos";
import Menu from "./components/menu";
import ListaDePerfiles from "./components/ListaDePerfiles";
import "./App.css";
const perfiles = [
  {
    imagenURL: "https://randomuser.me/api/portraits/men/1.jpg",
    nombre: "Carlos",
    descripcion: "Sin trabajo",
  },
  {
    imagenURL: "https://randomuser.me/api/portraits/men/2.jpg",
    nombre: "Juan",
    descripcion: "Programador",
  },
  {
    imagenURL: "https://randomuser.me/api/portraits/men/3.jpg",
    nombre: "Pedro",
    descripcion: "Desarrollador fullstack",
  },
];
function App() {
  return (
    <div className="App">
      <h1>Lista de Perfiles</h1>
      <ListaDePerfiles perfiles={perfiles} />
    </div>
  );
}

export default App;
