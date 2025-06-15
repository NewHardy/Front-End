import React from "react";

function Perfil({ imagenURL, nombre, children }) {
  return (
    <div className="container">
      <img src={imagenURL} alt="404" />
      <h2>{nombre}</h2>
      <p>{children}</p>
    </div>
  );
}

export default Perfil;
