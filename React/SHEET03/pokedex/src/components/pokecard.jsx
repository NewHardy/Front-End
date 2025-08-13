import "./pokecard.css";
import { use, useState } from "react";

const Card = ({ image, pokeId, name, types, evo }) => {
  const [details, toggleDetails] = useState(false);

  function capitalize(txt) {
    if (!txt) {
      return txt;
    }
    return txt[0].toUpperCase() + txt.slice(1).toLowerCase();
  }

  const handleDivClick = async (event) => {
    console.log("NO");
    const id = event.target.id;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    const pokeId = data.id;
    const name = data.name;
    console.log({ pokeId });
    return (
      <>
        <div>
          <p>{pokeId}</p>
          <p>{name}</p>
        </div>
      </>
    );
  };

  return (
    <div id={pokeId} className="card" onClick={() => toggleDetails(!details)}>
      {!details ? (
        <>
          <div className="cardTop">
            <img src={image} alt="YES" className="img" />
            <p className="id">ID/{pokeId}</p>
          </div>
          <div className="cardBottom">
            <h3 className="name">{capitalize(name)}</h3>
            <ul className="types">
              {types.map((type, yes) => (
                <li key={yes}>{type.toUpperCase()}</li>
              ))}
            </ul>
            {evo && (
              <div className="evo">
                <p className="evoFrom">Evolutions from:</p>
                <p className="evoName">{evo}</p>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="details">
            <img src={image} alt="no image" />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
