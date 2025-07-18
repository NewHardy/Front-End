import React, { useState, useEffect } from "react";

function RelojDigital() {
  const [hora, setHora] = useState(new Date());
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(counter + 1);
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    //return () => clearInterval(intervalo);
  }, []);
  const finalHora = hora.toLocaleTimeString();

  return <div>{finalHora}</div>;
}

export default RelojDigital;
