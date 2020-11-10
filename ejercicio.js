"use strict"

BigNumber.config({ DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP });

// DefiniciÃ³n de constantes
var FMT_ENTERO = "0,0",
  FMT_NUMERO = "0,0.00",
  FMT_MONEDA = "$0,0.00",
  FMT_PORCENTAJE = "0.00%";

var forma = document.getElementById("forma");

var salidaSuma = document.getElementById("salidaSuma");
var salidaResta = document.getElementById("salidaResta");
var salidaMultip = document.getElementById("salidaMultiplicacion");
var salidaDiv = document.getElementById("salidaDivision");


Node.prototype.error = function (mensaje) {
  this.className = "error";
  this.textContent = mensaje;
};
Node.prototype.info = function (mensaje) {
  this.className = "";
  this.textContent = mensaje;
};


function procesa() {



  var valor1 = forma["primero"].valueAsNumber ? forma["primero"].valueAsNumber :
    parseDouble(forma["primero"].value);

  var valor2 = forma["segundo"].valueAsNumber ? forma["segundo"].valueAsNumber :
    parseDouble(forma["segundo"].value);


  var error = false;

  if (isNaN(valor1)) {
    error = true;
    salidaEntero.error("Entero Incorrecto");
  }
  if (isNaN(valor2)) {
    error = true;
    salidaEntero.error("Rango Incorrecto");
  }

  if (!error) {



    var resultadoSuma = new BigNumber(valor1).plus(valor2);
    var resultadoResta = new BigNumber(valor1).minus(valor2);
    var resultadoMulti = new BigNumber(valor1).times(valor2);
    var resultadoDiv = new BigNumber(valor1).div(valor2);


    salidaSuma.info("Resultado Suma : $" + numeral(resultadoSuma).format(FMT_ENTERO));
    salidaResta.info("Resultado Resta: $" + numeral(resultadoResta).format(FMT_ENTERO));
    salidaMultip.info("Resultado Multiplicacion : $" + numeral(resultadoMulti).format(FMT_ENTERO));
    salidaDiv.info("Resultado Division: $" + numeral(resultadoDiv).format(FMT_NUMERO));
  }
}