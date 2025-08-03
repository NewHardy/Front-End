import "./navbuttons.css";

const NavButtons = ({ offset, size, setOffset }) => {
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
        disabled={size - offset <= 21}
      >
        Next
      </button>
    </div>
  );
};
export default NavButtons;
