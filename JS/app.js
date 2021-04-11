var nombre;
var edad;
var peso;
var altura;
var solucion;
var resultadoInput;

function calcIMC() {
    nombre = document.getElementById("nombre").value;
    edad = document.getElementById("edad").value;
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    solucion = (peso / (altura * altura));
    solucion = solucion.toFixed(2);

    console.log("Su IMC es: " + solucion);
    resultadoInput = document.getElementById("resultado");
    resultadoInput.value = solucion;
    return false;
}

