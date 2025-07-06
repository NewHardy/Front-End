import { useState } from "react";

function List({ items, onadd }) {
  return (
    <div>
      <h2>List</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => onadd(item)}>Add to Favs</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Ex10() {
  const [favs, setfavs] = useState([]);
  const elements = ["yes1", "yes2", "yes3", "yes4"];

  const addFavs = (item) => {
    if (!favs.includes(item)) {
      setfavs((prev) => [...prev, item]);
    }
  };

  return (
    <div>
      <List items={elements} onadd={addFavs} />

      <h2>FAVS</h2>
      <ul>
        {favs.map((fav, i) => (
          <li key={i}>{fav}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ex10;
