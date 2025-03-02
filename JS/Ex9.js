function invertString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function contarVocales(str) {
  let contador = 0;
  let vocales = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vocales.includes(str[i])) {
      contador++;
    }
  }
  return contador;
}

const String = "Hola";
