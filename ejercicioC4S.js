// Clase C4S Ejercitación Mesas de Trabajo
const prompt = require("prompt-sync")({ sigint: true });
let nombre = prompt("¿Cual es tu nombre?");
console.log(nombre);

// Salir a correr a una pista de atletismo
let climaLluvioso = false;

// Elejir el calzado 
let tipoCalzado = "Running";
let talla = prompt("¿Cual es tu talla de zapatilla?");

// Pago por la inscripción o ingreso 
let socio = true;

// Outfit para correr segun condicion climatica
if (climaLluvioso){
    console.log(`Hola ${nombre} en clima lluvioso usa gorra y zapatos para lluvia` );
}
else {
    console.log(`Hola ${nombre} en clima soleado usa bloqueador solar, gorra y zapatos cómodos` );
}  

// Ejercicio 2 

const nombre2 = "Laura"
console.log("Esteban")
console.log(nombre2)

// La diferencia es que al imprimir nombre2 hacemos que la variable sea dinámica. La mejor opción es la linea 28.

// Ejercicio 3 extra

let cajonRemera = "pantalones"
let cajonPantalones = "remeras"
let cajonCambio = null

cajonCambio = cajonRemera;
cajonRemera = cajonPantalones;
cajonPantalones = cajonCambio;

console.log(cajonRemera);
console.log(cajonPantalones);
