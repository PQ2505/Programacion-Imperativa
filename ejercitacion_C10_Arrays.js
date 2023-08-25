//Ejercicios

//¿Qué devuelven estas líneas de código?
// En este ejercicio deberás pensar qué devuelven éstas líneas de códigos sin probarlos en la consola.

let numbers =[22, 33, 54, 66, 72];
console.log(numbers[numbers.length])
//Arroja undefined porque no tiene posicion 5

let grupoDeAmigos = [ "Harry", "Ron", "Hermione", "Spiderman", "Hulk", "Ironman","Penélope Glamour", "Pierre Nodoyuna","Patán" ]
console.log(grupoDeAmigos[5])
//Devuelve la posicion 5 que en este caso seria Ironman 

let str = "un string cualquiera"
let arrayAleatorio= ["Digital", "House", "true", "string", "123","false", "54", str ]
console.log(arrayAleatorio[arrayAleatorio.length - 1])
//Devuelve el ultimo elemento del array, que en este caso seria el string que se agrega al final llamado srt

// Colecciones de películas (y más…)
// El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto. Para esto, deberás:
// Crear la estructura adecuada para guardar las siguientes películas:

let peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
console.log(peliculas[4]);

//Más tarde, de producción dieron el aviso de que las películas deberían estar todas en mayúsculas. Para esto solicitan que crees una función que reciba por parámetro un array y convierta el contenido de cada elemento a mayúsculas.

let arrayToUpperCase = (arrayPeliculas)=>{
    for(let i=0; i<arrayPeliculas.length; i++){
        arrayPeliculas[i] = arrayPeliculas[i].toUpperCase()
    }
    return arrayPeliculas
}
console.log(arrayToUpperCase(peliculas));

// Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que crear otra estructura similar a la primera, pero con las siguientes películas animadas:
// 	"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros, para poder agregar los elementos contenidos en el segundo array dentro del primero, y así retornar un solo array con todas las películas como sus elementos.
// Importante: las películas animadas también deberían convertirse a mayúsculas.

let animadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

let uniendo =(arrayUno, arrayDos)=>{
  for(let i = 0; i< arrayDos.length; i++){
    arrayUno.push(arrayDos[i]) 
  }
  return arrayToUpperCase(arrayUno)
}
console.log(uniendo(peliculas, animadas));

// Durante el proceso, uno de los desarrolladores advierte que el último elemento del array de películas animadas es un videojuego. Ahora tenés que editar el código y modificarlo de manera que puedas eliminar ese último elemento antes de migrar el contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.
