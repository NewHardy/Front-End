import { useState, useEffect } from "react";

function Ex13() {
  const [secretNum, setSecretNum] = useState(genNum());
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  function genNum() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const tryhandler = (e) => {
    e.preventDefault();
    const num = parseInt(guess);
    if (num === secretNum) {
      setMessage("GOOOD!");
    } else {
      setMessage(num < secretNum ? "Muy bajo" : "Muy alto");
    }
  };

  useEffect(() => {
    if (message === "GOOOD!") {
      const t = setTimeout(() => {
        setSecretNum(genNum());
        setMessage("");
        setGuess("");
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [message]);

  return (
    <form onSubmit={tryhandler}>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button>Try</button>
      <div>{message}</div>
    </form>
  );
}

export default Ex13;
