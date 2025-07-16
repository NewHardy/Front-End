import { useEffect, useState } from "react";

const Ex7 = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  function scrollHandler() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <>
      <h2 style={{ position: "fixed" }}>{scrollY}</h2>
      <div style={{ height: "20000px" }}></div>
    </>
  );
};

export default Ex7;
