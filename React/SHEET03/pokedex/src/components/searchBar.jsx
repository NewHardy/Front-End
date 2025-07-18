import { useState } from "react";

const searchBar = ({ setFilter }) => {
  const sendHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for your pokemon"
      onChange={sendHandler}
    />
  );
};

export default searchBar;
