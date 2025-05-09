function alternarTodos() {
    const cajas = document.querySelectorAll(".caja");

    cajas.forEach(caja => {
      caja.classList.toggle("activo");
    });
  }