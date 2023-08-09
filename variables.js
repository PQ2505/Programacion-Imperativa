// VARIABLES -----> let y const

let edad = 25; // palabra reservada + nombre de la variable = valor // puede cambiar su valor
const apellido = "perez"; // no puede cambiar su valor

console.log(edad);
console.log(apellido);

edad = edad + 1;
console.log(edad);

//Esto no se puede porque es una constante
// apellido = "otra cosa"
// console.log(apellido);

// TIPOS DE DATOS ----> PRIMITIVOS

// STRING : Cadena de texto
let nombre = "paola"; //los textos deben ir en comilas ya sean simples o dobles

// NUMBER : Numeros
let numeroDeLaSuerte = 2;

// BOOLEAN : True o False
let isLogged = true;

// UNDEFINED : Algo que aun no se ha definido
let nombreDeUsuario = undefined;
// nombreDeUsuario = "Paola Q."
console.log(nombreDeUsuario);

// NULL : No tiene nada diferente al undefined
// let datos =

// NaN : Not a Namber
// let p  = 1
// let y = "pepe"

// let z = p * y
// console.log(z);

// OPERADORES
// Matematicos: Los tipicos tambien los puedo usar para operar en JS

let n1 = 12;
let n2 = 6;

console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);

// MODULO %
console.log(n1 % n2);

// CONCATENAR : Juntar palabras unirlas

let saludo = "hola" + " " + nombre + " " + "como estas?";

console.log(saludo);

// TEMPLATE LITERALS ---> BACKSTICKS
let saludoBien = `hola ${nombre} como estas?`;
console.log(saludoBien);

// LINK ---> comparacion ---> SIEMPRE DEVUELVE UN BOOLEANO

let numeroUno = 5;
let numeroDos = "5";
// console.log( numeroUno == numeroDos) // ---> simple
// console.log( numeroUno != numeroDos) // ---> simple

console.log(numeroUno === numeroDos); // ---> estricta
console.log(numeroUno !== numeroDos); // ---> estricta
// console.log( numeroUno > numeroDos)
// console.log( numeroUno < numeroDos)
// console.log( numeroUno >= numeroDos)
// console.log( numeroUno <= numeroDos)

console.log("------------");
// LINK ---> logicos
// FALSY´s ---> 0 --- "" --- undefined --- null
// TRUTHY´s ---> 1 --- "mama"

// AND ---> &&

let estaLogueado = false;
let esAdmin = false;

// SE QUEDA CON EL ULTIMO TRUTHY SI SON TODOS TRUTHY
// SE QUEDA CON EL PRIMER FALSY
let tienePermiso =
estaLogueado === true && 0 && undefined && esAdmin === true && "mama" && 1;
console.log(tienePermiso);

// OR ---> ||
let tienePermisoDos = false || false || 0 || "mama" || "";
console.log(tienePermisoDos);

// NOT ---> !

let f = false;
console.log(!f);
