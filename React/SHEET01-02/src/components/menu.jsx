import React from "react";
import Enlace from "./Enlace";

function Menu({ yes }) {
  return (
    <ul>
      {yes.map((enlace, index) => (
        <Enlace key={index} text={enlace.text} url={enlace.url} />
      ))}
    </ul>
  );
}

export default Menu;
