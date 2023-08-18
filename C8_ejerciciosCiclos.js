//  Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.

const diezSig = (numero) => {
  for (let i = 0; i < 10; i++) {
    numero += 1;
    console.log(numero);
  }
};

diezSig(1);

console.log("----------------");

// Imprimir los números entre el 5 y el 20, saltando de tres en tres.

const tresEnTres = () => {
  for (let i = 5; i <= 20; i += 3) {
    console.log(i);
  }
};

tresEnTres();

console.log("----------------");

// Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100

const sumatoria = () => {
  let sumaUnoUno = 0;
  for (let i = 0; i <= 100; i++) {
    sumaUnoUno += i;
  }
  console.log(sumaUnoUno);
};

sumatoria()

console.log("----------------");

// Dado un número entero positivo, mostrar su factorial. El factorial de 
// Un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.

const factorial = (numero) => {
    let operacion = 1
    for (let i = 2 ; i <= numero ; i++){
        operacion = operacion * i 
    }
    console.log(operacion);
}

factorial(3)

