let valor = 0;

    function actualizarContador() {
      document.getElementById("contador").textContent = valor;
    }

    function incrementar() {
      valor++;
      actualizarContador();
    }

    function decrementar() {
      valor--;
      actualizarContador();
    }