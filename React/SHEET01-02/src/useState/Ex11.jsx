import { useState } from "react";

function Ex11() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errores, setErrores] = useState([]);

  const validar = () => {
    const newErr = [];

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErr.push("Email no valido");
    }

    if (password.length < 6) {
      newErr.push("Contrasena muy corta");
    }

    setErrores(newErr);
    return newErr.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      alert("Well Done");
      setEmail("");
      setPassword("");
      setErrores([]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contrasena"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Entrar</button>

      {errores.map((err, i) => (
        <div key={i}>{err}</div>
      ))}
    </form>
  );
}

export default Ex11;
