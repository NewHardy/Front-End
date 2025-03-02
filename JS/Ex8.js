const person = { nombre: "Andrey", age: 15, city: "MARS" };

function perosn_recognizer(people) {
  return people.nombre + " " + people.age + " " + people.city;
}

console.log(perosn_recognizer(person));
