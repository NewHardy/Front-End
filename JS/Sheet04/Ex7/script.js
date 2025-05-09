function cambiarColor() {
    const cajas = document.querySelectorAll(".caja");
    cajas.forEach(function(caja) {
      caja.style.backgroundColor = "yellow";
    });
  }