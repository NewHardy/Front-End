import React, { useState } from "react";

function Semaforo() {
  const [color, changeColor] = useState("");
  const colours = ["red", "yellow", "green"];
  function nextColor() {}
  return (
    <div id="box">
      <div id="red"></div>
      <div id="yellow"></div>
      <div id="green"></div>
      <button onClick={nextColor}>NEXT</button>
    </div>
  );
}

export default Semaforo;
