/* Cronómetro con Inicio, Pausa y Reinicio
🎯 Enunciado:
Crea un cronómetro con botones de Inicio, Pausa y Reinicio.

Al hacer clic en Inicio, el cronómetro debe comenzar a contar.

Al hacer clic en Pausa, el tiempo debe detenerse.

Al hacer clic en Reiniciar, debe volver a 0:00.
*/

let tiempo = 0;
let intervalo = null;

function iniciarCronometro() {
    // COMPLETAR: Iniciar el cronómetro y actualizar el DOM cada segundo
}

function pausarCronometro() {
    // COMPLETAR: Detener el cronómetro sin reiniciar el tiempo
}

function reiniciarCronometro() {
    // COMPLETAR: Reiniciar el tiempo a 0 y actualizar el DOM
}


if (typeof document !== 'undefined') {
    document.addEventListener("DOMContentLoaded", () => {
        // Completar: Asignar el evento
    });
}

module.exports = { iniciarCronometro, pausarCronometro, reiniciarCronometro };