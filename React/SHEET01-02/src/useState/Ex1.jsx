import React, { useState } from "react";

function contador() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>NUMBER {count} !!!</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>RESET</button>
    </div>
  );
}
export default contador;
