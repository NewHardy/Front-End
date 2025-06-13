import React from "react";

function enlace({ text, url }) {
  return (
    <li className="Enlace">
      <a href={url}>{text}</a>
    </li>
  );
}

export default enlace;
