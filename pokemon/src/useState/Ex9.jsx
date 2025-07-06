import { useState } from "react";

function Buttons({ onadd, onsub, onres }) {
  return (
    <div>
      <button onClick={onadd}>+</button>
      <button onClick={onsub}>-</button>
      <button onClick={onres}>Reset</button>
    </div>
  );
}

function Ex9() {
  const [contador, setContador] = useState(0);

  const add = () => setContador((prev) => prev + 1);
  const sub = () => setContador((prev) => prev - 1);
  const res = () => setContador(0);

  return (
    <div>
      <h1>Coutn {contador}</h1>
      <Buttons onadd={add} onsub={sub} onres={res} />
    </div>
  );
}

export default Ex9;
