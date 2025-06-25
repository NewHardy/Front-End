import React, { useState } from "react";
import "./Ex4.css";

function Semaforo() {
  const [color, changeColor] = useState("red");
  const colours = ["red", "yellow", "green"];

  function nextColor() {
    const currentIndex = colours.indexOf(color);
    let nextIndex = currentIndex + 1;
    if (nextIndex === colours.length) nextIndex = 0;
    changeColor(colours[nextIndex]);
  }
  return (
    <div id="box">
      <div
        id="red"
        style={{ backgroundColor: color === "red" ? "red" : "gray" }}
      ></div>
      <div
        id="yellow"
        style={{ backgroundColor: color === "yellow" ? "yellow" : "gray" }}
      ></div>
      <div
        id="green"
        style={{ backgroundColor: color === "green" ? "green" : "gray" }}
      ></div>
      <button onClick={nextColor}>NEXT</button>
    </div>
  );
}

export default Semaforo;
