import React from "react";
import Perfil from "./Perfil";

function ListaDePerfiles({ perfiles }) {
  return (
    <div className="LsitaDePerfiles">
      {perfiles.map((perfil, index) => (
        <Perfil key={index} imagenURL={perfil.imagenURL} nombre={perfil.nombre}>
          {perfil.descripcion}
        </Perfil>
      ))}
    </div>
  );
}

export default ListaDePerfiles;
