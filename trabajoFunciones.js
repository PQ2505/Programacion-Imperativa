// ANCHOR ---------> Mini desafio #1
function test1(x, y) {
  return y - x;
}

test1(10, 40);
// Respuesta 30

// ANCHOR -----------> Mini desafio #2
function test2(x, y) {
  return x * 2;
  console.log(x);
  return x / 2;
}

test2(10);
// Respuesta 20

// ANCHOR Ejercicio 1
//Crear una función que convierta pulgadas en centímetros. Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

const pulgadas_a_centimetros = (pulgada) => {
  return pulgada * 2.54;
};

// ANCHOR Ejercicio 2
//Crear una función que recibe un string y lo convierte en una URL.  Ej: “pepito” es devuelto como “http://www.pepito.com”

const URL = (texto) => {
  return `http://www.${texto}.com`;
};

// ANCHOR Ejericio 3
// Crear una función que recibe un string y devuelve la misma frase pero con admiración.

const admiracion = (texto) => {
  return `¡¡${texto}!!`;
};
