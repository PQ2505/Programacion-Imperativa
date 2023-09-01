console.log("EJERCICIO 1");
// Realizar una función llamada restarPares que reciba por parámetro dos valores numéricos. 
// Si ambos números recibidos son pares entonces se deberá retornar el resultado de restarle al primer parámetro el segundo. 
// Si alguno o los dos no son pares , se deberá retornar un string que diga “Lo siento, uno o mas parámetros no son pares”

const restarPares = (valorUno, valorDos) => {
  if (valorUno % 2 === 0 && valorDos % 2 === 0) {
    return valorUno - valorDos;
  }else {
    return "Lo siento, uno o mas parámetros no son pares"
  }
};

let resultadoEjUno = restarPares(3,2)
console.log(resultadoEjUno);

console.log("EJERCICIO 2");
// Debemos poder controlar el acceso a un recital de música para una determinada persona. Para eso, debemos realizar una función  que reciba dos parámetros
// La edad de la persona, Number
// Si tiene o no, el ticket de entrada , booleano
// La función deberá evaluar las siguientes condiciones y retornar en cada caso lo que se pida:
// Si tiene entrada y es mayor o igual de 18 años: retorna un valor booleano true.
// Si tiene entrada pero es menor de 18 años: retorna un string que diga “Sólo puedes acceder con un adulto acompañante”.
// Si no tiene entrada: retorna un booleano false.

const controlRecital = (edad, ticket) => {
 if(ticket){
    return edad >= 18 ? true : "Sólo puedes acceder con un adulto acompañante";
 }
 return false;
}

let paseNopase = controlRecital(18,false)
console.log(paseNopase);

console.log("EJERCICIO 3");

//Dado el siguiente arreglo de objetos: 
let productos = [
    {
        producto : "remera",
        tipo: "indumentaria",
        precio: 2100
    },
    {
        producto : "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto : "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto : "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto : "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto : "tablet",
        tipo: "tecnologia",
        precio: 60000
    },
]
// Realizar una función que reciba un array como parámetro, y lo recorra para filtrar los productos que sean de tipo “tecnologia” y que su precio sea mayor o igual a 50000, la función deberá retornar un nuevo arreglo con los productos que cumplan con las condiciones antes mencionadas.

let filtrandoProductos = (array) => {
    let arrayFiltrado = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].tipo == "tecnologia" && array[i].precio >= 50000) {
        arrayFiltrado.push(array[i]);
      }
    }
    return arrayFiltrado;
  };

  let prodTecnologicos = filtrandoProductos(productos)
  console.log(prodTecnologicos);

