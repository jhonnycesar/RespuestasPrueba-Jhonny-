/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

let invitados = {
  Luna:{
    edad: 25
  },
  Sebas:{
    edad: 7
  },
  Marce:{
    edad: 3
  },
  Nicky:{
    edad: 15
  }
}

function cuantosMenores(invitados) {
  // La funcion llamada recibe como argumento un objeto 'invitados', en el objeto tenemos objetos que representan los invitados
  // a una fiesta en donde todos tienen una propiedad "edad" .
  // debe retornar la cantidad de invitados que son menores de 18.
  // Por ej:
  // let invitados = {
  //     Luna: {
  //         edad: 25
  //     },
  //     Sebas: {
  //         edad: 7
  //     },
  //     Marce: {
  //         edad: 34
  //     },
  //     Nicky: {
  //         edad: 15
  //     }
  // };
  // cuantosMenores(invitados) devuelve 2
  // Tu código aca:

  var cantidadEdades = Object.values(invitados);
  return cantidadEdades.filter(e => e.edad < 18).length;  
}


// No modifiques nada debajo de esta linea //

module.exports = cuantosMenores