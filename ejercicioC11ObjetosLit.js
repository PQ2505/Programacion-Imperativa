let banco = {
  clientes: [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ],

  consultarCliente: function (titular) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === titular) {
        return this.clientes[i];
      }
    }
  },

  deposito: function (titular, cantidad) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === titular) {
        this.clientes[i].saldoEnPesos += cantidad;
        console.log(
          "Deposito realizado, su nuevo saldo es " +
            this.clientes[i].saldoEnPesos
        );
      }
    }
  },

  extraccion: function (titular, monto) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titularCuenta === titular) {
        this.clientes[i].saldoEnPesos -= monto;

        if (this.clientes[i].saldoEnPesos < 0) {
          console.log("Fondos insuficientes");
        } else {
          console.log(
            "Extraccion realizada correctamente, su nuevo saldo es " +
              this.clientes[i].saldoEnPesos
          );
        }
      }
    }
  },
};

let clienteEncontrado = banco.consultarCliente("Ramon Connell");

console.log(clienteEncontrado);

banco.deposito("Ramon Connell", 25);

banco.extraccion("Ramon Connell", 8700);

/*---------CALCULADOR DE NOTAS ---------*/

let alumno = {
  nombre: "pepe",
  numeroDeLegajo: 2,
  listaDeNotas: [5, 8, 2],

  promedio: function () {
    let total = 0;
    for (i = 0; i < this.listaDeNotas.length; i++) {
      total += this.listaDeNotas[i];
    }
    let resultado = total / this.listaDeNotas.length;
    if (resultado >= 7) {
      console.log("Felicidades, aprobÃ³ con un promedio de " + resultado);
    } else {
      console.log("Reprobado con promedio de " + resultado);
    }
  },
};
alumno.promedio();
