import React from "react";
import ListaDeTarjetas from "./components/ListaDeTarjetas";
import ListaDeProductos from "./components/ListaDeProductos";
import Menu from "./components/menu";
import ListaDePerfiles from "./components/ListaDePerfiles";
import Ex1 from "./useState/Ex1";
import Ex2 from "./useState/Ex2";
import Ex3 from "./useState/Ex3";
import Ex4 from "./useState/Ex4";
import Ex5 from "./useState/Ex5";
import Ex6 from "./useState/Ex6";
//import Ex7 from "./useState/Ex7";
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
      <Ex6 />
    </div>
  );
}

export default App;
