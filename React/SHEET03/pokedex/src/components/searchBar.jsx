import { useState } from "react";

const searchBar = () => {
  const [lf, setLf] = useState("");

  const sendHandler = (e) => {
    setLf(e.target.value);
  };

  return (
    <form onSubmit={sendHandler}>
      <input
        type="text"
        placeholder="Search for your pokemon"
        onChange={(e) => setLf(e.target.value)}
      />
    </form>
  );
};

export default searchBar;
