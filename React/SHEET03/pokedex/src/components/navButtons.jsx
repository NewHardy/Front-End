import "./navbuttons.css";

const NavButtons = ({ offset, setOffset }) => {
  return (
    <div className="navContainer">
      <button
        className="prev"
        onClick={() => setOffset(offset - 20)}
        disabled={offset === 0}
      >
        Prev
      </button>
      <button
        className="next"
        onClick={() => setOffset(offset + 20)}
        disabled={offset === 1000}
      >
        Next
      </button>
    </div>
  );
};
export default NavButtons;
