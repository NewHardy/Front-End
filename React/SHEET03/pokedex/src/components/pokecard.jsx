import "./pokecard.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Card = ({ image, pokeId, name, types, evo }) => {
  const [details, toggleDetails] = useState(false);

  function capitalize(txt) {
    if (!txt) {
      return txt;
    }
    return txt[0].toUpperCase() + txt.slice(1).toLowerCase();
  }

  const navigate = useNavigate();

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
            <button
              className="moreInfo"
              onClick={() => {
                navigate(`/pokeinfo/${pokeId}`);
              }}
            >
              More Info
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
