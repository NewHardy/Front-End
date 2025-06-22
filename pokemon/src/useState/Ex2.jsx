import React, { useState } from "react";

function fillForm() {
  const [userInfo, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(change) {
    const { name, value } = change.target;
    setInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    setMessage(
      `Name: ${userInfo.name}\nEmail: ${userInfo.email}\nPassword: ${userInfo.password}`
    );
    console.log(message);
    alert(message);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default fillForm;
