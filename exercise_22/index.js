/*Ordenar y Buscar en un Array Ingresado por el Usuario
🎯 Enunciado:
Crea una aplicación donde el usuario ingrese números separados por comas:

Ordene los números de menor a mayor.

Busque un número dentro del array y diga si está presente o no.
*/

function ordenarArray(arr) {
    // COMPLETAR
}

function manejarOrdenamiento() {
    const input = document.getElementById("inputArray");
    const resultado = document.getElementById("resultadoOrden");
    resultado.textContent = `Ordenado: ${ordenarArray(input.value)}`;
    // COMPLETAR
}

function buscarEnArray() {
    // COMPLETAR
}

if (typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", () => {
        // Completar: Asignar el evento
    });
}

module.exports = { ordenarArray, manejarOrdenamiento,buscarEnArray };