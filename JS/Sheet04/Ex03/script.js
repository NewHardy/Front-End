function add() {
  const list = document.getElementById("list");
  const item = document.createElement("li");
  item.textContent = "item";
  list.appendChild(item);
}
function eliminate() {
  const list = document.getElementById("list");
  list.removeChild(list.lastChild);
}
