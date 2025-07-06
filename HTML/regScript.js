function registrarUsuario(event) {
  const email = document.getElementById("email").value;
  const usuario = document.getElementById("usuario").value;
  const contrasena = document.getElementById("contrasena").value;
  const confirmar = document.getElementById("confirmarContrasena").value;

  if (contrasena !== confirmar) {
    alert("Las contrasenas no coinciden");
    return;
  }

  const user = {
    username: usuario,
    email: email,
    password: contrasena,
  };

  fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}
