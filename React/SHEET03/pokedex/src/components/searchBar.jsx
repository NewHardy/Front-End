import "./searchBar.css";

const searchBar = ({ setFilter }) => {
  const sendHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="yes">
      <input
        type="text"
        placeholder="Search for your pokemon"
        onChange={sendHandler}
      />
    </div>
  );
};

export default searchBar;
