import "./pokemon.css";

const Card = ({ image, id, name, types, evo }) => {
  return (
    <div className="card">
      <div className="cardTop">
        <img src={image} alt="YES" className="img" />
        <p className="id">ID/{id}</p>
      </div>
      <div className="cardBottom">
        <h3 className="name">{name}</h3>
        <ul className="types">
          {types.map((type, yes) => (
            <li key={yes}>{type.type.name}</li>
          ))}
        </ul>
        <div className="evo">
          <p className="evoFrom">Evolutions from:</p>
          <p className="evoName">{evo}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
