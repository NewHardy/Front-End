import React, { useState, useEffect } from "react";

function RelojDigital() {
  const [hora, setTime] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return <div>{hora}</div>;
}

export default RelojDigital;
