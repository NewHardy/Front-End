import "./pokecard.css";

const Card = ({ image, id, name, types, evo }) => {
  function capitalize(txt) {
    if (!txt) {
      return txt;
    }
    return txt[0].toUpperCase() + txt.slice(1).toLowerCase();
  }

  return (
    <div className="card">
      <div className="cardTop">
        <img src={image} alt="YES" className="img" />
        <p className="id">ID/{id}</p>
      </div>
      <div className="cardBottom">
        <h3 className="name">{capitalize(name)}</h3>
        <ul className="types">
          {types.map((type, yes) => (
            <li key={yes}>{type.type.name.toUpperCase()}</li>
          ))}
        </ul>
        {evo && (
          <div className="evo">
            <p className="evoFrom">Evolutions from:</p>
            <p className="evoName">{evo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
