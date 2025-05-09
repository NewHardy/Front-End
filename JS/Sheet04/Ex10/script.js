const campoCorreo = document.getElementById("correo");

    campoCorreo.addEventListener("blur", function () {
      if (campoCorreo.value.trim() === "") {
        campoCorreo.classList.remove("exito");
        campoCorreo.classList.add("error");
        campoCorreo.setCustomValidity("Este campo debe estar relleno");
      } else {
        campoCorreo.classList.remove("error");
        campoCorreo.classList.add("exito");
        campoCorreo.setCustomValidity("");
      }
    });