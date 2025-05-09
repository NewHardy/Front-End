function textCheck() {
  const name = document.getElementById("nombre").textContent;
  if (name == "") {
    const error = document.getElementById("error");
    error.textContent = "PORFAVOR, rellena el campo :)";
    error.style.color = "blue";
    error.style.display = "grid";
  }
}
