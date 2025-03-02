const days = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];
for (let i = 0; i < days.length; i++) {
  console.log(days[i]);
}

const numbers = [1, 5, 67, 43, 3, 6, 89, 7654, 324, 5432, 2];
function sumator(massive) {
  let TOTALITY = 0;
  for (let i = 0; i < massive.length; i++) {
    TOTALITY += massive[i];
  }
  return TOTALITY;
}
console.log(sumator(numbers));
