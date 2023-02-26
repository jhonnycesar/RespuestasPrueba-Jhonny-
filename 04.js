/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

var arrayNumeros = [1,2,3];
function doble(array) {
  // la funcion recibe un array de numeros enteros y debe devolver otro arreglo con el doble de cada valor
  // ej:
  //doble([1, 2, 3]) devuelve [2, 4, 6]
  // Tu código aca:
  var resp = [];
  array.forEach(x => resp.push(x*2));
  return resp;
}


// No modifiques nada debajo de esta linea //

module.exports = doble