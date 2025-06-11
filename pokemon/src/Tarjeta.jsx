import React from "react";

function createCard({ nombre, apellido, ocupacion, imagenURL }) {
  return (
    <div>
      <h2>{nombre}</h2>
      <h3>{apellido}</h3>
      <p>{ocupacion}</p>
      <img>{imagenURL}</img>
    </div>
  );
}

function renderCards(tarejta) {
  return (
    <ul>
      <li>{tarejta}</li>
      <li>{tarejta}</li>
      <li>{tarejta}</li>
      <li>{tarejta}</li>
      <li>{tarejta}</li>
    </ul>
  );
}

renderCards(createCard());
