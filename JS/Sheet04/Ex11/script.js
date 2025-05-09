const lista = document.getElementById("tareas");
    const elementos = lista.querySelectorAll("li");

    elementos.forEach(function (item) {
      item.addEventListener("click", function () {
        elementos.forEach(el => el.classList.remove("seleccionado"));
        this.classList.add("seleccionado");
      });
    });