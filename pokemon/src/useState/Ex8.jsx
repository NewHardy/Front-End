import { useState, useEffect } from "react";
import "./Ex8.css";

function Ex8() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode((prev) => !prev)}>
      {darkMode ? "claro" : "oscuro"}
    </button>
  );
}

export default Ex8;
