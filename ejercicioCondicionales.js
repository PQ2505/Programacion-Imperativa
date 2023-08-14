// Ingresar al bar

const ingresarBar = (edad) => {
  if (edad % 2 === 1) {
    console.log("¿Sabías que tu edad es impar?");
  }
  if (edad <= 0) {
    return "Error, edad inválida. Por favor ingrese un número válido.";
  } else if (edad < 18) {
    return "No puede pasar al bar";
  } else if (edad < 21) {
    return "Puede pasar al bar, pero no puede tomar alcohol";
  } else if (edad === 21) {
    return "Bienvenido puedes entrar, y tambien te felicitamos por llegar a la mayoria de edad";
  } else {
    return "Puede pasar al bar y tomar alcohol";
  }
};

let resultadoIngresoBar = ingresarBar(23);
console.log(resultadoIngresoBar);

// Total a pagar

function totalAPagar(vehiculo, litrosConsumidos) {
  let totalAPagar = 0;
  if (vehiculo === "coche") {
    totalAPagar = 86;
  } else if (vehiculo === "moto") {
    totalAPagar = 70;
  } else if (vehiculo === "autobus") {
    totalAPagar = 55;
  }
  return litrosConsumidos <= 25 ? totalAPagar + 50 : totalAPagar + 25;
}

let resultadoPago = totalAPagar("autobus", 26);
console.log(resultadoPago);

// Local de Sandwiches

const precioSandwich = (
  base,
  pan,
  queso,
  tomate,
  lechuga,
  cebolla,
  mayonesa,
  mostaza
) => {
  let totalPedido = 0;

  switch (base) {
    case "pollo":
      totalPedido = 150;
      break;
    case "carne":
      totalPedido = 200;
      break;
    case "veggie":
      totalPedido = 100;
      break;
  }
  switch (pan) {
    case "blanco":
      totalPedido += 50;
      break;
    case "negro":
      totalPedido += 60;
      break;
    case "s/gluten":
      totalPedido += 75;
      break;
  }
  if (queso) {
    totalPedido += 20;
  }
  if (tomate) {
    totalPedido += 15;
  }
  if (lechuga) {
    totalPedido += 10;
  }
  if (cebolla) {
    totalPedido += 15;
  }
  if (mayonesa) {
    totalPedido += 5;
  }
  if (mostaza) {
    totalPedido += 5;
  }
  return totalPedido;
};

let totalPagoCliente = precioSandwich(
  "pollo",
  "negro",
  true,
  false,
  true,
  false,
  true,
  true
);
console.log(totalPagoCliente);

// Extra Bonus
// 1. ¿Cual es el número secreto?

function numberSecret(num) {
  aleatorio = Math.floor(Math.random() * 10);
  if (num === aleatorio) {
    return "¡¡Felicitaciones acertaste!!";
  } else {
    return `No acertaste, intentalo de nuevo. El número que ingresaste fue ${num} y el número correcto era ${aleatorio}`;
  }
}

let resultadoNum = numberSecret(2);
console.log(resultadoNum);

//2. abrirParacaidas()

const abrirParacaidas = (velocidad, altura) => {
  return velocidad < 1000 && altura >= 2000 && altura < 3000
    ? "Abrir paracaidas"
    : "No abrir paracaidas";
};

let paracaidas = abrirParacaidas(1100, 4000);
console.log(paracaidas);

//Estructura switch
//1. Traductor Condicional

const traductor = (palabra) => {
  switch (palabra) {
    case "casa":
      return "home";
    case "perro":
      return "dog";
    case "pelota":
      return "ball";
    case "arbol":
      return "tree";
    case "genio":
      return "genius";
    default:
      return "La palabra ingresada es incorrecta";
  }
};

let traduciendo = traductor("casa");
console.log(traduciendo);

//2. Valoración de Películas

const valoracion = (calificacion) => {
  switch (calificacion) {
    case "Muy Mala":
      return "Calificaste la película como Muy Mala. Lo lamentamos mucho";
    case "Mala":
      return "Calificaste la película como Mala. Lo lamentamos mucho";
    case "Mediocre":
      return "Calificaste la película como Mediocre. Lo lamentamos mucho";
    case "Buena":
      return "Calificaste la película como Buena. Nos alegramos mucho";
    case "Muy Buena":
      return "Calificaste la película como Muy Buena. Nos alegramos mucho";
    default:
      return "Ingresaste un valor inválido";
  }
};

let valoracionPelis = valoracion("no");
console.log(valoracionPelis);
