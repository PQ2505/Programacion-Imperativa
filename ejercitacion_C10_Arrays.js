//Ejercicios

//¿Qué devuelven estas líneas de código?
// En este ejercicio deberás pensar qué devuelven éstas líneas de códigos sin probarlos en la consola.

let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]);
//Arroja undefined porque no tiene posicion 5

let grupoDeAmigos = [
  "Harry",
  "Ron",
  "Hermione",
  "Spiderman",
  "Hulk",
  "Ironman",
  "Penélope Glamour",
  "Pierre Nodoyuna",
  "Patán",
];
console.log(grupoDeAmigos[5]);
//Devuelve la posicion 5 que en este caso seria Ironman

let str = "un string cualquiera";
let arrayAleatorio = [
  "Digital",
  "House",
  "true",
  "string",
  "123",
  "false",
  "54",
  str,
];
console.log(arrayAleatorio[arrayAleatorio.length - 1]);
//Devuelve el ultimo elemento del array, que en este caso seria el string que se agrega al final llamado srt

// Colecciones de películas (y más…)
// El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto. Para esto, deberás:
// Crear la estructura adecuada para guardar las siguientes películas:

let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];
console.log(peliculas[4]);

//Más tarde, de producción dieron el aviso de que las películas deberían estar todas en mayúsculas. Para esto solicitan que crees una función que reciba por parámetro un array y convierta el contenido de cada elemento a mayúsculas.

let arrayToUpperCase = (arrayPeliculas) => {
  for (let i = 0; i < arrayPeliculas.length; i++) {
    arrayPeliculas[i] = arrayPeliculas[i].toUpperCase();
  }
  return arrayPeliculas;
};
console.log(arrayToUpperCase(peliculas));

// Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que crear otra estructura similar a la primera, pero con las siguientes películas animadas:
// 	"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros, para poder agregar los elementos contenidos en el segundo array dentro del primero, y así retornar un solo array con todas las películas como sus elementos.
// Importante: las películas animadas también deberían convertirse a mayúsculas.

let animadas = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];

let uniendo = (arrayUno, arrayDos) => {
  for (let i = 0; i < arrayDos.length; i++) {
    arrayUno.push(arrayDos[i]);
  }
  return arrayToUpperCase(arrayUno);
};
let arrayUnido = uniendo(peliculas, animadas);
console.log(arrayUnido);

// Durante el proceso, uno de los desarrolladores advierte que el último elemento del array de películas animadas es un videojuego. Ahora tenés que editar el código y modificarlo de manera que puedas eliminar ese último elemento antes de migrar el contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.

let eliminando = arrayUnido.pop();
// console.log(eliminando);
console.log(arrayUnido);

// Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
// Te piden crear una función que compare las calificaciones e indique si son iguales o diferentes. Te confirman que están en el orden adecuado y que solo traen valores numéricos del 1 al 10.
// PD: los elementos de los scores tanto de Asia como de Europa corresponden en orden al del array resultante de combinar películas con películas animadas. Es decir, el primer elemento del array de películas general corresponde al primer elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.

let comparar = () => {
  for (let i = 0; i < arrayUnido.length; i++) {
    console.log("PELICULA:", arrayUnido[i]);
    if (asiaScores[i] === euroScores[i]) {
      console.log(`Calificación Igual: ${asiaScores[i]}`);
    } else {
      console.log(`Calificación diferente: ${asiaScores[i]}, ${euroScores[i]}`);
    }
  }
};
comparar();

//Array inverso
// Creá la función imprimirInverso que tome un array como argumento y que imprima en la consola cada elemento en orden inverso (no tenés que invertir el array).

let imprimirInverso = (arrayIn) => {
  for (let i = arrayIn.length - 1; i >= 0; i--) {
    const element = arrayIn[i];
    console.log(element);
  }
};
let arrayNumeros = [1, 2, 3, 4, 5];
imprimirInverso(arrayNumeros);

//Creá la función inversor que tome un array como argumento y devuelva uno nuevo invertido.

let inversor = (array) => {
  let arrayNuevo = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const elemento = array[i];
    arrayNuevo.push(elemento);
  }
  return arrayNuevo;
};

console.log(inversor(arrayNumeros));

// sumaArray()
// En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de números (3 elementos) y devuelva la suma de todos ellos.

let sumaArray = (array) => {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    suma += element;
  }
  return suma;
};
console.log(sumaArray(arrayNumeros));

// Simulación Array.join()
// En este ejercicio deberás crear una función llamada join() que reciba un arreglo de strings de 4 elementos y simule el comportamiento del método Array.join()

let join = (arrayLetras) => {
  let texto = "";
  for (let i = 0; i < arrayLetras.length; i++) {
    const elementos = arrayLetras[i];
     texto += elementos;
  }
  return texto
};

let array1=["L","O","I","N","T","E","N","T","O"]
console.log(join(array1));