import "./pokeInfo.css";

const PokeInfo = () => {
  return (
    <>
      <div className="back">
        <div className="infoCard">
          <h1 className="name">NAME</h1>
          <p className="id">ID/</p>

          <div className="image-container">
            <img src="img.jpg" alt="no image" />
          </div>

          <div className="details">
            <p>
              <strong className="statName">Weight:</strong>{" "}
              <p className="value">10</p>
            </p>
            <p>
              <strong className="statName">Height:</strong>{" "}
              <p className="value">100</p>
            </p>
            <p>
              <strong className="statName">Ability:</strong>{" "}
              <span className="value"> attack</span>
            </p>
          </div>

          <div className="stats">
            <div className="stat-col">
              <p>
                <strong>HP: 50</strong>
              </p>
              <p>
                <strong>Attack: 75</strong>
              </p>
            </div>
            <div className="stat-col">
              <p>
                <strong>Defence: 40</strong>
              </p>
              <p>
                <strong>Attack Esp: 74</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeInfo;
