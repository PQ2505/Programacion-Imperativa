// Integrantes
// Juan Camilo Luis Gonzalez
// Lina María Ruiz Calle
// Nidia paola Quiroga Perez
// Raul Garcia
// Viridiana Barbosa

console.log("-------------- Nivel 1 --------------")
// NIVEL -- 1
const sumar = (numeroUno, numeroDos) => numeroUno + numeroDos
const restar = (numeroUno, numeroDos) => numeroUno - numeroDos
const multiplicar = (numeroUno, numeroDos) => numeroUno * numeroDos
const dividir = (numeroUno, numeroDos) => numeroUno / numeroDos

// NIVEL -- 2
console.log("-------------- Testeo de Operaciones M5 / Calculadora --------------")
console.log("-------------- Nivel 2 --------------")
let x = 10;
let y = 11;
let z = 12;
let a = 2;

let resultadoSuma = sumar(x,x)
let resultadoResta = restar(x,z)
let resultadoMulti = multiplicar(y,a)
let resultadoDivision = dividir(z,a)

console.log(resultadoSuma)
console.log(resultadoResta)
console.log(resultadoMulti)
console.log(resultadoDivision)

// Si llegamos hasta aquí, podemos quedarnos tranquilos con lo realizado. A continuación desarrollaremos funciones extras a nuestra calculadora, en las cuales utilizaremos las funciones ya creadas. Podemos realizar la prueba de estas luego de desarrollar cada una.
// Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número como parámetro y deberá retornar ese número elevado al cuadrado.
// Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()

const cuadradoDeUnNumero = numero => multiplicar (numero,numero)
let resultadoCuadrado = cuadradoDeUnNumero(5)
console.log(resultadoCuadrado)

// Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio de 3 números, que serán ingresados por parámetro.
// Importante: promedioDeTresNumeros() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.

const sumarTresNumeros = (numeroUno, numeroDos, numeroTres) => numeroUno + numeroDos + numeroTres
const promedioDeTresNumeros = (numUno, numDos, numTres) => dividir((sumarTresNumeros(numUno, numDos, numTres)),3)
let resultadoPromerdioTresNumeros = promedioDeTresNumeros(50,40,30)
console.log(resultadoPromerdioTresNumeros)

// Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
// Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
// Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.

const calcularPorcentaje = (numeroTotal, porcentaje) => multiplicar (numeroTotal, dividir(porcentaje,100))
let resultadoPorcentaje = calcularPorcentaje(300,15)
console.log(resultadoPorcentaje)

// Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá retornar el porcentaje del primero con respecto al segundo.
// Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora.
// Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de 200.

const generadorDePorcentaje = (valorUno, valorDos) => dividir (multiplicar (100,valorUno), valorDos)
let resultadoGenerador = generadorDePorcentaje(500,1000)
console.log(resultadoGenerador)

// ¡Felicidades! Logramos aplicar y comprender conceptos que nos servirán a lo largo de nuestra carrera. Ahora nos queda pensar en mejoras para nuestra calculadora con los conocimientos que adquiriremos en el futuro.