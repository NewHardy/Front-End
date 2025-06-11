import React from "react";

const personas = [
  {
    nombre: "Ana",
    apellido: "López",
    trabajo: "Diseñadora UX",
    imagenURL: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    nombre: "Carlos",
    apellido: "Pérez",
    trabajo: "Desarrollador Fullstack",
    imagenURL: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    nombre: "Luisa",
    apellido: "Martínez",
    trabajo: "Ingeniera de datos",
    imagenURL: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const ListaDeTarjetas = () => {
  return (
    <div>
      {personas.map((persona, index) => (
        <Tarjeta key={index} {...persona} />
      ))}
    </div>
  );
};
