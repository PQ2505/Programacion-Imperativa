// ESTRUCTURAS DE CONTROL

// if - else

// superadmin ---> acceso a todo
// admin ----> acceso a casi todo
// cliente ---> acceso a solo una parte

const determinarAcceso = (rolUsuario) => {
  if (rolUsuario === "superAdmin") {
    return "acceso a todo";
  } else if (rolUsuario === "admin") {
    return "acceso a casi todo";
  } else if (rolUsuario === "cliente") {
    return " acceso solo a una parte";
  } else {
    return "no tienes acceso a nada";
  }
};

let resultadoAcceso = determinarAcceso("cliente");
console.log(resultadoAcceso);

// ternario
// Una funcion que determine si salgo con sobrilla o no
// Si el clima esta lluvioso -----> Si, llevalo
// Si el clima no esta lluvioso ----> No, no lo lleves

const llevoParaguas = (clima) => {
  //  if (clima === "lluvioso"){
  //     return "Si, llevalo"
  //  }else{
  //     return  "No, no hace falta"
  // }
  return clima === "lluvioso" ? "Si, llevalo" : "No, no hace falta";
};

let resultado = llevoParaguas("No lluvioso");
console.log(resultado);

// como escribir un ternario
// condicion ? verdadero : falso
// ASI QUEDARIA: debe ir dentro del scope - Bloque
// return clima === "lluvioso" ? "Si, llevalo" : "No, no hace falta"

// switch ----> case

// base el impuesto ---> 100
// vw ---> 10
// audi ---> 20
// volvo ---> 30
// renault --> 40
// bmw ---> 50
// tesla ---> 60
// por defecto si no es ninguna de estar marcas esta exento

const determinarImpuesto = (marcaDeAuto) => {
  let impuesto = 100;

  switch (marcaDeAuto) {
    case "vw":
    case "audi":
      impuesto += 10;
      break;
    case "volvo":
      impuesto += 30;
      break;
    default:
      impuesto = 0;
  }

  return impuesto > 0
    ? impuesto
    : `Su auto ${marcaDeAuto} esta exento y el total a pagar es ${impuesto}`;
};

let resultado2 = determinarImpuesto("cualquiercosa");
console.log(resultado2);
